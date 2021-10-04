import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import About from "./components/About/About";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { NotFound } from "./components/NotFound/NotFound";
import { Services } from "./components/Services/Services";
import { Signup } from "./components/Signup/Signup";

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact >
            <Main/>
          </Route>
          <Route path="/services">
            <Services/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/signup">
            <Signup/>
          </Route>
          <Route path="/*">
            <NotFound/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
