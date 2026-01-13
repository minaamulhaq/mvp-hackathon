"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, User, Home, Calendar, LayoutDashboard, Info, LogIn } from 'lucide-react';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/', icon: <Home size={18} /> },
        { name: 'Classes', href: '/classes', icon: <Home size={18} /> },
        { name: 'Events', href: '/events', icon: <Calendar size={18} /> },
        { name: 'Dashboard', href: '/dashboard', icon: <LayoutDashboard size={18} /> },
        { name: 'About', href: '/about', icon: <Info size={18} /> },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xl">B</span>
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                            Brand.
                        </span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-slate-400 hover:text-blue-400 transition-colors text-sm font-medium"
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Desktop Auth */}
                        {isLoggedIn ? (
                            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 p-[2px] cursor-pointer">
                                <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
                                    <User size={18} className="text-blue-400" />
                                </div>
                            </div>
                        ) : (
                            <button
                                onClick={() => setIsLoggedIn(true)}
                                className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all"
                            >
                                Login
                            </button>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-slate-300 hover:text-white p-2"
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Drawer */}
            <div className={`fixed inset-0 top-16 bg-slate-950 z-40 md:hidden transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col p-6 space-y-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center space-x-4 p-4 rounded-xl bg-slate-900/50 text-slate-300 border border-slate-800"
                        >
                            {link.icon}
                            <span className="text-lg font-medium">{link.name}</span>
                        </Link>
                    ))}

                    <div className="pt-4 border-t border-slate-800">
                        {isLoggedIn ? (
                            <div className="flex items-center space-x-4 p-4 text-blue-400">
                                <User size={24} />
                                <span className="font-semibold">My Profile</span>
                            </div>
                        ) : (
                            <button
                                onClick={() => { setIsLoggedIn(true); setIsMobileMenuOpen(false); }}
                                className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white p-4 rounded-xl font-bold shadow-lg shadow-blue-900/20"
                            >
                                <LogIn size={20} />
                                <span>Login Now</span>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;