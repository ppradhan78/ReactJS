import './App.css';
import Userfc from './Userfc'
import UserCc from './UserCc'
import React, { useState, Component, useEffect, useRef, Fragment, createRef } from 'react';
import Student from './Student'
import StudentPropClass from './StudentPropClass'
import Profile from './Profile'
import User1 from './User1'
import Members from './Members'
import User2 from './User2'
import style from './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table } from 'react-bootstrap';
import Person from './Person'
import Emp from './Emp'
import Dept from './Dept'
import PureComp from './PureComp'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Users from './Users'
import Nave from './Nave'


/*
function App() {

  let [message,setmessageState]=useState(0);
 
  function UpdateSubmit(){
    setmessageState(message+1)
  }
  return (
    <div className="App">
   <h3> {message}</h3>  
      <button onClick={UpdateSubmit}>State Click Me</button>
   <Userfc />
   <UserCc/>
    </div>
  );
}
*/
/*
// 12.   (1:46:14​) props in the functional component in react
function   App () {
  const [name,setName] = useState("Prasanta")

    return (
      <div className="App">
     <Student name={name} email="prasanta@gmail.com" course="c#"/>
     <Student name="scott" email="scott@gmail.com" course="Nodejs"/>
     <button onClick={()=>{setName("PRADHAN")}} >prop State Click Me</button>
      </div>
     
    );
}
*/
//13.   (1:59:50​) props in class component
// function   App () {
//     return (
//       <div className="App">
//      <StudentPropClass name="prasanta"/>
//       </div>

//     );
// }

// class   App extends Component {
//   constructor(){
//     super();
//     this.state={
//       name:"prasanta"
//     }
//   }
//   render()
//   {
//   return (
//     <div className="App">
//    <StudentPropClass name={this.state.name}/>
//    <button onClick={()=>this.setState({name:"PRADHAN"})} >update Name</button>
//     </div>

//   );
//   }
//14.   (2:12:50​) get input box value 
// function   App () {
//   const[data,setdata]=useState(null)
//   const[print,setprint]=useState(false)

//   function getData(val){
// setdata(val.target.value);
//   }
//     return (
//       <div className="App">
//         <h4>get input box value {data} </h4>
//         <input type="text" onChange={getData} ></input>
//         <button onClick={()=>setprint(true)} >Print Value</button>
//       </div>

//     );
// }
//15.   (2:21:00​) show and hide element (toggle)
// function   App () {
//   const[status,setStatus]=useState(true)
//     return (
//       <div className="App">

//         {
//           status?<h4>how and hide element (toggle)</h4>:null
//         }
//         <button onClick={()=>setStatus(false)} >Hide</button>
//         <button onClick={()=>setStatus(true)} >Show</button>
//         <button onClick={()=>setStatus(!status)} >Toggle</button>
//       </div>

//     );
// }
//16.   (2:26:53​) basic form tutorial 
// function   App () {
//   const[name,setname]=useState("")
//   const[tc,settc]=useState(false)
//   const[select,setselect]=useState("")

//   function getFormData(event){
//     event.preventDefault();
// alert(name);
// alert(select);
// alert(tc);

//   }
//     return (
//       <div className="App">
//         <h1>Form Elements</h1>
//        <form onSubmit={getFormData} >
//        <input type="text" placeholder='Enter Name' value={name} onChange={(e)=>setname(e.target.value)} ></input><br/>
//        <select onChange={(e)=>setselect(e.target.value)}>
//        <option>Select</option>
//          <option>Item 1</option>
//          <option>Item 2</option>
//          <option>Item 3</option>
//          <option>Item 4</option>
//        </select><br/>
//        <input type="checkbox" onChange={(e)=>settc(e.target.checked)} /> <span>Accept Terms and Condation </span><br/>
//        <button type='submit' onChange={getFormData} >Submit</button>
//        <button type='reset' >clear</button>
//        </form><br/>
//       </div>

//     );
// }
//17.   (2:38:16​) if-else conditions

// function   App () {
//   const[loggin,setloggin]=useState(5)

//     return (
//       <div className="App">
//         {loggin==1?
//         <h1>Welecome User 1</h1>
//         :loggin==2?
//         <h1>Welecome user 2</h1>
//         :
//         <h1>Welecome gust</h1>}
//         <h1>Condational Randering</h1>
//        <Profile/>
//       </div>

