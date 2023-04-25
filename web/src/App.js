/*eslint-disable*/
import "./App.css";
import { useState } from "react";
import React, { useEffect } from "react";
import axios from "axios";

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  useEffect(() => {
    axios
      .get("http://localhost:8080/getData")
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    // 페이지가 처음 로드될 때 실행할 함수
  }, []); // 의존성 배열이 빈 배열이므로, 페이지가 처음 로드될 때 한 번만 실행됨

  const [inputValue, setInputValue] = useState("");
  const input = (event) => {
    setInputValue(event.target.value);
    // console.log(event.target.value);
  };
  const [todoList, setTodoList] = useState("");
  function updateTodoList() {
    setTodoList();
  }
  function addTest() {
    axios
      .post("http://localhost:8080/addData", {
        inputValue,
      })
      .then((response) => {
        console.log(response.data);
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
