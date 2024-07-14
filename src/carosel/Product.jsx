import React from "react";
export default function Product(props) {
  return (
    <div className="card">
      <img className="product--image" src={props.url} alt="product_image" />
      <h2 className="name1">{props.name}</h2>
      <p className="price">{props.price}</p>
      <p className="des">{props.description}</p>
      <p>
        {/* <button>click</button> */}
        <button><a className="link" href={props.link} > Click Here</a></button>
      </p>
    </div>
  );
}