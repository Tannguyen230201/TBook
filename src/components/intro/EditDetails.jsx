import { useRef } from "react";
import Detail from "./Detail";
import useOnCLickOutside from "../../helpers/clickOutside";


export default function EditDetails({
    details,
    handleChange,
    updateDetails,
    infos,
    setVisible,
}) {
    const modal = useRef(null);

    useOnCLickOutside(modal, () => setVisible(false));
    
    return (
        <div className="blur">
            <div className="postBox infosBox" ref={modal}>
                <div className="box_header">
                    <div className="small_circle" onClick={() => setVisible(false)}>
                        <i className="exit_icon"></i>
                    </div>
                    <span>Personal information</span>
                </div>
                <div className="details_wrapper scrollbar">
                    <div className="details_header">Nick name</div>
                    <Detail
                        value={details?.otherName}
                        img="studies"
                        placeholder="Add nick name"
                        name="otherName"
                        text="other Name"
                        handleChange={handleChange}
                        updateDetails={updateDetails}
                        infos={infos}
                    />
                    <div className="details_header">Work</div>
                    <Detail
                        value={details?.job}
                        img="job"
                        placeholder="Add work"
                        name="job"
                        text="a job"
                        handleChange={handleChange}
                        updateDetails={updateDetails}
                        infos={infos}
                    />
                    <Detail
                        value={details?.workplace}
                        img="job"
                        placeholder="Add work locations"
                        name="workplace"
                        text="workplace"
                        handleChange={handleChange}
                        updateDetails={updateDetails}
                        infos={infos}
                    />
                    <div className="details_header">Education</div>
                    <Detail
                        value={details?.highSchool}
                        img="studies"
                        placeholder="Add education"
                        name="highSchool"
                        text="a high school"
                        handleChange={handleChange}
                        updateDetails={updateDetails}
                        infos={infos}
                    />
                    <Detail
                        value={details?.college}
                        img="studies"
                        placeholder="Add a college"
                        name="college"
                        text="college"
                        handleChange={handleChange}
                        updateDetails={updateDetails}
                        infos={infos}
                    />
                    <div className="details_header">Current city</div>
                    <Detail
                        value={details?.currentCity}
                        img="home"
                        placeholder="Add a current city"
                        name="currentCity"
                        text="a current city"
                        handleChange={handleChange}
                        updateDetails={updateDetails}
                        infos={infos}
                    />
                    <div className="details_header">Hometown</div>
                    <Detail
                        value={details?.hometown}
                        img="home"
                        placeholder="Add hometown"
                        name="hometown"
                        text="hometown"
                        handleChange={handleChange}
                        updateDetails={updateDetails}
                        infos={infos}
                    />
                    <div className="details_header">Relationship</div>
                    <Detail
                        value={details?.relationship}
                        img="relationship"
                        placeholder="Add instagram"
                        name="relationship"
                        text="relationship"
                        handleChange={handleChange}
                        updateDetails={updateDetails}
                        infos={infos}
                        rel
                    />
                    <div className="details_header">Instagram</div>
                    <Detail
                        value={details?.instagram}
                        img="home"
                        placeholder="Add instagram"
                        name="instagram"
                        text="instagram"
                        handleChange={handleChange}
                        updateDetails={updateDetails}
                        infos={infos}
                    />
                </div>
            </div>
        </div>
    );
}
