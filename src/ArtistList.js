import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import ArtistCard from './ArtistCard';

class ArtistList extends Component {

  render() {
    return (
    <div>
      <ListGroup>
      {this.props.results.map(result => (
      <ListGroupItem>
        <ArtistCard 
          name={result.artist}
          popularity={85} />
      </ListGroupItem>
      ))}
      </ListGroup>
    </div>);
  }
}

export default ArtistList;