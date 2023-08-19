import Square from "../Square/Square"

export default function Board(props: { values: Array<Array<string>> }) {
    return <div>
        {
            props.values.map((rowValues: Array<string>, index: number) => {
                let row = rowValues.map((value: string, columnIndex: number) => {
                    return <Square value={value} keyValue={index+'-'+columnIndex}/>
                })
                return <div key={'row'+index}>{row}</div>
            })
        }
    </div>
}