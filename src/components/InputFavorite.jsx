import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

export default class ImputFavorite extends Component {
  state = {
    favoriteCheck: false,
    // favorite: [],
    loading: false,
  }

  componentDidMount = async () => {
    const fav = await getFavoriteSongs();
    const { trackId } = this.props;
    this.setState({
      favoriteCheck: fav.some((music) => music.trackId === trackId),
    });
  }

  handleFavoriteCheck = async ({ target: { checked } }, music) => {
    this.setState({ loading: true });
    if (checked) {
      await addSong(music);
      this.setState({ favoriteCheck: true, loading: false });
    } else {
      await removeSong(music);
      this.setState({ favoriteCheck: false, loading: false });
    }
  };

  render() {
    const { loading, favoriteCheck } = this.state;
    const { music, trackId } = this.props;
    return (
      <label htmlFor="favorite">
        {loading && <Loading /> }
        <input
          checked={ favoriteCheck }
          type="checkbox"
          name="favorite"
          onChange={ (e) => this.handleFavoriteCheck(e, music) }
          data-testid={ `checkbox-music-${trackId}` }
        />
        Favorita
      </label>
    );
  }
}
ImputFavorite.propTypes = {
  trackId: PropTypes.number.isRequired,
  music: PropTypes.shape({
    trackId: PropTypes.number.isRequired,
  }).isRequired,
};
