export default function LoadGame(props: { loadClick: () => void }): JSX.Element {
    return <button
        onClick={props.loadClick}>
        Load Game
    </button>
}