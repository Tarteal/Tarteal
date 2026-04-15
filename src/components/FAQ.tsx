import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do online classes work?",
    answer: "Our classes are conducted via high-quality video conferencing tools. You'll have a 1-on-1 session with your tutor where you can see each other, share screens, and use a digital whiteboard.",
  },
  {
    question: "What are the class timings?",
    answer: "We offer 24/7 flexibility. You can choose a time slot that fits your schedule, regardless of your time zone.",
  },
  {
    question: "Do you offer trial classes?",
    answer: "Yes! We offer a free 30-minute trial class for all new students so you can experience our teaching method before committing.",
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept all major credit/debit cards, PayPal, and bank transfers. Our payment gateway is secure and encrypted.",
  },
];

export default function FAQ() {
  return (
    <section className="faq">
      <h3 className="text-xl font-bold text-primary mb-6 border-b-2 border-accent pb-2 font-serif">FAQ</h3>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div key={index} className="flex justify-between items-center bg-white border border-secondary/50 p-4 rounded-xl text-sm cursor-pointer hover:bg-secondary/20 hover:border-accent transition-all shadow-sm group">
            <span className="text-primary font-bold font-serif">{faq.question}</span>
            <span className="text-accent font-bold group-hover:scale-125 transition-transform">+</span>
          </div>
        ))}
      </div>
    </section>
  );
}
