import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Clock, Terminal, Layout, MessageSquare, BarChart } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-800 to-purple-900 p-8">
      <Clock className="w-32 h-32 text-white mb-6 animate-pulse" />
      <h1 className="text-6xl font-bold mb-4 text-white text-center">The Timekeeper's Enigma</h1>
      <p className="text-2xl text-white mb-12 text-center max-w-2xl">
        Welcome to the advanced Time Manipulation Hub. Explore the intricacies of temporal dynamics and shape the fabric of reality itself.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Link to="/cli">
          <Button className="w-64 h-32 text-xl flex flex-col items-center justify-center bg-blue-600 hover:bg-blue-700 transition-all duration-300">
            <Terminal className="w-12 h-12 mb-2" />
            Command-Line Interface
            <span className="text-sm mt-1">Master temporal algorithms</span>
          </Button>
        </Link>
        <Link to="/gui">
          <Button className="w-64 h-32 text-xl flex flex-col items-center justify-center bg-purple-600 hover:bg-purple-700 transition-all duration-300">
            <Layout className="w-12 h-12 mb-2" />
            Graphical Interface
            <span className="text-sm mt-1">Visualize time streams</span>
          </Button>
        </Link>
        <Link to="/chat">
          <Button className="w-64 h-32 text-xl flex flex-col items-center justify-center bg-green-600 hover:bg-green-700 transition-all duration-300">
            <MessageSquare className="w-12 h-12 mb-2" />
            Chat Interface
            <span className="text-sm mt-1">Converse with the Chronos AI</span>
          </Button>
        </Link>
        <Link to="/dashboard">
          <Button className="w-64 h-32 text-xl flex flex-col items-center justify-center bg-red-600 hover:bg-red-700 transition-all duration-300">
            <BarChart className="w-12 h-12 mb-2" />
            Command Center
            <span className="text-sm mt-1">Monitor temporal flux</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;