# IB Management Solution (IB MS) — Marketing & Sales Website

A production-ready, high-conversion marketing and sales website for **IB Management Solution** — the operations system for dental CBCT imaging centres.

## 🛠️ Stack & Architecture

- **Frontend:** React 18 + TypeScript + Vite 5
- **Styles:** Tailwind CSS v3 (custom monochrome DICOM scale + amber accent states)
- **Icons:** Lucide React
- **Routing:** React Router v6
- **Database (Optional):** Supabase (for writing lead data to the `leads` table)

---

## 🚀 Getting Started

### Prerequisites
Make sure you have **Node.js 18+** and **npm 9+** installed.

### 1. Installation
Clone or navigate to the directory and run:
```bash
npm install
```

### 2. Configuration
Copy the `.env.example` file and supply your Supabase parameters:
```bash
cp .env.example .env
```
*Note: If `.env` is omitted or variables are empty, the demo booking form will print submissions to the developer console and save them in `localStorage` for testing.*

### 3. Local Development Server
Launch the compiler and hot-reloader:
```bash
npm run dev
```
The site will run on `http://localhost:3000`.

### 4. Build for Production
Bundle and compile the static assets to the `/dist` directory:
```bash
npm run build
```

---

## 🗄️ Database Setup (Supabase)

To capture bookings, create a table named `leads` in your Supabase database using the SQL query below:

```sql
create table leads (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  centre_name text not null,
  city text not null,
  phone text not null,
  whatsapp_enabled boolean default true,
  scans_per_month text,
  centres_count text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS (Row Level Security) and configure inserts
alter table leads enable row level security;

create policy "Enable insert for anonymous users" 
on leads for insert 
to anon 
with check (true);
```

---

## 🧭 Sitemap Directory

- `/` — Home (Hero with interactive case journey state machine, quotes, modules)
- `/product` — System overview
- `/product/technician` — Technician station features & live uploader preview
- `/product/radiologist` — Radiologist worklist & digital sign-off preview
- `/product/admin` — Owner dashboard & referral trend charts preview
- `/product/dentist-app` — Referring Dentist app & mobile report preview
- `/pricing` — Interactive monthly/annual toggle, add-ons list, and TCO calculator
- `/who-its-for` — Target profiles (Single clinic, chains, reading radiologists)
- `/security` — DPDP posture details and role-based access logs
- `/integrations` — DICOM, WhatsApp API, and billing exports
- `/switching` — Onboarding and WhatsApp-to-Cloud migration roadmap
- `/about` — Intellobyte company background
- `/contact` — Sales/Support details and direct WhatsApp linkages
- `/demo` — Demo form page
- `/demo/thank-you` — Confirmation redirect
- `/resources` — SEO guides list
- `/resources/:slug` — Individual guide reading page
- `/privacy`, `/terms`, `/dpa` — Privacy policy, DPA, and legal terms

---

## 🎨 Visual Identity

- **Background:** Pure black (`#000000`) and Deep Charcoal (`#0a0a0c`).
- **Typography:** Inter (UI & copy) and JetBrains Mono (timestamps, case IDs, raw DICOM readouts).
- **Accents:** Amber/Orange (`#f59e0b`) representing diagnostic status indicators, priority warnings, and actions.
