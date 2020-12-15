import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import { useStateValue } from "./contexts/StateProvider";
import { auth } from "./firebase/firebase";
import Footer from "./components/Footer/Footer";
import Payment from "./components/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Orders/Orders";
import Categories from "./components/Categories/Categories";
import FilteredProducts from "./components/Products/FilteredProducts";
import SearchBar from "./components/Header/SearchBar/SearchBar";

const promise = loadStripe(
  "pk_test_51HtzHVLzveYCGMfJh8RluRQdy78SbyrwjeIM2HsK4Pfu0yUOdXoj73JaDvYrysJ93R4F3PecH9xek4RisfhNSLIk00sgVskrKG"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
    <Router>
      <div className="App">
        <Switch>
        <Route exact path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>          
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
            <Footer />
          </Route>
          
          <Route path="/home">
            <Header />
            <Categories category='Home'/>
            <Footer/>
          </Route>
          <Route path="/health">
            <Header />
            <Categories category='Health'/>
            <Footer />
          </Route>
          <Route path="/books">
            <Header />
            <Categories category='Books'/>
            <Footer />
          </Route>
          <Route path="/music">
            <Header />
            <Categories category='Music'/>
            <Footer />
          </Route>
          <Route path="/grocery">
            <Header />
            <Categories category='Grocery'/>
            <Footer />
          </Route>
          <Route path="/computers">
            <Header />
            <Categories category='Computers'/>
            <Footer />
          </Route>
          <Route path="/garden">
            <Header />
            <Categories category='Garden'/>
            <Footer />
          </Route>
          <Route path="/search">
            <Header />
            
            <Footer />
          </Route>
          
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
