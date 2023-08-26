import {Button} from '@nextui-org/button';

export default function LoadGame(props: { loadClick: () => void }): JSX.Element {
    return <Button color='default' size='sm' variant="ghost"
        onClick={props.loadClick}>
        Load Game
    </Button>
}