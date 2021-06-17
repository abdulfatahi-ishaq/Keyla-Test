import React from "react";
import Logo from "../../assets/logo512.png";
import {
  SidebarWrapper,
  SidebarLogoContainer,
  LogoImg,
  LogoText,
  SidebarTabs,
  Tabs,
  Logout,
  TabText,
} from "./styled";
import {
  FaHome,
  FaCompass,
  FaHistory,
  FaVideo,
  FaUpload,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarLogoContainer>
        <LogoImg src={Logo} />
        <LogoText>Gnome</LogoText>
      </SidebarLogoContainer>
      <SidebarTabs>
        <Tabs to="/">
          <FaHome />
          <TabText>
            <span>Home</span>
          </TabText>
        </Tabs>
        <Tabs>
          <FaCompass />
          <TabText>
            <span>Explore</span>
          </TabText>
        </Tabs>
        <Tabs>
          <FaHistory />
          <TabText>
            <span>History</span>
          </TabText>
        </Tabs>
        <Tabs>
          <FaVideo />
          <TabText>
            <span>Your Videos</span>
          </TabText>
        </Tabs>
        <Tabs to="upload">
          <FaUpload />
          <TabText>
            <span>Upload</span>
          </TabText>
        </Tabs>
        <Logout>
          <FaSignOutAlt />
          <TabText>
            <span>Logout</span>
          </TabText>
        </Logout>
      </SidebarTabs>
    </SidebarWrapper>
  );
};

export default Sidebar;
