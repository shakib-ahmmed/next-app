"use client";

import { Drone } from "lucide-react";

export default function AboutSection() {
    return (
        <section className="container mx-auto px-6 py-20">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
                {/* Image / Icon */}
                <div className="flex-shrink-0 w-full md:w-1/2">
                    <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center">
                        <Drone size={100} className="text-white animate-bounce" />
                    </div>
                </div>

                {/* Text Content */}
                <div className="flex-1 space-y-6">
                    <h2 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">
                        About SkyCruzer UAV
                    </h2>
                    <p className="text-lg text-slate-700 dark:text-slate-300">
                        SkyCruser UAV is your ultimate platform for UAV and FPV drone enthusiasts.
                        Explore the latest drones, gear, and accessories, and track your favorite
                        items with ease. Whether you're a hobbyist or a professional, our platform
                        helps you stay on top of the UAV world.
                    </p>
                    <p className="text-lg text-slate-700 dark:text-slate-300">
                        Our mission is to make drone technology accessible, fun, and safe. Join
                        our community, discover new innovations, and elevate your FPV experience
                        to new heights.
                    </p>
                    <a
                        href="https://www.facebook.com/shakib.uav/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded shadow-lg transition-all duration-300"
                    >
                        Learn More
                    </a>

                </div>
            </div>
        </section>
    );
}
