// function User() {
//   return <h1> User Component </h1>;
// }
// export default User;

// RENDER.

// import React from 'react'
// class User extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             email: "anil@test.com"
//         }
//     }
//     render() {
//         // console.warn(this.props.name);
//         console.warn("Render method", this.state.email)
//         return ( <
//             div >
//             <
//             h1 > User Component < /h1> <
//             button onClick = {
//                 () => this.setState({ email: "sidhu@test.com" })
//             } > Update Email < /button> < /
//             div >
//         )
//     }
// }

// export default User;

// useEffect on Props.

// import "./App.css";
// import React, { useEffect } from "react";

// function User(props) {
//   useEffect(
//     () => {
//       alert("use effect is called");
//     },
//     [props.count],
//     [props.data]
//   );

//   return (
//     <div className="App">
//       <h1> Data: {props.data} </h1> <h1> Count: {props.count} </h1>{" "}
//     </div>
//   );
// }

// export default User;