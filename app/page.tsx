"use client";

export default function LandingPage() {
  return (
    <div className="space-y-32">

      {/* 1️⃣ Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 overflow-hidden">
        <div className="text-center z-10 text-white animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Welcome to MyApp
          </h1>
          <p className="text-xl md:text-2xl mb-6 drop-shadow-md">
            Discover amazing items at unbeatable prices
          </p>
          <button className="btn btn-primary btn-lg animate-bounceSlow">
            Get Started
          </button>
        </div>

        {/* Background circles */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute w-72 h-72 bg-white/10 rounded-full top-10 left-10 animate-pulse-slow"></div>
          <div className="absolute w-96 h-96 bg-white/5 rounded-full bottom-20 right-20 animate-pulse-slow"></div>
        </div>
      </section>

      {/* 2️⃣ About Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
        <p className="text-center max-w-3xl mx-auto text-lg text-base-content">
          MyApp is a modern platform to explore amazing products, compare prices, and discover new trends. We are committed to giving you the best online experience.
        </p>
      </section>

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

      {/* 4️⃣ Items Preview Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-8">Our Popular Items</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Example static cards, can be dynamic later */}
          <div className="card bg-base-100 shadow-lg p-4">
            <div className="h-48 bg-gray-300 rounded mb-4"></div>
            <h3 className="text-xl font-bold">Item One</h3>
            <p className="text-sm text-base-content">Short description of Item One.</p>
          </div>
          <div className="card bg-base-100 shadow-lg p-4">
            <div className="h-48 bg-gray-300 rounded mb-4"></div>
            <h3 className="text-xl font-bold">Item Two</h3>
            <p className="text-sm text-base-content">Short description of Item Two.</p>
          </div>
          <div className="card bg-base-100 shadow-lg p-4">
            <div className="h-48 bg-gray-300 rounded mb-4"></div>
            <h3 className="text-xl font-bold">Item Three</h3>
            <p className="text-sm text-base-content">Short description of Item Three.</p>
          </div>
        </div>
      </section>
      
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
        <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
        <form className="max-w-2xl mx-auto flex flex-col gap-4">
          <input type="text" placeholder="Name" className="input input-bordered w-full" />
          <input type="email" placeholder="Email" className="input input-bordered w-full" />
          <textarea placeholder="Message" className="textarea textarea-bordered w-full"></textarea>
          <button type="submit" className="btn btn-primary w-full">Send Message</button>
        </form>
      </section>
    </div>
  );
}
