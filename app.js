const players = [
    {
        name: "Guil",
        score: 50
      },
      {
        name: "Treasure",
        score: 85
      },
      {
        name: "Ashley",
        score: 95
      },
      {
        name: "James",
        score: 80
      }
];


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
            <span className="counter-score">{props.playerScore}</span>
            <button className="counter-action increment"> + </button>           
        </div>
    );
}

const App = (props) => {
    return (
        <div className="scoreboard">
            <Header title="scoreboard" totalPlayers={1}/>

            {/*Players list*/}
            {props.initalPlayers.map}
            <Player playerName="Maceo" playerScore={100} />
            <Player playerName="Player01" playerScore={70} />
            <Player playerName="Player02" playerScore={67} />
            <Player playerName="Player03" playerScore={53} />
            
        </div>
    );
}

ReactDOM.render(
    <App initialPlayers={players}/>,
    document.getElementById('root')
);