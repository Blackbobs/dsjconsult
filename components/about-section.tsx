"use client"

import { motion } from "motion/react"

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-4xl mx-auto space-y-6"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Your All-in-One Service Partner
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            We are a versatile service agency committed to helping individuals and businesses thrive. Whether it's
            maintaining a pristine work environment, managing day-to-day admin tasks, or leading complex projects, our
            team delivers with excellence, professionalism, and a personal touch.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
