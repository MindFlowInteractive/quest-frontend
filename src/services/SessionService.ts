import { NavigateFunction } from 'react-router-dom';
import { clearSession } from '../session/clearSession';

export interface AuthUser {
  id: string;
  email: string;
  name?: string;
  picture?: string;
}

export type StoredUser = AuthUser;

const TOKEN_KEY = 'quest_token';
const USER_KEY = 'quest_user';

/**
 * Centralized session management service
 * Provides unified API for token and user data storage across all auth flows
 */
export const SessionService = {
  /**
   * Store authentication token
   */
  setToken(token: string): void {
    try {
      localStorage.setItem(TOKEN_KEY, token);
    } catch (err) {
      console.error('SessionService: Failed to store token', err);
    }
  },

  /**
   * Retrieve authentication token
   */
  getToken(): string | null {
    try {
      return localStorage.getItem(TOKEN_KEY);
    } catch (err) {
      console.error('SessionService: Failed to retrieve token', err);
      return null;
    }
  },

  /**
   * Clear authentication token
   */
  clearToken(): void {
    try {
      localStorage.removeItem(TOKEN_KEY);
    } catch (err) {
      console.error('SessionService: Failed to clear token', err);
    }
  },

  /**
   * Store user data
   */
  setUser(user: StoredUser): void {
    try {
      localStorage.setItem(USER_KEY, JSON.stringify(user));
    } catch (err) {
      console.error('SessionService: Failed to store user data', err);
    }
  },

  /**
   * Retrieve user data
   */
  getUser(): StoredUser | null {
    try {
      const data = localStorage.getItem(USER_KEY);
      return data ? JSON.parse(data) : null;
    } catch (err) {
      console.error('SessionService: Failed to retrieve user data', err);
      return null;
    }
  },

  /**
   * Clear user data
   */
  clearUser(): void {
    try {
      localStorage.removeItem(USER_KEY);
    } catch (err) {
      console.error('SessionService: Failed to clear user data', err);
    }
  },

  /**
   * Check if user is authenticated
   */
  isAuthenticated(): boolean {
    return this.getToken() !== null && this.getUser() !== null;
  },

  /**
   * Unified logout: clears session and redirects
   */
  logout(navigate: NavigateFunction): void {
    clearSession();
    navigate('/sign-in', { replace: true });
  },

  /**
   * Restore session from storage (useful on app initialization)
   */
  restoreSession(): { token: string | null; user: StoredUser | null } {
    return {
      token: this.getToken(),
      user: this.getUser(),
    };
  },
};
