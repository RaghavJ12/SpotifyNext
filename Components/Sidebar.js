import { HomeIcon, LibraryIcon, SearchIcon, PlusCircleIcon, HeartIcon, RssIcon } from '@heroicons/react/outline';
import { useSession } from 'next-auth/react';
import useSpotify from '../hooks/useSpotify'
import { useEffect, useState } from 'react';
import { playlistIdState } from '../atoms/playlistAtom';
import {useRecoilState} from "recoil";

const pl1={
    "collaborative": true,
    "description": "string",
    "external_urls": {
      "spotify": "string"
    },
    "followers": {
      "href": "string",
      "total": 0
    },
    "href": "string",
    "id": "string",
    "images": [
      {
        "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
        "height": 300,
        "width": 300
      }
    ],
    "name": "string",
    "owner": {
      "external_urls": {
        "spotify": "string"
      },
      "followers": {
        "href": "string",
        "total": 0
      },
      "href": "string",
      "id": "string",
      "type": "user",
      "uri": "string",
      "display_name": "string"
    },
    "public": true,
    "snapshot_id": "string",
    "tracks": {
      "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
      "items": [
        {}
      ],
      "limit": 20,
      "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
      "offset": 0,
      "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
      "total": 4
    },
    "type": "string",
    "uri": "string"
  }

function Sidebar() {
    const spotifyAPI = useSpotify();
    const { data: session, status } = useSession();
    const [playlists, setPlaylists] = useState([pl1]);
    const [playlistId, setPlaylistId] = useRecoilState(playlistIdState);
    
    useEffect(() => {
        // console.log("kiii");
        if (spotifyAPI.getAccessToken()) {
            spotifyAPI.getUserPlaylists().then((data) => {
                setPlaylists(data.body.items);
            });
        }
    }, [session, spotifyAPI]);

    // console.log(playlistId);

    return (
        <div className="text-gray-500 p-5 text-xs lg:text-sm sm:max-w-[12rem] lg:max-w-[15rem] border-r border-gray-900 overflow-y-scroll h-screen scrollbar-hide hidden md:inline-flex pb-36">
            <div className="space-y-4">

                <button className="flex items-center space-x-2
            hover:text-white">
                    <HomeIcon className="h-5 w-5" />
                    <p>Home</p>
                </button>

                <button className="flex items-center space-x-2
            hover:text-white">
                    <SearchIcon className="h-5 w-5" />
                    <p>Search</p>
                </button>
                <button className="flex items-center space-x-2
            hover:text-white">
                    <LibraryIcon className="h-5 w-5" />
                    <p>Your Library</p>
                </button>
                <hr className="border-t-[0.1px] border-gray-900" />

                <button className="flex items-center space-x-2
            hover:text-white">
                    <PlusCircleIcon className="h-5 w-5" />
                    <p>Create Play</p>
                </button>
                <button className="flex items-center space-x-2
            hover:text-white">
                    <HeartIcon className="h-5 w-5" />
                    <p>Liked Songs</p>
                </button>
                <button className="flex items-center space-x-2
            hover:text-white">
                    <RssIcon className="h-5 w-5" />
                    <p>Your Episodes</p>
                </button>
                <hr className="border-t-[0.1px] border-gray-900" />

                {playlists.map((playlist) => (
                    <p key={playlist.id} onClick={()=>setPlaylistId(playlist.id)} className="cursor-pointer hover:text-white">{playlist.name}</p>
                ))}

            </div>
        </div>
    )
}
export default Sidebar;