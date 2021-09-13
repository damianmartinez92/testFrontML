import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Pages/Header/index";
import Listado from "./Pages/Listado/index";
import Detalle from "./Pages/Detalle/index";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Header} />
        <Route exact path="/items/search/:id" component={Listado} />
        <Route exact path="/items/:id" component={Detalle} />
      </Switch>
    </Router>
  );
}

export default App;
