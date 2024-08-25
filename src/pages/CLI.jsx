import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const CLI = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const commands = [
    "Identify the current time loop",
    "Change the current time loop",
    "Simulate outcomes across parallel timelines"
  ];

  useEffect(() => {
    if (input.trim() !== '') {
      const filtered = commands.filter(cmd => cmd.toLowerCase().includes(input.toLowerCase()));
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [input]);

  const handleCommand = () => {
    let response = '';
    switch (input.toLowerCase()) {
      case 'identify the current time loop':
        response = 'Current time loop identified: Loop #42, Duration: 24 hours';
        break;
      case 'change the current time loop':
        response = 'Time loop changed. Now in Loop #43';
        break;
      case 'simulate outcomes across parallel timelines':
        response = 'Simulation complete. 5 potential outcomes identified.';
        break;
      default:
        response = 'Unknown command. Please try again.';
    }
    setOutput(prev => `${prev}\n> ${input}\n${response}`);
    setInput('');
  };

  return (
    <div className="min-h-screen bg-black text-green-500 p-8 font-mono">
      <h2 className="text-3xl mb-4">Timekeeper's Enigma CLI</h2>
      <ScrollArea className="mb-4 h-64 bg-gray-900 p-4 rounded">
        <pre>{output}</pre>
      </ScrollArea>
      <div className="flex flex-col">
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow mb-2 bg-gray-800 text-green-500"
          placeholder="Enter command..."
        />
        {suggestions.length > 0 && (
          <div className="mb-2 bg-gray-800 p-2 rounded">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="cursor-pointer hover:bg-gray-700 p-1"
                onClick={() => setInput(suggestion)}
              >
                {suggestion}
              </div>
            ))}
          </div>
        )}
        <Button onClick={handleCommand}>Execute</Button>
      </div>
    </div>
  );
};

export default CLI;