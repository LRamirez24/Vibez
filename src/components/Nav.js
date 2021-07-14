import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import smile from "../images/smile.svg"


const Nav = ({ setLibraryStatus, libraryStatus, currentSong }) => {
    return(
        <nav>
            <h1 style={{color: `${currentSong.color[0]}`}}>Vibez Music<span><img src={smile} className="smile" alt="smile" ></img></span> </h1>
            <button  onClick={ () => setLibraryStatus(!libraryStatus) }> Library <FontAwesomeIcon icon={faMusic} /> 
            </button>
        </nav>
    );
};

export default Nav;