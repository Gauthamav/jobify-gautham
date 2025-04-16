# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# Features

     Header
       Netflix Logo
       
       
     Login form


     Header 
        Netflix Logo
        Drop down 
           Browse 
           Home
           Tv shows 
           Movies
           Most Popular
           My Watch List

        Search option 
        Account emoji
            in that  sign out
    Main container
           Video Playing Background
           Two buttons 
    Secondary container 
       Heading 
        Corresponding Video card
         
    
          







      <div className=" flex flex-col gap-4 mt-20" >
      <h1 className='text-lg font-extrabold ml-5 w-20   mb-10' >Log In</h1>
         
       <label className="font-extrabold">Email</label>
       <input value={email}  type="email" onChange={(e)=> setEmail(e.target.value)} className="input  w-96 h-20 shadow-2xl  !outline-none mb-4 pl-2" placeholder="Email" />

       
       <label className=" font-extrabold mb-3 ">Password</label>
       <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password"  className="input  shadow-2xl  !outline-none w-96 h-20 pl-2" placeholder="Password" />
       <p className="text-red-600 font-medium text-md" ></p>
     
      <button className='bg-black text-white  h-20 shadow-2xl rounded-lg mb-4 w-96' onClick={handleLogin}> Login</button>
   
   
       
     </div>