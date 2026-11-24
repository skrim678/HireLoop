
"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { authClient, signOut } from "@/lib/auth-client";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {data: session, isPending}=authClient.useSession();
  const user =session?.user;
  const handleSignOut =async()=>{
       await signOut()
  }

  const navLinks = [
    { name: "Browse Jobs", href: "/jobs" },
    { name: "Company", href: "/company" },
    { name: "Pricing", href: "/pricing" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#1c1c1c]/95 backdrop-blur-lg">

      <header className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-tight">
          <span className="text-blue-500">hire</span>
          <span className="text-orange-500">Loop</span>
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-8">

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm text-gray-300 transition hover:text-white"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="hidden h-6 w-px bg-white/20 md:block"></div>

          {/* Desktop Auth Buttons */}
          <div className="hidden items-center gap-5 md:flex">
            <Link
              href="/auth/login"
              className="text-sm text-indigo-400 hover:text-indigo-300"
            >
              Sign In
            </Link>

            <Button
              as={Link}
              href="/register"
              radius="lg"
              className="bg-indigo-600 px-5 font-medium text-white hover:bg-indigo-700"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-white/10 bg-[#1c1c1c] p-5 md:hidden">

          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-sm text-gray-300 hover:text-white"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

         <div className="hidden items-center gap-5 md:flex">

  {user ? (
    <>
      <div className="text-white">
        <p>{user.name}</p>
        <p className="text-xs text-gray-400">
          {user.email}
        </p>
      </div>

      <Button
        onClick={handleSignOut}
        variant="ghost"
        className="text-white"
      >
        Sign Out
      </Button>
    </>
  ) : (
    <>
      <Link href="/auth/login">
        Sign In
      </Link>

      <Button
        as={Link}
        href="/register"
        className="bg-indigo-600 text-white"
      >
        Get Started
      </Button>
    </>
  )}

</div>
        </div>
      )}

    </nav>
  );
};

export default Navbar;
