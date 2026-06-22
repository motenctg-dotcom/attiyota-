"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase-browser";
import type { User } from "@supabase/supabase-js";

export default function Header() {
  const [user, setUser] = useState<User | null>(null);
  const supabase = createClient();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user ?? null));
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => listener.subscription.unsubscribe();
  }, [supabase]);

  async function handleLogout() {
    await supabase.auth.signOut();
    window.location.href = "/";
  }

  return (
    <header className="bg-maroon-500 text-cream-100 sticky top-0 z-40 shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 focus-ring rounded">
          <span className="font-display text-2xl font-700 tracking-wide">
            আত্মীয়তা
          </span>
        </Link>

        <nav className="flex items-center gap-2 sm:gap-4 text-sm sm:text-base">
          <Link
            href="/browse"
            className="px-2 sm:px-3 py-1.5 rounded hover:bg-maroon-600 transition-colors focus-ring"
          >
            প্রোফাইল দেখুন
          </Link>

          {user ? (
            <>
              <Link
                href="/dashboard"
                className="px-2 sm:px-3 py-1.5 rounded hover:bg-maroon-600 transition-colors focus-ring"
              >
                আমার একাউন্ট
              </Link>
              <button
                onClick={handleLogout}
                className="px-2 sm:px-3 py-1.5 rounded border border-cream-100/40 hover:bg-maroon-600 transition-colors focus-ring"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="px-2 sm:px-3 py-1.5 rounded hover:bg-maroon-600 transition-colors focus-ring"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="px-3 sm:px-4 py-1.5 rounded bg-gold-500 text-maroon-700 font-600 hover:bg-gold-400 transition-colors focus-ring"
              >
                Sign Up
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
    }
