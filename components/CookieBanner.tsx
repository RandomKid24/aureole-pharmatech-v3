import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const KEY = 'cookie-consent';
const GA_ID = 'G-1HWT80VN52';

const read = () => {
    try { return localStorage.getItem(KEY); } catch { return null; }
};

const addScript = (src: string, id?: string, body?: string) => {
    const s = document.createElement('script');
    s.src = src;
    s.async = true;
    if (id) s.id = id;
    if (body) s.text = body;
    document.head.appendChild(s);
};

// Analytics and chat load only after "Accept".
const loadTracking = () => {
    const w = window as any;
    if (w.gtag) return;
    w.dataLayer = w.dataLayer || [];
    w.gtag = function () { w.dataLayer.push(arguments); };
    w.gtag('js', new Date());
    w.gtag('config', GA_ID);
    addScript(`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`);
    addScript('https://cdn.express-chat.com/website-bot.js', 'messenger-widget-b', '66bee9567679f567001b9fef,66bee9250a6ae501b01c42da');
};

// Reload is what unloads already-running scripts.
// ponytail: cookies already set stay until they expire; clear them here if legal review requires it.
export const resetCookieChoice = () => {
    try { localStorage.removeItem(KEY); } catch { /* storage blocked */ }
    window.location.reload();
};

const CookieBanner: React.FC = () => {
    const [choice, setChoice] = useState(read);

    useEffect(() => {
        if (choice === 'accepted') loadTracking();
    }, [choice]);

    if (choice) return null;

    const choose = (value: 'accepted' | 'rejected') => {
        try { localStorage.setItem(KEY, value); } catch { /* storage blocked: ask again next visit */ }
        setChoice(value);
    };
    const btn = 'flex-1 sm:flex-none rounded-lg px-3 sm:px-6 py-2.5 text-sm font-semibold';

    return (
        <section aria-label="Cookie consent" className="fixed inset-x-3 bottom-3 z-[100] mx-auto max-w-3xl rounded-xl border border-slate-200 bg-white p-4 shadow-2xl sm:flex sm:items-center sm:gap-5">
            <p className="text-sm text-aureole-slate">
                We use cookies for analytics and chat. They stay off unless you accept.{' '}
                <Link to="/privacy-policy" className="underline">Privacy Policy</Link>
            </p>
            <div className="mt-3 flex shrink-0 gap-3 sm:mt-0">
                <button type="button" onClick={() => choose('rejected')} className={`${btn} btn-g-o`}>Reject</button>
                <button type="button" onClick={() => choose('accepted')} className={`${btn} btn-g`}>Accept</button>
            </div>
        </section>
    );
};

export default CookieBanner;
