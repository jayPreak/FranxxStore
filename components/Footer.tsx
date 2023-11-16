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
                <a href="https://github.com/jaypreak" target="_blank" rel="noopener noreferrer">
                    <AiOutlineGithub />
                </a>
                <a href="https://www.instagram.com/jaypreak8/" target="_blank" rel="noopener noreferrer">
                    <AiOutlineInstagram />
                </a>
                <a href="https://twitter.com/jaypreak" target="_blank" rel="noopener noreferrer">
                    <AiOutlineTwitter />
                </a>
            </p>
        </div>
    )
}

export default Footer