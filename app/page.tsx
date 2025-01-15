"use client";

import { LoginForm } from "@/components/login-form";

export default function Home() {
  const handleLogin = (credentials: { email: string; password: string }) => {
    console.log("Login credentials:", credentials);
    // Process the credentials (e.g., send to API)
  };

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm onSubmit={handleLogin} />
      </div>
    </div>
  );
}
