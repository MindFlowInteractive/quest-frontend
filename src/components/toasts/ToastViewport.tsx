import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Toast from './Toast';
import { dismissNotification } from '../../features/notifications/notificationsSlice';
import type { NotificationType, ToastNotification } from '../../features/notifications/notificationsSlice';

const shouldShowWhenScheduleNever = (type: NotificationType, critical: boolean) => {
  return type === 'error' || critical;
};

export default function ToastViewport() {
  const dispatch = useAppDispatch();
  const notifications = useAppSelector((s) => s.notifications.items);
  const schedule = useAppSelector((s) => s.preferences.notificationSchedule);

  useEffect(() => {
    const timers: number[] = [];

    for (const n of notifications) {
      if (schedule === 'Never' && !shouldShowWhenScheduleNever(n.type, n.critical)) {
        dispatch(dismissNotification(n.id));
        continue;
      }

      if (n.durationMs > 0) {
        const t = window.setTimeout(() => dispatch(dismissNotification(n.id)), n.durationMs);
        timers.push(t);
      }
    }

    return () => {
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, [dispatch, notifications, schedule]);

  const visible =
    schedule === 'Never'
      ? notifications.filter((n: ToastNotification) => shouldShowWhenScheduleNever(n.type, n.critical))
      : notifications;

  if (visible.length === 0) return null;

  return (
    <div
      className="fixed top-4 right-4 z-[9999] flex flex-col gap-3 items-end"
      aria-label="Notifications"
    >
      {visible
        .slice()
        .sort((a: ToastNotification, b: ToastNotification) => a.createdAt - b.createdAt)
        .map((n: ToastNotification) => (
          <Toast key={n.id} notification={n} onDismiss={(id) => dispatch(dismissNotification(id))} />
        ))}
    </div>
  );
}
