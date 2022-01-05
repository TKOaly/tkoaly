import { KeystoneContext } from "@keystone-6/core/types";
import { raw } from "./jobs";

import { A } from "@mobily/ts-belt";
import dayjs from "dayjs";

interface Tag {
  name: string;
}

interface Company {
  name: string;
  sponsored: boolean;
  website: string;
}

interface Job {
  title: string;
  content: object;
  startDate: Date | undefined | null;
  endDate: Date | undefined | null;
  url: string | null;
  company: string;
  tags: string[];
}

const createDocumentObject = (content: string) => [
  {
    type: "paragraph",
    children: [{ text: content }],
  },
];

export async function insertSeedData(context: KeystoneContext) {
  console.log(`🌱 Inserting seed data`);

  const tags = raw.flatMap(({ tags }) =>
    tags.map(({ name }) => ({ name: name.toLocaleLowerCase() }))
  );

  const uniqueTags: Readonly<Tag[]> = A.uniqBy(tags, (tag) => tag.name);

  const companies = A.map(raw, ({ company }) => ({
    name: company.name,
    sponsored: company.sponsored,
    website: company.website,
  }));

  const uniqueCompanies = A.uniqBy(companies, (company) => company.name);

  const jobs: Readonly<Job[]> = A.map(raw, (job) => ({
    title: job.title,
    url: job.url,
    startDate: job.begin ? dayjs(job.begin, "YYYY-MM-DD").toDate() : undefined,
    endDate: job.end ? dayjs(job.end, "YYYY-MM-DD").toDate() : undefined,
    content: createDocumentObject(job.description ?? ""),
    tags: job.tags.map(({ name }) => name),
    company: job.company.name,
  }));

  const createTags = async (tagData: Readonly<Tag[]>) => {
    await context.prisma.tag.createMany({
      data: tagData,
      skipDuplicates: true,
    });
  };

  const createCompanies = async (companyData: Readonly<Company[]>) => {
    await context.prisma.company.createMany({
      data: companyData,
      skipDuplicates: true,
    });
  };

  const createJobs = async (jobData: Readonly<Job[]>) => {
    for await (const job of jobData) {
      const tags = await context.query.Tag.findMany({
        where: { name: { in: job.tags } },
        query: "id",
      });

      const company = await context.query.Company.findOne({
        where: { name: job.company },
        query: "id",
      });

      const creatableJob = {
        ...job,
        tags: tags.length > 0 ? { connect: { id: tags[0].id } } : undefined,
        company: { connect: { id: company.id } },
      };

      const res = await context.query.Job.createOne({
        data: creatableJob,
      });
    }
  };

  await createTags(uniqueTags);
  await createCompanies(uniqueCompanies);
  await createJobs(jobs);

  process.exit();
}
