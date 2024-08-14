import React, { useState } from 'react';
import { Home, Users, UserCheck, Package, ShoppingCart, BarChart2, DollarSign, Target, Settings, Menu, X, Bell, Search, ChevronDown } from 'lucide-react';

const SidebarItem = ({ icon: Icon, label, active, onClick }) => (
  <li
    className={`flex items-center p-2 rounded-lg cursor-pointer ${
      active ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
    }`}
    onClick={onClick}
  >
    <Icon size={20} className="mr-3" />
    <span>{label}</span>
  </li>
);

const BackendInterfaceLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState('Dashboard');

  const sidebarItems = [
    { icon: Home, label: 'Dashboard' },
    { icon: Users, label: 'Retailers' },
    { icon: UserCheck, label: 'Field Agents' },
    { icon: Package, label: 'Inventory' },
    { icon: ShoppingCart, label: 'Orders' },
    { icon: BarChart2, label: 'Analytics' },
    { icon: DollarSign, label: 'Finance' },
    { icon: Target, label: 'Marketing' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`bg-white w-64 min-h-screen p-4 ${
          sidebarOpen ? 'block' : 'hidden'
        } md:block transition-all duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-blue-700">UniField Admin</h1>
          <button onClick={() => setSidebarOpen(false)} className="md:hidden">
            <X size={24} />
          </button>
        </div>
        <nav>
          <ul className="space-y-2">
            {sidebarItems.map((item) => (
              <SidebarItem
                key={item.label}
                icon={item.icon}
                label={item.label}
                active={activePage === item.label}
                onClick={() => setActivePage(item.label)}
              />
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top header */}
        <header className="bg-white shadow-sm h-16 flex items-center justify-between px-4">
          <div className="flex items-center">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="mr-4 md:hidden"
            >
              <Menu size={24} />
            </button>
            <h2 className="text-xl font-semibold text-gray-800">{activePage}</h2>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-8 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-2 top-2.5 text-gray-400" size={20} />
            </div>
            <button className="relative">
              <Bell size={24} className="text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </button>
            <div className="flex items-center space-x-2">
              <img
                src="/api/placeholder/32/32"
                alt="Admin"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-gray-700">Admin</span>
              <ChevronDown size={16} className="text-gray-500" />
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default BackendInterfaceLayout;