import React, { useState } from 'react';
import LayoutHeader from './components/LayoutHeader';
import DashboardOverview from './components/DashboardOverview';
import SalesManagement from './components/SalesManagement';
import PurchaseManagement from './components/PurchaseManagement';
import ProductInventory from './components/ProductInventory';

const App = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'ventas':
        return <SalesManagement />;
      case 'compras':
        return <PurchaseManagement />;
      case 'productos':
        return <ProductInventory />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <LayoutHeader currentPage={currentPage} navigateTo={navigateTo} />
      <main className="container mx-auto py-8">
        {renderPage()}
      </main>
    </div>
  );
};

export default App;

// DONE