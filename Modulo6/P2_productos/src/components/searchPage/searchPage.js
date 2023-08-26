import Button from 'react-bootstrap/Button';

export default function SearchPage(props) {
    console.log(props.productos)
    return (
        <div>
            <h2 id="catálogo">Catálogo</h2>
            <input type="text" id="filtro" placeholder="Texto a buscar" value={props.query} onChange={e => props.setQuery(e.target.value)}></input>
            <br />
            <Button id="buscador" className="new" onClick={() => props.callServer()}>
                Buscar
            </Button>
        </div>
    )
}