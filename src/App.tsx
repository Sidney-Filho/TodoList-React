import { useState } from 'react'
import './App.css'
import logo from './assets/Logo.svg'
import plus from './assets/plus.svg'
import Task from './components/Task'

function App() {

  const [text, setText] = useState("")
  const [tasks, setTasks] = useState<string[]>([])
  const [createdTasks, setCreatedTasks] = useState<number>(0)
  const [completedTasks, setCompletedTasks] = useState<number>(0)

  function handleAddTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if(!text.trim()) {
      window.alert('Por favor, insira o texto da tarefa.')
      return
    }

    const taskExists = tasks.some(task => task === text)

    if(taskExists) {
      window.alert("Esta tarefa já existe!")
    } else {
      setTasks(prevTasks => [...prevTasks, text])
      setText("")
      console.log(text)
      setCreatedTasks(prevCreatedTasks => prevCreatedTasks + 1)
    }
  }

  function handleDeleteTask(id: number) {
    const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== id)
    setTasks(updatedTasks)
    setCreatedTasks(prevCreatedTasks => prevCreatedTasks - 1)
  }

  function handleCompleteTask(id: number, isComplete: boolean) {
    setCompletedTasks(prevCompletedTasks => isComplete ? prevCompletedTasks + 1 : prevCompletedTasks - 1)
  }


  return (
    <div>
    <div className='bg-neutral-950 flex justify-center items-center h-56'>
      <img src={logo} alt="Logo" className='pb-6' />
    </div>
    <form onSubmit={handleAddTask} className='mt-[-25px] flex justify-center items-center w-full gap-3'>
      <input
        type="text"
        className='border-none bg-neutral-800 text-white placeholder:text-gray300 p-3 rounded-md shadow-md w-3/5 focus-within:border-none'
        placeholder='Adicione uma nova tarefa'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className='p-3 text-white flex justify-center items-center gap-2 bg-blue-500 rounded-md'
      >
        Criar
        <img src={plus} alt="Icone Adicionar" />
      </button>
    </form>

    <div className="flex justify-around w-full mt-20">
      <div className="flex gap-2 justify-center items-center">
        <span className="rounded-xl bg-zinc-700 px-2 text-white">
          {createdTasks}
        </span>
        <p className="text-blue-400">Tarefas Criadas</p>
      </div>

      <div className="flex gap-2 justify-center items-center">
        <span className="rounded-xl bg-zinc-700 px-2 text-white">
          {completedTasks}
        </span>
        <p className="text-purple-400">Concluídas</p>
      </div>
    </div>

    {tasks.map((task, index) => (
      <Task
        key={index}
        text={task}
        onDeleteTask={() => handleDeleteTask(index)}
        onCompleteTask={handleCompleteTask}
        index={index}
      />
    )) }
  </div>
  )
}

export default App
