import React, {Component} from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { MiniInfoBar, SongsList } from 'components';

export default class Songs extends Component {

  render() {
    return (
      <div className="container">
        <h1>Songs</h1>
        <Helmet title="Your songs"/>
      	<Link to="/chat">Chat</Link>
      	<MiniInfoBar/>
      	<SongsList/>
      </div>
    );
  }
}
