import { useState } from "react";

function ImageCard(props) {

  const [liked, setLiked] = useState(false);

  return (
    <div
      className="card"
      onClick={props.onClick}
    >

      <img
        src={props.imageUrl}
        alt={props.title}
      />

      <div className="card-content">

        <div className="card-top">

          <h2>{props.title}</h2>

          <span
            className="like-btn"
            onClick={(e) => {
              e.stopPropagation();
              setLiked(!liked);
            }}
          >
            {liked ? "❤️" : "🤍"}
          </span>

        </div>

        <p>{props.description}</p>

      </div>

    </div>
  );
}

export default ImageCard;