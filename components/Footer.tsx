import React from 'react'
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer-container">
            <p>
                FranxxStore 2023 Made with &#10084;
            </p>

            <p className="icons">
                <AiOutlineGithub />
                <AiOutlineInstagram />
                <AiOutlineTwitter />
            </p>
        </div>
    )
}

export default Footer