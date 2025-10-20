import {useEffect} from 'react'
import {useForm} from 'react-hook-form'
import {createTask,deleteTask,updateTask,getTask} from '../api/tasks.api'
import {data, useNavigate, useParams} from 'react-router-dom'
import {toast} from 'react-hot-toast'

export  function TaskFormPage() {
 const {register,handleSubmit,formState:{errors},setValue} = useForm()
 const navigate = useNavigate()
 
 const params = useParams()
 
 const onSubmit = handleSubmit( async data=> {
    
    if(params.id){
      await updateTask(params.id,data)
      toast.success('Tarea Actualizada',{position:"bottom-right",
        style:{
          background:'#101010',
          color:'white'
        }
      })
    }else{
      
      data.title = data.title.toLocaleUpperCase()
      await createTask(data)
      
      toast.success('Tarea Creada',{position:"bottom-right",
        style:{
          background:'#101010',
          color:'white'
        }
      })
      
    }
    navigate('/tasks')
}) 
useEffect( ()=>{
  async function getTaskF(){
    if(params.id){
      const {data:{title,description}} =  await getTask(params.id)    
      setValue('title',title)
      setValue('description',description)
      
     }
  }
  getTaskF();
},[])
  return (
    <>
      <div className='max-w-xl mx-auto text-white text-center'>
      <h1 className='mb-2'>Create Task</h1>
      <form onSubmit={onSubmit}>
          <input 
            className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
            type="text" placeholder="title" 
            {...register('title',{required:true})}
          />
          
          {errors.title && <span>Title es required</span>}
          <textarea 
            className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
            rows="3" 
            placeholder="Description" 
            {...register('description',{required:true})}
            />
            {errors.description && <span>Description es required</span>}
          <button
            className='bg-indigo-800 hover:bg-indigo-400 p-3 rounded-lg block w-full mt-3 cursor-pointer'
          >
            <span className='text-white'>Save </span>
          </button>
          
          {
            params.id && 
            <div className='flex justify-end'>
              <button
                className='bg-red-500 p-3 rounded-lg w-48 mt-3 text-white'
                onClick={async () => {
                    const aceppt = window.confirm('are you sure ')
                  if(aceppt){
                    await deleteTask(params.id)
                    toast.success('Tarea Elimanada',{
                      position:"bottom-right",
                      style:{
                        background:'#101010',
                        color:'white'
                      }
                    }
                    )
                  }
                }
                }
                
                
              >
                Delete
              </button>
            </div>
          }
          </form>
      </div>
    
    </>   
  )
}
