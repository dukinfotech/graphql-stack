"use client";

import LoginModal from "@/components/auth/login-modal";

export default function LoginPage() {
  return (
    <section
      className="h-screen w-screen bg-img bg-cover bg-center"
      style={{ backgroundImage: "url('img/login-bg.jpg')" }}
    >
      <LoginModal />
    </section>
  );
}
