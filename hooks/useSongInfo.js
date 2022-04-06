import useSpotify from "../hooks/useSpotify";
import { currentTrackIdState } from '../atoms/songAtom'
import { useState, useEffect } from "react"
import { useRecoilState } from 'recoil'

function useSongInfo() {
    const spotifyAPI = useSpotify();
    const [currentIdTrack, setCurrentIdTrack] = useRecoilState(currentTrackIdState);
    const [songInfo, setSongInfo] = useState(null);

    useEffect(() => {
        const fetchSongInfo =async () => {
            if(currentIdTrack){
                const trackInfo = await fetch(
                    `https://api.spotify.com/v1/tracks/${currentIdTrack}`,
                    {
                        headers: {
                            Authorization: `Bearer ${spotifyAPI.getAccessToken()}`,
                        }
                    }
                ).then(res => res.json());

                setSongInfo(trackInfo);
            }
        }
        fetchSongInfo();
    },[currentIdTrack, spotifyAPI])
    return songInfo;
}

export default useSongInfo;