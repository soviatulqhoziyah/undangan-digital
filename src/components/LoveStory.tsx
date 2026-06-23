'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { LOVE_STORY } from '@/constants';

export default function LoveStory() {
    const paragraphs = LOVE_STORY.split('\n\n').filter(Boolean);

    return (
        <section className="section-container space-y-6 bg-white/20">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center space-y-4"
            >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="text-primary" size={32} />
                </div>
                <h2 className="text-4xl md:text-5xl font-serif text-foreground italic">Our Story</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="luxury-card max-w-2xl mx-auto w-full space-y-5"
            >
                {paragraphs.map((para, i) => (
                    <p key={i} className="text-text-muted text-sm leading-relaxed italic text-center">
                        {para}
                    </p>
                ))}
            </motion.div>
        </section>
    );
}
