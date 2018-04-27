import React from 'react';
import Table from './36xx';


class Circuits extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="circuits">
        <h1 className="product-name">MIK36XX Series</h1>
        <h2 className="table-section-header">Product Information</h2>
        <Table/>
      </div>
    );
  }


}

export default Circuits;
