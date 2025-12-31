"use client"

import { useState } from "react"

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState("All")

    const projects = [
        {
            title: "IntelliAgent",
            description: "Service booking & payroll system with real-time notifications and payments.",
            role: "Lead Developer",
            technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
            category: "Full-Stack"
        },
        {
            title: "EcoTracker",
            description: "Environmental impact tracking with data visualization.",
            role: "Full Stack Dev",
            technologies: ["React", "D3.js", "PostgreSQL", "AWS"],
            category: "Full-Stack"
        },
        {
            title: "TaskFlow",
            description: "Collaborative project management with real-time team chat.",
            role: "Frontend Lead",
            technologies: ["Vue.js", "Socket.io", "Node.js", "Redis"],
            category: "Full-Stack"
        },
        {
            title: "WeatherWise",
            description: "Interactive weather dashboard with location forecasts.",
            role: "Frontend Developer",
            technologies: ["React", "OpenWeather", "Mapbox", "Tailwind"],
            category: "Frontend"
        },
        {
            title: "CodeReview AI",
            description: "AI-powered code analysis and optimization suggestions.",
            role: "AI Engineer",
            technologies: ["Python", "TensorFlow", "FastAPI", "Docker"],
            category: "AI/ML"
        },
        {
            title: "CryptoWatch",
            description: "Real-time cryptocurrency tracking and portfolio management.",
            role: "Mobile Developer",
            technologies: ["React Native", "Firebase", "CoinGecko API"],
            category: "Mobile"
        }
    ]

    const categories = ["All", "Full-Stack", "Frontend", "AI/ML", "Mobile"]

    const filteredProjects = activeFilter === "All"
        ? projects
        : projects.filter(project => project.category === activeFilter)

    return (
        <section id="projects" className="py-8 bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header Section */}
              {/* Header Section */}
<div className="flex flex-col items-center mb-12">
  {/* Title */}
  <h3 className="text-2xl md:text-3xl font-bold tracking-widest text-gray-900 dark:text-white">
    PROJECTS
  </h3>

  {/* Decorative Line */}
  <div className="flex items-center mt-3 mb-3">
    <span className="w-20 h-[2px] bg-blue-500"></span>

    <div className="flex items-center mx-3 gap-1">
      <span className="w-2 h-2 bg-blue-500 rotate-45"></span>
      <span className="w-2 h-2 bg-blue-500 rotate-45"></span>
      <span className="w-2 h-2 bg-blue-500 rotate-45"></span>
    </div>

    <span className="w-20 h-[2px] bg-blue-500"></span>
  </div>

  {/* Subtitle */}
  <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
    Selected work showcasing technical expertise
  </p>
</div>


                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${activeFilter === category
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-200 h-full"
                        >

                            {/* Card Header */}
                            <div className="p-5">
                                <div className="flex justify-between items-start mb-3">


                                </div>

                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                    {project.title}
                                </h3>

                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Role */}
                                <div className="mb-4">
                                    <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                                        Role: {project.role}
                                    </p>
                                </div>

                                {/* Technologies */}
                                <div>
                                    <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">
                                        Technologies
                                    </h4>
                                    <div className="flex flex-wrap gap-1.5">
                                        {project.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="p-5 pt-0">
                                <div className="flex gap-2">
                                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium py-2 rounded transition-colors duration-200">
                                        View
                                    </button>
                                    <button className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-xs font-medium py-2 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
                                        Code
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section - Simplified */}

            </div>
        </section>
    )
}