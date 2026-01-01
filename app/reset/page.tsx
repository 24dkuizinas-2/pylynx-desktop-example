"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { getSupabase } from "@/lib/supabase";
const supabase = getSupabase();

export default function ResetPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [infoMsg, setInfoMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleReset = async () => {
    setErrorMsg("");
    setInfoMsg("");
    const { error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) {
      setErrorMsg(error.message);
      return;
    }
    setInfoMsg("If that email exists, a reset link has been sent.");
  };

  return (
    // ...same JSX as before, but change button:
    <button
      onClick={handleReset}
      className="w-full px-4 py-3 rounded-xl text-lg font-semibold bg-purple-600 hover:bg-purple-700 shadow-[0_0_20px_rgba(128,0,255,0.4)] transition-all"
    >
      Send Reset Link
    </button>
  );
}

