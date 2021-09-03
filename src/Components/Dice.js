import React, {useState, useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import { movesLeft, move, move2, movesLeft2, isNotInitial1, isNotInitial2 } from "../actions/actionCreators";
import zero from "./assets/0.png"
import one from "./assets/1.png"
import two from "./assets/2.png"
import three from "./assets/3.png"
import four from "./assets/4.png"
import five from "./assets/5.png"
import six from "./assets/6.png"


function Dice (){
    let dispatch = useDispatch()
	let turn = useSelector(state => state.turn.player)
	

	const [DieResult, setDieResult] = useState(0);
	let DieImage;
		if(DieResult === 0){
			DieImage = zero
		} else if (DieResult === 1){
			DieImage = one
		}else if (DieResult === 2){
			DieImage = two
		}else if (DieResult === 3){
			DieImage = three
		}else if (DieResult === 4){
			DieImage = four
		}else if (DieResult === 5){
			DieImage = five
		}else if (DieResult === 6){
			DieImage = six
		}
  
	function setDice() {
	  setDieResult(Math.floor(Math.random() * 6) + 1);
		if(turn === 1){ //for player 1
			dispatch(move()) //change state to move
			dispatch(isNotInitial1())
		} else if (turn === 2) { // for player 2
			dispatch(move2())
			dispatch(isNotInitial2())
		}
	  
	}

	useEffect (() => {
		if (turn === 1){
			dispatch(movesLeft(DieResult))
		}else {
			dispatch(movesLeft2(DieResult))
		}
    }, [dispatch, DieResult, turn])

	
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

