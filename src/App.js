import { useState } from "react";
import axios from "axios";

function App() {
  const [data, setdata] = useState([]);
  const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw&type=single";

  const yo = () => {
    axios.get(url).then((result) => {
      setdata(result.data);
      console.log(result);
    });
  };
  function red(){
    window.location.href = "https://youtu.be/M8uiTN40Sg0?si=5mQ9VljH5OYreYrS";
  }

  return (
    <div className="App">
      <div className="container">
        <img
          src={
            "https://i.pinimg.com/474x/90/33/83/903383dbe84483ffe3628a9149a55a1e.jpg"
          }
          alt="check your internet or throw your phone"
          className="top"
        />

        <div className="bottom">
          <div className="main">{data.joke}</div>
          <div className="info">
            <button className="btn1" onClick={red}>Dankonce</button>
            <button className="btn2" onClick={yo}>
              next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
