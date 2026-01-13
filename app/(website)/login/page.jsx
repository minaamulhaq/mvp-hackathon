"use client";

import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowRight, ShieldCheck } from 'lucide-react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    // Handle input changes dynamically
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const setView = (view) => {
        router.push(`/${view}`);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login Credentials:", formData);
        // Simulate successful login
        setView('dashboard');
    };

    return (
        <div className="min-h-screen bg-[#050505] flex items-center justify-center px-6 py-12 relative overflow-hidden font-sans">
            {/* BACKGROUND DECORATION */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-600/10 blur-[120px] rounded-full"></div>

            <div className="w-full max-w-md relative z-10 animate-in fade-in zoom-in duration-500">
                {/* LOGO / BRANDING */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/10 border border-blue-500/20 rounded-2xl mb-4 shadow-[0_0_20px_rgba(37,99,235,0.2)]">
                        <ShieldCheck size={32} className="text-blue-500" />
                    </div>
                    <h1 className="text-4xl font-black text-white tracking-tighter uppercase">
                        Student <span className="text-blue-500">Portal</span>
                    </h1>
                    <p className="text-slate-500 text-sm mt-2 font-medium">Please enter your credentials to continue.</p>
                </div>

                {/* LOGIN CARD */}
                <div className="bg-slate-900/30 backdrop-blur-xl border border-slate-800 p-8 rounded-[2.5rem] shadow-2xl">
                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* EMAIL FIELD */}
                        <div className="space-y-2 text-left">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-blue-500 transition-colors">
                                    <Mail size={18} />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-slate-950/50 border border-slate-800 text-white text-sm rounded-2xl pl-12 pr-4 py-4 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-slate-700"
                                    placeholder="name@university.edu"
                                />
                            </div>
                        </div>

                        {/* PASSWORD FIELD */}
                        <div className="space-y-2 text-left">
                            <div className="flex justify-between items-center px-1">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Password</label>
                                <button type="button" className="text-[10px] font-black text-blue-500 uppercase tracking-widest hover:text-blue-400 transition-colors">Forgot?</button>
                            </div>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-blue-500 transition-colors">
                                    <Lock size={18} />
                                </div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-slate-950/50 border border-slate-800 text-white text-sm rounded-2xl pl-12 pr-12 py-4 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-slate-700"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-500 hover:text-slate-300 transition-colors"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        {/* SUBMIT BUTTON */}
                        <button
                            type="submit"
                            className="w-full group relative flex items-center justify-center gap-3 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black uppercase text-xs tracking-[0.2em] rounded-2xl transition-all shadow-[0_10px_20px_rgba(37,99,235,0.2)] active:scale-[0.98]"
                        >
                            Sign In to Portal
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </div>

                {/* FOOTER */}
                <div className="text-center mt-8 space-y-4">
                    <p className="text-slate-600 text-xs">
                        Don't have an account?
                        <button
                            onClick={() => setView('signup')}
                            className="text-blue-500 font-bold hover:underline ml-1"
                        >
                            Create Account
                        </button>
                    </p>
                    <button
                        onClick={() => setView('')}
                        className="text-[10px] font-black text-slate-700 uppercase tracking-widest hover:text-white transition-colors"
                    >
                        ← Back to Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;