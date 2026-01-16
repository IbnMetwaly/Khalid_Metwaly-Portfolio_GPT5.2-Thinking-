'use client';

import { motion } from 'framer-motion';
import { Award, Trophy, Star } from 'lucide-react';

const awards = [
    {
        name: "Top Achiever Award",
        organization: "Ain Al-Ahram School",
        date: "2025",
        description: "Recognized for outstanding teaching excellence and student achievement",
        icon: Trophy
    },
    {
        name: "Outstanding Teacher Award",
        organization: "Emirates National Schools",
        date: "2019",
        description: "Honored for exceptional dedication to Arabic language education",
        icon: Award
    },
    {
        name: "Innovation in Education - 2nd Place",
        organization: "British School of Al Khubairat",
        date: "2017",
        description: "Recognized for innovative teaching methodologies and educational technology integration",
        icon: Star
    },
    {
        name: "Excellence in Arabic Education Award",
        organization: "Ain Al Educator 2.0",
        date: "2016",
        description: "Awarded for excellence in Arabic language instruction and curriculum development",
        icon: Award
    }
];

export default function Awards() {
    return (
        <section id="awards" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a1628]">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4 text-center">
                        Awards & Recognition
                    </h2>
                    <p className="text-center text-zinc-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
                        Honored for excellence in educational leadership and innovative teaching practices
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        {awards.map((award, index) => {
                            const Icon = award.icon;
                            return (
                                <motion.div
                                    key={award.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    whileHover={{ y: -4, scale: 1.02 }}
                                    className="p-6 bg-zinc-50 dark:bg-[#132338] rounded-xl shadow-lg hover:shadow-cyan-500/10 border border-transparent dark:border-slate-700 transition-all duration-300 group"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                                            <Icon className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                                                {award.name}
                                            </h3>
                                            <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 mb-2">
                                                {award.organization} • {award.date}
                                            </p>
                                            <p className="text-sm text-zinc-600 dark:text-slate-400">
                                                {award.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
