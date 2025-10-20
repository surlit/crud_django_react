import React, { useEffect, useState } from 'react'
import {deleteTask,updateTask} from '../api/tasks.api'
export default function TasksCard({
    key,
    data,
    setTasks,
    tasksState
}) {
  const [Mode,setMode] = useState('pro')

  useEffect(()=>{
    if(data && Mode == 'dev'){
      console.log('data');
      console.log(data);
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
          <button title={data.done ? 'Done task' : 'Not Done'} className='cursor-pointer rounded-full p-1 hover:bg-green-500 ' onClick={doneTaskP}>{data.done ? '✅' : '❎'}</button> 
          <button title='Delete Task' className='cursor-pointer rounded-full p-1 hover:bg-red-500 ' onClick={deleteTaskP}>🗑️</button>
        </span>
      
        <h2 className='text-2xl '>{data.title}</h2>
      
        <p className=''>{data.description}</p>
        <p className=''>{data.done ? 'Hecho ' : 'No hecho '}</p>
        
    </div>
  )
}
