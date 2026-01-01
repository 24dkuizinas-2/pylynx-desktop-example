import { ReactNode } from "react";
import { cookies } from "next/headers";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  cookies(); // forces dynamic rendering
  return <>{children}</>;
}

