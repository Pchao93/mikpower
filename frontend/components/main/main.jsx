import React from 'react';
import {Link} from 'react-router-dom';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main">

        <div className="main-banner">
          <h1 className="main-header">
            Let Us Light The Way
          </h1>
          <div className="banner-copy">
            Leave legacy lighting solutions behind and embrace the LED future with our innovative technology.
          </div>
          <Link className="about-button" to="/about">Learn More</Link>
        </div>
      </div>
    );
  }
}

export default MainPage;
