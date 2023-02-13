import React from "react";

const Artwork = ({ marketPieces }) => {
  return (
    <div className="marketWorkContainer wrapper">
      {marketPieces.map((artPiece) => {
        const { id, img, title, desc, price, artist, size, medium } = artPiece;
        return (
          <article key={id}>
            <div className="titleAndArtist">
              <h2>{artist}</h2>
              <h2 className="title">{title}</h2>
            </div>
            <div className="imgContainer">
              <img src={img} alt={title} />
            </div>
            <div className="artWorkInfo">
              <h3>{desc}</h3>
              <h4>
                {size}
                <br />
                {medium}
              </h4>
              <h4>${price}</h4>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Artwork;
