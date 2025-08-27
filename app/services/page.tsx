"use client";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            Delivering excellence across industries with expertise and innovation.
          </motion.p>
        </div>
      </section>

      {/* Core Competence */}
      <section className="py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Image
              src={"/core.jpg"}
              className="rounded-3xl shadow-lg object-cover"
              alt="core-competence"
              width={550}
              height={500}
              priority
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">
              Core Competence
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">
              Expertise You Can Trust
            </h2>
            <div className="bg-white/80 backdrop-blur-sm shadow-md rounded-2xl p-8 border border-gray-100">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                DSJ Project Consulting Inc ® is an industry leader in providing
                consulting, engineering, supply chain management, inspection,
                compliance, integrity, and environmental services to our valued
                clients across all industries.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We leverage our expertise to provide best-in-class solutions to
                meet our clients’ needs and sustain their bottom line.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sectors We Serve
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="text-5xl mb-4">{sector.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {sector.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-slate-700 to-slate-900 text-white text-center">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 leading-snug"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Let&apos;s Build Something Great Together
          </motion.h2>
          <motion.p
            className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            Talk to our consultants today and explore tailored solutions for your business.
          </motion.p>
          <Link href={'mailto:ty@dsjconsult.com'}>
          <motion.button
            className="bg-white text-blue-700 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full inline-flex items-center transition-colors shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            Contact Us <ArrowRight size={20} className="ml-2" />
          </motion.button>
            </Link>
        </div>
      </section>
    </div>
  );
}
