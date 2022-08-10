import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong, removeSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

export default class ImputFavorite extends Component {
  state = {
    // favoriteCheck: false,
    // favorite: [],
    loading: false,
  }

  handleFavoriteCheck = async ({ target: { checked } }, music) => {
    this.setState({ loading: true });
    if (checked) {
      await addSong(music);
    } else {
      await removeSong(music);
    }
    console.log(music);
    this.setState({ loading: false });
  };

  render() {
    const { loading } = this.state;
    const { music, trackId } = this.props;
    return (
      <label htmlFor="favorite">
        {loading && <Loading /> }
        <input
          // checked={ favoriteCheck }
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
