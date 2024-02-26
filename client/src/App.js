import "./App.css";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import PlayButton from "./components/PlayButton/PlayButton";

function App() {
  return (
    <div className="App">
      <h1>tic tac toe</h1>
      <LoadingScreen />
      <PlayButton />
    </div>
  );
}

export default App;
