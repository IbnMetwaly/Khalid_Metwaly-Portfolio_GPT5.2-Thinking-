'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        quote: "Khalid's innovative approach to Arabic language education has transformed our students' engagement and achievement. His integration of technology creates truly personalized learning experiences.",
        author: "Educational Director",
        title: "Senior Administrator",
        organization: "Aldar Education"
    },
    {
        quote: "An exceptional educator who combines deep subject expertise with cutting-edge pedagogical methods. Khalid's commitment to student success is evident in every aspect of his work.",
        author: "School Principal",
        title: "Principal",
        organization: "Gulf Model School"
    },
    {
        quote: "Khalid's leadership in curriculum development and digital literacy has set new standards for Arabic language instruction in our institution.",
        author: "Curriculum Coordinator",
        title: "Head of Languages",
        organization: "National Teachers Academy"
    }
];

export default function Testimonials() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-[#0f1b2e]">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4 text-center">
                        Testimonials
                    </h2>
                    <p className="text-center text-zinc-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
                        What colleagues and administrators say about my work
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.5 }}
                                className="relative p-8 bg-white dark:bg-[#132338] rounded-2xl border border-zinc-200 dark:border-slate-700 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300"
                            >
                                <Quote className="w-10 h-10 text-cyan-500/20 absolute top-6 left-6" />
                                <div className="relative z-10">
                                    <p className="text-zinc-700 dark:text-slate-300 mb-6 italic">
                                        "{testimonial.quote}"
                                    </p>
                                    <div className="pt-4 border-t border-zinc-200 dark:border-slate-700">
                                        <p className="font-bold text-zinc-900 dark:text-white">
                                            {testimonial.author}
                                        </p>
                                        <p className="text-sm text-zinc-600 dark:text-slate-400">
                                            {testimonial.title}
                                        </p>
                                        <p className="text-sm text-cyan-600 dark:text-cyan-400">
                                            {testimonial.organization}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
