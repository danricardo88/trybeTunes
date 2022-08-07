import React, { Component } from 'react';
import Header from '../components/Header';

class Favorites extends Component {
  render() {
    return (
      <div data-testid="page-favorites">
        <Header />
        <p>Favoritos</p>
      </div>

    );
  }
}

export default Favorites;
// A rota /favorites deve renderizar um componente chamado Favorites. Este componente deve ter uma div que envolva todo seu conteúdo e ter o atributo data-testid="page-favorites";
