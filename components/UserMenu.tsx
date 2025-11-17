"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { signOut } from "@/lib/actions/auth.action";
import { useRouter } from "next/navigation";

type UserMenuProps = {
  userName: string;
  profileImage?: string;
};

export default function UserMenu({ userName, profileImage }: UserMenuProps) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  async function handleLogout() {
    await signOut();
    router.push("/sign-in");
  }

  return (
    <div className="relative" ref={menuRef}>
      {/* Avatar */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 focus:outline-none"
      >
        <Image
          src={profileImage || "/user-avatar.png"}
          alt="User Avatar"
          width={48}
          height={48}
          className="rounded-full border border-border"
        />
        <span className="text-sm">{userName}</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-card p-2 animate-fadeIn">
          <button
            onClick={handleLogout}
            className="btn-disconnect w-full text-center"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
