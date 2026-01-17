# 🚁 SkyCruzer UAV – UAV Shop Application

🔗 **Live Demo:**  
https://next-app-front-okatwz15g-shakib-ahmmeds-projects.vercel.app/

SkyCruzer UAV is a modern UAV (drone) shop web application built with **Next.js 15/16 (App Router)**.  
The application allows users to explore UAV products, view detailed product information, and manage items through protected routes with authentication.

This project demonstrates real-world usage of Next.js routing, authentication, API integration, and modern frontend development practices.

---

## 📌 Project Overview

The main goal of this project is to build a simple yet functional UAV shop that includes:

- A public landing page
- Authentication system (mock login)
- Public product listing and details pages
- Optional protected item creation
- Integration with an Express.js backend API

---

## ✨ Features Implemented

### 1️⃣ Landing Page
- Publicly accessible
- Includes **7 relevant sections** (excluding Navbar and Footer)
- Responsive and user-friendly UI
- Navbar includes links to:
  - Login
  - Items / Product List
- Footer available across the application

---

### 2️⃣ Authentication
- Mock authentication using **hardcoded email & password**
- Authentication state stored in **cookies**
- Protected routes for authenticated users
- Redirects unauthenticated users to the login page
- Redirects to items page on successful login

> 🔐 Optional: Can be extended using **NextAuth.js** (Google or credential login)

---

### 3️⃣ Item List Page
- Publicly accessible
- Fetches UAV product data from an **Express.js API / JSON**
- Displays product cards with:
  - Name
  - Description
  - Price
  - Image

---

### 4️⃣ Item Details Page
- Publicly accessible
- Dynamic routing using `/items/[id]`
- Displays full details of a selected UAV product

---

### 5️⃣ Protected Page (Optional): Add Item
- Accessible only to authenticated users
- Form to add a new UAV product
- Stores data via the Express.js server
- Redirects unauthenticated users to login
- Toast notification on successful item creation (if enabled)

---

## 🧭 Route Summary

| Route | Description | Access |
|------|------------|--------|
| `/` | Landing Page | Public |
| `/login` | Login Page | Public |
| `/items` | Item List Page | Public |
| `/items/[id]` | Item Details Page | Public |
| `/add-item` | Add New Item | Protected |

---

## 🛠 Technologies Used

- **Next.js 15/16** (App Router)
- **React**
- **Express.js** (API / JSON backend)
- **Cookies** for authentication
- **Tailwind CSS / CSS Modules** (or other styling solution)
- **Vercel** for deployment

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/skyscruzer-uav.git
cd skyscruzer-uav


2️⃣ Install Dependencies
npm install

3️⃣ Run the Application
Frontend (Next.js)
npm run dev

Backend (Express.js)
node server.js


Open your browser and visit:

http://localhost:3000

🚀 Future Improvements

Replace mock login with NextAuth.js

Database integration (MongoDB / PostgreSQL)

Role-based access control

Cart and checkout system

Admin dashboard

Product search and filtering

📄 License

This project is created for educational and demonstration purposes.

✈️ SkyCruzer UAV

Explore. Innovate. Fly Beyond.


---

If you want, I can also:
- Add **screenshots section**
- Optimize it for **job/portfolio submission**
- Customize it for **GitHub assignment grading**

Just tell me 👍