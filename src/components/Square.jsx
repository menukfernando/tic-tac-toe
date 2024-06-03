function Square(props) {
  return (
    <div onClick={props.onClick} className={`square ${props.className}`}>
      {props.value}
    </div>
  );
}

export default Square;
