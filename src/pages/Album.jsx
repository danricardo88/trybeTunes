import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';
import Loading from '../components/Loading';

export default class Album extends Component {
  state = {
    album: [],
    loading: false,
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.setState({ loading: true });
    const albuns = await getMusics(id);
    this.setState({
      album: albuns,
      loading: false,
    });
  }

  render() {
    const { album, loading } = this.state;
    return loading ? <Loading /> : (
      <div data-testid="page-album">
        <Header />
        <main>
          {
            album.length > 0 && (
              <div>
                <img src={ album[0].artworkUrl100 } alt="capa do album" />
                <p data-testid="artist-name">{ album[0].artistName }</p>
                <p data-testid="album-name">{ album[0].collectionName }</p>
              </div>
            )
          }
        </main>
        <MusicCard album={ album } />
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.string.isRequired,
  // album: PropTypes.shape({
  //   params: PropTypes.shape({
  //     id: PropTypes.string.isRequired,
  //   }),
  // }),
};
// A rota /album/:id deve renderizar um componente chamado Album. Este componente deve ter uma div que envolva todo seu conteúdo e ter o atributo data-testid="page-album";
