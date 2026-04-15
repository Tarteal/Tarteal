import { motion } from "motion/react";
import { UserPlus, BookOpen, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    title: "Sign Up",
    description: "Create your account in seconds and join our global community of learners.",
    icon: UserPlus,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Choose Your Course",
    description: "Select from our wide range of courses tailored for all ages and levels.",
    icon: BookOpen,
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Begin Learning",
    description: "Start your first class with a certified tutor and track your progress.",
    icon: GraduationCap,
    color: "bg-amber-50 text-amber-600",
  },
];

export default function Steps() {
  return (
    <section className="py-20 bg-background islamic-pattern">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-primary relative after:content-[''] after:block after:w-20 after:h-1 after:bg-accent after:mx-auto after:mt-4">
          Start Learning in 3 Easy Steps
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex items-center gap-6 bg-white p-6 rounded-2xl border-l-8 border-accent shadow-xl hover:shadow-2xl transition-all group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white font-bold text-xl group-hover:scale-110 transition-transform">
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-bold text-lg text-primary font-serif">{step.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
