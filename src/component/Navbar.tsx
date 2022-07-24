import React from "react";
import "../index.css";
import { useHistory } from "react-router-dom";

var islogin=false;
 
const Navbar = () => {
    const history = useHistory();

if(sessionStorage.getItem("islogin")){
islogin=true;
}


    function logout(){
      sessionStorage.removeItem("islogin");
     history.push("/Randomuserlist")
     window.location.reload();

     }

if(islogin){              //if is user  log in true then returns navbar with logout btn
  return (
    <>
  <nav className="navbar navbar-light bg-warning">
   <h2>RANDOM USER</h2> 
    <button  className="btn bg-primary me-5 btn " type="button"onClick={logout} >Logout</button>
</nav>
   </>
  );}
  else{                              //if is user not log in true then returns navbar without logout btn
    return (                
      <>
   
          
   <nav className="navbar navbar-light bg-warning">
   <h2>RANDOM USER</h2> 
   </nav>
  
     </>
    );
  }
}
  export default Navbar;