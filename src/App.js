import React, { Component } from 'react';
import { Container } from 'reactstrap';
import SearchForm from './SearchForm';
import ArtistList from './ArtistList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
    };
  }

  searchSpotify = (formData) => {
    let { artist, album, track } = formData;
    this.setState(st => ({
      results: [
        ...st.results, 
        {artist, album, track}
      ]
    }));
  }

  render() {
    return (
      <Container className="App px-3">
        <h1 className="text-center pt-3">Spotify Search</h1>
        <SearchForm 
          searchSpotify={this.searchSpotify} />
        <ArtistList results={this.state.results} />
      </Container>
    );
  }
}

export default App;