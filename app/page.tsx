"use client";

import type React from "react";
import Head from "next/head";

import { useState, useEffect } from "react";
import {
  Moon,
  Sun,
  Github,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { useToast } from "@/components/ui/use-toast";

export default function Portfolio() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  // Theme persistence: read from localStorage on mount
  useEffect(() => {
    const storedTheme =
      typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    if (storedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else if (storedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      if (typeof window !== "undefined") localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      if (typeof window !== "undefined") localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for your message! I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "Kazi Qonnect",
      description:
        "A service marketplace platform that connects users with skilled laborers across various fields. Built with a focus on usability and scalability to solve real-world employment challenges.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      github: "https://github.com/Timmohitibi/kazi-Qonnect",
      demo: null, // Coming soon
    },
    {
      title: "ACK Land Management System",
      description:
        "A property and land title management system developed for the Anglican Church of Kenya (Mt. Kenya South Diocese). Designed to streamline record keeping, title verification, and reporting.",
      technologies: ["Node.js", "SQLite", "React", "Express", "ShadCN UI"],
      github: "https://github.com/Timmohitibi/diocese-web-app",
      demo: null, // Coming soon
    },
    {
      title: "Pawa Weather App",
      description:
        "A modern weather application that fetches real-time weather data using Laravel (backend) and Next.js (frontend). Features a sleek interface built with Ripple UI and OpenWeather API.",
      technologies: [
        "Laravel",
        "Next.js",
        "TypeScript",
        "Ripple UI",
        "OpenWeather API",
      ],
      github: "https://github.com/Timmohitibi/Pawa-Weather-App",
      demo: null,
    },
    {
      title: "Python Port Scanner",
      description:
        "A simple yet effective CLI tool for scanning open ports on a target host. Built to demonstrate practical networking knowledge using Python socket programming.",
      technologies: ["Python", "Sockets", "Networking", "CLI"],
      github: "https://github.com/Timmohitibi/Port-scanner",
      demo: null,
    },
  ];

  const skills = {
    "Programming Languages": [
      "C++",
      "Python",
      "JavaScript",
      "SQL",
      "TypeScript",
      "Java",
    ],
    "Cloud Platforms": ["AWS (EC2, S3, Lambda, RDS)"],
    "Development Tools": ["Git", "Linux", "VS Code", "Postman"],
    "Frontend Technologies": [
      "React",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
    "Backend Technologies": ["Node.js", "Django", "Flask", "Express.js"],
    Databases: ["PostgreSQL", "MongoDB", "MySQL", "SQLite"],
    Networking: ["TCP/IP", "DNS", "HTTP/HTTPS", "Routing", "Network Security"],
  };

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="title" content="Timothy Itibi | Software Engineer" />
        <meta
          name="description"
          content="Explore Timothy Itibi’s developer portfolio showcasing full-stack projects, cloud solutions and networking tools."
        />
        <meta
          name="keywords"
          content="Timothy Itibi, software developer, full-stack developer, cloud engineer, web developer, portfolio, networking tools, personal website, Kenya developer, itibi, Gaithuma, junior-developer"
        />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content="Timothy Itibi" />
        <meta name="revisit-after" content="7 days" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Timothy Itibi | Software Developer"
        />
        <meta
          property="og:description"
          content="Projects, skills, and contact info for Timothy Itibi, a passionate full-stack developer."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:url" content="https://timothy-itibi.vercel.app/" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />

        {/* Favicon and Manifest */}
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Itibi" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
        {/* Navigation */}
        <Navigation
          isDark={isDark}
          toggleTheme={toggleTheme}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          scrollToSection={scrollToSection}
        />

        {/* Hero Section */}
        <Hero scrollToSection={scrollToSection} />

        {/* About Section */}
        <About />

        {/* Projects Section */}
        <Projects projects={projects} />

        {/* Skills Section */}
        <Skills skills={skills} />

        {/* Contact Section */}
        <Contact
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
