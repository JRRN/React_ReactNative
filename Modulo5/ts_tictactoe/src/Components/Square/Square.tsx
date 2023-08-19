const squareStyle: { height: string, width: string } = {
    height: "100px", width: "100px",
}

export default function Square(props: { keyValue: string, value: string }) {
    return <button style={squareStyle} key={props.keyValue}>{props.value}</button>
}