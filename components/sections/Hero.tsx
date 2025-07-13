"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ scrollToSection }) => (
  <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Timothy Itibi
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 font-medium">
            Software Dev | Cloud Engineer | Network Enthusiast
          </p>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            I am a passionate software developer who loves building smart, efficient and user-friendly tech solutions. From full-stack apps to backend systems and cloud infrastructure, I focus on writing code that solves real problems.
            <br className="hidden md:block" />
            <span className="inline-block mt-2">Thanks for dropping by, take a look around and feel free to reach out!</span>
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button
            onClick={() => scrollToSection("projects")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg shadow-lg hover:scale-105 transition-transform duration-200"
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950 px-8 py-3 text-lg hover:scale-105 transition-transform duration-200"
          >
            Get In Touch
          </Button>
        </div>

        <div className="flex space-x-6">
          <a
            href="https://github.com/timmohitibi"
            className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com/in/timothy-itibi"
            className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:timothyitibi@email.com"
            className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <div className="flex justify-center lg:justify-end">
        <div className="relative group">
          <div className="w-80 h-80 rounded-full bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-600 p-[3px] shadow-2xl animate-pulse-slow -mt-2">
            <div className="w-full h-full rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
              <img
                src="/image.png"
                alt="Timothy Itibi"
                className="w-72 h-72 rounded-full object-[0_30%] object-cover scale-95 shadow-lg transition duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

); 