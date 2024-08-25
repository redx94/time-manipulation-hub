import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl mb-8">Timekeeper's Enigma Command Center</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Current Time Loop: #42</p>
            <p>Active Users: 3</p>
            <p>System Load: 65%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[200px]">
              <p>User1: Identified time loop</p>
              <p>User2: Changed time loop</p>
              <p>User3: Simulated outcomes</p>
            </ScrollArea>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Security Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <p>No current alerts</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>System Logs</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[200px]">
              <p>2023-05-01 10:00:00 - System startup</p>
              <p>2023-05-01 10:05:00 - User login: Admin</p>
              <p>2023-05-01 10:10:00 - Time loop change initiated</p>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;