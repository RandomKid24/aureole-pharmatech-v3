import React from 'react';

// Opens in a new tab so a half-filled form is not lost.
const FormNotice: React.FC<{ className?: string }> = ({ className = '' }) => (
    <p className={`text-xs text-slate-500 ${className}`}>
        By submitting, you agree to our{' '}
        <a href="/privacy-policy" target="_blank" rel="noopener" className="underline text-aureole-blue">Privacy Policy</a>.
        {' '}We save your details to contact you.
    </p>
);

export default FormNotice;
