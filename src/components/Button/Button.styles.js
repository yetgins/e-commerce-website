import styled from 'styled-components';

export const ButtonWrapper=styled.button`
    background: ${({background})=> background? background :'#f0c14b' };
    border-radius: 2px;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
    height: ${({height})=>height? height : ''};
    width: ${({width})=> width? width : ''};
`;