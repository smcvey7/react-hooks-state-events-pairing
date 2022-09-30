import React, {useState, useEffect} from "react";
import video from "../data/video.js";
import Heading from "./Heading.js";
import CommentList from "./CommentList.js";

function App() {
  const [showComments, setShowComments] = useState(false)
  const [likeDislike, setLikeDislike] = useState({
    likes: video.upvotes,
    dislikes: video.downvotes
  })

  function handleToggle(){
    setShowComments(!showComments)
  }

  function updateLikes(e){
    const key = e.target.name
    setLikeDislike({
      ...likeDislike,
      [key]: likeDislike[key]+1
    })
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Heading handleLikeClick={updateLikes} title={video.title} views={video.views} date={video.createdAt} likes={likeDislike.likes} dislikes={likeDislike.dislikes} showComments={showComments} onCommentClick={handleToggle} />
      {showComments ? <CommentList showComments={showComments} commentData = {video.comments} /> : <></>}
    </div>
  );
}

export default App;
