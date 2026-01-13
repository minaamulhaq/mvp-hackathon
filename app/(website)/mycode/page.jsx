"use client";

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { Smartphone, Cpu, TrendingDown, ShieldCheck, Zap, Droplets, Flame } from 'lucide-react';

// Dynamically import Recharts to prevent Server-Side Rendering (SSR) issues
const ResponsiveContainer = dynamic(() => import('recharts').then(mod => mod.ResponsiveContainer), { ssr: false });
const LineChart = dynamic(() => import('recharts').then(mod => mod.LineChart), { ssr: false });
const Line = dynamic(() => import('recharts').then(mod => mod.Line), { ssr: false });
const XAxis = dynamic(() => import('recharts').then(mod => mod.XAxis), { ssr: false });
const YAxis = dynamic(() => import('recharts').then(mod => mod.YAxis), { ssr: false });
const CartesianGrid = dynamic(() => import('recharts').then(mod => mod.CartesianGrid), { ssr: false });
const Tooltip = dynamic(() => import('recharts').then(mod => mod.Tooltip), { ssr: false });

export default function LandingPage() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const chartData = [
        { day: 'Mon', usage: 32, predicted: 44 },
        { day: 'Tue', usage: 36, predicted: 40 },
        { day: 'Wed', usage: 48, predicted: 50 },
        { day: 'Thu', usage: 41, predicted: 47 },
        { day: 'Fri', usage: 40, predicted: 43 },
        { day: 'Sat', usage: 39, predicted: 46 },
        { day: 'Sun', usage: 45, predicted: 49 },
    ];

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            {/* SEO & Metadata */}
            <title>Smart Home Utility Monitoring | Bill Prediction</title>

            {/* Navigation */}
            <nav className="flex justify-between items-center py-6 px-10 bg-white border-b sticky top-0 z-50">
                <div className="flex items-center gap-2">
                    <Zap className="text-blue-600" fill="currentColor" size={24} />
                    <span className="font-bold text-xl tracking-tight">SmartUtility</span>
                </div>
                <button className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
                    Pre-order
                </button>
            </nav>

            {/* Hero Section */}
            <header className="relative overflow-hidden bg-slate-900 text-white py-24 px-6 text-center">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                        Master Your Monthly Bills
                    </h1>
                    <p className="text-xl opacity-80 mb-10 max-w-2xl mx-auto">
                        Stop waiting for the end of the month. Monitor electricity, gas, and water in real-time with IoT and ML. [cite: 4]
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-blue-500/30 transition">
                            Get Starter Kit
                        </button>
                        <button className="border border-slate-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-800 transition">
                            Watch Demo
                        </button>
                    </div>
                </div>
            </header>

            {/* Problem & Solution */}
            <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-6">Stop Reacting, Start Predicting </h2>
                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                        Most households only realize their extra usage when the bill finally arrives—by then, it's too late. [cite: 3]
                        Our system predicts your future costs using Machine Learning so you can adjust your habits today. [cite: 5, 19]
                    </p>
                    <div className="space-y-4">
                        {[
                            { icon: <Zap size={20} />, text: "Real-time Electricity (AC, Fans, Fridge) [cite: 4]" },
                            { icon: <Droplets size={20} />, text: "Water Consumption Tracking (Upcoming) [cite: 4]" },
                            { icon: <Flame size={20} />, text: "Gas Usage Monitoring (Upcoming) [cite: 4]" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                <span className="p-2 bg-blue-100 text-blue-600 rounded-md">{item.icon}</span>
                                {item.text}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Visual Chart Card */}
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                    <h3 className="font-bold mb-6 flex justify-between items-center">
                        Usage Trends (kWh)
                        <span className="text-xs font-normal text-slate-400 tracking-widest uppercase">Live Sync [cite: 10]</span>
                    </h3>
                    <div className="h-64 w-full">
                        {isLoaded && (
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={chartData}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                    <XAxis dataKey="day" axisLine={false} tickLine={false} />
                                    <YAxis axisLine={false} tickLine={false} hide />
                                    <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                                    <Line type="monotone" dataKey="usage" stroke="#2563eb" strokeWidth={3} dot={{ r: 4, fill: '#2563eb' }} />
                                    <Line type="monotone" dataKey="predicted" stroke="#06b6d4" strokeDasharray="6 6" strokeWidth={2} dot={false} />
                                </LineChart>
                            </ResponsiveContainer>
                        )}
                    </div>
                    <div className="flex justify-center gap-6 mt-6 text-sm">
                        <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-blue-600"></span> Current</div>
                        <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-cyan-400"></span> Predicted [cite: 5]</div>
                    </div>
                </div>
            </section>

            {/* Hardware/Service Breakdown */}
            <section className="bg-white py-20 px-6">
                <div className="max-w-6xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">A Hybrid Solution [cite: 9]</h2>
                    <p className="text-slate-500">Combining high-quality hardware with intelligent software. [cite: 9]</p>
                </div>
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
                    <div className="bg-slate-50 p-8 rounded-2xl">
                        <Cpu className="mx-auto text-blue-600 mb-4" size={48} />
                        <h3 className="text-xl font-bold mb-3">IoT Hardware [cite: 12]</h3>
                        <p className="text-slate-600 text-sm">Custom microcontroller with ACS712 sensors for precise voltage and current measurement. [cite: 12, 28]</p>
                    </div>
                    <div className="bg-slate-50 p-8 rounded-2xl">
                        <Smartphone className="mx-auto text-blue-600 mb-4" size={48} />
                        <h3 className="text-xl font-bold mb-3">Flutter App [cite: 12]</h3>
                        <p className="text-slate-600 text-sm">Real-time dashboards, historical reports, and personalized energy-saving suggestions. [cite: 10, 12]</p>
                    </div>
                    <div className="bg-slate-50 p-8 rounded-2xl">
                        <TrendingDown className="mx-auto text-blue-600 mb-4" size={48} />
                        <h3 className="text-xl font-bold mb-3">ML Engine [cite: 5]</h3>
                        <p className="text-slate-600 text-sm">Advanced forecasting trained on your specific consumption habits to eliminate bill shock. [cite: 5, 19]</p>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-24 px-6 bg-slate-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-12">Affordable for Every Household [cite: 27]</h2>
                    <div className="bg-white rounded-3xl shadow-2xl border-4 border-blue-600 p-10 relative">
                        <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-1 rounded-full text-sm font-bold uppercase">Best Value</span>
                        <h3 className="text-2xl font-bold mb-4">Complete Smart Hub </h3>
                        <div className="text-5xl font-extrabold mb-8 text-slate-900">
                            6,000 – 7,500 <span className="text-xl font-medium text-slate-400 italic">PKR</span> [cite: 27]
                        </div>
                        <ul className="grid md:grid-cols-2 gap-4 text-left mb-10 text-slate-600">
                            <li className="flex items-center gap-2"><ShieldCheck className="text-green-500" /> Main DB Monitoring Device [cite: 9]</li>
                            <li className="flex items-center gap-2"><ShieldCheck className="text-green-500" /> 3x Appliance Current Sensors [cite: 21]</li>
                            <li className="flex items-center gap-2"><ShieldCheck className="text-green-500" /> iOS/Android Mobile App Access [cite: 12]</li>
                            <li className="flex items-center gap-2"><ShieldCheck className="text-green-500" /> ML Bill Prediction Features [cite: 10]</li>
                            <li className="flex items-center gap-2"><ShieldCheck className="text-green-500" /> WiFi Enabled (Real-time Sync) [cite: 12]</li>
                            <li className="flex items-center gap-2"><ShieldCheck className="text-green-500" /> Usage Limit Alerts [cite: 10]</li>
                        </ul>
                        <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-xl hover:bg-blue-700 transition shadow-lg shadow-blue-500/20">
                            Pre-order Prototype
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white py-16 px-10 border-t">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
                    <div className="max-w-xs">
                        <div className="flex items-center gap-2 mb-4 font-bold text-xl">
                            <Zap className="text-blue-600" fill="currentColor" size={20} /> SmartUtility
                        </div>
                        <p className="text-slate-500 text-sm">Focusing on energy awareness, cost reduction, and smart living. [cite: 6]</p>
                    </div>
                    <div className="grid grid-cols-2 gap-10">
                        <div>
                            <h4 className="font-bold mb-4">Market Focus </h4>
                            <ul className="text-sm text-slate-500 space-y-2">
                                <li>Middle-class Families </li>
                                <li>Hostel Students </li>
                                <li>Landlords & Tenants </li>
                                <li>Solar Panel Owners </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Buy Online [cite: 25]</h4>
                            <ul className="text-sm text-slate-500 space-y-2">
                                <li>Daraz Store [cite: 25]</li>
                                <li>Facebook Marketplace [cite: 25]</li>
                                <li>Instagram Shopping [cite: 25]</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}