"use client";

import AboutSection from "@/componnts/aboutsection";
import ContactSection from "@/componnts/contactsection";
import HeroSection from "@/componnts/herosection";
import PopularItems from "@/componnts/popularitems";

export default function LandingPage() {
  return (
    <div className="space-y-32">

      {/* 1️⃣ Hero Section */}

      <div>
        <HeroSection />
      </div>


      {/* 2️⃣ About Section */}

      <div>
        <AboutSection />
      </div>


      {/* 3️⃣ Features Section */}
      <section className="bg-base-200 py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10">
          <div className="card shadow-lg p-6 text-center hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold mb-2">Fast Delivery</h3>
            <p>Get your products delivered quickly and reliably.</p>
          </div>
          <div className="card shadow-lg p-6 text-center hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold mb-2">Best Prices</h3>
            <p>We offer unbeatable prices on a wide range of products.</p>
          </div>
          <div className="card shadow-lg p-6 text-center hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold mb-2">24/7 Support</h3>
            <p>Our support team is here to help you anytime, anywhere.</p>
          </div>
        </div>
      </section>


      {/* PopularItem Section */}
      <div>
        <PopularItems />
      </div>


      {/* 5️⃣ Testimonials Section */}
      <section className="bg-base-200 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Testimonials</h2>
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div className="card shadow-lg p-6">
            <p>Amazing service and fast delivery!</p>
            <p className="mt-2 font-bold">- John Doe</p>
          </div>
          <div className="card shadow-lg p-6">
            <p>Best prices and quality products.</p>
            <p className="mt-2 font-bold">- Jane Smith</p>
          </div>
          <div className="card shadow-lg p-6">
            <p>Customer support is super helpful.</p>
            <p className="mt-2 font-bold">- Mike Johnson</p>
          </div>
        </div>
      </section>

      {/* 6️⃣ Call To Action Section */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Start Exploring Today</h2>
        <p className="mb-6">Join thousands of users discovering amazing products every day.</p>
        <a href="/items" className="btn btn-primary btn-lg">View Items</a>
      </section>

      {/* 7️⃣ Contact Section */}

      <section className="bg-base-200 py-20">
        <ContactSection />
      </section>

    </div>
  );
}
