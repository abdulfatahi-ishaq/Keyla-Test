import Navbar from "../NavBar";
import Sidebar from "../Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Sidebar />
      <div>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
