"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Calendar, MapPin, Clock, ChevronRight, ChevronLeft } from 'lucide-react';
import Image from 'next/image';

const EventCarousel = () => {
    const [mounted, setMounted] = useState(false);
    const scrollRef = useRef(null);

    // Dynamic path string from public folder


    const events = Array.from({ length: 10 }).map((_, i) => ({
        id: i + 1,
        title: `Campus Workshop Series ${i + 1}`,
        date: "Oct 24, 2025",
        time: "10:00 AM - 02:00 PM",
        venue: "Main Auditorium, Hall B",
        description: "Deep dive into modern industry tools and collaborative project management techniques.",
        image: null, // Placeholder, will be set below
    }));

    useEffect(() => {
        setMounted(true);
    }, []);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    if (!mounted) return null;

    return (
        <section className="relative py-24 bg-[#050505] overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 mb-10 flex justify-between items-end">
                <div>
                    <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4">
                        Upcoming <span className="text-blue-500">Campus Events</span>
                    </h2>
                    <p className="text-slate-400 max-w-lg">
                        Stay updated with the latest workshops, seminars, and social gatherings happening around you.
                    </p>
                </div>

                <div className="flex gap-3">
                    <button onClick={() => scroll('left')} className="p-3 rounded-full border border-slate-800 text-white hover:bg-slate-800 transition">
                        <ChevronLeft size={20} />
                    </button>
                    <button onClick={() => scroll('right')} className="p-3 rounded-full border border-slate-800 text-white hover:bg-slate-800 transition">
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            <div
                ref={scrollRef}
                className="flex overflow-x-auto gap-6 px-[5%] snap-x snap-mandatory scrollbar-hide pb-12"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {events.map((event) => (
                    <div key={event.id} className="min-w-[300px] md:min-w-[400px] snap-start group">
                        <div className="relative h-[500px] w-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/40 backdrop-blur-sm transition-all duration-500 hover:border-blue-500/50">

                            <div className="relative h-2/3 w-full overflow-hidden">
                                <Image
                                    src={`/assets/images/example.jpeg`}
                                    alt={event.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 400px"
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    priority={event.id <= 2}
                                />
                                <div className="absolute top-4 left-4 z-10 bg-blue-600 text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-widest shadow-lg">
                                    Trending
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                    {event.title}
                                </h3>
                                <p className="text-slate-400 text-sm line-clamp-2 mb-4">
                                    {event.description}
                                </p>
                                <div className="space-y-2">
                                    <div className="flex items-center text-xs text-slate-300 gap-2">
                                        <Calendar size={14} className="text-blue-500" />
                                        <span>{event.date}</span>
                                        <Clock size={14} className="text-blue-500 ml-2" />
                                        <span>{event.time}</span>
                                    </div>
                                    <div className="flex items-center text-xs text-slate-300 gap-2">
                                        <MapPin size={14} className="text-blue-500" />
                                        <span className="truncate">{event.venue}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default EventCarousel;