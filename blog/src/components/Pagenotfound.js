import {Link} from "react-router-dom";

function Pagenotfound(){
    return(
        <>
            <h1>404 Page</h1>
            <p>This is URL is not Present</p>
            <Link to = "/">Go To Home Page</Link>
        </>
    )
}

export default Pagenotfound;