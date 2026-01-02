import { ReactNode } from "react";
import { cookies } from "next/headers";

interface LoginLayoutProps {
  children: ReactNode;
}

export default function LoginLayout({ children }: LoginLayoutProps) {
  cookies(); // forces dynamic rendering
  return <>{children}</>;
}
