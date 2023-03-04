import './App.css';
import Navbar from "./component/NavBar/nav";
import Home from "./component/Home/home";
import LoginForm from "./component/Auth/LoginForm";
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Home/>

    </div>
    //   <div className="bg-gray-100 min-h-screen">
    //       <div className="flex justify-center items-center h-screen">
    //           <LoginForm />
    //       </div>
    //   </div>
  );
}

export default App;
