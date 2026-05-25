# SYSTEM INSTRUCTION: Digital Invitation SaaS (MVP)

## 1. Objective
Build a high-performance, mobile-first responsive digital invitation system based on the provided PRD/SRS.

## 2. Technical Stack
- Framework: React (Vite)
- Styling: Tailwind CSS
- Backend/DB: Firebase (Firestore)
- Deployment: Vercel/Netlify

## 3. Scope of Work (Sprint 1)
Please implement the following modules:

### Module A: Core Structure
- Create a `TemplateEngine` component that accepts a `slug` or `ID` and fetches specific invitation data (names, date, location) from Firebase.
- Implement URL parameter logic (e.g., `?to=GuestName`) to display dynamic greetings.

### Module B: UI Components (Mobile-First)
- `CoverPage`: Full-screen hero section with an "Open Invitation" button.
- `EventDetails`: Section showing date, time, and an embedded Google Maps iframe.
- `Gallery`: A responsive grid/slider for photos.
- `RSVPForm`: A form that submits data to Firestore (Name, Attendance Status, Message).
- `GiftSection`: Display section for bank details/QRIS with a "Copy to Clipboard" button.

### Module C: Logic & State
- Add a countdown timer component (Date-based).
- Add background music toggle (Audio player with Play/Pause state).
- Implement basic Firebase integration to fetch the data based on the route.

## 4. Coding Standards
- Use functional components and React Hooks (useState, useEffect).
- Keep the design clean: Use a refined color palette (Slate, Gold, White).
- Ensure 100% responsiveness on mobile devices (crucial for WhatsApp sharing).
- Keep images optimized to ensure the page loads in < 2 seconds.

## 5. Deliverable
Please provide the main file structure and the code for the `App.jsx` (or main router) and a reusable `InvitationTemplate.jsx` component.