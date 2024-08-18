# start_unifield_apps.sh

```sh
#!/bin/bash

# Check if the script is executable, if not, make it executable
if [[ ! -x "$0" ]]; then
    chmod +x "$0"
    exec "$0" "$@"
fi

# Change to the project directory
cd /Users/abiodunogunlabi/Documents/Project_IT/UniField_App_1

# Function to find an available port
find_available_port() {
    local port=$1
    while nc -z localhost $port; do
        ((port++))
    done
    echo $port
}

# Function to start an application
start_app() {
    app_name=$1
    port=$2
    echo "Starting $app_name on port $port..."
    cd $app_name
    npm run dev -- -p $port &
    cd ..
    sleep 2  # Add a small delay to ensure the port is bound before checking the next one
}

# Find available ports
retailer_port=$(find_available_port 3000)
field_agent_port=$(find_available_port $((retailer_port + 1)))
backend_port=$(find_available_port $((field_agent_port + 1)))

# Start each application
start_app unifield-retailer-app $retailer_port
start_app unifield-field-agent-app $field_agent_port
start_app unifield-backend-interface $backend_port

echo "All applications have been started."
echo "Retailer app: http://localhost:$retailer_port"
echo "Field agent app: http://localhost:$field_agent_port"
echo "Backend interface: http://localhost:$backend_port"

# Wait for user input to keep the script running
read -p "Press Enter to stop all applications..."

# Kill all Node.js processes
pkill node

echo "All applications have been stopped."
```

# package.json

```json
{
  "dependencies": {
    "lucide-react": "^0.428.0",
    "next": "^14.2.5",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "recharts": "^2.12.7"
  }
}
```

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
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
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

# unifield-backend-interface/postcss.config.js

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

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
    "@radix-ui/react-dialog": "^1.1.1",
    "@radix-ui/react-dropdown-menu": "^2.1.1",
    "@radix-ui/react-label": "^2.1.0",
    "@radix-ui/react-select": "^2.1.1",
    "@radix-ui/react-slider": "^1.2.0",
    "@radix-ui/react-slot": "^1.1.0",
    "@radix-ui/react-switch": "^1.1.0",
    "@radix-ui/react-tabs": "^1.1.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "lucide-react": "^0.427.0",
    "next": "14.2.5",
    "react": "^18",
    "react-datepicker": "^7.3.0",
    "react-dom": "^18",
    "react-query": "^3.39.3",
    "recharts": "^2.12.7",
    "tailwind-merge": "^2.5.2",
    "tailwindcss-animate": "^1.0.7"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.20",
    "eslint": "^8",
    "eslint-config-next": "14.2.5",
    "postcss": "^8.4.41",
    "tailwindcss": "^3.4.10"
  }
}

```

# unifield-backend-interface/next.config.mjs

```mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

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

# unifield-backend-interface/components.json

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": false,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/app/globals.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
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

# unifield-backend-interface/src/styles/globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

# unifield-backend-interface/src/lib/utils.js

```js
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
```

# unifield-backend-interface/src/app/page.js

```js
'use client'
import BackendInterfaceLayout from '../components/BackendInterfaceLayout'
import DashboardAnalytics from '../components/DashboardAnalytics'
import RetailerManagementPage from '../components/RetailerManagementPage'

export default function Home() {
  return (
    <BackendInterfaceLayout>
      <DashboardAnalytics />
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

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 280 65% 60%;
    --chart-5: 340 75% 55%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

# unifield-backend-interface/src/app/favicon.ico

This is a binary file of the type: Binary

# unifield-backend-interface/src/components/Sidebar.js

```js
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Users, UserCheck, Package, ShoppingCart, BarChart2, DollarSign, Target, Settings, HelpCircle } from 'lucide-react';

const SidebarItem = ({ icon: Icon, label, href, active }) => (
  <li className={`flex items-center p-2 rounded-lg cursor-pointer ${
    active ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
  }`}>
    <Link href={href}>
      <div className="flex items-center">
        <Icon size={20} className="mr-3" />
        <span>{label}</span>
      </div>
    </Link>
  </li>
);

