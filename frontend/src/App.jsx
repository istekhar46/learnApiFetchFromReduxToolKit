import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box, Container, Paper, CssBaseline } from "@mui/material";
import Hero from './components/Hero'

function App() {

  return (
    <>
      {/* <ToastContainer/> */}
      {/* <CssBaseline /> */}
      {/* <Container maxWidth="sm"> */}
      <div className="di">

        <Hero/>
      </div>

      {/* </Container> */}
    
    
    </>
  )
}

export default App
