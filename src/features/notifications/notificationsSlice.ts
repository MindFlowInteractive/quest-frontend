import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type NotificationType = 'success' | 'info' | 'warning' | 'error';

export interface ToastNotification {
  id: string;
  type: NotificationType;
  title?: string;
  message: string;
  createdAt: number;
  durationMs: number;
  critical: boolean;
}

interface NotificationsState {
  items: ToastNotification[];
}

const initialState: NotificationsState = {
  items: [],
};

const generateId = () => {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
};

export interface AddNotificationPayload {
  type?: NotificationType;
  title?: string;
  message: string;
  durationMs?: number;
  critical?: boolean;
}

export const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: {
      reducer: (state, action: PayloadAction<ToastNotification>) => {
        state.items.push(action.payload);
      },
      prepare: (payload: AddNotificationPayload) => {
        return {
          payload: {
            id: generateId(),
            type: payload.type ?? 'info',
            title: payload.title,
            message: payload.message,
            createdAt: Date.now(),
            durationMs: payload.durationMs ?? 4000,
            critical: payload.critical ?? false,
          } satisfies ToastNotification,
        };
      },
    },
    dismissNotification: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((n) => n.id !== action.payload);
    },
    clearNotifications: (state) => {
      state.items = [];
    },
  },
});

export const { addNotification, dismissNotification, clearNotifications } = notificationsSlice.actions;
export default notificationsSlice.reducer;
