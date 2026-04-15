import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 lg:py-32">
      {/* Islamic Geometric Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width=\'80\' height=\'80\' viewBox=\'0 0 80 80\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M40 0l10 30h30l-25 20 10 30-25-20-25 20 10-30-25-20h30z\' fill=\'%23ffffff\' fill-rule=\'evenodd\'/%3E%3C/svg%3E')] bg-repeat" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6 text-5xl font-bold leading-tight text-white lg:text-7xl">
              Learn Quran Online with <br />
              <span className="text-accent">Expert Teachers</span>
            </h1>
            <p className="mb-8 text-lg text-white/80 lg:text-xl leading-relaxed max-w-xl">
              Experience spiritual growth through flexible online sessions. Our certified tutors offer personalized Tajweed, Hifz, and Islamic studies for students worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="px-8 py-7 text-lg font-bold bg-accent text-white hover:bg-accent/90 shadow-xl">
                Start Learning
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-7 text-lg font-bold border-white text-white hover:bg-white hover:text-primary transition-all">
                View Courses
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 overflow-hidden rounded-3xl border-8 border-white/10 shadow-2xl">
              <img 
                src="https://picsum.photos/seed/islamic-learning/800/600" 
                alt="Online Quran Learning" 
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Gold Ring */}
            <div className="absolute -inset-4 -z-10 rounded-3xl border-2 border-accent/30 animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
