import { useLoaderData } from "remix";
import { sdk } from "~/api";
import { GetLatestJobQuery } from "~/api/cms.sdk";
import { JobDescriptionCard } from "~/components/job-description-card";

export const loader = async (): Promise<GetLatestJobQuery> => {
  const job = await sdk().GetLatestJob();
  return job;
};

export function headers() {
  return {
    "X-Stretchy-Pants": "its for fun",
    "Cache-Control": "max-age=30000, s-maxage=360000",
  };
}

export default function Index() {
  const data = useLoaderData<GetLatestJobQuery>();
  return <JobDescriptionCard job={data.jobs[0]} />;
}
