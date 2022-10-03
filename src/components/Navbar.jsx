import React from 'react'

const btn = `
  w-full 
  bg-transparent 
  hover:bg-blue-500 
  text-white 
  font-semibold 
  hover:text-white 
  py-2 
  px-4 
  border 
  border-blue-500 
  hover:border-transparent 
  rounded
`;

const Navbar = ({ setCategories }) => {
  return (
    <div className='w-full flex justify-between p-5 bg-slate-600 text-white sticky top-0'>
      <h1>Reminder JS</h1>
      <ul className='flex gap-3'>
        <li><button className={btn} onClick={() => {}} >HTML</button></li>
        <li><button className={btn} onClick={() => {}} >CSS</button></li>
        <li><button className={btn} onClick={() => setCategories('js')} >JS</button></li>
        <li><button className={btn} onClick={() => setCategories('react')} >REACT</button></li>
      </ul>
    </div>
  )
}

export default Navbar