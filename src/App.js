import {useEffect, useState} from "react";
import './App.css';
import Like from "./components/Like/Like";
import Share from "./components/Share/Share";

function App() {
  return (
    <div className="App">
      <Like name="Vignesh"/>
      <Share name="Utkarsh"/>
    </div>
  );
}

export default App;

