var React = require('react');
const { EuiButton } = require("@elastic/eui");
const cocktailObj = require("./../cocktails");
const Picture = require("./Picture");
const Recipe = require("./Recipe");
const { doCocktailSearch } = require("./../utils/doCocktailSearch");

module.exports = function Thumbnails({bottles, search, view, source, operator, setCocktail}) {
  return (
      <div id="cocktailHolder">
        {doCocktailSearch(cocktailObj,bottles, search, view, source, operator).map((key) =>
          view == "pictures" ?
            (<Picture code={key} cocktail={cocktailObj[key]} setCocktail={setCocktail} />) :
            (<Recipe code={key} cocktail={cocktailObj[key]} setCocktail={setCocktail} />)
        )}
      </div>
  );
};
