export default function Board(props: { values: Array<Array<string>> }) {
    return <div>
        {
            props.values.map((rowValues: Array<string>, index: number) => {
                let row = rowValues.map((value: string, columnIndex: number) => {
                    return <button>{value}</button>
                })
                return <div>{row}</div>
            })
        }
    </div>
}