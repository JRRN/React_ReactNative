const squareStyle = {
    height: "100px", width: "100px",
}

export default function Square(props) {

    function GuardClick() {
        if (props.value === '-') {
            props.appClick(props.rowIndex, props.columnIndex)
        } 
    }

    return <button
        style={squareStyle}
        onClick={GuardClick}
        className={props.value === '-' ? "clickable" : "blocked"}
        key={props.rowIndex + '-' + props.columnIndex}>{props.value}
    </button>
}