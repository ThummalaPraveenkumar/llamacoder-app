import { motion } from "framer-motion";
import { ArrowRight, Award, Briefcase, Users, TrendingUp, CheckCircle, Clock } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import type { PageType } from "../types";

interface StudentsPageProps {
  onNavigate: (page: PageType) => void;
}

const benefits = [
  { icon: Award, title: "Corporate Readiness Score", description: "Get an AI-powered score that reflects your industry readiness." },
  { icon: Briefcase, title: "Digital Profile & Portfolio", description: "Build a comprehensive digital profile showcasing your skills." },
  { icon: Users, title: "Direct Company Access", description: "Connect with 1,200+ hiring companies actively looking for talent." },
  { icon: TrendingUp, title: "Career Growth Tracking", description: "Track your learning progress and placement readiness." },
];

const trainingPrograms = [
  { title: "Full Stack Development", duration: "6 months", level: "Intermediate", skills: ["React", "Node.js", "MongoDB", "AWS"], placements: "2,500+" },
  { title: "Data Science & Analytics", duration: "6 months", level: "Advanced", skills: ["Python", "Machine Learning", "SQL", "Tableau"], placements: "1,800+" },
  { title: "Cloud & DevOps", duration: "4 months", level: "Intermediate", skills: ["Docker", "Kubernetes", "CI/CD", "Azure"], placements: "1,200+" },
  { title: "Digital Marketing", duration: "3 months", level: "Beginner", skills: ["SEO", "SEM", "Social Media", "Analytics"], placements: "950+" },
];

export default function StudentsPage({ onNavigate }: StudentsPageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-violet-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 text-sm font-medium mb-6">For Students</div>
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
                Your Journey from <span className="text-indigo-600">College</span> to <span className="text-violet-600">Dream Job</span>
              </h1>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Get trained on industry-relevant skills, build your digital profile, prove your readiness through assessments, and get placed in top companies.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => onNavigate("auth")} className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white group">
                  Register Now - It's Free <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => onNavigate("success")} className="border-2 border-slate-300">View Success Stories</Button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Student Dashboard Preview</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <span className="text-slate-600">Readiness Score</span>
                    <span className="text-2xl font-bold text-indigo-600">85/100</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <span className="text-slate-600">Profile Completion</span>
                    <span className="text-2xl font-bold text-emerald-600">92%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <span className="text-slate-600">Jobs Applied</span>
                    <span className="text-2xl font-bold text-violet-600">24</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <span className="text-slate-600">Interview Calls</span>
                    <span className="text-2xl font-bold text-amber-600">5</span>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Why Students <span className="text-indigo-600">Love C2CW</span></h2>
            <p className="mt-4 text-lg text-slate-600">Everything you need to kickstart your career in one platform.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div key={benefit.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 border-slate-200 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
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

      {/* Training Programs */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Industry-Relevant <span className="text-indigo-600">Training Programs</span></h2>
            <p className="mt-4 text-lg text-slate-600">Learn from industry experts and get placed in top companies.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {trainingPrograms.map((program, index) => (
              <motion.div key={program.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <Card className="h-full border-slate-200 bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold text-slate-900">{program.title}</h3>
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full">{program.level}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                      <span className="flex items-center"><Clock className="h-4 w-4 mr-1" />{program.duration}</span>
                      <span className="flex items-center"><CheckCircle className="h-4 w-4 mr-1 text-emerald-500" />{program.placements} placed</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {program.skills.map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">{skill}</span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" onClick={() => onNavigate("auth")} className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white">
              Explore All Programs <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-violet-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Ready to Start Your Career Journey?</h2>
          <p className="mt-4 text-lg text-indigo-100">Join 50,000+ students who have successfully launched their careers through C2CW.</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" onClick={() => onNavigate("auth")} className="bg-white text-indigo-600 hover:bg-indigo-50">Register for Free</Button>
            <Button size="lg" variant="outline" onClick={() => onNavigate("contact")} className="border-2 border-white text-white hover:bg-white/10">Talk to Counselor</Button>
          </div>
        </div>
      </section>
    </div>
  );
}