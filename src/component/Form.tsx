import React, { useState } from "react";
import "../index.css";
import'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom";


const Form = () => {
    const history = useHistory();

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const loginuser = async (e:any) => {
    e.preventDefault();
  if(username==="foo"&&password==="bar"){
    sessionStorage.setItem('islogin', 'yes');
window.alert("loged in")

history.push("/home")
window.location.reload();

  }else{
    window.alert("log in failed!")
    history.push("/")


  }
    

  };

  return (
    <>

    <div className="bodyf pt-5">
  <div className="card1 container">
    <div className="row">
      <div className="col-md-5 mx-auto">
        <div className=" card-body">
          <form
            id="submitForm"
            action="#"
            method="post"
            data-parsley-validate=""
            data-parsley-errors-messages-disabled="true"
          >
            
            <div className="form-group required">
            <label
                className="d-flex flex-row align-items-center"
                htmlFor="password"
              >
                {" "}
             User name               
              </label>
              <input
                type="text"
                className="form-control text-lowercase"
                name="password"
                value={username}
                onChange={(e) => setusername(e.target.value)}
              />
            </div>
            <div className="form-group required">
              <label
                className="d-flex flex-row align-items-center"
                htmlFor="password"
              >
                {" "}
                Enter your Password
               
              </label>
              <input
                className="form-control"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
            <div className="form-group mt-4 mb-4">
              <div className="custom-control custom-checkbox">
                
                
              </div>
            </div>
            <div className="form-group pt-1">
              <button className="btn btn-primary btn-block" type="submit"
                          value="login"
                          onClick={loginuser}>
                {" "}
                Log In{" "}
              </button>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default Form;
