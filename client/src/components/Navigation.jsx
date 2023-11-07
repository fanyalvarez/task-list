import { Link } from "react-router-dom"

export const Navigation = () => {
  return (
    <>
    <div>
      <Link to={"/tasks"}> <h1>Tasks</h1> </Link>
      <Link to={"/tasks-create"}><h1>Create Tasks</h1></Link>
    </div>
  </>
  )
}
