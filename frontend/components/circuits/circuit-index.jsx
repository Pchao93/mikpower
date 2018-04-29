import React from 'react';
import {Link} from 'react-router-dom';

class CircuitIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="circuits">
        <h1 className="circuits-header">Integrated Circuits</h1>
        <div className="circuits-description">
          {"MikPower Technologies' core competency lies in developing power IC products and providing total solutions for LED lighting applications. We offer a number of LED driver IC products, LED luminaire modules and light products to a wide range of customers."}
        </div>

        <ul>
          <h1 className="product-list-header">Our Products</h1>
          <Link className="product-list-item" to="/circuits/1">Test Link</Link>
        </ul>


      </div>
    );
  }

}

export default CircuitIndex;
