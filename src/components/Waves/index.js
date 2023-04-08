import React from "react";

export default function Waves({fill}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill={fill} fill-opacity="1"
                  d="M0,128L60,160C120,192,240,256,360,245.3C480,235,600,149,720,133.3C840,117,960,171,1080,208C1200,245,1320,267,1380,277.3L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>
    );
}