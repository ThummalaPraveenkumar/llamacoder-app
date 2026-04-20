import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Users, Building2, Award, CheckCircle, TrendingUp } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import type { PageType } from "../types";

interface CollegesPageProps {
  onNavigate: (page: PageType) => void;
}

const features = [
  { icon: BarChart3, title: "Placement Analytics Dashboard", description: "Real-time insights into placement performance, student readiness, and hiring trends." },
  { icon: Users, title: "Industry-Aligned Training", description: "Curriculum designed with corporate partners to ensure job-ready graduates." },
  { icon: Building2, title: "Corporate Connect Platform", description: "Direct access to 1,200+ hiring companies for campus placements." },
  { icon: Award, title: "Brand Building & Visibility", description: "Showcase your college to top recruiters and improve placement rankings." },
];

const plans = [
  { name: "Basic", price: "₹25,000", period: "/year", features: ["Up to 500 students", "Basic analytics", "Job board access", "Email support"], popular: false },
  { name: "Premium", price: "₹75,000", period: "/year", features: ["Up to 2,000 students", "Advanced analytics", "Training programs", "Dedicated manager", "Priority support"], popular: true },
  { name: "Enterprise", price: "Custom", period: "", features: ["Unlimited students", "Full platform access", "Custom integrations", "On-campus training", "24/7 support"], popular: false },
];

export default function CollegesPage({ onNavigate }: CollegesPageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 text-sm font-medium mb-6">For Colleges & Universities</div>
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
                Transform Your <span className="text-emerald-600">Placement Outcomes</span>
              </h1>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Partner with C2CW to bridge the gap between academia and industry. Get access to corporate partnerships, training programs, and placement analytics.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => onNavigate("auth")} className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white group">
                  Partner Your College <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => onNavigate("contact")} className="border-2 border-slate-300">Schedule Demo</Button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">College Dashboard Preview</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-emerald-50 rounded-lg text-center">
                    <div className="text-3xl font-bold text-emerald-600">94%</div>
                    <div className="text-sm text-slate-600">Placement Rate</div>
                  </div>
                  <div className="p-4 bg-teal-50 rounded-lg text-center">
                    <div className="text-3xl font-bold text-teal-600">₹8.5L</div>
                    <div className="text-sm text-slate-600">Avg Package</div>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg text-center">
                    <div className="text-3xl font-bold text-blue-600">156</div>
                    <div className="text-sm text-slate-600">Companies Visited</div>
                  </div>
                  <div className="p-4 bg-violet-50 rounded-lg text-center">
                    <div className="text-3xl font-bold text-violet-600">2,450</div>
                    <div className="text-sm text-slate-600">Students Placed</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Why Colleges <span className="text-emerald-600">Choose C2CW</span></h2>
            <p className="mt-4 text-lg text-slate-600">Comprehensive solutions to elevate your institution's placement performance.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 border-slate-200 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-slate-600 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Choose Your <span className="text-emerald-600">Partnership Plan</span></h2>
            <p className="mt-4 text-lg text-slate-600">Flexible plans designed for institutions of all sizes.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div key={plan.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <Card className={`h-full ${plan.popular ? 'border-2 border-emerald-500 relative' : 'border-slate-200'} bg-white`}>
                  {plan.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-emerald-500 text-white text-xs font-medium rounded-full">Most Popular</div>}
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-slate-900">{plan.name}</h3>
                    <div className="mt-4 mb-6">
                      <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                      <span className="text-slate-500">{plan.period}</span>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-slate-600">
                          <CheckCircle className="h-5 w-5 text-emerald-500 mr-2" />{feature}
                        </li>
                      ))}
                    </ul>
                    <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`} onClick={() => onNavigate("auth")}>
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Ready to Transform Your Placements?</h2>
          <p className="mt-4 text-lg text-emerald-100">Join 500+ colleges already partnering with C2CW.</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" onClick={() => onNavigate("auth")} className="bg-white text-emerald-600 hover:bg-emerald-50">Partner Now</Button>
            <Button size="lg" variant="outline" onClick={() => onNavigate("contact")} className="border-2 border-white text-white hover:bg-white/10">Schedule Demo</Button>
          </div>
        </div>
      </section>
    </div>
  );
}