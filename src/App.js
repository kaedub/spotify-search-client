import React, { Component } from 'react';
import { Container, Row, Button, Jumbotron } from 'reactstrap';
import SearchForm from './SearchForm';
import ResultsList from './Results';
import MusicAPI from './MusicAPI';
import queryString from 'query-string';


const SERVER_BASE_URL = 'http://localhost:5000';
const SPOTIFY_BASE_URL = 'http://localhost:5000';

class App extends Component {
  constructor(props) {
    super(props);

    let token = localStorage.getItem("token");

    this.state = {
      loggedIn: (token ? true: false),
      artists: [],
      albums: [],
      tracks: [],
    };
  }

  componentDidMount() {
    let queries = queryString.parse(window.location.search);
    let token = localStorage.getItem("token");

    if (queries['access_token']) {
      localStorage.setItem('token', queries['access_token']);
      this.setState({loggedIn: true});
    }
    else if (token) {
      this.setState({loggedIn: true});
    }
  }

  handleLogout = () => {
    localStorage.removeItem("token");
    this.setState({loggedIn: false});
  }


  searchSpotify = async (query) => {
    let results = await MusicAPI.search(query)
    console.log('results', results)

    this.setState({
      artists: results.data.artists,
      albums: results.data.albums,
      tracks: results.data.tracks,
    });
  }

  /** 
   * I would like to use React Router here if I had more time. 
   */
  loginPage = () => {
    return (
      <Jumbotron 
        className="py-5 text-center"
        style={{height: "100vh"}}>
        <a href={`${SERVER_BASE_URL}/login`}>
          <Button color="primary">Login with Spotify</Button>
        </a>
      </Jumbotron>
    );
  }

  searchPage = () => {
    return(  
      <Container className="App px-3 pt-3">

        <Row className="d-flex flex-row-reverse px-3">
          <Button 
            color="danger"
            onClick={this.handleLogout}>Logout</Button>
        </Row>

        <h1 className="text-center pt-3">Spotify Search</h1>

        <SearchForm 
          searchSpotify={this.searchSpotify} />
  
        <ResultsList 
          artists={this.state.artists}
          albums={this.state.albums}
          tracks={this.state.tracks} />
          
        {/* { this.state.artists.length ? 
          <ArtistList artists={this.state.artists} /> :
          <div>No Results</div>} */}
      </Container>
    );
  }

  render() {
    return this.state.loggedIn ? this.searchPage() : this.loginPage();
  }
}

export default App;