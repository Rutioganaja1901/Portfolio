"use client"

import { useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 z-50">
      <nav className="flex items-center max-w-7xl mx-auto p-4">
        
        {/* Logo (Left) */}
        <h1 className="text-2xl font-bold text-blue-600 dark:text-purple-400">
          Ruti Oganaja
        </h1>

        {/* Desktop Menu (Right) */}
        <div className="hidden md:flex ml-auto space-x-6 text-gray-700 dark:text-gray-300">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Mobile Menu Button (Right) */}
        <button
          className="md:hidden ml-auto text-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-black p-4 space-y-3 text-gray-700 dark:text-gray-300">
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#education" onClick={() => setIsOpen(false)}>Education</a>
          <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  )
}
