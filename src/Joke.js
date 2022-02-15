import React from "react";
import like from "./images/like.svg";
import dislike from "./images/dislike.svg";

export default function Joke(props) {
  console.log(props.isPun);
  return (
    <div className="jokes">
      {props.setup && <h3> Setup: {props.setup} </h3>}
      <p className="light-text"> Punchline: {props.punchline} </p>
      <div className="reactions">
        <button>
          <img src={like} alt="like button" /> {props.upvotes}
        </button>
        <button>
          <img src={dislike} alt="dislike button" /> {props.downvotes}
        </button>
      </div>
    </div>
  );
}
