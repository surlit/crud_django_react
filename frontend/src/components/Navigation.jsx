import {Link,useLocation} from "react-router-dom"

export  function Navigation() {
  
  const location = useLocation();

  return (
    <div className=" py-3 text-white">
          <div className="flex  justify-center w-full">
            <Link to="/tasks" className="ml-10">
              <h1 className="font-bold text-5xl mb-4">Task App</h1>
            </Link>
          </div>
          {
            location.pathname == '/tasks' &&
            <div className="flex  justify-end">
                <button className="bg-indigo-800 hover:bg-indigo-400 p-5 text-3x1 rounded-lg ">
                <Link to="/tasks-create" className="text-white">Create Task</Link>
              </button>
            </div>
          }
    </div>
  )
}
