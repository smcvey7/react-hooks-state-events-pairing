import React from "react";

function Heading({ title, views, date, likes, dislikes, showComments, onCommentClick, handleLikeClick }){
  return(



    <div>
      <h1>{title}</h1>
      <p>{views} Views | Uploaded {date}</p>
      <button onClick={handleLikeClick} name="likes">{likes}👍</button>
      <button onClick={handleLikeClick} name="dislikes">{dislikes}👎</button><br />
      <button onClick={onCommentClick} >{showComments ? "Hide comments": "Show comments"}</button>
    </div>
  )
}

export default Heading