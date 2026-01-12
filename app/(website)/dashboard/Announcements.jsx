"use client";

import React, { useState, useEffect } from 'react';
import { Megaphone, ChevronDown, Bell, Info, Clock, Calendar } from 'lucide-react';

const Announcements = () => {
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(true);

    // Mock Data with Last Date (Deadline)
    const announcements = [
        {
            id: 1,
            type: "urgent",
            title: "Mid-Term Exam Registration",
            content: "Final window for Fall 2025 registration.",
            deadline: "2026-01-15T23:59:59", // ISO Format for calculation
            displayDate: "Jan 15, 2026",
            time: "2h ago"
        },
        {
            id: 2,
            type: "new",
            title: "Tech Fest Hackathon",
            content: "Team formation and project submission starts.",
            deadline: "2026-01-20T12:00:00",
            displayDate: "Jan 20, 2026",
            time: "5h ago"
        }
    ];

    useEffect(() => {
        setMounted(true);
    }, []);

    // Function to calculate time remaining
    const getTimeRemaining = (targetDate) => {
        if (!mounted) return "";
        const total = Date.parse(targetDate) - Date.parse(new Date());
        if (total <= 0) return "Expired";

        const days = Math.floor(total / (1000 * 60 * 60 * 24));
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((total / 1000 / 60) % 60);

        return days > 0 ? `${days}d ${hours}h left` : `${hours}h ${mins}m left`;
    };

    if (!mounted) return null;

    return (
        <section className="w-full max-w-5xl mx-auto px-6 py-8">
            {/* TOGGLE HEADER */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-5 bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl hover:border-blue-500/50 transition-all duration-300 group"
            >
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <div className="p-2 bg-blue-600/20 rounded-lg text-blue-500">
                            <Megaphone size={22} />
                        </div>
                        <span className="absolute -top-1 -right-1 flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                        </span>
                    </div>
                    <div className="text-left">
                        <h2 className="text-xl font-black text-white tracking-tight">Announcements</h2>
                        <p className="text-xs text-slate-500 font-medium">Tracking {announcements.length} active updates</p>
                    </div>
                </div>
                <div className={`p-2 rounded-full bg-slate-800 text-slate-400 transition-transform duration-500 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    <ChevronDown size={20} />
                </div>
            </button>

            {/* COLLAPSIBLE CONTENT */}
            <div className={`grid transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'
                }`}>
                <div className="min-h-0 space-y-3">
                    {announcements.map((item) => (
                        <div key={item.id} className="relative flex flex-col md:flex-row md:items-center justify-between p-4 bg-slate-900/20 border border-slate-800/50 rounded-xl hover:bg-slate-900/60 transition-colors group">

                            <div className="flex items-center gap-4">
                                <div className={`p-2 rounded-lg ${item.type === 'urgent' ? 'bg-red-500/10 text-red-500' : 'bg-blue-500/10 text-blue-500'}`}>
                                    {item.type === 'urgent' ? <Bell size={18} className="animate-pulse" /> : <Info size={18} />}
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-slate-500">{item.content}</p>
                                </div>
                            </div>

                            {/* NEW: DEADLINE & REMAINING TIME */}
                            <div className="flex items-center gap-4 mt-4 md:mt-0 ml-12 md:ml-0">
                                <div className="flex flex-col items-end">
                                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                                        <Calendar size={12} />
                                        <span>Ends: {item.displayDate}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full">
                                        <Clock size={12} className="text-blue-400" />
                                        <span className="text-[11px] font-black text-blue-400 tabular-nums uppercase">
                                            {getTimeRemaining(item.deadline)}
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Announcements;