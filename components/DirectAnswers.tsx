import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { faqLd } from '../data/pageSeo';
import { DIRECT_ANSWERS } from '../data/directAnswers';

/** Question-led answers in plain HTML (answer first, then link) for readers, search and answer engines. */
const DirectAnswers: React.FC = () => {
  const { pathname } = useLocation();
  const block = DIRECT_ANSWERS[pathname.replace(/(.)\/$/, '$1')];
  if (!block) return null;

  return (
    <section className="py-16 border-t border-slate-100" aria-labelledby="direct-answers">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqLd(block.items.map((i) => ({ q: i.q, a: i.a }))))}</script>
      </Helmet>
      <div className="container mx-auto px-6 lg:px-24 max-w-4xl">
        <h2 id="direct-answers" className="text-3xl font-black font-heading tracking-tighter text-aureole-slate mb-8">
          {block.heading}
        </h2>
        <div className="space-y-6">
          {block.items.map((it) => (
            <div key={it.q}>
              <h3 className="text-lg font-bold font-heading text-aureole-deep">{it.q}</h3>
              <p className="mt-1 text-slate-600 leading-relaxed">
                {it.a}{' '}
                {it.link && <Link to={it.link.href} className="text-aureole-blue font-semibold hover:underline">{it.link.label} →</Link>}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DirectAnswers;
