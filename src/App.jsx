
import './App.css'
import Login from './components/Login'
import Browse from './components/Browse';
import { Routes, Route } from "react-router-dom";
import SinglePage from './components/SinglePage';
import MainContainer from './components/MainContainer';
import store from './utils/store';



    

function App() {



  return (
    
      <div>
        <Routes>
          <Route path='/' element={<MainContainer></MainContainer>}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/browse" element={<Browse></Browse>}/>
        <Route path="/singlepage" element={<SinglePage></SinglePage>}/>

     
   


        </Routes>
         
         
         </div>
        
  )
}

export default App
