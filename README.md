# Fintrack 💰

A personal finance tracker built with React — register transactions, filter by category, and track your balance in real time.

🔗 **Live demo:** [fintrack-phi-gilt.vercel.app](https://fintrack-phi-gilt.vercel.app)

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)

---

## Features

- Register income and expense transactions
- Filter transactions by category
- Real-time summary of balance, income, and expenses
- Data persistence with localStorage
- Dark mode interface

## Tech Stack

- **React** — component-based UI
- **Vite** — fast development and build tooling
- **CSS** — custom styling with dark mode
- **localStorage** — client-side data persistence

## Component Structure

| Component | Responsibility |
|---|---|
| `ResumoCard` | Reusable summary cards (balance, income, expenses) |
| `Filtros` | Category filter with active state |
| `ListaTransacoes` | Filtered transaction list |
| `ItemTransacao` | Individual transaction item |
| `ModalNovaTransacao` | New transaction form modal |

## Running Locally

```bash
npm install
npm run dev
```

## What I Learned

- Thinking in components and managing state with React hooks
- Lifting state up to share data between sibling components
- Persisting application state with localStorage
- Building reusable components with props
