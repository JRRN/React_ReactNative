import {Button} from '@nextui-org/button';

export default function Reset(props: { resetClick: () => void }): JSX.Element {
    return <Button color='default' size='sm' variant="ghost"
        onClick={props.resetClick}>
        Reiniciar
    </Button>
}