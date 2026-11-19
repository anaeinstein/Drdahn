// Turn the measured CSS of the original page into an inline style string.
// Values that equal the site defaults are dropped so the stylesheet (and the
// mobile breakpoints in it) stay in control.
const DEFAULTS: Record<string, string> = {
  'font-size': '20px',
  'line-height': '30px',
  color: 'rgb(74, 74, 74)',
};

export function styleOf(...parts: (Record<string, string> | undefined)[]): string {
  const out: Record<string, string> = {};
  for (const p of parts) if (p) Object.assign(out, p);
  return Object.entries(out)
    .filter(([k, v]) => DEFAULTS[k] !== v)
    .map(([k, v]) => `${k}:${v}`)
    .join(';');
}

export function isHero(tcss: Record<string, string> = {}) {
  return parseFloat(tcss['font-size'] || '0') >= 34;
}
export function isHeroSub(tcss: Record<string, string> = {}) {
  return (tcss['font-family'] || '').includes('Roboto');
}
