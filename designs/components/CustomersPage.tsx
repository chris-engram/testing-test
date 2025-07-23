import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import {
  Search,
  Plus,
  Mail,
  Phone,
  MoreHorizontal,
  Filter,
  Users,
  UserPlus,
  Calendar,
  DollarSign,
  Edit,
  Trash,
  Eye,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';

const customers = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice@example.com',
    phone: '+1 (555) 123-4567',
    company: 'Tech Corp',
    status: 'Active',
    value: '$12,500',
    lastContact: '2024-01-15',
    location: 'New York, NY',
    industry: 'Technology',
    notes: 'Key decision maker for technology solutions',
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob@company.com',
    phone: '+1 (555) 987-6543',
    company: 'Design Studio',
    status: 'Lead',
    value: '$8,200',
    lastContact: '2024-01-10',
    location: 'San Francisco, CA',
    industry: 'Design',
    notes: 'Interested in our premium package',
  },
  {
    id: 3,
    name: 'Carol Davis',
    email: 'carol@business.net',
    phone: '+1 (555) 456-7890',
    company: 'Marketing Pro',
    status: 'Active',
    value: '$25,800',
    lastContact: '2024-01-18',
    location: 'Chicago, IL',
    industry: 'Marketing',
    notes: 'Long-term client, very satisfied',
  },
  {
    id: 4,
    name: 'David Wilson',
    email: 'david@startup.io',
    phone: '+1 (555) 321-0987',
    company: 'Innovation Inc',
    status: 'Prospect',
    value: '$5,500',
    lastContact: '2024-01-12',
    location: 'Austin, TX',
    industry: 'Technology',
    notes: 'Potential for large contract',
  },
  {
    id: 5,
    name: 'Emma Brown',
    email: 'emma@enterprise.com',
    phone: '+1 (555) 654-3210',
    company: 'Global Solutions',
    status: 'Active',
    value: '$45,200',
    lastContact: '2024-01-20',
    location: 'Boston, MA',
    industry: 'Consulting',
    notes: 'Enterprise client with multiple projects',
  },
  {
    id: 6,
    name: 'Frank Miller',
    email: 'frank@retail.com',
    phone: '+1 (555) 789-0123',
    company: 'Retail Plus',
    status: 'Lead',
    value: '$7,800',
    lastContact: '2024-01-08',
    location: 'Miami, FL',
    industry: 'Retail',
    notes: 'Exploring integration options',
  },
];

const customerStats = [
  {
    title: 'Total Customers',
    value: '2,463',
    change: '+12%',
    icon: Users,
    color: 'text-blue-600',
  },
  {
    title: 'New This Month',
    value: '89',
    change: '+23%',
    icon: UserPlus,
    color: 'text-green-600',
  },
  {
    title: 'Active Deals',
    value: '142',
    change: '+8%',
    icon: Calendar,
    color: 'text-purple-600',
  },
  {
    title: 'Total Value',
    value: '$324,567',
    change: '+15%',
    icon: DollarSign,
    color: 'text-orange-600',
  },
];

interface CustomersPageProps {
  onCustomerClick: (customerId: number) => void;
}

