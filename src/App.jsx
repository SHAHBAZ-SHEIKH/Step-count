import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StepCount from './components/StepCount'

function App() {
  const [count, setCount] = useState(0)
  const [step,setStep] = useState(0)
  


  const stepIncrement = () => {
    setStep(step + 1)
  }
  const countIncrement = () => {
    setCount(count + step)
    
  }

  

  const countDecrement = () => {
    setCount(count - step)
  }
  const stepDecrement = () => {
    setStep(step - 1)
  }

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


   const date = new Date()
  // const day = date.getDay() + count

  
  // console.log(days[day] + count)
  const today = `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`

  
  const futureDate = new Date(date)
  futureDate.setDate(futureDate.getDate() + count) 

  const futureDay = days[futureDate.getDay()]
  const futureMonth = months[futureDate.getMonth()]
  const futureDateDisplay = `${futureDay} ${futureDate.getDate()} ${futureMonth} ${futureDate.getFullYear()}`


  return (
    <div className='w-full bg-[#171934] h-screen flex  justify-center items-center'>
      <div className='w-[100%] md:w-[50%] flex flex-col  bg-[#DBE0D1] p-[40px] shadow-lg rounded-lg'>
        <StepCount title="Step" value={step} countIncrement={stepIncrement} countDecrement={stepDecrement} />
        <StepCount title="Count" value={count} countIncrement={countIncrement} countDecrement={countDecrement}  />

        <p className='text-[25px] text-center text-[#131e07] font-bold'>{count} days from today is {futureDateDisplay} </p>

      </div>

    </div>
  )
}

export default App
