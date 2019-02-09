import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import ResultsCard from './ResultsCard';

class ResultsList extends Component {

  render() {
    return (
    <div>
      <ListGroup>
      {this.props.results.map(result => (
      <ListGroupItem key={result.id}>
        <ResultsCard 
          result={result}
          type={this.props.type} />
      </ListGroupItem>
      ))}
      </ListGroup>
    </div>);
  }
}

export default ResultsList;