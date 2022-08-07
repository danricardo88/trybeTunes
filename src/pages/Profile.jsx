import React, { Component } from 'react';
import Header from '../components/Header';

class Profile extends Component {
  render() {
    return (
      <div data-testid="page-profile">
        <Header />
        <p>Perfil</p>
      </div>
    );
  }
}

export default Profile;
// A rota /profile deve renderizar um componente chamado Profile. Este componente deve ter uma div que envolva todo seu conteúdo e ter o atributo data-testid="page-profile";
