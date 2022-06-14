import React from 'react';
import {SideBarContainer} from "./styles";
import {
    MdSubscriptions,
    MdExitToApp,
    MdThumbUp,
    MdHistory,
    MdLibraryBooks,
    MdHome,
    MdSentimentDissatisfied
} from "react-icons/md";


const SideBar = () => {
    return (
        <SideBarContainer>
            <li>
                <MdHome size={23}/>
                <span>Home</span>
            </li>

        </SideBarContainer>
    );
};

export default SideBar;
