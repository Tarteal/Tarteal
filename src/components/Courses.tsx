import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const courses = [
  {
    title: "Quran Reading (with Tajweed)",
    description: "Master the rules of Tajweed and learn to recite the Quran with proper pronunciation and rhythm.",
    image: "https://picsum.photos/seed/tajweed/600/400",
    tag: "Beginner",
  },
  {
    title: "Quran Memorization (Hifz)",
    description: "A structured program to help you memorize the Holy Quran with the guidance of experienced Hafiz tutors.",
    image: "https://picsum.photos/seed/hifz/600/400",
    tag: "Advanced",
  },
  {
    title: "Islamic Studies for Kids & Adults",
    description: "Comprehensive lessons on Fiqh, Hadith, Seerah, and Islamic history for all age groups.",
    image: "https://picsum.photos/seed/islamic-studies/600/400",
    tag: "All Levels",
  },
];

export default function Courses() {
  return (
    <section id="courses" className="py-20 bg-secondary/30 islamic-pattern">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-primary relative after:content-[''] after:block after:w-20 after:h-1 after:bg-accent after:mx-auto after:mt-4">
          Our Featured Courses
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col border-none shadow-xl bg-white/90 backdrop-blur-sm relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-1.5 before:bg-accent">
                <CardHeader className="pt-10">
                  <CardTitle className="text-2xl text-primary font-serif">{course.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-base text-muted-foreground leading-relaxed">{course.description}</p>
                </CardContent>
                <CardFooter className="pb-8">
                  <Button variant="outline" className="w-full text-sm font-bold text-accent border-accent hover:bg-accent hover:text-white transition-all py-6">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
