import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
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
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
