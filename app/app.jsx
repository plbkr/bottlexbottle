var React = require("react");
var ReactDOM = require("react-dom");
const Route = require("react-router-dom").Route;
const BrowserRouter = require("react-router-dom").BrowserRouter;

// testing a change to see if it triggers a test run in the PR

/* Import Components */
const Home = require("./components/Home");
const Drink = require("./components/Drink");

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={Home} />
    <Route exact path="/:drinkKey" component={Home} />
  </BrowserRouter>,
  document.getElementById("main")
);
