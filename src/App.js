import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import About from "./components/About/About";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact >
            <Main/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
