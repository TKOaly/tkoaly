import { DocumentRenderer } from "@keystone-6/document-renderer";
import dayjs from "dayjs";
import { CardPropsFragment } from "~/api/cms.sdk";
import { LinkWrapper } from "./link-wrapper";

export const JobDescriptionCard: React.FC<{ job: CardPropsFragment }> = ({
  job,
}) => (
  <section className="inline-block bg-white rounded-md shadow-lg p-4 w-[60rem]">
    <header className="flex justify-between">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">{job.title}</h1>
        {job.company && (
          <LinkWrapper
            className="text-1xl text-gray-700"
            link={job.company.website}
          >
            {job.company?.name}
          </LinkWrapper>
        )}
        {job.endDate && (
          <div className="mt-1 text-gray-700">
            <span>Application deadline:</span>{" "}
            {dayjs(job.endDate).format("DD.MM.YYYY")}
          </div>
        )}
      </div>
      {job.company?.logo?.url && (
        <img
          className="object-cover"
          src={`http://localhost:3001/${job.company.logo.url}`}
        />
      )}
    </header>
    {job.url && (
      <a
        className="text-white text-xl font-bold rounded-lg bg-green-500 inline-block py-2 px-5 mt-4 cursor-pointer"
        href={job.url}
      >
        Apply
      </a>
    )}
    <div className="mb-8" />
    {job.html ? (
      <div dangerouslySetInnerHTML={{ __html: job.html }} />
    ) : (
      <DocumentRenderer document={job.content.document} />
    )}
  </section>
);
