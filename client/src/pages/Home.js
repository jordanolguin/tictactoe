import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import PlayButton from "../components/PlayButton/PlayButton";

function Home() {
  return (
    <div className="App">
      <h1>tic tac toe</h1>
      <LoadingScreen />
      <PlayButton />
    </div>
  );
}

export default Home;
