"use client";

import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export const Footer: React.FC = () => (
  <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 transition-colors duration-300">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-slate-600 dark:text-slate-400">
          © 2025 Timothy Itibi. All rights reserved.
        </div>
        <div className="flex space-x-6">
          <a
            href="https://github.com/timmohitibi"
            className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/timothy-itibi"
            className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:timothyitibi@email.com"
            className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
); 