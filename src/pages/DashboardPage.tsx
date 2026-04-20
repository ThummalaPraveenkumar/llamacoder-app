import { motion } from "framer-motion";
import { Award, Briefcase, Users, TrendingUp, Calendar, Clock, CheckCircle, ArrowRight, Star, Bell, FileText, Target } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

const stats = [
  { label: "Corporate Readiness Score", value: "78", suffix: "/100", change: "+5", icon: Award, color: "text-indigo-600", bg: "bg-indigo-50" },
  { label: "Applications Sent", value: "12", change: "+3", icon: Briefcase, color: "text-emerald-600", bg: "bg-emerald-50" },
  { label: "Interviews Scheduled", value: "4", change: "+1", icon: Calendar, color: "text-violet-600", bg: "bg-violet-50" },
  { label: "Profile Views", value: "156", change: "+24", icon: Users, color: "text-amber-600", bg: "bg-amber-50" },
];

const upcomingEvents = [
  { title: "Mock Interview Session", date: "Tomorrow, 10:00 AM", type: "Interview", color: "bg-indigo-100 text-indigo-700" },
  { title: "Aptitude Assessment", date: "Dec 20, 2:00 PM", type: "Assessment", color: "bg-emerald-100 text-emerald-700" },
  { title: "Workshop: Resume Building", date: "Dec 22, 4:00 PM", type: "Workshop", color: "bg-violet-100 text-violet-700" },
];

const recentJobs = [
  { company: "Google", role: "Software Engineer", location: "Bangalore", package: "₹45 LPA", posted: "2 days ago", logo: "G" },
  { company: "Amazon", role: "Data Analyst", location: "Hyderabad", package: "₹32 LPA", posted: "3 days ago", logo: "A" },
  { company: "Microsoft", role: "Product Manager", location: "Remote", package: "₹38 LPA", posted: "5 days ago", logo: "M" },
];

const skillsProgress = [
  { name: "Technical Skills", progress: 85, color: "bg-indigo-500" },
  { name: "Communication", progress: 72, color: "bg-emerald-500" },
  { name: "Problem Solving", progress: 80, color: "bg-violet-500" },
  { name: "Domain Knowledge", progress: 65, color: "bg-amber-500" },
];

const tasks = [
  { title: "Complete Technical Assessment", status: "pending", dueDate: "Dec 18" },
  { title: "Update Resume", status: "completed", dueDate: "Dec 15" },
  { title: "Upload Project Portfolio", status: "pending", dueDate: "Dec 20" },
  { title: "Attend Mock Interview", status: "scheduled", dueDate: "Dec 19" },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-slate-900">Welcome back, Rahul!</h1>
              <p className="text-sm text-slate-500">Your journey to success continues</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-slate-400 hover:text-slate-600">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </button>
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-full flex items-center justify-center text-white font-bold">
                R
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
              <Card className="border-slate-200 bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl ${stat.bg}`}>
                      <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                    <span className="text-sm text-emerald-600 font-medium">{stat.change}</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-900">
                    {stat.value}{stat.suffix}
                  </div>
                  <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Corporate Readiness Score */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <Card className="border-slate-200 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold text-slate-900">Corporate Readiness Score</h2>
                    <span className="text-3xl font-bold text-indigo-600">78<span className="text-lg text-slate-400">/100</span></span>
                  </div>
                  <div className="relative h-4 bg-slate-100 rounded-full overflow-hidden mb-6">
                    <motion.div initial={{ width: 0 }} animate={{ width: "78%" }} transition={{ duration: 1, delay: 0.5 }} className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {skillsProgress.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-slate-600">{skill.name}</span>
                          <span className="font-medium text-slate-900">{skill.progress}%</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <motion.div initial={{ width: 0 }} animate={{ width: `${skill.progress}%` }} transition={{ duration: 0.8, delay: 0.6 }} className={`h-full ${skill.color} rounded-full`} />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Recent Jobs */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <Card className="border-slate-200 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold text-slate-900">Recommended Jobs</h2>
                    <Button variant="ghost" size="sm" className="text-indigo-600">View All <ArrowRight className="ml-1 h-4 w-4" /></Button>
                  </div>
                  <div className="space-y-4">
                    {recentJobs.map((job) => (
                      <div key={job.company + job.role} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-xl flex items-center justify-center text-white font-bold">
                            {job.logo}
                          </div>
                          <div>
                            <h3 className="font-semibold text-slate-900">{job.role}</h3>
                            <p className="text-sm text-slate-500">{job.company} • {job.location}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-indigo-600">{job.package}</p>
                          <p className="text-xs text-slate-400">{job.posted}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Events */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <Card className="border-slate-200 bg-white">
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold text-slate-900 mb-4">Upcoming Events</h2>
                  <div className="space-y-3">
                    {upcomingEvents.map((event) => (
                      <div key={event.title} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                        <Calendar className="h-5 w-5 text-slate-400 mt-0.5" />
                        <div>
                          <p className="font-medium text-slate-900 text-sm">{event.title}</p>
                          <p className="text-xs text-slate-500">{event.date}</p>
                          <span className={`inline-block mt-1 px-2 py-0.5 rounded text-xs font-medium ${event.color}`}>{event.type}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Tasks */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              <Card className="border-slate-200 bg-white">
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold text-slate-900 mb-4">Your Tasks</h2>
                  <div className="space-y-3">
                    {tasks.map((task) => (
                      <div key={task.title} className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${task.status === "completed" ? "bg-emerald-100" : "bg-slate-100"}`}>
                          {task.status === "completed" ? (
                            <CheckCircle className="h-4 w-4 text-emerald-600" />
                          ) : (
                            <Clock className="h-4 w-4 text-slate-400" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className={`text-sm ${task.status === "completed" ? "text-slate-400 line-through" : "text-slate-700"}`}>{task.title}</p>
                          <p className="text-xs text-slate-400">Due: {task.dueDate}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Actions */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
              <Card className="border-slate-200 bg-gradient-to-br from-indigo-500 to-violet-600">
                <CardContent className="p-6 text-white">
                  <h2 className="text-lg font-semibold mb-2">Boost Your Profile</h2>
                  <p className="text-sm text-indigo-100 mb-4">Complete your profile to increase visibility to recruiters by 3x</p>
                  <Button className="w-full bg-white text-indigo-600 hover:bg-indigo-50">Complete Profile</Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}