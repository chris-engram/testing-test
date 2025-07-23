'use client';

import { useState } from 'react';
import { DashboardSidebar } from './components/DashboardSidebar';
import { DashboardPage } from './components/DashboardPage';
import { CustomersPage } from './components/CustomersPage';
import { CustomerProfilePage } from './components/CustomerProfilePage';

interface NavigationState {
  page: string;
  customerId?: number;
}

export default function App() {
  const [navigation, setNavigation] = useState<NavigationState>({ page: 'dashboard' });

  const handlePageChange = (page: string) => {
    setNavigation({ page });
  };

  const handleCustomerProfile = (customerId: number) => {
    setNavigation({ page: 'customer-profile', customerId });
  };

  const handleBackToCustomers = () => {
    setNavigation({ page: 'customers' });
  };

  const renderCurrentPage = () => {
    switch (navigation.page) {
      case 'dashboard':
        return <DashboardPage />;
      case 'customers':
        return <CustomersPage onCustomerClick={handleCustomerProfile} />;
      case 'customer-profile':
        return (
          <CustomerProfilePage customerId={navigation.customerId!} onBack={handleBackToCustomers} />
        );
      case 'activities':
        return (
          <div className="p-6">
            <h2>Activities</h2>
            <p className="text-muted-foreground">Activities page coming soon...</p>
          </div>
        );
      case 'reports':
        return (
          <div className="p-6">
            <h2>Reports</h2>
            <p className="text-muted-foreground">Reports page coming soon...</p>
          </div>
        );
      case 'communications':
        return (
          <div className="p-6">
            <h2>Communications</h2>
            <p className="text-muted-foreground">Communications page coming soon...</p>
          </div>
        );
      case 'calls':
        return (
          <div className="p-6">
            <h2>Calls</h2>
            <p className="text-muted-foreground">Calls page coming soon...</p>
          </div>
        );
      case 'documents':
        return (
          <div className="p-6">
            <h2>Documents</h2>
            <p className="text-muted-foreground">Documents page coming soon...</p>
          </div>
        );
      default:
        return <DashboardPage />;
    }
  };

  return (
    <DashboardSidebar currentPage={navigation.page} onPageChange={handlePageChange}>
      {renderCurrentPage()}
    </DashboardSidebar>
  );
}
