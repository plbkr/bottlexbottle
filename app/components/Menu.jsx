var React = require('react');
const { EuiButton, EuiFieldSearch, EuiSelect } = require("@elastic/eui");


module.exports = function Menu({initialBottles, bottles, setBottles, search, setSearch, view, setView, source, setSource, operator, setOperator, setCocktail}) {
  const changeSearch = (e) => {
    setSearch(e.target.value);
    setCocktail("clear");
  };
  const changeView = (e) => {
    setView(e.target.value);
    setCocktail("clear");
  };
  const changeSource = (e) => {
    setSource(e.target.value);
    setCocktail("clear");
  };
  const changeOperator = (e) => {
    setOperator(e.target.value);
    setCocktail("clear");
  };
  const toggleAllBottles = (e) => {
    if (Object.keys(bottles).length) {
      setBottles({});
    } else {
      const allBottles = {};
      for (const btl of initialBottles) {
        allBottles[btl] = 1;
      }
      setBottles(allBottles);
    }
    setCocktail("clear");
  };

  return (
      <div id="searchbox">
        <EuiFieldSearch
          placeholder="Search cocktails"
          onChange={(e) => changeSearch(e) }
          value={search}
        />
         or click
         <a onClick={() => toggleAllBottles() }> bottles </a>
        to see
        <EuiSelect
          id="view"
          options={
            [
              {value: "pictures", text: "pictures"},
              {value: "recipes", text: "recipes"},
            ]
          }
          onChange={(e) => changeView(e) }
          value={view}
        />
        of
        <EuiSelect
          id="source"
          options={
            [
              {value: "drinks", text: "drinks"},
              {value: "originals", text: "originals"},
              {value: "classics", text: "classics"},
              {value: "tiki", text: "tiki drinks"}
            ]
          }
          onChange={(e) => changeSource(e) }
          value={source}
        />
        that use
        <EuiSelect
          id="operator"
          options={
            [
              {value: "only", text: "only"},
              {value: "any", text: "any of"},
              {value: "all", text: "all of"},
              {value: "exactly", text: "exactly"}
            ]
          }
          onChange={(e) => changeOperator(e) }
          value={operator}
        />
        those bottles
      </div>
  );
};
