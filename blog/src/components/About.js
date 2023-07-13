import {Link} from "react-router-dom";
function About(){
    return(
        <div>
            <h1 style={{color : "green",margin:"20px",border:"solid"}}>This is About Page</h1>
            <p>This is about Page of our awesome App</p>
            <p>And here we are learning about Router</p>
            <Link to = "/">Go to Home Page</Link>
            <li><Link to = "/user/abhinav">Abhinav</Link></li>
               <li><Link to = "/user/shubh">shubh</Link></li>
        </div>
    )
}

export default About;


