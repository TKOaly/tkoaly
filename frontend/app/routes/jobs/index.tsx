import { useLoaderData } from "remix";
import { sdk } from "~/api";
import { GetLatestJobQuery } from "~/api/cms.sdk";
import { JobDescriptionCard } from "~/components/job-description-card";

export const loader = async (): Promise<GetLatestJobQuery> => {
  const job = await sdk().GetLatestJob();
  return job;
};

export default function Index() {
  const data = useLoaderData<GetLatestJobQuery>();
  return <JobDescriptionCard job={data.jobs[0]} />;
}
