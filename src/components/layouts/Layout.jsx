import Topbar from './Topbar';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Topbar />
      <Header />
      <main className="main-content">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;