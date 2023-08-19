const squareStyle: { height: string, width: string } = {
    height: "100px", width: "100px",
}

interface SquareProps {
    value: string;
    rowIndex: number;
    columnIndex: number;
    appClick: (rowIndex: number, columnIndex: number) => void;
}

export default function Square(props: SquareProps): JSX.Element {

    function GuardClick(): void {
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