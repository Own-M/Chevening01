"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GraduationCap, PhoneCall, FileText, Users, FileCheck, ClipboardList, Send, Briefcase } from "lucide-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Roadmap Steps Data
const roadmapSteps = [
  { title: "Apply to 5 UK Universities", description: "We carefully apply to five top universities in the UK on your behalf, maximizing your chances of admission.", icon: GraduationCap },
  { title: "Write Statement of Purpose", description: "Craft a compelling SOP that highlights your strengths, goals, and vision for the future.", icon: FileText },
  { title: "Recommendation Letter", description: "Provide professional recommendation letters that strengthen your application.", icon: Users },
  { title: "International Formatted CV", description: "Design a CV tailored to international standards that speaks for your achievements.", icon: Briefcase },
  { title: "Development Impact Document", description: "Highlight your potential impact and contributions with a professional development document.", icon: ClipboardList },
  { title: "Fillout & Submit Application", description: "We help you fill out, review, and submit your applications seamlessly with your contribution.", icon: Send },
  { title: "Manage Conditional & Unconditional Offer Letters", description: "We assist you in handling and managing both conditional and unconditional offer letters efficiently.", icon: FileCheck },
];

export default function ScholarshipLanding() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  // Correctly typed
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thank you! Our team will contact you soon.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-blue-900 to-blue-800 text-white overflow-hidden">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4">
        <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent drop-shadow-lg">
          Chevening Scholarship 2025
        </motion.h1>
        <p className="text-lg md:text-xl max-w-3xl text-gray-200">
          Fully Funded Scholarship Assistance Program by <span className="text-yellow-400 font-semibold">Gainers Future</span>. Unlock opportunities, explore eligibility, and begin your UK journey today!
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8 w-full max-w-md">
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="p-4 rounded-lg text-black" required />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="p-4 rounded-lg text-black" required />
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="p-4 rounded-lg text-black" required />
          <Button type="submit" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-2xl font-bold">Submit</Button>
        </form>

        <div className="flex flex-wrap gap-4 mt-8">
          <Link href="/eligibility"><Button className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-8 py-4 rounded-2xl font-bold">Check Eligibility</Button></Link>
          <Link href="https://wa.me/8801XXXXXXXXX" target="_blank"><Button className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white px-8 py-4 rounded-2xl flex items-center gap-2"><PhoneCall size={18} /> Connect on WhatsApp</Button></Link>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="bg-gradient-to-br from-white via-blue-50 to-blue-100 py-20 px-6 md:px-20">
        <motion.h2 initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-extrabold text-center text-[#1D4ED8] mb-16 drop-shadow-sm">
          How Gainers Future Will Help You
        </motion.h2>

        <div className="relative border-l-4 border-[#1D4ED8] ml-6">
          {roadmapSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div key={index} initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }} viewport={{ once: true }} className="mb-12 ml-6 relative">
                <div className="absolute -left-10 top-0 w-10 h-10 rounded-full bg-gradient-to-r from-[#1D4ED8] to-blue-400 flex items-center justify-center shadow-lg">
                  <Icon className="text-white w-5 h-5" />
                </div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-2xl shadow-xl border hover:shadow-2xl transition duration-300">
                  <h3 className="text-xl font-semibold text-[#1D4ED8] mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
