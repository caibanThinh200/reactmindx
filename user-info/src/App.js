import logo from './logo.svg';
import Header from './Components/Header'
import Register from './Components/Register'
import Login from './Components/Login'
import './App.css';
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    
    <div className="App">
      <Header />
      <Register />
      <Login />
    </div>
  );
}

export default App;
