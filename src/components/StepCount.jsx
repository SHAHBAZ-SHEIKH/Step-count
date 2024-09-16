import React from 'react'

function StepCount({title,countIncrement,value,countDecrement}) {
    console.log(title,countIncrement)


    return (

        <div className='w-[100%] mb-[20px]  mx-auto flex justify-between items-center '>
            <button  onClick={countDecrement} className='text-3xl font-bold  p-[7px] rounded border-2 border-solid border-white bg-[#282f58] w-[50px] ' >-</button>
            <h3 className='text-[40px] font-bold '>{title}:{value}</h3>
            <button onClick={countIncrement} className='text-3xl font-bold p-[5px] rounded border-2 border-solid border-white  w-[50px] bg-[#442e4e]'>+</button>

        </div>



    )
}

export default StepCount
