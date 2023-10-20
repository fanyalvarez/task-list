import { Link } from "react-router-dom"

export const Navigation = () => {
  return (
    <>
    <div className="flex justify-between py-3 mx-20">
      <Link to={"/tasks"}> <h1 className="font-bold text-3xl ">Tasks APP</h1> </Link>

      <button className="bg-sky-600 px-3 py-2 rounded-lg hover:bg-sky-700">
        <Link to={"/tasks-create"}><h1>Create Tasks</h1></Link>
      </button>
    </div>
  </>
  )
}
