import React from "react";
import Comment from "./Comment";

function CommentList({ commentData }){

  console.log("commentData", commentData)

  const commentList = commentData.map((item)=>{
    return <Comment key={item.id} user = {item.user} comment = {item.comment} />
  })
  console.log("commentList", commentList)

  return (
    <div>
      {commentList}
    </div>
  )
}

export default CommentList