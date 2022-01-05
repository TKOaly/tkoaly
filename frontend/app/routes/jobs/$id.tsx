import { useLoaderData } from "remix";
import { sdk } from "~/api";
import { GetJobQuery } from "~/api/cms.sdk";
import mainStyles from "~/styles/main.css";
import { DocumentRenderer } from "@keystone-6/document-renderer";

export const loader = async ({ params }: any): Promise<GetJobQuery> => {
  console.log('params: ', params);
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
  console.log(data);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <DocumentRenderer document={data.job.content.document} />
    </div>
  );
}
