import React from "react";
import Movies from "../components/Movies";
import Loader from "../components/Loader";
import Search from "../components/Search";


class Main extends React.Component {
    state = {
        movies: [],
        loading: true, 

    };

    searchMovies = (str, type = 'all') => {
        this.setState({loading: true })
        fetch(`https://www.omdbapi.com/?apikey=a73904e7&s=${str}${ type !== 'all' ? `&type=${type}`: ''}`)
            .then((response) => response.json())
            .then((data) =>
                this.setState({ movies: data.Search, loading: false })
            )
            .catch(error => console.log(error.message))
    }
    filterMovies = (value) => {
        fetch(`https://www.omdbapi.com/?apikey=a73904e7&s=${value}`)
            .then((response) => response.json())
            .then((data) =>
                this.setState({ movies: data.Search})
            )
    }

    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=a73904e7&s=matrix`)
            .then((response) => response.json())
            .then((data) =>
                this.setState({ movies: data.Search, loading: false })
            )
    }
    render() {
        const { movies, loading } = this.state;
        return (
            <main className="content container ">
                <Search
                    searchMovies={this.searchMovies}
                    filterMovies = {this.filterMovies}
                />
                {
                    loading ? (
                        <Loader />
                    ) :
                        <Movies movies= {movies} />
                      
                }
            </main>
        )
    }


};
export { Main };
