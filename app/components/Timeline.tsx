'use client';

import { motion } from 'framer-motion';

interface TimelineItemProps {
    year: string;
    title: string;
    organization: string;
    description: string;
    index: number;
}

function TimelineItem({ year, title, organization, description, index }: TimelineItemProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`flex gap-8 items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
        >
            {/* Content Card */}
            <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <motion.div
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 bg-white dark:bg-[#132338] rounded-xl shadow-lg hover:shadow-cyan-500/10 border border-zinc-200 dark:border-slate-700"
                >
                    <span className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">{year}</span>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-1">{title}</h3>
                    <p className="text-zinc-600 dark:text-slate-300 mt-1">{organization}</p>
                    <p className="text-sm text-zinc-500 dark:text-slate-400 mt-2">{description}</p>
                </motion.div>
            </div>

            {/* Center Dot */}
            <div className="flex-shrink-0 w-4 h-4 rounded-full bg-cyan-500 border-4 border-white dark:border-[#0a1628] shadow-lg z-10" />

            {/* Empty Space for alternating layout */}
            <div className="flex-1" />
        </motion.div>
    );
}

export default function Timeline() {
    // Timeline data from CV
    const timelineData = [
        {
            year: "2022 - Present",
            title: "Arabic Language Educator",
            organization: "Aldar Learning Hub School, RAK, UAE",
            description: "Led comprehensive Arabic language program with AI-powered solutions and digital tools. Achieved 77.06% reading engagement vs. 71.03% global average."
        },
        {
            year: "2021 - 2022",
            title: "Arabic Language Teacher & Curriculum Coordinator",
            organization: "Gulf Model School, Sharjah",
            description: "Created comprehensive learning experiences using Quizizz, Nearpod, and educational management platforms. Contributed to school-wide literacy improvements."
        },
        {
            year: "2020 - 2021",
            title: "Arabic Teacher & National Identity Coordinator",
            organization: "National Teachers Academy",
            description: "Assessed Arabic language proficiency across levels and organized National Identity events. Enhanced differentiation strategies."
        },
        {
            year: "2018 - 2019",
            title: "Taekd (AK) Hearing Committee Member",
            organization: "Abu Dhabi Education Council",
            description: "Coordinated hearing sessions for teacher violations (ADEK Guidelines). Supported student relationships and conflict resolution."
        },
        {
            year: "2017 - 2018",
            title: "Making of Program (Cat 3) - Teacher",
            organization: "Private School, Abu Dhabi",
            description: "Developed curriculum-aligned question papers and implemented best practices for Arabic literacy."
        },
        {
            year: "2010 - 2011",
            title: "English Convention Course",
            organization: "International Center for Teaching Arabic, Cairo",
            description: "Completed comprehensive teacher training for innovative teaching practices."
        }
    ];

    return (
        <section id="journey" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-[#0f1b2e]">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-12 text-center">
                        Professional Journey
                    </h2>

                    {/* Timeline Container with vertical line */}
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-zinc-200 dark:bg-slate-700 -translate-x-1/2" />

                        {/* Timeline Items */}
                        <div className="space-y-12">
                            {timelineData.map((item, index) => (
                                <TimelineItem
                                    key={index}
                                    year={item.year}
                                    title={item.title}
                                    organization={item.organization}
                                    description={item.description}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
