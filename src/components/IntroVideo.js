import React, { useEffect, useRef } from "react";
import "./IntroVideo.css";
import videoIntro from "../assets/videoIntro.mp4";

function IntroVideo({ onVideoEnd }) {
    const videoRef = useRef(null);

    useEffect(() => {
        const handleEnd = () => {
            onVideoEnd();
        };

        const video = videoRef.current;
        video.addEventListener("ended", handleEnd);

        return () => {
            video.removeEventListener("ended", handleEnd);
        };
    }, [onVideoEnd]);

    return (
        <div className="intro-video-container">
            <video ref={videoRef} autoPlay muted playsInline className="intro-video">
                <source src={videoIntro} type="video/mp4" />
                {/* <source src="path/to/your/video.webm" type="video/webm" /> */}
                Votre navigateur ne supporte pas la vidéo.
            </video>
        </div>
    );
}

export default IntroVideo;
// 