import { clearNotifications } from '../features/notifications/notificationsSlice';
import { resetPreferences } from '../features/preferences/preferencesSlice';
import { queryClient } from '../lib/queryClient';
import { store } from '../store';

const LOCAL_STORAGE_KEYS = [
  'quest_token',
  'quest_user',
  'quest_user_profile',
  'quest_account_settings',
  'quest_notification_schedule',
] as const;

const SESSION_STORAGE_KEYS = ['quest_token', 'quest_user'] as const;

const removeKeys = (
  storage: Pick<Storage, 'removeItem'> | undefined,
  keys: readonly string[],
) => {
  if (!storage) {
    return;
  }

  for (const key of keys) {
    storage.removeItem(key);
  }
};

export function clearSession() {
  const localStorageRef =
    typeof window !== 'undefined' ? window.localStorage : undefined;
  const sessionStorageRef =
    typeof window !== 'undefined' ? window.sessionStorage : undefined;

  removeKeys(localStorageRef, LOCAL_STORAGE_KEYS);
  removeKeys(sessionStorageRef, SESSION_STORAGE_KEYS);

  queryClient.clear();
  store.dispatch(resetPreferences());
  store.dispatch(clearNotifications());
}
