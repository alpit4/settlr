<div align="center">
  <img width="945" height="277" alt="logo" src="https://github.com/user-attachments/assets/b4bf1264-06ba-40a1-a91f-8602e765a2f6" />

  <h1>Settlr — AI-Powered Expense Splitter</h1>
  <p>
    A full-stack real-time expense-splitting platform built with <strong>Next.js 15 (App Router)</strong>, <strong>React 19</strong>, <strong>Convex</strong>, <strong>Clerk Auth</strong>, <strong>Tailwind + Shadcn</strong>, and <strong>Inngest</strong>.
  </p>

  🔗 <strong>Live Demo:</strong> https://settlr-one.vercel.app  
  💻 <strong>Source Code:</strong> https://github.com/alpit4/settlr
  <br/><br/>
</div>

---

## 🚀 Overview

Settlr is a fully real-time, authentication-protected expense manager designed to make splitting bills effortless.  
It features automated reminders, dynamic balance calculations, and a clean, modern UI powered by Tailwind and Shadcn UI.

Users can:
- Create groups  
- Add expenses with flexible split types  
- View automated balance summaries  
- Track settlement history  
- Receive automated payment reminders  
- Collaborate with members in real time  

---

## ✨ Features

### 🔐 **Authentication & User Management**
- Clerk-powered login and signup  
- Secure session-based layouts  
- All data automatically scoped to the signed-in user  

---

### 📊 **Real-Time Dashboard & Analytics**
- Monthly spending breakdown  
- Per-user balance summaries  
- Activity feed for groups  
- Auto-synced Convex queries (no manual fetching)  

---

### 💸 **Expense Workflow**
- Equal / percentage / exact splits  
- Zod-backed validation  
- Category tagging  
- Permissions enforced before any write  
- Automatic who-owes-whom calculation  

---

### 🔁 **Live Sync Across Devices**
- Convex real-time subscriptions  
- All expenses, groups, and settlements sync instantly  

---

### 📬 **Automated Payment Reminders**
- Inngest scheduled cron job  
- Resend emails sent daily  
- Only users with outstanding dues are notified  

---

### ⚙️ **Backend Logic (Convex Functions)**
Convex function modules include:
- `convex/expenses.js` — create & validate expenses  
- `convex/settlements.js` — record settlements  
- `convex/dashboard.js` — compute balances & summaries  

Atomic writes prevent race conditions and unauthorized access.

---

## 🧱 Tech Stack
<div align="left">

  <img src="https://skillicons.dev/icons?i=nextjs&theme=light" title="Next.js" width="45" height="45"/>&nbsp;
  <img src="https://skillicons.dev/icons?i=react&theme=light" title="React" width="45" height="45"/>&nbsp;
  <img src="https://skillicons.dev/icons?i=tailwind&theme=light" title="Tailwind CSS" width="45" height="45"/>&nbsp;
  <img src="https://skillicons.dev/icons?i=githubactions&theme=light" title="Inngest Workflow (closest match)" width="45" height="45"/>&nbsp;
  <img src="https://skillicons.dev/icons?i=js&theme=light" title="JavaScript" width="45" height="45"/>&nbsp;
  <img src="https://skillicons.dev/icons?i=git&theme=light" title="Git" width="45" height="45"/>&nbsp;
  <img src="https://skillicons.dev/icons?i=postman&theme=light" title="Postman" width="45" height="45"/>&nbsp;

</div>

## 📦 Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/alpit4/settlr.git
cd settlr
```

2️⃣ Install dependencies
```bash
npm install
```

3️⃣ Create .env.local and add the following:
```bash
# Clerk Auth
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Convex
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=

# Resend (Emails)
RESEND_API_KEY=

# Inngest
INNGEST_EVENT_KEY=
INNGEST_SIGNING_KEY=
```

4️⃣ Configure Convex
```bash
npx convex dev    # starts local convex & generates functions
```

#### Push schema to Convex Cloud
```bash
npx convex push
```

5️⃣ Start the development server
```bash
npm run dev
```

App will run at:
```bash
👉 http://localhost:3000
```

Inngest service will be at:
```bash
👉 http://localhost:8288/runs
```
