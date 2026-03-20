## 🔔 Feat: Functional Notification System (Toast + Redux)

### Description
The notification infrastructure in Quest is currently a stub — `AccountSettings` exposes a schedule dropdown (Daily / Weekly / Monthly / Never) but no actual notifications are ever shown to the user.

This issue covers building a real, app-wide notification system: a Redux slice that holds a queue of notifications, a reusable `Toast` component to display them, and wiring the existing schedule preference into that system so the right events surface at the right time.

The project already uses **Redux Toolkit** (`src/store.ts` + `src/components/GameMode/gameSliceStore.ts`) — follow that pattern rather than adding Zustand.

### Tasks
- [ ] Create a `notificationSlice` Redux slice (`src/store/notificationSlice.ts`) with actions: `addNotification`, `dismissNotification`, `clearAll`
- [ ] Define a `Notification` type (`id`, `type`: `"success" | "error" | "info" | "warning"`, `message`, `duration?`)
- [ ] Build a `<NotificationToast />` component (`src/components/notifications/NotificationToast.tsx`) that reads from the Redux store and renders stacked toasts with auto-dismiss
- [ ] Mount `<NotificationToast />` in the root layout so it is visible on every page
- [ ] Wire the schedule preference from `AccountSettings` so that the selected value (Daily / Weekly / Monthly / Never) gates which in-app events emit notifications
- [ ] Dispatch sample notifications for key game events (round complete, level up, streak milestone) to validate the pipeline end-to-end
- [ ] Persist the schedule preference via `localStorage` (it is already stored under `quest_account_settings` — keep that key)

### Acceptance Criteria
- Notifications appear as dismissible toast cards in a consistent screen position (e.g. top-right)
- Each toast auto-dismisses after a configurable duration (default: 4 s)
- Selecting "Never" in Notification Schedule suppresses all non-critical notifications
- Notification state lives in the Redux store and is accessible from any component via `useAppSelector`
- No console errors; `npm run lint` and `npm run build` pass clean

### Key Files

| File | Notes |
|---|---|
| `src/store.ts` | Register the new `notificationSlice` reducer here |
| `src/components/AccountSettings.tsx` | Schedule dropdown + `handleNotificationChange` already exist (lines ~400-420) |
| `src/hooks.ts` | Typed `useAppSelector` / `useAppDispatch` hooks — use these |
| `src/components/GameMode/gameSliceStore.ts` | Reference implementation for a Redux Toolkit slice |
| `src/pages/Gameplay.tsx` | Contains a raw `alert()` call to replace with a dispatched notification |

### ETA
4–6 hrs
