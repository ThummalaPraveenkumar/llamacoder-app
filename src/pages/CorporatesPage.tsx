import { motion } from "framer-motion";
import { ArrowRight, Users, Clock, TrendingDown, CheckCircle, Briefcase, Building2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import type { PageType } from "../types";

interface CorporatesPageProps {
  onNavigate: (page: PageType) => void;
}

const benefits = [
  { icon: Users, title: "Pre-Screened Talent Pool", description: "Access candidates with validated Corporate Readiness Scores.", value: "50,000+" },
  { icon: Clock, title: "Faster Hiring Process", description: "Reduce time-to-hire with pre-assessed candidates.", value: "60% faster" },
  { icon: TrendingDown, title: "Reduced Hiring Costs", description: "Lower cost-per-hire compared to traditional methods.", value: "40% savings" },
  { icon: Briefcase, title: "Bulk Hiring Support", description: "Scale your fresher hiring efficiently.", value: "Any volume" },
];

const hiringSolutions = [
  { title: "Campus Placements", description: "Participate in campus drives across 500+ partner colleges.", features: ["On-campus drives", "Virtual hiring", "Pre-placement talks"] },
  { title: "Direct Hiring", description: "Hire directly from our pre-assessed candidate pool.", features: ["Instant matching", "Skill verification", "Interview scheduling"] },
  { title: "Internship Programs", description: "Build your talent pipeline through structured internships.", features: ["Project-based", "Stipend management", "Conversion tracking"] },
];

export default function CorporatesPage({ onNavigate }: CorporatesPageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6">For Corporates & Recruiters</div>
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
                Hire <span className="text-blue-600">Job-Ready</span> Freshers
              </h1>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Access a pool of pre-assessed, industry-ready candidates. Reduce hiring costs and time with our intelligent matching system.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => onNavigate("auth")} className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white group">
                  Start Hiring <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => onNavigate("contact")} className="border-2 border-slate-300">Schedule Consultation</Button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Corporate Dashboard Preview</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                    <span className="text-slate-600">Active Job Postings</span>
                    <span className="text-2xl font-bold text-blue-600">12</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-indigo-50 rounded-lg">
                    <span className="text-slate-600">Applications Received</span>
                    <span className="text-2xl font-bold text-indigo-600">847</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-lg">
                    <span className="text-slate-600">Candidates Shortlisted</span>
                    <span className="text-2xl font-bold text-emerald-600">156</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-amber-50 rounded-lg">
                    <span className="text-slate-600">Offers Made</span>
                    <span className="text-2xl font-bold text-amber-600">48</span>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Why Companies <span className="text-blue-600">Trust C2CW</span></h2>
            <p className="mt-4 text-lg text-slate-600">Streamline your fresher hiring with our comprehensive platform.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div key={benefit.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 border-slate-200 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                    <p className="text-slate-600 text-sm mb-3">{benefit.description}</p>
                    <div className="text-xl font-bold text-blue-600">{benefit.value}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Solutions */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Hiring <span className="text-blue-600">Solutions</span></h2>
            <p className="mt-4 text-lg text-slate-600">Multiple ways to find your ideal candidates.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {hiringSolutions.map((solution, index) => (
              <motion.div key={solution.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <Card className="h-full border-slate-200 bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Building2 className="h-10 w-10 text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{solution.title}</h3>
                    <p className="text-slate-600 text-sm mb-4">{solution.description}</p>
                    <ul className="space-y-2">
                      {solution.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-slate-600">
                          <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />{feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Ready to Build Your Team?</h2>
          <p className="mt-4 text-lg text-blue-100">Join 1,200+ companies hiring through C2CW.</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" onClick={() => onNavigate("auth")} className="bg-white text-blue-600 hover:bg-blue-50">Start Hiring</Button>
            <Button size="lg" variant="outline" onClick={() => onNavigate("contact")} className="border-2 border-white text-white hover:bg-white/10">Talk to Expert</Button>
          </div>
        </div>
      </section>
    </div>
  );
}