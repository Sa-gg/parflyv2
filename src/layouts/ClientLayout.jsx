import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../client/components/Navbar';
import { initFlowbite } from 'flowbite';

const ClientLayout = () => {
  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  );
};

export default ClientLayout;