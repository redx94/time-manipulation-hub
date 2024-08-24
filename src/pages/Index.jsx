import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
      <h1 className="text-5xl font-bold mb-8 text-white">The Timekeeper's Enigma</h1>
      <p className="text-xl text-white mb-8">Welcome to the centralized hub for time manipulation interfaces</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link to="/cli">
          <Button className="w-48 h-24 text-xl bg-blue-500 hover:bg-blue-600">CLI Interface</Button>
        </Link>
        <Link to="/gui">
          <Button className="w-48 h-24 text-xl bg-green-500 hover:bg-green-600">GUI Interface</Button>
        </Link>
        <Link to="/chat">
          <Button className="w-48 h-24 text-xl bg-yellow-500 hover:bg-yellow-600">Chat Interface</Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
