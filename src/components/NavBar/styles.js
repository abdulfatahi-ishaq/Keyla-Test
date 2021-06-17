import styled from "styled-components";
import { FaSearch, FaBell} from "react-icons/fa";

export const Nav = styled.nav`
  display:flex;
  bottom: 0;
  left: 0;
  background-color: #294c56;
  height: 80px;
  width: calc(100vw - 220px);
  z-index: 10;
`;

export const NavContainer = styled.div`
  display: flex;
  margin: 25px 20px auto 150px;
  justify-content: space-between;
  align-items: center;
  width:100vw;

  @media screen and (max-width:1000px){
    margin: 25px 10px auto;
  }
`;

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const SearchBar = styled.input`
  width: 30vw;
  height: 30px;
  border: none;
  padding-left: 20px;
`;

export const SearchIcon = styled(FaSearch)`
  color: white;
  font-size: 20px;
  font-weight: normal;
  padding-left: 15px;
`;

export const UserIcons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width:600px){
    display:none;
  }
`;

export const Notifications = styled(FaBell)`
color: #fff;
  font-size: 20px;
  font-weight: normal;
  padding-right: 20px;
`;

export const Avatar = styled.img`
border-radius:50px;
height:30px;
width:30px;
`;
