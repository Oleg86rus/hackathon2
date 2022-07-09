import React from "react";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
import {AiFillInstagram} from "@react-icons/all-files/ai/AiFillInstagram";
import {SiTelegram} from "@react-icons/all-files/si/SiTelegram";
import {AiFillYoutube} from "@react-icons/all-files/ai/AiFillYoutube";
import {AiFillFacebook} from "@react-icons/all-files/ai/AiFillFacebook";

const SocialNetworks = ({socialNetworks}) => {
    return (
        <>
            <NavLink
                className="navLinkStyle"
                target={"_blank"}
                to={{pathname: `${socialNetworks.instagram}`}}
            >
                <AiFillInstagram/>
            </NavLink>

            <NavLink
                className="navLinkStyle"
                target={"_blank"}
                to={{pathname: `${socialNetworks.telegram}`}}
            >
                <SiTelegram/>
            </NavLink>
            <NavLink
                className="navLinkStyle"
                target={"_blank"}
                to={{pathname: `${socialNetworks.telegram}`}}
            >
                <AiFillYoutube/>
            </NavLink>
            <NavLink
                className="navLinkStyle"
                target={"_blank"}
                to={{pathname: `${socialNetworks.telegram}`}}
            >
                <AiFillFacebook/>
            </NavLink>
        </>
    );
};

SocialNetworks.prototype = {
    socialNetworks: PropTypes.array
};

export default SocialNetworks;
