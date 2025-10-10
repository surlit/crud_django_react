import React, { useEffect } from 'react'
import {deleteTask,updateTask} from '../api/tasks.api'
export default function TasksCard({
    key,
    data
}) {
  useEffect(()=>{
    console.log('data');
    console.log(data);
  })
  async function deleteTask (e){
      console.log("e.target");      
      console.log(e.target);      
      
      console.log("en delete");      
      console.log(data.id);
      // deleteTask(data.id)
  }
  async function doneTask(e) {
      console.log("e.target");      
      console.log(e.target);      

      console.log("en done");            
      console.log(data.id);
      // updateTask(data.id,{title:data.title,description:data.description,done:data.done})
  }
  return (
    <div key={key} id={data.id}className='mr-5 border-white border rounded-lg  text-xl text-center mb-1' >
        <h3>{data.title} </h3>
        <p>{data.description}</p>
        <p>{data.done ? 'hecho ' : 'No hecho '}</p>
        <p><button  onClick={doneTask}>{data.done ? '❌' : '✅'}</button></p>
        <p><button onClick={deleteTask}>🗑️</button></p>
    </div>
  )
}
