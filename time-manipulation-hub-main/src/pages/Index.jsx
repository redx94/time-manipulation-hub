// Update this page (the content is just a fallback if you fail to update the page)

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <h1 className="text-5xl font-bold mb-8 text-white">Time Manipulation Hub</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link to="/cli">
          <Button className="w-48 h-24 text-xl">CLI Interface</Button>
        </Link>
        <Link to="/gui">
          <Button className="w-48 h-24 text-xl">GUI Interface</Button>
        </Link>
        <Link to="/chat">
          <Button className="w-48 h-24 text-xl">Chat Interface</Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
