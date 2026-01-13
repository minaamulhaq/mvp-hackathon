"use client";

import React, { useState, useEffect } from 'react';
import { Users, BookOpen, ArrowRight, CheckCircle, School } from 'lucide-react';

const ClassesWorkspace = () => {
    const [mounted, setMounted] = useState(false);

    // State to track which classes the student has already joined
    const [joinedClassIds, setJoinedClassIds] = useState([]);

    const [classes] = useState([
        {
            id: 1,
            className: "Advanced Database Systems",
            semester: "Semester 5",
            description: "Deep dive into SQL optimization, NoSQL architectures, and distributed database management.",
            instructor: "Dr. Sarah Mitchell",
        },
        {
            id: 2,
            className: "Software Engineering",
            semester: "Semester 5",
            description: "Covering the full SDLC, agile methodologies, and modern DevOps practices for scale.",
            instructor: "Prof. James Wilson",
        },
        {
            id: 3,
            className: "Artificial Intelligence",
            semester: "Semester 6",
            description: "Introduction to neural networks, machine learning algorithms, and natural language processing.",
            instructor: "Dr. Elena Rossi",
        },
        {
            id: 4,
            className: "Computer Networks",
            semester: "Semester 5",
            description: "Study of OSI layers, TCP/IP protocols, and network security fundamentals in modern systems.",
            instructor: "Prof. Robert Chen",
        }
    ]);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleJoin = (id) => {
        setJoinedClassIds((prev) => [...prev, id]);
    };

    if (!mounted) return null;

    return (
        <div className="w-full max-w-7xl mx-auto px-6 py-10">
            {/* HEADER */}
            <div className="mb-10 border-b border-slate-800 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight uppercase">
                        Academic <span className="text-blue-500">Catalog</span>
                    </h2>
                    <p className="text-slate-400 text-sm mt-2 font-medium tracking-wide italic">
                        Select and join your assigned semester courses.
                    </p>
                </div>

            </div>

            {/* CLASSES GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {classes.map((cls) => {
                    const hasJoined = joinedClassIds.includes(cls.id);

                    return (
                        <div
                            key={cls.id}
                            className={`group relative overflow-hidden rounded-[2rem] p-8 border transition-all duration-500 ${hasJoined
                                ? 'bg-emerald-500/5 border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.05)]'
                                : 'bg-slate-900/20 border-slate-800/60 hover:border-blue-500/40 hover:bg-slate-900/40'
                                }`}
                        >
                            <div className="relative z-10">
                                {/* Top Metadata */}
                                <div className="flex justify-between items-center mb-6">
                                    <span className={`text-[10px] font-black uppercase tracking-[0.3em] px-3 py-1 rounded-full border ${hasJoined ? 'text-emerald-500 border-emerald-500/30' : 'text-blue-500 border-blue-500/20'
                                        }`}>
                                        {cls.semester}
                                    </span>
                                    <div className="p-3 bg-slate-800/50 rounded-2xl">
                                        <BookOpen size={20} className={hasJoined ? 'text-emerald-500' : 'text-blue-500'} />
                                    </div>
                                </div>

                                {/* Class Details */}
                                <h3 className="text-2xl font-black text-white mb-2 tracking-tight group-hover:translate-x-1 transition-transform">
                                    {cls.className}
                                </h3>
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white">
                                        {cls.instructor.charAt(0)}
                                    </div>
                                    <span className="text-xs font-bold text-slate-500 uppercase tracking-tighter">{cls.instructor}</span>
                                </div>
                                <p className="text-slate-400 text-sm leading-relaxed mb-8 line-clamp-3">
                                    {cls.description}
                                </p>

                                {/* DYNAMIC BUTTON LOGIC */}
                                {hasJoined ? (
                                    <div className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-emerald-500 text-white font-black uppercase text-xs tracking-[0.2em] shadow-lg shadow-emerald-900/20 animate-in zoom-in duration-300">
                                        <CheckCircle size={18} />
                                        Joined
                                    </div>
                                ) : (
                                    <button
                                        onClick={() => handleJoin(cls.id)}
                                        className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-blue-600 text-white font-black uppercase text-xs tracking-[0.2em] hover:bg-blue-500 transition-all hover:shadow-[0_10px_20px_rgba(37,99,235,0.3)] group-active:scale-95"
                                    >
                                        Join Classroom
                                        <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                                    </button>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ClassesWorkspace;