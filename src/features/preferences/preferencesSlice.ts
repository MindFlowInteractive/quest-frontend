import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type NotificationSchedule = 'Daily' | 'Weekly' | 'Monthly' | 'Never';

interface PreferencesState {
  notificationSchedule: NotificationSchedule;
}

const ACCOUNT_SETTINGS_STORAGE_KEY = 'quest_account_settings';
const NOTIFICATION_SCHEDULE_STORAGE_KEY = 'quest_notification_schedule';
const DEFAULT_NOTIFICATION_SCHEDULE: NotificationSchedule = 'Daily';

const readScheduleFromAccountSettings = (): NotificationSchedule | null => {
  const raw = localStorage.getItem(ACCOUNT_SETTINGS_STORAGE_KEY);
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw) as { notifications?: { schedule?: unknown } };
    const schedule = parsed?.notifications?.schedule;
    if (schedule === 'Daily' || schedule === 'Weekly' || schedule === 'Monthly' || schedule === 'Never') {
      return schedule;
    }
  } catch {
    return null;
  }

  return null;
};

const readScheduleFromLocalStorage = (): NotificationSchedule | null => {
  const schedule = localStorage.getItem(NOTIFICATION_SCHEDULE_STORAGE_KEY);
  if (schedule === 'Daily' || schedule === 'Weekly' || schedule === 'Monthly' || schedule === 'Never') {
    return schedule;
  }
  return null;
};

const getInitialSchedule = (): NotificationSchedule => {
  return readScheduleFromAccountSettings() ?? readScheduleFromLocalStorage() ?? DEFAULT_NOTIFICATION_SCHEDULE;
};

const initialState: PreferencesState = {
  notificationSchedule: getInitialSchedule(),
};

export const preferencesSlice = createSlice({
  name: 'preferences',
  initialState,
  reducers: {
    setNotificationSchedule: (state, action: PayloadAction<NotificationSchedule>) => {
      state.notificationSchedule = action.payload;
      localStorage.setItem(NOTIFICATION_SCHEDULE_STORAGE_KEY, action.payload);
    },
    resetPreferences: (state) => {
      state.notificationSchedule = DEFAULT_NOTIFICATION_SCHEDULE;
    },
  },
});

export const { setNotificationSchedule, resetPreferences } = preferencesSlice.actions;
export default preferencesSlice.reducer;
