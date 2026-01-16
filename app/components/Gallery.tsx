'use client';

import { motion } from 'framer-motion';

export default function Gallery() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-black">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-12 text-center">
                        Gallery
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {/* Gallery images will be added here */}
                        <p className="col-span-full text-center text-zinc-600 dark:text-zinc-400">
                            Gallery component - to be populated with your images
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
