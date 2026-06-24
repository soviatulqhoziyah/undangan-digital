'use client';

import { useState, useEffect } from 'react';
import { BRIDE, GROOM } from '@/constants';
import { Copy, Send, Check } from 'lucide-react';

export default function LinkGenerator() {
    const [guestName, setGuestName] = useState('');
    const [waNumber, setWaNumber] = useState('');
    const [baseUrl, setBaseUrl] = useState('');
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        setBaseUrl(window.location.origin);
    }, []);

    const invitationLink = `${baseUrl}?to=${encodeURIComponent(guestName)}`;
    
    const waMessage = `Assalamualaikum warahmatullahi wabarakatuh

Kepada Yth.
Bapak/Ibu/Saudara/i
*${guestName || '[Nama Tamu]'}*
_di tempat_

Dengan hormat, kami bermaksud mengundang Bapak/Ibu/Saudara/i dalam acara pernikahan kami:

*${GROOM.name} & ${BRIDE.name}*

Info lebih lengkap klik link dibawah ini:

${invitationLink}

Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa.

Kami yang mengundang
*${BRIDE.nickname} & ${GROOM.nickname}*

*Note: Untuk hasil tampilan terbaik, buka undangan menggunakan Browser Chrome, aktifkan mode terang/off mode dark*`;

    const handleCopy = () => {
        navigator.clipboard.writeText(waMessage);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleOpenWa = () => {
        // Clean phone number (only digits)
        const cleanedNumber = waNumber.replace(/\D/g, '');
        // If it starts with 0, change to 62
        const formattedNumber = cleanedNumber.startsWith('0') 
            ? '62' + cleanedNumber.slice(1) 
            : cleanedNumber;

        const url = formattedNumber 
            ? `https://wa.me/${formattedNumber}?text=${encodeURIComponent(waMessage)}`
            : `https://wa.me/?text=${encodeURIComponent(waMessage)}`;
        
        window.open(url, '_blank');
    };

    return (
        <div className="min-h-screen bg-background p-6 md:p-12 font-sans selection:bg-primary/20">
            <div className="max-w-2xl mx-auto space-y-8">
                <header className="text-center space-y-4">
                    <h1 className="text-3xl font-serif text-primary italic text-shadow-sm">WA Link Generator</h1>
                    <p className="text-text-muted text-sm leading-relaxed">Gunakan alat ini untuk membuat pesan undangan WhatsApp secara otomatis.</p>
                </header>

                <div className="luxury-card space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-primary">Nama Tamu</label>
                            <input
                                type="text"
                                value={guestName}
                                onChange={(e) => setGuestName(e.target.value)}
                                placeholder="Contoh: Altio"
                                className="w-full px-4 py-3 rounded-xl bg-primary/5 border border-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-primary">No. WhatsApp (Opsional)</label>
                            <input
                                type="text"
                                value={waNumber}
                                onChange={(e) => setWaNumber(e.target.value)}
                                placeholder="Contoh: 0812..."
                                className="w-full px-4 py-3 rounded-xl bg-primary/5 border border-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground"
                            />
                            <p className="text-[10px] text-text-muted italic">Kosongkan untuk memilih kontak di WA nanti.</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <label className="text-xs font-bold uppercase tracking-widest text-primary flex justify-between items-center">
                            Pratinjau Pesan
                            <button 
                                onClick={handleCopy}
                                className="flex items-center gap-2 text-primary hover:text-accent transition-colors normal-case tracking-normal text-[10px]"
                            >
                                {copied ? <Check size={14} /> : <Copy size={14} />}
                                {copied ? 'Tersalin!' : 'Salin Pesan'}
                            </button>
                        </label>
                        <div className="relative">
                            <pre className="w-full p-4 rounded-xl bg-white/50 border border-primary/5 text-sm text-text-muted whitespace-pre-wrap font-sans leading-relaxed min-h-[300px]">
                                {waMessage}
                            </pre>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 pt-4">
                        <button
                            onClick={handleCopy}
                            className="btn-premium flex-1 group flex items-center justify-center gap-3 px-6 py-4 rounded-full shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
                        >
                            <Copy size={18} />
                            <span className="font-bold text-xs uppercase tracking-widest">Salin Pesan</span>
                        </button>
                        <button
                            onClick={handleOpenWa}
                            className="flex-1 bg-[#25D366] text-white hover:bg-[#128C7E] flex items-center justify-center gap-3 px-6 py-4 rounded-full shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
                        >
                            <Send size={18} />
                            <span className="font-bold text-xs uppercase tracking-widest">Kirim ke WhatsApp</span>
                        </button>
                    </div>
                </div>

                <footer className="text-center">
                    <a href="/" className="text-primary/60 hover:text-primary text-sm transition-colors italic">
                        ← Kembali ke Undangan
                    </a>
                </footer>
            </div>
        </div>
    );
}
