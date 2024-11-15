import React from "react";

import './Button.css'

const Button = (props:any) => {
  return <button onClick={props.onClick}>{props.text}</button>
}

export default Button