"use client";
export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabase } from "@/lib/supabase";
const supabase = getSupabase();
import { getProfile } from "@/lib/getProfile";

export default function DashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    async function load() {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/login");
        return;
      }

      const p = await getProfile();
      setProfile(p);
      setLoading(false);
    }

    load();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0a0014] to-[#12002b] text-white flex flex-col">

      <header className="w-full flex items-center justify-between px-6 py-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="text-3xl">🦊</div>
          <span className="text-xl font-semibold tracking-wide">
            PyLynx Dashboard
          </span>
        </div>

        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-sm font-medium transition"
        >
          Log Out
        </button>
      </header>

      <main className="flex flex-col items-center justify-center flex-1 p-10">
        <h1 className="text-4xl font-bold mb-4 tracking-wide">
          Welcome, {profile?.username || profile?.email || "Explorer"}
        </h1>

        <p className="text-zinc-400 max-w-xl text-center mb-10">
          Your PyLynx account is now fully connected to Supabase.
          Profiles, avatars, fox‑core settings, and remix tools will all live here.
        </p>
<button
  onClick={() => router.push("/profile")}
  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-lg font-semibold shadow-[0_0_20px_rgba(0,128,255,0.4)] transition"
>
  Edit Profile
</button>

        <button
          onClick={() => router.push("/demo")}
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl text-lg font-semibold shadow-[0_0_20px_rgba(128,0,255,0.4)] transition"
        >
          Launch OS Demo
        </button>
      </main>

    </div>
  );
}


