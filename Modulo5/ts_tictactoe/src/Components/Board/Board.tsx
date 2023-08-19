import Square from "../Square/Square";

interface BoardProps {
  values: string[][];
  appClick: (rowIndex: number, columnIndex: number) => void;
}

export default function Board(props: BoardProps): JSX.Element {
  return (
    <div>
      {props.values.map((rowValues, rowIndex) => {
        let row = rowValues.map((value, columnIndex) => {
          return (
            <Square
              appClick={props.appClick}
              rowIndex={rowIndex}
              columnIndex={columnIndex}
              value={value}
              />
          );
        });
        return <div key={"row" + rowIndex}>{row}</div>;
      })}
    </div>
  );
}