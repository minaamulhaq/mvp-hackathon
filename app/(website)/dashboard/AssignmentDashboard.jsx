"use client";

import React, { useState, useEffect } from 'react';
import {
    FileText,
    Download,
    CheckCircle2,
    Clock,
    ArrowUpRight
} from 'lucide-react';

const AssignmentWorkspace = () => {
    const [mounted, setMounted] = useState(false);

    // State to track submissions
    const [doneIds, setDoneIds] = useState([]);

    const [assignments, setAssignments] = useState([
        {
            id: 1,
            subject: "Advanced Mathematics",
            title: "Fourier Transform & Series Analysis",
            dueDate: "2026-01-15T23:59:59",
            downloadUrl: "/docs/math-assignment.pdf",
        },
        {
            id: 2,
            subject: "Data Structures",
            title: "Binary Search Tree Implementation",
            dueDate: "2026-01-18T18:00:00",
            downloadUrl: "/docs/ds-assignment.pdf",
        },
        {
            id: 3,
            subject: "Software Engineering",
            title: "Requirement Specification Document",
            dueDate: "2026-01-12T23:59:59",
            downloadUrl: "/docs/se-assignment.pdf",
        }
    ]);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleMarkAsDone = (id) => {
        setDoneIds((prev) => [...prev, id]);
    };

    if (!mounted) return null;

    return (
        <div className="w-full max-w-6xl mx-auto px-6 py-10">
            {/* WORKSPACE HEADER */}
            <div className="mb-10 border-b border-slate-800 pb-8 flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-black text-white tracking-tight">
                        Assignment <span className="text-blue-500">Workspace</span>
                    </h2>
                    <p className="text-slate-500 text-sm mt-1 font-medium">Download materials and manage your task status.</p>
                </div>
                <div className="bg-slate-900/50 px-4 py-2 rounded-full border border-slate-800">
                    <span className="text-blue-400 font-bold text-xs uppercase tracking-widest">
                        {doneIds.length} / {assignments.length} Done
                    </span>
                </div>
            </div>

            {/* ASSIGNMENT CARDS */}
            <div className="grid gap-5">
                {assignments.map((task) => {
                    const isDone = doneIds.includes(task.id);

                    return (
                        <div
                            key={task.id}
                            className={`group relative overflow-hidden bg-slate-900/20 border rounded-2xl p-6 transition-all duration-500 ${isDone ? 'border-emerald-500/20 bg-emerald-500/5' : 'border-slate-800/60 hover:border-blue-500/30'
                                }`}
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

                                {/* Content Section */}
                                <div className="flex gap-5 items-start">
                                    <div className={`p-4 rounded-2xl transition-colors duration-500 ${isDone ? 'bg-emerald-500/10 text-emerald-500' : 'bg-blue-500/10 text-blue-500'
                                        }`}>
                                        <FileText size={26} />
                                    </div>
                                    <div>
                                        <span className={`text-[10px] font-bold uppercase tracking-[0.25em] mb-1.5 block transition-colors ${isDone ? 'text-emerald-500' : 'text-blue-500'
                                            }`}>
                                            {task.subject}
                                        </span>
                                        <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                                            {task.title}
                                        </h3>
                                        <div className="flex items-center gap-4 text-xs font-semibold text-slate-500">
                                            <span className="flex items-center gap-1.5">
                                                <Clock size={14} className="text-slate-600" />
                                                Due: {new Date(task.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Actions Area */}
                                <div className="flex items-center gap-3 self-end md:self-center">
                                    {/* Download Link */}
                                    <a
                                        href={task.downloadUrl}
                                        download
                                        className="flex items-center gap-2 px-5 py-2.5 bg-slate-800/80 text-slate-300 rounded-xl text-sm font-bold hover:bg-slate-700 hover:text-white transition-all border border-slate-700"
                                    >
                                        <Download size={18} /> Download
                                    </a>

                                    {/* Action Toggle */}
                                    {isDone ? (
                                        <div className="flex items-center gap-2 px-6 py-2.5 bg-emerald-500 text-white rounded-xl text-sm font-bold animate-in zoom-in duration-300 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                                            <CheckCircle2 size={18} /> Done
                                        </div>
                                    ) : (
                                        <button
                                            onClick={() => handleMarkAsDone(task.id)}
                                            className="flex items-center gap-2 px-8 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-500 transition-all hover:scale-105 shadow-lg shadow-blue-900/20"
                                        >
                                            Submit <ArrowUpRight size={18} />
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

export default AssignmentWorkspace;