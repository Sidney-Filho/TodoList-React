import { useState } from 'react'
import trash from '../assets/trash.svg'

interface TaskProps {
  text: string,
  index: number,
  onDeleteTask: (id: number) => void,
  onCompleteTask: (id: number, isComplete: boolean) => void
}

function Task({text, index, onDeleteTask, onCompleteTask}: TaskProps) {

  const [isChecked, setIsChecked] = useState(false)

  function handleCheckboxChange() {
    const newIsChecked = !isChecked
    setIsChecked(newIsChecked)
    onCompleteTask(index, newIsChecked)
  }

  return(
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex justify-between p-8 bg-neutral-600 items-center w-5/6 mt-10 rounded-md text-white">
        <div className="flex items-center justify-center gap-4">
          <input 
            type="checkbox" 
            className='checkbox" className="h-5 w-5 text-blue-500 border-gray-300 rounded-md focus:ring-blue-500 cursor-pointer' 
            onChange={handleCheckboxChange}
            checked={isChecked}
          />
          <p className='text-xl'>
            {text}
          </p>
        </div>
        <div>
          <button onClick={() => onDeleteTask(index)} className='hover:text-red-600'>
            <span className="text-white hover:text-red-600">
              <img src={trash} alt="Deletar Icone" />
            </span>
          </button>

        </div>
      </div>
    </div>
  )
}

export default Task