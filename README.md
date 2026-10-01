<div align="center">

# 🛠️ DailyHire

### *Connecting Local Skills with Immediate Community Needs*

[![Next.js](https://img.shields.io/badge/Next.js-15.1.7-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Leaflet](https://img.shields.io/badge/Leaflet-Maps-199900?style=for-the-badge&logo=leaflet&logoColor=white)](https://leafletjs.com/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

<p align="center">
  <b>DailyHire</b> is a modern, on-demand workforce and local service marketplace platform. Whether you need a quick repair, deep cleaning, electrical troubleshooting, or certified carpentry, DailyHire connects verified local professionals with clients through interactive map-based discovery, instant booking, and live tracking.
</p>

[Explore Features](#-key-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Project Structure](#-project-structure) • [Routes](#-application-routes)

---

</div>

## 📌 Overview

Traditional local hiring often suffers from uncertain pricing, lack of verified skill credentials, and unpredictable arrival times. **DailyHire** bridges this gap with an intuitive web application providing:
- **Instant Discovery**: Find nearby service providers by category, pricing, ratings, and distance.
- **Interactive Geolocation**: Live Leaflet map displaying active helpers in your area.
- **Seamless Booking**: Transparent service tiers (Basic, Standard, Full Service, Emergency) with real-time price estimation.
- **Live Job Tracking**: Real-time status updates and animated route tracking from dispatch to job completion.
- **Dual Portal Experience**: Tailored dashboards for both clients seeking services and skilled helpers managing their daily schedule and earnings.

---

## ✨ Key Features

### 🔍 1. Interactive Explorer & Live Map
- **Geo-Enabled Search**: Browse helpers dynamically positioned across your local vicinity using interactive Leaflet tiles.
- **Multi-Parametric Filters**: Filter providers by trade (Plumber, Electrician, Carpenter, Cleaner, Mechanic, AC Repair, Painter, Gardener), hourly budget, minimum customer rating, and availability status.
- **Direct Card Actions**: Instant access to detailed helper portfolios, hourly rates, verified credentials, and one-click booking.

### 📅 2. Comprehensive Booking System
- **Tiered Service Packages**: Choose between basic diagnosis, standard fix, comprehensive service, or 24/7 emergency dispatch.
- **Date & Slot Scheduling**: Interactive calendar and time slot selector.
- **Clear Pricing Breakdown**: Upfront calculation including service fee, platform charges, taxes, and estimated totals.
- **Address & Notes**: Custom address pinpointing and job requirement descriptions.

### 📍 3. Real-Time Tracking & Live Status
- **Status Stepper**: Monitor job progression across stages: *Booking Confirmed* ➔ *Helper Assigned* ➔ *On the Way* ➔ *In Progress* ➔ *Completed*.
- **Live ETA & Distance**: Dynamic countdown with distance indicators.
- **Helper Quick Contacts**: One-tap call and message actions to coordinate directly with your assigned worker.

### 📊 4. Dedicated Helper & Client Dashboards
- **Earnings & Analytics**: Visual revenue charts and job completion metrics powered by Recharts.
- **Schedule Management**: Manage incoming hire requests, upcoming tasks, and past invoices.
- **Profile Customization**: Update skills, service radius, hourly rates, bio, and portfolio photos.

### 🔐 5. Modern Authentication & Design
- **Role-Based Onboarding**: Register either as a **Client** looking for services or as a **Helper** providing skilled labor.
- **Dark / Light Modes**: Full theme support with system preference detection using `next-themes`.
- **Fluid Micro-Interactions**: Smooth animations and transitions built with `framer-motion`.

---

## 💻 Tech Stack

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router) | React Server Components, file-system routing & optimizations |
| **Library** | [React 19](https://react.dev/) | Modern UI component rendering |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first styling with modern CSS color variables |
| **UI Components** | [Radix UI](https://www.radix-ui.com/) | Accessible unstyled primitives (Dialog, Dropdown, Tabs, etc.) |
| **Maps & Geo** | [Leaflet](https://leafletjs.com/) & [React-Leaflet](https://react-leaflet.js.org/) | Interactive mapping, custom markers, and location controls |
| **Data Viz** | [Recharts](https://recharts.org/) | Responsive SVG charts for analytics and performance tracking |
| **Icons** | [Lucide React](https://lucide.dev/) | Consistent, clean icon set |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) | Production-ready motion and gesture library |
| **Notifications** | [Sonner](https://sonner.emilkowal.ski/) | Clean, unobtrusive toast notifications |

---

## 📁 Project Structure

```text
DailyHire/
├── .gitignore               # Git ignore rules
├── README.md                # Project documentation
└── frontend/                # Next.js web application
    ├── app/                 # Next.js App Router
    │   ├── booking/         # Service booking flow ([id])
    │   ├── dashboard/       # Client & Helper dashboards, profiles, schedules
    │   ├── explore/         # Helper search & interactive Leaflet map
    │   ├── helper/          # Helper profile view
    │   ├── login/           # User authentication login
    │   ├── signup/          # User registration & role selection
    │   ├── tracking/        # Live helper tracking & route visualizer ([id])
    │   ├── layout.jsx       # Root layout with theme provider
    │   ├── page.jsx         # Landing page
    │   └── globals.css      # Global styles & theme tokens
    ├── components/          # Reusable components
    │   ├── landing/         # Hero, Categories, Testimonials, CTA sections
    │   ├── ui/              # Radix UI + Tailwind design system components
    │   ├── header.jsx       # Global navigation bar
    │   ├── footer.jsx       # Global footer
    │   ├── helper-card.jsx  # Helper card with badge, rating & price
    │   ├── map-view.jsx     # Leaflet map component with markers
    │   └── theme-provider.jsx # Theme context wrapper
    ├── hooks/               # Custom React hooks (toast, mobile-detector)
    ├── lib/                 # Utilities, mock data & authentication helpers
    ├── public/              # Static assets & icons
    └── package.json         # Project scripts and dependencies
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: `v18.18.0` or higher (recommended: Node 20+ LTS)
- **npm** or **pnpm** / **yarn**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/prachiprajapatii/Daily-Hire.git
   cd Daily-Hire/frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

### Building for Production

To create an optimized production build:
```bash
npm run build
npm run start
```

---

## 🧭 Application Routes

| Path | Purpose |
| :--- | :--- |
| `/` | **Landing Page** with platform value proposition, services, and featured helpers |
| `/explore` | **Worker Search & Map** to filter and inspect verified local professionals |
| `/helper/:id` | **Detailed Helper Profile** displaying bio, skills, reviews, and rates |
| `/booking/:id` | **Booking Portal** to select packages, schedule dates, and confirm hires |
| `/tracking/:id` | **Live Tracking** to follow worker arrival status and dispatch route |
| `/dashboard` | **Management Hub** for jobs, earnings, booking history, and analytics |
| `/login` | **Sign In** for existing users |
| `/signup` | **Onboarding** for new clients or service helpers |

---

## 🛠️ Configuration & Customization

- **Map Settings**: Update default coordinates and tile providers in [frontend/components/map-view.jsx](file:///frontend/components/map-view.jsx).
- **Service Categories**: Modify or expand worker professions in [frontend/lib/mock-data.js](file:///frontend/lib/mock-data.js).
- **Theme Customization**: Adjust CSS variable tokens in [frontend/app/globals.css](file:///frontend/app/globals.css).

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - feel free to use and modify for your personal and commercial projects.

---

<div align="center">
  Designed & Developed with ❤️ by <a href="https://github.com/prachiprajapatii">Prachi Prajapati</a>
</div>