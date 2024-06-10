import { useState } from 'react'
import './App.css'
import logo from './assets/Logo.svg'
import plus from './assets/plus.svg'
import Task from './components/Task'

interface Task {
  text: string,
  isComplete: boolean;
}

function App() {

  const [text, setText] = useState("")
  const [tasks, setTasks] = useState<Task[]>([])
  const [createdTasks, setCreatedTasks] = useState<number>(0)
  const [completedTasks, setCompletedTasks] = useState<number>(0)

  function handleAddTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    // Verifica se o input está vazio
    if(!text.trim()) {
      window.alert('Por favor, insira o texto da tarefa.')
      return
    }

    // Percore o array [tasks] para ver se não há uma tarefa igual
    const taskExists = tasks.some(task => task.text === text)

    // Se a tarefa existe da um alerta, se não existe cria a tarefa
    if(taskExists) {
      window.alert("Esta tarefa já existe!")
    } else {

      // Cria um novo array de tarefas com as tarefas antigas, e a nova tarefa
      setTasks(prevTasks => [...prevTasks, {text, isComplete: false}])
      setText("")
      // Adiciona a contagem de tarefas criadas
      setCreatedTasks(prevCreatedTasks => prevCreatedTasks + 1)
    }
  }

  function handleDeleteTask(id: number) {
    const taskToDelete = tasks[id];
    if(taskToDelete.isComplete) {
      setCompletedTasks(prevCompletedTasks => prevCompletedTasks - 1)
    }

    const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== id) 
    setTasks(updatedTasks)
    setCreatedTasks(prevCreatedTasks => prevCreatedTasks - 1)
  }

  function handleCompleteTask(index: number) {
    const updatedTasks = tasks.map((task, taskIndex) => {
      if(taskIndex === index) {
        const updatedTask = {...task, isComplete: !task.isComplete}
        if(updatedTask.isComplete) {
          setCompletedTasks(prevCompletedTasks => prevCompletedTasks + 1)
        } else {
          setCompletedTasks(prevCompletedTasks => prevCompletedTasks - 1)
        }
        return updatedTask
      }
      return task
    })
    setTasks(updatedTasks)
  }


  return (
    <div>
    <div className='bg-neutral-950 flex justify-center items-center h-56'>
      <img src={logo} alt="Logo" className='pb-6' />
    </div>
    <form onSubmit={handleAddTask} className='mt-[-25px] flex justify-center items-center w-full gap-3'>
      <input
        type="text"
        className='border-none bg-neutral-800 text-white placeholder:text-gray300 p-3 rounded-md shadow-md w-2/4 focus-within:border-none'
        placeholder='Adicione uma nova tarefa'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className='p-3 text-white flex justify-center items-center gap-2 bg-darkBlue hover:bg-blue100 rounded-md'
      >
        Criar
        <img src={plus} alt="Icone Adicionar" />
      </button>
    </form>

    <div className="flex justify-around w-full mt-20">
      <div className="flex gap-2 justify-center items-center">
        <p className="text-blue-400 font-bold text-md">Tarefas Criadas</p>
        <span className="rounded-xl bg-zinc-700 px-2 py-1 text-white text-sm font-bold">
          {createdTasks}
        </span>
      </div>

      <div className="flex gap-2 justify-center items-center">
        <p className="text-purple300 font-bold text-md">Concluídas</p>
        {createdTasks > 0 ? (
          <span className="rounded-xl bg-zinc-700 px-2 py-1 text-white text-sm font-bold">
            {completedTasks} de {createdTasks}
          </span>
        ) : (
          <span className='rounded-xl bg-zinc-700 px-2 py-1 text-white text-sm font-bold'>
            {completedTasks}
          </span>
        )}
      </div>
    </div>

    {tasks.map((task, index) => (
      <Task
        key={index}
        text={task.text}
        isComplete={task.isComplete}
        onDeleteTask={() => handleDeleteTask(index)}
        onCompleteTask={() => handleCompleteTask(index)}
        index={index}
      />
    )) }
  </div>
  )
}

export default App
