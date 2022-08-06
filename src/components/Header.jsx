import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Favorites from '../pages/Favorites';
import Profile from '../pages/Profile';
import Search from '../pages/Search';
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
        <h3 data-testid="header-user-name">
          { loading ? <Loading /> : user}
        </h3>
        <nav>
          <Link to={ Search } data-testid="link-to-search"> Search </Link>
          <Link to={ Favorites } data-testid="link-to-favorites"> Favorites </Link>
          <Link to={ Profile } data-testid="link-to-profile"> Profile </Link>
        </nav>
      </header>
    );
  }
}

//  <Search data-testid="link-to-search"> Search </Search>
// <Favorites data-testid="link-to-favorites"> Favorites </Favorites>
// <Profile data-testid="link-to-profile"> Profile </Profile>
