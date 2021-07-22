var React = require('react');
const { Link } = require("react-router-dom");

module.exports = function Recipe({code,cocktail,setCocktail}) {
  const clickCocktail = (code) => {
    setCocktail(code);
  };

  return (
    <Link onClick={() => clickCocktail(code)} className={"cocktailFrame full " + cocktail.source} id={code}>
      <img src={require('/images/thumbnails/' + code + ' copy.png').default} />
      <h6>{cocktail.name}</h6>
      <ul className={"ilistframe list-group"}>
        {cocktail.ingredients.map((ing) => (
          <li className={"list-group-item"} key={ing}>{ing}</li>
        ))}
      </ul>
    </Link>
  );
};
