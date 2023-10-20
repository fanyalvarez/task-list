import { useForm } from "react-hook-form";
import { createTask, deleteTask, updateTask, getTask } from "../api/tasks.api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export function TasksFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();
  console.log(params);

  //manejar los datos cada que se envien
  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      const resUpdate = await updateTask(params.id, data);
      console.log(resUpdate, "actualizando");
    } else {
      const resCreate = await createTask(data);
      console.log(resCreate);
    }
    navigate("/tasks/");
  });

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const { data } = await getTask(params.id);
        console.log("get data");
        setValue("title", data.title);
        setValue("description", data.description);
      }
    }
    loadTask();
  }, []);
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="title"
          {...register("title", { required: true })}
        />
        {errors.title && <span>this field is required</span>}

        <textarea
          rows="3"
          placeholder="description"
          {...register("description", { required: true })}
        ></textarea>
        {errors.description && <span>this field is required</span>}

        <button>Save</button>
      </form>

      {params.id && (
        <button
          onClick={async () => {
            const accepted = window.confirm("Are you sure?");
            if (accepted) {
              await deleteTask(params.id);
              navigate("/tasks");
            }
          }}
        >
          Delete
        </button>
      )}
    </>
  );
}
