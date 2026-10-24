# Water Quest

A student-built charity: water inspired prototype using HTML, CSS and plain JavaScript. No installation or build step is needed. Open index.html locally to play.

## Rules
- Press Start to begin a 30-second round.
- Click yellow jerry cans for +1 point.
- Avoid dirty water targets, which subtract 2 points (score cannot go below zero).
- Targets move every 900 milliseconds.
- Reach 15 points before the timer expires to win.
- Reset clears the score, timer, targets, and celebration. Play again starts a fresh round.
- Keyboard users can Tab through targets and press Enter or Space.

## LevelUps
1. Obstacle that reduces the player's score.
2. Reset button.
3. Confetti celebration on winning, with reduced-motion preferences respected.

## Files
- index.html: semantic structure, score, timer and controls.
- style.css: responsive layout and CSS jerry can illustration.
- script.js: random targets, score updates, countdown, game state and celebration.

## Publish on GitHub Pages
1. Open repository Settings > Pages.
2. Select Deploy from a branch.
3. Choose main and / (root), then Save.
4. Wait for GitHub to publish, then use the Visit site link on that page.
5. Test the live link in a private/incognito window before submitting.

## Scope
This prototype has no accounts, leaderboard, backend, or payment processing. Points are fictional and do not represent donations or actual water delivered. This is not an official charity: water game.

## Validation
JavaScript syntax and game logic were checked for scoring, penalty floor, reset, timer cleanup, win state, confetti creation, expired clicks, and restart. Visual rendering and live GitHub Pages testing still need to be checked in a browser.
