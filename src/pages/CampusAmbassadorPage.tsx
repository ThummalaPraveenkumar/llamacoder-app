import { motion } from "framer-motion";
import { ArrowRight, Users, Award, Gift, TrendingUp, CheckCircle, Star, Calendar } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import type { PageType } from "../types";

interface CampusAmbassadorPageProps {
  onNavigate: (page: PageType) => void;
}

const benefits = [
  { icon: Award, title: "Leadership Experience", description: "Develop leadership skills by managing campus activities." },
  { icon: Gift, title: "Earn Rewards", description: "Get cash rewards, certificates, and exclusive merchandise." },
  { icon: TrendingUp, title: "Career Boost", description: "Get priority access to job opportunities and internships." },
  { icon: Users, title: "Network Building", description: "Connect with students and professionals across India." },
];

const responsibilities = [
  "Promote C2CW programs in your college",
  "Organize workshops and events",
  "Help students with registration",
  "Share updates on social media",
  "Collect feedback from students",
  "Be the point of contact for C2CW",
];

const leaderboard = [
  { rank: 1, name: "Priya Sharma", college: "IIT Delhi", points: 2850 },
  { rank: 2, name: "Rahul Kumar", college: "NIT Trichy", points: 2720 },
  { rank: 3, name: "Ananya Singh", college: "BITS Pilani", points: 2650 },
];

export default function CampusAmbassadorPage({ onNavigate }: CampusAmbassadorPageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 via-white to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center px-4 py-2 bg-rose-100 rounded-full text-rose-700 text-sm font-medium mb-6">Campus Ambassador Program</div>
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
                Be the <span className="text-rose-600">Face of C2CW</span> on Your Campus
              </h1>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Join our elite network of Campus Ambassadors. Lead, inspire, and earn while helping your peers transition from college to corporate world.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => onNavigate("auth")} className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white group">
                  Apply Now <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => onNavigate("contact")} className="border-2 border-slate-300">Learn More</Button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Ambassador Dashboard Preview</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-rose-50 rounded-lg">
                    <span className="text-slate-600">Your Points</span>
                    <span className="text-2xl font-bold text-rose-600">1,250</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-pink-50 rounded-lg">
                    <span className="text-slate-600">Students Referred</span>
                    <span className="text-2xl font-bold text-pink-600">45</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-lg">
                    <span className="text-slate-600">Earnings</span>
                    <span className="text-2xl font-bold text-emerald-600">₹12,500</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-amber-50 rounded-lg">
                    <span className="text-slate-600">Your Rank</span>
                    <span className="text-2xl font-bold text-amber-600">#42</span>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Why Become an <span className="text-rose-600">Ambassador?</span></h2>
            <p className="mt-4 text-lg text-slate-600">Gain valuable experience and rewards while making an impact.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div key={benefit.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 border-slate-200 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
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

      {/* Responsibilities & Leaderboard */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Your Responsibilities</h2>
              <Card className="border-slate-200 bg-white">
                <CardContent className="p-6">
                  <ul className="space-y-4">
                    {responsibilities.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Top Ambassadors</h2>
              <Card className="border-slate-200 bg-white">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {leaderboard.map((ambassador) => (
                      <div key={ambassador.rank} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                        <div className="flex items-center">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 ${ambassador.rank === 1 ? 'bg-amber-500' : ambassador.rank === 2 ? 'bg-slate-400' : 'bg-amber-700'}`}>
                            {ambassador.rank}
                          </div>
                          <div>
                            <div className="font-medium text-slate-900">{ambassador.name}</div>
                            <div className="text-sm text-slate-500">{ambassador.college}</div>
                          </div>
                        </div>
                        <div className="text-rose-600 font-bold">{ambassador.points} pts</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-rose-600 to-pink-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Ready to Lead?</h2>
          <p className="mt-4 text-lg text-rose-100">Join 2,000+ Campus Ambassadors across India.</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" onClick={() => onNavigate("auth")} className="bg-white text-rose-600 hover:bg-rose-50">Apply Now</Button>
            <Button size="lg" variant="outline" onClick={() => onNavigate("contact")} className="border-2 border-white text-white hover:bg-white/10">Contact Us</Button>
          </div>
        </div>
      </section>
    </div>
  );
}