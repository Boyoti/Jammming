import React from "react";

import SearchResultsView from "../presentations/SearchResults/SearchResultsView";

function SearchResults(props) {
    return <SearchResultsView searchResults={props.searchResults} onAdd={props.onAdd} />;
}

export default SearchResults;