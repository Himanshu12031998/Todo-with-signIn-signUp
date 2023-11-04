import React, { useEffect } from 'react'
import Header from '../components/Header'
// import Main from '../components/Main'
import Todos from '../components/Todos'
import { useNavigate } from 'react-router-dom'

const Home = () => {



  

  return (
    <div>
      <Header />
      <Todos />
      
    </div>
  )
}

export default Home;