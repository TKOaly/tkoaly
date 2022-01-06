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

export function headers() {
  return {
    "X-Stretchy-Pants": "its for fun",
    "Cache-Control": "max-age=30000, s-maxage=360000",
  };
}

export default function Index() {
  const { job } = useLoaderData<GetJobQuery>();
  return <JobDescriptionCard job={job} />;
}
