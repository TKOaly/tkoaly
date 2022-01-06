import { useLoaderData } from "remix";
import { sdk } from "~/api";
import { GetJobQuery } from "~/api/cms.sdk";
import { JobDescriptionCard } from "~/components/job-description-card";

export const loader = async ({ params }: any): Promise<GetJobQuery> => {
  const job = await sdk().GetJob({
    jobId: params.id,
  });
  return job;
};

export default function Index() {
  const { job } = useLoaderData<GetJobQuery>();
  return <JobDescriptionCard job={job} />;
}
