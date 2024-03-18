import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'
import {add,remove} from '../Redux/Slices/CartSlice'

const Products = ({product}) => {

    const {cart} =  useSelector((state) => state);
    const dispatch = useDispatch();

    function removeFromCart()
    {
        dispatch(remove(product.id));
        toast.error("Removed from Cart")
    }

    function addToCart()
    {
        dispatch(add(product));
        toast.success("Added to Cart")
    }

  return (
    
        <div className='group hover:scale-110 transition duration-300 ease-in flex flex-col items-center justify-between 
        shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024]
         gap-3 p-4 mt-10 ml-5  rounded-xl'>
            <p className='truncate w-40 mt-1 text-gray-700 font-semibold text-lg  text-left'>{product.title}</p>
            <p className=' w-40 text-gray-400 font-normal text-[10px] text-left'>{product.description.split(" ").slice(0,10).join(" ")+"..."}</p>
            <div className='h-[180px]'>
                <img src={product.image} alt='product_image' className='h-full w-full object-contain ' height={180}/>
            </div>
            
             
            <div className='flex items-center justify-between w-full mt-5'>

                <p className='text-green-600 font-semibold'>${product.price}</p>

                {
                    cart.some((p) => p.id === product.id) ?
                    (
                        
                            <button onClick={removeFromCart}
                            className='group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in
                             text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3
                              text-[12px] uppercase tracking-wide'>
                                Remove from Cart
                            </button>
                        

                    ):
                    (
                        
                            <button onClick={addToCart}
                            className='group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in
                             text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 
                             text-[12px] uppercase tracking-wide'>
                                Add to Cart
                            </button>
            
                    )
                }

            </div>
            

        </div>
    
    
  );
};

export default Products;