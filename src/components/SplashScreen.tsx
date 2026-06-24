'use client';

import { motion } from 'framer-motion';
import { BRIDE_NAME, GROOM_NAME, ASSETS } from '@/constants';
import { Heart } from 'lucide-react';

export default function SplashScreen() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-background overflow-hidden"
        >
            {/* Luxury Background Textures */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${ASSETS.paperTexture})` }} />
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url(${ASSETS.goldDust})` }} />
            
            <div className="relative z-10 text-center space-y-8">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="space-y-4"
                >
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-[1px] w-12 bg-primary/30" />
                        <Heart className="text-primary fill-primary/10" size={24} />
                        <div className="h-[1px] w-12 bg-primary/30" />
                    </div>
                    
                    <div className="space-y-2">
                        <p className="text-text-muted font-serif italic tracking-[0.4em] uppercase text-[10px]">
                            The Wedding of
                        </p>
                        <h1 className="text-4xl md:text-5xl font-serif text-primary italic leading-tight">
                            {GROOM_NAME.split(' ')[0]} & {BRIDE_NAME.split(' ')[0]}
                        </h1>
                    </div>

                    <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
                        className="h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent mx-auto mt-6"
                    />
                </motion.div>
            </div>

            {/* Decorative Corner Flowers */}
            <motion.div
                initial={{ opacity: 0, scale: 1.2, rotate: -10 }}
                animate={{ opacity: 0.15, scale: 1, rotate: 0 }}
                transition={{ duration: 2 }}
                className="absolute -top-20 -left-20 w-80 h-80 pointer-events-none"
                style={{ backgroundImage: `url(${ASSETS.floralBorder})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
            />
            <motion.div
                initial={{ opacity: 0, scale: 1.2, rotate: 10 }}
                animate={{ opacity: 0.15, scale: 1, rotate: 0 }}
                transition={{ duration: 2 }}
                className="absolute -bottom-20 -right-20 w-80 h-80 pointer-events-none rotate-180"
                style={{ backgroundImage: `url(${ASSETS.floralBorder})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
            />
        </motion.div>
    );
}
