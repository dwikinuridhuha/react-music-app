import React from "react";

export default function BtnRight({gotoSong}) {
    return (
        <div>
            <svg
                onClick={() => {
                return (
                    gotoSong(1)
                )
            }}
                className="w-6 h-6 btn" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
        </div>
    )
}