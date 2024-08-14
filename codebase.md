# unifield-retailer-app/tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

```

# unifield-retailer-app/postcss.config.mjs

```mjs
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};

export default config;

```

# unifield-retailer-app/package.json

```json
{
  "name": "unifield-retailer-app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "lucide-react": "^0.427.0",
    "next": "14.2.5",
    "react": "^18",
    "react-dom": "^18"
  },
  "devDependencies": {
    "eslint": "^8",
    "eslint-config-next": "14.2.5",
    "postcss": "^8",
    "tailwindcss": "^3.4.1"
  }
}

```

# unifield-retailer-app/next.config.mjs

```mjs
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

```

# unifield-retailer-app/jsconfig.json

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}

```

# unifield-retailer-app/README.md

```md
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

```

# unifield-retailer-app/.gitignore

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js
.yarn/install-state.gz

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

```

# unifield-retailer-app/.eslintrc.json

```json
{
  "extends": "next/core-web-vitals"
}

```

# unifield-field-agent-app/tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

```

# unifield-field-agent-app/postcss.config.mjs

```mjs
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};

export default config;

```

# unifield-field-agent-app/package.json

```json
{
  "name": "unifield-field-agent-app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "lucide-react": "^0.427.0",
    "next": "14.2.5",
    "react": "^18",
    "react-dom": "^18"
  },
  "devDependencies": {
    "eslint": "^8",
    "eslint-config-next": "14.2.5",
    "postcss": "^8",
    "tailwindcss": "^3.4.1"
  }
}

```

# unifield-field-agent-app/next.config.mjs

```mjs
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

```

# unifield-field-agent-app/jsconfig.json

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}

```

# unifield-field-agent-app/README.md

```md
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

```

# unifield-field-agent-app/.gitignore

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js
.yarn/install-state.gz

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

```

# unifield-field-agent-app/.eslintrc.json

```json
{
  "extends": "next/core-web-vitals"
}

```

# unifield-backend-interface/tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
```

# unifield-backend-interface/postcss.config.mjs

```mjs
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};

export default config;

```

# unifield-backend-interface/package.json

```json
{
  "name": "unifield-backend-interface",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "lucide-react": "^0.427.0",
    "next": "14.2.5",
    "react": "^18",
    "react-dom": "^18"
  },
  "devDependencies": {
    "eslint": "^8",
    "eslint-config-next": "14.2.5",
    "postcss": "^8",
    "tailwindcss": "^3.4.1"
  }
}

```

# unifield-backend-interface/next.config.mjs

```mjs
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

```

# unifield-backend-interface/jsconfig.json

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}

```

# unifield-backend-interface/README.md

```md
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

```

# unifield-backend-interface/.gitignore

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js
.yarn/install-state.gz

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

```

# unifield-backend-interface/.eslintrc.json

```json
{
  "extends": "next/core-web-vitals"
}

```

# unifield-retailer-app/public/vercel.svg

This is a file of the type: SVG Image

# unifield-retailer-app/public/next.svg

This is a file of the type: SVG Image

# unifield-field-agent-app/public/vercel.svg

This is a file of the type: SVG Image

# unifield-field-agent-app/public/next.svg

This is a file of the type: SVG Image

# unifield-backend-interface/public/vercel.svg

This is a file of the type: SVG Image

# unifield-backend-interface/public/next.svg

This is a file of the type: SVG Image

# unifield-retailer-app/src/app/page.js

```js
'use client'
import UniFieldApp from '../components/UniFieldApp'

export default function Home() {
  return (
    <UniFieldApp />
  )
}
```

# unifield-retailer-app/src/app/layout.js

```js
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

```

# unifield-retailer-app/src/app/globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --foreground-rgb: 0, 0, 0;
  --background-start-rgb: 214, 219, 220;
  --background-end-rgb: 255, 255, 255;
}

@media (prefers-color-scheme: dark) {
  :root {
    --foreground-rgb: 255, 255, 255;
    --background-start-rgb: 0, 0, 0;
    --background-end-rgb: 0, 0, 0;
  }
}

body {
  color: rgb(var(--foreground-rgb));
  background: linear-gradient(
      to bottom,
      transparent,
      rgb(var(--background-end-rgb))
    )
    rgb(var(--background-start-rgb));
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
```

