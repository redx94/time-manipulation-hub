import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Home, Terminal, Layout, MessageSquare, BarChart } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/cli', icon: Terminal, label: 'CLI' },
    { path: '/gui', icon: Layout, label: 'GUI' },
    { path: '/chat', icon: MessageSquare, label: 'Chat' },
    { path: '/dashboard', icon: BarChart, label: 'Dashboard' },
  ];

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Timekeeper's Enigma</Link>
        <div className="flex space-x-2">
          {navItems.map(({ path, icon: Icon, label }) => (
            <Link key={path} to={path}>
              <Button
                variant={location.pathname === path ? "secondary" : "ghost"}
                className="flex items-center space-x-1"
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;