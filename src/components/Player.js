import React from "react";

function Player({ avatarUrl, name }) {
  return (
    <div className="user">
      <span>{name}</span>
      <img className="avatar" 
        src= {avatarUrl}//"Your av here" 
        alt= {name} //"Your code here" 
        />
    </div>
  );
}

export default Player;
