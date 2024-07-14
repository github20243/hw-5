import React, { useState } from 'react'
import Button from './UI/Button'

const CloseOpen = () => {
  const [show, setShow] = useState(false)

  const handleShiw = () => {
    setShow((prev) => !prev)
  }

   return (
    <div>
      <Button onCLick={handleShiw}>{show ? "Open" : "Close"}</Button>
        <h2>{show && <p>upps!</p>}</h2>
        <br />
        <br />
        <br />
        <hr />
    </div>
  )
}

export default CloseOpen