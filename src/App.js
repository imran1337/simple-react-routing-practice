import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home/Home";
import UserDetails from "./Component/UserDetails/UserDetails";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/user" component={Home} />
      <Route exact path="/user/:userId" component={() => <UserDetails />} />
      <Route path="*" render={() => <h1>Data not found</h1>} />
    </Switch>
  );
}

export default App;
