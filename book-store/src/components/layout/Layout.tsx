import React from 'react';
import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import './Layout.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="content-container">
        <Sidebar />
        <main className="main-content">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
