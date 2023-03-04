import './App.css';
import Home from "./component/Home/home";
import Navbar from "./component/NavBar/nav";
import Chat from "./component/Chat/chat";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Profile from "./component/Profile/profile";

function App() {
  return (
    <div className="App">

        <Router>
            <Navbar className=""/>
            <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/chat' element={<Chat/>}/>
                <Route path='/profile' element={<Profile/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
