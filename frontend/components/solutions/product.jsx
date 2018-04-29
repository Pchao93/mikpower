import React from 'react';

export default function Product(props) {
  const details = props.details.map((el, index) => {
    return (
      <li
        key={index}
        className="detail">
        {el}
      </li>
    );
  });
  return (
    <a href="http://google.com" className="product-list-item">
      <div className="product-image-container">
        <img

          className="product-image" src={props.image}></img>
      </div>
      <div className="product-info">
        <h1 className="product-name">{props.name}</h1>
        <ul className="product-details">
          {details}
        </ul>

      </div>

    </a>
  );
}
