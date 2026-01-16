'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Form submission logic will be added later
        console.log('Form submitted:', formData);
    };

    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a1628]">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-12 text-center">
                        Get In Touch
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4 text-zinc-600 dark:text-slate-400">
                                <Mail className="w-6 h-6 flex-shrink-0 text-cyan-600 dark:text-cyan-400" />
                                <a href="mailto:ksaid1369@icloud.com" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                                    ksaid1369@icloud.com
                                </a>
                            </div>
                            <div className="flex items-center space-x-4 text-zinc-600 dark:text-slate-400">
                                <Linkedin className="w-6 h-6 flex-shrink-0 text-cyan-600 dark:text-cyan-400" />
                                <a href="https://linkedin.com/in/khalidmetwaly" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                                    linkedin.com/in/khalidmetwaly
                                </a>
                            </div>
                            <div className="flex items-center space-x-4 text-zinc-600 dark:text-slate-400">
                                <Phone className="w-6 h-6 flex-shrink-0 text-cyan-600 dark:text-cyan-400" />
                                <a href="tel:+971505420889" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                                    +971 50 542 0889
                                </a>
                            </div>
                            <div className="flex items-center space-x-4 text-zinc-600 dark:text-slate-400">
                                <MapPin className="w-6 h-6 flex-shrink-0 text-cyan-600 dark:text-cyan-400" />
                                <span>United Arab Emirates</span>
                            </div>
                        </div>
                        {/* Contact Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-slate-700 bg-white dark:bg-[#132338] text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-slate-700 bg-white dark:bg-[#132338] text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                required
                            />
                            <textarea
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                rows={5}
                                className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-slate-700 bg-white dark:bg-[#132338] text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                required
                            />
                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 transition-colors shadow-lg hover:shadow-cyan-500/25"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
