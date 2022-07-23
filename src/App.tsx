import React, { useState } from "react";
import "./index.css";
import { NavLink, useHistory } from "react-router-dom";

import Userlist from "./component/userlist";
import Form from "./component/Form";
import { Switch,Route,Router } from "react-router-dom";
import Navbar from "./component/Navbar";
 
const App = () => {
  

  return (
    <>
   {/* <Userlist/> */}
 <Navbar/>

   <Switch>
      

    <Route exact path="/home" component={Userlist}/>
      

    <Route exact path="/"  component={Form}/>

    </Switch>
    
    </>
  );
};

export default App;
