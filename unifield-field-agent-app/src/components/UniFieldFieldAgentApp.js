import React, { useState } from 'react';
import { Users, UserPlus, BarChart2, Bell, Search, ChevronRight, TrendingUp, TrendingDown, Package, DollarSign } from 'lucide-react';

// Simulated data
const retailers = [
  { id: 1, name: "Supermart Store", location: "123 Main St", salesPerformance: 85, creditStatus: "Good" },
  { id: 2, name: "Electronics Plus", location: "456 Tech Ave", salesPerformance: 92, creditStatus: "Excellent" },
  { id: 3, name: "Corner Grocery", location: "789 Local Rd", salesPerformance: 78, creditStatus: "Fair" },
];

const Header = ({ title }) => (
  <header className="bg-green-700 text-white p-4 flex justify-between items-center shadow-md">
    <h1 className="text-2xl font-bold">{title}</h1>
    <Bell size={24} />
  </header>
);

const Navigation = ({ activePage, setActivePage }) => (
  <nav className="bg-white border-t shadow-md">
    <ul className="flex justify-around p-2">
      {[
        { icon: Users, name: 'Retailers' },
        { icon: UserPlus, name: 'Onboarding' },
        { icon: BarChart2, name: 'Analytics' },
      ].map(({ icon: Icon, name }) => (
        <li 
          key={name}
          onClick={() => setActivePage(name)}
          className={`cursor-pointer ${activePage === name ? 'text-green-700' : 'text-gray-600'}`}
        >
          <Icon size={24} />
        </li>
      ))}
    </ul>
  </nav>
);

const RetailersPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="space-y-6">
      <div className="relative">
        <input
          type="text"
          placeholder="Search retailers..."
          className="w-full p-3 pl-10 pr-4 border rounded-lg text-gray-800 placeholder-gray-500 bg-white shadow-sm"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Search className="absolute left-3 top-3.5 text-gray-500" size={20} />
      </div>

      <section className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Retailer Overview</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-100 p-4 rounded-lg">
            <p className="text-sm font-medium text-blue-800">Total Retailers</p>
            <p className="text-3xl font-bold text-blue-900">24</p>
            <div className="flex items-center text-green-600 mt-2">
              <TrendingUp size={16} />
              <span className="text-sm ml-1 font-medium">2 new this week</span>
            </div>
          </div>
          <div className="bg-green-100 p-4 rounded-lg">
            <p className="text-sm font-medium text-green-800">Avg. Sales Performance</p>
            <p className="text-3xl font-bold text-green-900">86%</p>
            <div className="flex items-center text-green-600 mt-2">
              <TrendingUp size={16} />
              <span className="text-sm ml-1 font-medium">3% from last week</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Retailer List</h2>
        <ul className="space-y-3">
          {retailers.map((retailer) => (
            <li key={retailer.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition duration-300">
              <div>
                <p className="font-semibold text-gray-800">{retailer.name}</p>
                <p className="text-sm text-gray-600">{retailer.location}</p>
              </div>
              <div className="flex items-center">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  retailer.salesPerformance >= 90 ? 'bg-green-200 text-green-800' :
                  retailer.salesPerformance >= 80 ? 'bg-blue-200 text-blue-800' :
                  'bg-yellow-200 text-yellow-800'
                }`}>
                  {retailer.salesPerformance}%
                </span>
                <ChevronRight size={20} className="text-gray-400 ml-2" />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

const OnboardingPage = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-semibold text-gray-800">Retailer Onboarding</h2>
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">New Retailer Registration</h3>
      <form className="space-y-4">
        <div>
          <label htmlFor="storeName" className="block text-sm font-medium text-gray-700">Store Name</label>
          <input type="text" id="storeName" name="storeName" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" />
        </div>
        <div>
          <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700">Owner Name</label>
          <input type="text" id="ownerName" name="ownerName" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" />
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
          <input type="text" id="location" name="location" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input type="tel" id="phone" name="phone" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" />
        </div>
        <button type="submit" className="w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
          Register Retailer
        </button>
      </form>
    </div>
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Onboarding Checklist</h3>
      <ul className="space-y-2">
        <li className="flex items-center">
          <input type="checkbox" id="step1" className="mr-2" />
          <label htmlFor="step1" className="text-gray-700">Collect business documents</label>
        </li>
        <li className="flex items-center">
          <input type="checkbox" id="step2" className="mr-2" />
          <label htmlFor="step2" className="text-gray-700">Verify store location</label>
        </li>
        <li className="flex items-center">
          <input type="checkbox" id="step3" className="mr-2" />
          <label htmlFor="step3" className="text-gray-700">Set up UniField Retailer App</label>
        </li>
        <li className="flex items-center">
          <input type="checkbox" id="step4" className="mr-2" />
          <label htmlFor="step4" className="text-gray-700">Provide initial training</label>
        </li>
      </ul>
    </div>
  </div>
);

const AnalyticsPage = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-semibold text-gray-800">Field Agent Analytics</h2>
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Performance Overview</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-purple-100 p-4 rounded-lg">
          <p className="text-sm font-medium text-purple-800">Retailers Onboarded</p>
          <p className="text-3xl font-bold text-purple-900">12</p>
          <div className="flex items-center text-green-600 mt-2">
            <TrendingUp size={16} />
            <span className="text-sm ml-1 font-medium">4 more than last month</span>
          </div>
        </div>
        <div className="bg-orange-100 p-4 rounded-lg">
          <p className="text-sm font-medium text-orange-800">Avg. Retailer Growth</p>
          <p className="text-3xl font-bold text-orange-900">15%</p>
          <div className="flex items-center text-green-600 mt-2">
            <TrendingUp size={16} />
            <span className="text-sm ml-1 font-medium">2% higher than target</span>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Top Performing Retailers</h3>
      <ul className="space-y-3">
        {retailers.sort((a, b) => b.salesPerformance - a.salesPerformance).slice(0, 3).map((retailer, index) => (
          <li key={retailer.id} className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-lg transition duration-300">
            <div className="flex items-center">
              <span className="font-bold mr-3 text-gray-700">{index + 1}.</span>
              <div>
                <p className="font-semibold text-gray-800">{retailer.name}</p>
                <p className="text-sm text-gray-600">{retailer.location}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Package className="text-blue-500 mr-2" size={20} />
              <span className="font-medium text-gray-700">{retailer.salesPerformance}%</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Credit Utilization</h3>
      <div className="h-48 flex items-end space-x-2">
        <div className="bg-green-500 w-1/4 h-3/4"></div>
        <div className="bg-green-500 w-1/4 h-full"></div>
        <div className="bg-yellow-500 w-1/4 h-1/2"></div>
        <div className="bg-red-500 w-1/4 h-1/4"></div>
      </div>
      <div className="flex justify-between mt-2 text-sm text-gray-600">
        <span>Excellent</span>
        <span>Good</span>
        <span>Fair</span>
        <span>Poor</span>
      </div>
    </div>
  </div>
);

const UniFieldFieldAgentApp = () => {
  const [activePage, setActivePage] = useState('Retailers');

  const renderPage = () => {
    switch (activePage) {
      case 'Retailers':
        return <RetailersPage />;
      case 'Onboarding':
        return <OnboardingPage />;
      case 'Analytics':
        return <AnalyticsPage />;
      default:
        return <RetailersPage />;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header title={activePage} />
      <main className="flex-grow overflow-y-auto p-4">
        {renderPage()}
      </main>
      <Navigation activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
};

export default UniFieldFieldAgentApp;