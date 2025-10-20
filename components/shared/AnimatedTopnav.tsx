"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import { StarIcon } from "lucide-react";
import ThemeToggle from "../ThemeToggle";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "motion/react";
import { AnimatedTabs } from "@/components/shared/AnimatedTabs";

export default function AnimatedTopnav() {
  const [starsCount, setStarsCount] = React.useState(0);
  const [scrollY, setScrollY] = React.useState(0);

  const fetchStarsCount = async () => {
    const res = await fetch("https://api.github.com/repos/mehrdadrafiee/animated-topnav");
    const data = await res.json();
    setStarsCount(data.stargazers_count || 0);
  };

  React.useEffect(() => {
    fetchStarsCount();
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tabs = [
    { label: "Home", value: "home", href: "/" },
    { label: "About", value: "about", href: "/about" },
    { label: "Contact", value: "contact", href: "/contact" },
    { label: "Danger Zone", value: "danger-zone", href: "/danger-zone" },
  ];

  return (
    <>
      {/* Header with logo and GitHub button */}
      <header className="w-full bg-background relative">
        <motion.div 
          className="fixed top-0 left-0 z-50 pt-5 pl-5"
          animate={{
            scale: Math.max(0.8, 1 - (scrollY * 0.006))
          }}
          transition={{
            duration: 0.1,
            ease: "linear"
          }}
        >
          <Image 
            src="/globe.svg" 
            alt="Logo" 
            width={20}
            height={20} 
            className="dark:invert"
          />
        </motion.div>
        
        <div className="flex justify-between px-5 items-center font-mono pt-3 pb-0 pl-14">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">/</span>
            <Link className="text-sm font-medium hover:underline" href="https://github.com/mehrdadrafiee">@mehrdadrafiee</Link>
          </div>
          <div className="flex items-center justify-end gap-2">
            <ThemeToggle />
            <Button variant="outline" asChild>
              <a href="https://github.com/mehrdadrafiee/animated-topnav" className="flex items-center">
                <GitHubLogoIcon />
                <StarIcon fill="currentColor" size={16} className="text-yellow-500 mr-1" />
                {starsCount}
                <ArrowUpRightIcon size={16} />
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Sticky Navigation with animated tabs */}
      <div className="sticky top-0 bg-background overflow-x-hidden border-b border-border">
        <div className="flex justify-center items-center">
          <motion.div 
            className="flex justify-center flex-1"
            animate={{ 
              x: Math.min(scrollY * 0.5, 50) // Move 0.5px right per 1px scroll, max 50px
            }}
            transition={{ 
              duration: 0.05,
              ease: "linear"
            }}
          >
            <AnimatedTabs tabs={tabs} />
          </motion.div>
        </div>
      </div>
    </>
  );
}