import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import {LazyLoadImage} from 'react-lazy-load-image-component';

import BtnCenter from "./component/BtnCenter";
import BtnLeft from "./component/BtnLeft";
import BtnRight from "./component/BtnRight";
import audio from "./static/audio";

function App() {
    const songRef = useRef(null);

    const [isPause, setIsPause] = useState(true);
    const [hasChange, setHasChange] = useState(false);
    const [song, setSong] = useState(0);
    const [barValue, setBarValue] = useState(0);

    const songSekarang = audio[song];

    const gotoSong = (value) => {
        const nextSong = song + value;
        const firstSong = 0;
        const lastSong = audio.length - 1;
        if(nextSong >= audio.length) {
            setSong(firstSong);
        } else if(nextSong < firstSong) {
            setSong(lastSong)
        } else {
            setSong(nextSong);
        }

        setHasChange(true);
        setIsPause(false);
    };

    useEffect(() => {
        window.document
            .getElementById("audio_element")
            .addEventListener('loadedmetadata', (e) => {
               songRef.current = e.target;
            });
    }, []);

    return (
        <div className="App root">
            <div className="container">
                <LazyLoadImage className={`img ${isPause ? "" : "animation-spin"}`}
                    src={songSekarang.img}
                />

                <div className="song-info">
                    <h1>{songSekarang.songName}</h1>
                    <p>{songSekarang.singer}</p>
                    <audio
                        autoPlay={hasChange}
                        onEnded={() => gotoSong(1)}
                        onTimeUpdate={() => {
                            setBarValue(songRef.current.currentTime);
                        }}
                        src={songSekarang.src}
                        id="audio_element"/>
                </div>

                <div>
                    <input
                        onChange={(e) => {
                            return (
                                songRef.current.currentTime = e.target.value
                            )
                        }}
                        value={barValue} type="range" min={0} max={songRef.current?.duration}/>
                </div>

                <div className="controller-play">
                    {/*kiri*/}
                    <BtnLeft gotoSong={gotoSong}/>

                    {/*play tenggah*/}
                    <BtnCenter
                        isPause={isPause}
                        songRef={songRef}
                        setIsPause={setIsPause}
                    />

                    {/*kanan*/}
                    <BtnRight gotoSong={gotoSong}/>

                </div>
            </div>
        </div>
    );
}

export default App;
