import { useState } from "react";

const ProfileForm = () => {
  const [form, setForm] = useState({
    fullname: "",
    username: "",
    email: "",
    phoneNumber: "",
    country: "",
    state: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (
      !form.fullname ||
      !form.username ||
      !form.email ||
      !form.phoneNumber ||
      !form.country ||
      !form.state
    ) {
      setError("All fields are required");
      return false;
    }

    if (!form.email.includes("@")) {
      setError("Invalid email address");
      return false;
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 mx-2 md:mx-0">
      <div>
        <label className="text-[22px] text-[#717171] ml-5">
          Display Fullname
        </label>
        <br />
        <input
          type="text"
          name="fullname"
          className="border-2 border-[#353536] rounded-md w-full md:w-140.75 h-13.5 pl-3"
          placeholder="Abdulsalam Jabril"
          value={form.fullname}
          onChange={handleChange}
        />
        {error && <p className="text-red-500">{error}</p>}
      </div>
      <div>
        <label className="text-[22px] text-[#717171] ml-5">Username</label>
        <br />
        <input
          type="text"
          name="username"
          className="border-2 border-[#353536] rounded-md w-full md:w-140.75 h-13.5 pl-3"
          placeholder="Aj"
          value={form.username}
          onChange={handleChange}
        />
        {error && <p className="text-red-500">{error}</p>}
      </div>
      <div>
        <label className="text-[22px] text-[#717171] ml-5">Email</label>
        <br />
        <input
          type="email"
          name="email"
          className="border-2 border-[#353536] rounded-md w-full md:w-140.75 h-13.5 pl-3"
          placeholder="qRf0q@example.com"
          value={form.email}
          onChange={handleChange}
        />
        {error && <p className="text-red-500">{error}</p>}
      </div>
      <div>
        <label className="text-[22px] text-[#717171] ml-5">Phone Number</label>
        <br />
        <input
          type="text"
          name="phoneNumber"
          className="border-2 border-[#353536] rounded-md w-full md:w-140.75 h-13.5 pl-3"
          placeholder="1234567890"
          value={form.phoneNumber}
          onChange={handleChange}
        />
        {error && <p className="text-red-500">{error}</p>}
      </div>
      <div>
        <label className="text-[22px] text-[#717171] ml-5">
          Country Residence
        </label>
        <br />
        <input
          type="text"
          name="country"
          className="border-2 border-[#353536] rounded-md w-full md:w-140.75 h-13.5 pl-3"
          placeholder="Nigeria"
          value={form.country}
          onChange={handleChange}
        />
        {error && <p className="text-red-500">{error}</p>}
      </div>
      <div>
        <label className="text-[22px] text-[#717171] ml-5">
          State Residence
        </label>
        <br />
        <input
          type="text"
          name="state"
          className="border-2 border-[#353536] rounded-md w-full md:w-140.75 h-13.5 pl-3"
          placeholder="Kaduna"
          value={form.state}
          onChange={handleChange}
        />
        {error && <p className="text-red-500">{error}</p>}
      </div>

      <button
        type="submit"
        className="border-2 border-[#353536] rounded-md w-full md:w-40 h-13.5 mb-5 text-[#F9BC07]"
      >
        Edit
      </button>
    </form>
  );
};

export default ProfileForm;
