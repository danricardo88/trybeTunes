import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header from '../components/Header';
// import Loading from './Loading';
import searchAlbumAPI from '../services/searchAlbumsAPI';

export default class Search extends Component {
  state = {
    isDisable: true,
    loading: false,
    inputSearch: '',
    artist: '',
    album: [],

  };

  // async componentDidMount() {
  //   const apiSearch = await searchAlbumAPI();
  //   this.setState({
  //     loading: true,
  //     album: apiSearch,
  //   });
  // }

  handleInputSearch = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    }, () => {
      const { inputSearch } = this.state;
      const searchLength = inputSearch.length;
      const minSearch = 2;
      const test = searchLength < minSearch;
      this.setState({ isDisable: test });
    });
  };

  handleSearch = (e) => {
    e.preventDeFault();
    this.setState({ loading: true }, async () => {
      const { inputSearch } = this.state;
      const album = await searchAlbumAPI(inputSearch);
      this.setState({
        album,
        loading: false,

        artist: inputSearch,
        inputSearch: '',
      }, () => {
        const min = 0;
        const testAlbum = album.length;
        const test = testAlbum === min;
        this.setState({ isDisable: test });
      });
    });
  }

  render() {
    const { inputSearch, isDisable, loading } = this.state;
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
            onChange={ this.handleInputSearch }
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
        <div> </div>
      </div>
    );
  }
}

//  Search;

// A rota /search deve renderizar um componente chamado Search. Este componente deve ter uma div que envolva todo seu conteúdo e ter o atributo data-testid="page-search"
