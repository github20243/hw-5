import React, { useState } from 'react'
import Button from './UI/Button'
import { styled } from '@mui/material'

const Counter = () => {
  const [count, setCounter] = useState(0)

  const handlerIncrement = () => {
    setCounter(count + 1)
  }
  const handlerDecrement = () => {
    setCounter(count - 1)
  }

  return (
    <StyledGlavDiv>
      <h2>Экинчи уй тапшырма</h2>
      <br />
      <Button onCLick={handlerIncrement}>+</Button>
      <h1>{count}</h1>
      <Button onCLick={handlerDecrement}>-</Button>
      <br />
      <br />
    <br />
      <hr />
    </StyledGlavDiv>
  )
}

export default Counter

const StyledGlavDiv = styled("div")`
  margin-top: 20px;
`