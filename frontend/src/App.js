import './App.css';
import Navbar from "./component/NavBar/nav";
import Home from "./component/Home/home";
import Logo from "./component/Login/login";
import Chat from "./component/Chat/chat";
import {BrowserRouter as Router,Route , Switch} from "react-router-dom";
import React from "react";


function App() {
  return (
    <div className="App">
        <Navbar/>
        <Router>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/chat" exact component={Chat}/>
            </Switch>
        </Router>
        <Logo/>
    </div>
  );
}

export default App;
