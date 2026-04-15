import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Steps from "@/components/Steps";
import Courses from "@/components/Courses";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background islamic-pattern">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Steps />
        <Courses />
        <div className="container mx-auto px-4 py-24 grid gap-16 lg:grid-cols-[1fr_1fr_1.2fr]">
          <Testimonials />
          <Blog />
          <FAQ />
        </div>
      </main>
      <Footer />
    </div>
  );
}
