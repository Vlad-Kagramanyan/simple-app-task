import React from 'react';
import Header from '../components/header';

const Layout = ({ children }: any) => {
  return (
    <React.Fragment>
      <Header />
      <div>{children}</div>
    </React.Fragment>
  );
};
export default Layout;
