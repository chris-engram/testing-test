import { MetricCards } from './metric-cards';
import { CustomerTable } from './customer-table';
import { RecentActivities } from './recent-activities';

export function CRMDashboardPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Metrics Overview */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <MetricCards />
      </section>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Customer Table - Takes up 2 columns on large screens */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Recent Customers</h2>
          <CustomerTable />
        </div>

        {/* Recent Activities - Takes up 1 column */}
        <div>
          <RecentActivities />
        </div>
      </div>
    </div>
  );
}
