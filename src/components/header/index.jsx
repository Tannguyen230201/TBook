import "./style.css";
import { Link } from "react-router-dom";
import {
    ArrowDown,
    Friends,
    FriendsActive,
    Gaming,
    Home,
    HomeActive,
    Logo,
    Market,
    Menu,
    Messenger,
    Notifications,
    Search,
    Watch,
} from "../../svg";
import { useSelector } from "react-redux";
import SearchMenu from "./SearchMenu";
import { useRef, useState } from "react";
import AllMenu from "./AllMenu";
import useClickOutside from "../../helpers/clickOutside";
import UserMenu from "./userMenu";


export default function Header({ page, getAllPosts }) {
    const { user } = useSelector((user) => ({ ...user }));
    const color = "#65676b";
    const [showSearchMenu, setShowSearchMenu] = useState(false);
    const [showAllMenu, setShowAllMenu] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const allmenu = useRef(null);
    const usermenu = useRef(null);

    useClickOutside(allmenu, () => {
        setShowAllMenu(false);
    });
    
    useClickOutside(usermenu, () => {
        setShowUserMenu(false);
    });

    return (
        <header>
            <div className="header_left">
                <Link to="/" className="header_logo">
                    <div className="circle">
                        {/* <Logo /> */}
                        <span style={{fontSize:'25px',fontWeight:'700',color:'Blue'}}>T</span>
                        <span style={{fontSize:'25px',fontWeight:'700',color:'red'}}>B</span>
                        <span style={{fontSize:'25px',fontWeight:'700',color:'purple'}}>o</span>
                        <span style={{fontSize:'25px',fontWeight:'700',color:'black'}}>o</span>
                        <span style={{fontSize:'25px',fontWeight:'700',color:'green'}}>k</span>
                    </div>
                </Link>
                <div
                    className="search search1"
                    onClick={() => {
                        setShowSearchMenu(true);
                    }}
                >
                    <Search color={color} />
                    <input
                        type="text"
                        placeholder="Search"
                        className="hide_input" style={{width:'145px'}}
                    />
                </div>
            </div>
            {showSearchMenu && (
                <SearchMenu
                    color={color}
                    setShowSearchMenu={setShowSearchMenu}
                    token={user.token}
                />
            )}
            <div className="header_middle">
                <Link
                    to="/"
                    className={`middle_icon ${page === "home" ? "active" : "hover1"}`}
                    onClick={() => getAllPosts()}
                >
                    {page === "home" ? <HomeActive /> : <Home color={color} />}
                </Link>
                <Link
                    to="/friends/all"
                    className={`middle_icon ${page === "friends" ? "active" : "hover1"}`}
                >
                    {page === "friends" ? <FriendsActive /> : <Friends color={color} />}
                </Link>
                {/* <Link to="/" className="middle_icon hover1">
                    <Watch color={color} />
                    <div className="middle_notification">9+</div>
                </Link>
                <Link to="/" className="middle_icon hover1">
                    <Market color={color} />
                </Link>
                <Link to="/" className="middle_icon hover1 ">
                    <Gaming color={color} />
                </Link> */}
            </div>
            <div className="header_right">
                <span className='profile_link'>
                        Hello,
                        {/* <img src={user?.picture} alt="" /> */}
                        <span>{user?.first_name}</span>
                        <span>{user?.last_name}</span>
                   
                </span>
                <div
                    className={`circle_icon hover1 ${showUserMenu && "active_header"}`}
                    ref={usermenu}
                >
                    <div
                        onClick={() => {
                            setShowUserMenu((prev) => !prev);
                        }}
                    >
                        <div style={{ transform: "translateY(2px)" }}>
                            <ArrowDown />
                        </div>
                    </div>

                    {showUserMenu && <UserMenu user={user} />}
                </div>
            </div>
        </header>
    );
}
