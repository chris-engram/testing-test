import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Mail, Phone, Calendar, FileText } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'email',
    customer: 'Alice Johnson',
    action: 'Sent proposal',
    time: '2 hours ago',
    icon: Mail,
    color: 'text-blue-600',
  },
  {
    id: 2,
    type: 'call',
    customer: 'Bob Smith',
    action: 'Follow-up call completed',
    time: '4 hours ago',
    icon: Phone,
    color: 'text-green-600',
  },
  {
    id: 3,
    type: 'meeting',
    customer: 'Carol Davis',
    action: 'Demo meeting scheduled',
    time: '6 hours ago',
    icon: Calendar,
    color: 'text-purple-600',
  },
  {
    id: 4,
    type: 'document',
    customer: 'David Wilson',
    action: 'Contract sent for review',
    time: '1 day ago',
    icon: FileText,
    color: 'text-orange-600',
  },
  {
    id: 5,
    type: 'email',
    customer: 'Emma Brown',
    action: 'Thank you email sent',
    time: '1 day ago',
    icon: Mail,
    color: 'text-blue-600',
  },
];

export function RecentActivities() {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  const getActivityType = (type: string) => {
    switch (type) {
      case 'email':
        return 'Email';
      case 'call':
        return 'Call';
      case 'meeting':
        return 'Meeting';
      case 'document':
        return 'Document';
      default:
        return 'Activity';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center space-x-4">
              <div className={`p-2 rounded-full bg-gray-100 ${activity.color}`}>
                <activity.icon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="" />
                    <AvatarFallback className="text-xs">
                      {getInitials(activity.customer)}
                    </AvatarFallback>
                  </Avatar>
                  <span>{activity.customer}</span>
                  <Badge variant="secondary" className="text-xs">
                    {getActivityType(activity.type)}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{activity.action}</p>
              </div>
              <div className="text-sm text-muted-foreground">{activity.time}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
