const squareStyle = {
    height: "100px", width: "100px",
}

export default function Square(props) {
    return <button
        style={squareStyle}
        onClick={() => props.appClick(props.rowIndex, props.columnIndex)}
        key={props.rowIndex + '-' + props.columnIndex}>{props.value}
    </button>
}