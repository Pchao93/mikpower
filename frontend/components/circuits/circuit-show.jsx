import React from 'react';
import Table from './36xx';


class CircuitShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.match.params.id);
    return (
      <div className="circuits">

        <h1 className="circuit-name">MIK36XX Series - Linear LED Driver IC</h1>

          <div className="circuit-description">
            {"MikPower Technologies' core competency lies in developing power IC products and providing total solutions for LED lighting applications. We offer a number of LED driver IC products, LED luminaire modules and light products to a wide range of customers. At MikPower Technologies Inc., not only do we promote technology innovations, we excel in product performance enhancements and cost reduction, resulting in higher competitiveness and profitability for our customers."}
          </div>

        <h2 className="table-section-header">Product Information</h2>

        <Table/>
      </div>
    );
  }


}

export default CircuitShow;