export function CustomersPage({ onCustomerClick }: CustomersPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedCustomers, setSelectedCustomers] = useState<number[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<(typeof customers)[0] | null>(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch =
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === 'all' || customer.status.toLowerCase() === statusFilter.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Lead':
        return 'bg-blue-100 text-blue-800';
      case 'Prospect':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedCustomers(filteredCustomers.map((c) => c.id));
    } else {
      setSelectedCustomers([]);
    }
  };

  const handleSelectCustomer = (customerId: number, checked: boolean) => {
    if (checked) {
      setSelectedCustomers([...selectedCustomers, customerId]);
    } else {
      setSelectedCustomers(selectedCustomers.filter((id) => id !== customerId));
    }
  };

  const handleRowClick = (customer: (typeof customers)[0], event: React.MouseEvent) => {
    // Don't navigate if clicking on checkbox, dropdown, or action buttons
    const target = event.target as HTMLElement;
    if (
      target.closest('input[type="checkbox"]') ||
      target.closest('[role="button"]') ||
      target.closest('button')
    ) {
      return;
    }
    onCustomerClick(customer.id);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1>Customers</h1>
        <Button onClick={() => setIsAddDialogOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Add Customer
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {customerStats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">{stat.change}</span> from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search customers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-40">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="lead">Lead</SelectItem>
              <SelectItem value="prospect">Prospect</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {selectedCustomers.length > 0 && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              {selectedCustomers.length} selected
            </span>
            <Button variant="outline" size="sm">
              <Mail className="h-4 w-4 mr-2" />
              Email
            </Button>
            <Button variant="outline" size="sm">
              <Trash className="h-4 w-4 mr-2" />
              Delete
            </Button>
          </div>
        )}
      </div>

      {/* Customer Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox
                    checked={
                      selectedCustomers.length === filteredCustomers.length &&
                      filteredCustomers.length > 0
                    }
                    onCheckedChange={handleSelectAll}
                  />
                </TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Industry</TableHead>
                <TableHead>Last Contact</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCustomers.map((customer) => (
                <TableRow
                  key={customer.id}
                  className="cursor-pointer hover:bg-muted/50"
                  onClick={(e) => handleRowClick(customer, e)}
                >
                  <TableCell onClick={(e) => e.stopPropagation()}>
                    <Checkbox
                      checked={selectedCustomers.includes(customer.id)}
                      onCheckedChange={(checked) =>
                        handleSelectCustomer(customer.id, checked as boolean)
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="" />
                        <AvatarFallback>{getInitials(customer.name)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div>{customer.name}</div>
                        <div className="text-sm text-muted-foreground">{customer.email}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div>{customer.company}</div>
                      <div className="text-sm text-muted-foreground">{customer.location}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(customer.status)}>{customer.status}</Badge>
                  </TableCell>
                  <TableCell>{customer.value}</TableCell>
                  <TableCell>{customer.industry}</TableCell>
                  <TableCell>{customer.lastContact}</TableCell>
                  <TableCell onClick={(e) => e.stopPropagation()}>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => onCustomerClick(customer.id)}>
                          <Eye className="h-4 w-4 mr-2" />
                          View Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Mail className="h-4 w-4 mr-2" />
                          Send Email
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Phone className="h-4 w-4 mr-2" />
                          Call
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                          <Trash className="h-4 w-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Customer Details Modal */}
      <Dialog open={!!selectedCustomer} onOpenChange={() => setSelectedCustomer(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Customer Details</DialogTitle>
            <DialogDescription>View and manage customer information</DialogDescription>
          </DialogHeader>
          {selectedCustomer && (
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="" />
                  <AvatarFallback className="text-lg">
                    {getInitials(selectedCustomer.name)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-medium">{selectedCustomer.name}</h3>
                  <p className="text-muted-foreground">{selectedCustomer.company}</p>
                  <Badge className={getStatusColor(selectedCustomer.status)}>
                    {selectedCustomer.status}
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Email</Label>
                  <p className="mt-1">{selectedCustomer.email}</p>
                </div>
                <div>
                  <Label>Phone</Label>
                  <p className="mt-1">{selectedCustomer.phone}</p>
                </div>
                <div>
                  <Label>Location</Label>
                  <p className="mt-1">{selectedCustomer.location}</p>
                </div>
                <div>
                  <Label>Industry</Label>
                  <p className="mt-1">{selectedCustomer.industry}</p>
                </div>
                <div>
                  <Label>Value</Label>
                  <p className="mt-1">{selectedCustomer.value}</p>
                </div>
                <div>
                  <Label>Last Contact</Label>
                  <p className="mt-1">{selectedCustomer.lastContact}</p>
                </div>
              </div>

              <div>
                <Label>Notes</Label>
                <p className="mt-1 text-muted-foreground">{selectedCustomer.notes}</p>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setSelectedCustomer(null)}>
              Close
            </Button>
            <Button>
              <Edit className="h-4 w-4 mr-2" />
              Edit Customer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Add Customer Modal */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Customer</DialogTitle>
            <DialogDescription>Create a new customer record</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Customer name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="customer@example.com" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="+1 (555) 123-4567" />
              </div>
              <div>
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Company name" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="City, State" />
              </div>
              <div>
                <Label htmlFor="industry">Industry</Label>
                <Input id="industry" placeholder="Technology, Healthcare, etc." />
              </div>
            </div>
            <div>
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" placeholder="Customer notes..." />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsAddDialogOpen(false)}>Add Customer</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
