"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { getProfile } from "@/lib/getProfile";

export default function ProfilePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<any>(null);
  const [username, setUsername] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  useEffect(() => {
    async function load() {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/login");
        return;
      }

      const p = await getProfile();
      setProfile(p);
      setUsername(p?.username || "");
      setAvatarUrl(p?.avatar_url || "");
      setLoading(false);
    }

    load();
  }, [router]);

  const handleAvatarUpload = async (e: any) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileName = `${profile.id}-${Date.now()}`;
    const { error: uploadError } = await supabase.storage
      .from("avatars")
      .upload(fileName, file);

    if (uploadError) {
      console.error(uploadError);
      return;
    }

    const { data: publicUrl } = supabase.storage
      .from("avatars")
      .getPublicUrl(fileName);

    setAvatarUrl(publicUrl.publicUrl);
  };

  const handleSave = async () => {
    await supabase
      .from("profiles")
      .update({
        username,
        avatar_url: avatarUrl,
      })
      .eq("id", profile.id);

    router.push("/dashboard");
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
          <span className="text-xl font-semibold tracking-wide">Edit Profile</span>
        </div>

        <button
          onClick={() => router.push("/dashboard")}
          className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-sm font-medium transition"
        >
          Back
        </button>
      </header>

      <main className="flex flex-col items-center justify-center flex-1 p-10">

        {/* Avatar */}
        <div className="flex flex-col items-center mb-8">
          <img
            src={avatarUrl || "/default-avatar.png"}
            alt="avatar"
            className="w-32 h-32 rounded-full border border-white/20 object-cover mb-4"
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarUpload}
            className="text-sm text-zinc-300"
          />
        </div>

        {/* Username */}
        <div className="w-full max-w-sm mb-6">
          <label className="block text-sm mb-1 text-zinc-300">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:border-purple-500"
          />
        </div>

        <button
          onClick={handleSave}
          className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl text-lg font-semibold shadow-[0_0_20px_rgba(128,0,255,0.4)] transition"
        >
          Save Changes
        </button>

      </main>
    </div>
  );
}
