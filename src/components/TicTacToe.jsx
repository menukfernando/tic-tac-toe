import { useState } from "react";
import Board from "./Board";
import Square from "./Square";

function TicTacToe() {

    const player_X = "X"
    const player_O = "O"

    const [squares, setSquares] = useState(Array(9).fill(null))
    const [playerTurn, setPlayerTurn] = useState(player_X)

    function handleSquareClick(index){
        if(squares[index] !== null){
            return
        }

        const newSquares = [...squares]
        newSquares[index] = playerTurn
        setSquares(newSquares)

        if(playerTurn === player_X){
            setPlayerTurn(player_O)
        }else{
            setPlayerTurn(player_X)
        }
    }

    return ( 
        <div>
            <h1>Tic-Tac-Toe</h1>
            <Board 
                squares={squares}
                onSquareClick={handleSquareClick}
            />
        </div>
     );
}

export default TicTacToe;