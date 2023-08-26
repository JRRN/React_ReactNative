import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Tarjeta(props) {
    return (
        <Card id={props.item.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.item.thumbnail} style={{width: '300px'}} />
            <Card.Body>
                <Card.Title>{props.item.title}</Card.Title>
                <Card.Text> {props.item.description}</Card.Text>
                <Button variant="primary">Ver</Button>
            </Card.Body>
        </Card>

    );
}

