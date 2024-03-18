import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdDelete } from "react-icons/md";
import { toast } from 'react-hot-toast';
import {remove} from '../Redux/Slices/CartSlice'


const CartItem = ({item,itemIndex}) => {
    
    const { cart }=useSelector((state)=>state); 
    const dispatch=useDispatch();

    function removeItem()
    {
        dispatch(remove(item.id));
        toast.error("Removed Item from Cart");
    }
    

  return (

    <div className={'flex items-center p-2 md:p-5 justify-between mt-2 mb-2 md:mx-5  not-last:border-b-2 border-slate-500' + (itemIndex===cart.length-1 ? " ":" border-b-2 border-slate-500")}>   
        <div className='flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center'>

            <div className='w-[30%]'>
                <img src={item.image} alt='imageofitem' className=' object-cover'/>
            </div>

            <div className='md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]'>

                <h1 className='text-xl text-slate-700 font-semibold '>{item.title}</h1>
                <h1 className='text-base text-slate-700 font-medium'>{item.description.split(" ").slice(0,15).join(" ")+"..."}</h1>
        
                <p className='flex items-center justify-between'>
                    <span className='font-bold text-lg text-green-600'>${item.price}</span>
                    <button onClick={removeItem}
                    className=' bg-red-200 group hover:bg-red-400 transition-transform duration-300
                     cursor-pointer rounded-full p-3 mr-3'>
                        <MdDelete className='text-red-800 group-hover:text-white h-[1em] w-[1em]' />
                    </button>
                
                </p>    

            </div>

        </div>
        
        


    </div>
  );
};

export default CartItem;