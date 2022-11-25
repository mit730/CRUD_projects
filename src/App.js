import React, { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Form from "./components/Form";
import Post from "./components/Post";
import { useAuth0 } from "@auth0/auth0-react";
import Button from '@mui/material/Button';


function App() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodos] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <>
      
      {isAuthenticated ? (
        <div className="container">
          <div className="app-wrapper">
            <div className="head">
              <Header />
            </div>
            <div>
              <Form
                input={input}
                setInput={setInput}
                todos={todos}
                setTodos={setTodos}
                editTodo={editTodo}
                setEditTodos={setEditTodos}
              />
              <div className="logout">
              <Button variant="contained" size="large" className="logout_btn"
              onClick={() => logout({ returnTo: window.location.origin })}
              >
                Log Out
              </Button>
              </div>
            </div>

            <div>
              <Post
                todos={todos}
                setTodos={setTodos}
                setEditTodos={setEditTodos}
                isDisabled={isDisabled}
                setIsDisabled={setIsDisabled}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="login">
        <h1 className="text">Welcome to home page</h1>
        <Button className="btn_loggedIn" variant="contained" size="large" onClick={() => loginWithRedirect()}>Log In </Button>
        </div>
      )}
    </>
  );
}

export default App;

