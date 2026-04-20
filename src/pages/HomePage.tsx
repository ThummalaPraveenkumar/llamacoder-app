import { motion } from "framer-motion";
import { ArrowRight, Users, Building2, GraduationCap, Briefcase, Award, TrendingUp, CheckCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import type { PageType } from "../types";

interface HomePageProps {
  onNavigate: (page: PageType) => void;
}

const stats = [
  { label: "Students Placed", value: "50,000+", icon: Users },
  { label: "Partner Colleges", value: "500+", icon: GraduationCap },
  { label: "Hiring Companies", value: "1,200+", icon: Building2 },
  { label: "Average Package", value: "₹8.5 LPA", icon: Award },
];

const features = [
  { title: "Corporate Readiness Score", description: "AI-powered assessment measuring your industry readiness.", icon: TrendingUp },
  { title: "Digital Student Profile", description: "Comprehensive portfolio showcasing your skills and achievements.", icon: Briefcase },
  { title: "Job Marketplace", description: "Access curated job opportunities from top companies.", icon: Building2 },
  { title: "Skill Assessments", description: "Industry-standard assessments with instant feedback.", icon: Award },
];

const howItWorks = [
  { step: "01", title: "Register & Build Profile", description: "Create your account and build a comprehensive digital profile." },
  { step: "02", title: "Learn & Get Certified", description: "Access industry-relevant training programs and earn certifications." },
  { step: "03", title: "Prove Your Readiness", description: "Take assessments to validate your skills and earn your score." },
  { step: "04", title: "Get Hired", description: "Connect with top companies and land your dream job." },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-indigo-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 text-sm font-medium mb-6">
                <span className="animate-pulse mr-2 h-2 w-2 bg-indigo-500 rounded-full"></span>
                India's #1 College to Corporate Platform
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                From <span className="text-indigo-600">College</span> to <span className="text-violet-600">Corporate</span> World
              </h1>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
                Bridge the gap between academia and industry. Get trained on real-world skills, prove your readiness, and land your dream job.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => onNavigate("auth")} className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white group">
                  Register as Student <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => onNavigate("colleges")} className="border-2 border-slate-300 hover:border-indigo-300">
                  Partner Your College
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-violet-400 border-2 border-white flex items-center justify-center text-white text-xs font-medium">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-slate-600">
                  <span className="font-semibold text-slate-900">50,000+</span> students already placed
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-slate-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-slate-900">Your Readiness Score</h3>
                  <span className="text-sm text-slate-500">Updated today</span>
                </div>
                <div className="flex items-center justify-center py-8">
                  <div className="relative">
                    <svg className="w-48 h-48 transform -rotate-90">
                      <circle cx="96" cy="96" r="88" stroke="#e2e8f0" strokeWidth="12" fill="none" />
                      <circle cx="96" cy="96" r="88" stroke="url(#gradient)" strokeWidth="12" fill="none" strokeDasharray="553" strokeDashoffset="110" strokeLinecap="round" />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#4f46e5" />
                          <stop offset="100%" stopColor="#7c3aed" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-5xl font-bold text-slate-900">85</span>
                      <span className="text-slate-500 text-sm">out of 100</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-indigo-600">92%</div>
                    <div className="text-xs text-slate-500">Technical</div>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-violet-600">78%</div>
                    <div className="text-xs text-slate-500">Soft Skills</div>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-emerald-600">85%</div>
                    <div className="text-xs text-slate-500">Domain</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-xl mb-4">
                  <stat.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-slate-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Everything You Need to Get <span className="text-indigo-600">Job-Ready</span></h2>
            <p className="mt-4 text-lg text-slate-600">Our comprehensive platform provides end-to-end solutions for students, colleges, and corporates.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <Card className="h-full hover:shadow-lg transition-shadow border-slate-200 bg-white">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-xl flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Learn → Prove → <span className="text-indigo-600">Get Hired</span></h2>
            <p className="mt-4 text-lg text-slate-600">A simple, proven process to transform from student to corporate professional.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <motion.div key={item.step} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.15 }} className="relative">
                <div className="text-6xl font-bold text-slate-100">{item.step}</div>
                <h3 className="text-lg font-semibold text-slate-900 mt-2">{item.title}</h3>
                <p className="text-slate-600 text-sm mt-2">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* User Types */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-violet-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">Built for Every Stakeholder</h2>
            <p className="mt-4 text-lg text-indigo-200">Whether you're a student, college, or corporate, we have solutions tailored for you.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "For Students", description: "Build your profile, get trained, prove your skills, and land your dream job.", features: ["Digital Portfolio", "Skill Assessments", "Job Matching", "Career Guidance"], cta: "Register Now", page: "students" as PageType },
              { title: "For Colleges", description: "Transform your placement outcomes with industry-aligned training programs.", features: ["Placement Analytics", "Training Programs", "Industry Connect", "Brand Building"], cta: "Partner With Us", page: "colleges" as PageType },
              { title: "For Corporates", description: "Access a pool of pre-assessed, job-ready candidates for your hiring needs.", features: ["Pre-screened Talent", "Reduced Hiring Cost", "Bulk Hiring", "Assessment Reports"], cta: "Start Hiring", page: "corporates" as PageType },
            ].map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-indigo-200 mb-6">{item.description}</p>
                <ul className="space-y-3 mb-8">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />{feature}
                    </li>
                  ))}
                </ul>
                <Button onClick={() => onNavigate(item.page)} className="w-full bg-white text-indigo-900 hover:bg-indigo-50">{item.cta}</Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Ready to Transform Your Career?</h2>
            <p className="mt-4 text-lg text-slate-600">Join thousands of students who have successfully transitioned from college to corporate world.</p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" onClick={() => onNavigate("auth")} className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white">Get Started for Free</Button>
              <Button size="lg" variant="outline" onClick={() => onNavigate("contact")} className="border-2">Talk to an Expert</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}