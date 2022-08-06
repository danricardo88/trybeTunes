import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';

export default class Login extends Component {
  state = {
    isDisable: true,
    user: '',
    // password: '',
    loading: false,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    }, () => {
      const { user /* password */ } = this.state;
      const lengthUser = user.length;
      // const lengthPassword = password.length;
      const minUser = 3;
      // const minPassword = 6;
      const test = lengthUser <= minUser/* || lengthPassword < minPassword */;
      this.setState({ isDisable: test });
    });
  }

  handleClick = async (e) => {
    e.preventDefault();
    const { user } = this.state;
    this.setState({ loading: true });
    await createUser({ name: user });
    this.setState({ loading: true }, () => {
      const { history } = this.props;
      history.push('search');
    });
  }

  render() {
    const { isDisable, user, /* password */ loading } = this.state;
    return loading ? <Loading /> : (
      <fieldset>
        <legend data-testid="page-login">Login</legend>
        <div>
          <input
            type="text"
            name="user"
            value={ user }
            required
            onChange={ this.handleChange }
            ata-testid="login-name-input"
            placeholder="Insira seu user name"
          />
        </div>
        {/* <div>
          <input
            type="password"
            name="password"
            value={ password }
            onChange={ this.handleChange }
            placeholder="Insira seu password"
          />
        </div> */}
        <button
          data-testid="login-submit-button"
          disabled={ isDisable }
          type="button"
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </fieldset>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

// A rota / deve renderizar um componente chamado Login. Este componente deve ter uma div com o atributo data-testid="page-login" que envolva todo seu conteúdo.
