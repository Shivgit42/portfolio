"use client";

import React from "react";
import { Separator, Tooltip } from "@radix-ui/themes";
import {
  GitHubLogoIcon,
  SunIcon,
  MoonIcon,
  FileIcon,
  LinkedInLogoIcon,
  CodeIcon,
  HomeIcon,
} from "@radix-ui/react-icons";
import { Notebook, MoonStar } from "lucide-react";
import { usePathname } from "next/navigation";
import { FaXTwitter } from "react-icons/fa6";
import { useDarkMode } from "@/hooks/useDarkMode";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  const navItems = [
    { href: "/", icon: HomeIcon, label: "Home", id: 0 },
    { href: "/projects", icon: CodeIcon, label: "Projects", id: 1 },
    { href: "/blogs", icon: Notebook, label: "Blog", id: 2, startsWith: true },
  ];

  const socialItems = [
    { href: "https://drive.google.com/file/d/1qNWGD8k3HSzgL2asnE0HeYQs_UyOGXJS/view?usp=sharing", icon: FileIcon, label: "Resume", id: 3 },
    { href: "https://github.com/Shivgit42", icon: GitHubLogoIcon, label: "Github", id: 4 },
    { href: "https://x.com/intent/follow?screen_name=shivamrtwt", icon: FaXTwitter, label: "X", id: 5 },
    { href: "https://www.linkedin.com/in/shivam-rana-a6427a1a2/", icon: LinkedInLogoIcon, label: "Linkedin", id: 6 },
  ];

  // Jelly spring configuration
  const jellySpring = {
    type: "spring",
    stiffness: 600,
    damping: 20,
    mass: 1,
  };

  return (
    <nav className="w-full py-6 flex justify-center fixed top-0 z-50">
      <motion.div
        initial={false}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="rounded-full px-2 py-1 bg-white/10 dark:bg-[#161616]/80 backdrop-blur-xl border border-black/5 dark:border-white/10 flex items-center justify-center dark:shadow-none shadow-lg w-fit max-w-full"
        layout="size"
      >
        <div className="flex items-center px-1 gap-1 sm:gap-1.5 relative">
          {navItems.map((item) => (
            <Link key={item.id} href={item.href} className="relative">
              <Tooltip content={item.label}>
                <motion.div
                  className="px-3 py-2.5 flex items-center justify-center rounded-full relative z-10 overflow-hidden"
                  onMouseEnter={() => setHoveredIndex(item.id)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  animate={{
                    width: hoveredIndex === item.id ? "auto" : "auto",
                    paddingLeft: hoveredIndex === item.id ? 22 : 12,
                    paddingRight: hoveredIndex === item.id ? 22 : 12,
                    backgroundColor: hoveredIndex === item.id ? "rgba(255, 255, 255, 0.05)" : "transparent"
                  }}
                  transition={jellySpring}
                >
                  <motion.div
                    animate={{
                      scale: hoveredIndex === item.id ? 1.2 : 1,
                      y: hoveredIndex === item.id ? -1 : 0
                    }}
                    transition={jellySpring}
                  >
                    <item.icon
                      className={`w-[19px] h-[19px] max-sm:w-[16px] max-sm:h-[16px] transition-colors duration-300 ${(item.startsWith ? pathname.startsWith(item.href) : pathname === item.href)
                        ? "text-[#cc9e2b] dark:text-[#FFC83D]"
                        : "text-black dark:text-white"
                        }`}
                    />
                  </motion.div>
                </motion.div>
              </Tooltip>
              {hoveredIndex === item.id && (
                <motion.div
                  layoutId="nav-bg"
                  className="absolute inset-0 bg-black/5 dark:bg-white/10 rounded-full -z-0"
                  transition={jellySpring}
                />
              )}
            </Link>
          ))}

          <Separator
            orientation="vertical"
            size={{ sm: "1", lg: "2", xl: "2" }}
            className="bg-black/10 dark:bg-white/20 h-6 mx-1"
          />

          {socialItems.map((item) => (
            <Link key={item.id} href={item.href} target="_blank" className="relative">
              <Tooltip content={item.label}>
                <motion.div
                  className="px-3 py-2.5 flex items-center justify-center rounded-full relative z-10 overflow-hidden"
                  onMouseEnter={() => setHoveredIndex(item.id)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  animate={{
                    paddingLeft: hoveredIndex === item.id ? 22 : 12,
                    paddingRight: hoveredIndex === item.id ? 22 : 12,
                    backgroundColor: hoveredIndex === item.id ? "rgba(255, 255, 255, 0.05)" : "transparent"
                  }}
                  transition={jellySpring}
                >
                  <motion.div
                    animate={{ scale: hoveredIndex === item.id ? 1.2 : 1 }}
                    transition={jellySpring}
                  >
                    <item.icon className="w-[19px] h-[19px] max-sm:w-[16px] max-sm:h-[16px] text-black dark:text-white" />
                  </motion.div>
                </motion.div>
              </Tooltip>
              {hoveredIndex === item.id && (
                <motion.div
                  layoutId="nav-bg"
                  className="absolute inset-0 bg-black/5 dark:bg-white/10 rounded-full -z-0"
                  transition={jellySpring}
                />
              )}
            </Link>
          ))}

          <Separator
            orientation="vertical"
            size={{ sm: "1", lg: "2", xl: "2" }}
            className="bg-black/10 dark:bg-white/20 h-6 mx-1"
          />

          <Tooltip content={isDarkMode ? "Light Mode" : "Dark Mode"}>
            <div
              className="relative cursor-pointer group"
              onClick={toggleDarkMode}
            >
              <motion.div
                className="px-3 py-2.5 flex items-center justify-center rounded-full relative z-10 overflow-hidden"
                onMouseEnter={() => setHoveredIndex(7)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={{
                  paddingLeft: hoveredIndex === 7 ? 22 : 12,
                  paddingRight: hoveredIndex === 7 ? 22 : 12,
                  backgroundColor: hoveredIndex === 7 ? "rgba(255, 255, 255, 0.05)" : "transparent"
                }}
                transition={jellySpring}
              >
                <motion.div
                  animate={{
                    rotate: hoveredIndex === 7 ? 15 : 0,
                    scale: hoveredIndex === 7 ? 1.2 : 1
                  }}
                  transition={jellySpring}
                >
                  {isDarkMode ? (
                    <MoonStar className="w-[18px] h-[18px] max-sm:w-[16px] max-sm:h-[16px] text-white" />
                  ) : (
                    <SunIcon className="w-5 h-5 max-sm:w-[16px] max-sm:h-[16px] text-black" />
                  )}
                </motion.div>
              </motion.div>
              {hoveredIndex === 7 && (
                <motion.div
                  layoutId="nav-bg"
                  className="absolute inset-0 bg-black/5 dark:bg-white/10 rounded-full -z-0"
                  transition={jellySpring}
                />
              )}
            </div>
          </Tooltip>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
