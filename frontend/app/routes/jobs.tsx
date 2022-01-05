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
    <main>
      <h1>TKO-aly</h1>
      <div className="job-container">
      <section className="job-list">
        <ul className="card-container">
          {data.jobs.map((job) => (
            <li className="card">
              <Link to={job.id}>
                <div className="content">
                  <b className="title">{job.title}</b>
                  <span className="company">{job.company?.name ?? ""}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="job-description">
        <Outlet />
      </section>
      </div>
    </main>
  );
}
