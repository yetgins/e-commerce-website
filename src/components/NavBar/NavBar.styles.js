import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars,FaFirstdraft, FaTimes } from "react-icons/fa";

export const NavBarContainer = styled.nav`
  background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`;
export const NavBarLogo=styled.img`
  width: 75px;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 2px;
`;

export const MenuIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 10px;
  list-style: none;
  text-align: center;
  width: 70vw;
  justify-content: end;
  margin-right: 2rem;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: -100%;
    opacity: 1;
    transition: all 0.5s ease;
  }
`;

export const NavMenuActive = styled.ul`
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction:column;
    width:100%;
    height:48vh;
    top:80px;
    position:absolute;
    align-items:center;

    background: #242222;
    left: 0;
    opacity: 1;
    transition: all 0.5s ease;
    z-index: 1;
  }
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  height: 80px;

  @media screen and (max-width: 960px) {
    position: relative;
    
  }
`;

export const NavLinks = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;

  :hover {
    background-color: #1888ff;
    border-radius: 4px;
    transition: all 0.2s ease-out;

    @media screen and (max-width: 960px) {
      text-align: center;
      padding: 2rem;
      width: 100%;
      display: table;

      :hover {
        background-color: #1888ff;
        border-radius: 0;
      }
    }
  }
`;

export const FirstDraft = styled(FaFirstdraft)`
  margin-left: 0.5rem;
  font-size: 1.6rem;
`;

export const Times = styled(FaTimes)`
  color: #fff;
  font-size: 2rem;

  @media screen and (max-width: 960px) {
    color: #fff;
    font-size: 2rem;
  }
`;

export const Bars = styled(FaBars)`
  color: #fff;
`;

export const NavBarBottom=styled.div`
   display: flex;
  align-items: center;
  padding-top: 5px;
  height: 50px;
  color: white;
  background-color: #232f3e;
  flex: 1;
  justify-content: center;
`;

export const NavBarLinks=styled(Link)`
margin-left: 10px;
  font-size: 16px;
  font-weight: 600;
   color: white;
  text-decoration: none;
`;

