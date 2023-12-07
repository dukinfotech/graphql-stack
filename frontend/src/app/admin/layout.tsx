"use client";

import { Layout } from "@/components/admin/layout/layout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout>
      <div className="p-4">{children}</div>
    </Layout>
  );
}
