# 📚 Spanish Flashcards

A clean, modern flashcard app for learning everyday **Spanish** phrases with **English** and **Chinese** translations. Built with Next.js 14, React, TypeScript, and Tailwind CSS.

---

## ✨ Features

- **24 curated phrases** across 6 categories: Greeting, Family, Food, Polite, Daily Life, Small Talk
- **3D card flip animation** — tap a card to reveal English & Chinese translations
- **Pronunciation guide** shown on the front of each card
- **Category filters** to study one topic at a time
- **Favorites** — heart any card and filter to favorites; saved in `localStorage`
- **Mobile-friendly** responsive grid layout
- Modern purple accent colors throughout

---

## 🗂 Project Structure

```
spanish-flashcards/
├── src/
│   ├── app/
│   │   ├── globals.css       # Tailwind base styles
│   │   ├── layout.tsx        # Root layout + Google Fonts
│   │   └── page.tsx          # Main page (filter logic + grid)
│   ├── components/
│   │   ├── FlashCard.tsx     # Flip card with front/back
│   │   ├── CategoryFilter.tsx# Filter buttons + favorites toggle
│   │   ├── Hero.tsx          # Homepage header
│   │   └── StatsBar.tsx      # "Showing X of 24" stats
│   ├── data/
│   │   └── phrases.ts        # 24 mock phrases dataset
│   ├── hooks/
│   │   └── useFavorites.ts   # localStorage favorites hook
│   └── types/
│       └── index.ts          # Phrase & Category TypeScript types
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.17 or later  
- **npm**, **yarn**, or **pnpm**

### Installation

```bash
# 1. Clone or download the project
git clone https://github.com/yourname/spanish-flashcards.git
cd spanish-flashcards

# 2. Install dependencies
npm install
# or
yarn install

# 3. Start the development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 🧩 Adding More Phrases

Edit `src/data/phrases.ts` and add a new object to the `phrases` array:

```ts
{
  id: "g5",                           // unique id
  spanish: "¿Cómo te llamas?",
  english: "What's your name?",
  chinese: "你叫什么名字？",
  category: "Greeting",               // must match a Category type
  pronunciation: "KOH-moh teh YAH-mas",
}
```

Valid categories: `"Greeting" | "Family" | "Food" | "Polite" | "Daily Life" | "Small Talk"`

---

## 🎨 Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 14](https://nextjs.org/) | App router, SSR/SSG |
| [React 18](https://react.dev/) | UI components |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [Google Fonts](https://fonts.google.com/) | Playfair Display + Lato |

---

## 📱 Browser Support

Works in all modern browsers. The 3D card flip uses CSS `transform-style: preserve-3d` and `backface-visibility: hidden`, both widely supported.

---

## 📄 License

MIT — free to use and adapt.
