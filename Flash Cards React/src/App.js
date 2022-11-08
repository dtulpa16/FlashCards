import { useEffect, useState } from "react";
import "./App.css";
import CardCollection from "./Components/Cards/CardCollection";
import SideBar from "./Components/SideBar/SideBar";

function App() {
  return (
    <div className="flex flex-row">
      <div class="basis-1/5 border-solid border">
        <SideBar />
      </div>
      <div class="basis-1/5"/>
      <div class="basis-4/5">
        <CardCollection />
      </div>
    </div>
  );
}

export default App;
