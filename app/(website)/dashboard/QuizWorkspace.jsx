"use client";

import React, { useState, useEffect } from 'react';
import {
    FileQuestion,
    CheckCircle2,
    Timer,
    Trophy,
    Calendar
} from 'lucide-react';

const QuizWorkspace = () => {
    const [mounted, setMounted] = useState(false);

    // State to track completed quizzes
    const [completedIds, setCompletedIds] = useState([]);

    const quizzes = [
        {
            id: 1,
            subject: "Operating Systems",
            title: "Process Scheduling & Deadlocks",
            duration: "30 Mins",
            deadline: "Jan 14, 2026",
        },
        {
            id: 2,
            subject: "Database Systems",
            title: "SQL Joins & Normalization",
            duration: "45 Mins",
            deadline: "Jan 18, 2026",
        },
        {
            id: 3,
            subject: "Computer Networks",
            title: "TCP/IP Model Layers",
            duration: "15 Mins",
            deadline: "Jan 20, 2026",
        }
    ];

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleMarkDone = (id) => {
        setCompletedIds((prev) => [...prev, id]);
    };

    if (!mounted) return null;

    return (
        <div className="w-full max-w-6xl mx-auto px-6 py-10">
            {/* WORKSPACE HEADER */}
            <div className="mb-10 border-b border-slate-800 pb-8 flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-black text-white tracking-tight">
                        Quiz <span className="text-blue-500">Workspace</span>
                    </h2>
                    <p className="text-slate-500 text-sm mt-1 font-medium">Manage your pending quizzes and certifications.</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="bg-slate-900/50 px-4 py-2 rounded-full border border-slate-800">
                        <span className="text-blue-400 font-bold text-xs uppercase tracking-widest">
                            {completedIds.length} / {quizzes.length} Completed
                        </span>
                    </div>
                </div>
            </div>

            {/* QUIZ LIST */}
            <div className="grid gap-5">
                {quizzes.map((quiz) => {
                    const isDone = completedIds.includes(quiz.id);

                    return (
                        <div
                            key={quiz.id}
                            className={`group relative overflow-hidden bg-slate-900/20 border rounded-2xl p-6 transition-all duration-500 ${isDone ? 'border-emerald-500/20 bg-emerald-500/5' : 'border-slate-800/60 hover:border-blue-500/30'
                                }`}
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

                                {/* Quiz Info */}
                                <div className="flex gap-5 items-start">
                                    <div className={`p-4 rounded-2xl transition-colors duration-500 ${isDone ? 'bg-emerald-500/10 text-emerald-500' : 'bg-blue-500/10 text-blue-500'
                                        }`}>
                                        <FileQuestion size={26} />
                                    </div>
                                    <div>
                                        <span className={`text-[10px] font-bold uppercase tracking-[0.25em] mb-1.5 block transition-colors ${isDone ? 'text-emerald-500' : 'text-blue-500'
                                            }`}>
                                            {quiz.subject}
                                        </span>
                                        <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                                            {quiz.title}
                                        </h3>

                                        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500">
                                            <span className="flex items-center gap-1.5">
                                                <Timer size={14} className="text-slate-600" /> {quiz.duration}
                                            </span>
                                            <span className="hidden sm:block text-slate-800">•</span>
                                            <span className="flex items-center gap-1.5">
                                                <Calendar size={14} className="text-slate-600" /> Deadline: {quiz.deadline}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Quiz Actions */}
                                <div className="flex items-center gap-3 self-end md:self-center">
                                    {isDone ? (
                                        <div className="flex items-center gap-2 px-8 py-2.5 bg-emerald-500 text-white rounded-xl text-sm font-bold animate-in zoom-in duration-300 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                                            <CheckCircle2 size={18} /> Done
                                        </div>
                                    ) : (
                                        <button
                                            onClick={() => handleMarkDone(quiz.id)}
                                            className="flex items-center gap-2 px-8 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-500 transition-all hover:scale-105 shadow-lg shadow-blue-900/20"
                                        >
                                            Mark Done
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default QuizWorkspace;