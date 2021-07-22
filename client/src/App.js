import './App.css';
import {Route} from 'react-router-dom';
import Landing from "./components/Landing/Landing"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import About from "./components/About/About"
import Activity from "./components/Activity/Activity"


function App() {
  return (
    <div className="App">
     <Route exact path="/" component={Landing}></Route>
     <Route exact path="/home" component={Navbar}></Route>
    <Route exact path="/home" component= {Home}></Route>
    <Route exact path="/home/:id" component ={About} />
    <Route exact path="/activity" component={Activity} />
     </div>
  );
}

export default App;
