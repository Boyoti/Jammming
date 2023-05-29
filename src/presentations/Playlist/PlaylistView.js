import React from "react";

import "./Playlist.css";

import TrackList from "../Tracklist/Tracklist";

const PlaylistView = (props) => {
  return (
    <div className="Playlist">
      <input onChange={props.onNameChange} defaultValue={"New Playlist"} />
      <TrackList
        tracks={props.playlistTracks}
        isRemoval={true}
        onRemove={props.onRemove}
      />
      <button className="Playlist-save" onClick={props.onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
};

export default PlaylistView;
