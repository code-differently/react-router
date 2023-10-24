import './App.css';
import Home from './components/Home';
// import NBA from './components/NBA';
// import NFL from './components/NFL';
import { BrowserRouter as Router, Route, Link,Routes } from 'react-router-dom';
import NBA from './components/NBA';
import NFL from './components/NFL';


function App() {
  return (
    <Router>
    <div className="App"> 
    

    <nav>
      <ul>
        <div><Link to="/">Home</Link></div>
        <div><Link to="/nba">NBA</Link></div>
        <div><Link to="/nfl">NFL</Link></div>

      </ul>
    </nav>
    
    <Routes>
      <Route path="/" element={<Home/>} exact/>
      <Route path="/nba" element={<NBA/>}>NBA</Route>
      <Route path="/nfl" element={<NFL/>}>NFL</Route>
    </Routes>
   
    </div>
    </Router>

  );
}

export default App;
