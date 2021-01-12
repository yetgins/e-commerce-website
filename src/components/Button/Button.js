import React from "react";
import {ButtonWrapper} from './Button.styles';

const Button = ({ text, onClick, height, width,background }) => {
  return (
    <div>
      <ButtonWrapper height={height} width={width} background={background} className="button" data-testid="button" onClick={onClick}>
        {text}
      </ButtonWrapper>
    </div>
  );
};

export default Button;
