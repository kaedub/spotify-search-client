import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import ArtistCard from './ArtistCard';

class ArtistList extends Component {

  render() {
    return (
    <div>
      <ListGroup>
      {this.props.artists.map(artist => (
      <ListGroupItem key={artist.id}>
        <ArtistCard 
          artist={artist} />
      </ListGroupItem>
      ))}
      </ListGroup>
    </div>);
  }
}

export default ArtistList;