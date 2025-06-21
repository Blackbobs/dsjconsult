"use client"
import { motion } from "motion/react"
import { Mail, Phone } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">DSJ Consult</h3>
            <p className="text-gray-400 leading-relaxed">
              Your all-in-one service partner for clean spaces, organized workflows, and seamless projects.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4 text-lg">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">Janitorial Services</li>
              <li className="hover:text-white transition-colors cursor-pointer">Virtual Assistant</li>
              <li className="hover:text-white transition-colors cursor-pointer">Project Management</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4 text-lg">Contact</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>(704)-775-8225</span>
              </div>
              <div className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>hello@dsjconsult.com</span>
              </div>
              {/* <div className="flex items-center gap-3 hover:text-white transition-colors">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>123 Business Ave, City, ST 12345</span>
              </div> */}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4 text-lg">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </motion.div>
        </motion.div>
        <motion.div
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>&copy; {new Date().getFullYear()} DSJ Consult. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
