var React = require('react');
const { EuiButton, EuiIcon } = require("@elastic/eui");
const cocktailObj = require("./../cocktails");
const { Link } = require("react-router-dom");
const { Helmet } = require('react-helmet');

module.exports = function Drink({drinkKey, setCocktail, setSearch}) {
  const cocktail = cocktailObj[drinkKey];

  const goBack = function() {
    setCocktail("clear");
  }

  const scrollTo = (ref) => {
    if (ref) {
      ref.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const drinkLink = function(drink) {
    setCocktail("drinklink:" + drink);
    setSearch(drink);
  }

  return (
      <div className={"cocktailPost"} id={"cocktailPost"} ref={scrollTo}>
      <Helmet>
        <title>{cocktail.name}</title>
        <meta name="description" content="" />
        <meta property="og:image" content={require('/images/cocktails/' + cocktail.code + '.gif').default} />
      </Helmet>
        <EuiIcon className={"exitDrink"} type="cross" size="large" onClick={() => goBack() } />
        <img height={"400"} src={require('/images/cocktails/' + cocktail.code + '.gif').default} />
        <br />
        <h2 className={"name"}>{cocktail.name}</h2>
        {cocktail.seinfeld &&
        <div className={"seinfeld"}>{cocktail.seinfeld}</div>}
        <div className={"text"}>
          { cocktail.text.split(/(\{[^\{\}]+})/).map((chunk) => {
            return chunk == '{break}' ? (<br />) :
            chunk.match(/\{.+\}/) ? (<Link onClick={() => drinkLink(chunk.replace(/{|}/g,''))}>{chunk.replace(/{|}/g,'')}</Link>) :
            <span>{chunk}</span>
          }
          )}
        </div>
        <ul className={"ilist list-group"}>
          <li className={"whn list-group-item"}>What You Need</li>
          {cocktail.ingredients.map((ing) => (
            <li className={"list-group-item"} key={ing}>{ing}</li>
          ))}
        </ul>
        <div className={"directions"}>{cocktail.directions}</div>
        {cocktail.extra &&
          <div className={"extra"}>{cocktail.extra}</div>}
        <EuiButton label="Default" onClick={() => goBack() }>Go Back</EuiButton>
        <br />
        <br />
      </div>
  );
};
