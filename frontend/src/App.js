import React from "react";
//import App from "./App"
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddItem from "./components/Item/AddItem";
import Items from "./components/Item/Items";
import CartItems from "./components/Cart/CartItems";
import AddCart from "./components/Cart/AddCart";
import AddCustomer from "./components/Customer/AddCustomer";
import Customers from "./components/Customer/Customers";
import AddPromotion from "./components/Promotion/Promotions";
import Promotions from "./components/Promotion/Promotions";


function App() {
    return (
      <React.Fragment>
        <header>
           <Header />
        </header>
        <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/addItem" element={<AddItem />} exact />
          <Route path="/items" element={<Items />} exact />
          <Route path="/cartItems" element={<CartItems />} exact />
          <Route path="/addCart" element={<AddCart />} exact />
          <Route path="/addCustomer" element={<AddCustomer />} exact />
          <Route path="/customers" element={<Customers />} exact />
          <Route path="/addPromotion" element={<AddPromotion />} exact />
          <Route path="/promotions" element={<Promotions />} exact />
        </Routes>
        </main>
        </React.Fragment>

    );
  }


  export default App;