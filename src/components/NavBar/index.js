import React from "react";
import Img from '../../assets/avatar.png';

import {
  Nav,
  NavContainer,
  SearchBarContainer,
  SearchBar,
  SearchIcon,
  UserIcons,
  Notifications,
  Avatar
} from "./styles";

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <SearchBarContainer>
          <SearchBar placeholder="Search Gnome"/>
          <SearchIcon />
        </SearchBarContainer>
        <div>
        <UserIcons>
            <Notifications/>
            <Avatar src={Img}/>
        </UserIcons>
        </div>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
