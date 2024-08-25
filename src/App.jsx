import { useState } from 'react'
import './App.css'
import Lottery from './components/Lottery'
import Ticket from './components/Ticket'
import { sum } from './helper'

function App() {

  const winCondition = (ticket) => {
    return sum(ticket) === 15;
  };

  return (
    <>
    {/* <Lottery n={3} winningSum={15} /> */}
    <Lottery n={3} winCondition={winCondition} />
   
    </>
  )
}

export default App
