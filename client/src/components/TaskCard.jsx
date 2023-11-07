import { useNavigate } from "react-router-dom";

export function TaskCard({ task }) {
  const navigate = useNavigate();

  return (
<<<<<<< HEAD
    <div
      key={task.id}
      style={{ backgroundColor: "purple" }}
      onClick={() => {
        navigate(`/tasks/${task.id}`);
      }}
    >
      <h1>{task.title}</h1>
      <h4>{task.description}</h4>
      <hr />
    </div>
=======
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
>>>>>>> 6be62b3e15ec525ca912e61b8070810ec5f3a4f8
  );
}
