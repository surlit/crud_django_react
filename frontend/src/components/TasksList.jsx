import {useEffect, useState} from 'react'
import { getAllTasks } from '../api/tasks.api';
import TasksCard from './TasksCard';


export default function TasksList() {
    const [tasksState,setTasks] = useState([])
    useEffect(() => {
        async function  loadTasks() {
            const res = await getAllTasks();
            setTasks(res.data)
        }
        loadTasks();
    }, []);
    
    async function deleteTaskP (){

    }
    
    async function doneTaskP (){

    }
  return (
    
    <div 
        className=' grid-cols-3 gap-3 flex-column text-white'
    >
        
        {tasksState.map(task => (
            <TasksCard
                key={task.id}  
                data={task}
                deleteTaskP={() => deleteTaskP}
                DoneTaskP={() => DoneTaskP}
            />
        ))}
        
    </div>
    
  )
}
