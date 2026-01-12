"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-[#050505]">

            {/* GRID BACKGROUND */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 opacity-[0.2]"
                    style={{
                        backgroundImage: `
              linear-gradient(to right, #222 1px, transparent 1px),
              linear-gradient(to bottom, #222 1px, transparent 1px)
            `,
                        backgroundSize: "4rem 4rem",
                        maskImage: "radial-gradient(circle at center, black, transparent 85%)",
                    }}
                />
            </div>

            {/* AMBIENT GLOW */}
            <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
                <div className="relative w-full h-full max-w-7xl">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-64 bg-blue-600/20 blur-[120px] rounded-full animate-float-slow" />
                    <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 blur-[100px] rounded-full animate-float-medium" />
                    <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-72 h-72 bg-indigo-500/10 blur-[110px] rounded-full animate-float-fast" />
                </div>
            </div>

            {/* CONTENT */}
            <div className="relative z-20 flex h-full items-center justify-center px-4">
                <div className="flex flex-col items-center justify-center text-center max-w-5xl">

                    <h1 className="font-black text-white leading-[0.9] tracking-[-0.04em]
                         text-[clamp(2.2rem,6vw,6rem)] mb-6">
                        Simplifying academic life <br />
                        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            & campus events
                        </span>{" "}
                        in one system.
                    </h1>

                    <p className="max-w-xl text-slate-400 text-[clamp(0.9rem,1.2vw,1.1rem)] mb-10 opacity-80">
                        Manage assignments, quizzes, and deadlines while tracking campus
                        events that match your interests and schedule.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5">
                        <Link
                            href="/login"
                            className="group flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl font-bold 
              hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(37,99,235,0.3)]"
                        >
                            Login Now
                            <ArrowRight
                                size={20}
                                className="transition-transform duration-300 group-hover:translate-x-2"
                            />
                        </Link>

                        <Link
                            href="/signup"
                            className="px-10 py-4 border border-slate-800 text-white rounded-xl font-bold hover:bg-slate-900 transition"
                        >
                            Create Account
                        </Link>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(-50%, -40%) scale(1); }
          50% { transform: translate(-52%, -60%) scale(1.1); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(-30%) rotate(0deg); }
          50% { transform: translateY(-50%) rotate(8deg); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(-20%) scale(0.9); }
          50% { transform: translateY(-40%) scale(1.1); }
        }
        .animate-float-slow { animation: float-slow 15s infinite ease-in-out; }
        .animate-float-medium { animation: float-medium 10s infinite ease-in-out; }
        .animate-float-fast { animation: float-fast 12s infinite ease-in-out; }
      `}</style>
        </section>
    );
};

export default HeroSection;
