import React, { Component } from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      query: '',
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
        artist: this.state.query,
        // album: this.state.album,
        // track: this.state.track,
    })
  }

  render() {
    return (
        <Form 
            onSubmit={this.handleSubmit}
            className="py-3">

          <FormGroup>
            <Input
              name="query"
              value={this.state.query}
              placeholder="Search by artist, album, or track name"
              onChange={this.handleChange} />
          </FormGroup>
{/* 
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
          </FormGroup> */}

          <Button color="primary">Search</Button>
        </Form>
    );
  }
}

export default SearchForm;