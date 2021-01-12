import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import styled from 'styled-components';

export const Slider = styled.section`
     position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image=styled.img`
    width: 100%;
    z-index: -1;
    margin-bottom: -50px;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

export const RightArrow=styled(FaArrowAltCircleRight)`
    position: absolute;
  top: 50%;
  right: 32px;
  font-size: 3rem;
  color: #000;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;

export const LeftArrow=styled(FaArrowAltCircleLeft)`
     position: absolute;
  top: 50%;
  left: 32px;
  font-size: 3rem;
  color: #000;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;

export const SlideActive=styled.div`
    opacity: 1;
  transition-duration: 1s;
  transform: scale(1.08);
`;