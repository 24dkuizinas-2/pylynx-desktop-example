import { ReactNode } from "react";
import { cookies } from "next/headers";

interface ProfileLayoutProps {
  children: ReactNode;
}

export default function ProfileLayout({ children }: ProfileLayoutProps) {
  cookies(); // forces dynamic rendering
  return <>{children}</>;
}