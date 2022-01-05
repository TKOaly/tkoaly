import { useLoaderData } from "remix";
import { sdk } from "~/api";
import { GetJobQuery } from "~/api/cms.sdk";
import mainStyles from "~/styles/main.css";
import { DocumentRenderer } from "@keystone-6/document-renderer";

export const loader = async ({ params }: any): Promise<GetJobQuery> => {
  const job = await sdk().GetJob({
    jobId: params.id,
  });
  return job;
};

export const links = () => {
  return [{ rel: "stylesheet", href: mainStyles }];
};

export default function Index() {
  const data = useLoaderData<GetJobQuery>();

  return (
    <div>
      <header>
        <h2>{data.job.title}</h2>
        {data.job.company && <span>{data.job.company?.name}</span>}
      </header>
      <DocumentRenderer document={data.job.content.document} />
    </div>
  );
}
