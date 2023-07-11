import React, { Component, Fragment, useEffect } from "react";
import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./style.css";
import Student from "./Student";
import Login from "./Login";
import User from "./User";
import style from "./style.module.css";

// function App() {
//   return (
//     <div className="App">
//       <h1> Hello World </h1> <User />
//     </div>
//   );
// }
// function User() {
//   return <h1> User Component </h1>;
// }

// Event.

// function App() {
//   let data = "Abhinav Rai";

//   function clickEvent() {
//     data = "Abhi";
//     alert(data);
//   }
//   return (
//     <div className="App">
//       <h1> {data} </h1> <button onClick={clickEvent}> Click Me </button>
//     </div>
//   );
// }
// export default App;

// states.

// function App() {
//   const [data, setData] = useState(0);

//   function updateData() {
//     setData(data + 1);
//   }
//   return (
//     <div className="App">
//       <h1> {data} </h1> <button onClick={updateData}> UpdateData </button>
//     </div>
//   );
// }
// export default App;

// Props in reactJs.

// function App() {
//   const [data, setData] = useState("Abhinav");
//   return (
//     <div className="App">
//       <h1> Props In React: ) </h1>
//       <Student name={data} email={"abh12@gmail.com"} />
//       <button onClick={() => {setData("Rai")}}>
//         UpdateData
//       </button>
//     </div>
//   );
// }
// export default App;

// get input From inputBox.

// function App() {
//     const [data, setData] = useState(null)

//     function getVal(val) {
//         setData(val.target.value);
//     }
//     return ( <
//         div className = "App" >
//         <
//         h1 > { data } <
//         /h1>    <
//         input type = "text"
//         onChange = { getVal }
//         /> <
//         /div >
//     );
// }
// export default App;

// HIDE,SHOW AND TOGGLE ELEMENT IN React.

// function App() {
//   const [show, setShow] = useState(true);
//   return (
//     <div className="App">
//       {show ? <h1> Hello World! </h1> : null}
//       <button onClick={() => setShow(true)}> Show </button>
//       <button onClick={() => setShow(false)}> Hide </button>
//       <button onClick={() => setShow(!show)}> Toggle </button>
//     </div>
//   );
// }

// export default App;

// Basic Form.

// function App() {
//   const [name, setName] = useState("");
//   const [tnc, setTnc] = useState(false);
//   const [interest, setInterest] = useState("");

//   function getFormData(e) {
//     console.warn(name, tnc, interest);
//     e.preventDefault();
//   }
//   return (
//     <div className="App">
//       <h1> Handle Form in React </h1>
//       <form onSubmit={getFormData}>
//         <input
//           type="text"
//           placeholder="enter name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <br /> <br />
//         <select onChange={(e) => setInterest(e.target.value)}>
//           <option> Select Options </option> <option> Marvel </option>
//           <option> DC </option>
//         </select>
//         <br /> <br />
//         <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} />
//         <span>Accept Terms and conditions</span>
//         <br /> <br />
//         <button type="submit"> Submit </button> <button> Clear </button>
//       </form>
//     </div>
//   );
// }
// export default App;

// Conditonal rendering.

// function App() {
//   const [state, updateSet] = useState(3);
//   return (
//     <div>
//       {state == 1 ? (
//         <h1> Welcome User 1 </h1>
//       ) : state == 2 ? (
//         <h1>Welcome User 2 </h1>
//       ) : (
//         <h1> Welcome User 3 </h1>
//       )}
//     </div>
//   );
// }

// export default App;

// basic Form Validation.

// function App() {
//   const data = true;
//   return (
//     <div className="App">
//       <Login />
//     </div>
//   );
// }

// export default App;

// RENDER LIFE CYCLE.

// function App() {
//   const [name, setName] = React.useState("Anil");

//   return (
//     <div className="App">
//       <h1> Render Method in React </h1>
//       {/*< User name = { name }/>
//                     <button onClick={()=>setName("Sidhu")}>Update Name</button>
//                 */}
//       <User />
//     </div>
//   );
// }

// export default App;

// ComponentDidMount life Cycle.

// class App extends React.Component {
//   constructor() {
//     super();
//     console.warn("constructor");
//     this.state = { name: "anil" };
//   }
//   componentDidMount() {
//     console.warn("componentDidMount");
//   }
//   render() {
//     console.warn("render");

//     return (
//       <div className="App">
//         <h1>Component Did Mount {this.state.name}</h1>
//         <button onClick={() => this.setState({ name: "Sidhu" })}>Update</button>
//       </div>
//     );
//   }
// }
// export default App;

