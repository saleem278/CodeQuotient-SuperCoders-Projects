import { Route, Switch, Link } from "react-router-dom";
import SignIn from "./containers/Login";
import SignUp from "./containers/Signup";
import Header from "./containers/Header";
import Success from "./containers/Success";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header />
          <div className="abc">
            <Link to="/signin">
              <button type="button" className="btn btn-warning">SignIn</button>
            </Link>
            <Link to="/signup">
              <button type="button" className="btn btn-success">SignUp</button>
            </Link>
          </div>
        </Route>
        <Route exact path="/signin">
          <Header />
          <SignIn />
        </Route>
        <Route exact path="/signup">
          <Header />
          <SignUp />
        </Route>
        <Route exact path="/signup/success">
          <Header />
          <Success myurl="/signup/success" />
        </Route>
        <Route exact path="/signin/success">
          <Header />
          <Success myurl="/signin/success" path="mypath1" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
