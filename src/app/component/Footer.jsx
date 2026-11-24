
import Link from "next/link";

const Footer = () => {
  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Job discovery", href: "/jobs" },
        { name: "Worker AI", href: "/worker-ai" },
        { name: "Companies", href: "/companies" },
        { name: "Salary data", href: "/salary" },
      ],
    },
    {
      title: "Navigations",
      links: [
        { name: "Help center", href: "/help" },
        { name: "Career library", href: "/career-library" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Brand Guideline", href: "/brand-guideline" },
        { name: "Newsroom", href: "/newsroom" },
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden border-b-2 border-blue-500 bg-black text-white">

      {/* Decorative Background */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-36 opacity-30"
        style={{
          backgroundImage: `
            repeating-linear-gradient(90deg, transparent 0px, transparent 34px, #263044 35px, transparent 36px),
            repeating-linear-gradient(0deg, transparent 0px, transparent 34px, #263044 35px, transparent 36px)
          `,
          maskImage: "linear-gradient(to bottom, black, transparent)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-8">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">

          {/* Left Side: Logo and Description */}
          <div className="max-w-xs">

            <Link href="/" className="text-2xl font-extrabold tracking-tight">
              <span className="text-blue-500">hire</span>
              <span className="text-orange-500">Loop</span>
            </Link>

            <p className="mt-5 text-sm leading-6 text-gray-500">
              The AI-native career platform. Built for
              people who take their work seriously.
            </p>

          </div>

          {/* Right Side: Footer Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">

            {footerLinks.map((section) => (
              <div key={section.title}>

                <h3 className="mb-5 text-sm font-medium text-indigo-500">
                  {section.title}
                </h3>

                <ul className="flex flex-col gap-3">

                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-xs text-gray-500 transition hover:text-white"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}

                </ul>

              </div>
            ))}

          </div>

        </div>

        {/* Bottom Footer */}
        <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">

          {/* Social Media */}
          <div className="flex items-center gap-2">

            {/* Facebook */}
            <Link
              href="https://facebook.com"
              aria-label="Facebook"
              className="flex h-7 w-7 items-center justify-center rounded-md bg-white/10 text-gray-400 transition hover:bg-blue-600 hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5h1.7V3.7c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8z" />
              </svg>
            </Link>

            {/* Pinterest */}
            <Link
              href="https://pinterest.com"
              aria-label="Pinterest"
              className="flex h-7 w-7 items-center justify-center rounded-md bg-indigo-700 text-white transition hover:bg-indigo-600"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M12 2a10 10 0 0 0-3.6 19.3c-.1-.8-.2-2 0-2.9l1.3-5.5s-.3-.6-.3-1.5c0-1.4.8-2.5 1.9-2.5.9 0 1.3.7 1.3 1.5 0 .9-.6 2.3-.9 3.6-.3 1.1.5 2 1.6 2 1.9 0 3.4-2 3.4-4.9 0-2.5-1.8-4.3-4.4-4.3-3 0-4.8 2.2-4.8 4.5 0 .9.3 1.9.8 2.4.1.2.2.3.1.5l-.3 1.1c-.1.4-.3.5-.7.3-1.3-.6-2.1-2.4-2.1-3.9 0-3.2 2.3-6.2 6.7-6.2 3.5 0 6.2 2.5 6.2 5.8 0 3.5-2.2 6.4-5.2 6.4-1 0-2-.6-2.4-1.3l-.7 2.7c-.3 1-.9 2-1.3 2.7A10 10 0 1 0 12 2z" />
              </svg>
            </Link>

            {/* LinkedIn */}
            <Link
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="flex h-7 w-7 items-center justify-center rounded-md bg-white/10 text-gray-400 transition hover:bg-blue-700 hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M5.2 3a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4zM3.4 9h3.6v12H3.4zm5.8 0h3.4v1.6h.1c.5-.9 1.6-1.9 3.3-1.9 3.6 0 4.3 2.4 4.3 5.5V21h-3.6v-6c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V21H9.2z" />
              </svg>
            </Link>

          </div>

          {/* Copyright and Policies */}
          <div className="flex flex-col gap-3 text-xs text-gray-500 sm:flex-row sm:items-center sm:gap-5">

            <p>
              Copyright 2024 — Programming Hero
            </p>

            <div className="flex items-center gap-4">
              <Link href="/terms" className="hover:text-white">
                Terms & Policy
              </Link>

              <Link href="/privacy" className="hover:text-white">
                Privacy Guideline
              </Link>
            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
