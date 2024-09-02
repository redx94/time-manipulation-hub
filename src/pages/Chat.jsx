import React, { useState, useEffect, useRef } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar } from "@/components/ui/avatar";

const Chat = () => {
  const [messages, setMessages] = useState([
    { text: "Welcome to the Timekeeper's Enigma Chat Interface. I am Chronos, your AI assistant for temporal matters. How may I assist you today?", sender: 'ai' }
  ]);
  const [input, setInput] = useState('');
  const scrollAreaRef = useRef(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      generateAIResponse(input);
      setInput('');
    }
  };

  const generateAIResponse = (userInput) => {
    setTimeout(() => {
      let response = '';
      const lowercaseInput = userInput.toLowerCase();

      if (lowercaseInput.includes('identify') && lowercaseInput.includes('time loop')) {
        response = `I've analyzed the current temporal coordinates. We are in Time Loop #${Math.floor(Math.random() * 1000)}. This loop has a duration of ${Math.floor(Math.random() * 24) + 1} hours and a stability rating of ${Math.floor(Math.random() * 100)}%. Would you like me to provide more details on the loop's characteristics?`;
      } else if (lowercaseInput.includes('change') && lowercaseInput.includes('time loop')) {
        const newLoop = Math.floor(Math.random() * 1000);
        response = `Initiating temporal shift... Coordinates locked on Time Loop #${newLoop}. Transition complete. The new loop has a stability rating of ${Math.floor(Math.random() * 100)}%. Please be aware that this shift may have altered the causal chain. Would you like me to run a paradox check?`;
      } else if (lowercaseInput.includes('simulate') && lowercaseInput.includes('outcome')) {
        const outcomes = Math.floor(Math.random() * 5) + 3;
        response = `I've run a simulation of potential outcomes based on current temporal variables. ${outcomes} significant futures have been identified:\n\n` +
          Array(outcomes).fill().map((_, i) => `Future ${i+1}:\n- Probability: ${Math.floor(Math.random() * 100)}%\n- Stability: ${Math.floor(Math.random() * 100)}%\n- Key Event: ${generateRandomEvent()}\n`).join('\n');
        response += '\nWould you like me to analyze any specific future in more detail?';
      } else if (lowercaseInput.includes('explain') && lowercaseInput.includes('paradox')) {
        response = `A temporal paradox occurs when there's a logical inconsistency within the timeline, often caused by time travel or alterations to past events. Common types include:\n\n1. Grandfather Paradox: Where one prevents their own existence by changing the past.\n2. Bootstrap Paradox: Where information or objects have no discernible origin due to time loop.\n3. Predestination Paradox: Where attempts to prevent an event actually cause it to happen.\n\nOur job at the Timekeeper's Enigma is to monitor and prevent such paradoxes to maintain the integrity of the timeline. Would you like to run a paradox risk assessment on our current time loop?`;
      } else {
        response = "I apologize, but I'm not sure how to respond to that query. As the Chronos AI, I'm specialized in temporal dynamics, time loops, and paradox analysis. Could you please rephrase your question in terms of time manipulation or timeline management? Alternatively, you can ask me to 'identify the current time loop', 'change the time loop', 'simulate outcomes', or 'explain paradoxes' for more specific information.";
      }

      setMessages(prev => [...prev, { text: response, sender: 'ai' }]);
    }, 1000);
  };

  const generateRandomEvent = () => {
    const events = [
      "Technological Singularity achieved",
      "First contact with alien civilization",
      "Global climate stabilization",
      "Quantum computing breakthrough",
      "Interstellar colonization begins",
      "Time travel publicly available",
      "AI-human hybrid society emerges",
      "Unified theory of physics discovered",
      "Immortality treatment developed",
      "Multiverse travel established"
    ];
    return events[Math.floor(Math.random() * events.length)];
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl mb-8">Timekeeper's Enigma Chat Interface</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg h-[70vh] flex flex-col">
        <ScrollArea className="flex-grow mb-4 pr-4" ref={scrollAreaRef}>
          {messages.map((message, index) => (
            <div key={index} className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex items-start ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                <Avatar className={`w-8 h-8 ${message.sender === 'user' ? 'ml-2' : 'mr-2'}`}>
                  {message.sender === 'user' ? 'U' : 'AI'}
                </Avatar>
                <div className={`max-w-[70%] p-3 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                  <p className="whitespace-pre-wrap">{message.text}</p>
                </div>
              </div>
            </div>
          ))}
        </ScrollArea>
        <div className="flex">
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
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