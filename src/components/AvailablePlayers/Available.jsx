import React, { use } from "react";
import Player from "../Player/Player";
import { useEffect } from "react";
import { addStored, getTolacal } from "../../utils/LocalStorage";
const Available = ({
  playerPromise,
  availableBlance,
  setAvailableBlance,
  selectedPlayer,
  setSelectedPlayer,
}) => {
  const players = use(playerPromise);

  useEffect(() => {
    const getStoredIds = getTolacal();
    const storedPlayers = [];
    for (const id of getStoredIds) {
      const playersId = players.find((player) => player.id === id);

      if (playersId) {
        storedPlayers.push(playersId);

      }
    }

    setSelectedPlayer(storedPlayers);
  }, [players]);

  const handleAddtoCart = (player) => {
    const newPlayer = [...selectedPlayer, player];
    setSelectedPlayer(newPlayer);
    addStored(player.id);
  };

  const handleRemoveCart =id=>{
    const getStoredId = getTolacal()
    const removeItem =getStoredId.filter(player=>player !== id)
    setSelectedPlayer(removeItem)
  }
  
  return (
    <div className="grid grid-cols-3 max-w-6xl mx-auto my-10 gap-5">
      {players.map((player) => (
        <Player
          availableBlance={availableBlance}
          setAvailableBlance={setAvailableBlance}
          setSelectedPlayer={setSelectedPlayer}
          selectedPlayer={selectedPlayer}
          player={player}
          handleAddtoCart={handleAddtoCart}
        ></Player>
      ))}
    </div>
  );
};

export default Available;
