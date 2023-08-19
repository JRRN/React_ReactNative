export default function Reset(props: { resetClick: () => void }): JSX.Element {
    return <button
        onClick={props.resetClick}>
        Reiniciar
    </button>
}