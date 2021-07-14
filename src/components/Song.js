import React from 'react';
// import music from '../images/anime.jpg';


const Song = ( {currentSong, isPlaying} ) => {
    return(
        <div className="song-container">
            {/* <div className="music-back"><img src={music} alt='back'></img></div> */}
       
            <img    className={isPlaying ? "rotateSong" : ""} src={currentSong.cover} alt={currentSong.name}></img>
         <h2>{currentSong.name}</h2>
         <h3>{currentSong.artist}</h3>
        </div>
    );
};

export default Song;