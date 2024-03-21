import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetail = () => {
    const post = useLoaderData();
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }
    const {id, title, body} = post;
    return (
        <div>
            <p>Post of the Id: {id}</p>
            <h2>The title of the post: {title}</h2>
            <p>Description: {body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetail;