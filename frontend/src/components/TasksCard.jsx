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
      // console.log(data);
    }
  })
  async function deleteTaskP (e){  
      
    
    if(data?.id){
        let tasks = tasksState.filter((task)=>task.id!=data.id)
        await deleteTask(data.id)
        setTasks([...tasks])
      }

  }
  async function doneTaskP(e) {
      
    if (data?.id){
        let tasks = tasksState.map((task)=>{
          if(task.id == data.id){
            task.done = !task.done
          }
          return task
        })
        setTasks([...tasks])
        await updateTask(data.id,{title:data.title,description:data.description,done:data.done})

      }
  }
  return (
    <div key={key} id={data.id} className='mr-5 border-white border rounded-lg  text-xl text-center mb-1 p-5 ' >
        <span className='flex justify-between '>
          <button title='Done task or not' onClick={doneTaskP}>{data.done ? '✅' : '❎'}</button> 
          <button title='Delete Task' onClick={deleteTaskP}>🗑️</button>
        </span>
      
        <h2 className='text-2xl '>{data.title}</h2>
      
        <p className=''>{data.description}</p>
        <p className=''>{data.done ? 'hecho ' : 'No hecho '}</p>
        
    </div>
  )
}
