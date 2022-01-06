import { useLoaderData } from "remix";
import { sdk } from "~/api";
import { GetJobQuery } from "~/api/cms.sdk";
import { DocumentRenderer } from "@keystone-6/document-renderer";
import dayjs from "dayjs";

export const loader = async ({ params }: any): Promise<GetJobQuery> => {
  const job = await sdk().GetJob({
    jobId: params.id,
  });
  return job;
};

export default function Index() {
  const data = useLoaderData<GetJobQuery>();

  return (
    <div>
      <header className="mb-4">
        <h1 className="text-2xl mt-2 font-bold text-gray-800">
          {data.job.title}
        </h1>
        {data.job.company && (
          <span className="text-1xl text-gray-700 ">
            {data.job.company?.name}
          </span>
        )}
      </header>
      {data.job.html ? (
        <div dangerouslySetInnerHTML={{ __html: data.job.html }} />
      ) : (
        <DocumentRenderer document={data.job.content.document} />
      )}
      {data.job.endDate && (
        <div className="mt-4">
          <span>Application deadline:</span>{" "}
          {dayjs(data.job.endDate).format("DD.MM.YYYY")}
        </div>
      )}
      {data.job.url && (
        <a
          className="text-white text-xl font-bold rounded-lg bg-green-500 inline-block py-2 px-5 mt-4 cursor-pointer"
          href={data.job.url}
        >
          Apply
        </a>
      )}
    </div>
  );
}
