import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { AuthService } from "../../services/AuthService";
import type { SignInCredentials } from "../../services/AuthService";
import logiquestLogo from "../../assets/logiquest (2).png";
import googleIcon from "../../assets/google.png";
import appleIcon from "../../assets/apple.png";
import microsoftIcon from "../../assets/microsoft.png";
import arrowLeft from "../../assets/arrow-left.svg";

const ACCENT_COLOR = "#033330";
const ACCENT_LIGHT = "#0d4d4a";
const BORDER_COLOR = "rgba(3, 51, 48, 0.6)";

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remindLater, setRemindLater] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  const signInMutation = useMutation({
    mutationFn: (credentials: SignInCredentials) =>
      AuthService.signIn(credentials),
    onSuccess: (data) => {
      if (data.success) {
        setValidationError(null);
        navigate("/", { replace: true });
      } else {
        setValidationError(data.error ?? "Sign-in failed.");
      }
    },
    onError: () => {
      setValidationError("Something went wrong. Please try again.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      setValidationError("Please enter your email address.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setValidationError("Please enter a valid email address.");
      return;
    }
    if (!password) {
      setValidationError("Please enter your password.");
      return;
    }

    signInMutation.mutate({ email: trimmedEmail, password });
  };

  const isLoading = signInMutation.isPending;
  const errorMessage = validationError ?? signInMutation.data?.error ?? null;

  return (
    <div
      className="min-h-screen bg-black flex flex-col"
      style={{ fontFamily: "Prompt, sans-serif" }}
    >
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-5 md:px-10">
        <Link to="/" className="shrink-0">
          <img
            src={logiquestLogo}
            alt="LogiQuest"
            className="h-10 w-auto object-contain"
          />
        </Link>
        <Link
          to="/"
          className="flex items-center gap-2 text-[#757575] cursor-pointer transition-colors"
        >
          <img src={arrowLeft} alt="" className="w-5 h-5" />
          <span className="uppercase text-sm font-medium">Back</span>
        </Link>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 pb-12">
        <div className="w-full max-w-md">
          <h1
            className="text-center text-2xl font-medium mb-8"
            style={{ color: ACCENT_LIGHT }}
          >
            Sign in with
          </h1>

          {/* Social login buttons */}
          <div className="flex flex-col gap-3 mb-6 w-[85%] max-w-sm mx-auto">
            <button
              type="button"
              className="w-full flex items-center justify-between px-4 py-3 rounded-[100px] border-4 bg-transparent transition-colors hover:bg-white/5"
              style={{ borderColor: BORDER_COLOR, color: "#0A746D" }}
            >
              <span>Google an account</span>
              <img src={googleIcon} alt="" className="w-6 h-6" />
            </button>
            <button
              type="button"
              className="w-full flex items-center justify-between px-4 py-3 rounded-[100px] border-4 bg-transparent transition-colors hover:bg-white/5"
              style={{ borderColor: BORDER_COLOR, color: "#0A746D" }}
            >
              <span>Apple an account</span>
              <img src={appleIcon} alt="" className="w-6 h-6" />
            </button>
            <button
              type="button"
              className="w-full flex items-center justify-between px-4 py-3 rounded-[100px] border-4 bg-transparent transition-colors hover:bg-white/5"
              style={{ borderColor: BORDER_COLOR, color: "#0A746D" }}
            >
              <span>Microsoft an account</span>
              <img src={microsoftIcon} alt="" className="w-6 h-6" />
            </button>
          </div>

          {/* Or separator */}
          <div className="flex items-center gap-4 my-6 w-full">
            <div
              className="flex-1 shrink-0 ml-3"
              style={{ backgroundColor: BORDER_COLOR, height: "4px" }}
            />
            <span
              className="text-sm font-medium shrink-0"
              style={{ color: ACCENT_LIGHT }}
            >
              or
            </span>
            <div
              className="flex-1 shrink-0 mr-3"
              style={{ backgroundColor: BORDER_COLOR, height: "4px" }}
            />
          </div>

          {/* Email / Password form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="your address@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              className="w-full px-4 py-3 rounded-xl border-2 bg-transparent! outline-none transition-colors placeholder:text-white/50 disabled:opacity-60"
              style={{ borderColor: "#353536", color: "#CFFDED" }}
              autoComplete="email"
            />
            <input
              type="password"
              placeholder="your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              className="w-full px-4 py-3 rounded-xl border-2 bg-transparent! outline-none transition-colors placeholder:text-white/50 disabled:opacity-60"
              style={{ borderColor: "#353536", color: "#CFFDED" }}
              autoComplete="current-password"
            />

            {/* Checkbox + Forgot link */}
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <label className="flex items-center gap-2 cursor-pointer" style={{ color: "#D1D1D1" }}>
                <input
                  type="checkbox"
                  checked={remindLater}
                  onChange={(e) => setRemindLater(e.target.checked)}
                  disabled={isLoading}
                  className="w-4 h-4 rounded border-2 bg-transparent"
                  style={{ borderColor: "#0A746D", accentColor: ACCENT_COLOR }}
                />
                <span className="text-sm">Remind me later</span>
              </label>
              <Link
                to="/forgot-password"
                className="text-sm font-medium hover:underline"
                style={{ color: ACCENT_LIGHT }}
              >
                forgot my login details?
              </Link>
            </div>

            {errorMessage && (
              <div
                className="px-4 py-3 rounded-xl text-sm"
                style={{
                  backgroundColor: "rgba(220, 38, 38, 0.15)",
                  color: "#fca5a5",
                  border: "1px solid rgba(220, 38, 38, 0.4)",
                }}
              >
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 rounded-xl font-normal text-white text-[20px] tracking-wide transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ backgroundColor: ACCENT_COLOR }}
            >
              {isLoading ? "Signing in…" : "Continue"}
            </button>
          </form>

          {/* Sign up link */}
          <p className="text-left mt-2 text-sm" style={{ color: "#6D7485" }}>
            Do you already have an existing{" "}
            <Link
              to="/sign-up"
              className="font-medium hover:underline"
              style={{ color: ACCENT_LIGHT }}
            >
              account?
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
