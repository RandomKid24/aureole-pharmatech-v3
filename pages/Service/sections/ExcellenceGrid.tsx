
import React from 'react';
import { ShieldCheck, Factory } from 'lucide-react';

const ExcellenceGrid: React.FC = () => {
    return (
        <section className="py-24 border-b border-slate-100 bg-aureole-soft">
            <div className="container mx-auto px-6 lg:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Quality Standards */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <ShieldCheck className="w-8 h-8 text-aureole-blue" />
                            <h3 className="text-3xl lg:text-4xl font-black font-heading uppercase tracking-tighter text-[#001529] leading-none">QUALITY STANDARDS</h3>
                        </div>
                        <p className="text-[15px] font-medium text-slate-500 tracking-tight leading-relaxed text-left">
                            Quality is uncompromising at Aureole PharmaTech. The company maintains stringent regulatory compliance and holds multiple certifications that reflect international quality benchmarks. Internally enforced quality control processes ensure that every product dispatched is safe, effective, and reliable.
                        </p>
                    </div>

                    {/* Manufacturing Excellence */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <Factory className="w-8 h-8 text-aureole-cyan" />
                            <h3 className="text-3xl lg:text-4xl font-black font-heading uppercase tracking-tighter text-[#001529] leading-none">MANUFACTURING EXCELLENCE</h3>
                        </div>
                        <p className="text-[15px] font-medium text-slate-500 tracking-tight leading-relaxed text-left">
                            Aureole PharmaTech leverages advanced manufacturing facilities equipped with state-of-the-art technology. Supported by a skilled workforce and continuous training programs, the manufacturing process ensures precision, consistency, and adherence to the highest quality standards.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExcellenceGrid;
