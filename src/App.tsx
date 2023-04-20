import { useState } from 'react';
import styles from './App.module.scss';
import { SubCompCard } from './components/sub-comp-card/sub-comp-card';
import { NavCompPageScaffold } from './components/nav-comp-page-scaffold/nav-comp-page-scaffold';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div><NavCompPageScaffold />
            <button onClick={() => setCount((count) => count + 1)}>
                
                {count}
            </button>
        </div>
    );
}

export default App;
