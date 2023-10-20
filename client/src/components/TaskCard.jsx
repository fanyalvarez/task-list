export function TaskCard({task}) {
  return (
    <div key={task.id}>
      <h1>{task.title}</h1>
      <h4>{task.description}</h4>
      <hr />
    </div>
  );
}
