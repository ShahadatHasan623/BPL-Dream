const getToLocalStorage =()=>{
    const storedIds =localStorage.getItem("player")
    if(storedIds){
        const getStoredIds =JSON.parse(storedIds)
        return getStoredIds
    }
    return []
}

const saveToLocalStorage =player =>{
    const savePlayer =JSON.stringify(player)
    localStorage.setItem("player",savePlayer)
}

const addToLocalStorage =id =>{
    const players =getToLocalStorage()
    const newPlayers = [...players,id]
    saveToLocalStorage(newPlayers)
}

export {addToLocalStorage as addStored ,getToLocalStorage as getTolacal}