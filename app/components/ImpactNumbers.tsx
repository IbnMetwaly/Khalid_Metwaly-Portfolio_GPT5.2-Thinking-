'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ImpactNumberProps {
    label: string;
    value: number;
    suffix?: string;
}

function CountUpNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const duration = 2000;
        const steps = 60;
        const increment = value / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [value]);

    return (
        <span>
            {count}
            {suffix}
        </span>
    );
}

export default function ImpactNumbers() {
    const numbers: ImpactNumberProps[] = [
        { label: 'Years of Experience', value: 13, suffix: '+' },
        { label: 'Students Impacted', value: 5000, suffix: '+' },
        { label: 'Certifications Earned', value: 15, suffix: '+' },
        { label: 'Awards Received', value: 10, suffix: '+' },
        { label: 'Reading Engagement', value: 77, suffix: '%' },
        { label: 'Student Attachment Rate', value: 96, suffix: '%' },
    ];

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a1628]">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-12 text-center">
                        Impact in Numbers
                    </h2>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {numbers.map((item, index) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="text-center p-6 rounded-xl bg-zinc-50 dark:bg-[#132338] shadow-lg border border-transparent dark:border-slate-800 hover:border-cyan-500/30 transition-all duration-300"
                            >
                                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent mb-2">
                                    <CountUpNumber value={item.value} suffix={item.suffix} />
                                </div>
                                <div className="text-sm text-zinc-600 dark:text-slate-400">
                                    {item.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
