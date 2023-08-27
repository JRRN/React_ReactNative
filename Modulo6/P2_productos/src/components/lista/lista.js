import Tarjeta from "../tarjeta/tarjeta";
import CardColumns from 'react-bootstrap/CardColumns'

export default function Lista(props) {
    return (
        <CardColumns>
            {props.productos.map((item, index) => (
                <Tarjeta key={item.id} item={item} />
            ))}
        </CardColumns>
    )
}