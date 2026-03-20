## 🗑️ Feat: Delete Account Confirmation Modal

### Description
Currently the **Delete** button in the Account tab uses a plain `window.confirm()` dialog. Replace it with a styled in-app confirmation modal that matches the app's design and clears all persisted user data on confirm.

### Tasks
- Add a `DeleteAccountModal` component in `src/components/modals/`
- Wire the modal to the **Delete** button in `src/components/AccountSettings.tsx` (Account tab, bottom of page)
- On confirm: clear `quest_token`, `quest_user`, and `quest_account_settings` from `localStorage`, then redirect to `/sign-in`
- On cancel: close the modal, no action taken

### Acceptance Criteria
- Clicking **Delete** opens the confirmation modal instead of a browser dialog
- Modal clearly states the action is permanent and cannot be undone
- Confirming deletion clears all local data and redirects to sign-in
- Cancelling closes the modal without any changes
- Modal is dismissible via the **Cancel** button or pressing **Escape**

### ETA
2–3 hrs
