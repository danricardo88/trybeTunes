import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
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
  handleSearch = async () => {
    this.setState({ loading: true });
    const { inputSearch } = this.state;
    const albuns = await searchAlbumAPI(inputSearch);
    this.setState({
      album: albuns,
      loading: false,
      artist: inputSearch,
      inputSearch: '',
    }, () => {
      const min = 0;
      const testAlbum = album.length;
      const test = testAlbum === min;
      this.setState({ isDisable: test });
    });
  }

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

  render() {
    const { inputSearch, isDisable, loading, album, artist } = this.state;
    return loading ? <Loading /> : (
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
            onClick={ this.handleSearch }
          >
            Pesquisar
          </button>
        </fieldset>
        {/* {
          album.length === 0 && (<p>`Nenhum álbum foi encontrado`</p>)
        } */}
        {
          album.length > 0(
            <main>
              <p>
                Resultado:
                {''}
                {artist}
              </p>
              {
                album.map(({
                  artistName,
                  collectionId,
                  collectionName,
                  // collectionPrice: 12.25,
                  artworkUrl100,
                }) => (
                  <div key={ collectionId }>
                    <h1>
                      {''}
                      { collectionName }
                    </h1>
                    <img src={ artworkUrl100 } alt={ artistName } />
                    <h2>{ artistName }</h2>
                    <Link
                      to={ `/album/${collectionId}` }
                      data-testid={ `link-to-album-${collectionId}` }
                    >
                      Selecione o álbum
                    </Link>
                  </div>
                ))
              }
            </main>,
          )
        }
        {
          album.length === 0 && (<p>`Nenhum álbum foi encontrado`</p>)
        }
      </div>
    );
  }
}

// A rota /search deve renderizar um componente chamado Search. Este componente deve ter uma div que envolva todo seu conteúdo e ter o atributo data-testid="page-search"
