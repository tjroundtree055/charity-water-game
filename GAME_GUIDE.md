# Water Quest

A charity: water inspired student game using HTML, CSS, and plain JavaScript.

Play: https://tjroundtree055.github.io/charity-water-game/

## Rules
Choose a difficulty before pressing Start.

| Mode | Goal | Time | Target interval |
| --- | --- | --- | --- |
| Easy | 10 points | 35 seconds | 1.2 seconds |
| Normal | 15 points | 30 seconds | 0.9 seconds |
| Hard | 20 points | 25 seconds | 0.65 seconds |

Collect yellow jerry cans for +1. Dirty water subtracts 2; scores stay at zero or higher. Collected targets disappear immediately. Reach the goal before time expires to win. Reset clears the round and timers. Keyboard players can Tab to targets and press Enter or Space.

## Project 6 features
- Three difficulty modes update the goal, countdown, target speed, progress bar, and instructions together.
- Footer links to charity: water and its donation page.
- Brand-inspired font stack and yellow jerry cans; Georgia mission text.
- An array of milestone messages triggers at one-third, halfway, and two points before the goal, once per milestone per round.
- Confetti on winning, with reduced-motion support.
- Optional sound effects are not included.

## Run locally
Open index.html in a browser. There are no dependencies or build steps.

## Checks
JavaScript syntax and deterministic game checks passed for all modes, scoring, penalty floor, target removal, milestones, win, reset, timeout, and restart. The published page was checked in a browser, including playing an Easy round through to a win.

This is not an official charity: water game. Points are for play only and do not represent donations or water delivered.
