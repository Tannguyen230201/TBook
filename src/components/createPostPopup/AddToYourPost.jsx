import { Dots, Feeling, Photo } from "../../svg";


export default function AddToYourPost({ setShowPrev }) {
    return (
        <div className="addtoyourpost">
            <div className="addto_text">
            <div
                className="post_header_right hover1" style={{width:'100px'}}
                onClick={() => {
                    setShowPrev(true);
                }}
            >
                Add photos
                {/* <Photo color="#45bd62" /> */}
            </div>
            </div>
           
            {/* <div className="post_header_right hover1">
                <i className="tag_icon"></i>
            </div>
            <div className="post_header_right hover1">
                <Feeling color="#f7b928" />
            </div>
            <div className="post_header_right hover1">
                <i className="maps_icon"></i>
            </div>
            <div className="post_header_right hover1">
                <i className="microphone_icon"></i>
            </div>
            <div className="post_header_right hover1">
                <Dots color="#65676b" />
            </div> */}
        </div>
    );
}
