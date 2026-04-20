import { motion } from "framer-motion";
import { Users, Target, Award, Heart } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import type { PageType } from "../types";

interface AboutPageProps {
  onNavigate?: (page: PageType) => void;
}

const values = [
  { icon: Target, title: "Mission-Driven", description: "Bridging the gap between academia and industry, one student at a time." },
  { icon: Users, title: "Student-First", description: "Every decision we make puts student success at the center." },
  { icon: Award, title: "Excellence", description: "We strive for the highest quality in everything we do." },
  { icon: Heart, title: "Impact", description: "Creating meaningful career transformations across India." },
];

const team = [
  { name: "Rajesh Kumar", role: "Founder & CEO", initials: "RK", description: "15+ years in EdTech and placements." },
  { name: "Priya Menon", role: "CTO", initials: "PM", description: "Ex-Google, IIT Bombay alumni." },
  { name: "Amit Sharma", role: "Head of Training", initials: "AS", description: "20+ years in corporate training." },
  { name: "Sneha Patel", role: "Head of Partnerships", initials: "SP", description: "Built 500+ college partnerships." },
];

const timeline = [
  { year: "2019", event: "C2CW Founded", description: "Started with a vision to transform placements." },
  { year: "2020", event: "First 50 Colleges", description: "Onboarded first batch of partner colleges." },
  { year: "2021", event: "10,000 Placements", description: "Crossed 10,000 student placements." },
  { year: "2022", event: "Corporate Expansion", description: "500+ companies on platform." },
  { year: "2023", event: "Pan-India Presence", description: "Operations in 20+ states." },
  { year: "2024", event: "50,000+ Placements", description: "Milestone achievement unlocked." },
];

export default function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
              About <span className="text-indigo-600">C2CW</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              India's leading Talent Supply Chain Platform, bridging the gap between colleges and corporates since 2019.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-slate-600 mb-4">
                We believe every student deserves access to quality career opportunities, regardless of their college tier or location.
              </p>
              <p className="text-slate-600 mb-4">
                C2CW was founded with a simple yet powerful vision: to create a seamless pipeline between academia and industry, ensuring students are job-ready from day one.
              </p>
              <p className="text-slate-600">
                Through our innovative Corporate Readiness Score, comprehensive training programs, and strong corporate partnerships, we're transforming how India hires fresh talent.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-indigo-50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-indigo-600">500+</div>
                  <div className="text-sm text-slate-600">Partner Colleges</div>
                </div>
                <div className="bg-violet-50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-violet-600">50,000+</div>
                  <div className="text-sm text-slate-600">Students Placed</div>
                </div>
                <div className="bg-emerald-50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-emerald-600">1,200+</div>
                  <div className="text-sm text-slate-600">Hiring Companies</div>
                </div>
                <div className="bg-amber-50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-amber-600">20+</div>
                  <div className="text-sm text-slate-600">States Covered</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Our <span className="text-indigo-600">Values</span></h2>
            <p className="mt-4 text-lg text-slate-600">The principles that guide everything we do.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div key={value.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <Card className="h-full border-slate-200 bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{value.title}</h3>
                    <p className="text-slate-600 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Our <span className="text-indigo-600">Journey</span></h2>
            <p className="mt-4 text-lg text-slate-600">Key milestones in our growth story.</p>
          </motion.div>

          <div className="space-y-6">
            {timeline.map((item, index) => (
              <motion.div key={item.year} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex items-start">
                <div className="flex-shrink-0 w-20 text-right pr-4">
                  <span className="text-indigo-600 font-bold">{item.year}</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-indigo-600 rounded-full mt-1" />
                <Card className="ml-4 flex-1 border-slate-200 bg-white">
                  <CardContent className="p-4">
                    <div className="font-semibold text-slate-900">{item.event}</div>
                    <div className="text-sm text-slate-600">{item.description}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Leadership <span className="text-indigo-600">Team</span></h2>
            <p className="mt-4 text-lg text-slate-600">Meet the people driving our mission forward.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div key={member.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <Card className="border-slate-200 bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                      {member.initials}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">{member.name}</h3>
                    <p className="text-indigo-600 text-sm mb-2">{member.role}</p>
                    <p className="text-slate-500 text-sm">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-violet-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Join Our Mission</h2>
          <p className="mt-4 text-lg text-indigo-100">Be part of India's largest college-to-corporate transformation.</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" onClick={() => onNavigate?.("auth")} className="bg-white text-indigo-600 hover:bg-indigo-50">Get Started</Button>
            <Button size="lg" variant="outline" onClick={() => onNavigate?.("contact")} className="border-2 border-white text-white hover:bg-white/10">Contact Us</Button>
          </div>
        </div>
      </section>
    </div>
  );
}