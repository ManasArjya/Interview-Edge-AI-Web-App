import Link from "next/link";     // reusable component UserMenu handles behavior (open/close dropdown, logout).Show the user’s avatar in the navbar.When clicked → open a dropdown menu.Dropdown shows the username + a logout button.Handles closing when clicking outside.Calls your signOut() action and redirects to /sign-in
import Image from "next/image";
import { ReactNode } from "react";
import { redirect } from "next/navigation";

import { isAuthenticated, getCurrentUser } from "@/lib/actions/auth.action";
import UserMenu from "@/components/UserMenu";

const Layout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");

  const user = await getCurrentUser(); // 👈 fetch user info

  return (
    <div className="root-layout">
      <nav className="flex justify-between items-center p-4 border-b">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo1.png" alt="MockMate Logo" width={58} height={42} />
          <h2 className="text-primary-100">Interview Edge</h2>
        </Link>

        {/* Right: User Avatar */}
        <div className="relative">
          <UserMenu
            userName={user?.name || "Anonymous"}
            profileImage= "/user-avatar.png"
          />
        </div>
      </nav>

      {children}
    </div>
  );
};

export default Layout;
