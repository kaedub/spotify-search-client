import React from 'react';
import {
  Card, 
  CardImg, 
  CardText, 
  CardBody, 
  CardTitle } from 'reactstrap';

const PLACEHOLDER_IMG = "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180";

const ArtistCard = (props) => {
  return (
    <React.Fragment>
      <Card>

        <CardImg 
          width="50%" 
          src={props.artist.image ? props.artist.image.url : PLACEHOLDER_IMG} 
          alt="Card image cap" />

        <CardBody className="text-center">
          <CardTitle style={{fontSize: 24}}>{props.artist.name}</CardTitle>
          <CardText><b>Popularity: {props.artist.popularity}</b></CardText>
        </CardBody>

      </Card>
    </React.Fragment>
  );
};

export default ArtistCard;