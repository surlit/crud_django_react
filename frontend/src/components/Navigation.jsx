import {Link} from "react-router-dom"
export  function Navigation() {
  return (
    <div className="text-white">
        <div className="  py-3">
          <div className="flex justify-center">
            <Link to="/tasks">
              <h1 className="font-bold text-5xl mb-4">Task App</h1>
            </Link>
          </div>
          <div className="flex justify-end p-1">
              <button className="bg-indigo-800 p-10 text-3x1 rounded-lg ">
              <Link to="/tasks-create" className="text-white">create task</Link>
            </button>
          </div>
        </div>
          
        
    </div>
  )
}
