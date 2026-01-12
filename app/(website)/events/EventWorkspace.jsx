"use client";

import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Clock, Bell, CheckCircle2 } from 'lucide-react';

const EventWorkspace = ({ externalEvents = [], externalAssignments = [] }) => {
    const [mounted, setMounted] = useState(false);
    const [view, setView] = useState('week');

    // 1. THE DATA STATE
    // This array stores your events and assignments.
    const [localData, setLocalData] = useState([
        {
            id: 1,
            title: "Math Quiz",
            date: "2026-01-12", // Monday
            time: "09:00",      // 9 AM
            type: "assignment"
        },
        {
            id: 2,
            title: "Coding Workshop",
            date: "2026-01-14", // Wednesday
            time: "14:00",      // 2 PM
            type: "event"
        },
        {
            id: 3,
            title: "Project Review",
            date: "2026-01-12", // Monday
            time: "15:00",      // 3 PM
            type: "event"
        }
    ]);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const hours = Array.from({ length: 24 }).map((_, i) => i);

    // Mapping days to match the week of Jan 12 - Jan 18, 2026
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

    return (
        <div className="w-full max-w-7xl mx-auto px-6 py-10">
            {/* HEADER */}
            <div className="mb-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div>
                    <h2 className="text-3xl font-black text-white tracking-tight uppercase">
                        Smart <span className="text-blue-500">Timeline</span>
                    </h2>
                    <p className="text-slate-500 text-sm mt-1 uppercase font-bold tracking-widest">Dynamic Schedule Sync</p>
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

                {/* --- WEEK VIEW: Renders based on Time and Date --- */}
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
                                {/* Time labels column */}
                                <div className="w-20 md:w-28 bg-slate-900/10 border-r border-slate-800 shrink-0 sticky left-0 z-10">
                                    {hours.map(h => (
                                        <div key={h} className="h-24 border-b border-slate-800/30 flex items-start justify-center pt-3 bg-[#050505]/90 backdrop-blur-sm">
                                            <span className="text-[10px] font-black text-slate-500 tabular-nums uppercase">
                                                {formatTime(h)}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Weekly Columns */}
                                <div className="flex-1 grid grid-cols-7 relative">
                                    {weekDays.map((day, dayIdx) => (
                                        <div key={dayIdx} className="relative border-r last:border-0 border-slate-800/20">
                                            {/* Background grid lines */}
                                            {hours.map(h => (
                                                <div key={h} className="h-24 border-b border-slate-800/10 hover:bg-blue-500/5 transition-colors" />
                                            ))}

                                            {/* 2. DYNAMIC MAPPING: Matches time and date */}
                                            {localData
                                                .filter(item => item.date === day.fullDate)
                                                .map((item, idx) => {
                                                    const startHour = parseInt(item.time.split(':')[0]);
                                                    const startMinute = parseInt(item.time.split(':')[1]);

                                                    return (
                                                        <div
                                                            key={idx}
                                                            className={`absolute left-1 right-1 rounded-xl p-3 border shadow-2xl z-10 hover:scale-[1.02] transition-transform cursor-pointer ${item.type === 'assignment'
                                                                ? 'bg-red-600/80 border-red-400/30'
                                                                : 'bg-blue-600/80 border-blue-400/30'
                                                                }`}
                                                            style={{
                                                                top: `${(startHour + startMinute / 60) * 6}rem`, // h-24 is 6rem
                                                                height: '5.5rem'
                                                            }}
                                                        >
                                                            <p className="text-[10px] font-black text-white leading-tight truncate uppercase tracking-tight">{item.title}</p>
                                                            <p className="text-[8px] text-white/70 font-bold mt-1 uppercase">
                                                                {formatTime(startHour)}
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
                                // Simple month matching logic
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
                                                <div key={idx} className={`text-[7px] p-1 rounded border truncate font-bold uppercase ${item.type === 'assignment' ? 'bg-red-500/10 border-red-500/30 text-red-400' : 'bg-blue-500/10 border-blue-500/30 text-blue-400'}`}>
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