# unifield-retailer-app/src/app/favicon.ico

This is a binary file of the type: Binary

# unifield-retailer-app/src/components/UniFieldApp.js

```js
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
```

# unifield-field-agent-app/src/app/page.js

```js
'use client'
import UniFieldFieldAgentApp from '../components/UniFieldFieldAgentApp'

export default function Home() {
  return (
    <UniFieldFieldAgentApp />
  )
}
```

# unifield-field-agent-app/src/app/layout.js

```js
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UniField Field Agent App",
  description: "Manage retailers and track sales performance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
```

# unifield-field-agent-app/src/app/globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --foreground-rgb: 0, 0, 0;
  --background-rgb: 243, 244, 246;
}

body {
  color: rgb(var(--foreground-rgb));
  background: rgb(var(--background-rgb));
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
```

# unifield-field-agent-app/src/app/favicon.ico

This is a binary file of the type: Binary

# unifield-field-agent-app/src/components/UniFieldFieldAgentApp.js

```js
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
```

# unifield-backend-interface/src/components/Dashboard.js

```js
import React from 'react';
import { Users, ShoppingBag, CreditCard, AlertCircle, TrendingUp, TrendingDown } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, trend, trendValue }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <div className="flex justify-between items-center mb-2">
      <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
      <Icon className="text-blue-500" size={24} />
    </div>
    <p className="text-2xl font-bold text-gray-800">{value}</p>
    <div className={`flex items-center mt-2 ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
      {trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
      <span className="ml-1 text-sm">{trendValue}</span>
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Retailers" 
          value="1,234" 
          icon={Users} 
          trend="up" 
          trendValue="5% from last month" 
        />
        <StatCard 
          title="Total Sales" 
          value="₦15,678,900" 
          icon={ShoppingBag} 
          trend="up" 
          trendValue="12% from last month" 
        />
        <StatCard 
          title="Credit Utilization" 
          value="65%" 
          icon={CreditCard} 
          trend="down" 
          trendValue="3% from last month" 
        />
        <StatCard 
          title="Active Alerts" 
          value="7" 
          icon={AlertCircle} 
          trend="up" 
          trendValue="2 more than yesterday" 
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activities</h2>
        <ul className="space-y-3">
          <li className="flex items-center text-sm text-gray-600">
            <Users size={16} className="mr-2 text-blue-500" />
            <span>New retailer registered: Electronics Plus</span>
          </li>
          <li className="flex items-center text-sm text-gray-600">
            <ShoppingBag size={16} className="mr-2 text-green-500" />
            <span>Large order placed: ₦500,000 by Supermart Store</span>
          </li>
          <li className="flex items-center text-sm text-gray-600">
            <AlertCircle size={16} className="mr-2 text-red-500" />
            <span>Low stock alert: Coca-Cola 500ml</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
```

# unifield-backend-interface/src/components/BackendInterfaceLayout.js

```js
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
```

# unifield-backend-interface/src/app/page.js

```js
'use client'
import BackendInterfaceLayout from '../components/BackendInterfaceLayout'
import Dashboard from '../components/Dashboard'

export default function Home() {
  return (
    <BackendInterfaceLayout>
      <Dashboard />
    </BackendInterfaceLayout>
  )
}
```

# unifield-backend-interface/src/app/layout.js

```js
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

```

# unifield-backend-interface/src/app/globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --foreground-rgb: 0, 0, 0;
  --background-start-rgb: 214, 219, 220;
  --background-end-rgb: 255, 255, 255;
}

@media (prefers-color-scheme: dark) {
  :root {
    --foreground-rgb: 255, 255, 255;
    --background-start-rgb: 0, 0, 0;
    --background-end-rgb: 0, 0, 0;
  }
}

body {
  color: rgb(var(--foreground-rgb));
  background: linear-gradient(
      to bottom,
      transparent,
      rgb(var(--background-end-rgb))
    )
    rgb(var(--background-start-rgb));
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}

```

# unifield-backend-interface/src/app/favicon.ico

This is a binary file of the type: Binary

