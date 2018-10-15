const Header = () => {
    return (
        <header>
            <h1>Scoreboard</h1>
            <span className="stats">Players: 1</span>
        </header>
    );
}

const Player = () => {
    return (
        <div className="player">
            <span className="player-name">
                Maceo
            </span>

            <div className="counter">
                <button className="counter-action decrement"> - </button>
                <button className="counter-action increment"> + </button>
                <span className="counter-score">35</span>
            </div>
        </div>
    );
}

ReactDOM.render(
    <Player />,
    document.getElementById('root')
);