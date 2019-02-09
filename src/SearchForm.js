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

    if (this.state.query.length)
      this.props.searchSpotify(this.state.query)
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


          <Button color="primary">Search</Button>
        </Form>
    );
  }
}

export default SearchForm;