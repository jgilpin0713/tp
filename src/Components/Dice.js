import React, {useState} from "react"
import { useDispatch, useSelector } from "react-redux";
import { rollDice, movesLeft } from "../actions/actionCreators";


function Dice (){
    const roll = useSelector(state => state.dice.roll)
    console.log(roll)
    const moves = useSelector(state => state.dice.movesLeft)
    console.log(moves)
    let dispatch = useDispatch()

	const [DieResult, setDieResult] = useState(1);
	const DieImage = require(`./assets/${DieResult}.png`);
  
	function setDice() {
	  setDieResult(Math.floor(Math.random() * 6) + 1);
		// what to add here for bounce after click -set timeout - create state for the bounce
		//trigger the re render of the die image. 
        dispatch(rollDice(DieResult))
        dispatch(movesLeft(DieResult))
        console.log(roll)
        console.log(moves)
	}
  
	return (
	  <div className="Dice">
		<header className="Dice-header">
		  <div>
		    <span>{DieResult}</span>
		    <button><img src={DieImage} className="die" alt="Die one" onClick={setDice}/></button>
          </div> 
		</header>
	  </div>
	);
}

export default Dice

