module.exports = {
  doCocktailSearch,
};

function doCocktailSearch(cocktailObj, bottles, search, view, source, operator) {
  var searchedCocktails = [];
  for (const code of Object.keys(cocktailObj)) {
    var cdata = cocktailObj[code];
    if (search.length > 0) {
      // if search box is populated, don't do other filters
      if (cdata.name.toLowerCase().indexOf(search.toLowerCase()) < 0 ) {
        // matching search
        continue;
      }
    } else {
      // match source
      if (source == 'originals' && cdata.source != 'original') {
        continue;
      }
      if (source == 'classics' && cdata.source == 'original') {
        continue;
      }
      if (source == 'tiki' && cdata.source != 'tiki') {
        continue;
      }

      // match bottles
      var cbottles = Object.assign({},cdata.bottles);
      var sbottles = Object.assign({},bottles);

      for (const sb of Object.keys(bottles)) {
        delete cbottles[sb];
      }
      for (const cb of Object.keys(cdata.bottles)) {
        delete sbottles[cb];
      }
      const clength = Object.keys(cbottles).length;
      const slength = Object.keys(sbottles).length;
      const cmatches = Object.keys(cdata.bottles).length - clength;

      if (operator == 'only' && clength != 0) {
        continue;
      } else if (operator == 'any' && cmatches == 0) {
        continue;
      } else if (operator == 'all' &&  slength != 0) {
        continue;
      } else if (operator == 'exactly'  && (clength != 0  || slength != 0)) {
        continue;
      }

    }
    searchedCocktails.push(code);
  }

  return searchedCocktails.sort();
}
