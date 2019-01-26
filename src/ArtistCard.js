import React from 'react';
import { Card, 
    CardImg, 
    CardText, 
    CardBody, 
    CardSubtitle } from 'reactstrap';

const ArtistCard = (props) => {
  return (
    <React.Fragment>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardSubtitle>{props.name}</CardSubtitle>
          <CardText><b>Popularity: {props.popularity}</b></CardText>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default ArtistCard;