"use client"

import { motion } from "motion/react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Monitor, ClipboardList, CheckCircle } from "lucide-react"

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

// const scaleOnHover = {
//   whileHover: { scale: 1.08, y: -10 },
//   transition: { type: "spring", stiffness: 300, damping: 20 },
// }

const bounceAnimation = {
  initial: { scale: 0, rotate: -180 },
  animate: { scale: 1, rotate: 0 },
  transition: {
    type: "spring",
    stiffness: 260,
    damping: 20,
    delay: 0.3,
  },
}

export function ServicesSection() {
  const services = [
    {
      icon: Sparkles,
      title: "Janitorial Services",
      description: "We keep your spaces clean, hygienic, and guest-ready — so your team can work at their best.",
      features: [
        "Office & Commercial Cleaning",
        "Restroom Sanitation",
        "Floor & Carpet Care",
        "Window Washing",
        "Post-Construction Cleanup",
        "Scheduled or On-Demand Services",
      ],
      color: "blue",
    },
    {
      icon: Monitor,
      title: "Virtual Assistant Services",
      description: "Let us handle your admin while you focus on growth. Our trained VAs support with:",
      features: [
        "Email & Calendar Management",
        "Data Entry & Reporting",
        "Customer Support",
        "Online Research",
        "Document Preparation",
        "Social Media Scheduling",
      ],
      color: "green",
    },
    {
      icon: ClipboardList,
      title: "Project Management Services",
      description: "Your goals, expertly delivered. We plan, execute, and monitor your projects from start to finish:",
      features: [
        "Project Planning & Roadmapping",
        "Team Coordination",
        "Task & Time Management",
        "Reporting & Progress Updates",
        "Workflow Optimization",
        "Agile, Waterfall, or Hybrid Approaches",
      ],
      color: "yellow",
    },
  ]

  return (
    <section id="services" className="py-16 md:py-20 bg-white">
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
            Our Services
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Comprehensive solutions tailored to your business needs
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              whileHover={{ scale: 1.08, y: -10 }}
              transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
              className={`h-full ${index === 2 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <Card
                className={`h-full border-2 hover:border-${service.color}-200 transition-all duration-300 hover:shadow-xl`}
              >
                <CardHeader className="text-center">
                  <motion.div
                    className={`w-16 h-16 bg-${service.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}
                    variants={bounceAnimation}
                    whileInView="animate"
                    viewport={{ once: true }}
                  >
                    <service.icon className={`w-8 h-8 text-${service.color}-600`} />
                  </motion.div>
                  <CardTitle className="text-xl md:text-2xl text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm md:text-base">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
