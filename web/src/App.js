/*eslint-disable*/
import "./App.css";
import { useState } from "react";
import React, { useEffect } from "react";
import axios from "axios";

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const input = (event) => {
    setInputValue(event.target.value);
  };

  const addData = (data) => {
    setTodoList([...todoList, data]);
  };

  function addTest() {
    axios
      .post("http://localhost:8080/addData", {
        inputValue,
      })
      .then((response) => {
        addData(response.data);
        console.log(response.data);
        console.log(todoList);
      })
      .catch((error) => {
        console.error("Error saving data: ", error);
      });
  }
  function test() {
    console.log(todoList[0]);
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
          <button onClick={test}>test</button>
          {todoList.length === 0 ? (
            <p>No data yet</p>
          ) : (
            <ul>
              {todoList[0].map((item, index) => (
                <li key={index}>{item.text}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
