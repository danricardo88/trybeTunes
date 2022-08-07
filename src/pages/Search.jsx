import React, { Component } from 'react';
import Header from '../components/Header';
// import Loading from './Loading';

export default class Search extends Component {
  state = {
    isDisable: true,
    // loading: false,
    inputSearch: '',

  };

  handleSearch = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    }, () => {
      const { inputSearch } = this.state;
      const searchLength = inputSearch.length;
      const minSearch = 2;
      const test = searchLength < minSearch;
      this.setState({ isDisable: test });
    });
  }

  render() {
    const { inputSearch, isDisable /* loading */ } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <fieldset>
          <input
            data-testid="search-artist-input"
            placeholder="Pesquise uma banda ou artista."
            type="inputSearch"
            name="inputSearch"
            value={ inputSearch }
            onChange={ this.handleSearch }
          />
          <button
            data-testid="search-artist-button"
            type="button"
            name="buttonSearch"
            disabled={ isDisable }
          >
            Pesquisar
          </button>
        </fieldset>
      </div>
    );
  }
}

//  Search;

// A rota /search deve renderizar um componente chamado Search. Este componente deve ter uma div que envolva todo seu conteúdo e ter o atributo data-testid="page-search"
