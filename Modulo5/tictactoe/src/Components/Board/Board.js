import Square from "../Square/Square"

export default function Board(props) {
    return <div>
        {
            props.values.map((rowValues, rowIndex) => {
                let row = rowValues.map((value, columnIndex) => {
                    return <Square
                        appClick={props.appClick}
                        rowIndex={rowIndex}
                        columnIndex={columnIndex}
                        value={value}
                        keyValue={rowIndex + '-' + columnIndex} />
                });
                return <div key={'row' + rowIndex}>{row}</div>
            })
        }
    </div>
}