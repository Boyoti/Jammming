import React, { useCallback } from "react";
import PlaylistView from '../presentations/Playlist/PlaylistView';

function Playlist(props) {

  const handleNameChange = useCallback(
    (event) => { props.onNameChange(event.target.value); },
    [props.onNameChange]
  );

  return (
    <PlaylistView onNameChange={handleNameChange} playlistTracks={props.playlistTracks} onRemove={props.onRemove} onSave={props.onSave} />
  );
};

export default Playlist;
