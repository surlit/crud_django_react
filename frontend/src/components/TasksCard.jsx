import React, { useEffect } from 'react'
import {deleteTask,updateTask} from '../api/tasks.api'
export default function TasksCard({
    key,
    data,
    setTasks,
    tasksState
}) {
  useEffect(()=>{
    if(data){
      console.log('data');
      console.log(data);
    }
  })
  async function deleteTaskP (e){  
      
    
    if(data?.id){
        console.log("en delete");      
        console.log(data.id);
        await deleteTask(data.id)
        setTasks()
      }

  }
  async function doneTaskP(e) {
      
    if (data?.id){
        console.log("en done");            
        console.log(data.id);
        await updateTask(data.id,{title:data.title,description:data.description,done:data.done})

      }
  }
  return (
    <div key={key} id={data.id}className='mr-5 border-white border rounded-lg  text-xl text-center mb-1' >
        <h3>{data.title} </h3>
        <p>{data.description}</p>
        <p>{data.done ? 'hecho ' : 'No hecho '}</p>
        <p><button  onClick={doneTaskP}>{data.done ? '❌' : '✅'}</button></p>
        <p><button onClick={deleteTaskP}>🗑️</button></p>
    </div>
  )
}
