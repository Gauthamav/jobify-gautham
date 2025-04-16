
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import Cards from './Cards';

const Browse = () => {

  const [data , setData] = useState([])

  useEffect(() => {
        getWebsiteApi()
  }, []); 



  const getWebsiteApi = async () => {
    try{

      const data = await fetch("https://strapi-store-server.onrender.com/api/products?page=1");
      const response = await data.json(); 
      setData(response.data)
      console.log(response.data)
    }catch (error) {

    }
  };


  if (data.length == 0) return <p className="text-center text-gray-500 mt-6">Loading products...</p>;


 
  return (
    <div className='flex flex-wrap gap-5'>
          {
      data.map((item) => (
<Link to={`/singlepage?id=${item.id}`}key={item.id}><Cards  image = {item.attributes.image}  title = {item.attributes.title} 
        /></Link>
))
}
  
    </div>
  )

}

export default Browse
