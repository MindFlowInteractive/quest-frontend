import { X } from 'lucide-react';
import type { ToastNotification } from '../../features/notifications/notificationsSlice';

interface ToastProps {
  notification: ToastNotification;
  onDismiss: (id: string) => void;
}

const typeStyles: Record<ToastNotification['type'], { border: string; title: string }> = {
  success: { border: 'border-l-4 border-l-emerald-500', title: 'text-emerald-200' },
  info: { border: 'border-l-4 border-l-sky-500', title: 'text-sky-200' },
  warning: { border: 'border-l-4 border-l-amber-500', title: 'text-amber-200' },
  error: { border: 'border-l-4 border-l-red-500', title: 'text-red-200' },
};

export default function Toast({ notification, onDismiss }: ToastProps) {
  const styles = typeStyles[notification.type];

  return (
    <div
      role={notification.type === 'error' ? 'alert' : 'status'}
      aria-live={notification.type === 'error' ? 'assertive' : 'polite'}
      className={`w-[min(420px,calc(100vw-2rem))] bg-[#1B1C1D] text-white shadow-xl rounded-lg ${styles.border}`}
    >
      <div className="p-4 flex gap-3 items-start">
        <div className="flex-1 min-w-0">
          {(notification.title ?? '').length > 0 && (
            <div className={`font-semibold leading-5 ${styles.title}`}>{notification.title}</div>
          )}
          <div className="text-sm text-[#D1D5DB] leading-5 break-words">{notification.message}</div>
        </div>

        <button
          type="button"
          onClick={() => onDismiss(notification.id)}
          aria-label="Dismiss notification"
          className="shrink-0 text-[#9CA3AF] hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
