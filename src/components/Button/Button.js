import React from "react";
import styled from "styled-components";

const Button = ({ text, onClick, height, width,background }) => {
     const ButtonWrapper = styled.button`
    background: ${background? background :'#f0c14b' };
    border-radius: 2px;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
    height: ${height};
    width: ${width};
  `;
  return (
    <div>
      <ButtonWrapper className="button" data-testid="button" onClick={onClick}>
        {text}
      </ButtonWrapper>
    </div>
  );
};

export default Button;
