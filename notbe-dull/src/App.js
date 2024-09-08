import Joke from "./components/Jokes";
import "./App.css";
import background from "./image.jpg";

function App() {
  return (
    <div
      className="App-header"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="box">
        <h1 className="h1">Are you Dull ? </h1>
        <h2>Need to refresh 😍 </h2>
        <Joke />
      </div>
    </div>
  );
}

export default App;
