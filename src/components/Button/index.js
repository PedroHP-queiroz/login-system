import React from 'react';
import * as C from "./styles";

const Button = ({ Text, onClick, Type = "button" }) => {
  return (
    <C.Button type={onClick} onClick={onClick}>
      {Text}
    </C.Button>
  );
}

export default Button;