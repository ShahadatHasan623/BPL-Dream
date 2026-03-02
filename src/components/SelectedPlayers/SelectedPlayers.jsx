import React from "react";
import { MdDelete } from "react-icons/md";

const SelectedPlayers = ({ selectedPlayer }) => {
  return (
    <div className="max-w-6xl mx-auto">
      {selectedPlayer.map((selected) => (
        <div>
          <div className="card bg-base-300 text-gray-700 p-5">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img
                  className="w-20 object-cover bg-gray-300 p-2 rounded-2xl"
                  src={selected.player_image}
                  alt=""
                />
                <div>
                  <h1 className="font-semibold text-xl">{selected.player_Name}</h1>
                  <p>{selected.boweling_style}</p>
                </div>
              </div>

              <div>
                <button  className="bg-red-300 p-2 rounded-full hover:bg-red-500"><MdDelete  size={30}/></button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectedPlayers;
