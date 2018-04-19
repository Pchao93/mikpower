import React from 'react';

export default function Office(props) {
  return (
    <li className="office-list-item">
      <div className="office-stats">
        <div className="office-name">{props.name}</div>
        <div className="office-address"><span className="label">Address: </span><div className="address">{props.address}</div></div>
        <div className="office-phone"><span className="label">Phone: </span>{props.phone}</div>
      </div>
      <div className="image-container">
        <img
          style={{marginTop: props.margin}}
          className="office-image" src={props.image}></img>
      </div>
    </li>
  );
}
