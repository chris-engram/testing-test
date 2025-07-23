import { MetricCards } from './MetricCards';
import { CustomerTable } from './CustomerTable';
import { RecentActivities } from './RecentActivities';

export function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Metrics Overview */}
      <section>
        <h2 className="mb-4">Overview</h2>
        <MetricCards />
      </section>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Customer Table - Takes up 2 columns on large screens */}
        <div className="lg:col-span-2">
          <h2 className="mb-4">Recent Customers</h2>
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
