import React from 'react'


const Cards = ({description,title,image}) => {
  return (
    <div class="w-96 h-80 shadow-lg ml-10 flex flex-col mt-20 mb-10">
     
    <div class=" h-1/2 w-full">
       <img className='object-cover w-full h-40' src={image}></img>
    </div>
    <div className='h-1/2 mt-20'>
    
      <p class="text-gray-700 text-lg font-semibold ml-20">{title}  </p>
    </div>
      
    </div>
  )
}

export default Cards
