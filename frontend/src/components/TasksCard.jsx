import React, { useEffect } from 'react'

export default function TasksCard({
    key,
    data
}) {
  useEffect(()=>{
    console.log('data');
    console.log(data);
  })
  async function deleteTask (e){
      console.log("e en delete");      
      console.log(e.target);
      
  }
  async function doneTask(e) {
      console.log("e en done");      
      console.log(e.target);
    
  }
  return (
    <div key={key} className='mr-5 border-white border rounded-lg  text-xl text-center mb-1' >
        <h3>{data.title} </h3>
        <p>{data.description}</p>
        <p>{data.done ? 'hecho ' : 'No hecho '}</p>
        <p><button onClick={doneTask}>{data.done ? '❌' : '✅'}</button></p>
        <p><button onClick={deleteTask}>🗑️</button></p>
    </div>
  )
}
