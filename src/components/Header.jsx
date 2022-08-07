import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Favorites from '../pages/Favorites';
// import Profile from '../pages/Profile';
// import Search from '../pages/Search';
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
    return loading ? <Loading /> : (
      <header data-testid="header-component">
        <h3 data-testid="header-user-name">
          { user }
        </h3>
        <nav>
          <Link to="/search" data-testid="link-to-search"> Search </Link>
          <br />
          <Link to="/favorites" data-testid="link-to-favorites"> Favorites </Link>
          <br />
          <Link to="/profile" data-testid="link-to-profile"> Profile </Link>
        </nav>
      </header>
    );
  }
}

//  <Search data-testid="link-to-search"> Search </Search>
// <Favorites data-testid="link-to-favorites"> Favorites </Favorites>
// <Profile data-testid="link-to-profile"> Profile </Profile>
