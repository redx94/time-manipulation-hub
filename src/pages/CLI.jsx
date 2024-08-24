import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
    const result = processCommand(input);
    setOutput(prev => `${prev}\n> ${input}\n${result}`);
    setInput('');
    setSuggestions([]);
  };

  const processCommand = (cmd) => {
    // Simulate command processing
    switch (cmd.toLowerCase()) {
      case 'identify the current time loop':
        return 'Current time loop identified: Alpha-7';
      case 'change the current time loop':
        return 'Time loop changed to: Beta-3';
      case 'simulate outcomes across parallel timelines':
        return 'Simulation complete. Results: 3 favorable outcomes, 2 neutral, 1 unfavorable';
      default:
        return 'Unknown command. Please try again.';
    }
  };

  return (
    <div className="min-h-screen bg-black text-green-500 p-8 font-mono">
      <h2 className="text-3xl mb-4">The Timekeeper's Enigma CLI</h2>
      <div className="mb-4 h-64 overflow-y-auto bg-gray-900 p-4 rounded">
        <pre>{output}</pre>
      </div>
      <div className="flex flex-col">
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow mb-2 bg-gray-800 text-green-500"
          placeholder="Enter command..."
        />
        {suggestions.length > 0 && (
          <ul className="mb-2 bg-gray-800 text-green-500 p-2 rounded">
            {suggestions.map((suggestion, index) => (
              <li key={index} className="cursor-pointer hover:bg-gray-700 p-1" onClick={() => setInput(suggestion)}>
                {suggestion}
              </li>
            ))}
          </ul>
        )}
        <Button onClick={handleCommand} className="bg-green-700 hover:bg-green-600">Execute</Button>
      </div>
    </div>
  );
};

export default CLI;