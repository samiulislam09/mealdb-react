import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='flex justify-between px-20 py-5 text-white bg-slate-500'>
      <div className="logo">logo</div>
      <div className="flex items-center justify-center ">
        <div className="flex border-2 border-gray-200 rounded">
          <input type="text" className="px-4 py-2 w-80" placeholder="Search..."/>
            <button className="px-4 text-white bg-gray-600 border-l ">
              Search
            </button>
        </div>
      </div>
      <nav>
        <Link className='mx-3' to='/'>Home</Link>
        <Link className='mx-3' to='/about'>About</Link>
        <Link className='mx-3' to='/contact'>Contact</Link>
        <Link className='mx-3' to='/shop'>Shop</Link>
      </nav>
    </div>
  )
}

export default Header