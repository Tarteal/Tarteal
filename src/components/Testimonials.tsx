import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Khan",
    avatar: "https://i.pravatar.cc/150?u=ahmed",
    feedback: "The teachers are incredibly patient and knowledgeable. My Tajweed has improved significantly in just three months.",
    rating: 5,
  },
  {
    name: "Sarah Williams",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    feedback: "As a convert, I was nervous about starting, but the Islamic Studies course made me feel so welcome and supported.",
    rating: 5,
  },
  {
    name: "Omar Farooq",
    avatar: "https://i.pravatar.cc/150?u=omar",
    feedback: "The flexible timings are perfect for my busy work schedule. I can now memorize Quran at my own pace.",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <h3 className="text-xl font-bold text-primary mb-6 border-b-2 border-accent pb-2 font-serif">Testimonials</h3>
      <div className="space-y-4">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-sm italic text-muted-foreground bg-white p-5 rounded-xl shadow-md border-l-4 border-accent relative"
          >
            <div className="absolute -top-2 -right-2 bg-accent text-white p-1 rounded-full shadow-lg">
              <Star size={12} fill="currentColor" />
            </div>
            "{t.feedback}"
            <br />
            <strong className="text-xs text-primary mt-3 block font-bold">— {t.name} (⭐⭐⭐⭐⭐)</strong>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
