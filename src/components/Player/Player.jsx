import React, {  useState } from "react";
import userImg from "../../assets/user1.png";
import { BsFlagFill } from "react-icons/bs";
import { toast } from "react-toastify";

const Player = ({ player, availableBlance, setAvailableBlance,selectedPlayer,setSelectedPlayer,handleAddtoCart }) => {
  const [isSelected, setSelected] = useState(false);


  const handleBlance = (player) => {
    setSelected(true);
    if(availableBlance < player.price){
        toast("Not a enuagh balance")
        return
    }
    setAvailableBlance(availableBlance - player.price)
    const newPlayer =[...selectedPlayer,player]
    setSelectedPlayer(newPlayer)
    handleAddtoCart(player)
    toast.success("selected")
  };
  return (
    <div key={player.id} className="card bg-base-100 shadow-sm p-5 space-y-1">
      <figure>
        <img src={player.player_image} alt="Shoes" />
      </figure>
      <div className="mt-2">
        <div className="flex  items-center gap-2">
          <img src={userImg} alt="" />
          <h1 className="text-xl font-bold">{player.player_Name}</h1>
        </div>
        <div className="flex justify-between items-center space-y-2">
          <div className="flex items-center gap-1 mt-3">
            <BsFlagFill />
            <p className="text-xl font-semibold">{player.country}</p>
          </div>
          <button className="btn">{player.playing_role}</button>
        </div>
        <div className="border-1 border-gray-200 mt-3"></div>
        <div className="flex justify-between items-center mt-3">
          <h2 className="font-bold">Rating</h2>
          <span className=" text-gray-600">{player.rating}</span>
        </div>
        <div className="flex justify-between items-center mt-3">
          <h2 className="font-bold">Left-Hand-Bat</h2>
          <span className=" text-gray-600">{player.boweling_style}</span>
        </div>

        <div className=" flex justify-between items-center mt-3">
          <div>
            <h2 className="font-bold">Price: ${player.price}</h2>
          </div>
          <button disabled={isSelected} onClick={() => {
            handleBlance(player)
          }} className="btn">
            {isSelected ? "Slected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
