
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Search from "./pages/Search";

const AppRoutes = () => {

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/movie/:id" element={ <Movie /> } />
        <Route path="/search" element={ <Search /> } />
        <Route path="/" element={ <Home /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;