// <h1 id="main-title" title="This is a title">My First React Element</h1>
const title = <h1>My First React Element</h1>
const dscr = <p>I just learned how to create a React node and render it into the Dom</p>

const header = (
    <header>
        <h1>My First React Element</h1>
        <p>I just learned how to create a React node and render it into the Dom</p>
    </header>
);

ReactDOM.render(
    header,
    document.getElementById('root')
);