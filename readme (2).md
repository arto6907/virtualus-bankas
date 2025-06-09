# 💻 Virtualus bankas

Tai yra baigiamojo darbo projektas, kuriame naudojamas MERN stack (MongoDB, Express, React, Node.js). Projektas leidžia kurti banko sąskaitas, pridėti/nurašyti lėšų, registruoti vartotojus ir prisijungti.

---

## 📁 Projekto struktūra

```
projektas/
├── client/       # React frontend
├── server/       # Express backend
├── uploads/      # Įkeltos nuotraukos
└── README.md
```

---

## 🤩 Pagrindinės funkcijos

- ✅ Vartotojų registracija/prisijungimas
- 🔐 JWT autentifikacija
- 🦾 Sąskaitų kūrimas su nuotrauka
- ➕ Lėšų pridėjimas
- ➖ Lėšų nurašymas
- 🗑️ Sąskaitos šalinimas (jei likutis 0)
- 📦 MongoDB duomenų bazė

---

## 🚀 Paleidimas

1. ĮDIEGTI PRIKLAUSOMYBES:
```bash
npm install         # server
cd client && npm install
```

2. PALEISTI SERVERĮ:
```bash
npm run dev
```

3. PALEISTI KLIENTĄ:
```bash
cd client
npm run dev
```

---

## 📦 .env pavyzdys (server)

```
PORT=3001
MONGO_URI=mongodb://localhost:27017/bankdb
JWT_SECRET=slaptas_zodis
```

---

## 👤 Prisijungimo duomenys (pvz)

```
email: admin@example.com
password: 12345678
