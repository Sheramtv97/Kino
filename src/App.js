import './App.scss';
import React, {useState} from "react";
import {Routes,Route} from "react-router-dom";
import Home from "./componoments/Home";
import Meat from "./componoments/Meat";
import Support from "./componoments/Support";
import DetailCard from "./componoments/api/DetailCard";
import ProfilActer from "./componoments/api/ProfilActer";
import SearchResult from "./componoments/SearchResult";
import Films from "./componoments/Films"


function App() {
    // const [node,setNode] = useState(JSON.parse(localStorage.getItem('node') || false))

    // const chanGhe = () =>{
    //     setNode(!node)
    //     localStorage.setItem('node',JSON.stringify(!node))
    // }

  return (
    <div className="App">
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/films'} element={<Films/>}/>
            <Route path={'/meat'} element={<Meat/>}/>
            <Route path={'/support'} element={<Support/>}/>
            <Route path={'/movies/movies-detail/:myId'} element={<DetailCard/>}/>
            <Route path={'/slid/:pro'} element={<ProfilActer/>}/>
            <Route path={'/movie/search-result/:movieName'} element={<SearchResult/>}/>
        </Routes>
    </div>
  );
}

export default App;
