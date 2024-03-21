import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post;
    const navigate = useNavigate();

    const handleSeeDetail = () => {
        navigate(`/post/${id}`);

    }

    const postStyle = {
        border: '2px solid green',
        padding: '10px',
        borderRadius: '20px'
    }
    return (
        <div style={postStyle}>
            <h3>User Id of the user: {id}</h3>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Detail</Link>
            <Link to={`/post/${id}`}>
                <button>Click Me</button>
            </Link>
            <button onClick={handleSeeDetail}>Click to see Details</button>
        </div>
    );
};

export default Post;