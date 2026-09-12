"use client";

import { AuthProvider } from "@better-auth-ui/react";
import { authClient } from "@/lib/auth-client";

export function AuthProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthProvider authClient={authClient}>{children}</AuthProvider>;
}
