import { useNavigate } from "react-router-dom";

export function TaskCard({ task }) {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-sky-800 p-3 hover:bg-sky-700 hover:cursor-pointer"
        key={task.id}
        onClick={() => {
          navigate(`/tasks/${task.id}`);
        }}
      >
        <h1 className="font-bold uppercase text-cyan-500">{task.title}</h1>
        <h4>{task.description}</h4>
      </div>
    </>
  );
}
