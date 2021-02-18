import './scss/App.scss';
import Header from './Header';
import Hero from './Hero';
import Menu from './Menu';
import Cart from './Cart';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login';
import Register from './Register';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/cart">
            <Header />
            <Cart />
          </Route>
          <Route path="/">
            <Header />
            <Hero />
            <Menu />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
