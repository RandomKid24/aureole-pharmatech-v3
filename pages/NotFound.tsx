import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFound: React.FC = () => (
    <div className="pt-40 pb-24 min-h-[60vh] bg-transparent container mx-auto px-6 lg:px-24 text-center">
        <SEO title="Page not found | Aureole Pharma Tech" description="This page could not be found." noindex />
        <h1 className="text-4xl lg:text-5xl font-black font-heading tracking-tighter text-aureole-slate">Page not found</h1>
        <p className="mt-4 text-slate-600">The page you are looking for does not exist or has moved.</p>
        <div className="mt-8 flex justify-center gap-4 text-sm font-bold uppercase tracking-widest">
            <Link to="/" className="text-aureole-blue hover:underline">Home</Link>
            <Link to="/products" className="text-aureole-blue hover:underline">Products</Link>
        </div>
    </div>
);

export default NotFound;
