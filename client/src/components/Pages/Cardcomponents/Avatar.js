import React from "react";
import './Cardcomponent.css';

function Avatar(props) {
  return (
      <img className="circle-img"  src={props.img} alt="avatar_img" />
  );
}

export default Avatar;
