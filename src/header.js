
import { Link, useNavigate } from "react-router-dom";
import dilipphoto from "./assest/dilipphoto.JPG"
import axios from "axios";
import { useState } from "react";
 
function HeaderProfile(){
    let move = useNavigate();
    let [apidata,setApidata]=useState([])

    const handleClick = ()=>{
        // move('/experience',{state:{id:"dilip"}});
         axios.post('https://jsonplaceholder.typicode.com/posts',{id:"44444"}).then((res)=> res).then((data)=>setApidata(data.data))
         
         .catch((err)=>console.log(err))
    }

    // console.log("apidata",apidata[0].title);

    return(
        <>
        <div>
            <figure className="dp">
                <img src={dilipphoto} alt="profile pic" width="200px" height="150px" title="Profile Dp"/>
            </figure>
            <div className="dec">
                <h1><span className="hh"> Dilipan Deivam</span></h1>
                <br/>
                <h3><span className="ds">Software developer</span></h3>
            </div>
            <Link to='/summary'  state={{id:"nnn"}}>
            Summary
            </Link>
            <button onClick={handleClick}>Experience</button>

          {apidata.map((data)=>
                <div>Hii</div>
          )}
          
        </div>
        </>
    )
}
export default HeaderProfile;