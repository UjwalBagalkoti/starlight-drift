# ✨ Starlight Drift

[![Game smoke tests](https://github.com/UjwalBagalkoti/starlight-drift/actions/workflows/test.yml/badge.svg)](https://github.com/UjwalBagalkoti/starlight-drift/actions/workflows/test.yml)

A fast-paced, arcade-style survival game built with **Phaser 3.80.1** and vanilla JavaScript. Pilot a glowing starship through a field of hazards, collect stars, build combos, unlock increasingly challenging levels, and take on bosses.

## 🎮 Play

**[Play Starlight Drift](https://starlight-drift.vercel.app)**

The game is deployed on Vercel and works in modern desktop and mobile browsers. Phaser is loaded from cdnjs, so an internet connection is required.

## 🕹️ Gameplay

- **Collect stars** to earn points. Collect them quickly to build a combo multiplier.
- **Avoid enemies:** orange drones bounce around the arena, while purple hunters pursue the player.
- **Dash through danger:** use a short burst of speed and temporary invulnerability to escape hazards.
- **Use power-ups:** shields absorb a hit; freeze effects slow enemies.
- **Progress through levels:** enemy pressure increases as you advance. Boss encounters arrive every fifth level.
- **Chase high scores:** your best score and top-five scores are saved locally in your browser.

## 🎛️ Controls

| Action | Keyboard | Touch / Pointer |
|---|---|---|
| Move | Arrow keys or **W A S D** | Drag / hold toward the direction you want to move |
| Dash | **Space** | Tap the **DASH** button |
| Pause / resume | **P** or **Esc** | Tap the pause control |
| Mute / unmute | **M** | Tap the sound control |
| Start / restart | **Space** | Tap / click |

## ✨ Features

- Arcade survival gameplay with score, lives, levels and combo tracking.
- Multiple enemy behaviours: bouncing drones and player-tracking hunters.
- Boss fights with health bars and projectile patterns.
- Collectible shield and freeze power-ups.
- Particle effects, screen shake, animated UI and synthesized sound effects.
- Procedurally drawn game sprites and backgrounds; no separate image or audio asset files are required.
- Responsive scaling for desktop and mobile-sized screens.
- Local high-score persistence using browser `localStorage`.

## 🧰 Built With

- HTML5, CSS3 and vanilla JavaScript
- Phaser 3.80.1
- Web Audio API for synthesized sound effects
- Browser `localStorage` for local high scores
- Node.js built-in test runner for static smoke tests
- GitHub Actions for continuous integration
- Vercel for static hosting and deployment

## 🚀 Run Locally

Requirements: a modern browser and Python 3 (or another static file server). Internet access is needed to load Phaser from the CDN.

1. Clone the repository.
2. From the repository root, start a local server:

   ```bash
   python -m http.server 8000
   ```

3. Open [http://localhost:8000](http://localhost:8000).

## 🧪 Run Checks

Requires Node.js 20 or later.

```bash
npm test
```

The smoke tests check the HTML entry point, Phaser CDN reference, expected game scenes, control hooks, guarded local storage access and inline JavaScript syntax. They do not replace full browser gameplay or mobile-device testing.

GitHub Actions runs these checks on pushes to `main` and pull requests targeting `main`.

## 📁 Project Structure

```text
starlight-drift/
├── .github/
│   └── workflows/
│       └── test.yml
├── tests/
│   └── smoke.test.js
├── index.html
├── package.json
└── README.md
```

The game is intentionally kept in one self-contained HTML entry point for simple static hosting. The game logic, styles, scenes, procedural graphics and audio synthesis are in `index.html`.

## 💾 Score Storage and Privacy

The best score and top-five scores are stored in the current browser's `localStorage`. Scores are local to the browser and device. There is no account system, server-side leaderboard or score synchronisation.

## 🔭 Future Improvements

- Add more arenas, enemy types and boss attack patterns.
- Add difficulty and accessibility settings.
- Add full browser-based gameplay tests and automated mobile viewport checks.
- Consider online leaderboards with server-side score validation.

## 📄 License

No license has been added. All rights remain with the repository owner unless a license is added. Please contact the owner before reusing or redistributing the code.
