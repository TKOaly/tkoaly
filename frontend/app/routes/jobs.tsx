import { Link, Outlet, useLoaderData } from "remix";
import { sdk } from "~/api";
import { GetJobsQuery } from "~/api/cms.sdk";
import mainStyles from "~/styles/main.css";

export const loader = async (): Promise<GetJobsQuery> => {
  const jobs = await sdk().GetJobs();
  return jobs;
};

export const links = () => {
  return [{ rel: "stylesheet", href: mainStyles }];
};

export default function Index() {
  const data = useLoaderData<GetJobsQuery>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>TKO-aly</h1>
      <main>
        <Outlet />
      </main>

      <ul>
        {data.jobs.map((job) => (
          <li>
            <Link to={job.id}>{job.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
