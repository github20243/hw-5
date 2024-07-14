import React, { useState } from 'react'
import Button from './UI/Button'
import { styled } from '@mui/material'

const OpenClose = () => {
  const [open,setOpen] = useState(false)

  const handleOpen = () => {
    setOpen((prev) => !prev)
  } 
  return (
    <StyledGlavDiv>
      <h2>Биринчи уй тапшырма</h2>
      <br />
      <Button onCLick={handleOpen}>{open ? "Close" : "Open"}</Button>
      <br />
      <hr/>
    </StyledGlavDiv>
  )
}

export default OpenClose

const StyledGlavDiv = styled("div")`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`