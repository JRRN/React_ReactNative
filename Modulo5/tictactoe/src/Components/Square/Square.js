const squareStyle = {
    height: "100px", width: "100px",
}

export default function Square(props) {
    return <button style={squareStyle} key={props.keyValue}>{props.value}</button>
}