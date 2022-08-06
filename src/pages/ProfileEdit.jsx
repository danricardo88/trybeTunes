import React, { Component } from 'react';
import Header from '../components/Header';

class ProfileEdit extends Component {
  render() {
    return (
      <div data-testid="page-profile-edit">
        <Header />
      </div>
    );
  }
}

export default ProfileEdit;
// A rota /profile/edit deve renderizar um componente chamado ProfileEdit. Este componente deve ter uma div que envolva todo seu conteúdo e ter o atributo data-testid="page-profile-edit";
