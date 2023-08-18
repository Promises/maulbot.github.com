import React from 'react';
import styles from './App.module.scss';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className={styles.logo}><span>WarCraft</span> <span>Maul</span></h1>
            </header>
            <main>
                <div>Download latest version:
                    <a href={'/Warcraft_Maul_Reimagined_v4.4.3.w3x'}>Download Now!</a></div>

                <div>Join the community on <a href={'https://discord.gg/4Ng3VgE'}>Discord</a></div>
                <div>Contribute changes to the project on <a href={'https://github.com/Promises/Warcraft-Maul-Buildtools'}>Github</a></div>

            </main>
        </div>
    );
}

export default App;
