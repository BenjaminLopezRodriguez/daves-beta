import { createBoard } from '@wixc3/react-board';
import { SubCompCard } from '../../../components/sub-comp-card/sub-comp-card';

export default createBoard({
    name: 'SubCompCard',
    Board: () => <SubCompCard />
});
