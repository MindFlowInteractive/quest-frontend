const API_BASE = import.meta.env.VITE_BACKEND_API_URL || "";

export interface SignInCredentials {
  email: string;
  password: string;
}

export interface AuthUser {
  id: string;
  email: string;
  name?: string;
  picture?: string;
}

export interface SignInResponse {
  success: boolean;
  user?: AuthUser;
  token?: string;
  error?: string;
}

export const AuthService = {
  async signIn(credentials: SignInCredentials): Promise<SignInResponse> {
    try {
      if (!API_BASE) {
        return {
          success: false,
          error: "API URL is not configured.",
        };
      }

      const res = await fetch(`${API_BASE}/auth/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        return {
          success: false,
          error:
            data?.message ||
            data?.error ||
            "Invalid email or password. Please try again.",
        };
      }

      if (data.token) {
        localStorage.setItem("quest_token", data.token);
      }
      if (data.user) {
        localStorage.setItem("quest_user", JSON.stringify(data.user));
      }

      return {
        success: true,
        user: data.user,
        token: data.token,
      };
    } catch (err) {
      console.error("AuthService.signIn error:", err);
      return {
        success: false,
        error: "Network error. Please check your connection and try again.",
      };
    }
  },

  logout() {
    localStorage.removeItem("quest_token");
    localStorage.removeItem("quest_user");
  },
};
