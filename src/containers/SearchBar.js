import React, { useState, useCallback } from "react";

import SearchBarView from "../presentations/SearchBar/SearchBarView";

const SearchBar = (props) => {
    const [term, setTerm] = useState("");

    const handleTermChange = useCallback(
        (event) => { setTerm(event.target.value); },
        []
    );

    const search = useCallback(
        () => { props.onSearch(term); },
        [props.onSearch, term]
    );

    return <SearchBarView onTermChange={handleTermChange} onSearch={search} />;
}

export default SearchBar;