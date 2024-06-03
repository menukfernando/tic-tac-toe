import Square from "./Square";

function Board(props) {
  return (
    <div className="board">
      <Square
        onClick={() => props.onSquareClick(0)}
        value={props.squares[0]}
        className="right-border bottom-border"
      />
      <Square
        onClick={() => props.onSquareClick(1)}
        value={props.squares[1]}
        className="right-border bottom-border"
      />
      <Square
        onClick={() => props.onSquareClick(2)}
        value={props.squares[2]}
        className=" bottom-border"
      />
      <Square
        onClick={() => props.onSquareClick(3)}
        value={props.squares[3]}
        className="right-border bottom-border"
      />
      <Square
        onClick={() => props.onSquareClick(4)}
        value={props.squares[4]}
        className="right-border bottom-border"
      />
      <Square
        onClick={() => props.onSquareClick(5)}
        value={props.squares[5]}
        className="bottom-border"
      />
      <Square
        onClick={() => props.onSquareClick(6)}
        value={props.squares[6]}
        className="right-border"
      />
      <Square
        onClick={() => props.onSquareClick(7)}
        value={props.squares[7]}
        className="right-border"
      />
      <Square onClick={() => props.onSquareClick(8)} value={props.squares[8]} />
    </div>
  );
}

export default Board;
