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

    // Cycle background images every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBg((prev) => (prev + 1) % bgImages.length);
        }, 5000); // 5 seconds per image
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Single Background Image */}
            <div
                className="absolute w-full h-full top-0 left-0 bg-center bg-cover transition-opacity duration-1000"
                style={{
                    backgroundImage: `url(${bgImages[currentBg]})`,
                    opacity: 0.6, // reduce transparency to see image more clearly
                }}
            />

            {/* Left side: social links */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
                <Link
                    href="https://www.facebook.com/shakib.uav/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold hover:text-indigo-300 transition"
                >
                    Facebook
                </Link>
                <Link
                    href="#"
                    className="text-white font-semibold hover:text-indigo-300 transition"
                >
                    Instagram
                </Link>
            </div>

            {/* Right side: content */}
            <div className="relative z-30 text-right text-white max-w-lg pr-6 animate-fade-in">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
                    SkyRacer FPV
                </h1>
                <p className="text-xl md:text-2xl mb-6 drop-shadow-md">
                    Explore the best UAVs, FPV drones, and accessories
                </p>
                <Link
                    href="https://www.facebook.com/shakib.uav/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white text-lg font-semibold rounded-lg shadow-lg animate-bounceSlow transition-all duration-300"
                >
                    Visit Our Facebook
                    <Drone size={20} />
                </Link>
            </div>

            {/* Optional: flying drones */}
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
        </section>
    );
}
