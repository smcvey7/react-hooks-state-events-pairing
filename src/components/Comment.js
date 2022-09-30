import React from "react";

function Comment({ user, comment }){
  return(
    <div>
      <strong>{user}</strong><br />
      <p>{comment}</p>
    </div>
  )
}

export default Comment