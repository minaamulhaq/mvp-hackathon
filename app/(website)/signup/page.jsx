"use client";

import React from 'react';
import { User, School, Mail, Lock, ArrowRight, UserPlus } from 'lucide-react';
import { useRouter } from 'next/navigation';

const RegisterPage = () => {
    const router = useRouter();

    const [inputdata, setInputdata] = React.useState({
        fullname: "",
        university: "",
        email: "",
        password: ""
    });

    // Handle input changes dynamically
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputdata(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const setView = (view) => {
        // Navigates to the specified route
        router.push(`/${view}`);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", inputdata);
        // On success, navigate to dashboard
        setView('dashboard');
    };

    return (
        <div className="py-10 min-h-screen bg-[#050505] text-white flex items-center justify-center p-6 relative overflow-hidden font-sans">
            {/* BACKGROUND AMBIENCE */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/5 blur-[120px] rounded-full"></div>
            </div>

            <div className="w-full max-w-md animate-in fade-in zoom-in duration-500 relative z-10">
                {/* HEADER */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/10 border border-blue-500/20 rounded-2xl mb-4">
                        <UserPlus size={32} className="text-blue-500" />
                    </div>
                    <h1 className="text-4xl font-black text-white tracking-tighter uppercase">
                        Join <span className="text-blue-500">Portal</span>
                    </h1>
                    <p className="text-slate-500 text-sm mt-2 font-medium tracking-wide">
                        Register your student credentials.
                    </p>
                </div>

                {/* REGISTRATION FORM CARD */}
                <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 p-8 rounded-[2.5rem] shadow-2xl">
                    <form className="space-y-5" onSubmit={handleSubmit}>

                        {/* NAME */}
                        <div className="space-y-1.5 text-left">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                                Full Name
                            </label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={18} />
                                <input
                                    type="text"
                                    name="fullname"
                                    value={inputdata.fullname}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    className="w-full bg-slate-950/50 border border-slate-800 text-white text-sm rounded-2xl pl-12 pr-4 py-3.5 focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-700"
                                    required
                                />
                            </div>
                        </div>

                        {/* UNIVERSITY */}
                        <div className="space-y-1.5 text-left">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                                University
                            </label>
                            <div className="relative">
                                <School className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={18} />
                                <input
                                    type="text"
                                    name="university"
                                    value={inputdata.university}
                                    onChange={handleChange}
                                    placeholder="Global Tech University"
                                    className="w-full bg-slate-950/50 border border-slate-800 text-white text-sm rounded-2xl pl-12 pr-4 py-3.5 focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-700"
                                    required
                                />
                            </div>
                        </div>

                        {/* EMAIL */}
                        <div className="space-y-1.5 text-left">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                                Email
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={18} />
                                <input
                                    type="email"
                                    name="email"
                                    value={inputdata.email}
                                    onChange={handleChange}
                                    placeholder="name@university.edu"
                                    className="w-full bg-slate-950/50 border border-slate-800 text-white text-sm rounded-2xl pl-12 pr-4 py-3.5 focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-700"
                                    required
                                />
                            </div>
                        </div>

                        {/* PASSWORD */}
                        <div className="space-y-1.5 text-left">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={18} />
                                <input
                                    type="password"
                                    name="password"
                                    value={inputdata.password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="w-full bg-slate-950/50 border border-slate-800 text-white text-sm rounded-2xl pl-12 pr-4 py-3.5 focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-700"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-3 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black uppercase text-xs tracking-[0.2em] rounded-2xl transition-all shadow-lg shadow-blue-900/20 mt-2 active:scale-95"
                        >
                            Create Profile <ArrowRight size={18} />
                        </button>
                    </form>
                </div>

                {/* FOOTER NAVIGATION */}
                <button
                    onClick={() => setView('login')}
                    className="w-full mt-8 text-slate-500 text-xs font-bold uppercase tracking-widest hover:text-blue-500 transition-colors"
                >
                    Already have an account? Sign In
                </button>
            </div>
        </div>
    );
};

export default RegisterPage;