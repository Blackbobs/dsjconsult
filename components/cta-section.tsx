"use client"

import { motion } from "motion/react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-gray-800 to-gray-900">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          className="max-w-4xl mx-auto space-y-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-blue-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Book a free consultation today — let's build a solution that fits your goals.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-3 bg-white text-blue-600 hover:bg-gray-100 shadow-lg"
              >
                Schedule a Call
              </Button>
            </motion.div>
            {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Request a Quote
              </Button>
            </motion.div> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
