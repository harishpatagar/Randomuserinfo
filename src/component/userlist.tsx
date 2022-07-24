import "../usercard.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useEffect, useState } from "react";
import axios from "axios";

import CardSkeliton from "./CardSkeleton";
var logedin=sessionStorage.getItem("islogin");
if(logedin==='yes'){
    console.log(logedin)

}
const Userlist = () =>{
   
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);




  const showUsers = () => {
    
//set loading true
    setIsLoading(true);
    setTimeout(() => {           //req to api
      axios
        .get(
          "https://randomuser.me/api/?results=9"
        )
        .then((res) => {
          console.log(res.data.results)
          setUserList(res.data.results);
          setIsLoading(false);
        });
    },1000);
    return 0;
  };

  useEffect(() => {
    setIsLoading(true);            //on starting setisloading true
    showUsers();
  }, []);

  window.onscroll = function() {
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
      showUsers();

if(!isLoading){
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
})

}
     
 
    }
   }


  if(logedin){
    return (


        <div className="App">
     <SkeletonTheme  highlightColor="#e8ffd1"/>
  
          {
          isLoading ?              //if isloading show skeleton
          <>
           <h3  style={{ color: "green"}} >Looding...  
            <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
          </h3>
          <CardSkeliton/><CardSkeliton/><CardSkeliton/><CardSkeliton/><CardSkeliton/><CardSkeliton/><CardSkeliton/><CardSkeliton/><CardSkeliton/>
         

          </>
          :                        //else show list of users
          
            userList.map((user:any) => (
              <div className="card">
                <img
                  src={ user.picture.medium}
                  alt={user.first}
                />
               <h2>{user.name.first + user.name.last||<Skeleton/>}</h2>
    
                <h2>{user.email || <Skeleton />}</h2>
                <h3>{user.phone || <Skeleton />}</h3>
    
              </div>
      
    
            ))
            
            
            }
   </div>
      );
    
  }else{
    return(                         //if user not loged in try to accsess home page show error page
<>

   <h3> pagenot found...</h3>
</>

    );
  }
  
 
}
export default Userlist;