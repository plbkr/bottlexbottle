var React = require('react');
const { EuiButton } = require("@elastic/eui");
const { useLocation } = require("react-router-dom");

const Bottles = require("./Bottles");
const Menu = require("./Menu");
const Thumbnails = require("./Thumbnails");
const Drink = require("./Drink");

module.exports = function Home({match}) {
  const initialBottles = [
    "whiskey", "gin", "rum", "vermouth", "campari", "maraschino", "chartreuse", "triplesec", "brandy", "elderflower",
    "benedictine","fernet","applebrandy","aperol","amaro","scotch","tequila","mezcal","pisco"
  ];
  const [bottles, setBottles] = React.useState({});
  const [search, setSearch] = React.useState("");
  const [view, setView] = React.useState("pictures");
  const [source, setSource] = React.useState("drinks");
  const [operator, setOperator] = React.useState("only");
  const [cocktail, setCocktail] = React.useState("");

  if (cocktail.match('drinklink:') && match.params.drinkKey) {
    var savedsearch = cocktail.split(':')[1];
    window.location.replace('/?search=' + savedsearch);
  } else if (cocktail == 'clear' && match.params.drinkKey) {
    window.location.replace('/');
  } else if (cocktail == 'clear' || cocktail.match('drinklink:')) {
    window.history.pushState({}, '', '/');
    setCocktail("");
  } else if (cocktail && ! match.params.drinkKey) {
    window.history.pushState({}, '', '/' + cocktail);
  } else if (match.params.drinkKey && match.params.drinkKey != cocktail) {
    setCocktail(match.params.drinkKey);
  }

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();

  if (query.get("search") && query.get("search") != search ) {
    var searchparam = query.get("search");
    window.history.pushState({}, '', '/');
    setSearch(searchparam);
  }

  return (
    <div id="container">
      <Bottles initialBottles={initialBottles} bottles={bottles} setBottles={setBottles} />
      <Menu initialBottles={initialBottles} bottles={bottles} setBottles={setBottles} search={search} setSearch={setSearch} view={view} setView={setView} source={source} setSource={setSource} operator={operator} setOperator={setOperator} setCocktail={setCocktail} />
      {cocktail && cocktail != 'clear' ?
        (<Drink drinkKey={cocktail} setCocktail={setCocktail} setSearch={setSearch} />) :
        (<Thumbnails bottles={bottles} search={search} view={view} source={source} operator={operator} setCocktail={setCocktail} />)
      }
    </div>
  );
};
