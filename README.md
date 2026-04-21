# 🚀 Full Stack Developer Portfolio — MERN Stack

A modern, responsive, animated personal portfolio built with the **MERN Stack** + **EmailJS** for the contact form. Designed to impress HRs and recruiters.

---

## ✨ Features

- 🎨 **Stunning dark UI** with particle background, glassmorphism cards, gradient text
- ⌨️ **Typewriter animation** in the hero section
- 📊 **Animated skill bars** that trigger on scroll
- 🗂️ **Filterable projects** section
- 📬 **Contact form** powered by **EmailJS** (sends email to HR directly)
- 🗄️ **MongoDB backup** — all messages saved to database
- 📱 **Fully responsive** on all devices
- ⚡ **Smooth scroll animations** using Intersection Observer

---

## 🗂️ Project Structure

```
portfolio/
├── client/              # React + Vite frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar/
│   │   │   ├── Hero/
│   │   │   ├── About/
│   │   │   ├── Skills/
│   │   │   ├── Projects/
│   │   │   ├── Contact/
│   │   │   ├── Footer/
│   │   │   └── common/
│   │   ├── styles/
│   │   └── App.jsx
│   ├── tailwind.config.js
│   └── vite.config.js
│
└── server/              # Node.js + Express backend
    ├── models/
    ├── routes/
    ├── controllers/
    └── index.js
```

---

## 🚀 Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Install all dependencies
npm install
cd server && npm install
cd ../client && npm install
```

### 2. Setup Environment Variables

```bash
cd server
cp .env.example .env
```

Fill in `.env`:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/portfolio
```

### 3. Setup EmailJS ⚡

This is what sends emails to your inbox when someone fills the contact form.

1. Go to [https://www.emailjs.com](https://www.emailjs.com) and create a free account
2. **Add a Service** → connect your Gmail
3. **Create a Template** with these variables:
   ```
   From: {{name}} ({{email}})
   Subject: {{subject}}
   Message: {{message}}
   ```
4. Copy your **Service ID**, **Template ID**, and **Public Key**
5. Open `client/src/components/Contact/Contact.jsx` and replace:
   ```js
   const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
   const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
   const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
   ```

### 4. Run the App

```bash
# From root — runs both frontend and backend
npm run dev
```

- Frontend: http://localhost:5173
- Backend: http://localhost:5000

---

## 🔧 Customization Checklist

Open these files and replace placeholder content:

| File | What to Update |
|------|---------------|
| `client/src/components/Hero/Hero.jsx` | Your name, roles, social links |
| `client/src/components/About/About.jsx` | Bio, education, location |
| `client/src/components/Skills/Skills.jsx` | Skill names and percentages |
| `client/src/components/Projects/Projects.jsx` | Project titles, descriptions, links |
| `client/src/components/Contact/Contact.jsx` | Email, phone, EmailJS keys |
| `client/src/components/Footer/Footer.jsx` | Social links |
| `client/index.html` | Page title and meta description |
| `client/public/resume.pdf` | Add your actual resume PDF |

---

## 🌐 Deployment

### Frontend (Vercel)
```bash
cd client
npm run build
# Deploy /dist to Vercel
```

### Backend (Render / Railway)
- Set env vars on your hosting platform
- Deploy the `/server` folder

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Vite, Tailwind CSS |
| Animation | CSS Animations, Intersection Observer |
| Email | EmailJS |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Deployment | Vercel (FE), Render (BE) |

---

## 📸 Adding Your Photo

Replace the emoji in `Hero.jsx`:
```jsx
// Replace this block:
<div className="text-6xl mb-2">👨‍💻</div>

// With:
<img src="/your-photo.jpg" alt="Your Name" className="w-full h-full object-cover" />
```
Place your photo in `client/public/`.

---

## 📄 License
MIT — feel free to use and customize!
