import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    acceptRequest,
    cancelRequest,
    deleteRequest,
} from "../../functions/user";


export default function Card({ userr, type, getData }) {
    const { user } = useSelector((state) => ({ ...state }));

    const cancelRequestHandler = async (userId) => {
        const res = await cancelRequest(userId, user.token);
        if (res == "ok") {
            getData();
        }
    };

    const confirmHandler = async (userId) => {
        const res = await acceptRequest(userId, user.token);
        if (res == "ok") {
            getData();
        }
    };

    const deleteHandler = async (userId) => {
        const res = await deleteRequest(userId, user.token);
        if (res == "ok") {
            getData();
        }
    };
    
    return (
        <div className="req_card">
            <Link to={`/profile/${userr.username}`}>
                <img src={userr.picture} alt="" />
                <div className="req_name" style={{textAlign:'center'}}>
                {userr.first_name} {userr.last_name}
            </div>
            </Link>
           
            {type === "sent" ? (
                <button
                    className="blue_btn"
                    onClick={() => cancelRequestHandler(userr._id)}
                >
                    Cancel request
                </button>
            ) : type === "request" ? (
                <>
                    <button
                        className="blue_btn"
                        onClick={() => confirmHandler(userr._id)}
                    >
                        Accept
                    </button>
                    <button className="gray_btn" onClick={() => deleteHandler(userr._id)}>
                        Cancel
                    </button>
                </>
            ) : (
                ""
            )}
        </div>
    );
}
