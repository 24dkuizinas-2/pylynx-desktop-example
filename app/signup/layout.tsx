import { ReactNode } from "react";
import { cookies } from "next/headers";

interface SignupLayoutProps {
  children: ReactNode;
}

export default function SignupLayout({ children }: SignupLayoutProps) {
  cookies(); // forces dynamic rendering
  return <>{children}</>;
}