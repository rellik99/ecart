import React from 'react'

import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';


const Navbar = () => {

    const {cart}=useSelector((state)=>state);
    return (

    <nav className='flex items-center justify-between h-20 max-w-6xl mx-auto bg-slate-900'>
        
        <div className='ml-5'>
            <NavLink to="/">
                <img src="/logo.png" alt='logo'  className=' h-14' />
            </NavLink>
        </div>
            
        
        <div className=' flex items-center space-x-6 mr-5 text-slate-100 tracking-tighter font-medium'>
            <NavLink to="/">
                <p className='cursor-pointer hover:text-green-400 transition duration-300 ease-in'>Home</p>
            </NavLink>

            <NavLink to="/cart">
                <div className='relative'>

                
                <FaShoppingCart className='text-2xl cursor-pointer hover:text-green-400 transition transform duration-200' />
                {
                    cart.length>0 &&
                    <span className='absolute bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce -top-1 -right-2 rounded-full top- text-white'>{cart.length}</span>
                }
                </div>
            </NavLink>

        </div>
        
    </nav>
  )
}

export default Navbar


