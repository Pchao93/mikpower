import React from 'react';


class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="about">
        <h1 className="mission-header">-Our Mission-</h1>
        <div className="mission-copy">
           To disrupt the LED lighting market by serving our customers with quality products and innovative solutions at low cost.
        </div>
        <h1 className="about-header">About</h1>
        <div className="about-copy">
          
        </div>
        <img src="https://recyclenation.com/wp-content/uploads/2015/01/iStock_000032773152Medium.jpg"></img>
      </div>
    );
  }
}

export default About;
