
import React from 'react'

import { useEffect,useState
 } from 'react'
 import { useSearchParams } from 'react-router-dom'
 


const SinglePage = () => {

  const [singleProductData , setSingleProductData] = useState([])
  const [searchParams]  = useSearchParams()
  const productId = searchParams.get("id")

   
   console.log(productId)

   useEffect(() =>  {

    fetchSingleProduct () 

},[productId])


   
 

  const fetchSingleProduct = async () => {
      try{
          
        const data = await fetch("https://strapi-store-server.onrender.com/api/products/" + productId);
          const response = await data.json()
          console.log(response)
          setSingleProductData(response?.data)
       
      }

      catch (error){
          

      }

  }



  if (!singleProductData?.attributes) return <p>Loading...</p>;

   
  const {title,image,company,description,price} = singleProductData?.attributes

console.log(title)

  return (
    <div>

<section className='mt-20'>
      
  
      <div className='mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-28'>

        <img
          src={image}
          alt={title}
          className='w-96 h-96 object-cover rounded-lg shadow-2xl lg:w-full ml-18' 
        />
   
        <div>
        <h1 className='capitalize text-3xl font-bold'>{title}</h1>
          <h4 className='text-xl text-neutral-content font-bold mt-2'>{company} </h4>
          <p className='mt-3 text-xl'>{price/100}$</p>
          <p className='mt-6 leading-8 w-[35rem]'>{description}</p>
              
      
        </div>
      </div>
    </section>


        
      
    </div>
  )
}

export default SinglePage
