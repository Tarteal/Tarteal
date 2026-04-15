import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="bg-primary p-2 rounded-lg shadow-lg">
            <BookOpen className="h-6 w-6 text-accent" />
          </div>
          <span className="font-serif text-2xl font-bold text-primary tracking-tight">Alkawthar</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <a href="#" className="text-sm font-bold text-primary/80 hover:text-accent transition-colors">Home</a>
          <a href="#courses" className="text-sm font-bold text-primary/80 hover:text-accent transition-colors">Courses</a>
          <a href="#about" className="text-sm font-bold text-primary/80 hover:text-accent transition-colors">About</a>
          <a href="#contact" className="text-sm font-bold text-primary/80 hover:text-accent transition-colors">Contact</a>
          <Button className="bg-primary text-white font-bold px-6 py-5 hover:bg-primary/90 shadow-md">
            Start Learning
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-b bg-white px-4 py-6 flex flex-col gap-6 shadow-xl"
        >
          <a href="#" className="text-lg font-bold text-primary">Home</a>
          <a href="#courses" className="text-lg font-bold text-primary">Courses</a>
          <a href="#about" className="text-lg font-bold text-primary">About</a>
          <a href="#contact" className="text-lg font-bold text-primary">Contact</a>
          <Button className="w-full bg-primary text-white font-bold py-6">Start Learning</Button>
        </motion.div>
      )}
    </nav>
  );
}
