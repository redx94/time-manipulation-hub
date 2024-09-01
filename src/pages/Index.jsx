import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Clock, Terminal, Layout, MessageSquare, BarChart } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <Clock className="w-24 h-24 text-white mb-4" />
      <h1 className="text-5xl font-bold mb-4 text-white">The Timekeeper's Enigma</h1>
      <p className="text-xl text-white mb-8">Welcome to the Time Manipulation Hub</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Link to="/cli">
          <Button className="w-48 h-24 text-xl flex flex-col items-center justify-center">
            <Terminal className="w-8 h-8 mb-2" />
            Command-Line Interface
          </Button>
        </Link>
        <Link to="/gui">
          <Button className="w-48 h-24 text-xl flex flex-col items-center justify-center">
            <Layout className="w-8 h-8 mb-2" />
            Graphical Interface
          </Button>
        </Link>
        <Link to="/chat">
          <Button className="w-48 h-24 text-xl flex flex-col items-center justify-center">
            <MessageSquare className="w-8 h-8 mb-2" />
            Chat Interface
          </Button>
        </Link>
        <Link to="/dashboard">
          <Button className="w-48 h-24 text-xl flex flex-col items-center justify-center">
            <BarChart className="w-8 h-8 mb-2" />
            Command Center
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
