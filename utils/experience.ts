// The founder's years of pharmaceutical engineering experience, counted from the year he started (owner confirmed
// 2026-11-22: 29 years in 2026). It goes up by one every 1 January, so no text needs editing each year.
// Static files (public/content.md) use the token {{FOUNDER_YEARS}}, which scripts/prerender.entry.ts fills in at build time:
// any deploy in the new year updates them.
export const FOUNDER_EXPERIENCE_SINCE = 1997;

export const founderYears = (year: number = new Date().getFullYear()): number => year - FOUNDER_EXPERIENCE_SINCE;
