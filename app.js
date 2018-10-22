const players = [
    {
        name: "Guil",
        score: 50,
        id:1
      },
      {
        name: "Treasure",
        score: 85,
        id:2
      },
      {
        name: "Ashley",
        score: 95,
        id:3
      },
      {
        name: "James",
        score: 80,
        id:4
      }
      //an array of objects with name and score properties//
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
            <Header title="scoreboard" totalPlayers={props.initialPlayers.length}/>

            {/*Players list*/}
            {props.initialPlayers.map( player => 
                //this is an implicit return, ommitting the return keyword and curly braces//
                <Player 
                    playerName={player.name} 
                    playerScore={player.score}
                    key={player.id.toString()}
                />

            )}          
        </div>
    );
}

ReactDOM.render(
    <App initialPlayers={players}/>,
    document.getElementById('root')
);