export default function Header(props: any): JSX.Element {
    return (
        <header className="myheader">
            Turn of {props.turn}
        </header>
    );
}