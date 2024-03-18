import React, { useEffect, useState } from 'react'
import Products from '../Components/Products';
import Spinner from '../Components/Spinner';

const Home = () => {

    const API_URL="https://fakestoreapi.com/products";

    const [loading,setloading]=useState(false);
    const [products,setproducts]=useState([]);

    async function fetchdata()
    {
        setloading(true);
        try{
            const data=await fetch(API_URL);
            const output= await data.json();
            setproducts(output);
        }
        catch(error)
        {
            alert("data not found")
            setproducts([]);
        }
        setloading(false)
    }

    useEffect( () =>{
        fetchdata();
},[])


  return (

    <div>
        {
            loading?
            (<Spinner/>):
            (
                products.length>0?
                (
                    <div className='min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-2 '>
                        {
                            products.map((product)=>
                            (
                                
                                <Products key={product.id} product={product}/>

                            ))
                        }
                    </div>
                ):
                
                    <div>No Product Found</div>
                

            )
        }

    </div>
  );
};

export default Home;