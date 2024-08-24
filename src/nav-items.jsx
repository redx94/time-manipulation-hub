import { Home, Terminal, Layout, MessageSquare } from "lucide-react";
import Index from "./pages/Index.jsx";
import CLI from "./pages/CLI.jsx";
import GUI from "./pages/GUI.jsx";
import Chat from "./pages/Chat.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "CLI",
    to: "/cli",
    icon: <Terminal className="h-4 w-4" />,
    page: <CLI />,
  },
  {
    title: "GUI",
    to: "/gui",
    icon: <Layout className="h-4 w-4" />,
    page: <GUI />,
  },
  {
    title: "Chat",
    to: "/chat",
    icon: <MessageSquare className="h-4 w-4" />,
    page: <Chat />,
  },
];
