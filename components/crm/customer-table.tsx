'use client';

import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Plus, Mail, Phone } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

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
  },
];

export function CustomerTable() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search customers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 w-64"
          />
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Customer
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Value</TableHead>
              <TableHead>Last Contact</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCustomers.map((customer) => (
              <TableRow key={customer.id}>
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
                <TableCell>{customer.company}</TableCell>
                <TableCell>
                  <Badge className={getStatusColor(customer.status)}>{customer.status}</Badge>
                </TableCell>
                <TableCell>{customer.value}</TableCell>
                <TableCell>{customer.lastContact}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm">
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Phone className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
