import { ReactNode } from "react";
import { cookies } from "next/headers";

interface ResetLayoutProps {
  children: ReactNode;
}

export default function ResetLayout({ children }: ResetLayoutProps) {
  cookies(); // forces dynamic rendering
  return <>{children}</>;
}