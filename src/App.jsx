import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
function App() {
  return (
    <main className='bg-zinc-900 h-screen'>
      <div className='container mx-auto p-10'>
        <TaskForm/>
        <TaskList/>
      </div>
    </main>
  )
}

export default App
// gracias a nuestra extension de react para react el : Es7 React solo escriber rfce y listo, otro es imp para import y tab para moverte en DE FROM al nombre
          

