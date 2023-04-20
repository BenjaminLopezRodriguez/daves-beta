import { createBoard } from '@wixc3/react-board';
import { NavCompPageScaffold } from '../../../components/nav-comp-page-scaffold/nav-comp-page-scaffold';

export default createBoard({
    name: 'NavCompPageScaffold',
    Board: () => <NavCompPageScaffold />,
    environmentProps: {
        windowWidth: 1162,
    },
});
