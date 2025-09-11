# Payzo – Digital Wallet Frontend

visit - [Payzo](https://digital-wallet-frontend-jkikd6302.vercel.app/)

---

## Project Overview

**Payzo** is a secure, role-based, and user-friendly frontend application for a Digital Wallet System, inspired by services like **bKash** and **Nagad**. Built using **React.js**, **Redux Toolkit**, and **RTK Query**, the application enables Users, Agents, and Admins to perform financial operations and manage wallets seamlessly.

Key features include:

- Public landing pages showcasing the wallet service  
- Role-based dashboards with tailored features for Users, Agents, and Admins  
- Robust state management and API integration using Redux Toolkit & RTK Query  
- Responsive UI and polished UX for all devices  

---

## Test Credentials

| Role   | Description                          | Email           | Password       |
|--------|--------------------------------------|-----------------|----------------|
| Admin  | Full system access and management    | 01837429636     | 01837429636    |
| Agent  | Handle user wallet transactions      | 01837429696     | 01837429696    |
| User   | Standard wallet operations           | 01878856422     | 01878856422    |

---

## Technology Stack

**Frontend:**

- React.js with TypeScript  
- Redux Toolkit & RTK Query  
- React Router DOM  
- Tailwind CSS for styling  
- Toast notifications & guided tour libraries  

**Backend (API, provided separately or mocked):**

- Node.js / Express.js (REST API)  
- MongoDB / Mongoose  
- JWT & bcrypt for secure authentication  

---


## User Experience // Functional Features

Here’s how a **user** would experience the Payzo application:

1. **Landing Page:**  
   - Visitors see a **modern landing page** with hero banner, navigation menu, and smooth animations.  
   - Can explore **About**, **Features**, **Pricing**, **Contact**, and **FAQ** pages without logging in.  

2. **Registration & Login:**  
   - New users can **register** selecting their role (User or Agent).  
   - Returning users can **log in** with JWT authentication.  
   - Role-based dashboard redirection ensures the correct view.  

3. **User Dashboard:**  
   - View **wallet balance** and recent transactions.  
   - **Deposit or withdraw money** (simulated via agent).  
   - **Send money** to other users by phone/email.  
   - **Transaction history** with filtering and pagination.  
   - Manage **profile details** like name, phone, and password.  

4. **Agent Dashboard:**  
   - View **cash-in/out summary** and recent activities.  
   - Add or withdraw money to/from user wallets.  
   - Track all handled transactions and optionally view commissions.  
   - Update personal profile information.  

5. **Admin Dashboard:**  
   - Overview of total users, agents, transactions, and transaction volume.  
   - Manage users and agents: approve, suspend, block/unblock.  
   - Advanced transaction filters and search capabilities.  
   - Adjust system fees or limits (optional).  

6. **Guided Tour:**  
   - New users experience a **5+ step guided tour** highlighting navigation, stats cards, charts, table filters, and theme toggle.  
   - Tour runs only once and can be restarted from settings.  

7. **General UI/UX:**  
   - Role-based navigation menus  
   - Loading indicators and toast notifications for feedback  
   - Responsive design with accessible light/dark themes  

---





---

## Setup Instructions

1. **Clone the repository**  

```bash
git clone https://github.com/safin33221/Digital-Wallets--Client-side.git
cd Digital-Wallets--Client-side
bun i

```

2. **Configure Env file**  

```bash
VITE_API_BASE_URL=https://your-backend-api.com
```

3. **Run Application**  

```bash
bun run dev
```
