import { motion } from "motion/react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const posts = [
  {
    title: "The Importance of Tajweed",
    excerpt: "Learn why reciting the Quran with proper Tajweed is essential for every Muslim...",
    image: "https://picsum.photos/seed/blog1/600/400",
  },
  {
    title: "Tips for Quran Memorization",
    excerpt: "Practical strategies to help you and your children memorize the Quran effectively...",
    image: "https://picsum.photos/seed/blog2/600/400",
  },
  {
    title: "Raising Children with Islamic Values",
    excerpt: "How to integrate Islamic teachings into your child's daily life in a modern world...",
    image: "https://picsum.photos/seed/blog3/600/400",
  },
];

export default function Blog() {
  return (
    <section className="blog">
      <h3 className="text-xl font-bold text-primary mb-6 border-b-2 border-accent pb-2 font-serif">Latest Articles</h3>
      <div className="space-y-6">
        {posts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex gap-4 group cursor-pointer"
          >
            <div className="w-16 h-16 bg-secondary rounded-xl shrink-0 border-2 border-accent/20 overflow-hidden shadow-md group-hover:border-accent transition-all">
              <img src={post.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform" referrerPolicy="no-referrer" />
            </div>
            <div className="flex flex-col justify-center">
              <h5 className="text-sm font-bold leading-snug text-primary group-hover:text-accent transition-colors font-serif">
                {post.title}
              </h5>
              <p className="text-xs text-accent mt-1 font-bold flex items-center gap-1">
                Read More <span className="group-hover:translate-x-1 transition-transform">→</span>
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
