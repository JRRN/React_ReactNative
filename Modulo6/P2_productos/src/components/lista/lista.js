import Tarjeta from "../tarjeta/tarjeta";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Lista(props) {
    return (
       
            <Row xs={1} md={2} className="g-4">
                {props.productos.map(( item, index ) => (
                    <Col key={index}>
                        <Tarjeta key={item.id} item={item} />
                    </Col>
                ))}
            </Row>
        
    )
}