# shadcn/ui Component Implementation Guide

## Component Mapping: Figma to Code

This guide shows how your Figma designs map to the existing shadcn/ui components in your Next.js project.

### Existing Components in Your Project

Based on your `/components/ui/` directory:

```
✅ Available Components:
- avatar.tsx
- badge.tsx
- button.tsx
- card.tsx
- chart.tsx
- dropdown-menu.tsx
- input.tsx
- label.tsx
- navigation-menu.tsx
- progress.tsx
- scroll-area.tsx
- separator.tsx
- sheet.tsx
- sidebar.tsx
- skeleton.tsx
- table.tsx
- tabs.tsx
- tooltip.tsx
```

## Design-to-Code Implementation

### 1. Dashboard Layout Structure

**Figma Design → React Components:**

```tsx
// components/dashboard-layout.tsx (✅ Already exists)
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { DashboardSidebar } from '@/components/dashboard-sidebar';

export function DashboardLayout({ children }) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <DashboardSidebar />
        <main className="flex-1 overflow-auto">
          <div className="flex h-14 items-center border-b px-4 lg:px-6">
            <SidebarTrigger className="-ml-2" />
            <h1 className="ml-4 text-lg font-semibold">Dashboard</h1>
          </div>
          <div className="p-4 lg:p-6">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
}
```

### 2. Stats Cards Section

**Figma Design → Card Components:**

```tsx
// components/stats-cards.tsx (Create new)
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const statsData = [
  {
    title: 'Total Revenue',
    value: '$45,231.89',
    change: '+20.1%',
    changeType: 'positive',
    icon: '💰',
  },
  {
    title: 'Subscriptions',
    value: '+2,350',
    change: '+180.1%',
    changeType: 'positive',
    icon: '👥',
  },
  {
    title: 'Sales',
    value: '+12,234',
    change: '+19%',
    changeType: 'positive',
    icon: '📊',
  },
  {
    title: 'Active Now',
    value: '+573',
    change: '+201',
    changeType: 'positive',
    icon: '⚡',
  },
];

export function StatsCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {statsData.map((stat, index) => (
        <Card key={index} className="p-6">
          <div className="flex items-center justify-between space-y-0 pb-2">
            <span className="text-sm font-medium text-muted-foreground">{stat.title}</span>
            <span className="text-2xl">{stat.icon}</span>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-bold">{stat.value}</div>
            <Badge
              variant={stat.changeType === 'positive' ? 'default' : 'destructive'}
              className="text-xs"
            >
              {stat.change} from last month
            </Badge>
          </div>
        </Card>
      ))}
    </div>
  );
}
```

### 3. Charts Section

**Figma Design → Chart Components:**

```tsx
// components/dashboard-charts.tsx (Create new)
import { Card } from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart';
import { Bar, BarChart, Line, LineChart, ResponsiveContainer } from 'recharts';

const revenueData = [
  { month: 'Jan', revenue: 4000, target: 3800 },
  { month: 'Feb', revenue: 3000, target: 3200 },
  { month: 'Mar', revenue: 2000, target: 2800 },
  { month: 'Apr', revenue: 2780, target: 2900 },
  { month: 'May', revenue: 1890, target: 2100 },
  { month: 'Jun', revenue: 2390, target: 2400 },
];

const salesData = [
  { day: 'Mon', sales: 120 },
  { day: 'Tue', sales: 150 },
  { day: 'Wed', sales: 180 },
  { day: 'Thu', sales: 200 },
  { day: 'Fri', sales: 170 },
  { day: 'Sat', sales: 160 },
  { day: 'Sun', sales: 140 },
];

export function DashboardCharts() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Revenue Chart */}
      <Card className="p-6">
        <div className="space-y-2 pb-4">
          <h3 className="text-lg font-semibold">Revenue</h3>
          <p className="text-sm text-muted-foreground">January - June 2024</p>
        </div>
        <ChartContainer className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={revenueData}>
              <Bar dataKey="revenue" fill="var(--chart-1)" radius={4} />
              <Bar dataKey="target" fill="var(--chart-2)" radius={4} />
              <ChartTooltip content={<ChartTooltipContent />} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </Card>

      {/* Sales Trend Chart */}
      <Card className="p-6">
        <div className="space-y-2 pb-4">
          <h3 className="text-lg font-semibold">Sales Trend</h3>
          <p className="text-sm text-muted-foreground">Last 7 days</p>
        </div>
        <ChartContainer className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={salesData}>
              <Line
                type="monotone"
                dataKey="sales"
                stroke="var(--chart-3)"
                strokeWidth={2}
                dot={{ fill: 'var(--chart-3)', strokeWidth: 2 }}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </Card>
    </div>
  );
}
```

