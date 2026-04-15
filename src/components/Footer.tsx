import { BookOpen, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16 mt-auto relative overflow-hidden">
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0l5.878 18.09h19.022l-15.389 11.18 5.878 18.09-15.389-11.18-15.389 11.18 5.878-18.09-15.389-11.18h19.022z\' fill=\'%23ffffff\' fill-rule=\'evenodd\'/%3E%3C/svg%3E')] bg-repeat" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-12 grid-cols-2 md:grid-cols-4 text-sm">
          {/* Brand */}
          <div className="footer-col col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-accent p-2 rounded-lg">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight">Alkawthar</span>
            </div>
            <p className="opacity-70 leading-relaxed mb-6">
              Empowering the Ummah through accessible and high-quality Quranic education. 
              Join thousands of students worldwide.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-primary transition-all"><Facebook size={18} /></a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-primary transition-all"><Twitter size={18} /></a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-primary transition-all"><Instagram size={18} /></a>
            </div>
          </div>

          {/* Links */}
          <div className="footer-col">
            <h6 className="font-serif text-lg font-bold mb-6 text-accent tracking-wider">Useful Links</h6>
            <ul className="space-y-3 opacity-80">
              <li className="hover:text-accent transition-colors cursor-pointer">Home</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Courses</li>
              <li className="hover:text-accent transition-colors cursor-pointer">About Us</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h6 className="font-serif text-lg font-bold mb-6 text-accent tracking-wider">Contact Us</h6>
            <ul className="space-y-4 opacity-80">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-accent" />
                <span>support@alkawthar.org</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-accent" />
                <span>+1 (555) 900-1234</span>
              </li>
            </ul>
          </div>

          {/* Methods */}
          <div className="footer-col">
            <h6 className="font-serif text-lg font-bold mb-6 text-accent tracking-wider">Methods</h6>
            <ul className="space-y-3 opacity-80">
              <li>Visa / Mastercard</li>
              <li>PayPal</li>
              <li>Direct Bank Transfer</li>
            </ul>
          </div>
        </div>

        <div className="text-center border-t border-white/10 mt-16 pt-8 text-xs opacity-50">
          © 2026 Alkawthar Quran Academy. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
