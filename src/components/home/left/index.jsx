import LeftLink from "./LeftLink";
import "./style.css";
import { left } from "../../../data/home";
import { Link } from "react-router-dom";
import { ArrowDown1 } from "../../../svg";
import { useState } from "react";
import Shortcut from "./Shortcut";
import {FaUserFriends} from 'react-icons/fa'
import{MdContactSupport} from 'react-icons/md'
import {BiHelpCircle} from 'react-icons/bi'


export default function LeftHome({ user }) {
    const [visible, setVisible] = useState(false);

    return (
        <div className="left_home scrollbar">
            <Link to="/profile" className="left_link hover2">
                <img src={user?.picture} alt="" />
                <span>
                    {user?.first_name} {user.last_name}
                </span>
            </Link>
            <Link to="/friends/all" className="left_link hover2">
                <FaUserFriends className="img" style={{color:'blueviolet'}}/>
                <span>
                    Friends
                </span>
            </Link>
            {/* <Link to="/friends/all" className="left_link hover2">
                <MdContactSupport className="img"/>
                <span>
                    Contact
                </span>
            </Link>
            <Link to="/friends/all" className="left_link hover2">
                <BiHelpCircle className="img"/>
                <span>
                   Policy
                </span>
            </Link> */}
            {/* {left.slice(0, 8).map((link, i) => (
                <LeftLink
                    key={i}
                    img={link.img}
                    text={link.text}
                    notification={link.notification}
                />
            ))}
            {!visible && (
                <div
                    className="left_link hover2"
                    onClick={() => {
                        setVisible(true);
                    }}
                >
                    <div className="small_circle">
                        <ArrowDown1 />
                    </div>
                    <span>See more</span>
                </div>
            )}
            {visible && (
                <div className="more_left">
                    {left.slice(8, left.length).map((link, i) => (
                        <LeftLink
                            key={i}
                            img={link.img}
                            text={link.text}
                            notification={link.notification}
                        />
                    ))}
                    <div
                        className="left_link hover2 "
                        onClick={() => {
                            setVisible(false);
                        }}
                    >
                        <div className="small_circle rotate360">
                            <ArrowDown1 />
                        </div>
                        <span>Show less</span>
                    </div>
                </div>
            )}
            <div className="splitter"></div>
            */}
            {/* <div className="shortcut">
                <div className="heading">Your Shortcuts</div>
                <div className="edit_shortcut">Edit</div>
            </div> */}
            <div className="shortcut_list ">
                <Shortcut
                    link="https://www.youtube.com/"
                    img="../../images/ytb.png"
                    name="Youtube"
                    className='left_link hover2'
                />

                <Shortcut
                    link="https://www.instagram.com/"
                    img="../../images/insta.png"
                    name="Instagram "
                />

            </div> 
             <div className="splitter"></div>
            <div style={{display:'flex',justifyContent:'center',gap:'2em',padding:'12px 15px 0px 15px'}}>
                <Link to='#' style={{fontWeight:"500"}}>Contact</Link>
                <Link to='#' style={{fontWeight:"500"}}>Policy</Link>
                <Link to='#' style={{fontWeight:"500"}}>More</Link>
            </div>
            <div style={{display:'flex',gap:'1em',padding:'10px 5px 15px 10px '}}>
                <span>This program is made according to <a href='https://www.facebook.com/' style={{fontWeight:"500"}}>Facebook</a></span>
            </div>

            
        </div>
    );
}
