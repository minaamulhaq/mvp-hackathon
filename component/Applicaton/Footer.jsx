"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-[#050505] border-t border-slate-900 pt-16 pb-8 overflow-hidden">
            {/* Subtle background glow to match Hero */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                                <span className="text-white font-bold text-lg">B</span>
                            </div>
                            <span className="text-xl font-bold text-white tracking-tight">Brand.</span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Simplifying academic life and campus events with one smart, integrated system.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Product</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/dashboard" className="text-slate-400 hover:text-blue-400 transition">Dashboard</Link></li>
                            <li><Link href="/events" className="text-slate-400 hover:text-blue-400 transition">Campus Events</Link></li>
                            <li><Link href="/assignments" className="text-slate-400 hover:text-blue-400 transition">Assignments</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Company</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/about" className="text-slate-400 hover:text-blue-400 transition">About Us</Link></li>
                            <li><Link href="/contact" className="text-slate-400 hover:text-blue-400 transition">Contact</Link></li>
                            <li><Link href="/privacy" className="text-slate-400 hover:text-blue-400 transition">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Social / Newsletter */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Stay Connected</h4>
                        <div className="flex space-x-4 mb-6">
                            <Link href="#" className="p-2 bg-slate-900 rounded-lg text-slate-400 hover:text-blue-400 transition">
                                <Twitter size={18} />
                            </Link>
                            <Link href="#" className="p-2 bg-slate-900 rounded-lg text-slate-400 hover:text-blue-400 transition">
                                <Github size={18} />
                            </Link>
                            <Link href="#" className="p-2 bg-slate-900 rounded-lg text-slate-400 hover:text-blue-400 transition">
                                <Linkedin size={18} />
                            </Link>
                        </div>
                        <div className="flex items-center text-xs text-slate-500">
                            <Mail size={14} className="mr-2" />
                            <span>support@yourbrand.com</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs">
                    <p>© {currentYear} Brand Inc. All rights reserved.</p>
                    <div className="flex items-center mt-4 md:mt-0">
                        <span>Made with</span>
                        <Heart size={12} className="mx-1 text-red-500 fill-red-500" />
                        <span>for students.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;