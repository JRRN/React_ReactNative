const squareStyle: { height: string, width: string } = {
    height: "100px", width: "100px",
}

export default function Square(props: { appClick: (rowIndex: number, columnIndex: number) => void, rowIndex: number, columnIndex: number, value: string }) {
    return <button
        style={squareStyle}
        onClick={() => props.appClick(props.rowIndex, props.columnIndex)}
        key={props.rowIndex + '-' + props.columnIndex}>{props.value}
    </button>
}