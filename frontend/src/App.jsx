import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import Hero from './components/Hero'
import MckinlyRice from './components/MckinlyRice'
import Todo from './components/Todo'

function App() {

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(pre => pre + 1)
  }
  const handleDecrement = () => {
    setCount(count - 1);

  }


  return (
    <>
     <div className='w-full'>
         <Todo/>
     </div>

    
    </>
  )
}

export default App
