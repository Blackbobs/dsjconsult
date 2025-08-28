"use client";

import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send email");

      toast.success("Email sent successfully! 🎉");
      setFormData({ email: "", subject: "", message: "" });
    } catch (error) {
      console.log(error);
      toast.error("Failed to send email ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-6">
      <Toaster position="top-right" />

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
          <h2 className="text-2xl font-bold text-gray-800">Get in touch</h2>
          <p className="text-gray-600">
            We’d love to hear from you. Whether you have a question about
            services, or anything else, our team is ready to answer all your
            questions.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-green-100">
                <Phone className="text-green-500 w-4 h-4" />
              </div>
              <div>
                <h3 className="text-gray-700 font-medium">Office Phone</h3>
                <Link
                  href="https://wa.me/17047758225"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +1 (704) 775-8225
                </Link>
              </div>
            </div>


            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-blue-100">
                <Mail className="text-blue-500 w-4 h-4" />
              </div>
              <div>
                <h3 className="text-gray-700 font-medium">Email</h3>
                <Link target="_blank" href={"mailto:ty@dsjconsult.com"} rel="noopener noreferrer">
                  ty@dsjconsult.com
                </Link>
              </div>
            </div>

            
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl p-8 space-y-6"
        >
          <h2 className="text-2xl font-semibold text-gray-800">
            Send us a message
          </h2>

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-100 rounded-lg text-gray-700 placeholder-gray-400  focus:outline-none"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-100 rounded-lg text-gray-700 placeholder-gray-400  focus:outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message..."
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-100 rounded-lg text-gray-700 placeholder-gray-400  focus:outline-none resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-800 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-colors mx-auto flex items-center justify-center disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:bg-gray-400"
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Sending...</span>
              </div>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
