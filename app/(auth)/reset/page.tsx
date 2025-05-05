"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
// import { Amplify, Auth } from "aws-amplify";
// import "@/lib/amplifyClient"; // Ensure Amplify is configured
// import { config } from "@/lib/config";

// Amplify.configure(config.amplify);

export default function Reset() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // await Auth.signIn(form.username, form.password);
      router.push("/dashboard"); // Redirect after login
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Login failed");
    }
  };
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input name="username" placeholder="Username" onChange={handleChange} />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
