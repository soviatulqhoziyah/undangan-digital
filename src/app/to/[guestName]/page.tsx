'use client';

import { useState, useEffect, Suspense } from 'react';
import { useParams } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import OpeningCover from '@/components/OpeningCover';
import Hero from '@/components/Hero';
import AudioPlayer from '@/components/AudioPlayer';
import GroomBride from '@/components/GroomBride';
import EventSchedule from '@/components/EventSchedule';
import Countdown from '@/components/Countdown';
import Gallery from '@/components/Gallery';
import RSVPForm from '@/components/RSVPForm';
import GiftSection from '@/components/GiftSection';
import { ASSETS } from '@/constants';

function PageContent() {
  const [isOpen, setIsOpen] = useState(false);
  const params = useParams();
  const guestNameParam = params?.guestName;
  const recipient = guestNameParam ? decodeURIComponent(guestNameParam.toString()).replace(/-/g, ' ') : 'Tamu Undangan';

  const handleOpenInvitation = () => {
    setIsOpen(true);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    }
  }, [isOpen]);

  return (
    <main className="relative bg-background selection:bg-primary/20 selection:text-primary overflow-x-hidden min-h-screen">
      {/* Opening Cover */}
      <AnimatePresence mode="wait">
        {!isOpen && (
          <OpeningCover
            onOpen={handleOpenInvitation}
            guestName={recipient}
          />
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className={`${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-1000`}>
        {isOpen && (
          <>
            <AudioPlayer />
            <Hero />
            <div className="space-y-24 pb-20">
              <GroomBride />
              <EventSchedule />
              <Countdown />
              <Gallery />
              <RSVPForm guestName={recipient} />
              <GiftSection />
            </div>

            <footer className="relative py-20 text-center border-t border-primary/10 overflow-hidden">
              <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: `url(${ASSETS.goldDust})` }} />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-10 space-y-6"
              >
                <p className="text-4xl md:text-5xl font-serif text-primary italic">Kevin & Wulan</p>
                <div className="w-16 h-0.5 bg-primary/20 mx-auto" />
                <div className="space-y-2">
                  <p className="text-xs text-text-muted mt-2 tracking-[0.35em] uppercase font-bold">Thank you for being part of our journey</p>
                  <p className="text-[10px] text-primary/40 italic">#KevinWulanWedding</p>
                </div>
              </motion.div>
            </footer>
          </>
        )}
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="h-screen w-full bg-background flex items-center justify-center text-primary italic font-serif">Memuat Undangan Mewah...</div>}>
      <PageContent />
    </Suspense>
  );
}