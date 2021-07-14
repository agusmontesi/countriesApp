import './App.css';
import {Route} from 'react-router-dom';
import Landing from "./components/Landing/Landing"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"

function App() {
  return (
    <div className="App">
     <Route exact path="/" component={Landing}></Route>
     <Route path="/" component={Navbar}></Route>
    <Route path="/home" component= {Home}></Route>
     </div>
  );
}

export default App;
