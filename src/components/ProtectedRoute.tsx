import { Navigate } from 'react-router-dom';
import { SessionService } from '../services/SessionService';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

/**
 * Route wrapper that checks authentication status
 * Redirects to sign-in if user is not authenticated
 */
export function ProtectedRoute({ children }: ProtectedRouteProps) {
  if (!SessionService.isAuthenticated()) {
    return <Navigate to="/sign-in" replace />;
  }

  return <>{children}</>;
}
