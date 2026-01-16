'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
    const [displayedText, setDisplayedText] = useState('');
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    const roles = [
        "Arabic Language Educator",
        "Strategic Educational Leader",
        "Ed-Tech Expert"
    ];

    useEffect(() => {
        const currentRole = roles[currentRoleIndex];
        let timeout: NodeJS.Timeout;

        if (isTyping) {
            if (displayedText.length < currentRole.length) {
                timeout = setTimeout(() => {
                    setDisplayedText(currentRole.slice(0, displayedText.length + 1));
                }, 100);
            } else {
                timeout = setTimeout(() => setIsTyping(false), 3000);
            }
        } else {
            if (displayedText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayedText(displayedText.slice(0, -1));
                }, 50);
            } else {
                setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
                setIsTyping(true);
            }
        }

        return () => clearTimeout(timeout);
    }, [displayedText, isTyping, currentRoleIndex]);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#0f1b2e] to-[#132338]">
            {/* Logo/Icon at top */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
                <img
                    src="/logo_dark.png"
                    alt="Khalid Metwaly Logo"
                    className="w-20 h-20 object-contain drop-shadow-lg"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
                        Hi, I'm <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Khalid Metwaly</span>
                    </h1>

                    <div className="h-16 flex items-center justify-center mb-8">
                        <p className="text-xl sm:text-2xl text-zinc-300">
                            I'm a <span className="text-cyan-400 font-semibold">{displayedText}</span>
                            <span className="animate-pulse text-cyan-400">|</span>
                        </p>
                    </div>

                    <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Versatile and visionary Arabic language educator with over 13 years of experience, blending curriculum planning, digital innovation, and inclusive pedagogy.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.a
                            href="#awards"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            View Achievements
                        </motion.a>
                        <motion.a
                            href="/cv"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 border-2 border-zinc-600 text-zinc-200 rounded-lg font-semibold hover:bg-zinc-800 hover:border-zinc-500 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                            </svg>
                            Download CV
                        </motion.a>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <ChevronDown className="w-6 h-6 text-zinc-400" />
                </motion.div>
            </div>
        </section>
    );
}
