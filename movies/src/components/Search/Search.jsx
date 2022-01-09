import React from "react";
import "./index.scss";
class Search extends React.Component {
  state = {
    search: "",
    type: "all",
  };
  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovies(this.state.search, this.state.type); // вызвали функции которая выше и передали ему текущий стейт и тип
    }
  };
  PressButton = () => {
    this.props.searchMovies(this.state.search, this.state.type);
  };
  handleFilter = (event) => {
    this.setState(
      //вызвали колбек и пока не выполнится ключик функция поиска не сработает
      () => ({ type: event.target.dataset.type }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type);
      }
    );
  };

  render() {
    return (
      <div className='row'>
        <div className='input-field col s12'>
          <input
            placeholder='Search'
            type='search'
            className='validate'
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyPress={this.handleKey}
          />
          <a
            className='search waves-effect waves-light btn purple darken-1'
            onClick={this.PressButton}>
            <i className='material-icons left'>search</i>Search
          </a>
          <div className='radioBox'>
            <p>
              <label>
                <input
                  className='with-gap purple darken-1'
                  name='type'
                  type='radio'
                  data-type='all'
                  onChange={this.handleFilter}
                  checked={this.state.type === "all"}
                />
                <span>All</span>
              </label>
              <label>
                <input
                  className='with-gap purple darken-1'
                  name='type'
                  type='radio'
                  data-type='movie'
                  onChange={this.handleFilter}
                  checked={this.state.type === "movie"}
                />
                <span>Movies</span>
              </label>
              <label>
                <input
                  className='with-gap purple darken-1'
                  name='type'
                  type='radio'
                  data-type='series'
                  onChange={this.handleFilter}
                  checked={this.state.type === "series"}
                />
                <span>Series</span>
              </label>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export { Search };
