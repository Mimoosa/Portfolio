"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useRouter } from "next/navigation";
import { AiOutlineLinkedin } from "react-icons/ai";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
];

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const pathname = usePathname();
  const [navbar, setNavbar] = useState(false);
  const router = useRouter();
  const changeLanguage = (lang: string) => {
    if (!pathname) return;

    const segments = pathname.split("/");
    segments[1] = lang;
    const newPath = segments.join("/");
    router.push(newPath);
  };

  return (
    <header className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="#home">
              <div className="container flex items-center space-x-2">
                <h2 className="text-2xl font-bold">Monami Kirjavainen</h2>
              </div>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <a
                    key={idx}
                    href={`#${item.page}`}
                    className={
                      "block lg:inline-block text-neutral-900  hover:text-neutral-500 dark:text-neutral-100 cursor-pointer"
                    }
                    onClick={() => setNavbar(!navbar)}
                  >
                    {item.label}
                  </a>
                );
              })}
              <div className="flex items-center space-x-4">
                {/* Language Switcher */}
                <div className="flex space-x-2">
                  <button
                    onClick={() => changeLanguage("en")}
                    className="text-sm px-2 py-1"
                  >
                    English
                  </button>
                  <button
                    onClick={() => changeLanguage("fi")}
                    className="text-sm px-2 py-1"
                  >
                    Suomi
                  </button>
                  <button
                    onClick={() => changeLanguage("ja")}
                    className="text-sm px-2 py-1"
                  >
                    日本語
                  </button>
                </div>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/monami-kirjavainen-a599926a/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <AiOutlineLinkedin
                    className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                    size={30}
                  />
                </a>

                {/* Theme Switch */}
                {currentTheme === "dark" ? (
                  <button
                    onClick={() => setTheme("light")}
                    className="bg-slate-100 p-2 rounded-xl"
                  >
                    <RiSunLine size={25} color="black" />
                  </button>
                ) : (
                  <button
                    onClick={() => setTheme("dark")}
                    className="bg-slate-100 p-2 rounded-xl"
                  >
                    <RiMoonFill size={25} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
