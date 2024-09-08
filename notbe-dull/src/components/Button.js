import React from "react";
import "./../Button.css";

const Button = (props) => {
  return <button onClick={props.callApi}>Tell me a Joke</button>;
};

export default Button;
