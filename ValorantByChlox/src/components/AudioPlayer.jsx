import React, { useEffect, useRef, useState } from "react";
// Importe des icônes ou images si nécessaire. Exemple avec FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faVolumeMute } from "@fortawesome/free-solid-svg-icons";

const AudioPlayer = ({ src }) => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = (audioRef.current = new Audio(src));
    audio.loop = true;
    // Détermine si le son est coupé ou non au démarrage
    audio.volume = isMuted ? 0 : 0.05;
    audio.play();

    return () => audio.pause();
  }, [src, isMuted]);

  // Bascule entre le son activé et désactivé
  const toggleMute = () => {
    setIsMuted(!isMuted);
    audioRef.current.volume = isMuted ? 0.05 : 0;
  };

  return (
    <div style={{ backgroundColor: '#e1424fd8' }}>
      <button onClick={toggleMute} className="VolumeButton">
        {isMuted ? (
          <FontAwesomeIcon icon={faVolumeMute} className="VolumeIcon" />
        ) : (
          <FontAwesomeIcon icon={faVolumeUp} className="VolumeIcon" />
        )}
      </button>
    </div>
  );
};

export default AudioPlayer;

<FontAwesomeIcon
  icon={faVolumeUp}
  style={{ color: "black", backgroundColor: "white", padding: "5px" }}
/>;

