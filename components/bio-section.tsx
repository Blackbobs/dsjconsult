"use client"

import { motion } from "motion/react"
import { Badge } from "@/components/ui/badge"

export function BioSection() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
            <motion.div
              className="md:col-span-1 text-center"
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.img
                src="/placeholder.svg?height=300&width=300"
                alt="Tayo - Founder & Lead Virtual Assistant"
                className="rounded-full w-48 h-48 md:w-64 md:h-64 mx-auto object-cover shadow-xl border-4 border-white"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </motion.div>
            <motion.div
              className="md:col-span-2 space-y-6 text-center md:text-left"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <motion.h3
                  className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Meet Tayo
                </motion.h3>
                <motion.p
                  className="text-blue-600 font-semibold text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Founder & Lead Virtual Assistant
                </motion.p>
              </div>
              <motion.p
                className="text-gray-600 leading-relaxed text-base md:text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Hi there! My name is Tayo, I have been a dedicated Virtual Assistant with over 5 years of experience
                optimizing operations for entrepreneurs and small business owners. I specialize in project coordination,
                calendar management, and implementing streamlined digital systems that drive productivity.
              </motion.p>
              <motion.p
                className="text-gray-600 leading-relaxed text-base md:text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                I've helped clients reduce administrative workload by up to 35% through automation, clear processes, and
                proactive support. Known for working independently while staying seamlessly aligned with your team's
                goals and communication flow.
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-2 justify-center md:justify-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {["5+ Years Experience", "Project Coordination", "Process Automation", "35% Efficiency Boost"].map(
                  (badge, index) => (
                    <motion.div
                      key={badge}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.6 + index * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Badge
                        variant="secondary"
                        className="bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors"
                      >
                        {badge}
                      </Badge>
                    </motion.div>
                  ),
                )}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
