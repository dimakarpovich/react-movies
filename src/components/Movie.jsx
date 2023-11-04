function Movie(props) {
    const { Title, Year, Poster, imdbID, Type } = props;

    return (
        <div id={imdbID} className="card Movie">
            <div className="card-image waves-effect waves-block waves-light">
                {
                    Poster === 'N/A' ? <img alt="" className="activator" src={`https://placehold.co/300x450?text=${Title}`} />
                    : <img alt="" className="activator" src={Poster} />

                }
                
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{Title}</span>
            <p>{Year} <span className="right">{Type}</span></p>
            </div>
        </div>
    )
};
export default Movie;