import { Suspense, useState } from "react";
import "./App.css";
import Available from "./components/AvailablePlayers/Available";
import Navbar from "./components/Navbar/Navbar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import { removeToLocalStorage } from "./utils/LocalStorage";
import { toast } from "react-toastify";
import Home from "./components/Home/Home";

const fetchPlayers = async () => {
  const res = await fetch("../public/players.json");
  return res.json();
};
const playerPromise = fetchPlayers();
function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBlance, setAvailableBlance] = useState(600000000);
  const [selectedPlayer, setSelectedPlayer] = useState([]);

  const handleRemoveCart = (id) => {
    const removeItem = selectedPlayer.filter((player) => player.id !== id);
    setSelectedPlayer(removeItem);
    removeToLocalStorage(id)
    toast.error("Deleted Player")
  };


  return (
    <>
      <Navbar availableBlance={availableBlance}></Navbar>
      <Home></Home>
      <div className="max-w-6xl mx-auto flex justify-between items-center my-5 md:px-0 px-5">
        <h1 className="text-2xl font-bold">
          {toggle ? "Available Players" : "Selected Players"}
        </h1>
        <div>
          <button
            onClick={() => setToggle(true)}
            className={`py-1 px-4 border-1 border-gray-400 rounded-l-2xl border-r-0 font-bold ${toggle === true ? "bg-[#E7FE29]" : ""}`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`py-1 px-3 border-1 border-gray-400 rounded-r-2xl border-l-0 ${toggle === false ? "bg-[#E7FE29]" : ""}`}
          >
            Selected <span> ({selectedPlayer.length})</span>
          </button>
        </div>
      </div>
      {toggle === true ? (
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <Available
            selectedPlayer={selectedPlayer}
            setSelectedPlayer={setSelectedPlayer}
            availableBlance={availableBlance}
            setAvailableBlance={setAvailableBlance}
            playerPromise={playerPromise}
          ></Available>
        </Suspense>
      ) : (
        <SelectedPlayers toggle={toggle} setToggle={setToggle} handleRemoveCart={handleRemoveCart} selectedPlayer={selectedPlayer}></SelectedPlayers>
      )}
    </>
  );
}

export default App;
