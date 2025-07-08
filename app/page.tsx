"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Moon, Sun, Github, ExternalLink, Mail, Phone, MapPin, Linkedin, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [isDark, setIsDark] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your message! I'll get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const projects = [
    {
      title: "Cloud Infrastructure Manager",
      description:
        "A comprehensive AWS infrastructure management tool built with Python and Boto3. Features automated deployment, monitoring, and cost optimization for cloud resources.",
      technologies: ["Python", "AWS", "Boto3", "Docker", "PostgreSQL"],
      github: "https://github.com/timothy/cloud-manager",
      demo: "https://cloud-manager-demo.vercel.app",
    },
    {
      title: "Network Traffic Analyzer",
      description:
        "Real-time network traffic analysis application using C++ and Python. Implements TCP/IP packet inspection and provides detailed network performance metrics.",
      technologies: ["C++", "Python", "Linux", "TCP/IP", "SQLite"],
      github: "https://github.com/timothy/network-analyzer",
      demo: null,
    },
    {
      title: "Full-Stack Task Management App",
      description:
        "Modern task management application with React frontend and Node.js backend. Features real-time collaboration, user authentication, and cloud synchronization.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "JWT"],
      github: "https://github.com/timothy/task-manager",
      demo: "https://task-manager-demo.vercel.app",
    },
    {
      title: "Database Performance Optimizer",
      description:
        "SQL query optimization tool that analyzes database performance and suggests improvements. Built with Django and supports multiple database engines.",
      technologies: ["Django", "PostgreSQL", "SQL", "Python", "Redis"],
      github: "https://github.com/timothy/db-optimizer",
      demo: null,
    },
  ]

  const skills = {
    "Programming Languages": ["C++", "Python", "JavaScript", "SQL", "TypeScript", "Java"],
    "Cloud Platforms": ["AWS (EC2, S3, Lambda, RDS)", "Azure", "Google Cloud Platform"],
    "Development Tools": ["Git", "Docker", "Linux", "VS Code", "Postman"],
    "Frontend Technologies": ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
    "Backend Technologies": ["Node.js", "Django", "Flask", "Express.js"],
    Databases: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "SQLite"],
    Networking: ["TCP/IP", "DNS", "HTTP/HTTPS", "Routing", "Network Security"],
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-slate-800 dark:text-white">Timothy Itibi</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Contact
              </button>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="ml-4 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-700">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Timothy Itibi
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 font-medium">
                  Computer Science Graduate & Software Developer
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                  Passionate about building scalable software solutions with expertise in cloud computing (AWS),
                  computer networking, and full-stack development. Ready to contribute to innovative projects and drive
                  technological advancement.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => scrollToSection("projects")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                >
                  View My Work
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950 px-8 py-3 text-lg"
                >
                  Get In Touch
                </Button>
              </div>

              <div className="flex space-x-6">
                <a
                  href="https://github.com/timothy"
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com/in/timothy-itibi"
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="mailto:timothy.itibi@email.com"
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1">
                  <div className="w-full h-full rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                    <img
                      src="/placeholder.svg?height=300&width=300"
                      alt="Timothy Itibi Profile"
                      className="w-72 h-72 rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              I'm a recent Computer Science graduate with a passion for creating efficient, scalable software solutions.
              My expertise spans cloud computing, networking, and full-stack development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-blue-600 dark:text-blue-400">Cloud Computing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400">
                  Experienced with AWS services including EC2, S3, Lambda, and RDS. Skilled in designing and
                  implementing scalable cloud architectures.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-purple-600 dark:text-purple-400">Software Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400">
                  Proficient in multiple programming languages and frameworks. Strong focus on clean code, testing, and
                  agile development practices.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-green-600 dark:text-green-400">Network Engineering</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400">
                  Deep understanding of networking protocols, security principles, and network optimization techniques
                  for robust system design.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my technical skills and problem-solving abilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white">{project.title}</CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2"
                      >
                        <Github className="h-4 w-4" />
                        <span>Code</span>
                      </a>
                    </Button>
                    {project.demo && (
                      <Button size="sm" asChild>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span>Live Demo</span>
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Technical Skills</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise across various domains.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card
                key={index}
                className="border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="outline"
                        className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Get In Touch</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to
              work together!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Let's Connect</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Whether you have a project in mind, want to discuss opportunities, or just want to say hello, I'd love
                to hear from you.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-slate-600 dark:text-slate-400">timothy.itibi@email.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-slate-600 dark:text-slate-400">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-slate-600 dark:text-slate-400">Available for Remote Work</span>
                </div>
              </div>
            </div>

            <Card className="border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="text-slate-900 dark:text-white">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="border-slate-300 dark:border-slate-600"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="border-slate-300 dark:border-slate-600"
                      />
                    </div>
                  </div>
                  <div>
                    <Input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="border-slate-300 dark:border-slate-600"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="border-slate-300 dark:border-slate-600"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-600 dark:text-slate-400">© 2024 Timothy Itibi. All rights reserved.</div>
            <div className="flex space-x-6">
              <a
                href="https://github.com/timothy"
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
                href="mailto:timothy.itibi@email.com"
                className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
