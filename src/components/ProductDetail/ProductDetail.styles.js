import styled from 'styled-components';

export const Container=styled.div`
     display: flex;
     align-items:center;
     margin-left: auto;
    margin-right: auto;
    max-width: 1500px;
    background-color: white;
`;
export const Product=styled.div`
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin: 10px;
  padding: 20px;
  width: 28%;
  max-height: 400px;
  min-width: 100px;
  background-color: white;
  z-index: 1;
`;

export const Image=styled.img`
    max-height: 200px;
  width: 100%;
  object-fit: contain;
  margin-bottom: 15px;
`;

export const Heading=styled.h2`
    background: white;
    text-align:center;
    margin-top:2px;
`;