
"use client";

import { useState } from "react";

const HeroSection = () => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  const trending = [
    "Product Designer",
    "AI Engineering",
    "DevOps Engineer",
  ];

  return (
  <section className="relative overflow-hidden bg-transparent px-5 pt-16 pb-8 text-white">

      {/* Top Background */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[350px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.13),transparent_65%)]" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">

        {/* Jobs Badge */}
        <div className="mb-5 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px]">

          <span>💼</span>

          <span className="font-semibold text-white">
            50,000+
          </span>

          <span className="text-gray-400">
            NEW JOBS THIS MONTH
          </span>

        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Find Your Dream Job Today
        </h1>

        {/* Description */}
        <p className="mt-3 max-w-lg text-xs leading-relaxed text-gray-400 md:text-sm">
          HireLoop connects top talent with world-class companies.
          Browse thousands of curated opportunities and land your
          next role — faster.
        </p>

        {/* Search Bar */}
        <div className="mt-7 flex w-full max-w-[580px] flex-col gap-2 rounded-xl border border-white/10 bg-[#111111] p-1.5 sm:flex-row sm:items-center">

          {/* Job Search */}
          <div className="flex flex-1 items-center gap-2 px-2">

            <svg
              className="h-4 w-4 shrink-0 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="7" strokeWidth="1.5" />
              <path d="m16 16 4 4" strokeWidth="1.5" />
            </svg>

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Job title, skill or company"
              className="h-8 w-full bg-transparent text-xs text-white outline-none placeholder:text-gray-500"
            />

          </div>

          {/* Divider */}
          <div className="hidden h-6 w-px bg-white/15 sm:block" />

          {/* Location Search */}
          <div className="flex flex-1 items-center gap-2 px-2">

            <svg
              className="h-4 w-4 shrink-0 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"
                strokeWidth="1.5"
              />
              <circle cx="12" cy="10" r="2.5" strokeWidth="1.5" />
            </svg>

            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location or Remote"
              className="h-8 w-full bg-transparent text-xs text-white outline-none placeholder:text-gray-500"
            />

          </div>

          {/* Search Button */}
          <button
            type="button"
            className="flex h-9 items-center justify-center rounded-lg bg-indigo-600 px-4 text-white transition hover:bg-indigo-500"
            aria-label="Search jobs"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="7" strokeWidth="1.8" />
              <path d="m16 16 4 4" strokeWidth="1.8" />
            </svg>
          </button>

        </div>

        {/* Trending Positions */}
        <div className="mt-3 flex flex-wrap items-center justify-center gap-2">

          <span className="text-[10px] text-gray-500">
            Trending Position
          </span>

          {trending.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setSearch(item)}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[9px] text-gray-300 transition hover:border-indigo-500 hover:text-white"
            >
              {item}
            </button>
          ))}

        </div>

      </div>

    </section>
  );
};

export default HeroSection;
