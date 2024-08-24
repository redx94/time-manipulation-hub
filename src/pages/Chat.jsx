import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      // Simulate AI response
      setTimeout(() => {
        const response = generateResponse(input);
        setMessages(prev => [...prev, { text: response, sender: 'ai' }]);
      }, 1000);
      setInput('');
    }
  };

  const generateResponse = (userInput) => {
    const lowercaseInput = userInput.toLowerCase();
    if (lowercaseInput.includes('identify') && lowercaseInput.includes('loop')) {
      return "The current time loop has been identified as Loop-Alpha-7. It appears to be stable with minimal temporal anomalies.";
    } else if (lowercaseInput.includes('change') && lowercaseInput.includes('loop')) {
      return "Time loop successfully changed to Loop-Beta-3. Please be cautious of potential temporal side effects.";
    } else if (lowercaseInput.includes('simulate') && lowercaseInput.includes('outcome')) {
      return "Simulation complete. Results show 3 favorable outcomes, 2 neutral outcomes, and 1 unfavorable outcome across parallel timelines.";
    } else {
      return "I'm sorry, I didn't understand that command. Could you please rephrase or try asking about identifying loops, changing loops, or simulating outcomes?";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl mb-8">The Timekeeper's Enigma Chat Interface</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg h-[70vh] flex flex-col">
        <ScrollArea className="flex-grow mb-4">
          {messages.map((message, index) => (
            <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
              <span className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
                {message.text}
              </span>
            </div>
          ))}
        </ScrollArea>
        <div className="flex">
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow mr-2"
            placeholder="Type your message..."
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <Button onClick={handleSend}>Send</Button>
        </div>
      </div>
    </div>
  );
};

export default Chat;