import React, { useState, useEffect, useRef } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const CLI = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('Welcome to the Timekeeper\'s Enigma CLI.\nType "help" for a list of commands.');
  const [suggestions, setSuggestions] = useState([]);
  const scrollAreaRef = useRef(null);

  const commands = {
    "help": "Display available commands",
    "identify": "Identify the current time loop",
    "change <loop_number>": "Change to a specific time loop",
    "simulate": "Simulate outcomes across parallel timelines",
    "analyze <entity>": "Analyze temporal stability of an entity",
    "clear": "Clear the console output"
  };

  useEffect(() => {
    if (input.trim() !== '') {
      const filtered = Object.keys(commands).filter(cmd => cmd.toLowerCase().includes(input.toLowerCase()));
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [input]);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [output]);

  const handleCommand = () => {
    let response = '';
    const commandParts = input.toLowerCase().split(' ');
    const command = commandParts[0];

    switch (command) {
      case 'help':
        response = 'Available commands:\n' + Object.entries(commands).map(([cmd, desc]) => `${cmd}: ${desc}`).join('\n');
        break;
      case 'identify':
        response = `Current time loop identified: Loop #${Math.floor(Math.random() * 1000)}\nDuration: ${Math.floor(Math.random() * 24) + 1} hours\nStability: ${Math.floor(Math.random() * 100)}%`;
        break;
      case 'change':
        const loopNumber = commandParts[1];
        if (loopNumber && !isNaN(loopNumber)) {
          response = `Time loop changed to Loop #${loopNumber}\nRecalibrating temporal coordinates...\nStability: ${Math.floor(Math.random() * 100)}%`;
        } else {
          response = 'Error: Please specify a valid loop number. Usage: change <loop_number>';
        }
        break;
      case 'simulate':
        const outcomes = Math.floor(Math.random() * 10) + 1;
        response = `Simulation complete. ${outcomes} potential outcomes identified:\n` + 
          Array(outcomes).fill().map((_, i) => `Outcome ${i+1}: Probability ${Math.floor(Math.random() * 100)}%`).join('\n');
        break;
      case 'analyze':
        const entity = commandParts[1];
        if (entity) {
          response = `Analyzing temporal stability of "${entity}"...\n` +
            `Temporal Coherence: ${Math.floor(Math.random() * 100)}%\n` +
            `Paradox Potential: ${Math.floor(Math.random() * 100)}%\n` +
            `Causal Integrity: ${Math.floor(Math.random() * 100)}%`;
        } else {
          response = 'Error: Please specify an entity to analyze. Usage: analyze <entity>';
        }
        break;
      case 'clear':
        setOutput('');
        return;
      default:
        response = 'Unknown command. Type "help" for a list of available commands.';
    }
    setOutput(prev => `${prev}\n\n> ${input}\n${response}`);
    setInput('');
  };

  return (
    <div className="min-h-screen bg-black text-green-500 p-8 font-mono">
      <h2 className="text-3xl mb-4">Timekeeper's Enigma CLI</h2>
      <ScrollArea className="mb-4 h-[60vh] bg-gray-900 p-4 rounded" ref={scrollAreaRef}>
        <pre className="whitespace-pre-wrap">{output}</pre>
      </ScrollArea>
      <div className="flex flex-col">
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleCommand()}
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
        <Button onClick={handleCommand} className="bg-green-700 hover:bg-green-600">Execute</Button>
      </div>
    </div>
  );
};

export default CLI;