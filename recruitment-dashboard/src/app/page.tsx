"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowRight, Upload, Search, CheckCircle, ChevronRight } from "lucide-react"


export default function LandingPage() {
  const [email, setEmail] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      // Handle demo request submission
      console.log("Demo requested for:", email)
      // You would typically send this to your backend or email service
      // await submitDemoRequest(email) // Add your API call here
      
      // Navigate to dashboard
      router.push("/dashboard")
    } catch (error) {
      console.error("Error submitting demo request:", error)
      // Handle error (you might want to show an error message to the user)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="text-xl font-bold">HireQuality.ai</div>
          <div className="hidden md:flex space-x-4">
            <a href="#features" className="hover:text-blue-200 transition">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-blue-200 transition">
              How It Works
            </a>
            <a href="#demo" className="hover:text-blue-200 transition">
              Request Demo
            </a>
          </div>
        </nav>
        <div className="container mx-auto px-6 py-16 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            AI-Powered Talent Matching Based on Your Top Performers
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hire for Success, Not Just Keywords
          </motion.p>
          <motion.p
            className="text-xl md:text-2xl mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Predict Performance, Not Just Potential
          </motion.p>
          <motion.button
            className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Analyze Candidates
          </motion.button>
        </div>
      </header>

      {/* Value Proposition Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose AI Talent Match?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Beyond Keywords",
                description:
                  "Our AI goes beyond traditional keyword matching, understanding the semantic meaning behind resumes and job requirements.",
                icon: <Search className="w-12 h-12 text-blue-500" />,
              },
              {
                title: "Learn From Success",
                description:
                  "Our system analyzes your top performers to identify the unique traits that make them successful in your organization.",
                icon: <CheckCircle className="w-12 h-12 text-green-500" />,
              },
              {
                title: "Save Time & Improve Quality",
                description:
                  "Reduce time-to-hire and improve candidate quality by focusing on applicants who truly match your best employees.",
                icon: <ArrowRight className="w-12 h-12 text-purple-500" />,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8">
            {[
              {
                step: "Upload",
                description: "Upload your top performer resumes and job requirements",
                icon: <Upload className="w-12 h-12 text-blue-500" />,
              },
              {
                step: "Analyze",
                description: "Our AI analyzes patterns in successful employees",
                icon: <Search className="w-12 h-12 text-green-500" />,
              },
              {
                step: "Match",
                description: "Receive ranked candidates with detailed matching insights",
                icon: <CheckCircle className="w-12 h-12 text-purple-500" />,
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center mb-8 md:mb-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="bg-gray-100 rounded-full p-4 mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">
                  Step {index + 1}: {step.step}
                </h3>
                <p className="text-gray-600">{step.description}</p>
                {index < 2 && <ChevronRight className="hidden md:block w-8 h-8 text-gray-400 mt-4" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Request Section */}
      <section id="demo" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Hiring Process?</h2>
          <p className="text-xl mb-8">Request a demo and see how AI Talent Match can revolutionize your recruitment.</p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex items-center border-b border-blue-500 py-2">
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="email"
                placeholder="Enter your email"
                aria-label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <motion.button
                className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request Demo
              </motion.button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold">AI Talent Match</h3>
              <p className="mt-2">Revolutionizing recruitment with AI</p>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4">
              <a href="#" className="hover:text-blue-300 transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-300 transition">
                Terms of Service
              </a>
              <a href="mailto:contact@aitalentmatch.com" className="hover:text-blue-300 transition">
                contact@aitalentmatch.com
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            <p>&copy; 2023 AI Talent Match. All rights reserved.</p>
            <p className="mt-2">Created for the AI Recruitment Hackathon</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
