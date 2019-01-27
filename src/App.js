import React, { Component } from 'react';
import { Container, Button } from 'reactstrap';
import SearchForm from './SearchForm';
import ArtistList from './ArtistList';
import MusicAPI from './MusicAPI';
import queryString from 'query-string';


const SERVER_BASE_URL = 'http://localhost:5000';

class App extends Component {
  constructor(props) {
    super(props);

    let token = localStorage.getItem("token");

    this.state = {
      loggedIn: (token ? true: false),
      results: [],
    };
  }

  componentDidMount() {
    let queries = queryString.parse(window.location.search);
    let token = localStorage.getItem("token");

    if (queries['access_token']) {
      console.log('access token from query params:', queries['access_token']);
      localStorage.setItem('token', queries['access_token']);
      this.setState({loggedIn: true});
    }
    else if (token){
      console.log('access token from local storage:', token);
      this.setState({loggedIn: true});
    }
  }

  handleLogout = () => {
    localStorage.removeItem("token");
    this.setState({loggedIn: false});
  }


  searchSpotify = async (formData) => {
    let { artist, album, track } = formData;

    let results = await MusicAPI.search({ artist, album, track })
    console.log('results', results);
    // this.setState(st => ({
    //   results: [
    //     ...st.results, 
    //     {artist, album, track}
    //   ]
    // }));
  }

  /** 
   * I would like to use React Router here if I had more time. 
   */
  loginPage = () => {
    return (
      <a href={`${SERVER_BASE_URL}/login`}>
        <Button color="danger">Login with Spotify</Button>
      </a>
    );
  }

  searchPage = () => {
    return(  
      <React.Fragment>
        <Button 
          color="danger"
          onClick={this.handleLogout}>Logout</Button>
        <h1 className="text-center pt-3">Spotify Search</h1>
        <SearchForm 
          searchSpotify={this.searchSpotify} />
        { this.state.results.length ? 
          <ArtistList results={this.state.results} /> :
          <div>No Results</div>}
      </React.Fragment>
    );
  }

  render() {
    return (
      <Container className="App px-3 pt-3">
        { this.state.loggedIn ? this.searchPage() : this.loginPage()}
      </Container>
    );
  }
}

export default App;