"use client";

import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Clock, Bell, CheckCircle2 } from 'lucide-react';

const EventWorkspace = () => {
    const [mounted, setMounted] = useState(false);
    const [view, setView] = useState('week');

    const [localData, setLocalData] = useState([
        { id: 1, title: "Math Quiz", date: "2026-01-12", time: "09:00", type: "quiz" },
        { id: 2, title: "Coding Workshop", date: "2026-01-14", time: "14:00", type: "event" },
        { id: 3, title: "Project Review", date: "2026-01-12", time: "15:00", type: "event" },

        // Monday - Jan 12
        { id: 4, title: "Morning Yoga", date: "2026-01-12", time: "06:30", type: "event" },
        { id: 5, title: "Algorithm Lecture", date: "2026-01-12", time: "11:00", type: "event" },
        { id: 6, title: "DB Lab Submission", date: "2026-01-12", time: "23:59", type: "assignment" },

        // Tuesday - Jan 13
        { id: 7, title: "System Design", date: "2026-01-13", time: "10:00", type: "event" },
        { id: 8, title: "Networking Quiz", date: "2026-01-13", time: "13:30", type: "quiz" },
        { id: 9, title: "Football Practice", date: "2026-01-13", time: "17:00", type: "event" },
        { id: 10, title: "Late Night Coding", date: "2026-01-13", time: "22:00", type: "event" },

        // Wednesday - Jan 14
        { id: 11, title: "Cyber Security", date: "2026-01-14", time: "09:00", type: "event" },
        { id: 12, title: "Lunch with Mentor", date: "2026-01-14", time: "12:00", type: "event" },
        { id: 13, title: "OS Assignment", date: "2026-01-14", time: "16:00", type: "assignment" },
        { id: 14, title: "UI/UX Webinar", date: "2026-01-14", time: "19:00", type: "event" },

        // Thursday - Jan 15
        { id: 15, title: "Breakfast Meetup", date: "2026-01-15", time: "08:00", type: "event" },
        { id: 16, title: "Cloud Computing", date: "2026-01-15", time: "11:30", type: "event" },
        { id: 17, title: "Physics Report", date: "2026-01-15", time: "15:00", type: "assignment" },
        { id: 18, title: "Gym Session", date: "2026-01-15", time: "18:00", type: "event" },

        // Friday - Jan 16
        { id: 19, title: "AI Seminar", date: "2026-01-16", time: "10:00", type: "event" },
        { id: 20, title: "Soft Skills Prep", date: "2026-01-16", time: "14:00", type: "event" },
        { id: 21, title: "Hackathon Intro", date: "2026-01-16", time: "16:30", type: "event" },
        { id: 22, title: "Weekly Roundup", date: "2026-01-16", time: "20:00", type: "event" },

        // Saturday - Jan 17
        { id: 23, title: "Hiking Trip", date: "2026-01-17", time: "07:00", type: "event" },
        { id: 24, title: "Market Research", date: "2026-01-17", time: "13:00", type: "assignment" },
        { id: 25, title: "Movie Night", date: "2026-01-17", time: "21:00", type: "event" },

        // Sunday - Jan 18
        { id: 26, title: "Sunday Brunch", date: "2026-01-18", time: "11:00", type: "event" },
        { id: 27, title: "Self Study", date: "2026-01-18", time: "15:00", type: "event" },
        { id: 28, title: "Next Week Prep", date: "2026-01-18", time: "19:00", type: "assignment" }
    ]);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const hours = Array.from({ length: 24 }).map((_, i) => i);
    const weekDays = [
        { name: "Mon", fullDate: "2026-01-12", display: "12" },
        { name: "Tue", fullDate: "2026-01-13", display: "13" },
        { name: "Wed", fullDate: "2026-01-14", display: "14" },
        { name: "Thu", fullDate: "2026-01-15", display: "15" },
        { name: "Fri", fullDate: "2026-01-16", display: "16" },
        { name: "Sat", fullDate: "2026-01-17", display: "17" },
        { name: "Sun", fullDate: "2026-01-18", display: "18" }
    ];

    const formatTime = (h) => {
        const ampm = h >= 12 ? 'PM' : 'AM';
        const displayHour = h % 12 || 12;
        return `${displayHour} ${ampm}`;
    };

    // Helper for Dynamic Colors
    const getCardStyles = (type) => {
        if (type === 'event') {
            return "bg-red-600/80 border-red-400/30 text-white shadow-[0_0_15px_rgba(220,38,38,0.2)]";
        }
        if (type === 'assignment') {
            return "bg-emerald-600/80 border-emerald-400/30 text-white shadow-[0_0_15px_rgba(16,185,129,0.2)]";
        }
        // Quiz uses Blue/Slate scheme
        return "bg-slate-800/90 border-blue-500/40 text-blue-100 shadow-[0_0_15px_rgba(59,130,246,0.1)]";
    };

    return (
        <div className="w-full max-w-7xl mx-auto px-6 py-10">
            {/* HEADER */}
            <div className="mb-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div>
                    <h2 className="text-3xl font-black text-white tracking-tight uppercase">
                        Smart <span className="text-blue-500">Timeline</span>
                    </h2>
                    <p className="text-slate-400 text-sm mt-1 uppercase font-bold tracking-widest">Dynamic Schedule Sync</p>
                </div>

                <div className="flex bg-slate-900/80 p-1 rounded-xl border border-slate-800">
                    {['week', 'month'].map((v) => (
                        <button
                            key={v}
                            onClick={() => setView(v)}
                            className={`px-6 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${view === v ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'
                                }`}
                        >
                            {v}
                        </button>
                    ))}
                </div>
            </div>

            <div className="relative bg-slate-900/20 border border-slate-800 rounded-3xl overflow-hidden backdrop-blur-md">

                {/* --- WEEK VIEW --- */}
                {view === 'week' && (
                    <div className="flex flex-col h-[750px]">
                        <div className="flex border-b border-slate-800 bg-slate-900/40 sticky top-0 z-20">
                            <div className="w-20 md:w-28 border-r border-slate-800 shrink-0 flex items-center justify-center bg-slate-900">
                                <Clock size={16} className="text-slate-600" />
                            </div>
                            <div className="flex-1 grid grid-cols-7">
                                {weekDays.map((day) => (
                                    <div key={day.name} className="p-4 text-center border-r last:border-0 border-slate-800/50">
                                        <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-1">{day.name}</p>
                                        <p className="text-lg font-black text-white">{day.display}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto scrollbar-hide">
                            <div className="flex relative min-h-full">
                                <div className="w-20 md:w-28 bg-slate-900/10 border-r border-slate-800 shrink-0 sticky left-0 z-10">
                                    {hours.map(h => (
                                        <div key={h} className="h-24 border-b border-slate-800/30 flex items-start justify-center pt-3 bg-[#050505]/90 backdrop-blur-sm">
                                            <span className="text-[10px] font-black text-slate-500 tabular-nums uppercase">
                                                {formatTime(h)}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex-1 grid grid-cols-7 relative">
                                    {weekDays.map((day, dayIdx) => (
                                        <div key={dayIdx} className="relative border-r last:border-0 border-slate-800/20">
                                            {hours.map(h => (
                                                <div key={h} className="h-24 border-b border-slate-800/10 hover:bg-blue-500/5 transition-colors" />
                                            ))}

                                            {localData
                                                .filter(item => item.date === day.fullDate)
                                                .map((item, idx) => {
                                                    const startHour = parseInt(item.time.split(':')[0]);
                                                    const startMinute = parseInt(item.time.split(':')[1]);

                                                    return (
                                                        <div
                                                            key={idx}
                                                            className={`absolute left-1 right-1 rounded-xl p-3 border shadow-2xl z-10 hover:scale-[1.02] transition-transform cursor-pointer ${getCardStyles(item.type)}`}
                                                            style={{
                                                                top: `${(startHour + startMinute / 60) * 6}rem`,
                                                                height: '5.5rem'
                                                            }}
                                                        >
                                                            <p className="text-[10px] font-black leading-tight truncate uppercase tracking-tight">{item.title}</p>
                                                            <p className="text-[8px] opacity-70 font-bold mt-1 uppercase">
                                                                {formatTime(startHour)} • {item.type}
                                                            </p>
                                                        </div>
                                                    );
                                                })}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* --- MONTH VIEW --- */}
                {view === 'month' && (
                    <div className="flex flex-col">
                        <div className="grid grid-cols-7 bg-slate-900/40 border-b border-slate-800 text-center">
                            {weekDays.map(day => (
                                <div key={day.name} className="p-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">{day.name}</div>
                            ))}
                        </div>
                        <div className="grid grid-cols-7">
                            {Array.from({ length: 35 }).map((_, i) => {
                                const dayNumber = (i + 1 > 31) ? (i + 1) % 31 : i + 1;
                                const dayString = `2026-01-${dayNumber.toString().padStart(2, '0')}`;
                                const itemsToday = localData.filter(item => item.date === dayString);

                                return (
                                    <div key={i} className="aspect-square border-r border-b border-slate-800/30 p-2 hover:bg-blue-500/5 transition-all group cursor-pointer overflow-hidden">
                                        <div className="flex justify-between items-start mb-1">
                                            <span className={`text-[10px] font-bold ${itemsToday.length > 0 ? 'text-blue-500' : 'text-slate-600'}`}>
                                                {dayNumber}
                                            </span>
                                        </div>
                                        <div className="space-y-1">
                                            {itemsToday.slice(0, 2).map((item, idx) => (
                                                <div
                                                    key={idx}
                                                    className={`text-[7px] p-1 rounded border truncate font-bold uppercase ${item.type === 'event'
                                                        ? 'bg-red-500/20 border-red-500/40 text-red-400'
                                                        : item.type === 'assignment'
                                                            ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400'
                                                            : 'bg-slate-800 border-blue-500/40 text-blue-300'
                                                        }`}
                                                >
                                                    {item.title}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EventWorkspace;