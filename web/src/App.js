/*eslint-disable*/
import "./App.css";
import { useState } from "react";
import axios from "axios";

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [inputValue, setInputValue] = useState("");
  const input = (event) => {
    setInputValue(event.target.value);
    // console.log(event.target.value);
  };
  function getTest() {
    axios
      .get("http://localhost:8080/getData")
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function addTest() {
    axios
      .post("http://localhost:8080/addData", {
        inputValue,
      })
      .then((response) => {
        console.log("Data saved successfully!");
      })
      .catch((error) => {
        console.error("Error saving data: ", error);
      });
  }

  return (
    <div className="App">
      <div className="container">
        <div className="title">ToDo List</div>
        <div className="input">
          <input
            value={inputValue}
            onChange={input}
            placeholder="할 일을 적어주세요"
            type="text"
          />
          <button onClick={addTest}>Submit</button>
          {/* <p>{inputValue}</p> */}
        </div>
      </div>
    </div>
  );
}

export default App;
