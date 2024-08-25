import {useState} from 'react'
import { genTicket, sum } from '../helper';

import Ticket from './Ticket';


export default function Lottery({n, winCondition}) {

    let [ticket, setTicket] = useState(genTicket(n));
    // let isWinning = sum(ticket) === winningSum;
    let isWinning = winCondition(ticket);

    let buyTciket = () => {
        setTicket(genTicket(n))   
    }


  return (
    <div>
      <h1>Lottry Game!</h1>
      <Ticket ticket={ticket} />
  
      <button onClick={buyTciket}>Buy New Ticket</button>
      <h3>{isWinning && "Congratulations You Won"}</h3>

    </div>
  )
}
