"use client";

import { Drone } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HeroSection() {
    const bgImages = [
        "/bg1.jpg",
        "/bg2.jpg",
        "/bg3.jpg",
        "/bg4.jpg",
        "/bg5.jpg",
        "/bg6.jpg",
        "/bg7.jpg",
    ];

    const [currentBg, setCurrentBg] = useState(0);
    const [prevBg, setPrevBg] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPrevBg(currentBg);
            setCurrentBg((prev) => (prev + 1) % bgImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [currentBg]);

    return (
        <section className="relative w-full h-screen overflow-hidden">
            {/* Background Images */}
            {bgImages.map((src, i) => {
                let opacity = 0;
                if (i === currentBg) opacity = 1;
                else if (i === prevBg) opacity = 0;
                return (
                    <div
                        key={i}
                        className="absolute w-full h-full top-0 left-0 bg-center bg-cover transition-opacity duration-[1200ms] scale-105 animate-bg-zoom"
                        style={{
                            backgroundImage: `url(${src})`,
                            opacity,
                        }}
                    />
                );
            })}

            {/* Overlay */}
            <div className="absolute w-full h-full bg-black/20 pointer-events-none"></div>

            {/* Centered Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-30 px-4">
                <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4 animate-fade-in">
                    SkyCruzer UAV
                </h1>
                <p className="text-xl md:text-2xl text-white drop-shadow-md mb-6 animate-fade-in">
                    Explore the best UAVs, FPV drones, and accessories
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
                    <Link
                        href="https://www.facebook.com/shakib.uav/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white text-lg font-semibold rounded-lg shadow-lg transition-all duration-300"
                    >
                        Visit Facebook
                        <Drone size={20} />
                    </Link>
                    <Link
                        href="#about"
                        className="inline-flex items-center px-8 py-4 border-2 border-white hover:bg-white/20 text-white text-lg font-semibold rounded-lg shadow-lg transition-all duration-300"
                    >
                        Learn More
                    </Link>
                </div>
            </div>

            {/* Flying drones */}
            <div className="absolute w-full h-full top-0 left-0 pointer-events-none">
                {[...Array(4)].map((_, i) => {
                    const sizes = [40, 50, 35, 45];
                    const topPos = ["20%", "40%", "60%", "75%"];
                    const speed = ["8s", "12s", "16s", "10s"];
                    const opacity = ["0.7", "0.5", "0.3", "0.5"];
                    return (
                        <Drone
                            key={i}
                            className={`absolute text-white`}
                            size={sizes[i]}
                            style={{
                                top: topPos[i],
                                left: "-10%",
                                opacity: opacity[i] as any,
                                filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.3))",
                                animation: `drone-fly-${i} ${speed[i]} linear infinite`,
                            }}
                        />
                    );
                })}
            </div>

            {/* Floating circles */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute w-72 h-72 bg-white/10 rounded-full top-10 left-10 animate-pulse-slow"></div>
                <div className="absolute w-96 h-96 bg-white/5 rounded-full bottom-20 right-20 animate-pulse-slow"></div>
                <div className="absolute w-48 h-48 bg-white/20 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
            </div>

            {/* Keyframes */}
            <style jsx>{`
        @keyframes drone-fly-0 {
          0% { left: -100px; transform: rotate(0deg); }
          50% { top: 25%; transform: rotate(10deg); }
          100% { left: 100%; transform: rotate(-10deg); }
        }
        @keyframes drone-fly-1 {
          0% { left: -150px; transform: rotate(-5deg); }
          50% { top: 45%; transform: rotate(5deg); }
          100% { left: 100%; transform: rotate(-5deg); }
        }
        @keyframes drone-fly-2 {
          0% { left: -200px; transform: rotate(0deg); }
          50% { top: 65%; transform: rotate(15deg); }
          100% { left: 100%; transform: rotate(-15deg); }
        }
        @keyframes drone-fly-3 {
          0% { left: -120px; transform: rotate(5deg); }
          50% { top: 75%; transform: rotate(-10deg); }
          100% { left: 100%; transform: rotate(10deg); }
        }

        @keyframes bg-zoom {
          0% { transform: scale(1.05); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1.05); }
        }

        .animate-bg-zoom {
          animation: bg-zoom 20s ease-in-out infinite;
        }

        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fade-in 1s ease forwards;
        }
      `}</style>
        </section>
    );
}
