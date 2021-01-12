import React, { useState } from "react";
import {
  NavBarContainer,
  NavBarLogo,
  MenuIcon,
  Times,
  Bars,
  NavMenu,
  NavMenuActive,
  NavItem,
  NavLinks,
  NavBarBottom,
  NavBarLinks
} from "./NavBar.styles";
import {auth} from '../../firebase/firebase';
import {useStateValue} from '../../contexts/StateProvider';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [{ basket, user }] = useStateValue();
  const [click, setClick] = useState(false);

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
    
    <NavBarContainer>
      <NavLink to='/'>
        <NavBarLogo to="/" src='https://scontent.fsaw2-1.fna.fbcdn.net/v/t31.0-8/14707935_1788829271388556_232388326914306008_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=4PMERTtBB-4AX9M1taw&_nc_ht=scontent.fsaw2-1.fna&oh=5201bc0bc2ea6a88867d9c4916ca60e3&oe=5FFD8D19' onClick={closeMobileMenu} />
      </NavLink>
      <MenuIcon onClick={handleClick}>{click ? <Times /> : <Bars />} </MenuIcon>
      {click ? (
        <NavMenuActive>
          <NavItem>
            <NavLinks to="/" onClick={closeMobileMenu}>
              Home
            </NavLinks>
          </NavItem>
          <NavItem >
            <NavLinks to={!user && "/login"} onClick={handleAuthenticaton}>
           {user ? `${user.email} "Sign Out"` : "Sign In"}
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/orders" onClick={closeMobileMenu}>
              Returns & Orders
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/checkout" onClick={closeMobileMenu}>
              <ShoppingBasketIcon /> {basket?.length}
            </NavLinks>
          </NavItem>
        </NavMenuActive>
      ) : (
        <NavMenu>
            <NavItem>
            <NavLinks to="/" onClick={closeMobileMenu}>
              Home
            </NavLinks>
          </NavItem>
          <NavItem >
            <NavLinks to={!user && "/login"} onClick={handleAuthenticaton}>
           {user ? `${user.email} Sign Out` : "Sign In"}
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/orders" onClick={closeMobileMenu}>
              Returns & Orders
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/checkout" onClick={closeMobileMenu}>
              <ShoppingBasketIcon /> {basket?.length}
            </NavLinks>
          </NavItem>
        </NavMenu>
      )}
    </NavBarContainer>
    <NavBarBottom>
        <NavBarLinks to='/'>All Products</NavBarLinks>
        <NavBarLinks to='/home'>Home</NavBarLinks>
        <NavBarLinks to='/health'>Health</NavBarLinks>
        <NavBarLinks to='/books'>Books</NavBarLinks>
        <NavBarLinks to='/music'>Music</NavBarLinks>
        <NavBarLinks to='/grocery'>Grocery</NavBarLinks>
        <NavBarLinks to='/computers'>Computers</NavBarLinks>
        <NavBarLinks to='/garden'>Garden</NavBarLinks>
    </NavBarBottom>
    </>
  );
};

export default NavBar;
