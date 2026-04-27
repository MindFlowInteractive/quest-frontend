import { Navigate, useLocation } from "react-router-dom";
import type { ReactNode } from "react";

const TOKEN_KEY = "quest_token";

const readToken = (): string | null => {
  if (typeof window === "undefined") {
    return null;
  }

  return (
    window.localStorage.getItem(TOKEN_KEY) ||
    window.sessionStorage.getItem(TOKEN_KEY)
  );
};

interface ProtectedRouteProps {
  children: ReactNode;
  redirectTo?: string;
}

const ProtectedRoute = ({
  children,
  redirectTo = "/sign-in",
}: ProtectedRouteProps) => {
  const location = useLocation();
  const token = readToken();

  if (!token) {
    return (
      <Navigate to={redirectTo} replace state={{ from: location.pathname }} />
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