// ComponentDidUpdate Life Cycle.

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//   }
//   componentDidUpdate(preProps, preState, snapshort) {
//     console.warn("componentDidUpdate", preState, this.state.count);
//     // if(preProps===this.props.count)
//     // {
//     //     alert("data is already same")
//     // }
//     if (this.state.count < 10) {
//       this.setState({ count: this.state.count + 1 });
//     }
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1> Should Component Update {this.state.count}</h1>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>Update Counter
//         </button>
//       </div>
//     );
//   }
// }

// export default App;

// shouldComponentUpdate life Cycle.

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//   }
//   shouldComponentUpdate() {
//     console.warn("shouldComponentUpdate", this.state.count);
//     if (this.state.count < 5) {
//       return true;
//     }
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1> Should Component Update {this.state.count}</h1>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Update Counter
//         </button>
//       </div>
//     );
//   }
// }

// export default App;

// componentWillUnmount Life Cycle.

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       show: true,
//     };
//   }
//   render() {
//     return (
//       <div className="App">
//         {this.state.show ? <Student /> : <h4>Component is removed</h4>}
//         <button onClick={() => this.setState({ show: false })}>
//           {" "}
//           Toogle Student Component
//         </button>
//       </div>
//     );
//   }
// }

// export default App;

// Hooks

// function App() {
//   const [name, setName] = useState("Abhinav");
//   return (
//     <div className="App">
//       <h1> {name} </h1>{" "}
//       <button onClick={() => setName("Abhi")}> Update Name </button>{" "}
//     </div>
//   );
// }

// export default App;

// useEffect Hooks.

// function App() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     console.warn("use effect");
//   });
//   return (
//     <div className="App">
//       <h1> useEffect in React {count} </h1>{" "}
//       <button onClick={() => setCount(count + 1)}> Update Counter </button>{" "}
//     </div>
//   );
// }

// export default App;

// useEffect On State And Props.

// function App() {
//   const [count, setCount] = useState(10);
//   const [data, setData] = useState(100);

//   //   useEffect(() => {
//   //     console.warn("useEffect called on click of update data");
//   //   }, [data]);

//   return (
//     <div className="App">
//       {" "}
//       {/* <h1> count: {count} </h1> <h1> data: {data} </h1>{" "}
//                               <button onClick={() => setData(data + 1)}> Update Data </button>{" "}
//                               <button onClick={() => setCount(count + 1)}> Update Count </button> */}{" "}
//       <User count={count} data={data} />{" "}
//       <button onClick={() => setData(data + 1)}> Update Data </button>{" "}
//       <button onClick={() => setCount(count + 1)}> Update Count </button>{" "}
//     </div>
//   );
// }

// export default App;

// style in reactJs.

// function App() {
//   return (
//     <div className="App">
//       <h1 className="primary"> Style Type 1. </h1>{" "}
//       <h1 style={{ color: "red", backgroundColor: "black" }}>
//         {" "}
//         Style Type 2.{" "}
//       </h1>{" "}
//       <h1 className={style.sec}> Style Type 3 </h1>{" "}
//     </div>
//   );
// }

// export default App;

// bootstrap in reactJS.
import { Button, Alert, Navbar, Container, Nav, Table } from "react-bootstrap";

// function App() {
//     return ( <
//         div className = "App" >{
//             /* <Button variant="primary"> Primary </Button>{" "}
//         <Button variant="secondary"> Secondary </Button>{" "}
//         <Button variant="success"> Success </Button>{" "}
//         <Button variant="warning"> Warning </Button>{" "}
//         <Button variant="danger"> Danger </Button>{" "}
//         <Button variant="info"> Info </Button>{" "}
//         <Button variant="light"> Light </Button>{" "}
//         <Button variant="dark"> Dark </Button>{" "}
//         <Button variant="link"> Link </Button>{" "} */
//         }
//         //  {
//         //     [
//         //         "primary",
//         //         "secondary",
//         //         "success",
//         //         "danger",
//         //         "warning",
//         //         "info",
//         //         "light",
//         //         "dark",
//         //     ].map((variant) => ( <
//         //         Alert key = { variant }
//         //         variant = { variant } >
//         //         This is a { variant }
//         //         alert— check it out!
//         //         <
//         //         /Alert>
//         //     ))
//         // } { " " } <
//         /div >
//     );
// }

// export default App;

// Navbar.

// function App() {
//     return ( 
//     <div className = "App" >
//     <Navbar bg="primary" data-bs-theme="dark">
//         <Container>
//           <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#pricing">Pricing</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>

//       {
//        [
//         "primary",
//         "secondary",
//         "success",
//         "danger",
//         "warning",
//         "info",
//         "light",
//         "dark",
//     ].map((variant) => ( <
//         Alert key = { variant }
//         variant = { variant } >
//         This is a { variant }
//         alert— check it out!
//         </Alert>
//     ))
// }
//     </div>
//     );
// }

// export default App;



// List of array of object and list.


//function App(){
//     // const arr = ["Abhinav","Anjali","Abhishek"];
//     const users = [
//            { name: 'Anil', email: 'anil@test.com', contact: '111' },
//            { name: 'Burce', email: 'bruce@test.com', contact: '222' },
//            { name: 'Peter', email: 'peter@test.com', contact: '111' },
//            { name: 'Sam', email: 'sam@test.com', contact: '777' },
//           ]

//     return(
//         <div className="App">
//          <h1>Looping Using Map function</h1>
//          {
//             /* arr.map((item) =>
//             <h2>Name is: {item.name},{item.email}</h2>
//             ) */
//             users.map((item)=>
//             <h2>{item.name} {item.email}</h2>
//             )
//          }
//         </div>
//     )
// }

// export default App;




// table using bootstrap.

// import {Table} from 'react-bootstrap'
// function App() {
//   const users = [
//     { name: 'Anil', email: 'anil@test.com', contact: '111' },
//     { name: 'Burce', email: 'bruce@test.com', contact: '222' },
//     { name: 'Peter', email: 'peter@test.com', contact: '111' },
//     { name: 'Sam', email: 'sam@test.com', contact: '777' },
//   ]
//   return (
//     <div className="App">
//       <h1>List With Bootstrap Table</h1>
//       <Table striped variant="dark" >
//         <tbody>
//         <tr>
//           <td>Name</td>
//           <td>Email</td>
//           <td>Contacts</td>
//         </tr>
//         {
//           users.map((item,i)=>
//           item.contact==='111'?
//           <tr key={i}>
//           <td>{item.name}</td>
//           <td>{item.email}</td>
//         <td>{item.contact}</td>
//         </tr>:null
//           )
//         }
//         </tbody>
//       </Table>
//     </div>
//   );
// }

// export default App;




// Nested Table In react.

// function App() {
//   const users = [
//     {
//       name: 'Abhinav', email: 'abhinav@test.com', address: [
//         { hm: '101', city: 'Noida', country: 'India' },
//         { hm: '10', city: 'Gurgaon', country: 'India' },
//         { hm: '23', city: 'Noida', country: 'India' },
//         { hm: '45', city: 'Delhi', country: 'India' },
//       ]
//     },
//     {
//       name: 'Burce', email: 'bruce@test.com', address: [
//         { hm: '101', city: 'Noida', country: 'India' },
//         { hm: '10', city: 'Gurgaon', country: 'India' },
//         { hm: '23', city: 'Noida', country: 'India' },
//         { hm: '45', city: 'Delhi', country: 'India' },
//       ]
//     },
//     {
//       name: 'Peter', email: 'peter@test.com', address: [
//         { hm: '101', city: 'Noida', country: 'India' },
//         { hm: '10', city: 'Gurgaon', country: 'India' },
//         { hm: '23', city: 'Noida', country: 'India' },
//         { hm: '45', city: 'Delhi', country: 'India' },
//       ]
//     },
//     {
//       name: 'Sam', email: 'sam@test.com', address: [
//         { hm: '101', city: 'Noida', country: 'India' },
//         { hm: '10', city: 'Gurgaon', country: 'India' },
//         { hm: '23', city: 'Noida', country: 'India' },
//         { hm: '45', city: 'Delhi', country: 'India' },
//       ]
//     },
//   ]
//   return (
//     <div className="App">
//       <h1>List with Nested Array</h1>
//       <Table variant="dark"  >
//         <tbody>
//           <tr>
//           <td>S.N</td>
//             <td>Name</td>
//             <td>Email</td>
//             <td>Address</td>
//           </tr>
//           {
//             users.map((item,i)=>
//             <tr key={i}>
//                <td>{i+1}</td>
//             <td>{item.name}</td>
//           <td>{item.email}</td>
//             <td>
//               {/*  */}
//               <Table variant="dark"  >
//         <tbody>
//               {
//                 item.address.map((data)=>

//                 <tr>
//                   <td>{data.hm}</td>
//                   <td>{data.city}</td>
//                   <td>{data.country}</td>
//                 </tr>
//                 )
//               }
//               </tbody>
//               </Table>
//               {/*  */}
//             </td>
//           </tr>
//           )
//           }
//         </tbody>
//       </Table>

//     </div>
//   );
// }

// export default App;





//Component reuse.

// function App() {
//   const users = [
//     {
//       name: 'Abhina', email: 'abhinav@test.com', contact: "111"
//     },
//     {
//       name: 'Burce', email: 'bruce@test.com', contact: "222"
//     },
//     {
//       name: 'Peter', email: 'peter@test.com', contact: "333"
//     },
//     {
//       name: 'Sam', email: 'sam@test.com', contact: "444"
//     },
//   ]
//   return (
//     <div className="App">
//       <h1>Reuse Component with List</h1>
//       {
//         users.map((item)=><User  data={item} />)
//       }
//     </div>
//   );
// }

// export default App;





// react Fragment.

// import Cols from './Cols'

// function App() {
//   return (
//     <>
//       <h1>React Fragment</h1>
//      <table>
//        <tbody>
//          <tr>
//           <Cols />
//           <Cols />
//           <Cols />
//           <Cols />
//           <Cols />
//           <Cols />
//           <Cols />
//           <Cols />
//           <Cols />
//           <Cols />

//          </tr>
//        </tbody>
//      </table>
//       </>
      
//   );
// }

// export default App;




// Send Data from Child Component to Parent Component.

// function App() {
//   function getName(name)
//   {
//     alert(name)
//   }
//   return (
//     <div className="App">
//       <h1>Lifting State Up</h1>
//       <User getData={getName} />
//     </div>
//   );
// }

// export default App;




// Pure Component.

// import Counter from './Counter'
// class  App extends React.Component {
//   constructor()
//   {
//     super();
//     this.state={
//       count:1
//     }
//   }
//  render()
//  {
//   return (
//     <div className="App">
//      <Counter count={this.state.count} />
//       <button 
//       onClick={()=>{this.setState({count:this.state.count+1})}}
//       >Update Count</button>
//     </div>
//   );
//  }
// }

// export default App;




// useMemo Hooks.

// function App() {
//   const [count, setData] = useState(1)
//   const [item, setItem] = useState(20)

//   const newApple=React.useMemo(
//     function appleTime() {
//       console.warn("Hello")
//       return 100 * count;
//     }
//   ,[item])
//   return (
//     <div className="App">
//       <h1>Hooks in React {count}</h1>
//       {newApple}
//       <button onClick={() => setData(count + 1)}>Update State</button>
//       <button onClick={() => setItem(item * 10)}>Update State</button>

//     </div>
//   );
// }

// export default App;




// Ref In React.

// import React,{createRef} from 'react'
// class App extends React.Component {
//   constructor()
//   {
//     super();
//     this.inputRef=createRef();
//   }
//   componentDidMount()
//   {
//     // console.warn(this.inputRef.current.value="1000")
//   }
//   getVal()
//   {
//     console.warn(this.inputRef.current.value)
//     this.inputRef.current.style.color="red"
//     this.inputRef.current.style.backgroundColor="black"

//   }
//   render() {
//     return (
//       <div className="App">
//         <h1>Ref in React </h1>
//         <input type="text" ref={this.inputRef}  />
//         <button onClick={()=>this.getVal()}>Check Ref</button>
//       </div>
//     );
//   }
// }

// export default App;



// useRef Hooks.

// import React,{useRef} from 'react'
// function App() {
//   let inputRef=useRef(null);
//   function controlInput()
//   {
//   //  inputRef.current.value="abc"
//   // inputRef.current.style.display="none"
//   inputRef.current.focus()
//   }
//   return (
//     <div className="App">
//       <h1>useRef in React </h1>
//       <input type="text" ref={inputRef} />
//       <button onClick={controlInput}>Handle Input</button>
//     </div>
//   );

// }

// export default App;




// ForwardRef in React.

// import React ,{useRef} from 'react'
// function App() {
//   let inputRef=useRef(null)
//   function updateInput()
//   {
//     inputRef.current.value="1000";
//     inputRef.current.style.color="red"
//     inputRef.current.focus()


//   }
//   return (
//     <div className="App">
//       <h1>forwardRef in React </h1>
//       <User ref={inputRef} />
//       <button onClick={updateInput} >Update Input Box</button>
//     </div>
//   );

// }
// export default App;



// Controlled Component.

// import React,{useState} from 'react'
// function App() {
//   const [val,setVal]=useState("")

//    return (
//     <div className="App">
//       <h1>Controlled Component </h1>
//       <input type="text" value={val} onChange={(e)=>setVal(e.target.value)} />
//    <h1>{val}</h1>
//     </div>
//   );

// }
// export default  App;




// Uncontrolled Component.

// import React, { useRef } from 'react'
// function App() {
//   let inputRef = useRef(null)
//   let inputRef2 = useRef(null)

//   function submitForm(e) {
//     e.preventDefault()
//     console.warn("input field 1 value : ", inputRef.current.value)
//     console.warn("input field 2 value : ", inputRef2.current.value)
//     let input3 = document.getElementById('input3').value
//     console.warn("input field 3 value : ", input3)
//   }
//   return (
//     <div className="App">
//       <h1>Uncontrolled Component </h1>
//       <form onSubmit={submitForm} >
//         <input ref={inputRef} type="text" /> <br /> <br />
//         <input ref={inputRef2} type="text" /> <br /> <br />
//         <input id="input3" type="text" /> <br /> <br />

//         <button>Submit</button>
//       </form>
//     </div>
//   );

// }
// export default App;
