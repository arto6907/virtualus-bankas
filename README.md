# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# 💻 Virtualus Bankas – kliento (React) pusė

Tai yra **„Virtualus bankas“** React aplikacijos pusė, sukurta su Vite. Ji leidžia vartotojui:
- prisijungti,
- sukurti sąskaitą (su nuotrauka),
- pridėti arba nurašyti lėšas,
- ištrinti sąskaitą.

Visi veiksmai vykdomi per REST API, kurią valdo serverio pusė.

---

## 📁 Projekto struktūra (sutrumpinta)

```
client/
├── public/               → Vieši failai (favicon, bg, kt.)
├── src/
│   ├── components/       → Mygtukai, header, footer, formos
│   ├── context/          → React Context (AuthContext)
│   ├── pages/            → Puslapiai (Home, Login, Admin, NewAccount, kt.)
│   ├── App.jsx           → Maršrutai su React Router
│   └── main.jsx          → Pagrindinis failas
├── .env                 → API URL konfigūracija
└── package.json         → Priklausomybės, script'ai
```

---

## 🔧 Paleidimas lokaliai

### 1. Įįdiegti priklausomybes
```bash
npm install
```

### 2. `.env` failas
```env
VITE_API_URL=http://localhost:3001/api
```

### 3. Paleisti React aplikaciją
```bash
npm run dev
```

Aplikacija bus pasiekiama adresu:
**http://localhost:5173** (Vite default)

---

## 📦 Naudojamos technologijos

- **React 18+**
- **React Router**
- **Bootstrap 5**
- **Context API** (autentifikacijai)
- **Axios** (API užklausoms)

---

## 🔐 Puslapiai ir funkcijos

| Kelias               | Komponentas         | Aprašymas                         |
|----------------------|----------------------|---------------------------------------|
| `/`                 | `Home.jsx`          | Titulinis su fono nuotrauka           |
| `/login`            | `Login.jsx`         | Prisijungimo forma                    |
| `/accounts`         | `AccountsList.jsx`  | Visos sąskaitos, veiksmai           |
| `/accounts/new`     | `NewAccount.jsx`    | Naujos sąskaitos forma (su nuotrauka) |
| `/accounts/add/:id` | `AddFunds.jsx`      | Pridėti lėšų sąskaitai          |
| `/accounts/withdraw/:id` | `WithdrawFunds.jsx` | Nurašyti lėšas              |

---

## 🖼️ Įkeliamas failas

Naujos paskyros forma leidžia įkelti vartotojo paso ar ID kopiją per `input type="file"`. Nuotrauka saugoma serverio `/uploads` aplanke.

---

## 👨‍💻 Autorius

Baigiamojo darbo studentas: **[Artūras Mikalkėnas]**

Jei  reikės pridėti logotipo, temos ar responsyvaus dizaino paaiškinimą, parašyk – papildysiu.
