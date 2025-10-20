import React, { useEffect } from 'react'

export default function TasksCard({
    key,
    data
}) {
  
  useEffect(()=>{
    console.log('data');
    console.log(data);
  })
  
  return (
    <div key={key} className='card border border-white rounded-lg  text-xl text-white text-center' id='cardCus'>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <p>{data.done ? 'hecho' : 'no hecho'}</p>
    </div>
  )
}
