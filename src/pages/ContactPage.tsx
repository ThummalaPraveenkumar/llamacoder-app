import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Card, CardContent } from "../components/ui/card";
import { Label } from "../components/ui/label";

const contactInfo = [
  { icon: Mail, title: "Email", value: "info@c2cw.in", subtext: "We respond within 24 hours" },
  { icon: Phone, title: "Phone", value: "+91 98765 43210", subtext: "Mon-Fri, 9am-6pm IST" },
  { icon: MapPin, title: "Office", value: "Hyderabad, India", subtext: "Tech Park, HITEC City" },
  { icon: Clock, title: "Support Hours", value: "24/7 Online", subtext: "Platform support available" },
];

const faqs = [
  { q: "How does C2CW help students?", a: "C2CW provides industry-aligned training, Corporate Readiness Score, and direct connections to 1,200+ hiring companies." },
  { q: "What is the Corporate Readiness Score?", a: "It's an AI-powered score (0-100) that measures your industry readiness across technical skills, soft skills, and domain knowledge." },
  { q: "Is registration free for students?", a: "Yes, basic registration and profile creation is completely free. Premium training programs have separate pricing." },
  { q: "How can colleges partner with C2CW?", a: "Colleges can register through our platform or contact our partnerships team. We offer flexible subscription models." },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "", userType: "student" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "", userType: "student" });
    }, 3000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
              Get in <span className="text-indigo-600">Touch</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div key={info.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                <Card className="border-slate-200 bg-white hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-slate-900">{info.title}</h3>
                    <p className="text-indigo-600 font-medium mt-1">{info.value}</p>
                    <p className="text-slate-500 text-sm mt-1">{info.subtext}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
              <Card className="border-slate-200 bg-white">
                <CardContent className="p-6">
                  {submitted ? (
                    <div className="text-center py-12">
                      <CheckCircle className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-slate-900">Thank You!</h3>
                      <p className="text-slate-600 mt-2">We'll get back to you within 24 hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="John Doe" required className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="john@example.com" required className="mt-1" />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone">Phone</Label>
                          <Input id="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+91 98765 43210" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="userType">I am a</Label>
                          <select id="userType" value={formData.userType} onChange={(e) => setFormData({ ...formData, userType: e.target.value })} className="mt-1 w-full h-10 px-3 border border-slate-300 rounded-md text-sm">
                            <option value="student">Student</option>
                            <option value="college">College Representative</option>
                            <option value="corporate">Corporate Recruiter</option>
                            <option value="partner">Training Partner</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} placeholder="How can we help?" required className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us more about your inquiry..." rows={4} required className="mt-1" />
                      </div>
                      <Button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white">
                        <Send className="h-4 w-4 mr-2" /> Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index} className="border-slate-200 bg-white">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-slate-900">{faq.q}</h3>
                      <p className="text-slate-600 text-sm mt-2">{faq.a}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}