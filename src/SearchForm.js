import React, { Component } from 'react';
import { Container, Form, FormGroup, Input, Button } from 'reactstrap';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      artist: '',
      album: '',
      track: '',
    };
  }

  handleChange = (evt) => {
    this.setState({[evt.target.name]: evt.target.value})
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    
    this.props.searchSpotify({
        artist: this.state.artist,
        album: this.state.album,
        track: this.state.track,
    })
  }

  render() {
    return (
        <Form 
            onSubmit={this.handleSubmit}
            className="py-3">

          <FormGroup>
            <Input
              name="artist"
              value={this.state.artist}
              placeholder="artist"
              onChange={this.handleChange} />
          </FormGroup>

          <FormGroup>
            <Input
              name="album"
              value={this.state.album}
              placeholder="album"
              onChange={this.handleChange} />
          </FormGroup>

          <FormGroup>
            <Input
              name="track"
              value={this.state.track}
              placeholder="track"
              onChange={this.handleChange} />
          </FormGroup>

          <Button color="primary">Search</Button>
        </Form>
    );
  }
}

export default SearchForm;