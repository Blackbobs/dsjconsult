"use client"

import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Get In Touch
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ready to transform your business? Let&apos;s talk.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-xl border-0">
              <CardContent className="p-6 md:p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <Input placeholder="Your name" className="border-2 focus:border-blue-500" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <Input type="email" placeholder="your@email.com" className="border-2 focus:border-blue-500" />
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone (optional)</label>
                    <Input placeholder="Your phone number" className="border-2 focus:border-blue-500" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">Select Service</label>
                    <select className="w-full p-3 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                      <option>Choose a service...</option>
                      <option>Janitorial Services</option>
                      <option>Virtual Assistant</option>
                      <option>Project Management</option>
                      <option>Multiple Services</option>
                    </select>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <Textarea
                      placeholder="Tell us about your needs..."
                      rows={4}
                      className="border-2 focus:border-blue-500"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
