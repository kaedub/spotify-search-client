import React from 'react';
import {
  Card, 
  CardImg, 
  CardText, 
  CardBody, 
  CardTitle } from 'reactstrap';

import './ResultsCard.css';

const PLACEHOLDER_IMG = "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180";

const ResultsCard = (props) => {
  console.log('props', props);
  return (
    <React.Fragment>
      <Card className="Card">

        <CardImg 
          className="CardImg"
          src={props.result.image ? props.result.image.url : PLACEHOLDER_IMG} 
          alt="Card image cap" />

        <CardBody className="text-center">
          <CardTitle style={{fontSize: 24}}>{props.result.name}</CardTitle>
          { props.type !== 2 ? <CardText><b>Popularity: {props.result.popularity}</b></CardText> : '' }
          
        </CardBody>

      </Card>
    </React.Fragment>
  );
};

export default ResultsCard;