import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, User, Building2, Briefcase, GraduationCap, Users, Mail, Lock, Phone, MapPin } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent } from "../components/ui/card";
import { Label } from "../components/ui/label";
import type { PageType } from "../types";

interface AuthPageProps {
  onNavigate?: (page: PageType) => void;
}

type UserType = "student" | "college" | "corporate" | "partner";

const userTypes = [
  { id: "student" as UserType, label: "Student", icon: User, description: "Looking for jobs & training" },
  { id: "college" as UserType, label: "College", icon: GraduationCap, description: "Partner your institution" },
  { id: "corporate" as UserType, label: "Corporate", icon: Briefcase, description: "Hire trained talent" },
  { id: "partner" as UserType, label: "Training Partner", icon: Users, description: "Offer training programs" },
];

export default function AuthPage({ onNavigate }: AuthPageProps) {
  const [mode, setMode] = useState<"login" | "register">("register");
  const [userType, setUserType] = useState<UserType>("student");
  const [formData, setFormData] = useState({
    name: "", email: "", password: "", confirmPassword: "", phone: "",
    college: "", degree: "", branch: "", year: "", skills: "", careerInterest: "",
    collegeName: "", location: "", contactPerson: "", studentCount: "", courses: "",
    companyName: "", hiringRoles: "", hiringVolume: "", contactDetails: "",
    instituteName: "", trainers: "", experience: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`${mode === "register" ? "Registration" : "Login"} successful!`);
    onNavigate?.("dashboard");
  };

  const renderStudentFields = () => (
    <>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="college">College Name</Label>
          <Input id="college" value={formData.college} onChange={(e) => setFormData({ ...formData, college: e.target.value })} placeholder="Your college" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="degree">Degree</Label>
          <Input id="degree" value={formData.degree} onChange={(e) => setFormData({ ...formData, degree: e.target.value })} placeholder="B.Tech / B.E / B.Sc" className="mt-1" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="branch">Branch/Specialization</Label>
          <Input id="branch" value={formData.branch} onChange={(e) => setFormData({ ...formData, branch: e.target.value })} placeholder="Computer Science" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="year">Year of Study</Label>
          <select id="year" value={formData.year} onChange={(e) => setFormData({ ...formData, year: e.target.value })} className="mt-1 w-full h-10 px-3 border border-slate-300 rounded-md text-sm">
            <option value="">Select Year</option>
            <option value="1">1st Year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
            <option value="4">4th Year</option>
            <option value="5">5th Year</option>
          </select>
        </div>
      </div>
      <div>
        <Label htmlFor="skills">Skills (comma separated)</Label>
        <Input id="skills" value={formData.skills} onChange={(e) => setFormData({ ...formData, skills: e.target.value })} placeholder="Python, Java, React, Data Analysis" className="mt-1" />
      </div>
      <div>
        <Label htmlFor="careerInterest">Career Interest</Label>
        <select id="careerInterest" value={formData.careerInterest} onChange={(e) => setFormData({ ...formData, careerInterest: e.target.value })} className="mt-1 w-full h-10 px-3 border border-slate-300 rounded-md text-sm">
          <option value="">Select Career Interest</option>
          <option value="software">Software Development</option>
          <option value="data">Data Science & Analytics</option>
          <option value="product">Product Management</option>
          <option value="marketing">Digital Marketing</option>
          <option value="finance">Finance & Banking</option>
          <option value="consulting">Consulting</option>
          <option value="other">Other</option>
        </select>
      </div>
    </>
  );

  const renderCollegeFields = () => (
    <>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="collegeName">College Name</Label>
          <Input id="collegeName" value={formData.collegeName} onChange={(e) => setFormData({ ...formData, collegeName: e.target.value })} placeholder="Institution name" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="location">Location</Label>
          <Input id="location" value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} placeholder="City, State" className="mt-1" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="contactPerson">Contact Person</Label>
          <Input id="contactPerson" value={formData.contactPerson} onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })} placeholder="TPO / Principal name" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="studentCount">Number of Students</Label>
          <Input id="studentCount" type="number" value={formData.studentCount} onChange={(e) => setFormData({ ...formData, studentCount: e.target.value })} placeholder="5000" className="mt-1" />
        </div>
      </div>
      <div>
        <Label htmlFor="courses">Courses Offered (comma separated)</Label>
        <Input id="courses" value={formData.courses} onChange={(e) => setFormData({ ...formData, courses: e.target.value })} placeholder="B.Tech, B.E, MBA, M.Tech" className="mt-1" />
      </div>
    </>
  );

  const renderCorporateFields = () => (
    <>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="companyName">Company Name</Label>
          <Input id="companyName" value={formData.companyName} onChange={(e) => setFormData({ ...formData, companyName: e.target.value })} placeholder="Your company" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="hiringRoles">Hiring Roles</Label>
          <Input id="hiringRoles" value={formData.hiringRoles} onChange={(e) => setFormData({ ...formData, hiringRoles: e.target.value })} placeholder="SDE, Data Analyst, PM" className="mt-1" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="hiringVolume">Annual Hiring Volume</Label>
          <Input id="hiringVolume" type="number" value={formData.hiringVolume} onChange={(e) => setFormData({ ...formData, hiringVolume: e.target.value })} placeholder="100" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="contactDetails">HR Contact</Label>
          <Input id="contactDetails" value={formData.contactDetails} onChange={(e) => setFormData({ ...formData, contactDetails: e.target.value })} placeholder="hr@company.com" className="mt-1" />
        </div>
      </div>
    </>
  );

  const renderPartnerFields = () => (
    <>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="instituteName">Institute Name</Label>
          <Input id="instituteName" value={formData.instituteName} onChange={(e) => setFormData({ ...formData, instituteName: e.target.value })} placeholder="Training institute name" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="courses">Courses Offered</Label>
          <Input id="courses" value={formData.courses} onChange={(e) => setFormData({ ...formData, courses: e.target.value })} placeholder="Full Stack, Data Science" className="mt-1" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="trainers">Number of Trainers</Label>
          <Input id="trainers" type="number" value={formData.trainers} onChange={(e) => setFormData({ ...formData, trainers: e.target.value })} placeholder="10" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="experience">Years of Experience</Label>
          <Input id="experience" type="number" value={formData.experience} onChange={(e) => setFormData({ ...formData, experience: e.target.value })} placeholder="5" className="mt-1" />
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
            {mode === "register" ? "Create Your Account" : "Welcome Back"}
          </h1>
          <p className="mt-2 text-slate-600">
            {mode === "register" ? "Join C2CW and start your career journey" : "Sign in to continue to your dashboard"}
          </p>
        </motion.div>

        {/* User Type Selection */}
        {mode === "register" && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-8">
            <Label className="text-base font-medium mb-3 block">I am a</Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {userTypes.map((type) => (
                <button key={type.id} onClick={() => setUserType(type.id)} className={`p-4 rounded-xl border-2 transition-all ${userType === type.id ? "border-indigo-500 bg-indigo-50" : "border-slate-200 bg-white hover:border-slate-300"}`}>
                  <type.icon className={`h-6 w-6 mx-auto mb-2 ${userType === type.id ? "text-indigo-600" : "text-slate-400"}`} />
                  <div className={`font-medium text-sm ${userType === type.id ? "text-indigo-600" : "text-slate-600"}`}>{type.label}</div>
                  <div className="text-xs text-slate-400 mt-1">{type.description}</div>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Auth Form */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card className="border-slate-200 bg-white shadow-xl">
            <CardContent className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                {mode === "register" && (
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="John Doe" required className="mt-1" />
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <div className="relative mt-1">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="john@example.com" required className="pl-10" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <div className="relative mt-1">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <Input id="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+91 98765 43210" className="pl-10" />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <div className="relative mt-1">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <Input id="password" type="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} placeholder="Min 8 characters" required className="pl-10" />
                    </div>
                  </div>
                  {mode === "register" && (
                    <div>
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <Input id="confirmPassword" type="password" value={formData.confirmPassword} onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} placeholder="Confirm password" required className="mt-1" />
                    </div>
                  )}
                </div>

                {mode === "register" && userType === "student" && renderStudentFields()}
                {mode === "register" && userType === "college" && renderCollegeFields()}
                {mode === "register" && userType === "corporate" && renderCorporateFields()}
                {mode === "register" && userType === "partner" && renderPartnerFields()}

                <Button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white py-3">
                  {mode === "register" ? "Create Account" : "Sign In"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <div className="text-center mt-4">
                  <span className="text-slate-600">
                    {mode === "register" ? "Already have an account?" : "Don't have an account?"}
                  </span>
                  <button type="button" onClick={() => setMode(mode === "register" ? "login" : "register")} className="ml-2 text-indigo-600 font-medium hover:underline">
                    {mode === "register" ? "Sign In" : "Create Account"}
                  </button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}