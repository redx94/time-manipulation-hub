import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";

const GUI = () => {
  const [timeline, setTimeline] = useState(50);
  const [feedback, setFeedback] = useState('');

  const handleTimelineChange = (value) => {
    setTimeline(value[0]);
    setFeedback(`Timeline changed to ${value[0]}. Calculating potential outcomes...`);
  };

  const handleAction = (action) => {
    let result = '';
    switch (action) {
      case 'Identify Loop':
        result = `Current time loop identified: Loop #${Math.floor(timeline / 10)}`;
        break;
      case 'Change Loop':
        result = `Time loop changed to Loop #${Math.floor(timeline / 10) + 1}`;
        break;
      case 'Simulate Outcomes':
        result = `Simulating outcomes for Timeline ${timeline}. 5 potential futures identified.`;
        break;
      case 'Reset Timeline':
        setTimeline(50);
        result = 'Timeline reset to default position.';
        break;
      default:
        result = 'Unknown action';
    }
    setFeedback(result);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl mb-8">Timekeeper's Enigma GUI</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl mb-4">Timeline Control</h3>
        <div className="mb-8 h-64 bg-gray-200 flex items-center justify-center">
          <p className="text-gray-500">3D Visualization Placeholder</p>
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
          <Button onClick={() => handleAction('Identify Loop')}>Identify Loop</Button>
          <Button onClick={() => handleAction('Change Loop')}>Change Loop</Button>
          <Button onClick={() => handleAction('Simulate Outcomes')}>Simulate Outcomes</Button>
          <Button onClick={() => handleAction('Reset Timeline')}>Reset Timeline</Button>
        </div>
        <Card>
          <CardContent className="pt-6">
            <h4 className="text-lg font-semibold mb-2">Feedback</h4>
            <p>{feedback}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GUI;