const Sidebar = () => {
  const pathname = usePathname();

  const sidebarItems = [
    { icon: Home, label: 'Dashboard', href: '/' },
    { icon: Users, label: 'Retailer Management', href: '/retailer-management' },
    { icon: UserCheck, label: 'Field Agents', href: '/field-agents' },
    { icon: Package, label: 'Inventory', href: '/inventory' },
    { icon: ShoppingCart, label: 'Orders', href: '/orders' },
    { icon: BarChart2, label: 'Analytics', href: '/analytics' },
    { icon: DollarSign, label: 'Finance', href: '/finance' },
    { icon: Target, label: 'Marketing', href: '/marketing' },
    { icon: Settings, label: 'Settings', href: '/settings' },
    { icon: HelpCircle, label: 'Help & Support', href: '/help-support' },
  ];

  return (
    <aside className="bg-white w-64 min-h-screen p-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-blue-700">UniField Admin</h1>
      </div>
      <nav>
        <ul className="space-y-2">
          {sidebarItems.map((item) => (
            <SidebarItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              href={item.href}
              active={pathname === item.href}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
```

# unifield-backend-interface/src/components/SettingsContent.js

```js
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Users, Settings, Link, AlertTriangle, Check, X } from 'lucide-react';
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

// Dummy data
const userRoles = [
  { id: 1, name: 'Admin', description: 'Full system access', permissions: ['all'] },
  { id: 2, name: 'Manager', description: 'Manage retailers and field agents', permissions: ['manage_retailers', 'manage_field_agents', 'view_reports'] },
  { id: 3, name: 'Field Agent', description: 'Manage assigned retailers', permissions: ['view_retailers', 'update_retailer_info'] },
  { id: 4, name: 'Finance', description: 'Manage financial operations', permissions: ['view_finances', 'manage_payments', 'generate_invoices'] },
];

const userActivityLogs = [
  { id: 1, user: 'john@example.com', action: 'Login', timestamp: '2023-08-18 14:30:00', ipAddress: '192.168.1.1' },
  { id: 2, name: 'jane@example.com', action: 'Updated retailer #1234', timestamp: '2023-08-18 13:45:00', ipAddress: '192.168.1.2' },
  { id: 3, name: 'admin@unifield.com', action: 'Changed system settings', timestamp: '2023-08-18 12:15:00', ipAddress: '192.168.1.3' },
  { id: 4, name: 'fieldagent1@unifield.com', action: 'Added new retailer', timestamp: '2023-08-18 11:30:00', ipAddress: '192.168.1.4' },
];

const integrations = [
  { id: 1, name: 'PayPal', type: 'payment', status: 'active', apiKey: 'pk_test_123456' },
  { id: 2, name: 'Stripe', type: 'payment', status: 'inactive', apiKey: '' },
  { id: 3, name: 'DHL', type: 'logistics', status: 'active', apiKey: 'dhl_api_789012' },
  { id: 4, name: 'FedEx', type: 'logistics', status: 'inactive', apiKey: '' },
];

const SettingsPage = () => {
  const [selectedTab, setSelectedTab] = useState("user-management");
  const [roles, setRoles] = useState(userRoles);
  const [activityLogs, setActivityLogs] = useState(userActivityLogs);
  const [systemSettings, setSystemSettings] = useState({
    maintenanceMode: false,
    sessionTimeout: 30,
    emailNotifications: true,
    smsNotifications: false,
  });
  const [integrationList, setIntegrationList] = useState(integrations);

  // User & Access Management Functions
  const addRole = (newRole) => {
    setRoles([...roles, { id: roles.length + 1, ...newRole }]);
  };

  const updateRole = (id, updatedRole) => {
    setRoles(roles.map(role => role.id === id ? { ...role, ...updatedRole } : role));
  };

  const deleteRole = (id) => {
    setRoles(roles.filter(role => role.id !== id));
  };

  // System Configuration Functions
  const updateSystemSetting = (setting, value) => {
    setSystemSettings({ ...systemSettings, [setting]: value });
  };

  // Integration Management Functions
  const updateIntegration = (id, updates) => {
    setIntegrationList(integrationList.map(integration => 
      integration.id === id ? { ...integration, ...updates } : integration
    ));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="user-management">
            <Users className="mr-2 h-4 w-4" />
            User Management
          </TabsTrigger>
          <TabsTrigger value="system-config">
            <Settings className="mr-2 h-4 w-4" />
            System Configuration
          </TabsTrigger>
          <TabsTrigger value="integrations">
            <Link className="mr-2 h-4 w-4" />
            Integrations
          </TabsTrigger>
        </TabsList>

        <TabsContent value="user-management">
          <Card>
            <CardHeader>
              <CardTitle>User & Access Management</CardTitle>
              <CardDescription>Manage user roles and permissions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Role-based Access Control</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Role</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Permissions</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {roles.map((role) => (
                        <TableRow key={role.id}>
                          <TableCell>{role.name}</TableCell>
                          <TableCell>{role.description}</TableCell>
                          <TableCell>{role.permissions.join(', ')}</TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm" className="mr-2" onClick={() => {/* Open edit dialog */}}>Edit</Button>
                            <Button variant="destructive" size="sm" onClick={() => deleteRole(role.id)}>Delete</Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  <Button className="mt-4" onClick={() => {/* Open add role dialog */}}>Add New Role</Button>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">User Activity Logs</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>User</TableHead>
                        <TableHead>Action</TableHead>
                        <TableHead>Timestamp</TableHead>
                        <TableHead>IP Address</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {activityLogs.map((log) => (
                        <TableRow key={log.id}>
                          <TableCell>{log.user}</TableCell>
                          <TableCell>{log.action}</TableCell>
                          <TableCell>{log.timestamp}</TableCell>
                          <TableCell>{log.ipAddress}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  <Button className="mt-4">View Full Logs</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system-config">
          <Card>
            <CardHeader>
              <CardTitle>System Configuration</CardTitle>
              <CardDescription>Manage global settings and notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Platform Settings</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
                      <Switch 
                        id="maintenance-mode" 
                        checked={systemSettings.maintenanceMode}
                        onCheckedChange={(checked) => updateSystemSetting('maintenanceMode', checked)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                      <Input 
                        id="session-timeout" 
                        type="number" 
                        value={systemSettings.sessionTimeout}
                        onChange={(e) => updateSystemSetting('sessionTimeout', parseInt(e.target.value))}
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Notification Preferences</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email-notifications">Email Notifications</Label>
                      <Switch 
                        id="email-notifications" 
                        checked={systemSettings.emailNotifications}
                        onCheckedChange={(checked) => updateSystemSetting('emailNotifications', checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="sms-notifications">SMS Notifications</Label>
                      <Switch 
                        id="sms-notifications" 
                        checked={systemSettings.smsNotifications}
                        onCheckedChange={(checked) => updateSystemSetting('smsNotifications', checked)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations">
          <Card>
            <CardHeader>
              <CardTitle>Integration Management</CardTitle>
              <CardDescription>Manage third-party service integrations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {['payment', 'logistics'].map((type) => (
                  <div key={type}>
                    <h3 className="text-lg font-semibold mb-2 capitalize">{type} Providers</h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Provider</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>API Key</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {integrationList.filter(i => i.type === type).map((integration) => (
                          <TableRow key={integration.id}>
                            <TableCell>{integration.name}</TableCell>
                            <TableCell>
                              <Badge variant={integration.status === 'active' ? 'success' : 'secondary'}>
                                {integration.status}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              {integration.apiKey ? `${integration.apiKey.slice(0, 8)}...` : 'Not set'}
                            </TableCell>
                            <TableCell>
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => {/* Open configuration dialog */}}
                              >
                                Configure
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsPage;
```

# unifield-backend-interface/src/components/RetailerManagementPage.test.tsx

```tsx
import { render, screen } from '@testing-library/react';
import RetailerManagementPage from './RetailerManagementPage';

test('renders retailer management page', () => {
  render(<RetailerManagementPage />);
  const titleElement = screen.getByText(/Retailer Management/i);
  expect(titleElement).toBeInTheDocument();
});
```

# unifield-backend-interface/src/components/RetailerManagementPage.js

```js
import React, { useState, useEffect } from 'react';
   import { Search, Filter, CreditCard, MessageSquare, Bell, ChevronDown, ChevronRight, X } from 'lucide-react';
   import { 
     Card, 
     CardContent, 
     CardHeader, 
     CardTitle 
   } from "@/components/ui/card";
   import {
     Table,
     TableBody,
     TableCell,
     TableHead,
     TableHeader,
     TableRow,
   } from "@/components/ui/table";
   import {
     DropdownMenu,
     DropdownMenuContent,
     DropdownMenuItem,
     DropdownMenuTrigger,
   } from "@/components/ui/dropdown-menu";
   import {
     Dialog,
     DialogContent,
     DialogDescription,
     DialogHeader,
     DialogTitle,
     DialogTrigger,
   } from "@/components/ui/dialog";
   import { Input } from "@/components/ui/input";
   import { Button } from "@/components/ui/button";
   import { Badge } from "@/components/ui/badge";
   import { Slider } from "@/components/ui/slider";

   // Mock data for retailers
   const mockRetailers = [
     { id: 1, name: "ABC Store", location: "Lagos", salesVolume: 50000, creditStatus: "Good", creditScore: 750, creditLimit: 100000, creditUtilization: 60000 },
     { id: 2, name: "XYZ Mart", location: "Abuja", salesVolume: 75000, creditStatus: "Excellent", creditScore: 800, creditLimit: 150000, creditUtilization: 100000 },
     { id: 3, name: "123 Shop", location: "Port Harcourt", salesVolume: 30000, creditStatus: "Fair", creditScore: 600, creditLimit: 50000, creditUtilization: 40000 },
   ];

   const RetailerManagementPage = () => {
     const [retailers, setRetailers] = useState(mockRetailers);
     const [searchTerm, setSearchTerm] = useState('');
     const [filters, setFilters] = useState({ location: '', creditStatus: '' });
     const [selectedRetailer, setSelectedRetailer] = useState(null);
     const [isProfileOpen, setIsProfileOpen] = useState(false);
     const [isCreditDialogOpen, setIsCreditDialogOpen] = useState(false);
     const [newCreditLimit, setNewCreditLimit] = useState(0);

     useEffect(() => {
       // In a real application, you would fetch retailers data from an API here
       // For now, we're using the mock data
       setRetailers(mockRetailers);
     }, []);

     const handleSearch = (event) => {
       setSearchTerm(event.target.value);
     };

     const handleFilterChange = (filterType, value) => {
       setFilters(prevFilters => ({ ...prevFilters, [filterType]: value }));
     };

     const filteredRetailers = retailers.filter(retailer => 
       retailer.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
       (filters.location === '' || retailer.location === filters.location) &&
       (filters.creditStatus === '' || retailer.creditStatus === filters.creditStatus)
     );

     const openRetailerProfile = (retailer) => {
       setSelectedRetailer(retailer);
       setIsProfileOpen(true);
     };

     const closeRetailerProfile = () => {
       setIsProfileOpen(false);
       setSelectedRetailer(null);
     };

     const openCreditDialog = (retailer) => {
       setSelectedRetailer(retailer);
       setNewCreditLimit(retailer.creditLimit);
       setIsCreditDialogOpen(true);
     };

     const closeCreditDialog = () => {
       setIsCreditDialogOpen(false);
       setSelectedRetailer(null);
       setNewCreditLimit(0);
     };

     const updateCreditLimit = () => {
       // In a real application, you would make an API call to update the credit limit
       const updatedRetailers = retailers.map(retailer => 
         retailer.id === selectedRetailer.id ? { ...retailer, creditLimit: newCreditLimit } : retailer
       );
       setRetailers(updatedRetailers);
       closeCreditDialog();
     };

     return (
       <div className="p-6 max-w-7xl mx-auto">
         <h1 className="text-3xl font-bold mb-6">Retailer Management</h1>
         
         {/* Search and Filters */}
         <div className="flex flex-wrap gap-4 mb-6">
           <div className="flex-grow">
             <Input
               type="text"
               placeholder="Search retailers..."
               value={searchTerm}
               onChange={handleSearch}
               className="w-full"
             />
           </div>
           <DropdownMenu>
             <DropdownMenuTrigger asChild>
               <Button variant="outline">
                 <Filter className="h-4 w-4 mr-2" />
                 Filters
                 <ChevronDown className="h-4 w-4 ml-2" />
               </Button>
             </DropdownMenuTrigger>
             <DropdownMenuContent>
               <DropdownMenuItem onSelect={() => handleFilterChange('location', 'Lagos')}>
                 Location: Lagos
               </DropdownMenuItem>
               <DropdownMenuItem onSelect={() => handleFilterChange('location', 'Abuja')}>
                 Location: Abuja
               </DropdownMenuItem>
               <DropdownMenuItem onSelect={() => handleFilterChange('creditStatus', 'Good')}>
                 Credit Status: Good
               </DropdownMenuItem>
               <DropdownMenuItem onSelect={() => handleFilterChange('creditStatus', 'Excellent')}>
                 Credit Status: Excellent
               </DropdownMenuItem>
             </DropdownMenuContent>
           </DropdownMenu>
         </div>

         {/* Retailers Table */}
         <Card>
           <CardHeader>
             <CardTitle>Retailers</CardTitle>
           </CardHeader>
           <CardContent>
             <Table>
               <TableHeader>
                 <TableRow>
                   <TableHead>Name</TableHead>
                   <TableHead>Location</TableHead>
                   <TableHead>Sales Volume</TableHead>
                   <TableHead>Credit Status</TableHead>
                   <TableHead>Actions</TableHead>
                 </TableRow>
               </TableHeader>
               <TableBody>
                 {filteredRetailers.map(retailer => (
                   <TableRow key={retailer.id}>
                     <TableCell>{retailer.name}</TableCell>
                     <TableCell>{retailer.location}</TableCell>
                     <TableCell>₦{retailer.salesVolume.toLocaleString()}</TableCell>
                     <TableCell>
                       <Badge variant={retailer.creditStatus === 'Excellent' ? 'success' : retailer.creditStatus === 'Good' ? 'warning' : 'destructive'}>
                         {retailer.creditStatus}
                       </Badge>
                     </TableCell>
                     <TableCell>
                       <Button variant="ghost" size="sm" onClick={() => openRetailerProfile(retailer)}>
                         View Profile
                       </Button>
                       <Button variant="ghost" size="sm" onClick={() => openCreditDialog(retailer)}>
                         <CreditCard className="h-4 w-4 mr-2" />
                         Manage Credit
                       </Button>
                     </TableCell>
                   </TableRow>
                 ))}
               </TableBody>
             </Table>
           </CardContent>
         </Card>

         {/* Retailer Profile Dialog */}
         <Dialog open={isProfileOpen} onOpenChange={setIsProfileOpen}>
           <DialogContent>
             <DialogHeader>
               <DialogTitle>{selectedRetailer?.name} Profile</DialogTitle>
             </DialogHeader>
             {selectedRetailer && (
               <div className="mt-4">
                 <p><strong>Location:</strong> {selectedRetailer.location}</p>
                 <p><strong>Sales Volume:</strong> ₦{selectedRetailer.salesVolume.toLocaleString()}</p>
                 <p><strong>Credit Status:</strong> {selectedRetailer.creditStatus}</p>
                 <p><strong>Credit Score:</strong> {selectedRetailer.creditScore}</p>
                 <p><strong>Credit Limit:</strong> ₦{selectedRetailer.creditLimit.toLocaleString()}</p>
                 <p><strong>Credit Utilization:</strong> ₦{selectedRetailer.creditUtilization.toLocaleString()}</p>
                 
                 <h3 className="font-semibold mt-4 mb-2">Performance Dashboard</h3>
                 {/* Add performance charts or graphs here */}
                 <div className="bg-gray-100 p-4 rounded">
                   <p>Performance visualization placeholder</p>
                 </div>

                 <h3 className="font-semibold mt-4 mb-2">Recent Orders</h3>
                 {/* Add recent orders list here */}
                 <ul className="list-disc pl-5">
                   <li>Order #12345 - ₦5,000 - 2023-08-15</li>
                   <li>Order #12346 - ₦7,500 - 2023-08-10</li>
                   <li>Order #12347 - ₦3,200 - 2023-08-05</li>
                 </ul>

                 <h3 className="font-semibold mt-4 mb-2">Support Tickets</h3>
                 {/* Add support tickets list here */}
                 <ul className="list-disc pl-5">
                   <li>Ticket #001 - Payment Issue - Open</li>
                   <li>Ticket #002 - Product Inquiry - Closed</li>
                 </ul>
               </div>
             )}
           </DialogContent>
         </Dialog>

         {/* Credit Management Dialog */}
         <Dialog open={isCreditDialogOpen} onOpenChange={setIsCreditDialogOpen}>
           <DialogContent>
             <DialogHeader>
               <DialogTitle>Manage Credit for {selectedRetailer?.name}</DialogTitle>
             </DialogHeader>
             {selectedRetailer && (
               <div className="mt-4">
                 <p><strong>Current Credit Limit:</strong> ₦{selectedRetailer.creditLimit.toLocaleString()}</p>
                 <p><strong>Credit Utilization:</strong> ₦{selectedRetailer.creditUtilization.toLocaleString()}</p>
                 <p><strong>Credit Score:</strong> {selectedRetailer.creditScore}</p>
                 
                 <h3 className="font-semibold mt-4 mb-2">Adjust Credit Limit</h3>
                 <Slider
                   min={0}
                   max={500000}
                   step={10000}
                   value={[newCreditLimit]}
                   onValueChange={(value) => setNewCreditLimit(value[0])}
                 />
                 <p className="mt-2">New Credit Limit: ₦{newCreditLimit.toLocaleString()}</p>
                 
                 <Button className="mt-4" onClick={updateCreditLimit}>Update Credit Limit</Button>
               </div>
             )}
           </DialogContent>
         </Dialog>
       </div>
     );
   };

   export default RetailerManagementPage;
```

# unifield-backend-interface/src/components/RetailerManagement.js

```js
import React, { useState, useEffect } from 'react';
import { Search, Filter, User, DollarSign, CreditCard, MessageSquare, Bell, ChevronDown, ChevronRight, Edit, Trash2 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Mock data for retailers (replace with actual data fetching in a real application)
const mockRetailers = [
  { id: 1, name: 'Supermart Store', location: 'Lagos', creditScore: 750 },
  { id: 2, name: 'Electronics Plus', location: 'Abuja', creditScore: 680 },
  { id: 3, name: 'Fashion World', location: 'Port Harcourt', creditScore: 820 },
  // Add more mock retailers as needed
];

const RetailerList = ({ retailers, onSelectRetailer }) => {
  // Implementation of RetailerList component
  return (
    <div>
      {/* Retailer list UI */}
    </div>
  );
};

const RetailerProfile = ({ retailer }) => {
  // Implementation of RetailerProfile component
  return (
    <div>
      {/* Retailer profile UI */}
    </div>
  );
};

const CreditManagement = ({ retailer }) => {
  // Implementation of CreditManagement component
  return (
    <div>
      {/* Credit management UI */}
    </div>
  );
};

const RetailerSupport = () => {
  // Implementation of RetailerSupport component
  return (
    <div>
      {/* Retailer support UI */}
    </div>
  );
};

const RetailerManagement = () => {
  const [retailers, setRetailers] = useState(mockRetailers);
  const [selectedRetailer, setSelectedRetailer] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // In a real application, you would fetch retailers from an API here
    // For now, we're using the mock data
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filteredRetailers = mockRetailers.filter(retailer =>
      retailer.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
      retailer.location.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setRetailers(filteredRetailers);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Retailer Management</h1>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search retailers..."
              className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={handleSearch}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
            <Filter size={20} className="mr-2" />
            Filter
          </button>
        </div>
      </div>

      <RetailerList retailers={retailers} onSelectRetailer={setSelectedRetailer} />

      {selectedRetailer && (
        <>
          <RetailerProfile retailer={selectedRetailer} />
          <CreditManagement retailer={selectedRetailer} />
        </>
      )}

      <RetailerSupport />
    </div>
  );
};

export default RetailerManagement;

```

# unifield-backend-interface/src/components/OrderProcessingPage.js

```js
import React, { useState, useEffect } from 'react';
import { 
  ShoppingCart, Truck, RefreshCcw, Search, Filter, 
  ChevronDown, Edit, Trash2, Plus, Download, Printer,
  Package, CheckCircle, XCircle, AlertTriangle
} from 'lucide-react';
import { 
  Card, CardContent, CardHeader, CardTitle 
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select } from "@/components/ui/select";

// Mock data for orders
const mockOrders = [
  { id: 1, customerName: "John Doe", orderDate: "2023-08-15", total: 15000, status: "Processing", items: 5 },
  { id: 2, customerName: "Jane Smith", orderDate: "2023-08-14", total: 25000, status: "Shipped", items: 8 },
  { id: 3, customerName: "Bob Johnson", orderDate: "2023-08-13", total: 10000, status: "Delivered", items: 3 },
  { id: 4, customerName: "Alice Brown", orderDate: "2023-08-12", total: 30000, status: "Returned", items: 10 },
];

// Mock data for returns
const mockReturns = [
  { id: 1, orderNumber: "ORD-001", customerName: "John Doe", returnDate: "2023-08-20", reason: "Defective product", status: "Pending" },
  { id: 2, orderNumber: "ORD-002", customerName: "Jane Smith", returnDate: "2023-08-19", reason: "Wrong item received", status: "Approved" },
  { id: 3, orderNumber: "ORD-003", customerName: "Bob Johnson", returnDate: "2023-08-18", reason: "Changed mind", status: "Rejected" },
];

const OrderProcessingPage = () => {
  const [activeTab, setActiveTab] = useState('orders');
  const [orders, setOrders] = useState(mockOrders);
  const [returns, setReturns] = useState(mockReturns);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isOrderDialogOpen, setIsOrderDialogOpen] = useState(false);
  const [selectedReturn, setSelectedReturn] = useState(null);
  const [isReturnDialogOpen, setIsReturnDialogOpen] = useState(false);

  useEffect(() => {
    // In a real application, you would fetch orders and returns data from an API here
    // For now, we're using the mock data
    setOrders(mockOrders);
    setReturns(mockReturns);
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredOrders = orders.filter(order => 
    order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredReturns = returns.filter(returnItem => 
    returnItem.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    returnItem.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openOrderDialog = (order = null) => {
    setSelectedOrder(order);
    setIsOrderDialogOpen(true);
  };

  const closeOrderDialog = () => {
    setIsOrderDialogOpen(false);
    setSelectedOrder(null);
  };

  const openReturnDialog = (returnItem = null) => {
    setSelectedReturn(returnItem);
    setIsReturnDialogOpen(true);
  };

  const closeReturnDialog = () => {
    setIsReturnDialogOpen(false);
    setSelectedReturn(null);
  };

  const handleOrderUpdate = (updatedOrder) => {
    // In a real application, you would make an API call to update the order
    const updatedOrders = orders.map(order => 
      order.id === updatedOrder.id ? updatedOrder : order
    );
    setOrders(updatedOrders);
    closeOrderDialog();
  };

  const handleReturnUpdate = (updatedReturn) => {
    // In a real application, you would make an API call to update the return
    const updatedReturns = returns.map(returnItem => 
      returnItem.id === updatedReturn.id ? updatedReturn : returnItem
    );
    setReturns(updatedReturns);
    closeReturnDialog();
  };

  const renderOrderManagement = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Order Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-2">
              <Input
                type="text"
                placeholder="Search orders..."
                value={searchTerm}
                onChange={handleSearch}
                className="max-w-sm"
              />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    <Filter className="mr-2 h-4 w-4" /> Filter
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>All Orders</DropdownMenuItem>
                  <DropdownMenuItem>Processing</DropdownMenuItem>
                  <DropdownMenuItem>Shipped</DropdownMenuItem>
                  <DropdownMenuItem>Delivered</DropdownMenuItem>
                  <DropdownMenuItem>Returned</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" /> Export
              </Button>
              <Button onClick={() => openOrderDialog()}>
                <Plus className="mr-2 h-4 w-4" /> New Order
              </Button>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.customerName}</TableCell>
                  <TableCell>{order.orderDate}</TableCell>
                  <TableCell>₦{order.total.toLocaleString()}</TableCell>
                  <TableCell>{order.items}</TableCell>
                  <TableCell>
                    <Badge variant={
                      order.status === 'Processing' ? 'default' :
                      order.status === 'Shipped' ? 'secondary' :
                      order.status === 'Delivered' ? 'success' :
                      'destructive'
                    }>
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" onClick={() => openOrderDialog(order)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Printer className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={isOrderDialogOpen} onOpenChange={setIsOrderDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedOrder ? 'Edit Order' : 'New Order'}</DialogTitle>
          </DialogHeader>
          {/* Add form fields for order details here */}
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="customerName" className="text-right">
                Customer Name
              </label>
              <Input id="customerName" value={selectedOrder?.customerName || ''} className="col-span-3" />
            </div>
            {/* Add more form fields for order date, total, items, status */}
          </div>
          <Button onClick={closeOrderDialog}>Save Changes</Button>
        </DialogContent>
      </Dialog>
    </div>
  );

  const renderLogisticsDelivery = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Logistics & Delivery</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card>
              <CardHeader>
                <CardTitle>Pending Shipments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">
                  {orders.filter(order => order.status === 'Processing').length}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>In Transit</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">
                  {orders.filter(order => order.status === 'Shipped').length}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Delivered Today</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">
                  {orders.filter(order => order.status === 'Delivered' && order.orderDate === new Date().toISOString().split('T')[0]).length}
                </div>
              </CardContent>
            </Card>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Estimated Delivery</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.filter(order => order.status !== 'Delivered').map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.customerName}</TableCell>
                  <TableCell>
                    <Badge variant={order.status === 'Processing' ? 'default' : 'secondary'}>
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{new Date(order.orderDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      <Truck className="mr-2 h-4 w-4" /> Track
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Printer className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );

  const renderReturnsRefunds = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Returns & Refunds</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <Input
              type="text"
              placeholder="Search returns..."
              value={searchTerm}
              onChange={handleSearch}
              className="max-w-sm"
            />
            <Button onClick={() => openReturnDialog()}>
              <Plus className="mr-2 h-4 w-4" /> Process New Return
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Return ID</TableHead>
                <TableHead>Order Number</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Return Date</TableHead>
                <TableHead>Reason</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredReturns.map((returnItem) => (
                <TableRow key={returnItem.id}>
                  <TableCell>{returnItem.id}</TableCell>
                  <TableCell>{returnItem.orderNumber}</TableCell>
                  <TableCell>{returnItem.customerName}</TableCell>
                  <TableCell>{returnItem.returnDate}</TableCell>
                  <TableCell>{returnItem.reason}</TableCell>
                  <TableCell>
                    <Badge variant={
                      returnItem.status === 'Pending' ? 'default' :
                      returnItem.status === 'Approved' ? 'success' :
                      'destructive'
                    }>
                      {returnItem.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" onClick={() => openReturnDialog(returnItem)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={isReturnDialogOpen} onOpenChange={setIsReturnDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedReturn ? 'Edit Return' : 'Process New Return'}</DialogTitle>
          </DialogHeader>
          {/* Add form fields for return details here */}
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="orderNumber" className="text-right">
                Order Number
              </label>
              <Input id="orderNumber" value={selectedReturn?.orderNumber || ''} className
              ="col-span-3" />
              </div>
              {/* Add more form fields for customer name, return date, reason, status */}
            </div>
            <Button onClick={closeReturnDialog}>Save Changes</Button>
          </DialogContent>
        </Dialog>
      </div>
    );
  
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">Order Processing & Fulfillment</h1>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Actions <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Bulk Process Orders</DropdownMenuItem>
              <DropdownMenuItem>Generate Shipping Labels</DropdownMenuItem>
              <DropdownMenuItem>Export Order Report</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
  
        <div className="flex space-x-4 mb-6">
          <Button
            variant={activeTab === 'orders' ? 'default' : 'outline'}
            onClick={() => setActiveTab('orders')}
          >
            <ShoppingCart className="mr-2 h-4 w-4" /> Orders
          </Button>
          <Button
            variant={activeTab === 'logistics' ? 'default' : 'outline'}
            onClick={() => setActiveTab('logistics')}
          >
            <Truck className="mr-2 h-4 w-4" /> Logistics & Delivery
          </Button>
          <Button
            variant={activeTab === 'returns' ? 'default' : 'outline'}
            onClick={() => setActiveTab('returns')}
          >
            <RefreshCcw className="mr-2 h-4 w-4" /> Returns & Refunds
          </Button>
        </div>
  
        {activeTab === 'orders' && renderOrderManagement()}
        {activeTab === 'logistics' && renderLogisticsDelivery()}
        {activeTab === 'returns' && renderReturnsRefunds()}
      </div>
    );
  };
  
  export default OrderProcessingPage;
```

# unifield-backend-interface/src/components/MarketingPromotionsPage.js

```js
import React, { useState, useEffect } from 'react';
import { 
  Megaphone, Target, TrendingUp, Gift, Clock, Award,
  Plus, Edit, Trash2, ChevronDown, Download, Calendar
} from 'lucide-react';
import { 
  Card, CardContent, CardHeader, CardTitle 
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
// import { DatePicker } from "@/components/ui/date-picker"; // Remove or comment this line
import { Select } from "@/components/ui/select";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Mock data for campaigns
const mockCampaigns = [
  { id: 1, name: "Summer Sale", target: "All Retailers", startDate: "2023-08-01", endDate: "2023-08-31", status: "Active", performance: 85 },
  { id: 2, name: "New User Promo", target: "New Retailers", startDate: "2023-09-01", endDate: "2023-09-30", status: "Scheduled", performance: 0 },
  { id: 3, name: "Holiday Special", target: "Top Performers", startDate: "2023-12-01", endDate: "2023-12-31", status: "Draft", performance: 0 },
];

// Mock data for promotions
const mockPromotions = [
  { id: 1, name: "10% Off Electronics", type: "Discount", value: "10%", startDate: "2023-08-15", endDate: "2023-08-20", status: "Active" },
  { id: 2, name: "Buy 2 Get 1 Free", type: "Bundle", value: "3 for 2", startDate: "2023-09-01", endDate: "2023-09-07", status: "Scheduled" },
  { id: 3, name: "Flash Sale: 50% Off", type: "Flash Sale", value: "50%", startDate: "2023-08-25", endDate: "2023-08-25", status: "Scheduled" },
];

// Mock data for loyalty program
const mockLoyaltyProgram = {
  name: "UniField Rewards",
  pointsPerPurchase: 1,
  pointValue: 0.01,
  tiers: [
    { name: "Bronze", threshold: 0, perks: ["5% discount on orders"] },
    { name: "Silver", threshold: 1000, perks: ["7% discount on orders", "Free shipping"] },
    { name: "Gold", threshold: 5000, perks: ["10% discount on orders", "Free shipping", "Priority support"] },
  ]
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const MarketingPromotionsPage = () => {
  const [activeTab, setActiveTab] = useState('campaigns');
  const [campaigns, setCampaigns] = useState(mockCampaigns);
  const [promotions, setPromotions] = useState(mockPromotions);
  const [loyaltyProgram, setLoyaltyProgram] = useState(mockLoyaltyProgram);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [isCampaignDialogOpen, setIsCampaignDialogOpen] = useState(false);
  const [selectedPromotion, setSelectedPromotion] = useState(null);
  const [isPromotionDialogOpen, setIsPromotionDialogOpen] = useState(false);

  useEffect(() => {
    // In a real application, you would fetch marketing data from an API here
    // For now, we're using the mock data
    setCampaigns(mockCampaigns);
    setPromotions(mockPromotions);
    setLoyaltyProgram(mockLoyaltyProgram);
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCampaigns = campaigns.filter(campaign => 
    campaign.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    campaign.target.toLowerCase().includes(searchTerm.toLowerCase()) ||
    campaign.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredPromotions = promotions.filter(promotion => 
    promotion.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    promotion.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    promotion.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openCampaignDialog = (campaign = null) => {
    setSelectedCampaign(campaign);
    setIsCampaignDialogOpen(true);
  };

  const closeCampaignDialog = () => {
    setIsCampaignDialogOpen(false);
    setSelectedCampaign(null);
  };

  const openPromotionDialog = (promotion = null) => {
    setSelectedPromotion(promotion);
    setIsPromotionDialogOpen(true);
  };

  const closePromotionDialog = () => {
    setIsPromotionDialogOpen(false);
    setSelectedPromotion(null);
  };

  const handleCampaignUpdate = (updatedCampaign) => {
    // In a real application, you would make an API call to update the campaign
    const updatedCampaigns = campaigns.map(campaign => 
      campaign.id === updatedCampaign.id ? updatedCampaign : campaign
    );
    setCampaigns(updatedCampaigns);
    closeCampaignDialog();
  };

  const handlePromotionUpdate = (updatedPromotion) => {
    // In a real application, you would make an API call to update the promotion
    const updatedPromotions = promotions.map(promotion => 
      promotion.id === updatedPromotion.id ? updatedPromotion : promotion
    );
    setPromotions(updatedPromotions);
    closePromotionDialog();
  };

  const renderCampaignManagement = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Campaign Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <Input
              type="text"
              placeholder="Search campaigns..."
              value={searchTerm}
              onChange={handleSearch}
              className="max-w-sm"
            />
            <Button onClick={() => openCampaignDialog()}>
              <Plus className="mr-2 h-4 w-4" /> Create New Campaign
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Campaign Name</TableHead>
                <TableHead>Target</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>End Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Performance</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCampaigns.map((campaign) => (
                <TableRow key={campaign.id}>
                  <TableCell>{campaign.name}</TableCell>
                  <TableCell>{campaign.target}</TableCell>
                  <TableCell>{campaign.startDate}</TableCell>
                  <TableCell>{campaign.endDate}</TableCell>
                  <TableCell>
                    <Badge variant={
                      campaign.status === 'Active' ? 'success' :
                      campaign.status === 'Scheduled' ? 'warning' :
                      'secondary'
                    }>
                      {campaign.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {campaign.status === 'Active' ? `${campaign.performance}%` : 'N/A'}
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" onClick={() => openCampaignDialog(campaign)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={isCampaignDialogOpen} onOpenChange={setIsCampaignDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedCampaign ? 'Edit Campaign' : 'Create New Campaign'}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="campaignName" className="text-right">
                Campaign Name
              </label>
              <Input id="campaignName" value={selectedCampaign?.name || ''} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="campaignTarget" className="text-right">
                Target
              </label>
              <Select id="campaignTarget" value={selectedCampaign?.target || ''} className="col-span-3">
                <option value="All Retailers">All Retailers</option>
                <option value="New Retailers">New Retailers</option>
                <option value="Top Performers">Top Performers</option>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="campaignStartDate" className="text-right">
                Start Date
              </label>
              <Input type="date" id="campaignStartDate" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="campaignEndDate" className="text-right">
                End Date
              </label>
              <Input type="date" id="campaignEndDate" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="campaignStatus" className="text-right">
                Status
              </label>
              <Select id="campaignStatus" value={selectedCampaign?.status || ''} className="col-span-3">
                <option value="Active">Active</option>
                <option value="Scheduled">Scheduled</option>
                <option value="Draft">Draft</option>
              </Select>
            </div>
          </div>
          <Button onClick={closeCampaignDialog}>
            {selectedCampaign ? 'Update Campaign' : 'Create Campaign'}
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );

  const renderPromotionSetup = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Promotion Setup</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <Input
              type="text"
              placeholder="Search promotions..."
              value={searchTerm}
              onChange={handleSearch}
              className="max-w-sm"
            />
            <Button onClick={() => openPromotionDialog()}>
              <Plus className="mr-2 h-4 w-4" /> Create New Promotion
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Promotion Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>End Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPromotions.map((promotion) => (
                <TableRow key={promotion.id}>
                  <TableCell>{promotion.name}</TableCell>
                  <TableCell>{promotion.type}</TableCell>
                  <TableCell>{promotion.value}</TableCell>
                  <TableCell>{promotion.startDate}</TableCell>
                  <TableCell>{promotion.endDate}</TableCell>
                  <TableCell>
                    <Badge variant={
                      promotion.status === 'Active' ? 'success' :
                      promotion.status === 'Scheduled' ? 'warning' :
                      'secondary'
                    }>
                      {promotion.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" onClick={() => openPromotionDialog(promotion)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={isPromotionDialogOpen} onOpenChange={setIsPromotionDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedPromotion ? 'Edit Promotion' : 'Create New Promotion'}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="promotionName" className="text-right">
                Promotion Name
              </label>
              <Input id="promotionName" value={selectedPromotion?.name || ''} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="promotionType" className="text-right">
                Type
              </label>
              <Select id="promotionType" value={selectedPromotion?.type || ''} className="col-span-3">
                <option value="Discount">Discount</option>
                <option value="Bundle">Bundle</option>
                <option value="Flash Sale">Flash Sale</option>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap
            -4">
              <label htmlFor="promotionValue" className="text-right">
                Value
              </label>
              <Input id="promotionValue" value={selectedPromotion?.value || ''} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="promotionStartDate" className="text-right">
                Start Date
              </label>
              <DatePicker id="promotionStartDate" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="promotionEndDate" className="text-right">
                End Date
              </label>
              <DatePicker id="promotionEndDate" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="promotionStatus" className="text-right">
                Status
              </label>
              <Select id="promotionStatus" value={selectedPromotion?.status || ''} className="col-span-3">
                <option value="Active">Active</option>
                <option value="Scheduled">Scheduled</option>
                <option value="Draft">Draft</option>
              </Select>
            </div>
          </div>
          <Button onClick={closePromotionDialog}>
            {selectedPromotion ? 'Update Promotion' : 'Create Promotion'}
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );

  const renderLoyaltyProgram = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Loyalty Program: {loyaltyProgram.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold">Points per Purchase:</p>
              <p>{loyaltyProgram.pointsPerPurchase} point(s) per ₦1 spent</p>
            </div>
            <div>
              <p className="font-semibold">Point Value:</p>
              <p>₦{loyaltyProgram.pointValue.toFixed(2)} per point</p>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Loyalty Tiers</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tier Name</TableHead>
                  <TableHead>Points Threshold</TableHead>
                  <TableHead>Perks</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loyaltyProgram.tiers.map((tier, index) => (
                  <TableRow key={index}>
                    <TableCell>{tier.name}</TableCell>
                    <TableCell>{tier.threshold} points</TableCell>
                    <TableCell>
                      <ul className="list-disc list-inside">
                        {tier.perks.map((perk, perkIndex) => (
                          <li key={perkIndex}>{perk}</li>
                        ))}
                      </ul>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Marketing & Promotions</h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Actions <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Generate Campaign Report</DropdownMenuItem>
            <DropdownMenuItem>Export Promotion Data</DropdownMenuItem>
            <DropdownMenuItem>Manage Loyalty Program Settings</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex space-x-4 mb-6">
        <Button
          variant={activeTab === 'campaigns' ? 'default' : 'outline'}
          onClick={() => setActiveTab('campaigns')}
        >
          <Megaphone className="mr-2 h-4 w-4" /> Campaigns
        </Button>
        <Button
          variant={activeTab === 'promotions' ? 'default' : 'outline'}
          onClick={() => setActiveTab('promotions')}
        >
          <Gift className="mr-2 h-4 w-4" /> Promotions
        </Button>
        <Button
          variant={activeTab === 'loyalty' ? 'default' : 'outline'}
          onClick={() => setActiveTab('loyalty')}
        >
          <Award className="mr-2 h-4 w-4" /> Loyalty Program
        </Button>
      </div>

      {activeTab === 'campaigns' && renderCampaignManagement()}
      {activeTab === 'promotions' && renderPromotionSetup()}
      {activeTab === 'loyalty' && renderLoyaltyProgram()}
    </div>
  );
};

export default MarketingPromotionsPage;
```

# unifield-backend-interface/src/components/InventoryManagementPage.js

```js
import React, { useState, useEffect } from 'react';
import { 
  Package, Edit, Trash2, Plus, Search, Filter, 
  TrendingUp, TrendingDown, AlertTriangle, Truck, 
  BarChart2, DollarSign, RefreshCw
} from 'lucide-react';
import { 
  Card, CardContent, CardHeader, CardTitle 
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Mock data for products
const mockProducts = [
  { id: 1, name: "Coca-Cola 500ml", sku: "CC500", category: "Beverages", price: 150, stock: 500, supplier: "Coca-Cola Company" },
  { id: 2, name: "Indomie Noodles", sku: "IN100", category: "Food", price: 120, stock: 1000, supplier: "Dufil Prima Foods" },
  { id: 3, name: "Peak Milk 170g", sku: "PM170", category: "Dairy", price: 200, stock: 300, supplier: "FrieslandCampina" },
  { id: 4, name: "Samsung A12", sku: "SA12", category: "Electronics", price: 65000, stock: 50, supplier: "Samsung Electronics" },
];

// Mock data for suppliers
const mockSuppliers = [
  { id: 1, name: "Coca-Cola Company", reliability: 95, avgDeliveryTime: 2 },
  { id: 2, name: "Dufil Prima Foods", reliability: 90, avgDeliveryTime: 3 },
  { id: 3, name: "FrieslandCampina", reliability: 92, avgDeliveryTime: 2 },
  { id: 4, name: "Samsung Electronics", reliability: 88, avgDeliveryTime: 5 },
];

const InventoryManagementPage = () => {
  const [activeTab, setActiveTab] = useState('products');
  const [products, setProducts] = useState(mockProducts);
  const [suppliers, setSuppliers] = useState(mockSuppliers);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isProductDialogOpen, setIsProductDialogOpen] = useState(false);
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const [isSupplierDialogOpen, setIsSupplierDialogOpen] = useState(false);

  useEffect(() => {
    // In a real application, you would fetch products and suppliers data from an API here
    // For now, we're using the mock data
    setProducts(mockProducts);
    setSuppliers(mockSuppliers);
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredSuppliers = suppliers.filter(supplier => 
    supplier.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openProductDialog = (product = null) => {
    setSelectedProduct(product);
    setIsProductDialogOpen(true);
  };

  const closeProductDialog = () => {
    setIsProductDialogOpen(false);
    setSelectedProduct(null);
  };

  const openSupplierDialog = (supplier = null) => {
    setSelectedSupplier(supplier);
    setIsSupplierDialogOpen(true);
  };

  const closeSupplierDialog = () => {
    setIsSupplierDialogOpen(false);
    setSelectedSupplier(null);
  };

  const handleProductUpdate = (updatedProduct) => {
    // In a real application, you would make an API call to update the product
    const updatedProducts = products.map(product => 
      product.id === updatedProduct.id ? updatedProduct : product
    );
    setProducts(updatedProducts);
    closeProductDialog();
  };

  const handleSupplierUpdate = (updatedSupplier) => {
    // In a real application, you would make an API call to update the supplier
    const updatedSuppliers = suppliers.map(supplier => 
      supplier.id === updatedSupplier.id ? updatedSupplier : supplier
    );
    setSuppliers(updatedSuppliers);
    closeSupplierDialog();
  };

  const renderProductCatalog = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Product Catalog</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <Input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearch}
              className="max-w-sm"
            />
            <Button onClick={() => openProductDialog()}>
              <Plus className="mr-2 h-4 w-4" /> Add New Product
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>SKU</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Supplier</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.sku}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>₦{product.price}</TableCell>
                  <TableCell>
                    <Badge variant={product.stock > 100 ? "success" : product.stock > 50 ? "warning" : "destructive"}>
                      {product.stock}
                    </Badge>
                  </TableCell>
                  <TableCell>{product.supplier}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" onClick={() => openProductDialog(product)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={isProductDialogOpen} onOpenChange={setIsProductDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedProduct ? 'Edit Product' : 'Add New Product'}</DialogTitle>
          </DialogHeader>
          {/* Add form fields for product details here */}
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="name" className="text-right">
                Name
              </label>
              <Input id="name" value={selectedProduct?.name || ''} className="col-span-3" />
            </div>
            {/* Add more form fields for SKU, category, price, stock, supplier */}
          </div>
          <Button onClick={closeProductDialog}>Save Changes</Button>
        </DialogContent>
      </Dialog>
    </div>
  );

  const renderStockManagement = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Stock Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              ₦{products.reduce((total, product) => total + (product.price * product.stock), 0).toLocaleString()}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Low Stock Items</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {products.filter(product => product.stock <= 50).length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Out of Stock Items</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {products.filter(product => product.stock === 0).length}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Stock Alerts</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Current Stock</TableHead>
                <TableHead>Reorder Point</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.filter(product => product.stock <= 50).map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>50</TableCell>
                  <TableCell>
                    <Badge variant={product.stock === 0 ? "destructive" : "warning"}>
                      {product.stock === 0 ? "Out of Stock" : "Low Stock"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      Reorder
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Stock Forecast</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] bg-gray-100 flex items-center justify-center">
            <p className="text-gray-500">Stock forecast chart placeholder</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderSupplierManagement = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Supplier Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <Input
              type="text"
              placeholder="Search suppliers..."
              value={searchTerm}
              onChange={handleSearch}
              className="max-w-sm"
            />
            <Button onClick={() => openSupplierDialog()}>
              <Plus className="mr-2 h-4 w-4" /> Add New Supplier
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Reliability</TableHead>
                <TableHead>Avg. Delivery Time</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSuppliers.map((supplier) => (
                <TableRow key={supplier.id}>
                  <TableCell>{supplier.name}</TableCell>
                  <TableCell>
                    <Badge variant={supplier.reliability >= 90 ? "success" : supplier.reliability >= 80 ? "warning" : "destructive"}>
                      {supplier.reliability}%
                    </Badge>
                  </TableCell>
                  <TableCell>{supplier.avgDeliveryTime} days</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" onClick={() => openSupplierDialog(supplier)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={isSupplierDialogOpen} onOpenChange={setIsSupplierDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedSupplier ? 'Edit Supplier' : 'Add New Supplier'}</DialogTitle>
          </DialogHeader>
          {/* Add form fields for supplier details here */}
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="supplierName" className="text-right">
                Name
              </label>
              <Input id="supplierName" value={selectedSupplier?.name || ''} className="col-span-3" />
            </div>
            {/* Add more form fields for reliability, average delivery time, etc. */}
          </div>
          <Button onClick={closeSupplierDialog}>Save Changes</Button>
        </DialogContent>
      </Dialog>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Inventory Management</h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Actions <RefreshCw className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Import Products</DropdownMenuItem>
            <DropdownMenuItem>Export Inventory Report</DropdownMenuItem>
            <DropdownMenuItem>Bulk Price Update</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex space-x-4 mb-6">
        <Button
          variant={activeTab === 'products' ? 'default' : 'outline'}
          onClick={() => setActiveTab('products')}
        >
          <Package className="mr-2 h-4 w-4" /> Products
        </Button>
        <Button
        variant={activeTab === 'stock' ? 'default' : 'outline'}
        onClick={() => setActiveTab('stock')}
      >
        <BarChart2 className="mr-2 h-4 w-4" /> Stock
      </Button>
      <Button
        variant={activeTab === 'suppliers' ? 'default' : 'outline'}
        onClick={() => setActiveTab('suppliers')}
      >
        <Truck className="mr-2 h-4 w-4" /> Suppliers
      </Button>
    </div>

    {activeTab === 'products' && renderProductCatalog()}
    {activeTab === 'stock' && renderStockManagement()}
    {activeTab === 'suppliers' && renderSupplierManagement()}
  </div>
);
};

export default InventoryManagementPage;
```

# unifield-backend-interface/src/components/HelpSupportPage.js

```js
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Search, Book, Video, TicketIcon } from 'lucide-react';

const HelpSupportPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('knowledge-base');

  // Mock data for knowledge base articles and support tickets
  const knowledgeBaseArticles = [
    { id: 1, title: 'How to place an order', type: 'FAQ' },
    { id: 2, title: 'Troubleshooting inventory sync issues', type: 'Guide' },
    { id: 3, title: 'Understanding credit limits', type: 'FAQ' },
  ];

  const supportTickets = [
    { id: 1, title: "Can't update retailer information", status: 'Open', assignedTo: 'John Doe' },
    { id: 2, title: 'Order not showing in system', status: 'In Progress', assignedTo: 'Jane Smith' },
    { id: 3, title: 'Need help with returns process', status: 'Closed', assignedTo: 'Mike Johnson' },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Help & Support</h1>
      
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="knowledge-base">Knowledge Base</TabsTrigger>
          <TabsTrigger value="support-tickets">Support Tickets</TabsTrigger>
        </TabsList>

        <TabsContent value="knowledge-base">
          <Card>
            <CardHeader>
              <CardTitle>Knowledge Base</CardTitle>
              <CardDescription>Search our database of FAQs and guides</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex mb-4">
                <Input 
                  placeholder="Search knowledge base..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="mr-2"
                />
                <Button><Search className="mr-2 h-4 w-4" /> Search</Button>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {knowledgeBaseArticles.map((article) => (
                    <TableRow key={article.id}>
                      <TableCell>{article.title}</TableCell>
                      <TableCell>{article.type}</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          {article.type === 'FAQ' ? <Book className="mr-2 h-4 w-4" /> : <Video className="mr-2 h-4 w-4" />}
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="support-tickets">
          <Card>
            <CardHeader>
              <CardTitle>Support Tickets</CardTitle>
              <CardDescription>Manage and track support requests</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="mb-4"><TicketIcon className="mr-2 h-4 w-4" /> Create New Ticket</Button>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Ticket ID</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Assigned To</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {supportTickets.map((ticket) => (
                    <TableRow key={ticket.id}>
                      <TableCell>#{ticket.id}</TableCell>
                      <TableCell>{ticket.title}</TableCell>
                      <TableCell>{ticket.status}</TableCell>
                      <TableCell>{ticket.assignedTo}</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">View Details</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HelpSupportPage;
```

# unifield-backend-interface/src/components/FinancialManagementPage.js

```js
import React, { useState, useEffect } from 'react';
import { 
  DollarSign, FileText, AlertCircle, Download, ChevronDown, 
  CreditCard, TrendingUp, BarChart2, PieChart, RefreshCw
} from 'lucide-react';
import { 
  Card, CardContent, CardHeader, CardTitle 
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar, PieChart as RePieChart, Pie, Cell
} from 'recharts';

// Mock data for invoices
const mockInvoices = [
  { id: 1, retailer: "Supermart Store", amount: 50000, date: "2023-08-15", status: "Paid" },
  { id: 2, retailer: "Electronics Plus", amount: 75000, date: "2023-08-14", status: "Pending" },
  { id: 3, retailer: "Fashion World", amount: 30000, date: "2023-08-13", status: "Overdue" },
  { id: 4, retailer: "Grocery Express", amount: 45000, date: "2023-08-12", status: "Paid" },
];

// Mock data for revenue
const mockRevenueData = [
  { month: 'Jan', revenue: 120000 },
  { month: 'Feb', revenue: 150000 },
  { month: 'Mar', revenue: 200000 },
  { month: 'Apr', revenue: 180000 },
  { month: 'May', revenue: 220000 },
  { month: 'Jun', revenue: 250000 },
];

// Mock data for product categories
const mockCategoryData = [
  { name: 'Electronics', value: 400000 },
  { name: 'Groceries', value: 300000 },
  { name: 'Fashion', value: 200000 },
  { name: 'Home & Living', value: 100000 },
];

// Mock data for partner brands
const mockPartnerBrands = [
  { id: 1, name: "Coca-Cola Company", sales: 100000, commission: 10000 },
  { id: 2, name: "Samsung Electronics", sales: 250000, commission: 25000 },
  { id: 3, name: "Unilever", sales: 150000, commission: 15000 },
  { id: 4, name: "Nestle", sales: 200000, commission: 20000 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const FinancialManagementPage = () => {
  const [activeTab, setActiveTab] = useState('billing');
  const [invoices, setInvoices] = useState(mockInvoices);
  const [revenueData, setRevenueData] = useState(mockRevenueData);
  const [categoryData, setCategoryData] = useState(mockCategoryData);
  const [partnerBrands, setPartnerBrands] = useState(mockPartnerBrands);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [isInvoiceDialogOpen, setIsInvoiceDialogOpen] = useState(false);

  useEffect(() => {
    // In a real application, you would fetch financial data from an API here
    // For now, we're using the mock data
    setInvoices(mockInvoices);
    setRevenueData(mockRevenueData);
    setCategoryData(mockCategoryData);
    setPartnerBrands(mockPartnerBrands);
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredInvoices = invoices.filter(invoice => 
    invoice.retailer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    invoice.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openInvoiceDialog = (invoice = null) => {
    setSelectedInvoice(invoice);
    setIsInvoiceDialogOpen(true);
  };

  const closeInvoiceDialog = () => {
    setIsInvoiceDialogOpen(false);
    setSelectedInvoice(null);
  };

  const handleInvoiceUpdate = (updatedInvoice) => {
    // In a real application, you would make an API call to update the invoice
    const updatedInvoices = invoices.map(invoice => 
      invoice.id === updatedInvoice.id ? updatedInvoice : invoice
    );
    setInvoices(updatedInvoices);
    closeInvoiceDialog();
  };

  const renderBillingInvoicing = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Billing & Invoicing</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <Input
              type="text"
              placeholder="Search invoices..."
              value={searchTerm}
              onChange={handleSearch}
              className="max-w-sm"
            />
            <Button onClick={() => openInvoiceDialog()}>
              <FileText className="mr-2 h-4 w-4" /> Generate New Invoice
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice ID</TableHead>
                <TableHead>Retailer</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredInvoices.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell>{invoice.id}</TableCell>
                  <TableCell>{invoice.retailer}</TableCell>
                  <TableCell>₦{invoice.amount.toLocaleString()}</TableCell>
                  <TableCell>{invoice.date}</TableCell>
                  <TableCell>
                    <Badge variant={
                      invoice.status === 'Paid' ? 'success' :
                      invoice.status === 'Pending' ? 'warning' :
                      'destructive'
                    }>
                      {invoice.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" onClick={() => openInvoiceDialog(invoice)}>
                      View
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={isInvoiceDialogOpen} onOpenChange={setIsInvoiceDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedInvoice ? 'Invoice Details' : 'Generate New Invoice'}</DialogTitle>
          </DialogHeader>
          {/* Add form fields for invoice details here */}
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="retailer" className="text-right">
                Retailer
              </label>
              <Input id="retailer" value={selectedInvoice?.retailer || ''} className="col-span-3" />
            </div>
            {/* Add more form fields for amount, date, status */}
          </div>
          <Button onClick={closeInvoiceDialog}>
            {selectedInvoice ? 'Update Invoice' : 'Generate Invoice'}
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );

  const renderRevenueAnalytics = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              ₦{revenueData.reduce((total, data) => total + data.revenue, 0).toLocaleString()}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Average Monthly Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              ₦{(revenueData.reduce((total, data) => total + data.revenue, 0) / revenueData.length).toLocaleString()}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Revenue Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">
              +{((revenueData[revenueData.length - 1].revenue - revenueData[0].revenue) / revenueData[0].revenue * 100).toFixed(2)}%
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Revenue Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Revenue by Category</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <RePieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </RePieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );

  const renderPartnerReconciliation = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Partner Brand Reconciliation</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Partner Brand</TableHead>
                <TableHead>Total Sales</TableHead>
                <TableHead>Commission</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {partnerBrands.map((partner) => (
                <TableRow key={partner.id}>
                  <TableCell>{partner.name}</TableCell>
                  <TableCell>₦{partner.sales.toLocaleString()}</TableCell>
                  <TableCell>₦{partner.commission.toLocaleString()}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      View Details
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Partner Sales Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={partnerBrands}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#8884d8" />
              <Bar dataKey="commission" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Financial Management</h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Actions <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Generate Financial Report</DropdownMenuItem>
            <DropdownMenuItem>Export Data</DropdownMenuItem>
            <DropdownMenuItem>Reconcile Partner Payments</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex space-x-4 mb-6">
        <Button
          variant={activeTab === 'billing' ? 'default' : 'outline'}
          onClick={() => setActiveTab('billing')}
        >
          <CreditCard className="mr-2 h-4 w-4" /> Billing & Invoicing
        </Button>
        <Button
          variant={activeTab === 'analytics' ? 'default' : 'outline'}
          onClick={() => setActiveTab('analytics')}
        >
          <BarChart2 className="mr-2 h-4 w-4" /> Revenue Analytics
        </Button>
        <Button
          variant={activeTab === 'partners' ? 'default' : 'outline'}
          onClick={() => setActiveTab('partners')}
        >
          <RefreshCw className="mr-2 h-4 w-4" /> Partner Reconciliation
        </Button>
      </div>
      {activeTab === 'billing' && renderBillingInvoicing()}
      {activeTab === 'analytics' && renderRevenueAnalytics()}
      {activeTab === 'partners' && renderPartnerReconciliation()}
    </div>
  );
};

export default FinancialManagementPage;
```

# unifield-backend-interface/src/components/FieldAgentManagementPage.js

```js
import React, { useState, useEffect } from 'react';
import { 
  Users, MapPin, BookOpen, BarChart2, TrendingUp, TrendingDown, 
  Download, Upload, CheckCircle, AlertCircle, Search, ChevronDown
} from 'lucide-react';
import { 
  Card, CardContent, CardHeader, CardTitle 
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Mock data for field agents
const mockFieldAgents = [
  { id: 1, name: "John Doe", territory: "Lagos Central", retailersRecruited: 15, salesGrowth: 12, creditManagement: 95 },
  { id: 2, name: "Jane Smith", territory: "Abuja North", retailersRecruited: 22, salesGrowth: 18, creditManagement: 88 },
  { id: 3, name: "Mike Johnson", territory: "Port Harcourt East", retailersRecruited: 10, salesGrowth: 8, creditManagement: 92 },
];

// Mock data for territories
const mockTerritories = [
  { id: 1, name: "Lagos Central", agentCount: 5, retailerCount: 120 },
  { id: 2, name: "Abuja North", agentCount: 3, retailerCount: 85 },
  { id: 3, name: "Port Harcourt East", agentCount: 4, retailerCount: 95 },
];

// Mock data for training modules
const mockTrainingModules = [
  { id: 1, title: "Retailer Onboarding Process", completionRate: 85 },
  { id: 2, title: "Effective Sales Techniques", completionRate: 72 },
  { id: 3, title: "Credit Management Best Practices", completionRate: 90 },
];

const FieldAgentManagementPage = () => {
  const [activeTab, setActiveTab] = useState('performance');
  const [fieldAgents, setFieldAgents] = useState(mockFieldAgents);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAgent, setSelectedAgent] = useState(null);

  useEffect(() => {
    // In a real application, you would fetch field agents data from an API here
    // For now, we're using the mock data
    setFieldAgents(mockFieldAgents);
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredAgents = fieldAgents.filter(agent => 
    agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    agent.territory.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openAgentProfile = (agent) => {
    setSelectedAgent(agent);
    // Here you would typically open a modal or navigate to a detailed profile page
    console.log("Opening profile for agent:", agent);
  };

  const renderPerformanceTab = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Agent Performance Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-100 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800">Total Agents</h3>
              <p className="text-3xl font-bold text-blue-900">{fieldAgents.length}</p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800">Avg. Retailers Recruited</h3>
              <p className="text-3xl font-bold text-green-900">
                {Math.round(fieldAgents.reduce((acc, agent) => acc + agent.retailersRecruited, 0) / fieldAgents.length)}
              </p>
            </div>
            <div className="bg-purple-100 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-800">Avg. Sales Growth</h3>
              <p className="text-3xl font-bold text-purple-900">
                {Math.round(fieldAgents.reduce((acc, agent) => acc + agent.salesGrowth, 0) / fieldAgents.length)}%
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Agent Performance Table</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <Input
              type="text"
              placeholder="Search agents..."
              value={searchTerm}
              onChange={handleSearch}
              className="max-w-sm"
            />
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" /> Export Report
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Territory</TableHead>
                <TableHead>Retailers Recruited</TableHead>
                <TableHead>Sales Growth</TableHead>
                <TableHead>Credit Management</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAgents.map((agent) => (
                <TableRow key={agent.id}>
                  <TableCell>{agent.name}</TableCell>
                  <TableCell>{agent.territory}</TableCell>
                  <TableCell>{agent.retailersRecruited}</TableCell>
                  <TableCell>
                    <Badge variant={agent.salesGrowth > 15 ? "success" : agent.salesGrowth > 10 ? "warning" : "destructive"}>
                      {agent.salesGrowth}%
                    </Badge>
                  </TableCell>
                  <TableCell>{agent.creditManagement}%</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" onClick={() => openAgentProfile(agent)}>
                      View Profile
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );

  const renderTerritoryTab = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Territory Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-100 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800">Total Territories</h3>
              <p className="text-3xl font-bold text-blue-900">{mockTerritories.length}</p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800">Total Retailers</h3>
              <p className="text-3xl font-bold text-green-900">
                {mockTerritories.reduce((acc, territory) => acc + territory.retailerCount, 0)}
              </p>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Territory Name</TableHead>
                <TableHead>Assigned Agents</TableHead>
                <TableHead>Retailer Count</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockTerritories.map((territory) => (
                <TableRow key={territory.id}>
                  <TableCell>{territory.name}</TableCell>
                  <TableCell>{territory.agentCount}</TableCell>
                  <TableCell>{territory.retailerCount}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      Manage
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Territory Map</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-200 h-96 flex items-center justify-center">
            <p className="text-gray-600">Interactive map placeholder</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderTrainingTab = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Training Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <Input
              type="text"
              placeholder="Search training modules..."
              className="max-w-sm"
            />
            <Button variant="outline">
              <Upload className="mr-2 h-4 w-4" /> Upload New Module
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Module Title</TableHead>
                <TableHead>Completion Rate</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockTrainingModules.map((module) => (
                <TableRow key={module.id}>
                  <TableCell>{module.title}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${module.completionRate}%` }}></div>
                      </div>
                      <span>{module.completionRate}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">View Details</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Best Practices</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-center">
              <CheckCircle className="mr-2 text-green-500" />
              Always follow up with retailers within 24 hours of initial contact
            </li>
            <li className="flex items-center">
              <CheckCircle className="mr-2 text-green-500" />
              Conduct weekly check-ins with top-performing retailers
            </li>
            <li className="flex items-center">
              <CheckCircle className="mr-2 text-green-500" />
              Utilize the UniField app to track all interactions and sales data
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Field Agent Management</h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Actions <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Add New Agent</DropdownMenuItem>
            <DropdownMenuItem>Generate Performance Report</DropdownMenuItem>
            <DropdownMenuItem>Adjust Territory Assignments</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex space-x-4 mb-6">
        <Button
          variant={activeTab === 'performance' ? 'default' : 'outline'}
          onClick={() => setActiveTab('performance')}
        >
          <BarChart2 className="mr-2 h-4 w-4" /> Performance
        </Button>
        <Button
          variant={activeTab === 'territory' ? 'default' : 'outline'}
          onClick={() => setActiveTab('territory')}
        >
          <MapPin className="mr-2 h-4 w-4" /> Territory
        </Button>
        <Button
          variant={activeTab === 'training' ? 'default' : 'outline'}
          onClick={() => setActiveTab('training')}
        >
          <BookOpen className="mr-2 h-4 w-4" /> Training
        </Button>
      </div>

      {activeTab === 'performance' && renderPerformanceTab()}
      {activeTab === 'territory' && renderTerritoryTab()}
      {activeTab === 'training' && renderTrainingTab()}
    </div>
  );
};

export default FieldAgentManagementPage;
```

# unifield-backend-interface/src/components/DashboardAnalytics.js

```js
import React, { useState } from 'react';
import { Users, ShoppingBag, CreditCard, Package, AlertCircle, TrendingUp, TrendingDown, Download, Filter } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

// Mock data (replace with real API calls in production)
const salesData = [
  { month: 'Jan', sales: 4000, orders: 240 },
  { month: 'Feb', sales: 3000, orders: 198 },
  { month: 'Mar', sales: 5000, orders: 300 },
  { month: 'Apr', sales: 2780, orders: 208 },
  { month: 'May', sales: 1890, orders: 180 },
  { month: 'Jun', sales: 2390, orders: 220 },
];

const inventoryData = [
  { name: 'In Stock', value: 70 },
  { name: 'Low Stock', value: 20 },
  { name: 'Out of Stock', value: 10 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

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

const QuickLink = ({ icon: Icon, label }) => (
  <button className="flex items-center justify-center bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold py-2 px-4 rounded-lg transition duration-300">
    <Icon size={20} className="mr-2" />
    {label}
  </button>
);

const DashboardAnalytics = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderOverviewDashboard = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Sales" 
          value="₦15,678,900" 
          icon={ShoppingBag} 
          trend="up" 
          trendValue="12% from last month" 
        />
        <StatCard 
          title="Active Retailers" 
          value="1,234" 
          icon={Users} 
          trend="up" 
          trendValue="5% from last month" 
        />
        <StatCard 
          title="Credit Utilization" 
          value="65%" 
          icon={CreditCard} 
          trend="down" 
          trendValue="3% from last month" 
        />
        <StatCard 
          title="Inventory Levels" 
          value="12,345" 
          icon={Package} 
          trend="up" 
          trendValue="2% from last week" 
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Real-time Updates</h2>
        <ul className="space-y-3">
          <li className="flex items-center text-sm text-gray-600">
            <Users size={16} className="mr-2 text-blue-500" />
            <span>New retailer signed up: Electronics Plus (2 minutes ago)</span>
          </li>
          <li className="flex items-center text-sm text-gray-600">
            <ShoppingBag size={16} className="mr-2 text-green-500" />
            <span>Large order placed: ₦500,000 by Supermart Store (15 minutes ago)</span>
          </li>
          <li className="flex items-center text-sm text-gray-600">
            <AlertCircle size={16} className="mr-2 text-red-500" />
            <span>Low stock alert: Coca-Cola 500ml (1 hour ago)</span>
          </li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Links</h2>
        <div className="flex flex-wrap gap-4">
          <QuickLink icon={Users} label="Add New Retailer" />
          <QuickLink icon={ShoppingBag} label="Process Order" />
          <QuickLink icon={Package} label="Update Inventory" />
          <QuickLink icon={CreditCard} label="Manage Credits" />
        </div>
      </div>
    </div>
  );

  const renderAdvancedAnalytics = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Sales Trends</h2>
          <div className="flex items-center space-x-2">
            <button className="bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold py-2 px-4 rounded-lg transition duration-300">
              <Filter size={20} />
            </button>
            <button className="bg-green-100 hover:bg-green-200 text-green-800 font-semibold py-2 px-4 rounded-lg transition duration-300">
              <Download size={20} />
            </button>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line yAxisId="right" type="monotone" dataKey="orders" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Inventory Turnover</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="orders" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Inventory Status</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={inventoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {inventoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Customizable KPI Tracking</h2>
        <p className="text-gray-600 mb-4">Implement custom KPI tracking components here based on user preferences.</p>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex space-x-4 mb-6">
        <button
          className={`py-2 px-4 rounded-lg font-semibold ${
            activeTab === 'overview'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setActiveTab('overview')}
        >
          Overview Dashboard
        </button>
        <button
          className={`py-2 px-4 rounded-lg font-semibold ${
            activeTab === 'analytics'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setActiveTab('analytics')}
        >
          Advanced Analytics
        </button>
      </div>

      {activeTab === 'overview' ? renderOverviewDashboard() : renderAdvancedAnalytics()}
    </div>
  );
};

export default DashboardAnalytics;
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
import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';
import { Menu, Bell, Search, ChevronDown } from 'lucide-react';

const BackendInterfaceLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-gray-100">
      {sidebarOpen && <Sidebar />}
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm h-16 flex items-center justify-between px-4">
          <div className="flex items-center">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="mr-4 text-gray-500 focus:outline-none focus:text-gray-700"
            >
              <Menu size={24} />
            </button>
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

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default BackendInterfaceLayout;
```

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

# unifield-backend-interface/src/pages/api/retailers.js

```js
export default function handler(req, res) {
    if (req.method === 'GET') {
      // Fetch retailers from database
      res.status(200).json(mockRetailers)
    } else if (req.method === 'POST') {
      // Add new retailer
    } else if (req.method === 'PUT') {
      // Update retailer
    } else if (req.method === 'DELETE') {
      // Delete retailer
    }
  }
```

# unifield-backend-interface/src/app/settings/page.js

```js
'use client'

import React from 'react';
import BackendInterfaceLayout from '../../components/BackendInterfaceLayout';
import SettingsContent from '../../components/SettingsContent';

export default function SettingsPage() {
  return (
    <BackendInterfaceLayout>
      <SettingsContent />
    </BackendInterfaceLayout>
  );
}
```

# unifield-backend-interface/src/app/retailer-management/page.js

```js
'use client'

import RetailerManagementPage from '../../components/RetailerManagementPage'

export default function RetailerManagement() {
  return <RetailerManagementPage />
}
```

# unifield-backend-interface/src/app/orders/page.js

```js
'use client'
import BackendInterfaceLayout from '../../components/BackendInterfaceLayout'
import OrderProcessingPage from '../../components/OrderProcessingPage'

export default function OrdersPage() {
  return (
    <BackendInterfaceLayout>
      <OrderProcessingPage />
    </BackendInterfaceLayout>
  )
}
```

# unifield-backend-interface/src/app/marketing/page.js

```js
'use client'
import BackendInterfaceLayout from '../../components/BackendInterfaceLayout'
import MarketingPromotionsPage from '../../components/MarketingPromotionsPage'

export default function MarketingPage() {
  return (
    <BackendInterfaceLayout>
      <MarketingPromotionsPage />
    </BackendInterfaceLayout>
  )
}
```

# unifield-backend-interface/src/app/inventory/page.js

```js
'use client'
import BackendInterfaceLayout from '../../components/BackendInterfaceLayout'
import InventoryManagementPage from '../../components/InventoryManagementPage'

export default function InventoryPage() {
  return (
    <BackendInterfaceLayout>
      <InventoryManagementPage />
    </BackendInterfaceLayout>
  )
}
```

# unifield-backend-interface/src/app/finance/page.js

```js
'use client'
import BackendInterfaceLayout from '../../components/BackendInterfaceLayout'
import FinancialManagementPage from '../../components/FinancialManagementPage'

export default function FinancePage() {
  return (
    <BackendInterfaceLayout>
      <FinancialManagementPage />
    </BackendInterfaceLayout>
  )
}
```

# unifield-backend-interface/src/app/help-support/page.js

```js
'use client'

import React from 'react';
import BackendInterfaceLayout from '../../components/BackendInterfaceLayout';
import HelpSupportPage from '../../components/HelpSupportPage';

export default function HelpSupport() {
  return (
    <BackendInterfaceLayout>
      <HelpSupportPage />
    </BackendInterfaceLayout>
  );
}
```

# unifield-backend-interface/src/app/field-agents/page.js

```js
'use client'
import BackendInterfaceLayout from '../../components/BackendInterfaceLayout'
import FieldAgentManagementPage from '../../components/FieldAgentManagementPage'

export default function FieldAgentsPage() {
  return (
    <BackendInterfaceLayout>
      <FieldAgentManagementPage />
    </BackendInterfaceLayout>
  )
}

```

# unifield-backend-interface/src/components/ui/textarea.jsx

```jsx
import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    (<textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Textarea.displayName = "Textarea"

export { Textarea }

```

# unifield-backend-interface/src/components/ui/tabs.jsx

```jsx
"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
```

# unifield-backend-interface/src/components/ui/table.jsx

```jsx
import * as React from "react"

import { cn } from "@/lib/utils"

const Table = React.forwardRef(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
))
Table.displayName = "Table"

const TableHeader = React.forwardRef(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
))
TableHeader.displayName = "TableHeader"

const TableBody = React.forwardRef(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
))
TableBody.displayName = "TableBody"

const TableFooter = React.forwardRef(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn("bg-primary font-medium text-primary-foreground", className)}
    {...props}
  />
))
TableFooter.displayName = "TableFooter"

const TableRow = React.forwardRef(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    )}
    {...props}
  />
))
TableRow.displayName = "TableRow"

const TableHead = React.forwardRef(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      className
    )}
    {...props}
  />
))
TableHead.displayName = "TableHead"

const TableCell = React.forwardRef(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
    {...props}
  />
))
TableCell.displayName = "TableCell"

const TableCaption = React.forwardRef(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
))
TableCaption.displayName = "TableCaption"

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
```

# unifield-backend-interface/src/components/ui/switch.jsx

```jsx
"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
```

# unifield-backend-interface/src/components/ui/slider.jsx

```jsx
"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn("relative flex w-full touch-none select-none items-center", className)}
    {...props}>
    <SliderPrimitive.Track
      className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }

```

# unifield-backend-interface/src/components/ui/select.jsx

```jsx
"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

import { cn } from "@/lib/utils"

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    )}
    {...props}>
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}>
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}>
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}>
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn("p-1", position === "popper" &&
          "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]")}>
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
    {...props} />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}>
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props} />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}

```

# unifield-backend-interface/src/components/ui/label.jsx

```jsx
"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = React.forwardRef(({ className, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={cn(labelVariants(), className)} {...props} />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
```

# unifield-backend-interface/src/components/ui/input.jsx

```jsx
import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = "Input"

export { Input }
```

# unifield-backend-interface/src/components/ui/dropdown-menu.jsx

```jsx
"use client"

import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
      className
    )}
    {...props}>
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props} />
))
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props} />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props} />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}>
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = React.forwardRef(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}>
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = React.forwardRef(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)}
    {...props} />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props} />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const DropdownMenuShortcut = ({
  className,
  ...props
}) => {
  return (
    (<span
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props} />)
  );
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}

```

# unifield-backend-interface/src/components/ui/dialog.jsx

```jsx
"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props} />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}>
      {children}
      <DialogPrimitive.Close
        className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}) => (
  <div
    className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)}
    {...props} />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}) => (
  <div
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
    {...props} />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props} />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props} />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}

```

# unifield-backend-interface/src/components/ui/card.jsx

```jsx
import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
```

# unifield-backend-interface/src/components/ui/button.jsx

```jsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button, buttonVariants }
```

# unifield-backend-interface/src/components/ui/badge.jsx

```jsx
import * as React from "react"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  ...props
}) {
  return (<div className={cn(badgeVariants({ variant }), className)} {...props} />);
}

export { Badge, badgeVariants }

```

