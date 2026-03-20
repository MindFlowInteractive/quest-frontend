## ✨ Feat: Live GitHub Contributors Carousel

### Description
The `ContributorsSection` currently shows 4 hard-coded contributors with static local images.
Replace it with a **live feed from the GitHub API** and turn the strip into a **smooth, auto-scrolling carousel** that pauses on hover.

### Tasks
- Fetch real contributors from the GitHub API:
  `GET https://api.github.com/repos/MindFlowInteractive/quest-frontend/contributors`
- Map each contributor's `login`, `avatar_url`, and `html_url` from the response
- Replace the hard-coded `contributors` array and local asset imports with the fetched data
- Turn the contributor strip into an **infinite auto-scroll carousel** (CSS animation or JS scroll loop) that:
  - Scrolls continuously left by default
  - Pauses on mouse hover
  - Loops seamlessly (duplicate the list to avoid a jump at the end)
- Show each card with: GitHub avatar, username, and a link to their GitHub profile
- Add a loading skeleton while data is being fetched
- Handle API errors gracefully (fallback to an empty state or a static list)

### Files to Change
| File | Change |
|------|--------|
| `src/components/ContributorsSection.tsx` | Replace static data + add carousel logic |

### Acceptance Criteria
- Real GitHub contributors appear with their actual avatars and usernames
- Carousel scrolls automatically and loops without a visible jump
- Hovering pauses the scroll
- Clicking a card opens the contributor's GitHub profile in a new tab
- Loading and error states are handled
