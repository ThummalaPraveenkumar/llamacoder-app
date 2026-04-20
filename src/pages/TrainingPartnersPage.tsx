import { motion } from "framer-motion";
import { ArrowRight, Users, Award, TrendingUp, CheckCircle, BookOpen } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import type { PageType } from "../types";

interface TrainingPartnersPageProps {
  onNavigate: (page: PageType) => void;
}

const benefits = [
  { icon: Users, title: "Access to Student Pool", description: "Train students from 500+ partner colleges across India." },
  { icon: Award, title: "Certification Authority", description: "Issue industry-recognized certifications to students." },
  { icon: TrendingUp, title: "Revenue Opportunity", description: "Earn through training programs and placement commissions." },
  { icon: BookOpen, title: "Curriculum Support", description: "Access to industry-aligned curriculum frameworks." },
];

const partnerTypes = [
  { title: "Technical Training", description: "Programming, Data Science, Cloud, DevOps, and more.", courses: "50+ courses" },
  { title: "Soft Skills", description: "Communication, Leadership, Presentation skills.", courses: "20+ courses" },
  { title: "Domain Specific", description: "Finance, Marketing, HR, Operations training.", courses: "30+ courses" },
  { title: "Certification Programs", description: "Industry certifications and credentialing.", courses: "40+ certifications" },
];

export default function TrainingPartnersPage({ onNavigate }: TrainingPartnersPageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center px-4 py-2 bg-amber-100 rounded-full text-amber-700 text-sm font-medium mb-6">For Training Partners</div>
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
                Scale Your <span className="text-amber-600">Training Business</span>
              </h1>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Partner with C2CW to train students from 500+ colleges. Access a large student pool, issue certifications, and grow your training business.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => onNavigate("auth")} className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white group">
                  Become a Partner <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => onNavigate("contact")} className="border-2 border-slate-300">Learn More</Button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Partner Dashboard Preview</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-amber-50 rounded-lg text-center">
                    <div className="text-3xl font-bold text-amber-600">15,000+</div>
                    <div className="text-sm text-slate-600">Students Trained</div>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg text-center">
                    <div className="text-3xl font-bold text-orange-600">₹45L</div>
                    <div className="text-sm text-slate-600">Earnings</div>
                  </div>
                  <div className="p-4 bg-emerald-50 rounded-lg text-center">
                    <div className="text-3xl font-bold text-emerald-600">85%</div>
                    <div className="text-sm text-slate-600">Placement Rate</div>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg text-center">
                    <div className="text-3xl font-bold text-blue-600">120</div>
                    <div className="text-sm text-slate-600">Active Batches</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Why Partners <span className="text-amber-600">Choose C2CW</span></h2>
            <p className="mt-4 text-lg text-slate-600">Everything you need to grow your training business.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div key={benefit.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 border-slate-200 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                    <p className="text-slate-600 text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Training <span className="text-amber-600">Categories</span></h2>
            <p className="mt-4 text-lg text-slate-600">Partner with us across various training domains.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerTypes.map((type, index) => (
              <motion.div key={type.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <Card className="h-full border-slate-200 bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{type.title}</h3>
                    <p className="text-slate-600 text-sm mb-3">{type.description}</p>
                    <span className="text-amber-600 font-medium text-sm">{type.courses}</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-600 to-orange-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Ready to Partner With Us?</h2>
          <p className="mt-4 text-lg text-amber-100">Join our network of 200+ training partners.</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" onClick={() => onNavigate("auth")} className="bg-white text-amber-600 hover:bg-amber-50">Apply Now</Button>
            <Button size="lg" variant="outline" onClick={() => onNavigate("contact")} className="border-2 border-white text-white hover:bg-white/10">Contact Us</Button>
          </div>
        </div>
      </section>
    </div>
  );
}