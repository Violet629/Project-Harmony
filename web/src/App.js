/*eslint-disable*/
import "./App.css";
import { useState } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [page, setPage] = useState(true);
  function swPage() {
    if (page == true) {
      setPage(false);
    } else {
      setPage(true);
    }
  }
  return (
    <div className="App">
      {page ? (
        <div className="container">
          <div className="title">Login Page</div>
          <form action="/login" method="post">
            <div className="id-input">
              <input
                type="text"
                class="login-id"
                placeholder="ID"
                autocomplete="off"
                name="id"
              />
            </div>
            <div className="pw-input">
              <input
                type="password"
                class="login-pw"
                placeholder="Password"
                name="pw"
              />
            </div>
            <div className="button">
              <button type="submit" class="button-signin">
                Login
              </button>
              <button onClick={swPage} type="button" class="button-signup">
                Singup
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="container">
          <div className="title">SingUp Page</div>
          <form action="/singup" method="post">
            <div className="id-input">
              <input
                type="text"
                class="login-id"
                placeholder="New ID"
                autocomplete="off"
                name="id"
              />
            </div>
            <div className="pw-input">
              <input
                type="password"
                class="login-pw"
                placeholder="New Password"
                name="pw"
              />
            </div>
            <div className="button">
              <button type="submit" class="button-signin">
                Submit
              </button>
              <button onClick={swPage} type="button" class="button-signup">
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
