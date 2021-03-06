import dayjs from "dayjs";
import { useState } from "react";
import {
  Form,
  Link,
  Outlet,
  useLoaderData,
  useSearchParams,
  useSubmit,
} from "remix";
import { sdk } from "~/api";
import { GetJobsQuery } from "~/api/cms.sdk";

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

export function headers() {
  return {
    "X-Stretchy-Pants": "its for fun",
    "Cache-Control": "max-age=30000, s-maxage=360000",
  };
}

export default function Jobs() {
  const data = useLoaderData<GetJobsQuery>();
  const [searchParams] = useSearchParams();
  console.log("searchParams: ", searchParams.toString());
  const submit = useSubmit();
  const expired = searchParams.get("expired");

  return (
    <main className="flex gap-6 mt-6 place-content-center">
      <section className="job-list">
        <Form method="get" id="job-filter">
          <label>
            Show expired jobs
            <input
              type="checkbox"
              name="expired"
              id="show-expired"
              className="ml-2"
              onChange={(e) => submit(e.currentTarget.form)}
              defaultChecked={expired === "on"}
            />
          </label>
        </Form>

        <ul className="flex flex-col gap-2">
          {data.jobs.map((job) => (
            <li key={job.id}>
              <Link to={job.id + `?${searchParams.toString()}`}>
                <div className="w-96 container bg-white rounded-md shadow-lg transform transition duration-300 hover:shadow-2xl p-2 flex flex-col">
                  <h1 className="text-1xl mt-2 ml-4 font-bold text-gray-800 cursor-pointer hover:text-gray-900 transition duration-100">
                    {job.title}
                  </h1>

                  {job.company && (
                    <span className="ml-4 mb-1 text-gray-700 hover:underline cursor-pointer">
                      {job.company?.name ?? ""}
                    </span>
                  )}

                  <span className="ml-4 mb-1">
                    Apply before: {dayjs(job.endDate).format("DD.MM.")}
                  </span>

                  <div className="flex gap-1 ml-4">
                    {job.tags.map((tag) => (
                      <span
                        key={tag.id}
                        className="text-white text-xs font-bold rounded-lg bg-green-500 inline-block py-1.5 px-4 cursor-pointer"
                      >
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
      <div>
        <Outlet />
      </div>
    </main>
  );
}
