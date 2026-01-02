import React from 'react'
import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()
    
    const copyTask = [...task];
    copyTask.push({title, details})
    setTask(copyTask)

    setTitle('')
    setDetails('')
    
  }


  return (
    <div className='h-screen bg-gray-200 p-2 gap-2 justify-between  text-white lg:flex w-full'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='lg:w-1/2 w-full flex items-center justify-between gap-5 rounded-xl flex-col  bg-black  p-10 '>
        
        <div className='flex flex-col gap-4 items-start w-full'>

          <h1 className='text-4xl font-bold'>Add Notes</h1>

          <input 
          type="text" 
          placeholder='Enter Notes Heading'
          className='px-5 py-2 w-full font-medium border outline-none rounded'
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}/>
          
          <textarea 
          type="text" 
          placeholder='Write Details'
          className='px-5 w-full h-32 py-2 flex font-medium items-start flex-row  border rounded outline-none'
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
          />
          
          <button className='bg-white font-medium outline-none text-black w-full px-5 py-1 rounded cursor-pointer active:scale-95 hover:bg-gray-200 text-xl'>Add Notes</button>
          
          </div>

       <img className=' h-52 items-center ' src="https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small/a-black-and-white-drawing-of-a-man-writing-png.png" alt="" />
      
      </form>
      <div className='lg:w-1/2 flex flex-col gap-5 bg-black p-10 rounded-xl'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex gap-5 overflow-y-auto h-full flex-wrap'>
          {task.map(function(elem,idx){

            return <div key={idx} 
            className='h-52 w-40 rounded-2xl bg-white text-black p-5 flex flex-col gap-5 items-center bg-[url("/note.png")] bg-cover  bg-no-repeat bg-center'>
                  <h3 className='text-2xl font-bold text-black'>
                  {elem.title} 
                
                  </h3>
                  <p className='text-sm text-gray-800 capitalize'>{elem.details}</p>
              </div>
          })}
       
        </div>
      </div>
    </div>
  )
}

export default App
