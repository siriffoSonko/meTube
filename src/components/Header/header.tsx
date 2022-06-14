import React from 'react';
import {HeaderStyle} from "./styles";
import {FaBars} from 'react-icons/fa';
import {AiOutlineSearch} from "react-icons/ai";
import {MdNotifications, MdApps} from "react-icons/md";

const Header = () => {
    return (
        <HeaderStyle>

            <div>

            <FaBars className="header__menu" size={26}/>
            <img
                src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
                alt="youtube"
                className=""
            />
            </div>
            <form action="">
                <input type="text"></input>
                <button type="submit">
                    <AiOutlineSearch size={22}/>
                </button>
            </form>

            <div>
                <MdNotifications size={28}/>
                <MdApps size={28}/>
                <img src="https://icon-library.com/images/avatar-icon/avatar-icon-6.jpg"
                     alt="avatar"
                />
            </div>
        </HeaderStyle>
    );
};

export default Header;
