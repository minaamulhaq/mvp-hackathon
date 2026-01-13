"use client";

import React, { useState } from 'react';
import {
    User,
    Mail,
    School,
    Shield,
    Camera,
    Award,
    BookOpen,
    Settings,
    Bell,
    LogOut
} from 'lucide-react';

const ProfilePage = () => {
    const [mounted, setMounted] = useState(false);

    // Mock user state
    const [user] = useState({
        name: "John Doe",
        email: "john.doe@university.edu",
        university: "Global Tech University",
        studentId: "GT-2026-8821",
        semester: "5th Semester",
        gpa: "3.85",
        credits: "124",
        major: "Computer Science & Engineering"
    });

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="w-full max-w-7xl mx-auto px-6 py-10 font-sans text-white">
            {/* PROFILE HEADER */}
            <div className="mb-12 flex flex-col md:flex-row items-center gap-8 border-b border-slate-800 pb-12">
                <div className="relative group">
                    <div className="w-32 h-32 rounded-[2.5rem] bg-gradient-to-tr from-blue-600 to-emerald-500 p-1 shadow-2xl shadow-blue-500/20">
                        <div className="w-full h-full bg-slate-950 rounded-[2.4rem] flex items-center justify-center overflow-hidden">
                            <User size={60} className="text-slate-800" />
                        </div>
                    </div>
                    <button className="absolute bottom-0 right-0 p-2 bg-blue-600 rounded-xl border-4 border-[#050505] hover:bg-blue-500 transition-all">
                        <Camera size={16} />
                    </button>
                </div>

                <div className="text-center md:text-left flex-1">
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-2">
                        <h2 className="text-4xl font-black uppercase tracking-tighter">{user.name}</h2>
                        <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-lg text-[10px] font-black text-blue-400 uppercase tracking-widest">
                            Pro Member
                        </span>
                    </div>
                    <p className="text-slate-500 font-bold uppercase text-xs tracking-[0.2em] mb-4">{user.major}</p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-6">
                        <div className="flex items-center gap-2 text-slate-400">
                            <School size={16} className="text-blue-500" />
                            <span className="text-sm font-medium">{user.university}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-400">
                            <Mail size={16} className="text-blue-500" />
                            <span className="text-sm font-medium">{user.email}</span>
                        </div>
                    </div>
                </div>

                <div className="flex gap-3">
                    <button className="p-4 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-blue-500/50 transition-all text-slate-400 hover:text-blue-500">
                        <Settings size={20} />
                    </button>
                    <button className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl hover:bg-red-500 transition-all text-red-500 hover:text-white">
                        <LogOut size={20} />
                    </button>
                </div>
            </div>

            {/* PROFILE CONTENT GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* ACADEMIC STATS */}
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { label: "Current GPA", value: user.gpa, icon: Award, color: "text-emerald-500" },
                        { label: "Semester", value: user.semester, icon: BookOpen, color: "text-blue-500" },
                        { label: "Credits", value: user.credits, icon: Shield, color: "text-purple-500" },
                    ].map((stat, i) => (
                        <div key={i} className="bg-slate-900/20 border border-slate-800 p-6 rounded-[2rem] hover:border-slate-700 transition-all">
                            <stat.icon size={24} className={`${stat.color} mb-4`} />
                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{stat.label}</p>
                            <p className="text-2xl font-black">{stat.value}</p>
                        </div>
                    ))}

                    {/* DETAILED INFO FORM (READ-ONLY STYLE) */}
                    <div className="md:col-span-3 bg-slate-900/20 border border-slate-800 rounded-[2.5rem] p-8">
                        <h3 className="text-lg font-black uppercase tracking-widest mb-8 flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            Student Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { label: "Student ID", value: user.studentId },
                                { label: "Enrollment Year", value: "2023" },
                                { label: "Academic Status", value: "Active" },
                                { label: "Date of Birth", value: "May 14, 2003" }
                            ].map((info, i) => (
                                <div key={i} className="space-y-2">
                                    <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em]">{info.label}</p>
                                    <p className="text-sm font-bold text-slate-300 bg-slate-950/50 border border-slate-800 px-5 py-3 rounded-xl">
                                        {info.value}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* SIDEBAR: NOTIFICATIONS & SECURITY */}
                <div className="space-y-6">
                    <div className="bg-blue-600 rounded-[2.5rem] p-8 shadow-2xl shadow-blue-900/20 relative overflow-hidden group">
                        <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 blur-2xl rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                        <h3 className="text-xl font-black leading-tight mb-2">Upgrade to <br />Student Prime</h3>
                        <p className="text-blue-100/70 text-xs font-medium mb-6">Access exclusive internships and advanced research tools.</p>
                        <button className="w-full py-3 bg-white text-blue-600 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-blue-50 transition-colors">
                            Learn More
                        </button>
                    </div>

                    <div className="bg-slate-900/20 border border-slate-800 rounded-[2.5rem] p-8">
                        <h3 className="text-sm font-black uppercase tracking-widest mb-6 flex items-center gap-2">
                            <Bell size={16} className="text-blue-500" /> Notifications
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-3 bg-slate-950/50 rounded-2xl border border-slate-800">
                                <span className="text-xs font-bold text-slate-400">Email Alerts</span>
                                <div className="w-10 h-5 bg-blue-600 rounded-full relative">
                                    <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-slate-950/50 rounded-2xl border border-slate-800">
                                <span className="text-xs font-bold text-slate-400">Class Reminders</span>
                                <div className="w-10 h-5 bg-slate-800 rounded-full relative">
                                    <div className="absolute left-1 top-1 w-3 h-3 bg-slate-600 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProfilePage;