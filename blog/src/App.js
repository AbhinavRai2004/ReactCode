import React from "react";
import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Student from "./Student";
import Login from "./Login";
import User from "./User";



// function App() {
//   return (
//     <div className="App">
//       <h1> Hello World </h1> <User />{" "}
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
//       <h1> {data} </h1> <button onClick={clickEvent}> Click Me </button>{" "}
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
//       <h1> {data} </h1> <button onClick={updateData}> UpdateData </button>{" "}
//     </div>
//   );
// }
// export default App;





// Props in reactJs.

// function App() {
//   const [data, setData] = useState("Abhinav");
//   return (
//     <div className="App">
//       <h1> Props In React: ) </h1>{" "}
//       <Student name={data} email={"abh12@gmail.com"} />{" "}
//       <button
//         onClick={() => {
//           setData("Rai");
//         }}
//       >
//         {" "}
//         UpdateData{" "}
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

// {
/*function App() {
    const [show, setShow] = useState(true)
    return ( <
        div className = "App" > {
            show ? < h1 > Hello World! < /h1>:null
        } <
        button onClick = {
            () => setShow(true) } > Show < /button> <
        button onClick = {
            () => setShow(false) } > Hide < /button>
            <
                    button onClick = {
                     () => setShow(!show)
                   } > Toggle < /button>  </div >
    );
}

export default App;
*/
// }




// Basic Form.

// function App() {
//     const [name, setName] = useState("");
//     const [tnc, setTnc] = useState(false);
//     const [interest, setInterest] = useState("");

//     function getFormData(e) {
//         console.warn(name, tnc, interest)
//         e.preventDefault()
//     }
//     return ( <
//         div className = "App" >
//         <
//         h1 > Handle Form in React < /h1> <
//         form onSubmit = { getFormData } >
//         <
//         input type = "text"
//         placeholder = "enter name"
//         value = { name }
//         onChange = {
//             (e) => setName(e.target.value)
//         }
//         /> <br / > < br / >
//         <
//         select onChange = {
//             (e) => setInterest(e.target.value)
//         } >
//         <
//         option > Select Options < /option> <
//         option > Marvel < /option> <
//         option > DC < /option> < /
//         select > < br / > < br / >
//         <
//         input type = "checkbox"
//         onChange = {
//             (e) => setTnc(e.target.checked)
//         }
//         /><span>Accept Terms and conditions</span >
//         <
//         br / > < br / >
//         <
//         button type = "submit" > Submit < /button> <
//         button > Clear < /button>

//         <
//         /form> < /
//         div >
//     );
// }
// export default App;




// Conditonal rendering.

// function App() {
//     const [state, updateSet] = useState(3);
//     return ( <
//         div > {
//             state == 1 ? < h1 > Welcome User 1 < /h1>:state==2?<h1>Welcome User 2 < /
//             h1 > : < h1 > Welcome User 3 < /h1 >
//         } <
//         /div>
//     )
// }

// export default App;




// basic Form Validation.


// function App() {
//     const data = true;
//     return ( <
//         div className = "App" >
//         <
//         Login / >
//         <
//         /div>
//     );
// }

// export default App;



// RENDER LIFE CYCLE.

// function App() {
//     const [name, setName] = React.useState("Anil")

//     return ( <
//         div className = "App" >
//         <
//         h1 > Render Method in React < /h1> {
//             /*< User name = { name }/>
//                     <button onClick={()=>setName("Sidhu")}>Update Name</button>
//                 */
//         }
//         <User / >
//         <
//         /div>
//     );
// }

// export default App;



// ComponentDidMount.

class App extends React.Component {
    constructor() {
        super();
        console.warn("constructor")
        this.state = { name: "anil" }
    }
    componentDidMount() {
        console.warn("componentDidMount")

    }
    render() {
        console.warn("render")

        return ( <
            div className = "App" >
            <
            h1 > Component Did Mount { this.state.name } < /h1> <
            button onClick = {
                () => this.setState({ name: "Sidhu" })
            } > Update < /button> < /
            div >
        );
    }
}

export default App;