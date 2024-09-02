import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const GUI = () => {
  const [timeline, setTimeline] = useState(50);
  const [feedback, setFeedback] = useState('Welcome to the Timekeeper\'s Enigma GUI. Adjust the timeline to explore temporal dynamics.');
  const [timelineData, setTimelineData] = useState([]);

  useEffect(() => {
    generateTimelineData();
  }, [timeline]);

  const generateTimelineData = () => {
    const data = [];
    for (let i = 0; i < 10; i++) {
      data.push({
        name: `T${i}`,
        stability: Math.floor(Math.random() * 100),
        paradoxPotential: Math.floor(Math.random() * 100),
        causalIntegrity: Math.floor(Math.random() * 100),
      });
    }
    setTimelineData(data);
  };

  const handleTimelineChange = (value) => {
    setTimeline(value[0]);
    setFeedback(`Timeline adjusted to ${value[0]}. Recalculating temporal dynamics...`);
  };

  const handleAction = (action) => {
    let result = '';
    switch (action) {
      case 'Identify Loop':
        result = `Current time loop identified: Loop #${Math.floor(timeline / 10)}\nTemporal Stability: ${Math.floor(Math.random() * 100)}%\nParadox Potential: ${Math.floor(Math.random() * 100)}%`;
        break;
      case 'Change Loop':
        const newLoop = Math.floor(timeline / 10) + 1;
        result = `Time loop changed to Loop #${newLoop}\nRecalibrating temporal coordinates...\nCausal Integrity: ${Math.floor(Math.random() * 100)}%`;
        setTimeline(newLoop * 10);
        break;
      case 'Simulate Outcomes':
        const outcomes = Math.floor(Math.random() * 5) + 3;
        result = `Simulating outcomes for Timeline ${timeline}.\n${outcomes} potential futures identified:\n` +
          Array(outcomes).fill().map((_, i) => `Future ${i+1}: Probability ${Math.floor(Math.random() * 100)}%, Stability ${Math.floor(Math.random() * 100)}%`).join('\n');
        break;
      case 'Reset Timeline':
        setTimeline(50);
        result = 'Timeline reset to default position. Temporal flux stabilized.';
        break;
      default:
        result = 'Unknown action';
    }
    setFeedback(result);
    generateTimelineData();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl mb-8">Timekeeper's Enigma GUI</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl mb-4">Timeline Control</h3>
        <div className="mb-8 h-64">
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
        </div>
        <Slider
          defaultValue={[50]}
          max={100}
          step={1}
          onValueChange={handleTimelineChange}
          className="mb-4"
        />
        <p className="mb-4">Current Timeline: {timeline}</p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <Button onClick={() => handleAction('Identify Loop')} className="bg-blue-500 hover:bg-blue-600">Identify Loop</Button>
          <Button onClick={() => handleAction('Change Loop')} className="bg-green-500 hover:bg-green-600">Change Loop</Button>
          <Button onClick={() => handleAction('Simulate Outcomes')} className="bg-purple-500 hover:bg-purple-600">Simulate Outcomes</Button>
          <Button onClick={() => handleAction('Reset Timeline')} className="bg-red-500 hover:bg-red-600">Reset Timeline</Button>
        </div>
        <Card>
          <CardContent className="pt-6">
            <h4 className="text-lg font-semibold mb-2">Temporal Feedback</h4>
            <p className="whitespace-pre-wrap">{feedback}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GUI;