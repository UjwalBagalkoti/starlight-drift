# ✨ Starlight Drift

A fast-paced, arcade-style survival game built with **Phaser 3** and vanilla JavaScript. Pilot a glowing starship through a field of hazards, collect stars, build combos, unlock increasingly challenging levels, and take on bosses.

> **Play locally:** open `Starlight Drift.html` in a modern browser. An internet connection is required to load Phaser from its CDN.

## 🎮 Gameplay

- **Collect stars** to earn points. Collect them quickly to build a combo multiplier.
- **Avoid enemies:** orange drones bounce around the arena, while purple hunters pursue the player.
- **Dash through danger:** use a short burst of speed and temporary invulnerability to escape hazards.
- **Use power-ups:** collect shields to absorb a hit or freeze effects to slow enemies.
- **Progress through levels:** enemy pressure increases as you advance. Boss encounters arrive every fifth level.
- **Chase high scores:** your best score and top-five scores are saved locally in your browser.

## 🕹️ Controls

| Action | Keyboard | Touch / Pointer |
|---|---|---|
| Move | Arrow keys or **W A S D** | Drag / hold a pointer toward the direction you want to move |
| Dash | **Space** | Tap the **DASH** button |
| Pause / resume | **P** or **Esc** | Tap the pause control |
| Mute / unmute | **M** | Tap the sound control |
| Start / restart | **Space** | Tap / click |

## ⚡ Features

- Arcade survival gameplay with score, lives, levels and combo tracking.
- Multiple enemy behaviours: bouncing drones and player-tracking hunters.
- Boss fights with health bars and projectile patterns.
- Collectible shield and freeze power-ups.
- Particle effects, screen shake, animated UI and generated sound effects.
- Procedurally drawn game sprites and backgrounds — no external image or audio asset files required.
- Responsive scaling for desktop and mobile-sized screens.
- Local high-score persistence using `localStorage`.

## 🧰 Built With

- **HTML5**
- **CSS3**
- **JavaScript**
- **Phaser 3.80.1** (loaded from cdnjs)
- **Web Audio API** for synthesized sound effects
- **Browser localStorage** for high scores

## 🚀 Run the Game

### Option 1: Open the HTML file

1. Clone or download this repository.
2. Open `Starlight Drift.html` in a modern web browser.
3. Start playing.

### Option 2: Run with a local development server

If you have Python installed, open a terminal in the project directory and run:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000/Starlight%20Drift.html
```

The game loads Phaser from cdnjs, so the browser needs internet access.

## 📁 Project Structure

```text
starlight-drift/
├── README.md
└── Starlight Drift.html
```

The game code, styles, scenes, procedural graphics and audio synthesis are contained in the single HTML file.

## 💾 Score Storage

The game stores the best score and top-five scores in the browser's `localStorage`. Scores are local to the browser and device; there is no online leaderboard or account system.

## 🔮 Possible Improvements

- Add new arenas, enemy types and boss patterns.
- Add optional difficulty and accessibility settings.
- Add online leaderboards and cloud score synchronisation.
- Add automated gameplay and device compatibility tests.

## 📄 License

No license has been specified for this repository yet. Please contact the repository owner before reusing or redistributing the code.
