import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

const Layout = () => {
  return (
    <div>
      <h1>Layout</h1>
      <Header />
      <Outlet />
    </div>
  );
};
export default Layout;
