import React, { use } from "react";
import Player from "../Player/Player";
const Available = ({ playerPromise, availableBlance, setAvailableBlance,selectedPlayer,setSelectedPlayer }) => {
  const players = use(playerPromise);
  console.log(players);
  return (
    <div className="grid grid-cols-3 max-w-6xl mx-auto my-10 gap-5">
      {players.map((player) => (
        <Player
          availableBlance={availableBlance}
          setAvailableBlance={setAvailableBlance}
          setSelectedPlayer={setSelectedPlayer}
          selectedPlayer ={selectedPlayer}
          player={player}
        ></Player>
      ))}
    </div>
  );
};

export default Available;
