"use client"

import { motion } from "motion/react"
import { Button } from "@/components/ui/button"

const fadeInLeft = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 1, ease: "easeOut" },
}

const fadeInRight = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 1, ease: "easeOut" },
}

export function HeroSection() {
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
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <motion.h1
                className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Smart Solutions for{" "}
                <motion.span
                  className="text-blue-600"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  Clean Spaces
                </motion.span>
                ,{" "}
                <motion.span
                  className="text-green-500"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.6 }}
                >
                  Organized Workflows
                </motion.span>
                , and{" "}
                <motion.span
                  className="text-blue-700"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  Seamless Projects
                </motion.span>
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
              >
                From spotless commercial environments to virtual support and expert project coordination — we handle it
                all so you can focus on what matters.
              </motion.p>
            </motion.div>
            <motion.div
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
              {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300"
                >
                  Get Started
                </Button>
              </motion.div> */}
            </motion.div>
          </motion.div>

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
