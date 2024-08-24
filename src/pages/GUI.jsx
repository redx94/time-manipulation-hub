import React, { useState } from 'react';
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const GUI = () => {
  const [timeline, setTimeline] = useState(50);
  const [currentLoop, setCurrentLoop] = useState('Alpha-7');
  const [simulationResults, setSimulationResults] = useState(null);

  const handleTimelineChange = (value) => {
    setTimeline(value[0]);
  };

  const handleAction = (action) => {
    switch(action) {
      case 'Identify Loop':
        setCurrentLoop(`Loop-${Math.floor(Math.random() * 10)}`);
        break;
      case 'Change Loop':
        setCurrentLoop(`New-Loop-${Math.floor(Math.random() * 10)}`);
        break;
      case 'Simulate Outcomes':
        const results = [
          { name: 'Favorable', value: Math.floor(Math.random() * 10) },
          { name: 'Neutral', value: Math.floor(Math.random() * 10) },
          { name: 'Unfavorable', value: Math.floor(Math.random() * 10) },
        ];
        setSimulationResults(results);
        break;
      case 'Reset Timeline':
        setTimeline(50);
        setCurrentLoop('Alpha-7');
        setSimulationResults(null);
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl mb-8">The Timekeeper's Enigma GUI</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-6">
          <h3 className="text-xl mb-4">Timeline Control</h3>
          <Slider
            defaultValue={[50]}
            max={100}
            step={1}
            value={[timeline]}
            onValueChange={handleTimelineChange}
            className="mb-4"
          />
          <p className="mb-4">Current Timeline: {timeline}</p>
          <p className="mb-4">Current Loop: {currentLoop}</p>
          <div className="grid grid-cols-2 gap-4">
            <Button onClick={() => handleAction('Identify Loop')}>Identify Loop</Button>
            <Button onClick={() => handleAction('Change Loop')}>Change Loop</Button>
            <Button onClick={() => handleAction('Simulate Outcomes')}>Simulate Outcomes</Button>
            <Button onClick={() => handleAction('Reset Timeline')}>Reset Timeline</Button>
          </div>
        </Card>
        <Card className="p-6">
          <h3 className="text-xl mb-4">Simulation Results</h3>
          {simulationResults ? (
            <BarChart width={400} height={300} data={simulationResults}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          ) : (
            <p>No simulation results available. Click 'Simulate Outcomes' to generate data.</p>
          )}
        </Card>
      </div>
    </div>
  );
};

export default GUI;