import { useNavigate } from "react-router-dom";

export function TaskCard({ task }) {
  const navigate = useNavigate();

  return (
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
  );
}
