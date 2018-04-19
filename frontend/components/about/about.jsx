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
          MikPower Technologies, Inc. is a comprehensive provider of high-performance and cost effective components for module/solution encompassing analog IC design, especially those related to Solid-State General Lighting. These technologies encompass a complete package covering chips to system level applications with integrated mechanical and electrical solutions that provide superior products and satisfactory services.
          At MikPower Technologies, Inc., we have built up a technical team and key proprietary technologies covering constant current driver which could take AC power sources such as 100V/110V/220V directly. This enables MikPower Technonogies to develop LED driver IC, modules and system products for general lighting applications. In the coming years, we expect to improve the company revenue substantially, providing robust growth in profit and business opportunity.
          <br></br>
          <br></br>
          In seeking new frontiers with proven general lighting technologies beyond current applications, MikPower Technologies has identified the fast growing solid state lighting industry as one of its major focus. The company will rapidly move forward with its capability providing high constant current drivers for residential retro-fit as well as the industrial lighting applications. MikPower Technologies could also provide the custom-made IC with a multi-die packaging technique to serve customers special needs in a case-by-case basis. Products capable of PWM dimming will be ready for smart-lighting control market in a near future.
        </div>

      </div>
    );
  }
}

export default About;
