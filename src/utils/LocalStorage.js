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

const removeToLocalStorage =id =>{
    const getStoredIds =getToLocalStorage()
    const removeItem =getStoredIds.filter(ids=>ids !== id)
    saveToLocalStorage(removeItem)
}

export {addToLocalStorage as addStored ,getToLocalStorage as getTolacal , removeToLocalStorage}