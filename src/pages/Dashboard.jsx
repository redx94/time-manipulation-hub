import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const [systemStatus, setSystemStatus] = useState({
    currentTimeLoop: 42,
    activeUsers: 3,
    systemLoad: 65,
    temporalStability: 87
  });

  const [recentActions, setRecentActions] = useState([
    { user: 'User1', action: 'Identified time loop #42', timestamp: '2023-05-01 10:00:00' },
    { user: 'User2', action: 'Changed to time loop #43', timestamp: '2023-05-01 10:05:00' },
    { user: 'User3', action: 'Simulated 5 potential outcomes', timestamp: '2023-05-01 10:10:00' }
  ]);

  const [timelineData, setTimelineData] = useState([]);
  const [paradoxData, setParadoxData] = useState([]);

  useEffect(() => {
    generateTimelineData();
    generateParadoxData();
    const interval = setInterval(() => {
      updateSystemStatus();
      addRecentAction();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const generateTimelineData = () => {
    const data = [];
    for (let i = 0; i < 24; i++) {
      data.push({
        name: `T${i}`,
        stability: Math.floor(Math.random() * 100),
        paradoxPotential: Math.floor(Math.random() * 100),
        causalIntegrity: Math.floor(Math.random() * 100),
      });
    }
    setTimelineData(data);
  };

  const generateParadoxData = () => {
    setParadoxData([
      { name: 'Grandfather', value: Math.floor(Math.random() * 100) },
      { name: 'Bootstrap', value: Math.floor(Math.random() * 100) },
      { name: 'Predestination', value: Math.floor(Math.random() * 100) },
      { name: 'Causal Loop', value: Math.floor(Math.random() * 100) }
    ]);
  };

  const updateSystemStatus = () => {
    setSystemStatus(prev => ({
      currentTimeLoop: prev.currentTimeLoop + Math.floor(Math.random() * 3) - 1,
      activeUsers: Math.max(1, prev.activeUsers + Math.floor(Math.random() * 3) - 1),
      systemLoad: Math.min(100, Math.max(0, prev.systemLoad + Math.floor(Math.random() * 10) - 5)),
      temporalStability: Math.min(100, Math.max(0, prev.temporalStability + Math.floor(Math.random() * 10) - 5))
    }));
  };

  const addRecentAction = () => {
    const actions = ['Identified time loop', 'Changed time loop', 'Simulated outcomes', 'Analyzed paradox potential', 'Stabilized timeline'];
    const newAction = {
      user: `User${Math.floor(Math.random() * 5) + 1}`,
      action: actions[Math.floor(Math.random() * actions.length)],
      timestamp: new Date().toLocaleString()
    };
    setRecentActions(prev => [newAction, ...prev.slice(0, 9)]);
  };

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl mb-8">Timekeeper's Enigma Command Center</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Current Time Loop: #{systemStatus.currentTimeLoop}</p>
            <p>Active Users: {systemStatus.activeUsers}</p>
            <p>System Load: {systemStatus.systemLoad}%</p>
            <p>Temporal Stability: {systemStatus.temporalStability}%</p>
            <Button className="mt-4" onClick={() => {
              updateSystemStatus();
              generateTimelineData();
              generateParadoxData();
            }}>Refresh Data</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[200px]">
              {recentActions.map((action, index) => (
                <p key={index} className="mb-2">
                  <span className="font-bold">{action.user}</span>: {action.action}
                  <br />
                  <span className="text-sm text-gray-500">{action.timestamp}</span>
                </p>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>
        <Card className="col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle>Temporal Stability Chart</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={timelineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="stability" stroke="#8884d8" />
                <Line type="monotone" dataKey="paradoxPotential" stroke="#82ca9d" />
                <Line type="monotone" dataKey="causalIntegrity" stroke="#ffc658" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Paradox Distribution</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={paradoxData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {paradoxData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
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
              <p>2023-05-01 10:15:00 - Paradox potential detected in loop #43</p>
              <p>2023-05-01 10:20:00 - Automated timeline stabilization engaged</p>
              <p>2023-05-01 10:25:00 - Causal integrity check: PASSED</p>
              <p>2023-05-01 10:30:00 - Temporal flux anomaly detected in sector 7</p>
              <p>2023-05-01 10:35:00 - Chrono-field harmonics recalibrated</p>
              <p>2023-05-01 10:40:00 - Multiversal alignment check: STABLE</p>
              <p>2023-05-01 10:45:00 - Quantum entanglement patterns analyzed</p>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;