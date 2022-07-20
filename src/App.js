import React from "react";
import SignIn from "./pages/Signin";
// import SearchMovies from "./SearchMovie";
import {BrowserRouter , Route, Routes } from "react-router-dom"
import Aj from './main';
// import MOvieCard from "./pages/MovieCard";

export default function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/searchMovies' element={<Aj/>}/>
      <Route path='/' element={<SignIn/>}/>
      {/* <Route path='/MovieCard' element={<MOvieCard/>}/> */}
    </Routes>
    </BrowserRouter>
  </div>
  );
}
