import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const SidebarWrapper = styled.div`
position:relative;
height:100vh;
width:220px;
background-color:#294c56;
`;

export const SidebarLogoContainer = styled.div`
color:#fff;
display:flex;
padding: 20px 10px 3px;
justify-content: center;
border-bottom: 1px solid #fff;
`;

export const LogoImg = styled.img`
padding:0 5px 0 0;
height:50px;
width:50px;
`;

export const LogoText = styled.h1`
font-size:23px;
color:#62dafb;
`;

export const SidebarTabs = styled.div`
margin:50px 20px auto;
font-size:23px;

@media screen and (max-width:900){
    margin:50px 10px auto;
}
`;

export const ActiveTabs = styled.div`
margin:50px auto 15px;
color:#62dafb;
display:flex;
justify-content:flex-start;
padding:10px 10px;

&:hover{
    background:#fff;
    color:#62dafb;
    box-shadow: 1 1px 3px rgba(0,0,0,0.2);
    transition:all 0.2s ease-in-out;
    border-radius:10px;
    font-weight:900;
}
`;

export const Tabs = styled(Link)`
margin:15px auto 15px;
color:#fff;
display:flex;
justify-content:flex-start;
padding:10px 10px;
text-decoration:none;

&:hover{
    border-radius:10px;
    background:#fff;
    color:#000000;
    box-shadow: 1 1px 3px rgba(0,0,0,0.2);
    transition:all 0.2s ease-in-out;
}

&::selection{
    color:#62dafb;
}
`;

export const TabText = styled.span`
padding-left:20px;
font-size:16px !important;
`;

export const Logout = styled.div`
margin:150px auto 10px;
color:#fff;
display:flex;
justify-content:flex-start;
padding:10px 10px;

&:hover{
    border-radius:10px;
    background:#fff;
    color:#000000;
    box-shadow: 1 1px 3px rgba(0,0,0,0.2);
    transition:all 0.2s ease-in-out;
}
`;