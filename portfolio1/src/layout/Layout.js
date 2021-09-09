import React from "react";

// import Header
// import Footer
import { Container } from "./LayoutStyles";

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};

export default Layout;
