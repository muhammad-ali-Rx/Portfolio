"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const CleanNavbar = () => {
  const [activeLink, setActiveLink] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Scroll spy functionality
      const sections = ["home", "skills", "experience", "education", "projects", "contact"]
      const scrollPosition = window.scrollY + 150 // Offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveLink(sections[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]

  const handleNavClick = (id) => {
    setActiveLink(id)
    setIsMobileMenuOpen(false)

    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Mobile menu variants
  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -60, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
    exit: {
      opacity: 0,
      x: -60,
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <motion.nav
      initial={{ y: -120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        isScrolled
          ? "bg-slate-900/98 backdrop-blur-2xl border-b border-cyan-500/40 shadow-2xl shadow-cyan-500/20"
          : "bg-transparent"
      }`}
    >
      {/* Animated background gradient - only visible on scroll */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5"
        initial={{ opacity: 0 }}
        animate={{ opacity: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.div
          className="w-full h-full"
          animate={{
            background: [
              "linear-gradient(90deg, rgba(6,182,212,0.05) 0%, rgba(59,130,246,0.05) 50%, rgba(147,51,234,0.05) 100%)",
              "linear-gradient(90deg, rgba(147,51,234,0.05) 0%, rgba(6,182,212,0.05) 50%, rgba(59,130,246,0.05) 100%)",
              "linear-gradient(90deg, rgba(59,130,246,0.05) 0%, rgba(147,51,234,0.05) 50%, rgba(6,182,212,0.05) 100%)",
            ],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 lg:h-28 py-4">
          {/* Logo - First to animate */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.5 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.34, 1.56, 0.64, 1],
            }}
            className="flex-shrink-0"
          >
            <div className="flex items-center space-x-4">
              <motion.div
                whileHover={{
                  scale: 1.3,
                  rotate: [0, -15, 15, -10, 10, 0],
                  boxShadow: "0 0 30px rgba(34, 211, 238, 0.8)",
                }}
                whileTap={{ scale: 0.85 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 300 }}
                className="relative w-12 h-12 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25"
              >
                <motion.span
                  className="text-white font-bold text-xl"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  M
                </motion.span>

                {/* Rotating border */}
                <motion.div
                  className="absolute inset-0 rounded-xl border-2 border-cyan-400/50"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
              </motion.div>

              {/* Name - Second to animate */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <motion.span
                  className="text-white font-bold text-3xl tracking-tight"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  Muhammad Ali
                </motion.span>
                <motion.div
                  className="h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "100%", opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Desktop Navigation - Nav items animate one by one */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 1 + index * 0.1, // Start after logo and name
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{
                  scale: 1.1,
                  y: -4,
                  transition: { duration: 0.4, type: "spring", stiffness: 300 },
                }}
                whileTap={{
                  scale: 0.95,
                  transition: { duration: 0.1 },
                }}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-3 text-lg font-medium transition-all duration-500 rounded-xl overflow-hidden group ${
                  activeLink === item.id ? "text-cyan-400" : "text-slate-300 hover:text-white"
                }`}
              >
                <span className="relative z-10">{item.label}</span>

                {/* Hover background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-slate-800/60 via-slate-700/60 to-slate-800/60 rounded-xl"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{
                    scale: 1,
                    opacity: 1,
                    transition: { duration: 0.5 },
                  }}
                />

                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-xl"
                  initial={{ x: "-100%" }}
                  whileHover={{
                    x: "100%",
                    transition: { duration: 0.8, ease: "easeInOut" },
                  }}
                />

                {/* Active indicator */}
                <AnimatePresence>
                  {activeLink === item.id && (
                    <motion.div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-2 h-2 bg-cyan-400 rounded-full"
                      />
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                        className="absolute inset-0 w-6 h-6 -top-2 -left-2 bg-cyan-400/20 rounded-full blur-sm"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            ))}
          </div>

          {/* Mobile menu button - Last to animate */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.5 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 1,
              delay: 1.6, // After all nav items
              ease: [0.34, 1.56, 0.64, 1],
            }}
            className="lg:hidden"
          >
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.85 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`relative text-slate-300 hover:text-white p-4 rounded-xl transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/20 ${
                isScrolled
                  ? "bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-500/50"
                  : "bg-slate-800/30 border border-slate-700/30 hover:border-cyan-500/30"
              }`}
            >
              <div className="w-7 h-7 relative">
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 9 : 0,
                  }}
                  transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                  className="absolute block w-full h-0.5 bg-current top-1 rounded-full"
                />
                <motion.span
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                    scale: isMobileMenuOpen ? 0 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                  className="absolute block w-full h-0.5 bg-current top-3.5 rounded-full"
                />
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -9 : 0,
                  }}
                  transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                  className="absolute block w-full h-0.5 bg-current top-6 rounded-full"
                />
              </div>
            </motion.button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`lg:hidden overflow-hidden ${
                isScrolled ? "bg-slate-900/95 backdrop-blur-xl" : "bg-slate-900/90 backdrop-blur-lg"
              } rounded-2xl mx-2 mb-4`}
            >
              <div className="space-y-3 pt-6 pb-8 px-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    variants={mobileItemVariants}
                    whileHover={{
                      x: 16,
                      scale: 1.03,
                      transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleNavClick(item.id)}
                    className={`block w-full text-left px-6 py-4 text-lg font-medium transition-all duration-500 rounded-2xl relative overflow-hidden group ${
                      activeLink === item.id
                        ? "text-cyan-400 bg-gradient-to-r from-slate-800/60 to-slate-700/60 border border-cyan-500/30"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/40 border border-transparent hover:border-slate-600/50"
                    }`}
                  >
                    {/* Background gradient animation */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{
                        scale: 1,
                        opacity: activeLink === item.id ? 1 : 0.5,
                        transition: { duration: 0.5 },
                      }}
                    />

                    <div className="relative flex items-center justify-between">
                      <span>{item.label}</span>
                      <AnimatePresence>
                        {activeLink === item.id && (
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="w-4 h-4 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
                          />
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom border - Only visible on scroll */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{
          scaleX: isScrolled ? 1 : 0,
          opacity: isScrolled ? 1 : 0,
        }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="absolute bottom-0 left-0 w-full h-px origin-center"
      >
        <motion.div
          className="w-full h-full bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
          animate={{
            background: [
              "linear-gradient(90deg, transparent 0%, rgba(6,182,212,0.5) 50%, transparent 100%)",
              "linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.5) 50%, transparent 100%)",
              "linear-gradient(90deg, transparent 0%, rgba(147,51,234,0.5) 50%, transparent 100%)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.nav>
  )
}

export default CleanNavbar
