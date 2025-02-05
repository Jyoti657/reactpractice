import { useState } from "react";
export default function player({initiaName, symbol,isactive,onChangeName}){
    const [playerName,setplayerName]=useState(initiaName);

    const[isEditing,setIsEditing]=useState(false);
    function handleEditClick(){
        setIsEditing((editing)=>!editing);
        if(isEditing){
        onChangeName(symbol,playerName)

        }
    }
    function handleChange(event){
        setplayerName(event.target.value);

    }
     let editplayerName=  <span className="player-name">{playerName}</span>;
    //   let btnCaption='Edit'
     if(isEditing){
        editplayerName=<input type="text" required value={playerName} 
        onChange={handleChange}/>
        // btnCaption='save
     }
    return(
        <li className={isactive ?'active':undefined}>
        <span className="player">
            {editplayerName}
  
      <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing? 'save':'Edit'}</button>
      </li>
    );

}