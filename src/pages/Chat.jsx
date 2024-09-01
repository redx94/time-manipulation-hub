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
            response = "I'm sorry, I don't understand that command. Can you please rephrase or try a different command?";
        }
        setMessages(prev => [...prev, { text: response, sender: 'ai' }]);
      }, 1000);
      setInput('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl mb-8">Timekeeper's Enigma Chat Interface</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg h-[70vh] flex flex-col">
        <ScrollArea className="flex-grow mb-4">
          {messages.map((message, index) => (
            <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
              <span className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
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
          />
          <Button onClick={handleSend}>Send</Button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
