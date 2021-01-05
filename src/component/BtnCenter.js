import React from "react";

export default function BtnCenter({isPause, songRef, setIsPause}) {
    return (
        <div>
            {isPause ? (
                <svg
                    onClick={() => {
                        songRef.current.play();
                        setIsPause(!isPause);
                        }
                    }
                    className="w-6 h-6 btn" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
            ) : (
                <svg
                    onClick={() => {
                        songRef.current.pause();
                        setIsPause(!isPause);
                        }
                    }
                    className="w-6 h-6 btn white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
            )}

        </div>
    )
}