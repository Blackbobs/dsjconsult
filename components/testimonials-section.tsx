"use client"

import { motion } from "motion/react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"

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

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "The janitorial team is top-notch. Our office has never been cleaner!",
      author: "Michael B.",
      role: "Office Manager",
    },
    {
      quote: "Their virtual assistant helped me reclaim 10 hours a week. I'm more productive than ever.",
      author: "Sarah K.",
      role: "Startup Founder",
    },
    {
      quote: "They handled our product launch project like pros. Everything was delivered on time and under budget.",
      author: "James E.",
      role: "Product Director",
    },
  ]

  return (
    <section id="testimonials" className="py-16 md:py-20 bg-white">
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
            What Our Clients Say
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-100">
                <CardContent className="p-6 md:p-8">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: index * 0.2, type: "spring", stiffness: 260, damping: 20 }}
                    viewport={{ once: true }}
                  >
                    <Quote className="w-8 h-8 text-blue-600 mb-4" />
                  </motion.div>
                  <p className="text-gray-600 mb-6 italic text-base md:text-lg leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.2 + i * 0.1, duration: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
