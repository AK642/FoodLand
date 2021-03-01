import './scss/App.scss';
import Header from './Header';
import Hero from './Hero';
import Menu from './Menu';
import Cart from './Cart';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login';
import Register from './Register';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import FoodView from './FoodView';

function App() {

  const [{}, dispatch] = useStateValue()

  useEffect(() => {

    auth.onAuthStateChanged((authUser) => {
      console.log('THE USER IS >>>', authUser)
      if(authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
   
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Header />
            <Login />
          </Route>
          <Route path="/register">
            <Header />
            <Register />
          </Route>
          <Route path="/food">
            <Header />
            <FoodView />
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
