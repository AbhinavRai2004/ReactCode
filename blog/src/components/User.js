import {useParams} from "react-router-dom";

function User(){
    const params = useParams();
    const {name} = params;
    return (
        <>
            <h1>This is {name}'s Page</h1>
        </>
    )
}

export default User;