import { useEffect, useState } from "react";
import "./App.css";
import CardCollection from "./Components/Cards/CardCollection";
import SideBar from "./Components/SideBar/SideBar";

function App() {
  const [topicId, setTopicId] = useState(1);
  return (
    <div className="">
      <div class="w-1/5 border-solid border absolute bg-indigo-400 h-full pt-72">
        <SideBar setTopicId={setTopicId} />
      </div>
      <div class="basis-1/5" />
      <div class="left-1/3 border-2 border-black absolute w-1/3 h-1/3 text-center mt-60">
        <CardCollection cardId={topicId} />
      </div>
    </div>
  );
}

export default App;
