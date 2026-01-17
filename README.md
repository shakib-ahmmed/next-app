SkyCruzer UAV – UAV Shop Application

Live Demo: 🔗 https://next-app-front-okatwz15g-shakib-ahmmeds-projects.vercel.app/

SkyCruzer UAV is a modern web application built with Next.js (App Router) that showcases a UAV (drone) shop experience. The platform allows users to browse UAV products, view detailed information, and optionally manage items through protected routes with authentication.

This project demonstrates routing, authentication, API integration, and modern frontend practices using Next.js 15/16.

📌 Project Overview

The goal of this project is to build a simple yet functional UAV shop application featuring:

Public landing and product pages

Authentication (mock or optional NextAuth)

Dynamic product listing and product detail views

Optional protected item creation

Integration with an Express.js API

🔗 Live Demo: https://next-app-front-okatwz15g-shakib-ahmmeds-projects.vercel.app/

✨ Features Implemented
1️⃣ Landing Page

Publicly accessible

Includes 7 relevant sections (excluding Navbar and Footer)

Clean and responsive UI

Navbar includes navigation links to:

Login

Items / Product List

Reusable Footer

2️⃣ Authentication

Mock authentication using a hardcoded email and password

Credentials stored in cookies

Route protection for authenticated-only pages

Redirects unauthenticated users to login

On valid login, users are routed to Items/List page

🔐 Optional Enhancements:
Can be extended using NextAuth.js (e.g., Google login or email-based credentials)

3️⃣ Item List Page

Publicly accessible

Fetches UAV item data from an Express.js API / JSON source

Displays product cards with:

Name

Description

Price

Image

4️⃣ Item Details Page

Publicly accessible

Dynamic route for each item (/items/[id])

Shows full product details

Uses Next.js App Router dynamic routing

5️⃣ Protected Page (Optional): Add Item

Restricted to authenticated users

Form to add a new UAV product

Sends data to the Express.js server

Redirects unauthenticated users to login

Shows success notification (if included)

🧭 Route Summary
Route	Description	Access
/	Landing Page	Public
/login	Login Page	Public
/items	Item List Page	Public
/items/[id]	Item Details	Public
/add-item	Create New Item	Protected (Login)
🛠 Technologies Used

Next.js 15/16 (App Router)

React

Express.js (API / JSON backend)

Cookies for authentication state

Tailwind CSS / CSS Modules or other styling tools

Vercel deployment platform

⚙️ Setup & Installation
1️⃣ Clone the repository
git clone https://github.com/your-username/skycruzer-uav.git
cd skycruzer-uav

2️⃣ Install dependencies
npm install

3️⃣ Run development servers

Frontend

npm run dev


Backend (Express API)

node server.js


Visit:

http://localhost:3000

🚀 Optional Enhancements

Replace mock login with NextAuth.js

Full persistent database (MongoDB, PostgreSQL, etc.)

User roles & admin dashboard

Cart and checkout flows

Search and filtering on item list

🎯 Credits

Built by SkyCruzer UAV Development Team

📄 License

This project is provided for educational and demonstration purposes.