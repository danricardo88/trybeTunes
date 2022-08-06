import React, { Component } from 'react';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

export default class Header extends Component {
  state = {
    user: '',
    loading: false,
  }

  componentDidMount() {
    this.setState({ loading: true });
    getUser().then((nick) => {
      this.setState({ user: nick.name, loading: false });
    });
  }

  render() {
    const { user, loading } = this.state;
    return (
      <header data-testid="header-component">
        <legend data-testid="header-user-name">
          { loading ? <Loading /> : user}
        </legend>
      </header>
    );
  }
}
