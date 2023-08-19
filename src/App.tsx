import React from 'react';
import styles from './App.module.scss';
import DiscordButton from "./discord/discordButton";

function App() {
    return (
        <div className={styles.app}>
            <header className="App-header">
                <h1 className={styles.logo}><span>WarCraft</span> <span>Maul</span></h1>
            </header>
            <main className={styles.main}>
                <div>
                    <a className={'button blue'} href={'/Warcraft_Maul_Reimagined_v4.4.3.w3x'}>Download lastest version v4.4.3</a></div>
                <div className={styles.discord}><a href={'https://discord.gg/4Ng3VgE'}><DiscordButton/></a></div>

            </main>
            <div className={styles.github}><a href={'https://github.com/Promises/Warcraft-Maul-Buildtools'}><img
                src={'/github-mark-white.svg'} alt={'Contribute changes to the project on Github'}/></a></div>
        </div>
    );
}

export default App;
