import React, { useState } from 'react';
import { Home, ShoppingCart, CreditCard, BarChart2, Bell, Search, ChevronRight, Truck, Package, ArrowUpRight, ArrowDownRight } from 'lucide-react';

// Simulated data
const products = [
  { id: 1, name: "Coca-Cola 500ml", price: 150, image: "/api/placeholder/100/100" },
  { id: 2, name: "Indomie Noodles", price: 120, image: "/api/placeholder/100/100" },
  { id: 3, name: "Peak Milk 170g", price: 200, image: "/api/placeholder/100/100" },
  { id: 4, name: "Samsung A12", price: 65000, image: "/api/placeholder/100/100" },
];

const Header = ({ title }) => (
  <header className="bg-blue-700 text-white p-4 flex justify-between items-center shadow-md">
    <h1 className="text-2xl font-bold">{title}</h1>
    <Bell size={24} />
  </header>
);

const Navigation = ({ activePage, setActivePage }) => (
  <nav className="bg-white border-t shadow-md">
    <ul className="flex justify-around p-2">
      {[
        { icon: Home, name: 'Home' },
        { icon: ShoppingCart, name: 'Catalog' },
        { icon: CreditCard, name: 'Payments' },
        { icon: BarChart2, name: 'Analytics' },
      ].map(({ icon: Icon, name }) => (
        <li 
          key={name}
          onClick={() => setActivePage(name)}
          className={`cursor-pointer ${activePage === name ? 'text-blue-700' : 'text-gray-600'}`}
        >
          <Icon size={24} />
        </li>
      ))}
    </ul>
  </nav>
);

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="space-y-6">
      <div className="relative">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full p-3 pl-10 pr-4 border rounded-lg text-gray-800 placeholder-gray-500 bg-white shadow-sm"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Search className="absolute left-3 top-3.5 text-gray-500" size={20} />
      </div>

      <section className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Dashboard</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-100 p-4 rounded-lg">
            <p className="text-sm font-medium text-blue-800">Total Sales</p>
            <p className="text-3xl font-bold text-blue-900">₦150,000</p>
            <div className="flex items-center text-green-600 mt-2">
              <ArrowUpRight size={16} />
              <span className="text-sm ml-1 font-medium">5% from last week</span>
            </div>
          </div>
          <div className="bg-green-100 p-4 rounded-lg">
            <p className="text-sm font-medium text-green-800">Credit Balance</p>
            <p className="text-3xl font-bold text-green-900">₦50,000</p>
            <div className="flex items-center text-red-600 mt-2">
              <ArrowDownRight size={16} />
              <span className="text-sm ml-1 font-medium">2% from last week</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg flex items-center justify-center transition duration-300">
            <ShoppingCart className="mr-2" size={20} />
            Place Order
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg flex items-center justify-center transition duration-300">
            <CreditCard className="mr-2" size={20} />
            Make Payment
          </button>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Recent Activity</h2>
        <ul className="space-y-3">
          <li className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition duration-300">
            <div className="flex items-center">
              <Truck className="mr-3 text-blue-600" size={20} />
              <span className="text-gray-700">Order #1234 delivered</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </li>
          <li className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition duration-300">
            <div className="flex items-center">
              <Package className="mr-3 text-green-600" size={20} />
              <span className="text-gray-700">New product added: Samsung A12</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </li>
        </ul>
      </section>
    </div>
  );
};

const CatalogPage = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Product Catalog</h2>
      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white border rounded-lg p-4 shadow-sm">
            <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-3 rounded" />
            <p className="font-semibold text-gray-800">{product.name}</p>
            <p className="text-sm text-gray-600 mb-3">₦{product.price}</p>
            <button 
              onClick={() => addToCart(product)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm w-full transition duration-300"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="fixed bottom-16 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg">
          <ShoppingCart size={24} />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
            {cart.length}
          </span>
        </div>
      )}
    </div>
  );
};

const PaymentsPage = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-semibold text-gray-800">Payments & Credit</h2>
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Credit Status</h3>
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-sm text-gray-600 mb-1">Available Credit</p>
          <p className="text-2xl font-bold text-blue-700">₦50,000</p>
        </div>
        <div>
          <p className="text-sm text-gray-600 mb-1">Credit Limit</p>
          <p className="text-2xl font-bold text-gray-700">₦100,000</p>
        </div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
        <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '50%'}}></div>
      </div>
    </div>
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Recent Transactions</h3>
      <ul className="space-y-3">
        <li className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-lg transition duration-300">
          <div>
            <p className="font-semibold text-gray-800">Order #1234</p>
            <p className="text-sm text-gray-600">Jul 15, 2023</p>
          </div>
          <p className="text-red-600 font-medium">-₦5,000</p>
        </li>
        <li className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-lg transition duration-300">
          <div>
            <p className="font-semibold text-gray-800">Payment</p>
            <p className="text-sm text-gray-600">Jul 10, 2023</p>
          </div>
          <p className="text-green-600 font-medium">+₦10,000</p>
        </li>
      </ul>
    </div>
    <button className="w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg font-semibold transition duration-300">
      Make a Payment
    </button>
  </div>
);

const AnalyticsPage = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-semibold text-gray-800">Sales Analytics</h2>
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Sales Overview</h3>
      <div className="h-48 flex items-end space-x-2">
        <div className="bg-blue-500 w-1/7 h-1/4"></div>
        <div className="bg-blue-500 w-1/7 h-2/4"></div>
        <div className="bg-blue-500 w-1/7 h-3/4"></div>
        <div className="bg-blue-500 w-1/7 h-1/2"></div>
        <div className="bg-blue-500 w-1/7 h-full"></div>
        <div className="bg-blue-500 w-1/7 h-3/4"></div>
        <div className="bg-blue-500 w-1/7 h-1/2"></div>
      </div>
      <div className="flex justify-between mt-2 text-sm text-gray-600">
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
        <span>Sun</span>
      </div>
    </div>
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Top Selling Products</h3>
      <ul className="space-y-3">
        {products.slice(0, 3).map((product, index) => (
          <li key={product.id} className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-lg transition duration-300">
            <div className="flex items-center">
              <span className="font-bold mr-3 text-gray-700">{index + 1}.</span>
              <span className="text-gray-800">{product.name}</span>
            </div>
            <span className="text-gray-600 font-medium">₦{product.price * (10 - index)}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const UniFieldApp = () => {
  const [activePage, setActivePage] = useState('Home');

  const renderPage = () => {
    switch (activePage) {
      case 'Home':
        return <HomePage />;
      case 'Catalog':
        return <CatalogPage />;
      case 'Payments':
        return <PaymentsPage />;
      case 'Analytics':
        return <AnalyticsPage />;
      default:
        return <HomePage />;
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

export default UniFieldApp;