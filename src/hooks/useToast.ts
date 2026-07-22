import { useCallback } from 'react';
import { useAppDispatch } from '../hooks';
import { addNotification } from '../features/notifications/notificationsSlice';

export const useToast = () => {
  const dispatch = useAppDispatch();

  const addToast = useCallback(
    (message: string, type: 'success' | 'error' | 'info' | 'warning' = 'info') => {
      dispatch(addNotification({ type, message }));
    },
    [dispatch],
  );

  return { addToast };
};
