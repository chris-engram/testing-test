import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Separator } from './ui/separator';
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Building,
  Calendar,
  DollarSign,
  Edit,
  MessageSquare,
  FileText,
  Clock,
  TrendingUp,
  User,
  Plus,
} from 'lucide-react';
import { Progress } from './ui/progress';

// Mock customer data - in a real app this would come from props or API
const customerData = {
  1: {
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
    joinDate: '2023-03-15',
    totalDeals: 3,
    wonDeals: 2,
    totalValue: '$45,200',
    nextMeeting: '2024-01-25',
  },
  2: {
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
    joinDate: '2023-11-20',
    totalDeals: 1,
    wonDeals: 0,
    totalValue: '$8,200',
    nextMeeting: '2024-01-22',
  },
};

const activities = [
  {
    id: 1,
    type: 'email',
    title: 'Sent proposal for Q1 services',
    description: 'Comprehensive proposal including timeline and pricing',
    date: '2024-01-15',
    time: '2:30 PM',
    status: 'completed',
  },
  {
    id: 2,
    type: 'call',
    title: 'Follow-up call scheduled',
    description: 'Discussed requirements and next steps',
    date: '2024-01-12',
    time: '10:00 AM',
    status: 'completed',
  },
  {
    id: 3,
    type: 'meeting',
    title: 'Product demo completed',
    description: 'Demonstrated key features and answered questions',
    date: '2024-01-08',
    time: '3:00 PM',
    status: 'completed',
  },
  {
    id: 4,
    type: 'email',
    title: 'Initial contact email',
    description: 'Welcome email with company information',
    date: '2024-01-05',
    time: '9:15 AM',
    status: 'completed',
  },
];

const deals = [
  {
    id: 1,
    title: 'Q1 Technology Upgrade',
    value: '$15,000',
    stage: 'Proposal',
    probability: 75,
    expectedClose: '2024-02-15',
    status: 'active',
  },
  {
    id: 2,
    title: 'Annual Software License',
    value: '$8,500',
    stage: 'Negotiation',
    probability: 90,
    expectedClose: '2024-01-30',
    status: 'active',
  },
  {
    id: 3,
    title: 'Initial Setup Package',
    value: '$12,500',
    stage: 'Closed Won',
    probability: 100,
    expectedClose: '2023-12-20',
    status: 'won',
  },
];

interface CustomerProfilePageProps {
  customerId: number;
  onBack: () => void;
}

export function CustomerProfilePage({ customerId, onBack }: CustomerProfilePageProps) {
  const [activeTab, setActiveTab] = useState('overview');

  const customer = customerData[customerId as keyof typeof customerData];

  if (!customer) {
    return (
      <div className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Customers
          </Button>
        </div>
        <div className="text-center">
          <h2>Customer not found</h2>
          <p className="text-muted-foreground">The requested customer could not be found.</p>
        </div>
      </div>
    );
  }

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

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

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'email':
        return Mail;
      case 'call':
        return Phone;
      case 'meeting':
        return Calendar;
      default:
        return MessageSquare;
    }
  };

  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'Closed Won':
        return 'bg-green-100 text-green-800';
      case 'Proposal':
        return 'bg-blue-100 text-blue-800';
      case 'Negotiation':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Customers
        </Button>
      </div>

      {/* Customer Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex items-center gap-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src="" />
                <AvatarFallback className="text-xl">{getInitials(customer.name)}</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-semibold">{customer.name}</h1>
                <div className="flex items-center gap-2 mt-1">
                  <Building className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{customer.company}</span>
                </div>
                <div className="flex items-center gap-4 mt-2">
                  <Badge className={getStatusColor(customer.status)}>{customer.status}</Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {customer.location}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button>
                <Mail className="h-4 w-4 mr-2" />
                Send Email
              </Button>
              <Button variant="outline">
                <Phone className="h-4 w-4 mr-2" />
                Call
              </Button>
              <Button variant="outline">
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="activities">Activities</TabsTrigger>
          <TabsTrigger value="deals">Deals</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <Mail className="h-4 w-4" />
                    Email
                  </div>
                  <p>{customer.email}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <Phone className="h-4 w-4" />
                    Phone
                  </div>
                  <p>{customer.phone}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <MapPin className="h-4 w-4" />
                    Location
                  </div>
                  <p>{customer.location}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <Building className="h-4 w-4" />
                    Industry
                  </div>
                  <p>{customer.industry}</p>
                </div>
              </CardContent>
            </Card>

            {/* Key Metrics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Key Metrics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Total Value</span>
                  <span className="font-medium">{customer.totalValue}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Total Deals</span>
                  <span className="font-medium">{customer.totalDeals}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Won Deals</span>
                  <span className="font-medium">{customer.wonDeals}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Win Rate</span>
                  <span className="font-medium">
                    {Math.round((customer.wonDeals / customer.totalDeals) * 100)}%
                  </span>
                </div>
                <Separator />
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Customer Since</span>
                    <span className="text-sm">{customer.joinDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Last Contact</span>
                    <span className="text-sm">{customer.lastContact}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Meeting
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  Create Proposal
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Deal
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Add Note
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Notes Section */}
          <Card>
            <CardHeader>
              <CardTitle>Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{customer.notes}</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activities" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3>Recent Activities</h3>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Log Activity
            </Button>
          </div>

          <Card>
            <CardContent className="p-0">
              <div className="space-y-0">
                {activities.map((activity, index) => {
                  const Icon = getActivityIcon(activity.type);
                  return (
                    <div key={activity.id}>
                      <div className="p-4 flex items-start gap-4">
                        <div className="p-2 rounded-full bg-muted">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">{activity.title}</h4>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              {activity.date} at {activity.time}
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {activity.description}
                          </p>
                        </div>
                      </div>
                      {index < activities.length - 1 && <Separator />}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="deals" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3>Deals Pipeline</h3>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Deal
            </Button>
          </div>

          <div className="grid gap-4">
            {deals.map((deal) => (
              <Card key={deal.id}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium">{deal.title}</h4>
                    <Badge className={getStageColor(deal.stage)}>{deal.stage}</Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                        <DollarSign className="h-3 w-3" />
                        Value
                      </div>
                      <p className="font-medium">{deal.value}</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                        <Calendar className="h-3 w-3" />
                        Expected Close
                      </div>
                      <p className="text-sm">{deal.expectedClose}</p>
                    </div>

                    <div>
                      <div className="text-sm text-muted-foreground mb-2">
                        Probability: {deal.probability}%
                      </div>
                      <Progress value={deal.probability} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="documents" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3>Documents</h3>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Upload Document
            </Button>
          </div>

          <Card>
            <CardContent className="p-6 text-center">
              <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h4>No documents uploaded</h4>
              <p className="text-muted-foreground text-sm">
                Upload contracts, proposals, and other documents related to this customer.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
