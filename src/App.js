import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
import NavBar from "./components/NavBar/NavBar";
import ProductDetail from "./components/ProductDetail/ProductDetail";

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
              <NavBar />
              <Home />
              <Footer />
            </Route>
            <Route path="/checkout">
            <NavBar />
              <Checkout />
              <Footer />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/payment">
            <NavBar />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </Route>
            <Route path="/orders">
            <NavBar />
              <Orders />
              <Footer />
            </Route>

            <Route  path="/products/:productId">
            <NavBar />
              <ProductDetail />
              <Footer />
            </Route>


            <Route path="/home">
            <NavBar />
              <Categories category="Home" />
              <Footer />
            </Route>
            <Route path="/health">
            <NavBar />
              <Categories category="Health" />
              <Footer />
            </Route>
            <Route path="/books">
            <NavBar />
              <Categories category="Books" />
              <Footer />
            </Route>
            <Route path="/music">
            <NavBar />
              <Categories category="Music" />
              <Footer />
            </Route>
            <Route path="/grocery">
            <NavBar />
              <Categories category="Grocery" />
              <Footer />
            </Route>
            <Route path="/computers">
            <NavBar />
              <Categories category="Computers" />
              <Footer />
            </Route>
            <Route path="/garden">
            <NavBar />
              <Categories category="Garden" />
              <Footer />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
