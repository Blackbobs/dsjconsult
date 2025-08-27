"use client"

import { motion } from "motion/react"

type Service = {
  title: string
  description: string
  icon: string
}

type ServicesSectionProps = {
  limit?: number // optional prop
}

export function ServicesSection({ limit }: ServicesSectionProps) {
  const services: Service[] = [
    {
      title: "CONSULTING",
      description:
        "DSJ offers wide range of consulting solutions and ideas to our clients. Our Consulting solutions cover the following field: Oil & Gas, Healthcare, IT solutions, Governance, Strategic & Crisis",
      icon: "📊",

    },
    {
      title: "OFFSHORE FACILITIES MANAGEMENT",
      description: "DSJ provides end-to-end offshore facilities management solutions that ensure safety, efficiency, and compliance. From maintenance and logistics support to health and safety oversight, we help clients optimize offshore operations while minimizing risks.",
      icon: "🏗️",
    },
    {
      title: "NDT INSPECTION",
      description: "Our Non-Destructive Testing (NDT) inspection services deliver precise evaluations of materials and structures without causing damage. We apply industry-leading techniques to ensure asset reliability, safety, and compliance with international standards.",
      icon: "🔍",
    },
    {
      title: "PROJECT MANAGEMENT",
      description:
        "DSJ Project Management Framework (PMF) delivers proven results through current industry-leading practices focusing on optimizing our clients’ program/project results and return on investment.",
      icon: "📂",
    },
    {
      title: "SUPPLY CHAIN MANAGEMENT",
      description:
        "Emerging and maturing markets, new technologies, regulatory requirements and changing weather, all affect supply chain. Our solutions help SCM leaders minimize costs and improve resilience.",
      icon: "🔗",
    },
    {
      title: "ENGINEERING",
      description:
        "DSJ is positioned to provide engineering services such as Subsurface evaluations. We are a resourceful group of dedicated specialists delivering exceptional engineering solutions.",
      icon: "⚙️",
    },
  ]

  const displayedServices = limit ? services.slice(0, limit) : services

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
            DSJ offers a full spectrum of services to help organizations work better
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedServices.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 h-full flex flex-col items-center text-center transition hover:shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
