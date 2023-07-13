import {Link} from "react-router-dom";
function Home(){
    return(
        <div>
            <h1 style={{color : "red",margin:"20px",border:"solid"}}>Home Page</h1>
            <p>This is a home Page of our awesome App</p>
            <p>And here we are learning about Router</p>
            <Link to = "/about">Go to About Page</Link>
        </div>
    )
}

export default Home;