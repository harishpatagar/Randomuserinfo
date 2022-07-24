import React from "react";
import "./index.css";

import Userlist from "./component/userlist";
import Form from "./component/Form";
import { Switch,Route } from "react-router-dom";
import Navbar from "./component/Navbar";
 
const App = () => {
  

  return (
    <div >
      
   {/* <Userlist/> */}
 <Navbar/>

   <Switch>
      

    <Route exact path="/home" component={Userlist}/>
      

    <Route exact path="/Randomuserlist"  component={Form}/>

    </Switch>
    
    </div>
  );
};

export default App;
