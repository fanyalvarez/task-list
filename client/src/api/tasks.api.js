import axios from "axios";

const tasksApi = axios.create({
    baseURL: "http://localhost:8000/tasks/api/v1/tasks/"
})


// return axios.get("http://localhost:8000/tasks/api/v1/tasks/")   --- se optimiza con el taskapi
export const getAllTasks = () => tasksApi.get("/")

// return axios.post("http://localhost:8000/tasks/api/v1/tasks/")  --- se optimiza con el taskapi
// export const createTask = (task) => tasksApi.post("/", task);

export const createTask = (task) => {

    return axios.post("http://localhost:8000/tasks/api/v1/tasks/", task)

}
