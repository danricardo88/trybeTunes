import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MusicCard extends Component {
  render() {
    const { album } = this.props;
    const list = album.filter((music, i) => i > 0);
    return (
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
