"use client";

import { apolloClient } from "@/configs/apollo-client";
import { ApolloProvider } from "@apollo/client";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class">
        <ApolloProvider client={apolloClient}>
          {children}
        </ApolloProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
