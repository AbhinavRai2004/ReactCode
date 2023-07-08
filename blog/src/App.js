import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User';
import Student from './Student';

// function App() {
//     return ( <
//         div className = "App" >
//         <
//         h1 > Hello World < /h1>  <
//         User / > <
//         /div>
//     );
// }

// function User() {
//     return ( <
//         h1 > User Component < /h1>
//     )
// }


// Event.


// function App() {
//     let data = "Abhinav Rai";

//     function clickEvent() {
//         data = "Abhi";
//         alert(data);
//     }
//     return ( <
//         div className = "App" >
//         <
//         h1 > { data } < /h1>  <
//         button onClick = { clickEvent } > Click Me < /button> < /
//         div >
//     );
// }
// export default App;


// states.

// function App() {
//     const [data, setData] = useState(0);

//     function updateData() {
//         setData(data + 1);
//     }
//     return ( <
//         div className = "App" >
//         <
//         h1 > { data } < /h1>  <
//         button onClick = { updateData } > UpdateData < /button> < /
//         div >
//     );
// }


// export default App;



// Props in reactJs.

function App() {
    const [data, setData] = useState("Abhinav")
    return ( <
        div className = "App" >
        <
        h1 > Props In React: ) < /h1>  <
    Student name = { data }
    email = { "abh12@gmail.com" }
    />   <
    button onClick = {
        () => { setData("Rai") }
    } > UpdateData < /button>< /
    div >
);
}


export default App;