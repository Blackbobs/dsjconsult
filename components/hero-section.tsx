"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"

const fadeInLeft = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
  transition: { duration: 1, ease: "easeOut" },
}

const fadeInRight = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
  transition: { duration: 1, ease: "easeOut" },
}

const texts = [
  {
    title: [
      { text: "Welcome to ", color: "text-gray-900" },
      { text: "DSJ", color: "text-blue-600" },
      { text: " project consulting", color: "text-green-500" },
    ],
    paragraph:
      "We specialize in providing consulting, supply chain management, project management, training inspection, and engineering services to our valued clients in different sectors. We key into our client's vision by safely delivering projects, adding values, and sustaining their bottom line.",
  },
  {
    title: [
      { text: "New innovation in ", color: "text-gray-900" },
      { text: "green building ", color: "text-blue-600" },
      { text: "technology", color: "text-green-500" },
    ],
    paragraph:
      "We embrace cutting-edge sustainable technologies, helping our clients reduce environmental impact while increasing efficiency and resilience in every project.",
  },
  {
    title: [
      { text: "Planning the ", color: "text-gray-900" },
      { text: "construction ", color: "text-blue-600" },
      { text: "of a building", color: "text-green-500" },
    ],
    paragraph:
      "We develop robust solutions as unique as our clients and as distinct as their needs, ensuring every building project is delivered with precision, innovation, and sustainability in mind.",
  },
]

export function HeroSection() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length)
    }, 15000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-6 md:py-12 lg:py-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <motion.div
            className="space-y-6 md:space-y-8 text-center lg:text-left"
            variants={fadeInLeft}
            initial="initial"
            animate="animate"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.h1
                  className="text-xl md:text-3xl lg:text-4xl font-bold uppercase leading-tight"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {texts[index].title.map((part, i) => (
                    <motion.span
                      key={i}
                      className={part.color}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + i * 0.2, duration: 0.6 }}
                    >
                      {part.text}
                    </motion.span>
                  ))}
                </motion.h1>

                {texts[index].paragraph && (
                  <motion.p
                    className="text-sm text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                  >
                    {texts[index].paragraph}
                  </motion.p>
                )}
              </motion.div>
            </AnimatePresence>

            {/* <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Schedule a Call
                </Button>
              </motion.div>
            </motion.div> */}
          </motion.div>

          {/* Images stay the same */}
          <motion.div className="relative mt-8 lg:mt-0" variants={fadeInRight} initial="initial" animate="animate">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.img
                  src="/consult.jpg"
                  alt="Office cleaning team"
                  className="rounded-lg shadow-lg w-full"
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                />
                <motion.img
                  src="/janitor.jpg"
                  alt="Virtual assistant workspace"
                  className="rounded-lg shadow-lg w-full"
                  initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  whileHover={{ scale: 1.05, rotate: -2 }}
                />
              </div>
              <div className="pt-8">
                <motion.img
                  src="/collab.jpg"
                  alt="Project management professional"
                  className="rounded-lg shadow-lg w-full"
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
