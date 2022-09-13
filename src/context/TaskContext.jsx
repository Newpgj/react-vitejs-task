import {createContext, useState, useEffect} from 'react';
import {Task as data} from '../data/tasks';

export const TaskContext=createContext();
export function TaskContextProvider(props) {
    const [tasks, setTask] = useState([]);
    const createTask=(task)=>{
        setTask([...tasks, {
          title: task.title,
          id: tasks.length, 
          description: task.descripcion
          /*
          title: task.title.length === 0 ? task.title : "Tarea defualt",
          id: tasks.length,
          description: "" ? task.descripcion: "description default" 
          */
        }]);
    }
    const deleteTask=(taskId)=>{
        console.log("Se esta eliminando: ",taskId);
        setTask(tasks.filter(task => task.id !==taskId));
    }
    useEffect(()=>setTask(data),[])
  return (
    <TaskContext.Provider value={{
        tasks,
        deleteTask,
        createTask
    }}>
        {props.children};
    </TaskContext.Provider>
  )
}
