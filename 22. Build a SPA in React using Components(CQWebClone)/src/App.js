import React from "react";
import { Route, Switch} from "react-router-dom";
import Header from "./Components/Navbar";
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
import Learner from "./Pages/LearnersPage";
import Hire from "./Pages/HireDevPage";
import Blog from "./Pages/Blog";
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Route path="/">
            <Header />
            <main className="main_wrapper">
              <Learner />
            </main>
            <Footer/>
          </Route>
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/hire-developers">
          <Header />
          <Hire />
          <Footer/>
        </Route>
        <Route path="/*">
          <Header/>
          <Blog/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
