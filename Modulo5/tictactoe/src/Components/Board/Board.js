import Square from "../Square/Square"

export default function Board(props) {
    return <div>
        {
            props.values.map((rowValues, index) => {
                let row = rowValues.map((value, columnIndex) => {
                    return <Square value={value} keyValue={index + '-' + columnIndex} />
                })
                return <div key={'row' + index}>{row}</div>
            })
        }
    </div>
}