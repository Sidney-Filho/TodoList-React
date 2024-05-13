import './App.css'
import logo from './assets/Logo.svg'
import plus from './assets/plus.svg'
import Task from './components/Task'

function App() {


  return (
    <div>
      <div className='bg-neutral-950 flex justify-center items-center h-56'>
        <img src={logo} alt="Logo" className='pb-6' />
      </div>
        <div className='mt-[-25px] flex justify-center items-center w-full gap-3'>
          <input type="text" className='border-none bg-neutral-800 text-white placeholder:text-gray300 p-3 rounded-md shadow-md w-3/5 focus-within:border-none' placeholder='Adicione uma nova tarefa'/>
          <button className='p-3 text-white flex justify-center items-center gap-2 bg-blue-500 rounded-md'>
            Criar
            <img src={plus} alt="Icone Adicionar" />
          </button>
        </div>

        <Task/>
    </div>
  )
}

export default App
