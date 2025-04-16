
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [email , setEmail] = useState()
  const [password , setPassword] = useState()
  const navigate = useNavigate()


  const adminMail = "gouthamav@gmail.com"
  const adminPassword = "1234"


  const handleLogin = () => {
    if (email === adminMail && password === adminPassword) {
      navigate("/browse");
    }

  };
  

  console.log(email)
  console.log(password)



  return (


    <div className="flex justify-center   h-[40rem] w-[58rem] m-auto mt-20  shadow-[0_4px_12px_rgba(0,0,0,0.08),_0_-4px_12px_rgba(0,0,0,0.08)] rounded-4xl">
      <h1 className='absolute -ml-[45rem] mt-10 text-2xl font-extrabold'>Login In</h1>

      <div className='w-1/2 flex   rounded-tl-2xl rounded-bl-2xl flex-col items-baseline justify-center pl-14  bg-white/80  min-h-full' >


   

         
       <p className="font-medium mb-3 text-sm">Email</p>
       <input value={email}  type="email" onChange={(e)=> setEmail(e.target.value)} className=" mr-32 shadow-2xl mb-8 h-10 w-[20rem] rounded-lg border border-gray-200  px-4 py-2 outline-none hover:border-blue-400  " placeholder="Email" />

       
       <p className=" font-medium text-sm mb-3 ">Password</p>
       <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password"  className="mr-32 h-10 w-[20rem] shadow-2xl rounded-lg border mb-8 border-gray-200  px-4 py-2 outline-none hover:border-blue-400 " placeholder="Password" />
     
     
      <button className='bg-black font-bold text-white mb-14 ml-4 cursor-pointer w-80 shadow-2xl h-12 rounded-lg mt-10' onClick={handleLogin}> Login</button>
   
  
    
      </div>

      
        <div className='w-1/2 ' >
        <img className='rounded-tr-2xl object-cover rounded-br-2xl h-full' src='https://img.freepik.com/premium-photo/beautiful-casual-business-people-modern-bright-office-looking-camera-teamwork-concept_109710-4925.jpg?semt=ais_hybrid&w=740'></img>
        </div>

    </div>
  
     
  )
}

export default Login
