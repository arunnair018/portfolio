"use client";
import { useState } from "react";
import Link from "next/link";
import HomeIcon from "./icons/home";
import BriefCaseIcon from "./icons/briefcase";
import BeakerIcon from "./icons/beaker";
import ProfileIcon from "./icons/profile";
import Image from "next/image";
import OpenNewIcon from "./icons/openNew";
import LinkedInIcon from "./icons/linkedin";
import GithubIcon from "./icons/github";

export default function SidebarLayout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 w-64 bg-gray-50 dark:bg-gray-800 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:translate-x-0 z-50`}
      >
        <div className="p-4 text-xl font-bold border-b border-blue-500 flex-row flex items-center">
          <Image
            width={64}
            height={64}
            className="h-auto rounded-full"
            src="/images/image.png"
            alt="Profile"
          />
          <div className="ml-4">
            Arun Nair
            <span className="block text-sm font-normal dynamic-title">
              Frontend Developer
            </span>
          </div>
        </div>
        <nav className="p-4 space-y-3">
          <Link
            href="/home"
            className="flex items-center gap-2 hover:bg-blue-600 rounded px-3 py-2"
          >
            <HomeIcon /> Home
          </Link>
          <Link
            replace
            href="/experience"
            className="flex items-center gap-2 hover:bg-blue-600 rounded px-3 py-2"
          >
            <BriefCaseIcon /> Experience
          </Link>
          <Link
            replace
            href="/projects"
            className="flex items-center gap-2 hover:bg-blue-600 rounded px-3 py-2"
          >
            <BeakerIcon /> Projects
          </Link>
          <Link
            replace
            href="/about"
            className="flex items-center gap-2 hover:bg-blue-600 rounded px-3 py-2"
          >
            <ProfileIcon /> About
          </Link>
        </nav>
        {/* connect links  */}
        <div className="p-4 space-y-2">
          <h3 className="text-m mb-2 font-bold">Connect</h3>
          <div className="flex space-x-4 flex-col gap-2.5">
            <Link
              className="flex items-center justify-between w-full cursor-pointer hover:underline"
              href={"https://linkedin.com/in/arunnair018/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center gap-2 text-sm">
                <LinkedInIcon />
                LinkedIn
              </div>
              <OpenNewIcon />
            </Link>
            <Link
              className="flex items-center justify-between w-full cursor-pointer hover:underline"
              href="https://github.com/arunnair018"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center gap-2 text-sm">
                <GithubIcon />
                GitHub
              </div>
              <OpenNewIcon />
            </Link>
          </div>
        </div>
      </aside>

      {/* Top Navbar (Mobile only) */}
      <header className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 p-2 text-white w-full md:hidden z-99 sticky top-0">
        <div className="p-2 text-xl font-bold flex-row flex items-center">
          <Image
            width={64}
            height={64}
            className="h-auto rounded-full"
            src="/images/image.png"
            alt="Profile"
          />
          <div className="ml-4">
            Arun Nair
            <span className="block text-sm font-normal">
              Frontend Developer
            </span>
          </div>
        </div>
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </header>
    </>
  );
}
