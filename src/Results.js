import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

import ResultsList from './ResultsList';

class Results extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 1
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
      activeTab: tab
      });
    }
  }

  getResults() {
    let results;
    
    switch (this.state.activeTab) {
      case 1:
        results = this.props.artists;
        break;
      case 2:
        results = this.props.albums;
        break;
      case 3:
        results = this.props.tracks;
        break;
      default:
        console.log('Invalid tab number');
    }
    console.log(results);
    return results;
  }

  render() {

    return (
      <React.Fragment>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: this.state.activeTab === 1 })}
            onClick={() => { this.toggle(1); }} >
            Artists
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: this.state.activeTab === 2 })}
            onClick={() => { this.toggle(2); }}>
            Albums
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: this.state.activeTab === 3 })}
            onClick={() => { this.toggle(3); }} >
            Tracks
          </NavLink>
        </NavItem>
      </Nav>

      <ResultsList results={this.getResults()} type={this.state.activeTab} />
      
      </React.Fragment>
    );
  }
}

export default Results;