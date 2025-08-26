'use client'
import { motion } from "motion/react";
import { ArrowRight, Users } from "lucide-react";
import Image from "next/image";

export default function Page() {
  const sectors = [
    { name: "Oil & Gas", icon: "🛢️" },
    { name: "Healthcare", icon: "🏥" },
    { name: "IT Solutions", icon: "💻" },
    { name: "Governance", icon: "🏛️" },
    { name: "Strategic & Crisis", icon: "📊" },
    { name: "Manufacturing", icon: "🏭" },
  ];
  return (
    <div className="min-h-screen bg-white">

      <section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-50 to-gray-100">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 w-full bg-no-repeat object-cover opacity-50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-700">
              Delivering excellence across industries with expertise and
              innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Competence Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              {/* <div className="bg-gray-100 rounded-2xl p-6 h-96 flex items-center justify-center">
                <div className="text-center">
                  <Users size={64} className="mx-auto text-blue-600 mb-4" />
                  <p className="text-gray-600">Teamwork illustration</p>
                </div>
              </div> */}
              <Image src={'/core.jpg'} className="rounded-lg" alt="core-competence" width={500} height={500} priority />
            </motion.div>
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-2 text-sm text-gray-500">
                Home / Core Competence
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Core Competence
              </h2>
              <div className="bg-white shadow-md rounded-xl p-8 border border-gray-100">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  DSJ Project Consulting Inc ® is an industry leader in
                  providing consulting, engineering, supply chain management,
                  inspection, compliance and integrity, and environmental
                  services to our valued clients across all industries.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We leverage our expertise to provide best-in-class solutions
                  to meet our client's needs and sustain their bottom line.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sectors We Serve
            </h2>
            <div className="h-1 w-16 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="text-4xl mb-4">{sector.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {sector.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Build Something Great Together
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Talk to our consultants today and explore tailored solutions for
              your business.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full inline-flex items-center transition-colors">
              Contact Us <ArrowRight size={20} className="ml-2" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
