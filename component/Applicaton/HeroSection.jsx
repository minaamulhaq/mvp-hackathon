"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react'; // Import the arrow icon

const HeroSection = () => {
    return (
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#050505] px-4">

            {/* 1. THE GRID BACKGROUND */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 opacity-[0.2]"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, #222 1px, transparent 1px),
                            linear-gradient(to bottom, #222 1px, transparent 1px)
                        `,
                        backgroundSize: '4rem 4rem',
                        maskImage: 'radial-gradient(circle at center, black, transparent 90%)'
                    }}
                ></div>
            </div>

            {/* 2. AMBIENT WAVE ANIMATIONS */}
            <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
                <div className="relative w-full h-full max-w-7xl">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-64 bg-blue-600/20 blur-[120px] rounded-full animate-float-slow"></div>
                    <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 blur-[100px] rounded-full animate-float-medium"></div>
                    <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-72 h-72 bg-indigo-500/10 blur-[110px] rounded-full animate-float-fast"></div>
                </div>
            </div>

            {/* 3. CONTENT AREA */}
            <div className="relative z-20 max-w-5xl mx-auto text-center flex flex-col items-center">

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tighter mb-6">
                    Simplifying academic life and <br className="hidden md:block" />
                    <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        campus events
                    </span> in one system.
                </h1>

                <p className="max-w-3xl text-slate-400 text-base md:text-lg lg:text-xl font-medium leading-relaxed mb-10 opacity-80">
                    Manage assignments, quizzes, and deadlines from one smart dashboard
                    while discovering and tracking campus events that match your interests.
                    Stay organized, informed, and stress-free.
                </p>

                {/* THEME-MATCHED ACTION BUTTONS */}
                <div className="flex flex-col sm:flex-row gap-5">
                    {/* Login Button with Animated Arrow */}
                    <Link
                        href="/login"
                        className="group flex items-center justify-center gap-2 px-12 py-4 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl font-bold 
                                   hover:scale-105 hover:from-blue-500 hover:to-blue-600 transition-all duration-300 
                                   shadow-[0_0_25px_rgba(37,99,235,0.4)] text-center border border-blue-400/20"
                    >
                        Login Now
                        <ArrowRight
                            size={20}
                            className="transition-transform duration-300 group-hover:translate-x-1.5"
                        />
                    </Link>

                    <Link
                        href="/signup"
                        className="px-12 py-4 bg-transparent border border-slate-700 text-white rounded-xl font-bold 
                                   hover:bg-slate-800 transition-all duration-300 text-center"
                    >
                        Create Account
                    </Link>
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