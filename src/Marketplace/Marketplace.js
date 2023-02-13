import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
import Categories from "./Categories";
import marketPieces from "./data";
import Artwork from "./Artwork";

const allCategories = ["all", ...new Set(marketPieces.map((item) => item.category))];


function Marketplace() { 
    const [artWork, setArtWork] = useState(marketPieces);
    const [categories, setCategories] = useState(allCategories);

    const filterItems = (category) => {
        if (category === 'all') {
            setArtWork(marketPieces);
            return;
        }

        const newArt = marketPieces.filter((item) => item.category === category);
        setArtWork(newArt);
    };

    return (
      <main>
        <section>
          <div className="wrapper">
            <h1 className="marketPlaceTitle">CGAC Marketplace</h1>
            <p className="marketPlaceDesc">
              CGAC’s mission is rooted in creating community, and as such
              aims to help emerging artists navigate the local art-scene as well as making art more accessible to foster a better relationship between artist and patron. This Market is
              another iteration of helping our community of artists bloom and
              prosper in the art world. Let’s get artists PAID for their amazing
              work! Profits go directly to the artists, and the art goes
              directly to you! What could be better?
            </p>
          </div>
          {/*pass in navbar  */}
          <Categories categories={categories} filterItems={filterItems} />
          <Artwork marketPieces={artWork} />
        </section>
      </main>
    );
}

export default Marketplace;
