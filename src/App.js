import React,{useEffect} from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Orders from './components/Orders';
import Login from "./components/Login";
import { auth } from "./components/Firebase";
import {useStateValue} from './components/StateProvider';
 import Payment from "./components/Payment";
 import{Elements } from '@stripe/react-stripe-js'
 import { loadStripe} from '@stripe/stripe-js'
function App() {
const promise =loadStripe("pk_test_51JSkwcSFjVjUGeUBubvRPqKNpSPVvxJHg75YnCm57QoSc3vruhjGaUTji7XR4OoSfZQFfnnE6WFrvWM1Ejjif1G8002EaoPo0F")

  const[{},dispatch]=useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
  
    <Router>
      <div className="app">
        <Header />
        <Switch>
          
          <Route exact path="/checkout">
           
            <Checkout/>
          </Route>
          <Route exact path="/payment">
        <Elements stripe={promise}>
        
           <Payment />
            </Elements>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
            <Route exact path="/orders">
            <Orders/>
          </Route>
          
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
