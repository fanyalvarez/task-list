import { useForm } from "react-hook-form";
import { createTask, deleteTask, updateTask, getTask } from "../api/tasks.api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

export function TasksFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();
  // console.log(params);

  //manejar los datos cada que se envien
  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      const resUpdate = await updateTask(params.id, data);
      // console.log(resUpdate, "actualizando");

      //mostrar promps
      toast.success("Task created", {
        position: "top-center",
        style: {
          position: "top-center",
          backgroundColor: "rgb(22 101 52)",
          color: "whitesmoke",
        },
      });
    } else {
      const resCreate = await createTask(data);
      // console.log(resCreate);

      //mostrar promps
      toast.success("Task created", {
        style: {
          position: "top-center",
          backgroundColor: "rgb(22 101 52)",
          color: "whitesmoke",
        },
      });
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
      <div className="max-w-xl mx-auto">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Title"
            {...register("title", { required: true })}
            className="outline-sky-800 block mb-4 rounded-md p-2 w-full text-sky-800"
          />
          {errors.title && <span>this field is required</span>}

          <textarea
            rows="4"
            placeholder="Description"
            {...register("description", { required: true })}
            className="outline-sky-800 block mb-4 rounded-md p-2 w-full text-sky-800"
          ></textarea>
          {errors.description && <span>this field is required</span>}

          <button className="bg-sky-600 px-3 py-2 rounded-lg hover:bg-sky-700 w-full mt-3">
            Save
          </button>
        </form>

        {params.id && (
          <div className="flex justify-end">
            <button
              className="bg-red-600 px-3 py-2 rounded-lg hover:bg-sky-700 w-48 mt-3"
              onClick={async () => {
                const accepted = window.confirm("Are you sure?");
                if (accepted) {
                  await deleteTask(params.id);
                  //mostrar promps
                  toast.success("Task deleted", {
                    style: {
                      position: "top-center",
                      backgroundColor: "rgb(22 101 52)",
                      color: "whitesmoke",
                    },
                  });
                  //despues navega
                  navigate("/tasks");
                }
              }}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </>
  );
}
