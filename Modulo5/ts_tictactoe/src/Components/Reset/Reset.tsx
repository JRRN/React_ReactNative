import {Button} from '@nextui-org/button';

export default function Reset(props: { resetClick: () => void }): JSX.Element {
    return <Button
        onClick={props.resetClick}>
        Reiniciar
    </Button>
}