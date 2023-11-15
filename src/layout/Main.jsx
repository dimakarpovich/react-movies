import React, { useState } from "react";
import Movies from "../components/Movies";
import Loader from "../components/Loader";
import Search from "../components/Search";
import { useEffect } from "react";

function Main() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const searchMovies = (str, type = "all") => {
        setLoading(true);
        fetch(
            `https://www.omdbapi.com/?apikey=a73904e7&s=${str}${
                type !== "all" ? `&type=${type}` : ""
            }`
        )
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.Search);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error.message);
                setLoading(false);
            });
    };
    // const filterMovies = (value) => {
    //     fetch(`https://www.omdbapi.com/?apikey=a73904e7&s=${value}`)
    //         .then((response) => response.json())
    //         .then((data) => setMovies(data.Search));
    // };

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=a73904e7&s=matrix`)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.Search);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error.message);
                setLoading(false);
            });
    }, []);

    return (
        <main className="content container ">
            <Search searchMovies={searchMovies} />
            {loading ? <Loader /> : <Movies movies={movies} />}
        </main>
    );
}
export { Main };
