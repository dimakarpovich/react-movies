import { useState } from "react";

function Search({ searchMovies }) {
    const [search, setSearch] = useState("");
    const [type, setType] = useState("all");

    const keyDown = (e) => {
        if (e.key === "Enter") {
            searchMovies(search, type);
        }
    };
    const handleFilter = (e) => {
        setType(e.target.dataset.type);
        searchMovies(search, e.target.dataset.type);
    };

    return (
        <div className="row">
            <div className="input-field col s12">
                <input
                    placeholder="Search"
                    type="Search"
                    className="validate"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={keyDown}
                />
                <button
                    className="btn search-btn"
                    onClick={() => searchMovies(search, type)}
                >
                    Search
                </button>
                <form action="#">
                    <label>
                        <input
                            className="with-gap"
                            name="group1"
                            type="radio"
                            data-type="all"
                            onChange={handleFilter}
                            checked={type === "all"}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="group1"
                            type="radio"
                            data-type="movie"
                            onChange={handleFilter}
                            checked={type === "movie"}
                        />
                        <span>Movie</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="group1"
                            type="radio"
                            data-type="series"
                            onChange={handleFilter}
                            checked={type === "series"}
                        />
                        <span>Series</span>
                    </label>
                </form>
            </div>
        </div>
    );
}
export default Search;
