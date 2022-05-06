import React from "react";
//import App from "./App"
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";


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
        </Routes>
        </main>
        </React.Fragment>

    );
  }


  export default App;