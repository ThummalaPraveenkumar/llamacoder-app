import { motion } from "framer-motion";
import { ArrowRight, Quote, Star } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import type { PageType } from "../types";

interface SuccessStoriesPageProps {
  onNavigate?: (page: PageType) => void;
}

const stories = [
  { id: 1, name: "Priya Sharma", college: "IIT Delhi", company: "Google", role: "Software Engineer", package: "₹45 LPA", image: "PS", testimonial: "C2CW transformed my career journey. The Corporate Readiness Score helped me identify my gaps and the training programs filled them perfectly.", rating: 5 },
  { id: 2, name: "Rahul Kumar", college: "NIT Trichy", company: "Amazon", role: "Data Analyst", package: "₹32 LPA", image: "RK", testimonial: "The assessment system was incredibly helpful. It prepared me for real interview scenarios and boosted my confidence significantly.", rating: 5 },
  { id: 3, name: "Ananya Singh", college: "BITS Pilani", company: "Microsoft", role: "Product Manager", package: "₹38 LPA", image: "AS", testimonial: "From a confused college student to a confident professional - C2CW made it possible. The mentorship was exceptional.", rating: 5 },
  { id: 4, name: "Vikram Patel", college: "IIIT Hyderabad", company: "Flipkart", role: "Full Stack Developer", package: "₹28 LPA", image: "VP", testimonial: "The project-based learning approach helped me build a strong portfolio. Got placed within 2 months of completing the program.", rating: 5 },
  { id: 5, name: "Sneha Reddy", college: "ISB Hyderabad", company: "McKinsey", role: "Business Analyst", package: "₹35 LPA", image: "SR", testimonial: "The soft skills training was a game changer. I cracked multiple interviews with the confidence I gained from C2CW.", rating: 5 },
  { id: 6, name: "Arjun Mehta", college: "VIT Vellore", company: "TCS", role: "Systems Engineer", package: "₹12 LPA", image: "AM", testimonial: "Coming from a tier-2 college, I never thought I could get such a good package. C2CW made it possible.", rating: 4 },
];

const stats = [
  { label: "Students Placed", value: "50,000+" },
  { label: "Average Package", value: "₹8.5 LPA" },
  { label: "Highest Package", value: "₹1.2 Cr" },
  { label: "Partner Companies", value: "1,200+" },
];

export default function SuccessStoriesPage({ onNavigate }: SuccessStoriesPageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-violet-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-violet-100 rounded-full text-violet-700 text-sm font-medium mb-6">Success Stories</div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
              From <span className="text-violet-600">Classrooms</span> to <span className="text-purple-600">Boardrooms</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Real stories of students who transformed their careers through C2CW. Your success story could be next.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="text-center">
                <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-slate-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <motion.div key={story.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <Card className="h-full border-slate-200 bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                        {story.image}
                      </div>
                      <div className="ml-3">
                        <div className="font-semibold text-slate-900">{story.name}</div>
                        <div className="text-sm text-slate-500">{story.college}</div>
                      </div>
                    </div>
                    <div className="flex items-center mb-3">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <Quote className="h-6 w-6 text-violet-200 mb-2" />
                    <p className="text-slate-600 text-sm mb-4">{story.testimonial}</p>
                    <div className="pt-4 border-t border-slate-100">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium text-slate-900">{story.company}</div>
                          <div className="text-sm text-slate-500">{story.role}</div>
                        </div>
                        <div className="text-lg font-bold text-emerald-600">{story.package}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-violet-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Your Story Starts Here</h2>
          <p className="mt-4 text-lg text-violet-100">Join thousands of successful professionals who started their journey with C2CW.</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" onClick={() => onNavigate?.("auth")} className="bg-white text-violet-600 hover:bg-violet-50">Start Your Journey</Button>
            <Button size="lg" variant="outline" onClick={() => onNavigate?.("contact")} className="border-2 border-white text-white hover:bg-white/10">Talk to Us</Button>
          </div>
        </div>
      </section>
    </div>
  );
}