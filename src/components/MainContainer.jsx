import React from 'react'
import Header from './Header'
import Body from './Body'
import bgImage from '../assets/main.svg'

const MainContainer = () => {
  return (
     <div
       className="h-screen bg-cover "
       style={{ backgroundImage: `url(${bgImage})` }}
     >
    <Header></Header>
    <Body></Body>
    </div>

    
  )
}

export default MainContainer
