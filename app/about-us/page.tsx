'use client'
import React from 'react'
import { motion } from "motion/react"

export default function Page() {
    const imageUrls = {
        whoWeAre: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        vision: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        mission: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        about: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      }
      
    
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-4">
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          About DSJ Project Consulting
        </motion.h1>
        <motion.div
          className="h-1 w-20 bg-blue-600 mx-auto"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        ></motion.div>
      </motion.div>

      {/* Who We Are Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Who we are</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            DSJ Project Consulting Inc ® is an industry leader in providing consulting, engineering, 
            supply chain management, inspection, compliance and integrity, and environmental services 
            to our valued clients across all industries.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We leverage our expertise to provide best-in-class solution to meet our client's needs 
            and sustain their bottom line.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="w-full h-96 bg-gray-200 rounded-xl overflow-hidden">
            <img 
              src={imageUrls.whoWeAre} 
              alt="DSJ Project Consulting Team" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-600 rounded-xl z-10"></div>
        </motion.div>
      </div>

      {/* Vision & Mission Section */}
      <div className="mb-20">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">OUR VISION & MISSION</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-xl"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">OUR VISION</h3>
              <div className="h-1 w-16 bg-blue-600"></div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We strive to be solution provider Company and leader in providing project management 
              consultancy services to our numerous clients where creative and innovative ideas are 
              used to address complex problems.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We are committed to providing top notch services that guaranteed client's satisfaction.
            </p>
            <div className="mt-6 w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src={imageUrls.vision} 
                alt="Our Vision" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-blue-50 p-8 rounded-xl"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">OUR MISSION</h3>
              <div className="h-1 w-16 bg-blue-600"></div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              To be the premier consulting firm that leverage on our team of professionals to provide 
              project management, consulting, engineering and supply chain services across all industries. 
              We strive to provide Best-in-Class service to our clients through safe and efficient 
              operational excellence, process improvement, capital efficiency, risk mitigation and 
              bottom-line improvement.
            </p>
            <div className="mt-6 w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src={imageUrls.mission} 
                alt="Our Mission" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative order-2 lg:order-1"
        >
          <div className="w-full h-96 bg-gray-200 rounded-xl overflow-hidden">
            <img 
              src={imageUrls.about} 
              alt="About DSJ Project Consulting" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-600 rounded-xl z-10"></div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">ABOUT US</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            As a professional service firm, our greatest asset is the collective knowledge, passion, 
            and experience of our remarkable people. We develop robust solutions as unique as our 
            clients and as distinct as their needs.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
  )
}

