import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';

import ImputFavorite from './InputFavorite';

export default class MusicCard extends Component {
  state = {
    // favorite: [],
    loading: false,
    // favChecked: false,
  }

  render() {
    const { album } = this.props;
    const { loading } = this.state;
    const list = album.filter((music, i) => i > 0);
    return loading ? <Loading /> : (
      <main>
        {
          list.map((music) => {
            const { trackName, previewUrl, trackId } = music;
            return (
              <div key={ trackId }>
                <p>{ trackName }</p>
                <audio data-testid="audio-component" src={ previewUrl } controls>
                  <track kind="captions" />
                  O seu navegador não suporta o elemento
                  {' '}
                  <code>audio</code>
                  .
                </audio>
                <ImputFavorite
                  music={ music }
                  trackId={ trackId }
                  key={ trackId }
                />
              </div>
            );
          })
        }
      </main>
    );
  }
}

MusicCard.propTypes = {
  album: PropTypes.string.isRequired,
  // artistId: PropTypes.number.isRequired,
};
