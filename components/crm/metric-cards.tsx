import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, DollarSign, Calendar, TrendingUp } from 'lucide-react';

const metrics = [
  {
    title: 'Total Customers',
    value: '2,463',
    change: '+12%',
    icon: Users,
    color: 'text-blue-600',
  },
  {
    title: 'Monthly Revenue',
    value: '$54,239',
    change: '+8%',
    icon: DollarSign,
    color: 'text-green-600',
  },
  {
    title: 'Active Deals',
    value: '142',
    change: '+23%',
    icon: Calendar,
    color: 'text-purple-600',
  },
  {
    title: 'Conversion Rate',
    value: '24.3%',
    change: '+5%',
    icon: TrendingUp,
    color: 'text-orange-600',
  },
];

export function MetricCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric) => (
        <Card key={metric.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
            <metric.icon className={`h-4 w-4 ${metric.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">{metric.change}</span> from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
