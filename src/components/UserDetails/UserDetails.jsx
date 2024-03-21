import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const navigate =useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }
    

    const {name, username, address, website} = user;
    return (
        <div className="text-6xl">
            <h2>About User Details</h2>
            <p>Name: {name}</p>
            <p>User-Name: {username}</p>
            <p>Address : {address.street}</p>
            <p>Visit Us: {website}</p>
            <button onClick={handleGoBack}>Go Back</button>
           
        </div>
    );
};

export default UserDetails;