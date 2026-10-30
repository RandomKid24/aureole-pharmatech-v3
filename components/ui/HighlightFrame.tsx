import React, { useEffect, useRef } from 'react';

// Scrollable frame for any <table>: hover lights up the row and the column under the pointer, click keeps a row lit,
// and columns under an "Interior" / "Exterior" header get a soft tint. Cell data is never touched, only data-* flags
// that the .hl-table rules in index.html style. Works with rowSpan/colSpan headers because it builds its own cell grid.
const HighlightFrame: React.FC<{ className?: string; children: React.ReactNode }> = ({ className = '', children }) => {
    const root = useRef<HTMLDivElement>(null);

    const cells = (): HTMLTableCellElement[] => Array.prototype.slice.call(root.current?.querySelectorAll('th, td') || []);
    const col = (c: HTMLElement) => Number(c.dataset.c);
    const span = (c: HTMLElement) => Number(c.dataset.cs);

    // after every render: index each cell's start column and tag the Interior / Exterior column groups
    useEffect(() => {
        const table = root.current?.querySelector('table');
        if (!table) return;
        const busy: boolean[][] = [];
        (Array.prototype.slice.call(table.rows) as HTMLTableRowElement[]).forEach((tr, r) => {
            busy[r] = busy[r] || [];
            let c = 0;
            (Array.prototype.slice.call(tr.cells) as HTMLTableCellElement[]).forEach(cell => {
                while (busy[r][c]) c++;
                const cs = cell.colSpan || 1, rs = cell.rowSpan || 1;
                cell.dataset.c = String(c);
                cell.dataset.cs = String(cs);
                for (let y = 0; y < rs; y++) for (let x = 0; x < cs; x++) (busy[r + y] = busy[r + y] || [])[c + x] = true;
                c += cs;
            });
        });
        const group: Record<number, string> = {};
        table.querySelectorAll<HTMLTableCellElement>('th').forEach(th => {
            const g = /interior/i.test(th.textContent || '') ? 'in' : /exterior/i.test(th.textContent || '') ? 'out' : '';
            if (g) for (let x = 0; x < span(th); x++) group[col(th) + x] = g;
        });
        table.querySelectorAll<HTMLTableCellElement>('th, td').forEach(cell => {
            const g = group[col(cell)];
            if (g && (span(cell) === 1 || cell.tagName === 'TH')) cell.dataset.grp = g;
            else delete cell.dataset.grp;
        });
    });

    const clear = (attr: string) => root.current?.querySelectorAll(`[data-${attr}]`).forEach(e => e.removeAttribute(`data-${attr}`));

    const onOver = (e: React.MouseEvent) => {
        const cell = (e.target as HTMLElement).closest('td, th') as HTMLTableCellElement | null;
        if (!cell || !root.current?.contains(cell)) return;
        clear('hot'); clear('hotcol');
        const tr = cell.parentElement as HTMLTableRowElement;
        // header rows (all <th>) have no row to light; a data row does
        if (tr.querySelector('td')) tr.setAttribute('data-hot', '');
        if (cell.tagName === 'TD' && col(cell) === 0) return; // label column: light the row only
        const a = col(cell), b = a + span(cell) - 1;
        cells().forEach(c => {
            const cs = col(c), ce = cs + span(c) - 1;
            if (ce < a || cs > b) return;
            if (c.tagName === 'TD' && span(c) > 1) return;
            c.setAttribute('data-hotcol', '');
        });
    };

    const onLeave = () => { clear('hot'); clear('hotcol'); };

    const onClick = (e: React.MouseEvent) => {
        const tr = (e.target as HTMLElement).closest('tr');
        if (!tr || !tr.querySelector('td') || !root.current?.contains(tr)) return;
        const was = tr.hasAttribute('data-pin');
        clear('pin');
        if (!was) tr.setAttribute('data-pin', '');
    };

    return (
        <div ref={root} className={`hl-table overflow-x-auto ${className}`} onMouseOver={onOver} onMouseLeave={onLeave} onClick={onClick}>
            {children}
        </div>
    );
};

export default HighlightFrame;
