import React, { Component } from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Search from "./components/searchbar";
import Header from "./components/header";
import Login from "./components/login";

function App() {
  return (
    <RecoilRoot>
      <Search></Search>
      <Header></Header>
      <Routes>
        <Route path="/"></Route>
      </Routes>
      <Login></Login>
    </RecoilRoot>
  );
}

export default App;
