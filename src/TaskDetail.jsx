import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "./componets/Title";

function TaskDetail() {
  const [searchParams] = useSearchParams();

  const title = searchParams.get("title");

  const description = searchParams.get("description");

  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen bg-slate-500 p-6 justify-center flex">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6 text-slate-100">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 bottom-0"
          >
            <ChevronLeftIcon />
          </button>
          <Title>Task Detail</Title>
        </div>
        <div className="bg-slate-200 p-4 rounded-md">
          <h1 className="text-xl font-bold text-slate-600">{title}</h1>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskDetail;
