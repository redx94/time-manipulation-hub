import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CLI = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleCommand = () => {
    // Simulate command processing
    setOutput(`Processed command: ${input}`);
    setInput('');
  };

  return (
    <div className="min-h-screen bg-black text-green-500 p-8 font-mono">
      <h2 className="text-3xl mb-4">Timekeeper's Enigma CLI</h2>
      <div className="mb-4 h-64 overflow-y-auto bg-gray-900 p-4 rounded">
        <pre>{output}</pre>
      </div>
      <div className="flex">
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow mr-2 bg-gray-800 text-green-500"
          placeholder="Enter command..."
        />
        <Button onClick={handleCommand}>Execute</Button>
      </div>
    </div>
  );
};

export default CLI;