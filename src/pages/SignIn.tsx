"use client";

import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import type { CredentialResponse } from '@react-oauth/google';
import { GoogleAuthService } from '../services/GoogleAuthService';
import type { GoogleUser } from '../services/GoogleAuthService';

export default function SignInPage() {
  const [user, setUser] = useState<GoogleUser | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || "";

  const onSuccess = async (response: CredentialResponse) => {
    setIsLoading(true);
    setError(null);

    try {
      if (response.credential) {
        const result = await GoogleAuthService.handleSignIn(response.credential);
        
        if (result.success && result.user) {
          setUser(result.user);
        } else {
          setError(result.error || "Authentication failed.");
        }
      }
    } catch (err) {
      setError("An unexpected system error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  const onError = () => {
    setError("Google Sign-In was interrupted or failed. Please check your connection.");
    setIsLoading(false);
  };

  return (
    <div style={containerStyle}>
      <GoogleOAuthProvider clientId={clientId}>
        <div style={cardStyle}>
          {user ? (
            <div style={{ textAlign: 'center' }}>
              <img src={user.picture} alt="Profile" referrerPolicy="no-referrer" style={profileImgStyle} />
              <h2>Welcome, {user.name}</h2>
              <p style={{ color: '#666' }}>{user.email}</p>
              <button onClick={() => setUser(null)} style={buttonStyle}>Sign Out</button>
            </div>
          ) : (
            <div>
              <h1 style={{ marginBottom: '10px' }}>Quest App</h1>
              <p style={{ color: '#666', marginBottom: '20px' }}>Secure Login</p>

              {error && (
                <div style={errorBannerStyle}>
                  <strong>Error:</strong> {error}
                </div>
              )}

              <div style={{ opacity: isLoading ? 0.5 : 1, pointerEvents: isLoading ? 'none' : 'auto' }}>
                <GoogleLogin 
                  onSuccess={onSuccess} 
                  onError={onError}
                  useOneTap={true}
                  use_fedcm_for_prompt={false}
                  theme="filled_blue"
                  shape="pill"
                />
              </div>

              {isLoading && <p style={{ marginTop: '10px', fontSize: '12px', color: '#4285F4' }}>Verifying account...</p>}
            </div>
          )}
        </div>
      </GoogleOAuthProvider>
    </div>
  );
}

// --- Simple Inline Styles for Clarity ---

const containerStyle: React.CSSProperties = {
  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
  height: '100vh', backgroundColor: '#f0f2f5', fontFamily: 'sans-serif'
};

const cardStyle: React.CSSProperties = {
  padding: '40px', backgroundColor: '#fff', borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)', textAlign: 'center', width: '350px'
};

const errorBannerStyle: React.CSSProperties = {
  backgroundColor: '#fff1f0', color: '#d93025', padding: '10px',
  borderRadius: '6px', marginBottom: '15px', fontSize: '13px', border: '1px solid #ffccc7'
};

const profileImgStyle: React.CSSProperties = {
  borderRadius: '50%', width: '80px', marginBottom: '15px', border: '3px solid #4285F4'
};

const buttonStyle: React.CSSProperties = {
  marginTop: '20px', padding: '10px 20px', cursor: 'pointer',
  borderRadius: '6px', border: '1px solid #ddd', backgroundColor: '#fff'
};