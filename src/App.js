import './App.css';
import HeaderProfile from './header';
import {Experience} from "./experience";
import {Summary} from "./Summary";
import {Education} from "./education";

import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HeaderProfile/>}></Route>
      <Route path="/summary" element={<Summary/>}></Route>
      <Route path="/experience" element={<Experience/>}></Route>
      <Route path="/education" element={<Education/>}></Route>
   
    </Routes>
   </BrowserRouter>
    </>
   
  )
}

export default App;

//Hooks
//usestate
//useEffect
//componentdidmount

/////////////////////////////////

// const [count,updCount]=useState(9);
// const [countvalue,updCountvalue]=useState(0);
// const[toggle,updToggle] = useState(true)

// const Addvalue = ()=>{
//   updCount(count+1)
//   updToggle(!toggle)
// }
// // /componentdidmount
// useEffect(()=>{
//   console.log("This is mounting");
// },[])

// //componentdidupdate
// useEffect(()=>{
//   console.log("This is updating");
// },[countvalue])
///////////////////////////////////////////////

// CountValue:{count}
// <div onClick={()=>Addvalue()}>Add</div>
// updatedvallue :{countvalue}
// <button onClick={()=>updCountvalue(countvalue+1)}>Update</button>
// {toggle && <FunctionOne/>}
