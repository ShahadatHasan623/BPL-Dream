import { Suspense } from "react";
import "./App.css";
import Available from "./components/AvailablePlayers/Available";
import Navbar from "./components/Navbar/Navbar";

const fetchPlayers = async () => {
  const res = await fetch("../public/players.json");
  return res.json();
};
function App() {
  const playerPromise = fetchPlayers();
  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <Available playerPromise={playerPromise}></Available>
      </Suspense>
    </>
  );
}

export default App;
