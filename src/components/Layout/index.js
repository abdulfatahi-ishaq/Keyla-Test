import Navbar from "../NavBar";
import Sidebar from "../Sidebar";
import { Content } from "./styles";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Sidebar />
      <Content>
        <Navbar />
        {children}
      </Content>
    </div>
  );
};

export default Layout;
