import React, { useState } from 'react';
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

const GUI = () => {
  const [timeline, setTimeline] = useState(50);

  const handleTimelineChange = (value) => {
    setTimeline(value[0]);
  };

  const handleAction = (action) => {
    console.log(`Performed action: ${action} at timeline: ${timeline}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl mb-8">Timekeeper's Enigma GUI</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl mb-4">Timeline Control</h3>
        <Slider
          defaultValue={[50]}
          max={100}
          step={1}
          onValueChange={handleTimelineChange}
          className="mb-4"
        />
        <p className="mb-4">Current Timeline: {timeline}</p>
        <div className="grid grid-cols-2 gap-4">
          <Button onClick={() => handleAction('Identify Loop')}>Identify Loop</Button>
          <Button onClick={() => handleAction('Change Loop')}>Change Loop</Button>
          <Button onClick={() => handleAction('Simulate Outcomes')}>Simulate Outcomes</Button>
          <Button onClick={() => handleAction('Reset Timeline')}>Reset Timeline</Button>
        </div>
      </div>
    </div>
  );
};

export default GUI;