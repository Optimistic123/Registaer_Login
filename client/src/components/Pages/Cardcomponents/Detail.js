import React from "react";
import './Cardcomponent.css';

function Detail(props) {
  return (
      <p className="card_info">{props.detailInfo}</p>
  );
}

export default Detail;
