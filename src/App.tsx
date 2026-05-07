import React from 'react';
import { Outlet } from '@tanstack/react-router';
import Navbar from './components/site/Navbar';
import Footer from './components/site/Footer';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}
