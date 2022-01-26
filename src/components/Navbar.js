import React from "react";

const { useContext } = React;

const Navbar = () => {

  let imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <nav>
      <div className="navbar1">
        <img src={"https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png"}/>
        <img src={imgUrl} alt="pokeapi-logo" className="navbar-img" />
      </div>
    </nav>
  );
};

export default Navbar;
