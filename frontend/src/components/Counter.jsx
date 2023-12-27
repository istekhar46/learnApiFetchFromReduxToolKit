import { Button } from '@mui/material'
import React from 'react'

const Counter = ({handleDecrement, handleIncrement, count}) => {

 

  return (
    <>
    <h2>{count}</h2>
    <Button  onClick={handleIncrement} variant="contained" color="primary">+</Button>
    <Button onClick={handleDecrement} disabled={count <= 0 } variant="contained" color="primary">-</Button>
    </>
  )
}

export default Counter