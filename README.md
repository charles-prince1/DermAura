# React + Vite

DermAura Care
A modern, responsive e-commerce web application for a luxury skincare and fragrance brand. Built with React and styled with Tailwind CSS, this project features dynamic dark mode toggling, interactive shopping cart management, and fluid UI components.

Features
Dynamic Dark/Light Mode: Full context-driven theme switching via a custom ThemeProvider hook.

Responsive Layout: Fully optimized for mobile, tablet, and desktop views with a sleek mobile drawer menu.

Interactive Shopping Cart: Real-time item count updates on the navigation bar.

Pricing & Auto-Refill Toggle: Dynamic pricing display supporting one-time purchases and subscription discounts.

Component-Based Architecture: Modular design featuring Navbar, Hero, About, How It Works, Pricing, FAQ, and Footer components.

Tech Stack
Frontend: React (JSX, Hooks, Context API)

Styling: Tailwind CSS

Icons: Lucide React (lucide-react)

Getting Started
Prerequisites
Ensure you have Node.js and npm installed on your system:

Node.js (v16.0 or higher)

npm or yarn

Installation
Clone the repository:

Bash
git clone https://github.com/your-username/smoothskin-care.git
cd smoothskin-care
Install dependencies:

Bash
npm install
Start the development server:

Bash
npm run dev
File Structure
Plaintext
src/
├── components/
│   ├── AboutProduct.jsx
│   ├── BackToTop.jsx
│   ├── DemoModal.jsx
│   ├── FAQ.jsx
│   ├── Features.jsx
│   ├── FinalCTA.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── HowItWorks.jsx
│   ├── Navbar.jsx
│   └── Pricing.jsx
├── context/
│   └── ThemeProvider.jsx
├── App.jsx
├── main.jsx
└── index.css
