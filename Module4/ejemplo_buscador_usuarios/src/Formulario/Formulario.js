export default function Formulario(props) {
    return (
        <div>
            <div><input type="text" id="query" placeholder="Texto a buscar" value={props.query} onChange={e => props.setQuery(e.target.value)}></input></div >
            <br />
            <button id="botonsearch" className="new" onClick={() => props.callServer()}>
                Buscar
            </button>
        </div>
    );

}