### 4. Data Table Section

**Figma Design → Table Components:**

```tsx
// components/dashboard-table.tsx (Create new)
import { Card } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const tableData = [
  {
    id: 1,
    customer: { name: 'John Doe', email: 'john@example.com' },
    status: 'active',
    amount: '$299.00',
    date: '2024-01-15',
  },
  {
    id: 2,
    customer: { name: 'Jane Smith', email: 'jane@example.com' },
    status: 'pending',
    amount: '$150.00',
    date: '2024-01-14',
  },
  {
    id: 3,
    customer: { name: 'Bob Johnson', email: 'bob@example.com' },
    status: 'inactive',
    amount: '$99.00',
    date: '2024-01-13',
  },
];

export function DashboardTable() {
  return (
    <Card>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <div>
                    <div className="font-medium">{row.customer.name}</div>
                    <div className="text-sm text-muted-foreground">{row.customer.email}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      row.status === 'active'
                        ? 'default'
                        : row.status === 'pending'
                          ? 'secondary'
                          : 'destructive'
                    }
                  >
                    {row.status}
                  </Badge>
                </TableCell>
                <TableCell className="font-medium">{row.amount}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}
```

### 5. Main Dashboard Page

**Complete Dashboard Implementation:**

```tsx
// components/dashboard-content.tsx (Update existing)
import { StatsCards } from '@/components/stats-cards';
import { DashboardCharts } from '@/components/dashboard-charts';
import { DashboardTable } from '@/components/dashboard-table';

export function DashboardContent() {
  return (
    <div className="space-y-6">
      {/* Stats Cards Row */}
      <StatsCards />

      {/* Charts Section */}
      <DashboardCharts />

      {/* Data Table */}
      <DashboardTable />
    </div>
  );
}
```

## Component Variants and States

### Button Variants (From your button.tsx)

```tsx
// Primary Button
<Button variant="default">Primary Action</Button>

// Secondary Button
<Button variant="outline">Secondary Action</Button>

// Destructive Button
<Button variant="destructive">Delete</Button>

// Ghost Button (for table actions)
<Button variant="ghost" size="sm">View</Button>
```

### Badge Variants (From your badge.tsx)

```tsx
// Default Badge
<Badge variant="default">Active</Badge>

// Secondary Badge
<Badge variant="secondary">Pending</Badge>

// Destructive Badge
<Badge variant="destructive">Inactive</Badge>

// Outline Badge
<Badge variant="outline">Draft</Badge>
```

### Card Usage (From your card.tsx)

```tsx
// Basic Card
<Card className="p-6">
  <CardContent>
    Content here
  </CardContent>
</Card>

// Card with Header
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    Content here
  </CardContent>
</Card>
```

## Responsive Design Classes

Use these Tailwind classes to match your Figma responsive breakpoints:

```css
/* Mobile First Approach */
.stats-grid {
  @apply grid gap-4 md:grid-cols-2 lg:grid-cols-4;
}

.charts-grid {
  @apply grid gap-6 md:grid-cols-2;
}

.dashboard-padding {
  @apply p-4 lg:p-6;
}

.sidebar-width {
  @apply w-64 lg:w-80;
}
```

## Next Steps

1. **Create the new component files** listed above
2. **Update your existing components** with the new dashboard features
3. **Test responsive behavior** at different screen sizes
4. **Match the styling** to your Figma designs using the color variables
5. **Add any missing shadcn components** you need:

```bash
# Add any additional components you need
npx shadcn@latest add select
npx shadcn@latest add checkbox
npx shadcn@latest add switch
```

This guide provides a complete implementation path from your Figma designs to working React components using your existing shadcn/ui setup.
