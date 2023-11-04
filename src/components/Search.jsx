import { Component } from "react";

class Search extends Component {
    state = {
        search: '',
        type: 'all'
    }
    keyDown = (e) => {
        if (e.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type )
        }
    }
    handleFilter  = (e) => this.setState(() => ({ type: e.target.dataset.type}), () => {
        this.props.searchMovies(this.state.search, this.state.type )
    } )

    render() {
        return (
          <div className="row">
            <div className="input-field col s12">
              <input
                placeholder="Search"
                type="Search"
                className="validate"
                value={this.state.search}
                onChange={(e) => this.setState({ search: e.target.value })}
                onKeyDown={this.keyDown}
              />
              <button
                className="btn search-btn"
                onClick={() => this.props.searchMovies(this.state.search, this.state.type)}
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
                    onChange={this.handleFilter}
                    checked = {this.state.type === 'all' }
                  />
                  <span>All</span>
                </label>
                <label>
                  <input
                    className="with-gap"
                    name="group1"
                    type="radio"
                    data-type="movie"
                    onChange={this.handleFilter}
                    checked = {this.state.type === 'movie' }
                  />
                  <span>Movie</span>
                </label>
                <label>
                  <input
                    className="with-gap"
                    name="group1"
                    type="radio"
                    data-type="series"
                    onChange={this.handleFilter}
                    checked = {this.state.type === 'series' }
                  />
                  <span>Series</span>
                </label>
              </form>
            </div>
          </div>
        );

    }
}
export default Search;