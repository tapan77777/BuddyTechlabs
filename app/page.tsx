import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import MeetFounder from "@/components/MeetFounder";
import About from "@/components/About";
import Vision from "@/components/Vision";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <MeetFounder />
        <About />
        <Vision />
      </main>
      <Footer />
    </>
  );
}
