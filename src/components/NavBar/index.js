import React from "react";
import Img from '../../assets/avatar.png';
import Axios from 'axios';
import {API} from '../../config';

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
  const [params,setParams] = React.useState("");

  const handleSearch = () =>{
    Axios.get(`${API}movies/${params}`).then((res)=>{
      console.log(res);
    }).catch((err)=>{console.log(err)});
  }
  return (
    <Nav>
      <NavContainer>
        <SearchBarContainer>
          <SearchBar value={params} onChange={(e)=>setParams(e.target.value)} placeholder="Search Gnome" name="search"/>
          <SearchIcon onClick={handleSearch}/>
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
