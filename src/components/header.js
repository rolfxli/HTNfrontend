import React from "react";
import './header.css';
import {Link} from "react-scroll";

class Header extends React.Component {
    render() {
        return (
            <div id="header-component">
                <div>
                    <GoToClasses/>
                </div>
            </div>
        );
    }
}

function GoToClasses() {
    return (
        <Link
            activeClass=""
            to="projects-page"
            spy={true}
            smooth={true}
            duration={600}
        >
            <button id="classes-button">Go to Classes</button>
        </Link>
    );
}

export default Header;
