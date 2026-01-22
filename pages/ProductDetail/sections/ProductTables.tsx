
import React from 'react';
import { Box } from 'lucide-react';

interface ProductTablesProps {
    product: any;
}

const ProductTables: React.FC<ProductTablesProps> = ({ product }) => {
    return (
        <>
            {/* Models and Dimensions Table */}
            {product.models && product.models.length > 0 && (
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 lg:px-24">
                        <div className="flex items-center gap-4 mb-16">
                            <Box className="text-aureole-blue" size={18} />
                            <h3 className="text-[11px] font-black font-heading uppercase tracking-[0.4em] text-aureole-slate">Models & Dimensions</h3>
                        </div>

                        <div className="overflow-x-auto border-[3px] border-aureole-slate shadow-2xl">
                            <table className="w-full text-left min-w-[800px]">
                                <thead>
                                    <tr className="bg-slate-50 text-aureole-slate border-b border-slate-300">
                                        <th className="py-7 px-8 text-[12px] font-black uppercase tracking-[0.2em] border-r border-slate-300">Model</th>
                                        <th className="py-7 px-8 text-[12px] font-black uppercase tracking-[0.2em] border-r border-slate-300">Capacity (L)</th>
                                        <th className="py-7 px-8 text-[12px] font-black uppercase tracking-[0.2em] border-r border-slate-300 text-center">Interior (W×D×H mm)</th>
                                        {product.models.some((m: any) => m.exterior) && (
                                            <th className="py-7 px-8 text-[12px] font-black uppercase tracking-[0.2em] border-r border-slate-300 text-center">Exterior (W×D×H mm)</th>
                                        )}
                                        {product.models.some((m: any) => m.trays) && (
                                            <th className="py-7 px-8 text-[12px] font-black uppercase tracking-[0.2em] border-r border-slate-300 text-center">Trays</th>
                                        )}
                                        <th className="py-7 px-8 text-[12px] font-black uppercase tracking-[0.2em] text-center">Power</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-300 text-slate-600">
                                    {product.models.map((m: any, i: number) => (
                                        <tr key={i} className="transition-colors group">
                                            <td className="py-6 px-8 text-[12px] font-[900] text-aureole-blue border-r border-slate-300 uppercase tracking-tight">{m.model}</td>
                                            <td className="py-6 px-8 text-[12px] font-bold border-r border-slate-300 text-center">{m.capacity}</td>
                                            <td className="py-6 px-8 text-[11px] font-bold border-r border-slate-300 text-center tracking-tight">{m.interior}</td>
                                            {product.models.some((model: any) => model.exterior) && (
                                                <td className="py-6 px-8 text-[11px] font-bold border-r border-slate-300 text-center tracking-tight">{m.exterior || '-'}</td>
                                            )}
                                            {product.models.some((model: any) => model.trays) && (
                                                <td className="py-6 px-8 text-[12px] font-bold border-r border-slate-300 text-center">{m.trays || '-'}</td>
                                            )}
                                            <td className="py-6 px-8 text-[11px] font-bold text-center uppercase tracking-tight">{m.power}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-12 p-10 bg-slate-50 border border-slate-100 border-l-[6px] border-aureole-cyan shadow-sm">
                            <p className="text-[12px] text-aureole-slate leading-relaxed font-bold uppercase tracking-widest">
                                <span className="text-aureole-cyan mr-4">REMARK:</span>
                                Above are standard sizes. Customised sizes are available.
                                <span className="block mt-2 text-[10px] text-slate-500 italic">V** = Variant based upon construction & body.</span>
                            </p>
                        </div>
                    </div>
                </section>
            )}

            {/* Custom Variant Table */}
            {product.variantTable && (
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 lg:px-24">
                        <div className="flex items-center gap-4 mb-16">
                            <Box className="text-aureole-blue" size={18} />
                            <h3 className="text-[11px] font-black font-heading uppercase tracking-[0.4em] text-aureole-slate">Technical Specifications & Models</h3>
                        </div>

                        <div className="overflow-x-auto border-[3px] border-aureole-slate shadow-2xl">
                            <table className="w-full text-left min-w-[800px]">
                                <thead>
                                    <tr className="bg-slate-50 text-aureole-slate border-b border-slate-300">
                                        {product.variantTable.headers.map((header: string, i: number) => (
                                            <th key={i} className={`py-7 px-8 text-[12px] font-black uppercase tracking-[0.2em] ${i < product.variantTable!.headers.length - 1 ? 'border-r border-slate-300' : ''} ${i === 0 ? '' : 'text-center'}`}>
                                                {header}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-300 text-slate-600">
                                    {product.variantTable.rows.map((row: any[], i: number) => (
                                        <tr key={i} className="transition-colors group">
                                            {row.map((cell, j) => {
                                                const isLastCell = j === row.length - 1;
                                                const colSpan = isLastCell && row.length < product.variantTable!.headers.length
                                                    ? product.variantTable!.headers.length - j
                                                    : 1;

                                                return (
                                                    <td
                                                        key={j}
                                                        colSpan={colSpan}
                                                        className={`py-6 px-8 text-[12px] ${j === 0 ? 'font-[900] text-aureole-blue bg-slate-50/50' : 'font-bold text-center'} ${!isLastCell ? 'border-r border-slate-300' : ''} uppercase tracking-tight`}
                                                    >
                                                        {cell}
                                                    </td>
                                                );
                                            })}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-12 p-10 bg-slate-50 border border-slate-100 border-l-[6px] border-aureole-cyan shadow-sm">
                            <p className="text-[12px] text-aureole-slate leading-relaxed font-bold uppercase tracking-widest">
                                <span className="text-aureole-cyan mr-4">REMARK:</span>
                                {product.variantTable.remark || "Available in variable sizes (2 Ltr. to 22 Ltr.)"}
                            </p>
                        </div>
                    </div>
                </section>
            )}

            {/* Complex Multi-level Table */}
            {product.complexTable && (
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 lg:px-24">
                        <div className="flex items-center gap-4 mb-16">
                            <Box className="text-aureole-blue" size={18} />
                            <h3 className="text-[11px] font-black font-heading uppercase tracking-[0.4em] text-aureole-slate">Technical Specifications & Models</h3>
                        </div>

                        <div className="overflow-x-auto border-[3px] border-aureole-slate shadow-2xl">
                            <table className="w-full text-left min-w-[1000px] border-collapse">
                                <tbody className="divide-y divide-slate-300 text-slate-600">
                                    {product.complexTable.rows.map((row: any, i: number) => (
                                        <tr key={i} className="transition-colors group">
                                            {row.cells.map((cell: any, j: number) => (
                                                cell.isHeader ? (
                                                    <th
                                                        key={j}
                                                        colSpan={cell.colSpan || 1}
                                                        rowSpan={cell.rowSpan || 1}
                                                        className={`
                                                            py-6 px-6 text-[11px] uppercase tracking-tight border border-slate-300
                                                            bg-slate-50 font-black text-aureole-slate text-center
                                                        `}
                                                    >
                                                        {cell.content}
                                                    </th>
                                                ) : (
                                                    <td
                                                        key={j}
                                                        colSpan={cell.colSpan || 1}
                                                        rowSpan={cell.rowSpan || 1}
                                                        className={`
                                                            py-6 px-6 text-[11px] uppercase tracking-tight border border-slate-300
                                                            font-bold
                                                            ${cell.align === 'center' ? 'text-center' : cell.align === 'right' ? 'text-right' : 'text-left'}
                                                            ${j === 0 ? 'text-aureole-blue bg-slate-50/30' : ''}
                                                        `}
                                                    >
                                                        {cell.content}
                                                    </td>
                                                )
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {product.complexTable.remark && (
                            <div className="mt-12 p-10 bg-slate-50 border border-slate-100 border-l-[6px] border-aureole-cyan shadow-sm">
                                <p className="text-[12px] text-aureole-slate leading-relaxed font-bold uppercase tracking-widest">
                                    <span className="text-aureole-cyan mr-4">REMARK:</span>
                                    {product.complexTable.remark}
                                </p>
                            </div>
                        )}
                    </div>
                </section>
            )}
        </>
    );
};

export default ProductTables;
