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
    
    // window.scrollTo(0, 0); // values are x,y-offset

    setIsLoading(true);
    setTimeout(() => {
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
    setIsLoading(true);
    showUsers();
  }, []);


  // window.addEventListener("scroll",function(ev){
    
  //     showUsers();

  // });
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
    
    
          {/* <div className="button" onClick={showUsers}>
            Show Users
          </div> */}
    
          {
          isLoading ?
          <>
          <CardSkeliton/><CardSkeliton/><CardSkeliton/><CardSkeliton/><CardSkeliton/><CardSkeliton/><CardSkeliton/><CardSkeliton/><CardSkeliton/>
          <h3  style={{ color: "green"}} >Looding...  
            <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
          </h3>

          </>
          :
          
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
    return(
<>

   <h3> pagenot found...</h3>
</>

    );
  }
  
 
}
export default Userlist;