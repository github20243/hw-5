import React, { useState } from 'react'
import Button from './UI/Button'

const HomeAbout = () => {
  const [name,setName] = useState("Home")
  return (
    <div>
      <br />
        <h2>Алтынчы уй тапшырма</h2>
        <Button onCLick={() => setName(<h2>Home</h2>)}>Home</Button>
        <Button onCLick={() => setName(<h2>About</h2>)}>About</Button>
        <Button onCLick={() => setName(<h2>Contact</h2>)}>Contact</Button>
        {name}
        <br />
        <hr />
    </div>
  )
}

export default HomeAbout