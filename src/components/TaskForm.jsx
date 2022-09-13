import {useState, useContext} from 'react';
import {TaskContext} from '../context/TaskContext'
function TaskForm() {
    const [title, settitle] = useState("");
    const [descripcion, setdescripcion] = useState("")
    const {createTask} = useContext(TaskContext);
    const handleSubmit =(e)=> {
        e.preventDefault();
        console.log(title);
        let vacio= title.length==0 && descripcion.length==0;
        vacio ? console.log("no se envianran los datos, llena los campos"): createTask({
          title: title.length==0 ? "tarea defualt" : title, 
          descripcion: descripcion.length==0 ? "descripcion defualt" : descripcion
      });
        
        settitle('');
        setdescripcion('');
    };
    
    
  return (
    <div className='max-w-md mx-auto'>
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className='text-2xl font-bold text-white mb-3'>Crear tu tarea</h1>
        <input placeholder="Escribe tu tarea" onChange={e => settitle(e.target.value)} value={title} autoFocus className='bg-slate-300 p-3 w-full mb-2'/>
        <textarea placeholder='Escribe la descripciond de la tarea' onChange={ e=> setdescripcion(e.target.value)} value={descripcion} className='bg-slate-300 p-3 w-full mb-2'></textarea>
        <button className='bg-indigo-500 px-3 py- text-white'>Guardar</button>
      </form>
    </div>
  )
}

export default TaskForm