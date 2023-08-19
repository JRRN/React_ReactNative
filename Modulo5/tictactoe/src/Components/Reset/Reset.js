export default function Reset(props) {
    return <button
        type="button"
        class="text-sm font-semibold leading-6 text-gray-900"
        onClick={props.resetClick}>
        Reiniciar
    </button>
}