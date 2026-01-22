import { jwtDecode } from "jwt-decode";

export interface GoogleUser {
  email: string;
  name: string;
  picture: string;
  id: string;
}

export interface AuthServiceResponse {
  success: boolean;
  user?: GoogleUser;
  error?: string;
}

export const GoogleAuthService = {
  async handleSignIn(credential: string): Promise<AuthServiceResponse> {
    try {
      if (!credential) {
        return { success: false, error: "No ID token received from Google." };
      }

      const decoded: any = jwtDecode(credential);
      
      // Security Check: Is the token expired?
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        return { success: false, error: "The Google session has expired. Please sign in again." };
      }

      return {
        success: true,
        user: {
          email: decoded.email,
          name: decoded.name,
          picture: decoded.picture,
          id: decoded.sub
        }
      };
    } catch (error) {
      console.error("JWT Decode Error:", error);
      return { success: false, error: "Failed to process the login token. Please try again." };
    }
  },

  logout() {
    localStorage.removeItem("quest_user");
    window.location.reload();
  }
};