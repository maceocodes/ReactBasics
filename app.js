const Header = (props) => {
    console.log(props)
    return (
        <header>
            <h1>{props.title}</h1>
            <span className="stats">Players: {props.totalPlayers}</span>
        </header>
    );
}

const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                {props.playerName}
            </span>

            <Counter playerScore={props.playerScore} />
        </div>
    );
}

const Counter  = (props) => {
    return(
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">35</span>
            <button className="counter-action increment"> + </button>           
        </div>
    );
}

const App = () => {
    return (
        <div className="scoreboard">
            <Header title="scoreboard" totalPlayers={1}/>

            {/*Players list*/}
            <Player playerName="Maceo" playerScore={100}/>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);