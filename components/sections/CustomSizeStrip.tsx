import React from 'react';

// Shown only for products whose data says customised sizes are offered (a models table, or a remark mentioning them).
export const offersCustomSize = (product: any): boolean => {
    const remarks = [product?.complexTable?.remark, product?.variantTable?.remark].filter(Boolean).join(' ');
    return (product?.models?.length ?? 0) > 0 || /custom/i.test(remarks);
};

const CustomSizeStrip: React.FC<{ product: any }> = ({ product }) => {
    if (!offersCustomSize(product)) return null;
    return (
        <section className="py-10 bg-transparent">
            <div className="container mx-auto px-6 lg:px-24">
                <div className="g-left pl-8 pr-6 py-8 bg-slate-50 border border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                    <div>
                        <h3 className="text-xl font-black font-heading tracking-tight text-aureole-slate">Need a different size?</h3>
                        <p className="mt-1 text-sm text-slate-600 leading-relaxed">The sizes above are standard. Customised sizes can also be offered; tell us your capacity and conditions.</p>
                    </div>
                    <a href="#enquiry" onClick={(e) => { e.preventDefault(); document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} className="btn-g inline-flex items-center justify-center px-8 py-4 text-[10px] font-black uppercase tracking-widest shrink-0">
                        Request a custom size
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CustomSizeStrip;