//     );
// }
//18.   (2:46:18​) pass function as props 
//   function   App () {
//   const[loggin,setloggin]=useState(5)
//   function getDat(){
// alert('getDat')
//   }

//     return (
//       <div className="App">

//        <User1 data={getDat} />
//        <Members data={getDat} />

//       </div>

//     );
// }
//19.  20.   (3:00:11​) constructor life cycle method
//21.   (3:07:27​) render life cycle in React js
// class App extends Component {
//   constructor() {
//     super();
//     console.log('constructor');
//   }
//   render() {
//     console.log('render');

//     return (
//       <div className="App">
//         Hello World
//         <User2 />
//       </div>
//     );
//   }
// }
//26.   (3:58:22​) Hooks in react js
//27.   (4:4:51​) useEffect hook in react js
// function App() {
//   const [data, setData] = useState(0)
//   React.useEffect(()=>{

//   })
//   return (
//     <div className="App">
//       <h1>{data}</h1>
//       <button onClick={() => setData("Pradhan")} >Update</button>
//       <button onClick={() => setData(data+1)} >count</button>
//     </div>

//   );
// }
//29.   (4:26:46​) Style type in react js
// function App() {
//   const [data, setData] = useState(0)
//   React.useEffect(()=>{

//   })
//   return (
//     <div className="App">
//       <h1 className='.primary'>React Js Style 1</h1>
//       <h1 style={{color:"red", backgroundColor:"black"}}  >React Js Style 2</h1>
//       <button onClick={() => setData("Pradhan")} >Update</button>
//       <button onClick={() => setData(data+1)} >count</button>
//     </div>

//   );
// }
//30.   (4:32:49​) install bootstrap in  react js
// function App() {
//   const [data, setData] = useState(0)
//   React.useEffect(()=>{

//   })
//   return (
//     <div className="App">

//   <Button  variant="primary">Button #1</Button>
//   <Button  variant="secondary" className="mx-2">Button #2</Button>
//   <Button  variant="success">Button #3</Button>
//   <Button variant="primary">Primary</Button>{' '}
//       <Button variant="secondary">Secondary</Button>{' '}
//       <Button variant="success">Success</Button>{' '}
//       <Button variant="warning">Warning</Button>{' '}
//       <Button variant="danger">Danger</Button>{' '}
//       <Button variant="info">Info</Button>{' '}
//       <Button variant="light">Light</Button>{' '}
//       <Button variant="dark">Dark</Button> <Button variant="link">Link</Button>
//     </div>
//   );
// }

//31.   (4:40:17​) Handle array with list in react js
// function App() {
//   let student = ['scott', 'black', 'smith']
//   let students = [
//     {name:"scott",email:"scott@test.com"},
//     {name:"mark",email:"mark@test.com"},
//     {name:"king",email:"king@test.com"}

//   ]
//   return (
//     <div className="App">
//       <h1>array with list </h1>
//       <table va >
//         <tbody>
//       <tr><td>Name</td><td>Email</td></tr>
//       {
//         students.map((item,i) => 

//           <tr key={i}><td>{item.name} </td> <td> {item.email}</td></tr>
//         )
//       }
//       </tbody>
//       </table>
//     </div>
//   );
// }
//33.   (5:5:53​) Nested list with a nested array in react tutorial
// function App() {
//   let students = [
//     { name: "scott", email: "scott@test.com", address: [{ Hno: "101", city: "Hyd" }, { Hno: "102", city: "Hyd" }] },
//     { name: "mark", email: "mark@test.com", address: [{ Hno: "1101", city: "Bang" }, { Hno: "1042", city: "Bang" }] },
//     { name: "king", email: "king@test.com", address: [{ Hno: "1021", city: "Mum" }, { Hno: "10432", city: "Mum" }] }

//   ]
//   return (
//     <div className="App">
//       <h1>array with list </h1>
//       <table striped bordered hover>
//         <tbody>
//           <tr>   <td>Name</td><td>Email</td><td>Address</td></tr>
//         </tbody>
//         {
//           students.map((item, i) =>

//             <tr key={i}>
//               <td>{item.name} </td>
//               <td> {item.email}</td>
//               <td>
//                 <table >
//                   <tbody>
//                     <tr>   <td>House Number</td><td>City</td></tr>
//                   </tbody>
//                   {
//                     item.address.map((data) =>
//                       <tr>
//                         <td>{data.Hno}</td>
//                         <td>{data.city}</td>
//                       </tr>
//                     )}
//                 </table>
//               </td>
//             </tr>
//           )
//         }
//       </table>
//     </div>
//   );
// }

