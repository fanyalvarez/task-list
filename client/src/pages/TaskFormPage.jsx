import { useForm } from "react-hook-form";
import { createTask } from "../api/tasks.api";

export function TasksFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //manejar los datos cada que se envien
  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    const resp =  await createTask(data);
    console.log(resp);
  });

  return (
    <form action="" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="title"
        {...register("title", { required: true })}
      />
      {errors.title && <span>this field is required</span>}

      <textarea
        rows="3"
        placeholder="Description"
        {...register("description", { required: true })}
      ></textarea>
      {errors.description && <span>this field is required</span>}

      <button>Save</button>
    </form>
  );
}
