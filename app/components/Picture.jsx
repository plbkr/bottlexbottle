var React = require('react');
const cocktailObj = require("./../cocktails");
const { Link } = require("react-router-dom");

module.exports = function Picture({code, cocktail, setCocktail}) {

  const clickCocktail = (code) => {
    setCocktail(code);
  };

  return (
    <Link onClick={() => clickCocktail(code)} className={"cocktailFrame " + cocktail.source} id={code}>
      <img src={require('/images/thumbnails/' + code + ' copy.png').default} />
      <h6>{cocktail.name}</h6>
    </Link>
  );
};