//34.   (5:18:00​) How to resue component in reactJs
// function App() {
//   let students = [
//     { name: "scott", email: "scott@test.com", address: [{ Hno: "101", city: "Hyd" }, { Hno: "102", city: "Hyd" }] },
//     { name: "mark", email: "mark@test.com", address: [{ Hno: "1101", city: "Bang" }, { Hno: "1042", city: "Bang" }] },
//     { name: "king", email: "king@test.com", address: [{ Hno: "1021", city: "Mum" }, { Hno: "10432", city: "Mum" }] }

//   ]
//   return (
//     <div className="App">
//       <h1>array with list </h1>
//       <table >
//         <tbody>
//           <tr>   <td>Name</td><td>Email</td></tr>
//         </tbody>
//         {
//           students.map((item, i) =>
//             <tr key={i}>
//               <Person data={item} />
//             </tr>
//           )
//         }
//       </table>
//     </div>
//   );
// }
//Fragment
// function App() {
//   let students = [
//     { name: "scott", email: "scott@test.com", address: [{ Hno: "101", city: "Hyd" }, { Hno: "102", city: "Hyd" }] },
//     { name: "mark", email: "mark@test.com", address: [{ Hno: "1101", city: "Bang" }, { Hno: "1042", city: "Bang" }] },
//     { name: "king", email: "king@test.com", address: [{ Hno: "1021", city: "Mum" }, { Hno: "10432", city: "Mum" }] }

//   ]
//   return (
//     // <Fragment>
//     // <h1>Hello</h1>
//     // <h1>Hello</h1>
//     // </Fragment>
//     <>
//     <h1>Hello</h1>
//     <h1>Hello</h1>
//     </>
//   );
// }
//36.   (5:36:57​) React js send data child to parent
// function App() {
//   let students = [
//     { name: "scott", email: "scott@test.com", address: [{ Hno: "101", city: "Hyd" }, { Hno: "102", city: "Hyd" }] },
//     { name: "mark", email: "mark@test.com", address: [{ Hno: "1101", city: "Bang" }, { Hno: "1042", city: "Bang" }] },
//     { name: "king", email: "king@test.com", address: [{ Hno: "1021", city: "Mum" }, { Hno: "10432", city: "Mum" }] }

//   ]
//   return (
//     // <Fragment>
//     // <h1>Hello</h1>
//     // <h1>Hello</h1>
//     // </Fragment>
//     <>
//     <h1>Hello</h1>
//     <h1>Hello</h1>
//     </>
//   );
// }
//36.   (5:36:57​) React js send data child to parent
// function App() {
//   let data = "Prasanta"
//   function parent(data) {
//     alert(data)
//   }
//   return (

//     <div>
//       //parent to child
//    //<Emp name={data} />
//    //Child to parent
//       <Dept pdata={parent} />
//     </div>
//   );
// }
//37.   (5:46:20​) Pure Component in React js
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 1
//     }
//   }

//   render() {
//     return (
//       <div className="App">
//         <PureComp count={this.state.count} />
//         <button onClick={()=>this.setState({count:this.state.count+1})}  >Update count</button>
//       </div>
//     )
//   }
// }
//39.   (6:07:01​) Ref in React js
// class App extends Component {

//     constructor() {
//     super();
//     this.inputRef=createRef(); 
//   }
//   componentDidMount(){
//     //console.log(this.inputRef.current.value="1000");
//   }
//   getValue(){
//     this.inputRef.current.style.color="red";
//     this.inputRef.current.style.backgroundColor="yellow";
//   }
//   render() {
//     return (

//       <div>
//         <h1>Ref in React js</h1>
//         <input type="text" ref={this.inputRef} />
//         <button onClick={()=>this.getValue()}    >Check Ref</button>
//       </div>
//     );
//   }
// }

//40.   (6:16:40​) useRef in react functional component
// function App() {
//   let  inputRef=useRef(null);
//   function handleInput(){
//     console.log("called");
//     inputRef.current.value=100;
//     inputRef.current.focuus();
//   }
//   return (

