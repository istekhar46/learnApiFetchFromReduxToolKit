import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box, Container, Paper, CssBaseline } from "@mui/material";
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Hero/>

      </Container>
    
    
    </>
  )
}

export default App
