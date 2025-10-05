# 🧩 Memory Card Game

A fun and interactive Memory Card Game built with React.
Your goal is simple — click on each Pokémon card only once to earn points!
The cards shuffle after every click, testing both your memory and focus.

---

## 🚀 Features

- Interactive Gameplay — click unique cards to score points.
- Automatic Shuffle — cards reshuffle after every click.
- Score Tracking — keeps track of current and best scores.
- Dark Themed UI — modern and elegant interface with dark background.
- Data Fetching with useEffect — loads Pokémon cards dynamically using the PokeAPI.

---

## 🛠️ Built With

- React (Vite) – UI framework
- CSS – custom styling
- PokeAPI – for fetching Pokémon card images

---

## 📂 Folder Structure

```css
memory-card-game/
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Card.jsx
│   │   └── Modal.jsx
│   │
│   ├── index.css
│   │── App.css
│   │
│   │── main.css
│   ├── App.jsx
│   └── index.js
│
└── package.json
```

---

## 🧠 How It Works

- When the app first loads, useEffect runs once to fetch Pokémon data.
- Clicking a card triggers a score check:
- If the card hasn’t been clicked before → +1 to current score.
- If it’s already been clicked → score resets to 0.
- The cards shuffle after every click to make memorizing harder.
- The best score persists until you refresh or restart the game.

---

## ⚙️ Installation and Setup

1. Clone the repository:

```bash
git clone https://github.com/hencci/memory-card.git
cd memory-card
```

2. Install dependencies:

```bash
npm install
```

3. Run the app locally

```bash
npm run dev
```

4. Open your browser and visit local host

---

## Author

[Henry Moses](https://github.com/hencci)
📍 Built for learning React and improving state management logic.

---

## License

This project is open source under the MIT License. <br>
You’re free to modify and distribute it for personal or educational use.
