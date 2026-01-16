'use client';

import { motion } from 'framer-motion';
import { BookOpen, Monitor, Target, GraduationCap, BarChart, Users } from 'lucide-react';

const competencies = [
    {
        name: "Curriculum Development",
        icon: BookOpen,
        description: "Expert in designing comprehensive Arabic language curricula"
    },
    {
        name: "Educational Technology",
        icon: Monitor,
        description: "Proficient in digital tools for personalized learning"
    },
    {
        name: "Strategic Planning",
        icon: Target,
        description: "Proven success in curriculum planning and assessment"
    },
    {
        name: "Literacy Development",
        icon: GraduationCap,
        description: "Specialized in Arabic language literacy"
    },
    {
        name: "Data-Driven Instruction",
        icon: BarChart,
        description: "Expert in assessment-driven improvements"
    },
    {
        name: "Leadership & Mentoring",
        icon: Users,
        description: "Experienced in coaching and capacity building"
    }
];

export default function About() {
    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-[#0f1b2e]">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-12 text-center">
                        About Me
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        {/* Image Placeholder - Replace with actual image */}
                        <div className="aspect-square bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/images/profile.jpg"
                                alt="Khalid Metwaly"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.parentElement!.classList.add('bg-gradient-to-br', 'from-cyan-500', 'to-blue-600');
                                }}
                            />
                        </div>

                        {/* Content */}
                        <div>
                            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                                Educational Leader & Innovator
                            </h3>
                            <p className="text-lg text-zinc-600 dark:text-slate-300 mb-4">
                                Versatile and visionary Arabic language educator with over <strong>13 years</strong> of experience delivering exceptional educational outcomes.
                            </p>
                            <p className="text-lg text-zinc-600 dark:text-slate-300 mb-4">
                                Proven success in guiding curriculum planning, performance assessment, and Arabic language literacy initiatives. Passionate about leveraging technology to personalize learning experiences.
                            </p>
                            <p className="text-lg text-zinc-600 dark:text-slate-300">
                                Committed to promoting National Identity and literacy while consistently achieving high student engagement - improving student attachment from <strong className="text-cyan-500">75% to 96%</strong> in a single academic year.
                            </p>
                        </div>
                    </div>

                    {/* Core Competencies */}
                    <div>
                        <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8 text-center">
                            Core Competencies
                        </h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {competencies.map((competency, index) => {
                                const Icon = competency.icon;
                                return (
                                    <motion.div
                                        key={competency.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        whileHover={{ y: -4, scale: 1.02 }}
                                        className="p-6 bg-white dark:bg-[#132338] rounded-xl border border-zinc-200 dark:border-slate-700 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 group"
                                    >
                                        <Icon className="w-10 h-10 text-cyan-600 dark:text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                                        <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
                                            {competency.name}
                                        </h4>
                                        <p className="text-sm text-zinc-600 dark:text-slate-400">
                                            {competency.description}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
