import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';


const MainLayout = () => {
    return (
        <div>
                <div>
      <div className="max-w-7xl mx-auto">
        <NavBar />
        <div className="mt-4">
          <Outlet />
        </div>
        <Footer/>
      </div>
      <ToastContainer/>
      
    </div>
        </div>
    );
};

export default MainLayout;