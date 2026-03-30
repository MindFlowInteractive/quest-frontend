import { useState, useEffect, useCallback } from "react";
import { Check } from "lucide-react";

interface ProfileData {
  fullname: string;
  username: string;
  email: string;
  phoneNumber: string;
  country: string;
  state: string;
}

type FieldErrors = Partial<Record<keyof ProfileData, string>>;

const STORAGE_KEY = "quest_user_profile";

function loadPersistedProfile(): ProfileData {
  const defaults: ProfileData = {
    fullname: "",
    username: "",
    email: "",
    phoneNumber: "",
    country: "",
    state: "",
  };

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved) as Partial<ProfileData>;
      return { ...defaults, ...parsed };
    }
  } catch {
    /* corrupted data — fall through */
  }

  try {
    const authUser = localStorage.getItem("quest_user");
    if (authUser) {
      const user = JSON.parse(authUser) as { name?: string; email?: string };
      return {
        ...defaults,
        fullname: user.name ?? "",
        email: user.email ?? "",
      };
    }
  } catch {
    /* ignore */
  }

  return defaults;
}

function persistProfile(data: ProfileData): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^\+?[\d\s\-()]{7,20}$/;
const USERNAME_RE = /^[a-zA-Z0-9_]{2,30}$/;

function validateField(name: keyof ProfileData, value: string): string | null {
  const trimmed = value.trim();

  switch (name) {
    case "fullname":
      if (!trimmed) return "Full name is required";
      if (trimmed.length < 2) return "Full name must be at least 2 characters";
      if (trimmed.length > 100) return "Full name must be under 100 characters";
      return null;

    case "username":
      if (!trimmed) return "Username is required";
      if (!USERNAME_RE.test(trimmed))
        return "Username must be 2-30 characters: letters, numbers, or underscores";
      return null;

    case "email":
      if (!trimmed) return "Email is required";
      if (!EMAIL_RE.test(trimmed)) return "Please enter a valid email address";
      return null;

    case "phoneNumber":
      if (!trimmed) return "Phone number is required";
      if (!PHONE_RE.test(trimmed))
        return "Please enter a valid phone number (7-20 digits)";
      return null;

    case "country":
      if (!trimmed) return "Country is required";
      if (trimmed.length < 2) return "Please enter a valid country name";
      return null;

    case "state":
      if (!trimmed) return "State is required";
      if (trimmed.length < 2) return "Please enter a valid state name";
      return null;

    default:
      return null;
  }
}

function validateAll(data: ProfileData): FieldErrors {
  const errors: FieldErrors = {};
  for (const key of Object.keys(data) as (keyof ProfileData)[]) {
    const msg = validateField(key, data[key]);
    if (msg) errors[key] = msg;
  }
  return errors;
}

interface FieldProps {
  label: string;
  name: keyof ProfileData;
  type?: string;
  placeholder: string;
  value: string;
  error?: string;
  touched: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const Field = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  error,
  touched,
  onChange,
  onBlur,
}: FieldProps) => (
  <div>
    <label htmlFor={name} className="text-[22px] text-[#717171] ml-5">
      {label}
    </label>
    <br />
    <input
      id={name}
      type={type}
      name={name}
      className={`border-2 rounded-md w-full md:w-140.75 h-13.5 pl-3 bg-transparent text-white transition-colors ${
        touched && error
          ? "border-red-500 focus:border-red-400"
          : "border-[#353536] focus:border-[#F9BC07]"
      }`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      autoComplete="off"
    />
    {touched && error && (
      <p className="text-red-400 text-sm mt-1 ml-1">{error}</p>
    )}
  </div>
);

const ProfileForm = () => {
  const [form, setForm] = useState<ProfileData>(loadPersistedProfile);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Set<keyof ProfileData>>(new Set());
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  useEffect(() => {
    if (submitStatus !== "success") return;
    const id = setTimeout(() => setSubmitStatus("idle"), 3000);
    return () => clearTimeout(id);
  }, [submitStatus]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      const key = name as keyof ProfileData;

      setForm((prev) => ({ ...prev, [key]: value }));
      setSubmitStatus("idle");

      if (touched.has(key)) {
        const fieldError = validateField(key, value);
        setErrors((prev) => {
          const next = { ...prev };
          if (fieldError) next[key] = fieldError;
          else delete next[key];
          return next;
        });
      }
    },
    [touched]
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      const key = e.target.name as keyof ProfileData;
      const value = e.target.value;
      setTouched((prev) => new Set(prev).add(key));

      const fieldError = validateField(key, value);
      setErrors((prev) => {
        const next = { ...prev };
        if (fieldError) next[key] = fieldError;
        else delete next[key];
        return next;
      });
    },
    []
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const allKeys = Object.keys(form) as (keyof ProfileData)[];
    setTouched(new Set(allKeys));

    const validationErrors = validateAll(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setSubmitStatus("error");
      return;
    }

    const trimmed: ProfileData = { ...form };
    for (const key of allKeys) {
      trimmed[key] = form[key].trim();
    }

    persistProfile(trimmed);
    setForm(trimmed);
    setSubmitStatus("success");
  };

  const fields: {
    name: keyof ProfileData;
    label: string;
    placeholder: string;
    type?: string;
  }[] = [
    { name: "fullname", label: "Display Fullname", placeholder: "Abdulsalam Jabril" },
    { name: "username", label: "Username", placeholder: "Aj" },
    { name: "email", label: "Email", placeholder: "user@example.com", type: "email" },
    { name: "phoneNumber", label: "Phone Number", placeholder: "+1234567890", type: "tel" },
    { name: "country", label: "Country Residence", placeholder: "Nigeria" },
    { name: "state", label: "State Residence", placeholder: "Kaduna" },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-5 mx-2 md:mx-0" noValidate>
      {fields.map((f) => (
        <Field
          key={f.name}
          name={f.name}
          label={f.label}
          placeholder={f.placeholder}
          type={f.type}
          value={form[f.name]}
          error={errors[f.name]}
          touched={touched.has(f.name)}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      ))}

      {submitStatus === "success" && (
        <div className="flex items-center gap-2 text-green-400 text-sm py-2">
          <Check className="w-4 h-4" />
          <span>Profile updated successfully</span>
        </div>
      )}

      {submitStatus === "error" && Object.keys(errors).length > 0 && (
        <p className="text-red-400 text-sm py-2">
          Please fix the errors above before saving
        </p>
      )}

      <button
        type="submit"
        className="border-2 border-[#353536] rounded-md w-full md:w-40 h-13.5 mb-5 text-[#F9BC07] hover:bg-[#F9BC07]/10 transition-colors"
      >
        Save
      </button>
    </form>
  );
};

export default ProfileForm;
