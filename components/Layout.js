import { Fragment } from "react";
import { Navbar, Footer, ActiveResource } from "./imports";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <ActiveResource />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
