Nini e Pettirosso 🍕
A modern, responsive landing page for Nini e Pettirosso, an authentic Italian pizzeria located in Berlin-Neukölln at Körnerpark.

📋 Overview
This is a professional website showcasing an Italian pizza restaurant with:

Interactive menu with categories (Klassiker, Vegan, Spezialitäten)
Opening hours and location information
Photo gallery
Contact information and booking links
Fully responsive design for mobile and desktop
Smooth animations and transitions
🛠️ Tech Stack
Framework: React 18+
Language: TypeScript
Styling: Tailwind CSS
Animations: Framer Motion
Build Tool: Vite
Icons: Lucide React
Maps: Google Maps Embed API
📦 Installation
Clone the repository:
bash
git clone <repository-url>
cd nini-e-pettirosso
Install dependencies:
bash
npm install
Start the development server:
bash
npm run dev
Open your browser and navigate to http://localhost:5173
🚀 Building for Production
To create a production build:

bash
npm run build
The optimized files will be in the dist/ directory.

📁 Project Structure
src/
├── pages/
│ └── Home.tsx # Main landing page component
├── App.tsx # Root component
├── main.tsx # Application entry point
├── index.css # Global styles
└── vite-env.d.ts # Vite type definitions

public/ # Static assets
🎨 Key Components
Menu System
Dynamic menu categories with smooth transitions
Vegan options clearly marked with a leaf icon
Responsive grid layout (single column on mobile, two columns on desktop)
Sections
Hero Section - Eye-catching introduction with call-to-action buttons
About Section - Restaurant story and values
Menu Section - Pizza offerings organized by category
Hours & Location - Operating hours and embedded Google Map
Gallery - Photo showcase with hover effects
CTA Section - Call-to-action for ordering
Footer - Contact information and links
Navigation
Fixed header with smooth scroll to sections
Mobile-responsive hamburger menu
Active state indicators
Direct links to Lieferando for ordering
🎯 Features
✨ Fully Responsive Design - Works seamlessly on all devices

⚡ Performance Optimized - Fast loading with Vite

🎬 Smooth Animations - Framer Motion for engaging transitions

📱 Mobile First - Optimized mobile experience

🔍 SEO Friendly - Semantic HTML structure

♿ Accessible - Proper contrast and semantic markup

🌐 Integration Ready - Easy to connect with ordering platforms

🔧 Customization
Colors
The main color scheme is defined in the Tailwind classes:

Primary Green:
#2D3B2D
Secondary Orange:
#C4654A
Accent Green:
#5A6B4D
Background:
#FAF8F5
To change colors, update the hex values in Home.tsx.

Menu Items
Edit the pizzaMenu object in Home.tsx to add, remove, or modify pizzas and their prices.

Contact Information
Update the following in Home.tsx:

Address: Körnerstraße 42, 12051 Berlin-Neukölln
Phone: 030 1234 5678
Email: ciao@niniepettirosso.de
Instagram: @niniepettirosso
Lieferando link: https://www.lieferando.de
Opening Hours
Modify the openingHours array to reflect actual operating hours.

📱 Responsive Breakpoints
The design is optimized for:

Mobile: 320px - 767px
Tablet: 768px - 1023px
Desktop: 1024px+
Using Tailwind's md: prefix for medium screens and up.

🔗 External Links
Menu Ordering: Lieferando
Social Media: Instagram
Location: Google Maps
📝 Typography
Serif Font: Used for headings and brand name (elegant, traditional feel)
Sans-serif Font: Used for body text and UI elements
🎬 Animation Details
Hero section: Fade-in and slide-up animations
Section entries: Scroll-triggered animations with Framer Motion
Buttons: Scale and tap animations for interactivity
Gallery: Hover zoom effects
Scroll indicator: Continuous bounce animation
🌍 Internationalization
The site is currently in German (de). To support multiple languages:

Create a translations object
Use the i18next library
Update all text strings to use translation keys
📄 License
© 2011-2024 Nini e Pettirosso. All rights reserved.

📧 Support
For issues, questions, or suggestions, contact:

Email: ciao@niniepettirosso.de
Phone: 030 1234 5678
🎉 Credits
Developed with React, TypeScript, and Tailwind CSS. Design inspired by modern Italian restaurant aesthetics and web best practices.
