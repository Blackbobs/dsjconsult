"use client"

import { motion } from "motion/react"
import { Award, Shield, BarChart3, Zap, CheckCircle } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 80 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const whyChooseUs = [
  { icon: Award, text: "Experienced, Multi-Talented Team" },
  { icon: Shield, text: "Custom Packages to Suit Your Needs" },
  { icon: BarChart3, text: "Transparent Pricing" },
  { icon: Zap, text: "Reliable Communication" },
  { icon: CheckCircle, text: "High Standards, Every Time" },
]

export function WhyWorkSection() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Why Work With Us
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {whyChooseUs.map(({ icon: Icon, text }, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="text-center group"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 260, damping: 20 }}
                viewport={{ once: true }}
              >
                <Icon className="w-8 h-8 text-blue-600" />
              </motion.div>
              <p className="font-semibold text-gray-900 text-sm md:text-base leading-tight">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
