import Headers from "./Container/Authenticate/Header";
import Register from "./Container/Authenticate/Register";
import logo from './logo.svg';
import Menu from './Container/Menubar/Menu';

function Registers() {
  
  return (
    <div className="Register">
       <Menu/>
        <Register/>
    </div>
  );
}

export default Registers
