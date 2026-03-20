# 🎮 Issue: Implement Game Settings Tab UI

| Field | Detail |
|---|---|
| **Status** | 🟡 In Progress — proposed UI merged, wiring & polish needed |
| **Estimated ETA** | 3–5 days |
| **Difficulty** | Beginner–Intermediate |
| **Labels** | `enhancement` · `good first issue` · `UI` |

---

## Background

The **Settings** page (`/settings`) has three tabs — *Profile*, *Account*, and **Game setting**.  
Profile and Account tabs are fully implemented.  
The **Game setting** tab currently shows an empty placeholder:

> *"Game specific settings will appear here."*

A proposed UI has been scaffolded (see the screenshot below) so contributors have a concrete surface to build against.

**Current state (before):**

![Before](https://github.com/user-attachments/assets/7df66205-525a-4e5c-9b63-5b0c44b6880c)

**Proposed UI (after):**

![After](https://github.com/user-attachments/assets/c1689ef8-b88c-442c-961c-a271c3d069f0)

---

## What Needs to Be Done

The proposed Game Settings UI is already present in the codebase as a **static mock** — all toggles and selectors render but are not yet wired to any real game logic or persisted beyond `localStorage`.

Contributors should:

1. **Review the proposed UI** in `src/components/AccountSettings.tsx` (the `activeTab === 'Game setting'` block).
2. **Connect settings to real game behaviour** where possible — e.g. passing `difficulty` and `preferredMode` down to the game engine context/hook.
3. **Polish layout & interactions** to match the existing Account tab style (spacing, hover states, focus rings).
4. **Add/extend types** in `src/data/gameModes.ts` if new game-mode metadata is required.
5. **Write a smoke test** (or expand existing tests) that confirms the five sections render correctly.

---

## Proposed Sections

| # | Section | Controls |
|---|---|---|
| 1 | **Gameplay** | Preferred Game Mode dropdown · Difficulty picker (Easy / Medium / Hard) |
| 2 | **Timer** | Enable Countdown Timer toggle · Time Warning Alert toggle |
| 3 | **Lifelines** | Call a Friend · 50:50 · Ask the Audience — individual toggles |
| 4 | **Display** | Auto-advance toggle · Show Answer Feedback toggle · Animation Speed picker |
| 5 | **Accessibility** | Reduce Motion · Large Text Mode toggles |

A **Reset to Defaults** button at the bottom restores all values in one click.

---

## Key Files

| File | Purpose |
|---|---|
| `src/components/AccountSettings.tsx` | Main settings page — Game setting tab lives here |
| `src/data/gameModes.ts` | Game mode definitions (id, name, questionCount, etc.) |
| `src/components/gameplay/GameHeader.tsx` | Consumes lifeline & mode state in the game header |

---

## Acceptance Criteria

- [ ] All five sections are visible when the **Game setting** tab is active.
- [ ] Selecting a difficulty or game mode persists across page refreshes (via `localStorage`).
- [ ] Toggling a lifeline off removes it from the game header UI.
- [ ] **Reset to Defaults** restores all controls to their initial values.
- [ ] No TypeScript or ESLint errors (`npm run lint` passes).
- [ ] `npm run build` succeeds.

---

## Getting Started

```bash
# 1. Fork & clone
git clone https://github.com/MindFlowInteractive/quest-frontend.git
cd quest-frontend

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev

# 4. Open the settings page
# http://localhost:5173/settings  →  click "Game setting" tab
```

Open a PR against `main` when ready. Reference this issue in your PR description.

---

> **Questions?** Open a comment on the issue or ping the team in the project Discord.