//     <div>
//       <div>
//         <h1>useRef in react functional component</h1>
//         <input type="text" ref={inputRef} />
//         <button onClick={handleInput}>Handle infput</button>
//       </div>
//     </div>
//   );
// }
//41.   (6:24:02​) React js forward ref
//42.   (6:32:12​) React js Controlled Component

// function App() {
//   let [val, setval] = useState("");
//   let [item, setItem] = useState("");

//   function handleInput() {
//     console.log("called");
//   }
//   return (

//       <div>
//         <h1> React js Controlled Component</h1>
//         <input type="text" value={val} defaultValue="0000" onChange={(e) => setval(e.target.value)} />
//         {/* <input type="text" value={item} onChange={(e) => setval(e.target.value)} /> */}
//         <h3>Value{val}</h3>
//       </div>
//   );
// }
//43.   (6:40:00​) React js Uncontrolled Component

// function App() {
//   let inputRef=useRef(null);
//   let inputRefOne=useRef(null);
//   let inputRefTwo=useRef(null);

// function Submitform(e){
// e.preventDefault();
// console.log(inputRef.current.value);
// console.log(inputRefOne.current.value);
// let input3=document.getElementById("input3").value;
// console.log(input3);
// }
//   return (

//     <div>
//       <form onSubmit={Submitform}>
//         <h1> React js UnControlled Component</h1>
//         <input type="text"  ref={inputRef} /><br/>
//         <input type="text"  ref={inputRefOne} /><br/>
//         <input type="text" id="input3"  /><br/>

//         <button>Submit</button><br/>

//       </form>

//     </div>
//   );
// }
//45.   (6:59:11​) React js Routing basic

// function App() {

//   return (

//     <div className='App'>
//       <Router>
//         <Link to="/home">Home Page</Link> <br/>
//         <Link to="/about">about Page</Link> <br/>
//         <Link to="/users">users Page</Link> <br/>
//<Route path='/home'><Home/></Route>
//  <Route path='/about'><About/></Route>
// <Route path='/users'><Users/></Route>  
//       </Router>
//     </div>
//   );
// }
// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }

// function App() {

//   return (
//     <div className="App">
//       <Nave />
//       <Route path='/about'><About /></Route>
//       <Route path='/users'><Users /></Route>
//       <Route path='' exact={true}> <Home /></Route>

//     </div>
//   );
// }
//
// 48.   (7:27:48​) React js Dynamic routing 
// function App() {
//   let users = [
//     { id: 1, name: "prasanta", email: "prasanta@test.com" },
//     { id: 2, name: "scott", email: "scott@test.com" },
//     { id: 3, name: "black", email: "black@test.com" },
//     { id: 4, name: "smith", email: "smith@test.com" },

//   ]
//   return (
//     <div className="App">
//       <Router>
//         <h1>React js Dynamic routing </h1>
//         {
//           users.map((item) =>
//             <div><Link href={/user/ + item.id}><h3>{item.name}</h3></Link></div>
//           )
//         }
//       </Router>


//     </div>
//   );
// }
//49.   (7:40:50​) React js Call Get Method API- HTTP call
// function App() {
//   const[data,setdata]=useState([]);
//   useEffect(()=>{
//     fetch("http://localhost:4000/todo").then((result)=>{
//       result.json().then((resp)=>{
//       })
//     })
//   },[]);

//   return (
//     <div className="App">
//         <h1>API Method</h1>
//         <table>
//           <tr>
//             <td>Id</td>
//             <td>Name</td>
//             <td>Email</td>
//           </tr>
//           {
//             data.map((item)=>
//             <tr>
//             <td>{item.id}</td>
//             <td>{item.name}</td>
//             <td>{item.email}</td>
//           </tr>
//             )
//           }

//         </table>
//     </div>
//   );
// }
//51.   (8:00:14​) How to call post method API in react js 
function App() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  function SaveUser() {
let data={name,email}
    fetch("http://localhost:4000/todo", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': ''
      },
      body:JSON.stringfy(data)
      
    }).then((result)=>{
      result.json().then((resp)=>{
        
      })
    })

  }
  return (
    <div className="App">
      <h1>POST API Method</h1>
      <input type="text" value={name} name="name" onChange={(e) => { setname(e.target.value) }} /><br />
      <input type="text" value={email} name="email" onChange={(e) => { setemail(e.target.value) }} /><br />
      <button type="button" onClick={SaveUser}>Submit</button>

    </div>
  );
}
export default App;
