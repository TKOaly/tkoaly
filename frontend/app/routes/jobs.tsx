import dayjs from "dayjs";
import { Link, Outlet, useLoaderData } from "remix";
import { sdk } from "~/api";
import { GetJobsQuery } from "~/api/cms.sdk";

let data;

export const loader = async ({ request }: any): Promise<GetJobsQuery> => {
  const url = new URL(request.url);
  const expired = url.searchParams.get("expired");
  const showExpired = expired === "on";
  const today = new Date();
  const jobs = await sdk().GetJobs({
    endDate: showExpired ? undefined : today,
  });
  return jobs;
};

export default function Index() {
  const data = useLoaderData<GetJobsQuery>();

  return (
    <main className="flex gap-6 mt-6 place-content-center">
      <section className="job-list">
        <form method="GET">
          <label>
            <input type="checkbox" name="expired" />
            Show expired jobs
          </label>
          <input type="submit" />
        </form>
        <ul className="flex flex-col gap-2">
          {data.jobs.map((job) => (
            <li>
              <Link to={job.id}>
                <div className="w-96 container bg-white rounded-md shadow-lg transform transition duration-300 hover:shadow-2xl p-2 flex flex-col">
                  <h1 className="text-1xl mt-2 ml-4 font-bold text-gray-800 cursor-pointer hover:text-gray-900 transition duration-100">
                    {job.title}
                  </h1>
                  <span className="ml-4 mt-1 mb-1 text-gray-700 hover:underline cursor-pointer">
                    {job.company?.name ?? ""}
                  </span>
                  <span className="ml-4 mb-1">
                    Apply before: {dayjs(job.endDate).format("DD.MM.")}
                  </span>
                  <div className="flex gap-2 ml-4">
                    {job.tags.map((tag) => (
                      <span className="text-white text-xs font-bold rounded-lg bg-green-500 inline-block py-1.5 px-4 cursor-pointer">
                        {tag.name}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-white rounded-md shadow-lg p-4 w-[60rem]">
        <Outlet />
      </section>
    </main>
  );
}
