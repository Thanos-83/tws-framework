// import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PageContainer from '../../general-styles/PageContainer';

function Layout(props) {
  return (
    <PageContainer>
      <Header />
      <main>{props.children}</main>
      {/* {props.children} */}
      <Footer />
    </PageContainer>
  );
}

export default Layout;
