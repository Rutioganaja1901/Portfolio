"use client"

import { useState } from "react"

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState("All")

    const projects = [
        {
            title: "Advanced Task Management System",
            description: "Built a scalable Task Management Platform enabling secure onboarding, automated email workflows, real-time task updates, and multi-role collaboration (Admin/Manager/Employee). Implemented JWT authentication, fast API routing layers, and async background tasks for email notifications.",
            role: "Full Stack Developer",
            technologies: ["Python, FastAPI, AsyncIO, PostgreSQL/MongoDB, JWT Auth, WebSockets, SMTP, Docker, AWS"],
            category: "Full-Stack"
        },
        {
            title: "Full-Featured E-Commerce Platform",
            description: "Developed a complete E-Commerce ecosystem with product catalogs, secure checkout, automated payment workflows, order lifecycle management, and an admin CMS. Optimized API performance for high-traffic scenarios.",
            role: "Full Stack Developer",
            technologies: [" Python (FastAPI), Node.js, React.js, JWT Auth, Razorpay/Stripe, PostgreSQL/MongoDB, Docker, AWS"],
            category: "Full-Stack"
        },
        {
            title: "FutureFind",
            description: "I recently worked on a cross-platform mobile application named FutureFind, built with React Native. The app is designed to help students and professionals easily explore and manage internship opportunities in one place.",
            role: "Frontend Lead",
            technologies: ["React Native, TypeScript, Tailwind CSS, Node.js, Express.js, MongoDB, REST APIs, Authentication, Cloud Deployment"],
            category: "Full-Stack"
        },
        {
            title: "HR, Payroll & Attendance Management System (QR + Face Recognition)",
            description: "Built an enterprise HRMS platform with real-time QR-based attendance tracking, face recognition validation, automated payroll calculation, leave management, and role-based dashboards for HR, Managers, and Employees.",
            role: "Full Stack Developer",
            technologies: [" Python (FastAPI), React.js, JWT Auth, Face Recognition API, QR Scan, WebSockets, PostgreSQL/MongoDB, Docker, AWS"],
            category: "Full Stack"
        },
         {
            title: "IntelliAgent",
            description: "Currently working on a IntelliAgent designed to streamline employee management, and organizational workflows. This system helps businesses efficiently manage workforce data, payroll, attendance, and performance tracking through an intuitive and automated platform.",
            role: "Frontend Developer",
            technologies: [" Nodejs, React.js, JWT Auth, MongoDB, Docker, AWS"],
            category: "Full Stack"
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

                                {/* Card Footer */}
                                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                    <button
                                        onClick={() => window.open('https://linkedin.com/in/ruti-oganaja-1b14732b2', '_blank')}
                                        className="w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors duration-200"
                                    >
                                        View Details
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