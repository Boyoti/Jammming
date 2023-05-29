import React from "react";

import "./SearchResults.css";

import TrackList from "../Tracklist/Tracklist";

const SearchResultsView = ({searchResults, onAdd}) => {
    return (
        <div className="SearchResults">
            <h2>Results</h2>
            <TrackList tracks={searchResults} onAdd={onAdd} />
        </div>
    );
};

export default SearchResultsView;
