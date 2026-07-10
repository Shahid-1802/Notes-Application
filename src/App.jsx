// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { X } from 'lucide-react';

const App = () => {

  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')

  const [task, setTask] = useState([])

  const submitHandler =(e) =>{
    e.preventDefault();

    const copyTask =[...task]
  
    copyTask.push({title,detail})
    setTask(copyTask)
    
    setTitle("");
    setDetail('')  
  }

  const deleteNote = (idx)=>{
    const copyTask = [...task];
    console.log(copyTask[idx]);

    copyTask.splice(idx,1)
    setTask(copyTask)
    


  }

  return (
    <div className='h-screen lg:flex bg-black overflow-x-auto scrollbar-none text-white '>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className=' flex lg:w-1/2 gap-4 flex-col p-10' >
        <h1 className='text-2xl font-bold'>Add Notes</h1>

        <input className=' border-2 px-5 outline-none py-2 rounded' type="text"  placeholder='Enter Notes Heading   ' value={title} onChange={(e)=>{
          setTitle(e.target.value);
        }}/>
        
        
        <textarea className=' border-2 outline-none  h-20 px-5 py-2 rounded' type="text" placeholder='Write Details' value={detail}  onChange={(e)=>{
          setDetail(e.target.value);
          
        }}


        />
        
        
        <button className='bg-white active:scale-95 text-black px-10 py-2 rounded'>Add Note</button>
      
      </form>
      <div className='lg:w-1/2  lg:border-l-2 p-10'>
        <h1 className='text-2xl font-bold'>Your Notes</h1>

        <div className='flex gap-5 scrollbar-none flex-wrap mt-5 h-[90%] overflow-auto'>
          {task.map(function(elem,idx){
            return <div key={idx}
              className=' relative h-52 w-40 bg-cover text-black p-4 overflow-auto scrollbar-none bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSprLtbfR7pNrP2llW86CO0bQzI8hcYame5ipuIVdOp_Q&s=10)]'>
                <h2 className='absolute top-4 right-2 bg-red-700  p-1 rounded-full' onClick={()=>{
                  deleteNote(idx)

                }}><X size={8} /></h2>
                <h3 className=' font-bold mt-4  leading-tight'>{elem.title}</h3>
                <p className='mt-2 leading-tight  text-xs font-medium text-gray-500'>{elem.detail}</p>
              </div>

          })}
      
        </div>
      </div>
    </div>
  )
}

export default App