import React, { Component } from 'react';

class Album extends Component {
  render() {
    return (
      <div data-testid="page-album"> </div>
    );
  }
}

export default Album;
// A rota /album/:id deve renderizar um componente chamado Album. Este componente deve ter uma div que envolva todo seu conteúdo e ter o atributo data-testid="page-album";
