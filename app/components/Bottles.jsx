var React = require('react');
const { EuiButton } = require("@elastic/eui");

module.exports = function Bottles({initialBottles, bottles, setBottles}) {


  const clickBottle = (key) => {
    if (bottles[key]) {
      let newBottles = Object.assign({}, bottles);
      delete newBottles[key];
      setBottles(newBottles);
    } else {
      let newBottles = Object.assign({}, bottles);
      newBottles[key] = 1;
      setBottles(newBottles);
    }
  };
  return (
      <div id="bottleHolderHolder">
        <div id="bottleHolder">
        {initialBottles.map((key) => (
          <a className={bottles[key] ? "bottle active" : "bottle"} onClick={() => clickBottle(key) } key={key}><img src={require('/images/bottles/' + key + '.png').default} /></a>
        ))}
      </div>
     </div>
  );
};
