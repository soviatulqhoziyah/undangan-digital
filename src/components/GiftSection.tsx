'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, Gift } from 'lucide-react';

export default function GiftSection() {
    const [copied, setCopied] = useState<string | null>(null);

    const accounts = [
        { bank: 'BRI', number: '5542 0103 0251 533', owner: 'Wulan Ayu Mardhatillah' },
        { bank: 'Sea Bank', number: '901960529483', owner: 'Kevin Aprilio' }
    ];

    const handleCopy = (num: string) => {
        navigator.clipboard.writeText(num);
        setCopied(num);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <section className="section-container space-y-6 bg-white/20">
            {/* Elegant Heading */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center space-y-4"
            >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gift className="text-primary" size={32} />
                </div>
                <h2 className="text-4xl md:text-5xl font-serif text-foreground italic">Kado Digital</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" />
                <p className="max-w-md mx-auto text-text-muted text-sm leading-relaxed italic">
                    Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika Anda ingin memberikan tanda kasih, Anda dapat memberikannya melalui link di bawah ini.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full z-10">
                {accounts.map((acc, index) => (
                    <motion.div
                        key={acc.number}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="luxury-card text-center space-y-6 group hover:scale-[1.02] transition-transform duration-500"
                    >
                        <div className="space-y-1">
                            <p className="text-2xl font-serif font-bold text-primary italic uppercase tracking-widest">{acc.bank}</p>
                            <div className="w-12 h-0.5 bg-primary/10 mx-auto" />
                        </div>

                        <div className="space-y-1 py-4 bg-primary/5 rounded-2xl border border-primary/5">
                            <p className="text-xl font-sans font-bold tracking-[0.2em] text-foreground">{acc.number}</p>
                            <p className="text-sm text-text-muted italic uppercase tracking-wider">a.n {acc.owner}</p>
                        </div>

                        <button
                            onClick={() => handleCopy(acc.number)}
                            className="btn-premium w-full flex items-center justify-center gap-3 active:scale-95"
                        >
                            <AnimatePresence mode="wait">
                                {copied === acc.number ? (
                                    <motion.span
                                        key="checked"
                                        initial={{ scale: 0.5, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0.5, opacity: 0 }}
                                        className="flex items-center gap-2"
                                    >
                                        <Check size={18} /> Berhasil Disalin
                                    </motion.span>
                                ) : (
                                    <motion.span
                                        key="copy"
                                        initial={{ scale: 0.5, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0.5, opacity: 0 }}
                                        className="flex items-center gap-2"
                                    >
                                        <Copy size={18} /> Salin Rekening
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </button>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
