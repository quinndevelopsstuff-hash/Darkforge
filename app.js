'use strict';

// ══════════════════════════════════════════════════════════════
// THEME ENGINE — defined first so theme applies before DOM renders
// ══════════════════════════════════════════════════════════════

const THEMES = [
  // ── Dark ────────────────────────────────────────────────────
  { name: 'hacker-terminal', label: 'Hacker Terminal', mode: 'dark', vars: {
    '--bg-primary': '#0a0a0a', '--bg-secondary': '#111111', '--bg-tertiary': '#0d0d0d',
    '--color-primary': '#f59e0b', '--color-secondary': '#84cc16', '--color-danger': '#ef4444',
    '--color-dim': '#6b7280', '--color-text': '#e5e7eb',
    '--border-color': 'rgba(245,158,11,0.3)', '--border-bright': 'rgba(245,158,11,0.7)',
    '--glow': '0 0 8px rgba(245,158,11,0.4)', '--scanline-color': 'rgba(245,158,11,0.03)',
    '--cursor-color': '#f59e0b', '--color-on-primary': '#000000', '--color-on-danger': '#ffffff',
    '--overlay-bg': 'rgba(0,0,0,0.72)', '--scanline-stripe': 'rgba(0,0,0,0.18)',
    '--bg-inset': '#1a1a1a', '--bg-highlight': 'rgba(255,255,255,0.04)',
  }},
  { name: 'synthwave', label: 'Synthwave', mode: 'dark', vars: {
    '--bg-primary': '#0d0010', '--bg-secondary': '#1a0025', '--bg-tertiary': '#100015',
    '--color-primary': '#e879f9', '--color-secondary': '#38bdf8', '--color-danger': '#f472b6',
    '--color-dim': '#7c3aed', '--color-text': '#f0e6ff',
    '--border-color': 'rgba(232,121,249,0.3)', '--border-bright': 'rgba(232,121,249,0.7)',
    '--glow': '0 0 8px rgba(232,121,249,0.4)', '--scanline-color': 'rgba(168,85,247,0.04)',
    '--cursor-color': '#e879f9', '--color-on-primary': '#000000', '--color-on-danger': '#ffffff',
    '--overlay-bg': 'rgba(0,0,0,0.72)', '--scanline-stripe': 'rgba(0,0,0,0.18)',
    '--bg-inset': '#2a0035', '--bg-highlight': 'rgba(255,255,255,0.04)',
  }},
  { name: 'matrix', label: 'Matrix', mode: 'dark', vars: {
    '--bg-primary': '#000a00', '--bg-secondary': '#001400', '--bg-tertiary': '#000d00',
    '--color-primary': '#22c55e', '--color-secondary': '#4ade80', '--color-danger': '#86efac',
    '--color-dim': '#166534', '--color-text': '#dcfce7',
    '--border-color': 'rgba(34,197,94,0.3)', '--border-bright': 'rgba(34,197,94,0.7)',
    '--glow': '0 0 8px rgba(34,197,94,0.4)', '--scanline-color': 'rgba(34,197,94,0.04)',
    '--cursor-color': '#22c55e', '--color-on-primary': '#000000', '--color-on-danger': '#000000',
    '--overlay-bg': 'rgba(0,0,0,0.72)', '--scanline-stripe': 'rgba(0,0,0,0.18)',
    '--bg-inset': '#001a00', '--bg-highlight': 'rgba(255,255,255,0.04)',
  }},
  { name: 'blood-noir', label: 'Blood Noir', mode: 'dark', vars: {
    '--bg-primary': '#0a0000', '--bg-secondary': '#1a0000', '--bg-tertiary': '#0d0000',
    '--color-primary': '#ef4444', '--color-secondary': '#fca5a5', '--color-danger': '#dc2626',
    '--color-dim': '#7f1d1d', '--color-text': '#fee2e2',
    '--border-color': 'rgba(239,68,68,0.3)', '--border-bright': 'rgba(239,68,68,0.7)',
    '--glow': '0 0 8px rgba(239,68,68,0.4)', '--scanline-color': 'rgba(239,68,68,0.04)',
    '--cursor-color': '#ef4444', '--color-on-primary': '#ffffff', '--color-on-danger': '#ffffff',
    '--overlay-bg': 'rgba(0,0,0,0.72)', '--scanline-stripe': 'rgba(0,0,0,0.18)',
    '--bg-inset': '#260000', '--bg-highlight': 'rgba(255,255,255,0.04)',
  }},
  { name: 'arctic', label: 'Arctic', mode: 'dark', vars: {
    '--bg-primary': '#00080f', '--bg-secondary': '#001020', '--bg-tertiary': '#000d18',
    '--color-primary': '#38bdf8', '--color-secondary': '#7dd3fc', '--color-danger': '#f472b6',
    '--color-dim': '#075985', '--color-text': '#e0f2fe',
    '--border-color': 'rgba(56,189,248,0.3)', '--border-bright': 'rgba(56,189,248,0.7)',
    '--glow': '0 0 8px rgba(56,189,248,0.4)', '--scanline-color': 'rgba(56,189,248,0.04)',
    '--cursor-color': '#38bdf8', '--color-on-primary': '#000000', '--color-on-danger': '#ffffff',
    '--overlay-bg': 'rgba(0,0,0,0.72)', '--scanline-stripe': 'rgba(0,0,0,0.18)',
    '--bg-inset': '#001525', '--bg-highlight': 'rgba(255,255,255,0.04)',
  }},
  { name: 'tactical-olive', label: 'Tactical Olive', mode: 'dark', vars: {
    '--bg-primary': '#080b08', '--bg-secondary': '#111408', '--bg-tertiary': '#0a0d08',
    '--color-primary': '#a3a832', '--color-secondary': '#d4d876', '--color-danger': '#cd5c00',
    '--color-dim': '#4a4a1a', '--color-text': '#e8e8c8',
    '--border-color': 'rgba(163,168,50,0.3)', '--border-bright': 'rgba(163,168,50,0.7)',
    '--glow': '0 0 8px rgba(163,168,50,0.4)', '--scanline-color': 'rgba(163,168,50,0.04)',
    '--cursor-color': '#a3a832', '--color-on-primary': '#000000', '--color-on-danger': '#ffffff',
    '--overlay-bg': 'rgba(0,0,0,0.72)', '--scanline-stripe': 'rgba(0,0,0,0.18)',
    '--bg-inset': '#1a1c0a', '--bg-highlight': 'rgba(255,255,255,0.04)',
  }},
  { name: 'clean-minimal-dark', label: 'Clean Minimal Dark', mode: 'dark', vars: {
    '--bg-primary': '#0c0c0e', '--bg-secondary': '#18181b', '--bg-tertiary': '#111113',
    '--color-primary': '#94a3b8', '--color-secondary': '#3b82f6', '--color-danger': '#ef4444',
    '--color-dim': '#52525b', '--color-text': '#e2e8f0',
    '--border-color': 'rgba(148,163,184,0.3)', '--border-bright': 'rgba(148,163,184,0.7)',
    '--glow': '0 0 8px rgba(148,163,184,0.3)', '--scanline-color': 'rgba(148,163,184,0.02)',
    '--cursor-color': '#94a3b8', '--color-on-primary': '#000000', '--color-on-danger': '#ffffff',
    '--overlay-bg': 'rgba(0,0,0,0.72)', '--scanline-stripe': 'rgba(0,0,0,0.18)',
    '--bg-inset': '#222225', '--bg-highlight': 'rgba(255,255,255,0.04)',
  }},
  // ── Light ────────────────────────────────────────────────────
  { name: 'terminal-light', label: 'Terminal Light', mode: 'light', vars: {
    '--bg-primary': '#fffbf0', '--bg-secondary': '#fef3c7', '--bg-tertiary': '#fffdf5',
    '--color-primary': '#d97706', '--color-secondary': '#65a30d', '--color-danger': '#dc2626',
    '--color-dim': '#92400e', '--color-text': '#1c1917',
    '--border-color': 'rgba(217,119,6,0.3)', '--border-bright': 'rgba(217,119,6,0.7)',
    '--glow': '0 0 8px rgba(217,119,6,0.3)', '--scanline-color': 'rgba(217,119,6,0.02)',
    '--cursor-color': '#d97706', '--color-on-primary': '#000000', '--color-on-danger': '#ffffff',
    '--overlay-bg': 'rgba(0,0,0,0.5)', '--scanline-stripe': 'rgba(0,0,0,0.06)',
    '--bg-inset': '#f0e8d0', '--bg-highlight': 'rgba(0,0,0,0.04)',
  }},
  { name: 'synthwave-light', label: 'Synthwave Light', mode: 'light', vars: {
    '--bg-primary': '#f5f0ff', '--bg-secondary': '#ede9fe', '--bg-tertiary': '#faf7ff',
    '--color-primary': '#7c3aed', '--color-secondary': '#0284c7', '--color-danger': '#db2777',
    '--color-dim': '#6d28d9', '--color-text': '#1e1b4b',
    '--border-color': 'rgba(124,58,237,0.3)', '--border-bright': 'rgba(124,58,237,0.7)',
    '--glow': '0 0 8px rgba(124,58,237,0.3)', '--scanline-color': 'rgba(124,58,237,0.02)',
    '--cursor-color': '#7c3aed', '--color-on-primary': '#ffffff', '--color-on-danger': '#ffffff',
    '--overlay-bg': 'rgba(0,0,0,0.5)', '--scanline-stripe': 'rgba(0,0,0,0.06)',
    '--bg-inset': '#dcd5f0', '--bg-highlight': 'rgba(0,0,0,0.04)',
  }},
  { name: 'matrix-light', label: 'Matrix Light', mode: 'light', vars: {
    '--bg-primary': '#f0fff4', '--bg-secondary': '#dcfce7', '--bg-tertiary': '#f7fff9',
    '--color-primary': '#15803d', '--color-secondary': '#16a34a', '--color-danger': '#dc2626',
    '--color-dim': '#166534', '--color-text': '#052e16',
    '--border-color': 'rgba(21,128,61,0.3)', '--border-bright': 'rgba(21,128,61,0.7)',
    '--glow': '0 0 8px rgba(21,128,61,0.3)', '--scanline-color': 'rgba(21,128,61,0.02)',
    '--cursor-color': '#15803d', '--color-on-primary': '#ffffff', '--color-on-danger': '#ffffff',
    '--overlay-bg': 'rgba(0,0,0,0.5)', '--scanline-stripe': 'rgba(0,0,0,0.06)',
    '--bg-inset': '#c8f0d4', '--bg-highlight': 'rgba(0,0,0,0.04)',
  }},
  { name: 'blood-noir-light', label: 'Blood Noir Light', mode: 'light', vars: {
    '--bg-primary': '#fff5f5', '--bg-secondary': '#fee2e2', '--bg-tertiary': '#fff8f8',
    '--color-primary': '#b91c1c', '--color-secondary': '#dc2626', '--color-danger': '#7f1d1d',
    '--color-dim': '#991b1b', '--color-text': '#1c0000',
    '--border-color': 'rgba(185,28,28,0.3)', '--border-bright': 'rgba(185,28,28,0.7)',
    '--glow': '0 0 8px rgba(185,28,28,0.3)', '--scanline-color': 'rgba(185,28,28,0.02)',
    '--cursor-color': '#b91c1c', '--color-on-primary': '#ffffff', '--color-on-danger': '#ffffff',
    '--overlay-bg': 'rgba(0,0,0,0.5)', '--scanline-stripe': 'rgba(0,0,0,0.06)',
    '--bg-inset': '#fcc8c8', '--bg-highlight': 'rgba(0,0,0,0.04)',
  }},
  { name: 'arctic-light', label: 'Arctic Light', mode: 'light', vars: {
    '--bg-primary': '#f0f9ff', '--bg-secondary': '#e0f2fe', '--bg-tertiary': '#f8fcff',
    '--color-primary': '#0369a1', '--color-secondary': '#0ea5e9', '--color-danger': '#dc2626',
    '--color-dim': '#075985', '--color-text': '#0c1a2e',
    '--border-color': 'rgba(3,105,161,0.3)', '--border-bright': 'rgba(3,105,161,0.7)',
    '--glow': '0 0 8px rgba(3,105,161,0.3)', '--scanline-color': 'rgba(3,105,161,0.02)',
    '--cursor-color': '#0369a1', '--color-on-primary': '#ffffff', '--color-on-danger': '#ffffff',
    '--overlay-bg': 'rgba(0,0,0,0.5)', '--scanline-stripe': 'rgba(0,0,0,0.06)',
    '--bg-inset': '#c8e8f8', '--bg-highlight': 'rgba(0,0,0,0.04)',
  }},
  { name: 'tactical-light', label: 'Tactical Light', mode: 'light', vars: {
    '--bg-primary': '#f7f7f0', '--bg-secondary': '#fefce8', '--bg-tertiary': '#fafaff',
    '--color-primary': '#717100', '--color-secondary': '#a16207', '--color-danger': '#854d0e',
    '--color-dim': '#713f12', '--color-text': '#1a1a00',
    '--border-color': 'rgba(113,113,0,0.3)', '--border-bright': 'rgba(113,113,0,0.7)',
    '--glow': '0 0 8px rgba(113,113,0,0.3)', '--scanline-color': 'rgba(113,113,0,0.02)',
    '--cursor-color': '#717100', '--color-on-primary': '#ffffff', '--color-on-danger': '#ffffff',
    '--overlay-bg': 'rgba(0,0,0,0.5)', '--scanline-stripe': 'rgba(0,0,0,0.06)',
    '--bg-inset': '#e8e8d0', '--bg-highlight': 'rgba(0,0,0,0.04)',
  }},
  { name: 'clean-minimal-light', label: 'Clean Minimal Light', mode: 'light', vars: {
    '--bg-primary': '#f8fafc', '--bg-secondary': '#f1f5f9', '--bg-tertiary': '#ffffff',
    '--color-primary': '#475569', '--color-secondary': '#1e40af', '--color-danger': '#dc2626',
    '--color-dim': '#94a3b8', '--color-text': '#0f172a',
    '--border-color': 'rgba(71,85,105,0.3)', '--border-bright': 'rgba(71,85,105,0.7)',
    '--glow': '0 0 8px rgba(71,85,105,0.2)', '--scanline-color': 'rgba(71,85,105,0.01)',
    '--cursor-color': '#475569', '--color-on-primary': '#ffffff', '--color-on-danger': '#ffffff',
    '--overlay-bg': 'rgba(0,0,0,0.5)', '--scanline-stripe': 'rgba(0,0,0,0.06)',
    '--bg-inset': '#e2e8f0', '--bg-highlight': 'rgba(0,0,0,0.04)',
  }},
];

class ThemeEngine {
  constructor() {
    this._mode  = localStorage.getItem('dorkforge_mode')  || 'dark';
    this._theme = localStorage.getItem('dorkforge_theme') || 'hacker-terminal';
    // Apply immediately — before DOM renders — to prevent flash
    this._applyVars(this._theme);
  }

  // ── Internal: set CSS properties only (no transition, no UI update) ──
  _applyVars(themeName) {
    const theme = THEMES.find(t => t.name === themeName);
    if (!theme) return;
    const root = document.documentElement;
    for (const [k, v] of Object.entries(theme.vars)) {
      root.style.setProperty(k, v);
    }
  }

  // ── Public: apply theme with transition + persist + event ──────────
  applyTheme(themeName) {
    const theme = THEMES.find(t => t.name === themeName);
    if (!theme) return;
    document.body?.classList.add('theme-transitioning');
    this._applyVars(themeName);
    this._theme = themeName;
    this._mode  = theme.mode;
    localStorage.setItem('dorkforge_theme', themeName);
    localStorage.setItem('dorkforge_mode',  theme.mode);
    document.dispatchEvent(new CustomEvent('themeChanged', { detail: theme }));
    this._syncUI();
    setTimeout(() => document.body?.classList.remove('theme-transitioning'), 420);
  }

  setMode(mode) {
    this._mode = mode;
    localStorage.setItem('dorkforge_mode', mode);
    const current = THEMES.find(t => t.name === this._theme);
    if (!current || current.mode !== mode) {
      const first = THEMES.find(t => t.mode === mode);
      if (first) this.applyTheme(first.name);
    } else {
      this._syncThemeDropdown();
    }
  }

  getCurrentTheme() {
    return THEMES.find(t => t.name === this._theme) || THEMES[0];
  }

  getThemesByMode(mode) {
    return THEMES.filter(t => t.mode === mode);
  }

  // ── Called in DOMContentLoaded to wire up Settings UI ──────────────
  init() {
    const modeEl  = document.getElementById('setting-mode');
    const themeEl = document.getElementById('setting-theme');
    if (modeEl) {
      modeEl.value = this._mode;
      modeEl.addEventListener('change', () => this.setMode(modeEl.value));
    }
    if (themeEl) {
      this._syncThemeDropdown();
      themeEl.addEventListener('change', () => this.applyTheme(themeEl.value));
    }
    this._syncPreviewStrip();
    document.addEventListener('themeChanged', () => this._syncPreviewStrip());
  }

  _syncUI() {
    const modeEl  = document.getElementById('setting-mode');
    const themeEl = document.getElementById('setting-theme');
    if (modeEl)  modeEl.value = this._mode;
    this._syncThemeDropdown();
    if (themeEl) themeEl.value = this._theme;
    this._syncPreviewStrip();
  }

  _syncThemeDropdown() {
    const themeEl = document.getElementById('setting-theme');
    if (!themeEl) return;
    const list = this.getThemesByMode(this._mode);
    themeEl.innerHTML = list.map(t =>
      `<option value="${t.name}">${t.label}</option>`
    ).join('');
    themeEl.value = this._theme;
  }

  _syncPreviewStrip() {
    const strip = document.getElementById('theme-preview-strip');
    if (!strip) return;
    const t  = this.getCurrentTheme();
    const v  = t.vars;
    const slots = [
      { key: '--bg-primary',      label: 'bg' },
      { key: '--color-primary',   label: 'primary' },
      { key: '--color-secondary', label: 'secondary' },
      { key: '--color-danger',    label: 'danger' },
      { key: '--bg-secondary',    label: 'panel' },
    ];
    strip.innerHTML = slots.map(s => `
      <div class="tdot-wrap">
        <div class="tdot" style="background:${v[s.key]};border-color:${v['--border-color']}"></div>
        <div class="tdot-lbl">${s.label}</div>
      </div>`).join('');
  }
}

// Instantiate at top-level — runs synchronously before DOMContentLoaded
const themeEngine = new ThemeEngine();

// ══════════════════════════════════════════════════════════════
// OPERATORS CONFIG
// key → { label, syntax, engines[], description, placeholder }
// syntax uses {value} as the substitution token
// ══════════════════════════════════════════════════════════════
const OPERATORS = {
  // ── Universal ────────────────────────────────────────────────
  site: {
    label: 'site:',
    syntax: 'site:{value}',
    engines: ['google', 'duckduckgo', 'bing', 'urlscan'],
    description: 'Restrict results to a specific domain',
    placeholder: 'example.com',
  },
  site_exclude: {
    label: '-site:',
    syntax: '-site:{value}',
    engines: ['google', 'duckduckgo', 'bing'],
    description: 'Exclude a specific domain from results',
    placeholder: 'example.com',
  },
  filetype: {
    label: 'filetype:',
    syntax: 'filetype:{value}',
    engines: ['google', 'bing'],
    description: 'Filter by file extension',
    placeholder: 'pdf',
  },
  inurl: {
    label: 'inurl:',
    syntax: 'inurl:{value}',
    engines: ['google', 'duckduckgo', 'bing'],
    description: 'Match term in URL path',
    placeholder: 'admin',
  },
  inurl_exclude: {
    label: '-inurl:',
    syntax: '-inurl:{value}',
    engines: ['google', 'bing'],
    description: 'Exclude results whose URL contains term',
    placeholder: 'login',
  },
  intitle: {
    label: 'intitle:',
    syntax: 'intitle:{value}',
    engines: ['google', 'duckduckgo', 'bing'],
    description: 'Match term in page title',
    placeholder: 'index of',
  },
  intext: {
    label: 'intext:',
    syntax: 'intext:{value}',
    engines: ['google', 'bing'],
    description: 'Match term in page body',
    placeholder: 'password',
  },
  intitle_exclude: {
    label: '-intitle:',
    syntax: '-intitle:{value}',
    engines: ['google', 'bing'],
    description: 'Exclude pages with term in title',
    placeholder: 'login',
  },
  intext_exclude: {
    label: '-intext:',
    syntax: '-intext:{value}',
    engines: ['google', 'bing'],
    description: 'Exclude pages with term in body',
    placeholder: 'cached',
  },
  cache: {
    label: 'cache:',
    syntax: 'cache:{value}',
    engines: ['google'],
    description: "Fetch Google's cached copy of a URL",
    placeholder: 'example.com/page',
  },
  before: {
    label: 'before:',
    syntax: 'before:{value}',
    engines: ['google'],
    description: 'Pages indexed before this date (YYYY-MM-DD)',
    placeholder: '2023-01-01',
  },
  after: {
    label: 'after:',
    syntax: 'after:{value}',
    engines: ['google'],
    description: 'Pages indexed after this date (YYYY-MM-DD)',
    placeholder: '2020-01-01',
  },
  related: {
    label: 'related:',
    syntax: 'related:{value}',
    engines: ['google'],
    description: 'Sites related to the given domain',
    placeholder: 'example.com',
  },
  link: {
    label: 'link:',
    syntax: 'link:{value}',
    engines: ['google', 'bing'],
    description: 'Pages that link to the given URL',
    placeholder: 'example.com',
  },
  OR: {
    label: 'OR',
    syntax: 'OR',
    engines: ['google', 'duckduckgo', 'bing', 'github'],
    description: 'Logical OR between adjacent terms',
    placeholder: '',
  },
  AND: {
    label: 'AND',
    syntax: 'AND',
    engines: ['google', 'bing'],
    description: 'Explicit logical AND (implicit by default)',
    placeholder: '',
  },
  NOT: {
    label: 'NOT',
    syntax: 'NOT {value}',
    engines: ['google', 'bing'],
    description: 'Exclude a specific term from results',
    placeholder: 'term',
  },
  ext: {
    label: 'ext:',
    syntax: 'ext:{value}',
    engines: ['google', 'bing'],
    description: 'File extension alias for filetype:',
    placeholder: 'xlsx',
  },
  exact: {
    label: '"phrase"',
    syntax: '"{value}"',
    engines: ['google', 'duckduckgo', 'bing', 'github', 'pastebin'],
    description: 'Exact phrase match',
    placeholder: 'internal use only',
  },
  // ── Bing-specific ─────────────────────────────────────────────
  ip: {
    label: 'ip:',
    syntax: 'ip:{value}',
    engines: ['bing'],
    description: 'Find pages hosted on this IP address (Bing)',
    placeholder: '93.184.216.34',
  },
  contains: {
    label: 'contains:',
    syntax: 'contains:{value}',
    engines: ['bing'],
    description: 'Pages with links to files of this type (Bing)',
    placeholder: 'pdf',
  },
  language_bing: {
    label: 'language:',
    syntax: 'language:{value}',
    engines: ['bing'],
    description: 'Filter results by page language (Bing)',
    placeholder: 'en',
  },
  // ── Shodan ───────────────────────────────────────────────────
  hostname: {
    label: 'hostname:',
    syntax: 'hostname:{value}',
    engines: ['shodan'],
    description: 'Filter Shodan results by hostname',
    placeholder: 'example.com',
  },
  port: {
    label: 'port:',
    syntax: 'port:{value}',
    engines: ['shodan', 'censys'],
    description: 'Filter by open port number',
    placeholder: '22',
  },
  os: {
    label: 'os:',
    syntax: 'os:{value}',
    engines: ['shodan'],
    description: 'Filter by operating system',
    placeholder: 'Windows',
  },
  org: {
    label: 'org:',
    syntax: 'org:{value}',
    engines: ['shodan', 'censys'],
    description: 'Filter by organization name',
    placeholder: 'Amazon',
  },
  product: {
    label: 'product:',
    syntax: 'product:{value}',
    engines: ['shodan'],
    description: 'Filter by software/product banner',
    placeholder: 'Apache httpd',
  },
  // ── GitHub ───────────────────────────────────────────────────
  filename: {
    label: 'filename:',
    syntax: 'filename:{value}',
    engines: ['github'],
    description: 'Search by exact or partial filename',
    placeholder: '.env',
  },
  path: {
    label: 'path:',
    syntax: 'path:{value}',
    engines: ['github'],
    description: 'Search within a specific file path',
    placeholder: 'src/config',
  },
  repo: {
    label: 'repo:',
    syntax: 'repo:{value}',
    engines: ['github'],
    description: 'Restrict search to a specific repository',
    placeholder: 'owner/repo',
  },
  extension: {
    label: 'extension:',
    syntax: 'extension:{value}',
    engines: ['github'],
    description: 'Filter by file extension (GitHub code search)',
    placeholder: 'py',
  },
  language_gh: {
    label: 'language:',
    syntax: 'language:{value}',
    engines: ['github'],
    description: 'Filter by programming language (GitHub)',
    placeholder: 'python',
  },
  user: {
    label: 'user:',
    syntax: 'user:{value}',
    engines: ['github'],
    description: 'Restrict results to a specific user or org',
    placeholder: 'torvalds',
  },
};

// ══════════════════════════════════════════════════════════════
// ENGINES CONFIG
// url() returns the search URL for a raw query string.
// People-search engines also accept a structured fields object.
// ══════════════════════════════════════════════════════════════
const ENGINES = {
  google: {
    label: 'Google',
    url: (q) => `https://www.google.com/search?q=${encodeURIComponent(q)}`,
  },
  duckduckgo: {
    label: 'DuckDuckGo',
    url: (q) => `https://duckduckgo.com/?q=${encodeURIComponent(q)}`,
  },
  bing: {
    label: 'Bing',
    url: (q) => `https://www.bing.com/search?q=${encodeURIComponent(q)}`,
  },
  shodan: {
    label: 'Shodan',
    url: (q) => `https://www.shodan.io/search?query=${encodeURIComponent(q)}`,
  },
  github: {
    label: 'GitHub',
    url: (q) => `https://github.com/search?q=${encodeURIComponent(q)}&type=code`,
  },
  urlscan: {
    label: 'URLScan',
    url: (q) => `https://urlscan.io/search/#${encodeURIComponent(q)}`,
  },
  archive: {
    label: 'Archive.org',
    // Wildcard timestamp gives all captures of that URL pattern
    url: (q) => `https://web.archive.org/web/*/${q}`,
  },
  censys: {
    label: 'Censys',
    url: (q) => `https://search.censys.io/search?q=${encodeURIComponent(q)}`,
  },
  pastebin: {
    label: 'Pastebin',
    url: (q) => `https://pastebin.com/search?q=${encodeURIComponent(q)}`,
  },
  // People-search engines use structured field objects when in TPS mode
  truepeoplesearch: {
    label: 'TruePeopleSearch',
    specialMode: true,
    url: (q, f = {}) => {
      const base = 'https://www.truepeoplesearch.com';
      if (f.phone) {
        return `${base}/results?phoneno=${encodeURIComponent(f.phone.replace(/\D/g, ''))}`;
      }
      if (f.address) {
        const loc = [f.city, f.state, f.zip].filter(Boolean).join(' ');
        return `${base}/results?addressline=${encodeURIComponent(f.address)}&citystatezip=${encodeURIComponent(loc)}`;
      }
      const name = [f.first, f.last].filter(Boolean).join(' ');
      const loc  = [f.city, f.state, f.zip].filter(Boolean).join(' ');
      if (name) {
        return `${base}/results?name=${encodeURIComponent(name)}&citystatezip=${encodeURIComponent(loc)}`;
      }
      return `${base}/results?name=${encodeURIComponent(q)}`;
    },
  },
  whitepages: {
    label: 'WhitePages',
    url: (q, f = {}) => {
      const base = 'https://www.whitepages.com';
      const name  = [f.first, f.last].filter(Boolean).join(' ');
      const state = (f.state || '').toUpperCase();
      if (name) {
        const slug = encodeURIComponent(name).replace(/%20/g, '+');
        const loc  = [f.city, state].filter(Boolean).join('-');
        return loc
          ? `${base}/name/${slug}/${encodeURIComponent(loc)}`
          : `${base}/name/${slug}`;
      }
      return `${base}/search/FindPerson?name=${encodeURIComponent(q)}`;
    },
  },
  fastpeoplesearch: {
    label: 'FastPeopleSearch',
    url: (q, f = {}) => {
      const base = 'https://www.fastpeoplesearch.com';
      const name = [f.first, f.last].filter(Boolean).join('-').toLowerCase().replace(/\s+/g, '-');
      const loc  = [f.city, f.state].filter(Boolean).join('-').toLowerCase().replace(/\s+/g, '-');
      if (name) {
        return `${base}/name/${encodeURIComponent(name)}${loc ? '_' + encodeURIComponent(loc) : ''}`;
      }
      return `${base}/name/${encodeURIComponent(q)}`;
    },
  },
};

// People-search engine keys — trigger special TPS mode when all checked engines are in this set
const PEOPLE_ENGINES = new Set(['truepeoplesearch', 'whitepages', 'fastpeoplesearch']);

// ══════════════════════════════════════════════════════════════
// HISTORY STORE — localStorage-backed, max 200 entries
// ══════════════════════════════════════════════════════════════
const HistoryStore = {
  _key: 'df_history',

  load() {
    try { return JSON.parse(localStorage.getItem(this._key) || '[]'); }
    catch { return []; }
  },

  save(entries) {
    try { localStorage.setItem(this._key, JSON.stringify(entries)); }
    catch { /* storage full — silently skip */ }
  },

  add(query, engines) {
    const entries = this.load();
    entries.unshift({
      id: Date.now(),
      date: new Date().toISOString(),
      query,
      engines,
    });
    if (entries.length > 200) entries.length = 200;
    this.save(entries);
  },

  remove(id) {
    this.save(this.load().filter(e => e.id !== id));
  },

  clear() { this.save([]); },
};

// ══════════════════════════════════════════════════════════════
// BUILDER CLASS
// ══════════════════════════════════════════════════════════════
class Builder {
  constructor() {
    this.operators = [];  // [{ type: string, value: string }]
    this.tpsFields = {};  // { first, last, city, state, zip, phone, address }
    this._dragIndex = null;
    this._logTimer  = null;

    // DOM refs
    this.elList         = document.getElementById('operator-list');
    this.elEmpty        = document.getElementById('operator-empty-state');
    this.elSelect       = document.getElementById('op-select');
    this.elValue        = document.getElementById('op-value');
    this.elAddBtn       = document.getElementById('btn-add-op');
    this.elAddRow       = document.querySelector('.add-operator-row');
    this.elPreview      = document.getElementById('query-preview');
    this.elCopyBtn      = document.getElementById('btn-copy-query');
    this.elLaunchBtn    = document.getElementById('btn-launch');
    this.elShodanNote   = document.getElementById('shodan-disclaimer');
    this.elBuilderTitle = document.querySelector('.builder-left .section-title');

    this._populateSelect();
    this._injectLaunchLog();
    this._injectTpsForm();
    this._bindEvents();
    this._updatePreview();
  }

  // ── Rebuild <select> from OPERATORS config, grouped ───────────
  _populateSelect() {
    // Classify each operator into display groups
    const groups = [
      { label: 'Universal',  keys: [] },
      { label: 'Bing',       keys: [] },
      { label: 'Shodan',     keys: [] },
      { label: 'GitHub',     keys: [] },
    ];

    const isOnly = (eng, key) => OPERATORS[key].engines.every(e => e === eng);
    const hasAny = (engs, key) => OPERATORS[key].engines.some(e => engs.includes(e));

    for (const key of Object.keys(OPERATORS)) {
      if (isOnly('bing', key)) {
        groups[1].keys.push(key);
      } else if (hasAny(['shodan'], key) && !hasAny(['google', 'duckduckgo', 'bing'], key)) {
        groups[2].keys.push(key);
      } else if (hasAny(['github'], key) && !hasAny(['google', 'duckduckgo', 'bing', 'shodan'], key)) {
        groups[3].keys.push(key);
      } else {
        groups[0].keys.push(key);
      }
    }

    this.elSelect.innerHTML = '';
    for (const { label, keys } of groups) {
      if (!keys.length) continue;
      const og = document.createElement('optgroup');
      og.label = `— ${label} —`;
      for (const key of keys) {
        const o = document.createElement('option');
        o.value = key;
        o.textContent = OPERATORS[key].label;
        og.appendChild(o);
      }
      this.elSelect.appendChild(og);
    }
  }

  // ── Inject launch log div after the launch button ─────────────
  _injectLaunchLog() {
    this.elLaunchLog = document.createElement('div');
    this.elLaunchLog.id = 'launch-log';
    this.elLaunchLog.className = 'launch-log';
    this.elLaunchLog.hidden = true;
    this.elLaunchBtn.insertAdjacentElement('afterend', this.elLaunchLog);
  }

  // ── Inject TPS people-search form after the add-operator row ──
  _injectTpsForm() {
    this.elTpsForm = document.createElement('div');
    this.elTpsForm.id = 'tps-form';
    this.elTpsForm.className = 'tps-form';
    this.elTpsForm.hidden = true;
    this.elTpsForm.innerHTML = `
      <div class="tps-form-header">
        <span class="tps-label">PEOPLE SEARCH MODE</span>
        <span class="tps-hint">Fill name, phone, or address — not all fields required</span>
      </div>
      <div class="tps-fields">
        <input class="tps-input" data-tps="first"   type="text" placeholder="First name"    autocomplete="off" spellcheck="false" />
        <input class="tps-input" data-tps="last"    type="text" placeholder="Last name"     autocomplete="off" spellcheck="false" />
        <input class="tps-input" data-tps="city"    type="text" placeholder="City"          autocomplete="off" spellcheck="false" />
        <input class="tps-input" data-tps="state"   type="text" placeholder="State (abbr)"  autocomplete="off" spellcheck="false" maxlength="2" />
        <input class="tps-input" data-tps="zip"     type="text" placeholder="ZIP"           autocomplete="off" spellcheck="false" maxlength="10" />
        <input class="tps-input" data-tps="phone"   type="text" placeholder="Phone number"  autocomplete="off" spellcheck="false" />
        <input class="tps-input tps-wide" data-tps="address" type="text" placeholder="Street address (overrides name)" autocomplete="off" spellcheck="false" />
      </div>
    `;

    // Insert right before the operator list (inside builder-left)
    this.elAddRow.insertAdjacentElement('afterend', this.elTpsForm);

    this.elTpsForm.querySelectorAll('.tps-input').forEach(input => {
      input.addEventListener('input', () => {
        this.tpsFields[input.dataset.tps] = input.value.trim();
        this._updatePreview();
      });
    });
  }

  // ── Wire all persistent event listeners ───────────────────────
  _bindEvents() {
    this.elAddBtn.addEventListener('click', () => this._handleAdd());
    this.elValue.addEventListener('keydown', e => { if (e.key === 'Enter') this._handleAdd(); });

    // Update value placeholder when operator type changes
    this.elSelect.addEventListener('change', () => {
      const op = OPERATORS[this.elSelect.value];
      this.elValue.placeholder = op?.placeholder || 'value…';
    });

    this.elCopyBtn.addEventListener('click', () => this.copyPreview());
    this.elLaunchBtn.addEventListener('click', () => this.launch());

    // Shodan disclaimer toggle
    document.querySelector('.engine-checkbox[data-engine="shodan"]')
      ?.addEventListener('change', e => {
        this.elShodanNote.hidden = !e.target.checked;
      });

    // All engine checkboxes → detect TPS mode
    document.querySelectorAll('.engine-checkbox').forEach(cb => {
      cb.addEventListener('change', () => {
        this._checkTpsMode();
        this._updatePreview();
      });
    });
  }

  // ── Detect whether only people-search engines are selected ────
  _checkTpsMode() {
    const checked = [...document.querySelectorAll('.engine-checkbox:checked')]
      .map(cb => cb.dataset.engine);
    const tpsOnly = checked.length > 0 && checked.every(e => PEOPLE_ENGINES.has(e));

    this.elAddRow.hidden  = tpsOnly;
    this.elTpsForm.hidden = !tpsOnly;
  }

  _isTpsMode() {
    return !this.elTpsForm.hidden;
  }

  // ── Handle the + ADD button ───────────────────────────────────
  _handleAdd() {
    const type  = this.elSelect.value;
    const value = this.elValue.value.trim();
    const noValueOk = type === 'OR' || type === 'AND';

    if (!noValueOk && !value) {
      this._flashInvalid(this.elValue);
      return;
    }

    this.addOperator(type, value);
    this.elValue.value = '';
    this.elValue.focus();
  }

  // ── Flash input border red on invalid submit ───────────────────
  _flashInvalid(el) {
    el.classList.add('input-error');
    // CSS animation ends and we remove the class (once)
    el.addEventListener('animationend', () => el.classList.remove('input-error'), { once: true });
  }

  // ── PUBLIC: add an operator to the list ───────────────────────
  addOperator(type, value) {
    this.operators.push({ type, value });
    this._renderList();
    this._updatePreview();
  }

  // ── PUBLIC: remove by index ───────────────────────────────────
  removeOperator(index) {
    this.operators.splice(index, 1);
    this._renderList();
    this._updatePreview();
  }

  // ── PUBLIC: move operator from index to index ─────────────────
  reorderOperator(from, to) {
    if (to < 0 || to >= this.operators.length) return;
    const [item] = this.operators.splice(from, 1);
    this.operators.splice(to, 0, item);
    this._renderList();
    this._updatePreview();
  }

  // ── Render operator rows into #operator-list ──────────────────
  _renderList() {
    const count = this.operators.length;

    // Keep the empty-state node alive but detach it first
    if (this.elEmpty.parentNode) this.elEmpty.remove();
    this.elList.innerHTML = '';

    // Section header count
    this.elBuilderTitle.textContent = count
      ? `QUERY BUILDER (${count} operator${count !== 1 ? 's' : ''})`
      : 'QUERY BUILDER';

    if (!count) {
      this.elList.appendChild(this.elEmpty);
      this.elEmpty.hidden = false;
      return;
    }

    this.elEmpty.hidden = true;

    this.operators.forEach((op, i) => {
      const def   = OPERATORS[op.type];
      const label = def ? def.label : op.type;

      const row = document.createElement('div');
      row.className    = 'operator-row';
      row.dataset.index = i;
      row.draggable    = true;

      row.innerHTML = `
        <span class="operator-row-label" title="${def ? _esc(def.description) : ''}">${_esc(label)}</span>
        <span class="operator-row-value">${_esc(op.value || '—')}</span>
        <div class="operator-row-actions">
          <button class="btn btn-sm op-btn-up"           title="Move up"   aria-label="Move up">↑</button>
          <button class="btn btn-sm op-btn-dn"           title="Move down" aria-label="Move down">↓</button>
          <button class="btn btn-sm btn-danger-outline op-btn-rm" title="Remove" aria-label="Remove">×</button>
        </div>
      `;

      row.querySelector('.op-btn-up').addEventListener('click', () => this.reorderOperator(i, i - 1));
      row.querySelector('.op-btn-dn').addEventListener('click', () => this.reorderOperator(i, i + 1));
      row.querySelector('.op-btn-rm').addEventListener('click', () => this.removeOperator(i));

      // HTML5 drag-and-drop reorder
      row.addEventListener('dragstart', e => {
        this._dragIndex = i;
        e.currentTarget.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', String(i));
      });
      row.addEventListener('dragover', e => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        document.querySelectorAll('.operator-row').forEach(r => r.classList.remove('drag-over'));
        if (i !== this._dragIndex) e.currentTarget.classList.add('drag-over');
      });
      row.addEventListener('dragleave', e => {
        e.currentTarget.classList.remove('drag-over');
      });
      row.addEventListener('drop', e => {
        e.preventDefault();
        const from = this._dragIndex;
        this._dragIndex = null;
        if (from !== null && from !== i) this.reorderOperator(from, i);
      });
      row.addEventListener('dragend', () => {
        this._dragIndex = null;
        document.querySelectorAll('.operator-row').forEach(r => {
          r.classList.remove('dragging', 'drag-over');
        });
      });

      this._addSwipeDelete(row, i);
      this.elList.appendChild(row);
    });
  }

  // ── Swipe-left-to-delete on touch devices ─────────────────────
  // Only activates on coarse-pointer (touch) devices; mouse skips.
  _addSwipeDelete(row, i) {
    if (window.matchMedia('(pointer: fine)').matches) return;
    let startX = 0;
    let tracking = false;

    row.addEventListener('touchstart', e => {
      startX = e.touches[0].clientX;
      tracking = true;
      row.style.transition = 'none';
    }, { passive: true });

    row.addEventListener('touchmove', e => {
      if (!tracking) return;
      const dx = e.touches[0].clientX - startX;
      if (dx >= 0) { row.style.transform = ''; return; } // right-swipe: ignore
      const clamped = Math.max(dx, -88);
      row.style.transform = `translateX(${clamped}px)`;
      row.classList.toggle('swipe-delete-ready', clamped <= -60);
    }, { passive: true });

    const _endSwipe = () => {
      tracking = false;
      row.style.transition = '';
      if (row.classList.contains('swipe-delete-ready')) {
        this.removeOperator(i);
      } else {
        row.style.transform = '';
        row.classList.remove('swipe-delete-ready');
      }
    };
    row.addEventListener('touchend',   _endSwipe);
    row.addEventListener('touchcancel', () => {
      tracking = false;
      row.style.transition = '';
      row.style.transform  = '';
      row.classList.remove('swipe-delete-ready');
    });
  }

  // ── PUBLIC: assemble the raw dork query string ─────────────────
  buildQuery() {
    if (this._isTpsMode()) {
      // Render TPS fields as a human-readable preview in the preview box
      const f = this.tpsFields;
      const parts = [];
      if (f.first || f.last) parts.push(`name: ${[f.first, f.last].filter(Boolean).join(' ')}`);
      if (f.city)    parts.push(`city: ${f.city}`);
      if (f.state)   parts.push(`state: ${f.state}`);
      if (f.zip)     parts.push(`zip: ${f.zip}`);
      if (f.phone)   parts.push(`phone: ${f.phone}`);
      if (f.address) parts.push(`address: ${f.address}`);
      return parts.join('   ') || '';
    }

    return this.operators
      .map(op => {
        const def = OPERATORS[op.type];
        if (!def) return _esc(op.value);
        return def.syntax.replace('{value}', op.value);
      })
      .join(' ');
  }

  // ── Write buildQuery() result to the preview box ───────────────
  _updatePreview() {
    const query = this.buildQuery();
    console.log('[DorkForge] _updatePreview:', query || '(empty)');
    if (!query.trim()) {
      this.elPreview.innerHTML = '<span class="preview-placeholder">YOUR DORK WILL APPEAR HERE</span>';
    } else {
      this.elPreview.textContent = query;
    }
    StrengthMeter.update(this.operators);
  }

  // ── PUBLIC: copy preview text to clipboard ────────────────────
  copyPreview() {
    const query = this.buildQuery().trim();
    if (!query) return;

    const done = () => {
      const orig = this.elCopyBtn.textContent;
      this.elCopyBtn.textContent = 'COPIED!';
      setTimeout(() => { this.elCopyBtn.textContent = orig; }, 1500);
    };

    if (navigator.clipboard) {
      navigator.clipboard.writeText(query).then(done).catch(() => this._clipboardFallback(query, done));
    } else {
      this._clipboardFallback(query, done);
    }
  }

  _clipboardFallback(text, cb) {
    const ta = Object.assign(document.createElement('textarea'), {
      value: text,
      style: 'position:fixed;opacity:0',
    });
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); cb(); } catch {}
    ta.remove();
  }

  // ── Get all currently checked engine IDs ──────────────────────
  _getSelectedEngines() {
    return [...document.querySelectorAll('.engine-checkbox:checked')]
      .map(cb => cb.dataset.engine)
      .filter(id => ENGINES[id]);
  }

  // ── PUBLIC: open tabs for each checked engine ─────────────────
  launch() {
    const selected = this._getSelectedEngines();
    const query    = this.buildQuery().trim();
    const tpsMode  = this._isTpsMode();
    const target   = document.getElementById('setting-link-target')?.value || '_blank';

    if (!selected.length) {
      this._showLaunchLog('error', 'No engines selected.');
      return;
    }
    if (!query && !tpsMode) {
      this._showLaunchLog('error', 'Query is empty — add at least one operator.');
      return;
    }

    const opened = [];
    for (const id of selected) {
      const engine = ENGINES[id];
      if (!engine) continue;
      const url = tpsMode ? engine.url(query, this.tpsFields) : engine.url(query);
      window.open(url, target);
      opened.push(engine.label);
    }

    // Persist to history
    if (opened.length) {
      HistoryStore.add(query, selected);
      renderHistory();
    }

    this._showLaunchLog('ok',
      `Opened ${opened.length} tab${opened.length !== 1 ? 's' : ''}: ${opened.join(', ')}`
    );
  }

  // ── Render a timed status line below the launch button ────────
  _showLaunchLog(type, msg) {
    this.elLaunchLog.hidden = false;
    this.elLaunchLog.className = `launch-log launch-log-${type}`;
    this.elLaunchLog.textContent = (type === 'error' ? '✗  ' : '✓  ') + msg;
    clearTimeout(this._logTimer);
    this._logTimer = setTimeout(() => { this.elLaunchLog.hidden = true; }, 6000);
  }

  // ── PUBLIC: clear all operators and TPS fields ────────────────
  reset() {
    this.operators = [];
    this.tpsFields = {};
    this.elTpsForm.querySelectorAll('.tps-input').forEach(el => { el.value = ''; });
    this._renderList();
    this._updatePreview();
  }
}

// ══════════════════════════════════════════════════════════════
// HISTORY RENDERING
// ══════════════════════════════════════════════════════════════
function renderHistory() {
  const entries  = HistoryStore.load();
  const elEmpty  = document.getElementById('history-empty');
  const elWrap   = document.getElementById('history-table-wrap');
  const elTbody  = document.getElementById('history-tbody');

  if (!entries.length) {
    elEmpty.hidden = false;
    elWrap.hidden  = true;
    return;
  }

  elEmpty.hidden = false; // keep empty message hidden via display
  elEmpty.hidden = true;
  elWrap.hidden  = false;

  elTbody.innerHTML = entries.map(e => {
    const d = new Date(e.date);
    const date = isNaN(d) ? '—' : d.toLocaleString('en-US', {
      month: '2-digit', day: '2-digit',
      hour: '2-digit',  minute: '2-digit', hour12: false,
    });
    const engLabels = (e.engines || [])
      .map(id => ENGINES[id]?.label || id)
      .join(', ');

    return `<tr>
      <td class="history-date">${_esc(date)}</td>
      <td class="history-query"><code>${_esc(e.query || '')}</code></td>
      <td class="history-engines">${_esc(engLabels)}</td>
      <td class="history-actions">
        <button class="btn btn-sm" data-action="rerun"  data-id="${e.id}">Re-run</button>
        <button class="btn btn-sm" data-action="edit"   data-id="${e.id}">Edit</button>
        <button class="btn btn-sm btn-danger-outline" data-action="delete" data-id="${e.id}">Delete</button>
      </td>
    </tr>`;
  }).join('');

  elTbody.querySelectorAll('[data-action]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id     = Number(btn.dataset.id);
      const action = btn.dataset.action;
      const entry  = HistoryStore.load().find(e => e.id === id);
      if (!entry) return;

      if (action === 'delete') {
        HistoryStore.remove(id);
        renderHistory();
        return;
      }

      // Edit or Re-run: restore query to builder
      switchTab('builder');
      window.builder.reset();
      _loadQueryString(entry.query || '');

      if (action === 'rerun') {
        // Restore engine selection then fire
        document.querySelectorAll('.engine-checkbox').forEach(cb => {
          cb.checked = (entry.engines || []).includes(cb.dataset.engine);
        });
        window.builder._checkTpsMode();
        window.builder._updatePreview();
        window.builder.launch();
      }
    });
  });
}

// ══════════════════════════════════════════════════════════════
// QUERY PARSER — best-effort parse of a raw dork string back into
// operator rows (used by history Edit/Re-run)
// ══════════════════════════════════════════════════════════════
function _loadQueryString(raw) {
  // Tokenize respecting quoted strings
  const tokens = [];
  const re = /("[^"]*"|[^\s]+)/g;
  let m;
  while ((m = re.exec(raw)) !== null) tokens.push(m[1]);

  // Sort OPERATORS by prefix length descending to avoid partial matches
  const sorted = Object.entries(OPERATORS).sort((a, b) => {
    const pa = a[1].syntax.split('{')[0];
    const pb = b[1].syntax.split('{')[0];
    return pb.length - pa.length;
  });

  for (const token of tokens) {
    if (token === 'OR')  { window.builder.addOperator('OR', '');   continue; }
    if (token === 'AND') { window.builder.addOperator('AND', '');  continue; }

    // Exact phrase "..."
    if (token.startsWith('"') && token.endsWith('"') && token.length > 2) {
      window.builder.addOperator('exact', token.slice(1, -1));
      continue;
    }

    let matched = false;
    for (const [key, def] of sorted) {
      const prefix = def.syntax.split('{')[0];
      if (!prefix) continue;
      if (token.toLowerCase().startsWith(prefix.toLowerCase())) {
        window.builder.addOperator(key, token.slice(prefix.length));
        matched = true;
        break;
      }
    }

    if (!matched) window.builder.addOperator('exact', token);
  }
}

// ══════════════════════════════════════════════════════════════
// TAB SWITCHING
// ══════════════════════════════════════════════════════════════
const TAB_LABELS = {
  builder:   'BUILDER',
  templates: 'TEMPLATES',
  learn:     'LEARN',
  history:   'HISTORY',
  export:    'EXPORT',
  settings:  'SETTINGS',
};

function _closeNav() {
  const menu     = document.getElementById('nav-menu');
  const backdrop = document.getElementById('nav-backdrop');
  const hamburger = document.getElementById('nav-hamburger');
  if (menu)      menu.hidden = true;
  if (backdrop)  backdrop.hidden = true;
  if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
}

function switchTab(name) {
  document.querySelectorAll('.nav-item').forEach(item => {
    const active = item.dataset.tab === name;
    item.classList.toggle('nav-item-active', active);
    item.setAttribute('aria-selected', String(active));
  });
  document.querySelectorAll('.tab-panel').forEach(panel => {
    panel.classList.toggle('panel-active', panel.id === `panel-${name}`);
  });
  const label = TAB_LABELS[name] || name.toUpperCase();
  const el = document.getElementById('topbar-current-text');
  if (el) el.textContent = `> ${label}`;
  _closeNav();
  if (name === 'history') renderHistory();
}

function initTabs() {
  const hamburger = document.getElementById('nav-hamburger');
  const menu      = document.getElementById('nav-menu');
  const backdrop  = document.getElementById('nav-backdrop');

  hamburger?.addEventListener('click', () => {
    const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
    if (isOpen) {
      _closeNav();
    } else {
      if (menu)     menu.hidden = false;
      if (backdrop) backdrop.hidden = false;
      hamburger.setAttribute('aria-expanded', 'true');
    }
  });

  backdrop?.addEventListener('click', _closeNav);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') _closeNav();
  });

  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => switchTab(item.dataset.tab));
  });
}

// ══════════════════════════════════════════════════════════════
// SETTINGS
// ══════════════════════════════════════════════════════════════
function initSettings() {
  // Persist link-target preference
  const elTarget = document.getElementById('setting-link-target');
  if (elTarget) {
    const saved = localStorage.getItem('df_link_target');
    if (saved) elTarget.value = saved;
    elTarget.addEventListener('change', () => {
      localStorage.setItem('df_link_target', elTarget.value);
    });
  }

  // Clear history — bottom-sheet on mobile, native confirm on desktop
  document.getElementById('btn-clear-history')?.addEventListener('click', () => {
    _mobileConfirm('Permanently clear all search history? This cannot be undone.', () => {
      HistoryStore.clear();
      renderHistory();
    });
  });
}

// ══════════════════════════════════════════════════════════════
// EXPORT
// ══════════════════════════════════════════════════════════════
function initExport() {

  // ── Shared helpers ───────────────────────────────────────────
  function _buildShareURL() {
    const q = window.builder?.buildQuery().trim() || '';
    if (!q) return '';
    return `${location.origin}${location.pathname}#q=${encodeURIComponent(q)}`;
  }

  function _confirmButton(el, message, duration) {
    if (!el) return;
    const orig = el.textContent;
    el.textContent = message;
    setTimeout(() => { el.textContent = orig; }, duration);
  }

  function _writeClipboard(text, btn, successMsg) {
    const ok = () => _confirmButton(btn, successMsg, 2000);
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(ok).catch(() => { _fallbackCopy(text); ok(); });
    } else {
      _fallbackCopy(text); ok();
    }
  }

  function _fallbackCopy(text) {
    const ta = Object.assign(document.createElement('textarea'), { value: text, style: 'position:fixed;opacity:0' });
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); } catch {}
    ta.remove();
  }

  // ── 1. QR CODE CARD ─────────────────────────────────────────
  let _qrStale = true;

  function _generateQR() {
    const url       = _buildShareURL();
    const container = document.getElementById('qr-container');
    const noQuery   = document.getElementById('qr-no-query');
    const wrap      = document.getElementById('qr-wrap');
    const regenBtn  = document.getElementById('btn-qr-regen');
    const urlPrev   = document.getElementById('qr-url-preview');
    if (!container) return;

    if (!url) {
      if (noQuery) noQuery.hidden = false;
      if (wrap)    wrap.hidden    = true;
      if (regenBtn) regenBtn.hidden = true;
      return;
    }

    if (noQuery) noQuery.hidden = true;
    if (wrap)    wrap.hidden    = false;
    if (regenBtn) regenBtn.hidden = false;

    const cs         = getComputedStyle(document.documentElement);
    const colorDark  = cs.getPropertyValue('--color-primary').trim() || '#f59e0b';
    const colorLight = cs.getPropertyValue('--bg-primary').trim()    || '#0a0a0a';

    container.innerHTML = '';

    if (typeof QRCode !== 'undefined') {
      new QRCode(container, {
        text: url,
        width: 200,
        height: 200,
        colorDark,
        colorLight,
        correctLevel: QRCode.CorrectLevel.H,
      });
    } else {
      container.innerHTML = '<span style="color:var(--color-dim);font-size:11px;letter-spacing:.06em">QR LIBRARY UNAVAILABLE</span>';
    }

    if (urlPrev) {
      urlPrev.textContent = url.length > 60 ? url.slice(0, 60) + '…' : url;
      urlPrev.title = url;
    }

    _qrStale = false;
    if (regenBtn) regenBtn.textContent = '↻ REGENERATE';
  }

  document.getElementById('btn-qr-regen')?.addEventListener('click', () => {
    _generateQR();
    _confirmButton(document.getElementById('btn-qr-regen'), '✓ UPDATED', 1500);
  });

  // On theme change: regenerate if export tab is open, else mark stale
  document.addEventListener('themeChanged', () => {
    if (document.getElementById('panel-export')?.classList.contains('panel-active')) {
      _generateQR();
    } else {
      _qrStale = true;
    }
  });

  // ── 2. SHARE URL CARD ────────────────────────────────────────
  function _updateShareURLPreview() {
    const preview = document.getElementById('share-url-preview');
    if (!preview) return;
    const url = _buildShareURL();
    if (!url) {
      preview.textContent = 'NO QUERY BUILT YET';
      preview.title = '';
    } else {
      preview.textContent = url.length > 60 ? url.slice(0, 60) + '…' : url;
      preview.title = url;
    }
  }

  document.getElementById('btn-export-url')?.addEventListener('click', () => {
    const q   = window.builder?.buildQuery().trim() || '';
    const url = _buildShareURL();
    if (!url) return;
    const btn = document.getElementById('btn-export-url');
    if (navigator.share && window.matchMedia('(pointer: coarse)').matches) {
      navigator.share({ title: 'DorkForge Query', text: q, url })
        .catch(() => _writeClipboard(url, btn, '✓ COPIED'));
    } else {
      _writeClipboard(url, btn, '✓ COPIED');
    }
  });

  // ── 3. COPY AS TXT CARD ──────────────────────────────────────
  function _updateTxtPreview() {
    const pre = document.getElementById('txt-preview');
    if (!pre) return;
    const history = HistoryStore.load();
    if (!history.length) {
      pre.textContent = 'NO HISTORY TO EXPORT YET';
      return;
    }
    const preview = history.slice(0, 3).map(e => e.query).join('\n');
    pre.textContent = preview + (history.length > 3 ? `\n… and ${history.length - 3} more` : '');
  }

  document.getElementById('btn-export-txt')?.addEventListener('click', () => {
    const current = window.builder?.buildQuery().trim() || '';
    const lines   = [current, ...HistoryStore.load().map(e => e.query)].filter(Boolean);
    _writeClipboard(lines.join('\n'), document.getElementById('btn-export-txt'), '✓ COPIED');
  });

  // ── 4. EXPORT AS JSON CARD ───────────────────────────────────
  function _updateJsonCount() {
    const el  = document.getElementById('json-count');
    const btn = document.getElementById('btn-export-json');
    if (!el) return;
    const count = HistoryStore.load().length;
    if (count === 0) {
      el.textContent = 'Run searches to build your history';
      el.className   = 'ec-big-count ec-count-zero';
      if (btn) btn.disabled = true;
    } else {
      el.textContent = `${count} QUER${count === 1 ? 'Y' : 'IES'} IN HISTORY`;
      el.className   = 'ec-big-count';
      if (btn) btn.disabled = false;
    }
  }

  document.getElementById('btn-export-json')?.addEventListener('click', () => {
    const payload = {
      current:  window.builder?.buildQuery().trim() || '',
      history:  HistoryStore.load(),
      exported: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url  = URL.createObjectURL(blob);
    const a    = Object.assign(document.createElement('a'), { href: url, download: `dorkforge-${Date.now()}.json` });
    a.click();
    URL.revokeObjectURL(url);
    _confirmButton(document.getElementById('btn-export-json'), '✓ DOWNLOADING...', 1000);
  });

  // ── 5. IMPORT JSON CARD ──────────────────────────────────────
  function _showImportFeedback(type, msg) {
    const el = document.getElementById('import-feedback');
    if (!el) return;
    el.className = `import-feedback fb-${type}`;
    el.textContent = msg;
    el.hidden = false;
    setTimeout(() => { el.hidden = true; }, 4000);
  }

  function importJSON(jsonString) {
    try {
      const data = JSON.parse(jsonString);
      if (!data.history && !data.notebooks && !data.templates) throw new Error('No recognized data');

      let imported = 0;
      if (Array.isArray(data.history) && data.history.length) {
        const existing = HistoryStore.load();
        const seen     = new Set(existing.map(e => `${e.date}|${e.query}`));
        const fresh    = data.history.filter(e => !seen.has(`${e.date}|${e.query}`));
        HistoryStore.save([...fresh, ...existing].slice(0, 200));
        renderHistory();
        imported = fresh.length;
      }

      _showImportFeedback('success', `✓ IMPORTED ${imported} ENTR${imported === 1 ? 'Y' : 'IES'} SUCCESSFULLY`);
      _updateJsonCount();
      _updateTxtPreview();
    } catch {
      _showImportFeedback('error', '✗ INVALID JSON — CHECK FILE FORMAT');
    }
  }

  function _readFile(file) {
    const textEl   = document.querySelector('#import-drop-zone .import-dz-text');
    const origText = textEl?.textContent;
    if (textEl) textEl.textContent = 'READING FILE...';
    const reader = new FileReader();
    reader.onload  = e => { importJSON(e.target.result); if (textEl) textEl.textContent = origText; };
    reader.onerror = () => { _showImportFeedback('error', '✗ COULD NOT READ FILE'); if (textEl) textEl.textContent = origText; };
    reader.readAsText(file);
  }

  const dz        = document.getElementById('import-drop-zone');
  const fileInput = document.getElementById('import-file-input');

  dz?.addEventListener('dragover',  e => { e.preventDefault(); dz.classList.add('drag-over'); });
  dz?.addEventListener('dragleave', ()  => dz.classList.remove('drag-over'));
  dz?.addEventListener('drop', e => {
    e.preventDefault();
    dz.classList.remove('drag-over');
    const file = e.dataTransfer?.files[0];
    if (file) _readFile(file);
  });

  fileInput?.addEventListener('change', () => {
    if (fileInput.files[0]) _readFile(fileInput.files[0]);
    fileInput.value = '';
  });

  const pasteToggle = document.getElementById('import-paste-toggle');
  const pasteArea   = document.getElementById('import-paste-area');
  pasteToggle?.addEventListener('click', () => {
    const wasHidden = pasteArea?.hidden;
    if (pasteArea) pasteArea.hidden = !wasHidden;
    if (pasteToggle) pasteToggle.textContent = wasHidden ? 'OR PASTE JSON DIRECTLY ▲' : 'OR PASTE JSON DIRECTLY ▼';
  });

  document.getElementById('btn-import-text')?.addEventListener('click', () => {
    const text = document.getElementById('import-textarea')?.value.trim();
    if (text) importJSON(text);
  });

  // ── Tab activation + Builder change observation ──────────────
  // MutationObserver on query-preview detects Builder operator changes
  const previewEl = document.getElementById('query-preview');
  if (previewEl) {
    new MutationObserver(() => {
      if (!document.getElementById('panel-export')?.classList.contains('panel-active')) return;
      _updateShareURLPreview();
      _updateTxtPreview();
      _updateJsonCount();
      // Mark QR stale if a query exists and QR is already showing
      const regenBtn = document.getElementById('btn-qr-regen');
      if (regenBtn && !regenBtn.hidden && !regenBtn.textContent.includes('•')) {
        _qrStale = true;
        regenBtn.textContent = '↻ REGENERATE •';
      }
    }).observe(previewEl, { childList: true, subtree: true, characterData: true });
  }

  // MutationObserver on panel-export class changes (tab open/close)
  const exportPanel = document.getElementById('panel-export');
  if (exportPanel) {
    new MutationObserver(() => {
      if (!exportPanel.classList.contains('panel-active')) return;
      _updateShareURLPreview();
      _updateTxtPreview();
      _updateJsonCount();
      // Regenerate QR on tab open if stale or never generated
      const container = document.getElementById('qr-container');
      if (_qrStale || !container?.children.length) _generateQR();
      // Empty-state hint
      const hasQuery   = !!(window.builder?.buildQuery().trim());
      const hasHistory = HistoryStore.load().length > 0;
      const hint = document.getElementById('export-hint');
      if (hint) hint.hidden = hasQuery || hasHistory;
    }).observe(exportPanel, { attributes: true, attributeFilter: ['class'] });
  }

  // Go to Builder button
  document.getElementById('btn-goto-builder')?.addEventListener('click', () => switchTab('builder'));

  // Initial render (builder not ready yet, but previews will show correct empty states)
  _updateShareURLPreview();
  _updateTxtPreview();
  _updateJsonCount();
}

// ══════════════════════════════════════════════════════════════
// LEARN TAB — Data + Logic
// ══════════════════════════════════════════════════════════════

const CHEAT_CATS = [
  { title: 'UNIVERSAL OPERATORS', note: 'Work on Google, Bing, and DuckDuckGo', ops: [
    { key:'site',         name:'site:',        desc:'Limits results to a specific domain',         syntax:'site:example.com',            example:'site:reddit.com "password reset"',              engines:['G','B','DDG'],  tip:'Use site:*.example.com to include subdomains' },
    { key:'filetype',     name:'filetype:',    desc:'Finds specific file types',                   syntax:'filetype:pdf',                example:'filetype:xlsx "employee salary"',               engines:['G','B'],        tip:'Common values: pdf, xlsx, docx, csv, txt, xml, json, sql, env, log, conf, bak' },
    { key:'intitle',      name:'intitle:',     desc:'Matches words in the page title',             syntax:'intitle:"exact phrase"',       example:'intitle:"index of /" passwords',                engines:['G','B','DDG'],  tip:'Quotes force exact match in title' },
    { key:null,           name:'allintitle:',  desc:'All words must appear in the page title',     syntax:'allintitle:word1 word2',       example:'allintitle:admin login panel',                  engines:['G'],            tip:'No quotes needed — all words are required' },
    { key:'inurl',        name:'inurl:',       desc:'Matches words in the URL',                    syntax:'inurl:admin',                 example:'inurl:login inurl:php',                         engines:['G','B','DDG'],  tip:'Stack two inurl: operators to match multiple URL segments' },
    { key:null,           name:'allinurl:',    desc:'All words must appear in URL',                syntax:'allinurl:admin login',        example:'allinurl:wp-admin upload',                      engines:['G'],            tip:'Use for finding specific URL patterns' },
    { key:'intext',       name:'intext:',      desc:'Matches text in the page body',               syntax:'intext:"exact phrase"',        example:'intext:"not for distribution"',                 engines:['G','B'],        tip:'Combine with filetype: for targeted docs' },
    { key:null,           name:'allintext:',   desc:'All words must appear in body',               syntax:'allintext:word1 word2',       example:'allintext:username password login',             engines:['G'],            tip:'Good for finding forms with specific fields' },
    { key:'cache',        name:'cache:',       desc:"Shows Google's cached version of a page",    syntax:'cache:example.com',           example:'cache:pastebin.com/abc123',                     engines:['G'],            tip:'Useful for seeing deleted or changed content' },
    { key:'related',      name:'related:',     desc:'Finds similar websites',                      syntax:'related:example.com',         example:'related:github.com',                            engines:['G'],            tip:'Good for finding competitor or similar sites' },
    { key:'link',         name:'link:',        desc:'Finds pages linking to a URL',                syntax:'link:example.com',            example:'link:targetsite.com',                           engines:['G','B'],        tip:'Bing gives better results for this operator' },
    { key:'before',       name:'before:',      desc:'Results published before a date',             syntax:'before:YYYY-MM-DD',           example:'filetype:pdf before:2020-01-01',                engines:['G'],            tip:'Combine with after: to set a date range' },
    { key:'after',        name:'after:',       desc:'Results published after a date',              syntax:'after:YYYY-MM-DD',            example:'site:example.com after:2023-06-01',             engines:['G'],            tip:'Great for finding recent breaches or leaks' },
    { key:'exact',        name:'"quotes"',     desc:'Forces exact phrase match',                   syntax:'"exact phrase here"',         example:'"internal use only" filetype:pdf',              engines:['G','B','DDG'],  tip:'Most powerful operator — use it everywhere' },
    { key:'site_exclude', name:'-exclude',     desc:'Excludes pages or domains containing a term', syntax:'-word or -site:example.com',  example:'site:github.com -site:gist.github.com',         engines:['G','B','DDG'],  tip:'Stack multiple exclusions to refine results' },
    { key:'OR',           name:'OR',           desc:'Matches either term',                         syntax:'term1 OR term2',              example:'filetype:env OR filetype:cfg password',         engines:['G','B','DDG'],  tip:'Use parentheses for complex logic' },
    { key:null,           name:'* wildcard',   desc:'Matches any word in that position',           syntax:'"forgot * password"',         example:'"how to * admin panel"',                        engines:['G'],            tip:'Only works inside quoted phrases' },
  ]},
  { title: 'GOOGLE-SPECIFIC', note: 'These operators only work on Google Search', ops: [
    { key:null,           name:'define:',      desc:'Shows dictionary definition',                 syntax:'define:word',                 example:'define:phishing',                               engines:['G'],            tip:'Quick reference while researching' },
    { key:null,           name:'info:',        desc:'Shows info about a URL',                      syntax:'info:example.com',            example:'info:targetsite.com',                           engines:['G'],            tip:'Shows cached, similar, and linking pages' },
    { key:null,           name:'map:',         desc:'Shows map results for a location',            syntax:'map:location',                example:'map:"data center Chicago"',                     engines:['G'],            tip:'Useful for physical location OSINT' },
  ]},
  { title: 'BING-SPECIFIC', note: 'Operators exclusive to Bing search engine', ops: [
    { key:'ip',           name:'ip:',          desc:'Finds sites hosted on an IP address',         syntax:'ip:1.2.3.4',                  example:'ip:192.168.1.1',                                engines:['B'],            tip:'Find other sites on shared hosting' },
    { key:'contains',     name:'contains:',    desc:'Finds pages linking to file types',           syntax:'contains:pdf',                example:'site:gov.uk contains:xlsx',                     engines:['B'],            tip:'Different from filetype: — finds links TO files' },
    { key:'language_bing',name:'language:',    desc:'Filters by page language',                    syntax:'language:en',                 example:'site:example.com language:fr',                  engines:['B'],            tip:'Use ISO 639-1 language codes' },
  ]},
  { title: 'GITHUB-SPECIFIC', note: 'For GitHub code search — requires GitHub account for full results', ops: [
    { key:'filename',     name:'filename:',    desc:'Searches for specific filenames',             syntax:'filename:.env',               example:'filename:config.php password',                  engines:['GH'],           tip:'Most powerful GitHub operator for secrets' },
    { key:'extension',    name:'extension:',   desc:'Filters by file extension',                   syntax:'extension:py',                example:'extension:env DB_PASSWORD',                     engines:['GH'],           tip:'Alias: ext:' },
    { key:'language_gh',  name:'language:',    desc:'Filters by programming language',             syntax:'language:javascript',         example:'language:python "api_key"',                     engines:['GH'],           tip:'Combine with other operators for precision' },
    { key:'user',         name:'org: / user:', desc:'Searches within an organization or user',     syntax:'org:orgname',                 example:"org:microsoft filename:.env",                   engines:['GH'],           tip:"Find secrets across an entire org's repos" },
    { key:'repo',         name:'repo:',        desc:'Searches within a specific repository',       syntax:'repo:user/reponame',          example:'repo:facebook/react password',                  engines:['GH'],           tip:'Scope searches to one project' },
    { key:'path',         name:'path:',        desc:'Matches file path segments',                  syntax:'path:config/',                example:'path:config/ extension:yml password',           engines:['GH'],           tip:'Great for finding config directories' },
  ]},
  { title: 'SHODAN-SPECIFIC', note: 'For Shodan device search — free searches limited to first 2 results', ops: [
    { key:'hostname',     name:'hostname:',    desc:'Filters by hostname',                         syntax:'hostname:example.com',        example:'hostname:targetsite.com',                       engines:['SH'],           tip:'Free search only — full results need account' },
    { key:'port',         name:'port:',        desc:'Filters by open port number',                 syntax:'port:22',                     example:'port:3389 org:"Company Name"',                  engines:['SH'],           tip:'Free search only' },
    { key:'os',           name:'os:',          desc:'Filters by operating system',                 syntax:'os:"Windows 7"',              example:'os:"Linux" port:22',                            engines:['SH'],           tip:'Free search only' },
    { key:'org',          name:'org:',         desc:'Filters by organization or ISP',              syntax:'org:"Company Name"',          example:'org:"Amazon" port:8080',                        engines:['SH'],           tip:'Free search only' },
    { key:'product',      name:'product:',     desc:'Filters by software or product banner',       syntax:'product:Apache',              example:'product:nginx port:443',                        engines:['SH'],           tip:'Free search only' },
  ]},
];

const METH_CHAPTERS = [
  {
    id: 'ch1', num: '01', title: 'What Is Dorking?',
    content: `
      <h3 class="meth-ch-title">01 — What Is Dorking?</h3>
      <p class="meth-body">Google Dorking (also called Google Hacking) is the practice of using advanced search operators to uncover information that search engines have indexed but that is not meant to be publicly accessible. The technique was popularized by Johnny Long in his book <em>Google Hacking for Penetration Testers</em> and remains one of the most powerful passive reconnaissance methods available.</p>
      <p class="meth-body">Search engines like Google, Bing, and DuckDuckGo crawl and index billions of web pages. In doing so, they inevitably capture sensitive information: exposed configuration files, login portals, database dumps, internal documents, and more. Dorking is simply the art of asking the right questions to surface that data.</p>
      <h4 class="meth-sub-title">Why It Matters</h4>
      <p class="meth-body">Dorking is purely passive — you are querying a search engine, not touching the target directly. This makes it ideal for the early stages of a security assessment or OSINT investigation where you want to gather intelligence without generating logs on the target's infrastructure.</p>
      <ul class="meth-list">
        <li>Identifies exposed sensitive files before attackers do</li>
        <li>Maps the attack surface of an organization without active scanning</li>
        <li>Finds misconfigured services, open directories, and forgotten assets</li>
        <li>Surfaces credentials, API keys, and PII inadvertently published online</li>
        <li>Helps researchers understand what data is publicly available about a target</li>
      </ul>
      <div class="meth-callout">
        <strong>Passive vs Active:</strong> Dorking is a passive technique. You are not sending requests to the target — you are reading what a search engine has already cached. This is an important legal and ethical distinction.
      </div>
      <h4 class="meth-sub-title">A Brief History</h4>
      <p class="meth-body">The GHDB (Google Hacking Database), maintained at exploit-db.com, catalogs thousands of dorks submitted by security researchers. It remains the definitive reference for pre-built dorks targeting specific software, vulnerabilities, and data types. DorkForge lets you build on this tradition with a structured, engine-aware approach.</p>
      <div class="meth-callout meth-callout-warn">
        <strong>Legal Warning:</strong> Accessing systems or data you are not authorized to access — even if discovered via a search engine — is illegal in most jurisdictions. Always obtain written permission before using these techniques in professional engagements.
      </div>
    `
  },
  {
    id: 'ch2', num: '02', title: 'Passive Recon Mindset',
    content: `
      <h3 class="meth-ch-title">02 — Passive Recon Mindset</h3>
      <p class="meth-body">Effective OSINT starts with discipline: gather everything before you touch anything. The passive recon phase is about understanding the target landscape without creating noise. Search engine dorking is the cornerstone of this phase.</p>
      <h4 class="meth-sub-title">The Zero-Footprint Principle</h4>
      <p class="meth-body">Your goal is to collect as much intelligence as possible while leaving zero trace on the target's systems. Every request you send to a target server is logged. Dorking circumvents this entirely — your queries go to Google or Bing, not to the target.</p>
      <ul class="meth-list">
        <li>Use search engines as your proxy — they have already visited the target</li>
        <li>Cache links let you view indexed content without a live request to the server</li>
        <li>Wayback Machine and archive services extend coverage to historical content</li>
        <li>Never click through to a target site during passive recon unless absolutely necessary</li>
      </ul>
      <h4 class="meth-sub-title">Scope Definition</h4>
      <p class="meth-body">Before building any dork, define your scope precisely. Vague scope leads to wasted time and potential scope creep. A well-defined scope answers:</p>
      <ol class="meth-steps">
        <li><span class="meth-step-num">1</span><span>What is the primary domain? (e.g., example.com)</span></li>
        <li><span class="meth-step-num">2</span><span>Are subdomains in scope? If so, which ones?</span></li>
        <li><span class="meth-step-num">3</span><span>Are related domains or acquisitions in scope?</span></li>
        <li><span class="meth-step-num">4</span><span>What data types are you looking for? (creds, PII, config files, admin panels)</span></li>
        <li><span class="meth-step-num">5</span><span>What is the time frame? (recent leaks vs historical exposure)</span></li>
      </ol>
      <div class="meth-callout">
        <strong>Tip:</strong> Always start broad with <code>site:example.com</code> to understand the scope of indexed content, then narrow down with additional operators. The first query tells you how much Google knows about the target.
      </div>
      <h4 class="meth-sub-title">Information Hygiene</h4>
      <p class="meth-body">Document everything you find systematically. Use a spreadsheet or notes tool to log each dork, the results it returned, and any actionable findings. Undocumented findings are lost findings.</p>
      <div class="meth-callout meth-callout-warn">
        <strong>Mindset Warning:</strong> The passive recon phase can be deceptively addictive. Set time limits for each category of research. Rabbit holes consume hours without producing actionable findings.
      </div>
    `
  },
  {
    id: 'ch3', num: '03', title: 'Building Effective Dorks',
    content: `
      <h3 class="meth-ch-title">03 — Building Effective Dorks</h3>
      <p class="meth-body">A poorly constructed dork returns thousands of irrelevant results. An effective dork returns exactly what you need — sometimes just a handful of high-value pages. The difference is operator precision and layering.</p>
      <h4 class="meth-sub-title">The Layering Principle</h4>
      <p class="meth-body">Start with one operator and refine iteratively. Never try to write the perfect dork in one shot — build it layer by layer, checking results at each step.</p>
      <ol class="meth-steps">
        <li><span class="meth-step-num">1</span><span>Start with <code>site:</code> to scope to your target domain</span></li>
        <li><span class="meth-step-num">2</span><span>Add <code>filetype:</code> or <code>inurl:</code> to filter by document type or URL pattern</span></li>
        <li><span class="meth-step-num">3</span><span>Add exact phrases in quotes to target specific content</span></li>
        <li><span class="meth-step-num">4</span><span>Use exclusions (<code>-word</code>) to filter out noise</span></li>
        <li><span class="meth-step-num">5</span><span>Check result count — too many means broaden; too few means loosen one constraint</span></li>
      </ol>
      <h4 class="meth-sub-title">Operator Combinations That Work</h4>
      <p class="meth-body">These combinations consistently produce high-value results in security assessments:</p>
      <ul class="meth-list">
        <li><code>site:target.com filetype:pdf "confidential"</code> — internal documents</li>
        <li><code>site:target.com inurl:admin OR inurl:login</code> — admin panels</li>
        <li><code>site:target.com intitle:"index of"</code> — open directories</li>
        <li><code>site:target.com filetype:env OR filetype:cfg OR filetype:conf</code> — config files</li>
        <li><code>site:target.com intext:"password" filetype:xlsx</code> — credential spreadsheets</li>
        <li><code>site:target.com intitle:"phpMyAdmin" inurl:phpmyadmin</code> — exposed DB admin</li>
      </ul>
      <div class="meth-chips-wrap">
        <span class="meth-chip" data-template="exposed-login">→ Exposed Login Panels</span>
        <span class="meth-chip" data-template="sensitive-files">→ Sensitive Files</span>
        <span class="meth-chip" data-template="open-directories">→ Open Directories</span>
      </div>
      <h4 class="meth-sub-title">Common Mistakes</h4>
      <ul class="meth-list">
        <li>Using too many operators at once — each added operator reduces result count exponentially</li>
        <li>Forgetting to quote multi-word phrases — <code>intitle:index of</code> is different from <code>intitle:"index of"</code></li>
        <li>Ignoring operator support across engines — <code>cache:</code> is Google-only</li>
        <li>Not accounting for operator deprecation — Google has silently dropped support for some operators</li>
        <li>Searching without a hypothesis — always know what you are looking for before you search</li>
      </ul>
      <div class="meth-callout">
        <strong>Pro Tip:</strong> Use the <code>OR</code> operator to cover file extension variations in a single query: <code>site:target.com filetype:env OR filetype:cfg OR filetype:ini "DB_PASSWORD"</code>. This is far more efficient than running three separate queries.
      </div>
    `
  },
  {
    id: 'ch4', num: '04', title: 'Target Profiling',
    content: `
      <h3 class="meth-ch-title">04 — Target Profiling</h3>
      <p class="meth-body">Before writing a single dork, spend time profiling the target. The more you know about the organization's structure, technology stack, and online presence, the more precise your dorks will be.</p>
      <h4 class="meth-sub-title">Domain Mapping</h4>
      <p class="meth-body">Begin by mapping all domains and subdomains associated with your target. Search engines index subdomains separately, and forgotten or unmaintained subdomains are often the richest source of exposed data.</p>
      <ol class="meth-steps">
        <li><span class="meth-step-num">1</span><span>Run <code>site:target.com</code> — note the total result count and top-level structure</span></li>
        <li><span class="meth-step-num">2</span><span>Run <code>site:*.target.com</code> — find indexed subdomains (dev, staging, api, vpn, mail, etc.)</span></li>
        <li><span class="meth-step-num">3</span><span>Cross-reference with certificate transparency logs (crt.sh) for additional subdomain discovery</span></li>
        <li><span class="meth-step-num">4</span><span>Check for acquired companies and their domains — often less well-secured</span></li>
      </ol>
      <h4 class="meth-sub-title">Technology Fingerprinting</h4>
      <p class="meth-body">Knowing the tech stack lets you write targeted dorks for known vulnerabilities and configuration patterns.</p>
      <ul class="meth-list">
        <li>CMS detection: <code>site:target.com inurl:wp-admin</code> (WordPress), <code>inurl:/joomla/</code>, <code>inurl:/drupal/</code></li>
        <li>Framework detection: look for framework-specific error pages, URL patterns, and headers</li>
        <li>Cloud providers: check for S3 bucket URLs, Azure blob storage, GCP storage links</li>
        <li>Third-party services: Jira, Confluence, Jenkins, GitLab — all have distinctive URL patterns</li>
      </ul>
      <div class="meth-callout">
        <strong>Cloud Exposure:</strong> S3 bucket misconfigurations remain one of the most common causes of data breaches. Search for <code>site:s3.amazonaws.com "target"</code> or <code>site:storage.googleapis.com "target"</code> to find associated cloud storage.
      </div>
      <h4 class="meth-sub-title">Personnel Profiling</h4>
      <p class="meth-body">People are often the weakest link. OSINT on personnel can reveal email formats, org structure, and human intelligence that informs phishing and social engineering assessments.</p>
      <ul class="meth-list">
        <li>LinkedIn: identify employees, roles, and technology mentions in profiles</li>
        <li>GitHub: find employee accounts, internal project names, and committed secrets</li>
        <li>Email formats: <code>site:target.com intext:"@target.com"</code> to discover email format</li>
        <li>Job listings: reveal the tech stack, internal tools, and team structure</li>
      </ul>
      <div class="meth-callout meth-callout-warn">
        <strong>Ethics Note:</strong> Personnel profiling must be scoped appropriately in engagement agreements. Collecting personal data on employees may have legal implications under GDPR, CCPA, and other privacy regulations.
      </div>
    `
  },
  {
    id: 'ch5', num: '05', title: 'Finding Sensitive Data',
    content: `
      <h3 class="meth-ch-title">05 — Finding Sensitive Data</h3>
      <p class="meth-body">The most impactful dorks locate data that should never have been indexed: credentials, API keys, internal documents, database exports, and PII. This chapter covers systematic approaches to each category.</p>
      <h4 class="meth-sub-title">Credentials and API Keys</h4>
      <p class="meth-body">Exposed credentials are the holy grail of security assessments. They are disturbingly common and frequently lead to immediate critical findings.</p>
      <ul class="meth-list">
        <li><code>site:github.com "target.com" password OR secret OR api_key</code></li>
        <li><code>site:pastebin.com "target.com" password</code></li>
        <li><code>filetype:env "DB_PASSWORD" OR "API_KEY" OR "SECRET_KEY"</code></li>
        <li><code>site:target.com filetype:xml intext:"password"</code></li>
        <li><code>site:target.com filetype:log intext:"password"</code></li>
      </ul>
      <div class="meth-callout meth-callout-warn">
        <strong>Critical:</strong> If you find real credentials, do not use them. Document the finding and report it immediately through the appropriate channel. Using found credentials — even to "test" them — is unauthorized access.
      </div>
      <h4 class="meth-sub-title">Configuration and Environment Files</h4>
      <p class="meth-body">Configuration files are commonly exposed through misconfigured web servers or version control systems. They often contain database credentials, API keys, and infrastructure details.</p>
      <ul class="meth-list">
        <li><code>site:target.com filetype:env</code> — .env files (Laravel, Django, Node.js apps)</li>
        <li><code>site:target.com filetype:cfg OR filetype:conf OR filetype:ini</code></li>
        <li><code>site:target.com intitle:"index of" ".htpasswd"</code></li>
        <li><code>site:target.com inurl:config filetype:php</code></li>
        <li><code>site:target.com inurl:wp-config.php.bak</code></li>
      </ul>
      <div class="meth-chips-wrap">
        <span class="meth-chip" data-template="env-files">→ Environment Files</span>
        <span class="meth-chip" data-template="config-files">→ Config File Exposure</span>
      </div>
      <h4 class="meth-sub-title">Internal Documents</h4>
      <p class="meth-body">Organizations frequently expose internal documents through public web servers, cloud storage misconfiguration, or accidental publication.</p>
      <ul class="meth-list">
        <li><code>site:target.com filetype:pdf "confidential" OR "internal use only" OR "not for distribution"</code></li>
        <li><code>site:target.com filetype:xlsx "employee" OR "salary" OR "payroll"</code></li>
        <li><code>site:target.com filetype:pptx "Q1" OR "Q2" OR "roadmap" OR "strategy"</code></li>
        <li><code>site:target.com filetype:docx "draft" OR "internal"</code></li>
      </ul>
      <h4 class="meth-sub-title">Open Directories</h4>
      <p class="meth-body">Web servers with directory listing enabled expose their entire file structure. These are goldmines for sensitive data discovery.</p>
      <ul class="meth-list">
        <li><code>site:target.com intitle:"index of /"</code></li>
        <li><code>site:target.com intitle:"directory listing"</code></li>
        <li><code>intitle:"index of" inurl:backup site:target.com</code></li>
        <li><code>intitle:"index of" inurl:logs site:target.com</code></li>
      </ul>
      <div class="meth-callout">
        <strong>Date Filtering:</strong> Use <code>after:YYYY-MM-DD</code> to find recently exposed content — these findings are most likely still live. Use <code>before:</code> to find historical exposures that may have been remediated but still exist in caches.
      </div>
    `
  },
  {
    id: 'ch6', num: '06', title: 'GitHub and Code Search',
    content: `
      <h3 class="meth-ch-title">06 — GitHub and Code Search</h3>
      <p class="meth-body">Source code repositories are one of the richest sources of inadvertently exposed sensitive data. Developers frequently commit secrets, internal URLs, hardcoded credentials, and proprietary logic to public repositories — sometimes briefly, but long enough to be indexed.</p>
      <h4 class="meth-sub-title">Why GitHub Is Critical</h4>
      <ul class="meth-list">
        <li>Git history is permanent — even "deleted" commits can be recovered</li>
        <li>Developers often copy-paste code with embedded credentials from other projects</li>
        <li>CI/CD configuration files frequently contain tokens and deployment secrets</li>
        <li>Internal URLs, IP addresses, and hostnames leak from config files</li>
        <li>Proprietary code accidentally pushed to personal accounts</li>
      </ul>
      <h4 class="meth-sub-title">Essential GitHub Dorks</h4>
      <p class="meth-body">GitHub's code search is separate from regular web search. Use <code>github.com</code> via standard search, or use GitHub's native search for maximum power:</p>
      <ul class="meth-list">
        <li><code>site:github.com "target.com" filename:.env</code></li>
        <li><code>site:github.com "target.com" "api_key" OR "apikey" OR "api_secret"</code></li>
        <li><code>site:github.com org:targetorg filename:.env</code> (GitHub native)</li>
        <li><code>site:github.com "target.com" "password" extension:yml</code></li>
        <li><code>site:github.com "target.com" "BEGIN RSA PRIVATE KEY"</code></li>
        <li><code>site:github.com "AKIA" "target.com"</code> (AWS access key pattern)</li>
      </ul>
      <div class="meth-chips-wrap">
        <span class="meth-chip" data-template="github-secrets">→ GitHub Secret Exposure</span>
        <span class="meth-chip" data-template="github-config">→ GitHub Config Files</span>
      </div>
      <h4 class="meth-sub-title">TruffleHog and GitLeaks</h4>
      <p class="meth-body">For deep repository scanning, dedicated tools are more thorough than search engine dorks. These tools scan git history for entropy patterns that indicate secrets:</p>
      <ul class="meth-list">
        <li><strong>TruffleHog:</strong> Scans for high-entropy strings and known secret patterns across git history</li>
        <li><strong>GitLeaks:</strong> Rule-based secret scanner with SARIF output for CI integration</li>
        <li><strong>GitHub Secret Scanning:</strong> GitHub's built-in feature that alerts on known secret patterns</li>
      </ul>
      <div class="meth-callout">
        <strong>Commit History:</strong> Always check commit history for secrets that were "fixed" in later commits. The secret still exists in git history and is recoverable. Use <code>git log -p</code> or browse commit history on GitHub to review historical diffs.
      </div>
      <h4 class="meth-sub-title">GitLab, Bitbucket, and Self-Hosted</h4>
      <p class="meth-body">Do not limit your search to GitHub. Many organizations use GitLab (often self-hosted) or Bitbucket. Self-hosted GitLab instances are frequently indexed by search engines.</p>
      <ul class="meth-list">
        <li><code>site:gitlab.com "target.com"</code></li>
        <li><code>intitle:"GitLab" site:target.com</code> — find self-hosted instances</li>
        <li><code>site:bitbucket.org "target.com"</code></li>
      </ul>
      <div class="meth-callout meth-callout-warn">
        <strong>Responsible Disclosure:</strong> If you find credentials in a public repository not in your engagement scope, consider responsible disclosure to the organization. Many companies have bug bounty programs that cover this type of finding.
      </div>
    `
  },
  {
    id: 'ch7', num: '07', title: 'Tools and Resources',
    content: `
      <h3 class="meth-ch-title">07 — Tools and Resources</h3>
      <p class="meth-body">DorkForge handles dork construction — but a complete OSINT workflow requires additional tools for data validation, deeper discovery, and reporting. Below is a curated toolkit organized by function.</p>

      <div class="meth-category-header">SEARCH AND DORKING</div>
      <div class="meth-tools-grid">
        <div class="meth-tool-card">
          <a class="meth-tool-name" href="https://www.exploit-db.com/google-hacking-database" target="_blank" rel="noopener">GHDB</a>
          <span class="meth-tool-desc">Google Hacking Database — community-maintained library of proven dorks organized by category</span>
          <span class="meth-badge meth-badge-free">FREE</span>
        </div>
        <div class="meth-tool-card">
          <a class="meth-tool-name" href="https://www.shodan.io" target="_blank" rel="noopener">Shodan</a>
          <span class="meth-tool-desc">Search engine for internet-connected devices, open ports, banners, and services</span>
          <span class="meth-badge meth-badge-freemium">FREEMIUM</span>
        </div>
        <div class="meth-tool-card">
          <a class="meth-tool-name" href="https://search.censys.io" target="_blank" rel="noopener">Censys</a>
          <span class="meth-tool-desc">Internet-wide scanning data — hosts, certificates, and services with powerful query language</span>
          <span class="meth-badge meth-badge-freemium">FREEMIUM</span>
        </div>
        <div class="meth-tool-card">
          <a class="meth-tool-name" href="https://web.archive.org" target="_blank" rel="noopener">Wayback Machine</a>
          <span class="meth-tool-desc">Internet Archive's historical snapshots of websites — find content that has been removed or changed</span>
          <span class="meth-badge meth-badge-free">FREE</span>
        </div>
      </div>

      <div class="meth-category-header">SUBDOMAIN AND DNS</div>
      <div class="meth-tools-grid">
        <div class="meth-tool-card">
          <a class="meth-tool-name" href="https://crt.sh" target="_blank" rel="noopener">crt.sh</a>
          <span class="meth-tool-desc">Certificate transparency log search — find all subdomains that have had SSL certs issued</span>
          <span class="meth-badge meth-badge-free">FREE</span>
        </div>
        <div class="meth-tool-card">
          <a class="meth-tool-name" href="https://dnsdumpster.com" target="_blank" rel="noopener">DNSDumpster</a>
          <span class="meth-tool-desc">DNS recon and research tool — map subdomains, MX records, and host information</span>
          <span class="meth-badge meth-badge-free">FREE</span>
        </div>
        <div class="meth-tool-card">
          <a class="meth-tool-name" href="https://sublist3r.readthedocs.io" target="_blank" rel="noopener">Sublist3r</a>
          <span class="meth-tool-desc">Python tool for enumerating subdomains using multiple search engines and APIs</span>
          <span class="meth-badge meth-badge-free">FREE</span>
        </div>
        <div class="meth-tool-card">
          <a class="meth-tool-name" href="https://github.com/OWASP/Amass" target="_blank" rel="noopener">OWASP Amass</a>
          <span class="meth-tool-desc">In-depth attack surface mapping and asset discovery using multiple passive and active methods</span>
          <span class="meth-badge meth-badge-free">FREE</span>
        </div>
      </div>

      <div class="meth-category-header">SECRET SCANNING</div>
      <div class="meth-tools-grid">
        <div class="meth-tool-card">
          <a class="meth-tool-name" href="https://github.com/trufflesecurity/trufflehog" target="_blank" rel="noopener">TruffleHog</a>
          <span class="meth-tool-desc">Searches git history and file contents for high-entropy strings and known secret patterns</span>
          <span class="meth-badge meth-badge-free">FREE</span>
        </div>
        <div class="meth-tool-card">
          <a class="meth-tool-name" href="https://github.com/gitleaks/gitleaks" target="_blank" rel="noopener">GitLeaks</a>
          <span class="meth-tool-desc">SAST tool for detecting hardcoded secrets in git repositories with SARIF output</span>
          <span class="meth-badge meth-badge-free">FREE</span>
        </div>
        <div class="meth-tool-card">
          <a class="meth-tool-name" href="https://github.com/BishopFox/shhgit" target="_blank" rel="noopener">shhgit</a>
          <span class="meth-tool-desc">Monitors GitHub, GitLab, and Bitbucket in real-time for secrets being committed</span>
          <span class="meth-badge meth-badge-free">FREE</span>
        </div>
      </div>

      <div class="meth-category-header">PEOPLE AND OSINT</div>
      <div class="meth-tools-grid">
        <div class="meth-tool-card">
          <a class="meth-tool-name" href="https://hunter.io" target="_blank" rel="noopener">Hunter.io</a>
          <span class="meth-tool-desc">Find and verify professional email addresses associated with a domain</span>
          <span class="meth-badge meth-badge-freemium">FREEMIUM</span>
        </div>
        <div class="meth-tool-card">
          <a class="meth-tool-name" href="https://haveibeenpwned.com" target="_blank" rel="noopener">HaveIBeenPwned</a>
          <span class="meth-tool-desc">Check if email addresses or domains appear in known data breach dumps</span>
          <span class="meth-badge meth-badge-free">FREE</span>
        </div>
        <div class="meth-tool-card">
          <a class="meth-tool-name" href="https://www.maltego.com" target="_blank" rel="noopener">Maltego</a>
          <span class="meth-tool-desc">Visual link analysis and OSINT platform for mapping relationships between entities</span>
          <span class="meth-badge meth-badge-freemium">FREEMIUM</span>
        </div>
        <div class="meth-tool-card">
          <a class="meth-tool-name" href="https://intelx.io" target="_blank" rel="noopener">Intelligence X</a>
          <span class="meth-tool-desc">Search engine for leaked data, dark web content, and historical data including Pastebin</span>
          <span class="meth-badge meth-badge-freemium">FREEMIUM</span>
        </div>
      </div>

      <div class="meth-category-header">LEARNING AND REFERENCE</div>
      <div class="meth-tools-grid">
        <div class="meth-tool-card">
          <a class="meth-tool-name" href="https://www.exploit-db.com/google-hacking-database" target="_blank" rel="noopener">GHDB Browser</a>
          <span class="meth-tool-desc">Explore thousands of categorized dorks contributed by the security community</span>
          <span class="meth-badge meth-badge-free">FREE</span>
        </div>
        <div class="meth-tool-card">
          <a class="meth-tool-name" href="https://osintframework.com" target="_blank" rel="noopener">OSINT Framework</a>
          <span class="meth-tool-desc">Visual map of OSINT tools organized by data type — comprehensive starting point for any investigation</span>
          <span class="meth-badge meth-badge-free">FREE</span>
        </div>
        <div class="meth-tool-card">
          <a class="meth-tool-name" href="https://inteltechniques.com/tools/" target="_blank" rel="noopener">IntelTechniques</a>
          <span class="meth-tool-desc">OSINT tools and search tools by Michael Bazzell — extensively used by investigators and journalists</span>
          <span class="meth-badge meth-badge-free">FREE</span>
        </div>
      </div>

      <div class="meth-callout">
        <strong>Staying Current:</strong> The OSINT landscape evolves rapidly. Follow researchers like @_JohnHammond, @NahamSec, and the @OsintDojo community for the latest techniques. The SANS Internet Stormcast and Krebs on Security cover emerging threats that often introduce new recon opportunities.
      </div>
    `
  },
];

function initLearn() {

  // ── 1. Sub-nav toggle ────────────────────────────────────────
  document.querySelectorAll('.learn-subnav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.learn-subnav-btn').forEach(b => b.classList.remove('lsnav-active'));
      btn.classList.add('lsnav-active');
      document.querySelectorAll('.learn-section').forEach(s => { s.hidden = true; });
      const sec = document.getElementById('learn-' + btn.dataset.lsec);
      if (sec) sec.hidden = false;
      if (btn.dataset.lsec === 'methodology') _initMethodologyScroll();
    });
  });

  // ── 2. Render cheatsheet ─────────────────────────────────────
  _renderCheatsheet();

  // ── 3. Render methodology ────────────────────────────────────
  _renderMethodology();

  // ────────────────────────────────────────────────────────────
  // Inner functions
  // ────────────────────────────────────────────────────────────

  function _renderCheatsheet() {
    const container = document.getElementById('learn-cheatsheet');
    if (!container) return;

    // All engines we track
    const ALL_ENGINES = ['G', 'B', 'DDG', 'GH', 'SH'];
    const ENGINE_LABELS = { G: 'GOOGLE', B: 'BING', DDG: 'DDG', GH: 'GITHUB', SH: 'SHODAN' };

    // Search bar
    const searchWrap = document.createElement('div');
    searchWrap.className = 'cs-search-wrap';
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.className = 'cs-search';
    searchInput.placeholder = 'SEARCH OPERATORS...';
    searchInput.setAttribute('autocomplete', 'off');
    searchInput.setAttribute('spellcheck', 'false');
    searchWrap.appendChild(searchInput);
    container.appendChild(searchWrap);

    // No-results message
    const noResults = document.createElement('div');
    noResults.className = 'cs-no-results';
    noResults.innerHTML = 'NO OPERATORS MATCH YOUR SEARCH<br><button class="cs-clear-btn">CLEAR SEARCH</button>';
    noResults.querySelector('.cs-clear-btn').addEventListener('click', () => {
      searchInput.value = '';
      searchInput.dispatchEvent(new Event('input'));
      searchInput.focus();
    });
    container.appendChild(noResults);

    // Build category groups
    CHEAT_CATS.forEach(cat => {
      const catEl = document.createElement('div');
      catEl.className = 'cs-category';
      catEl.dataset.cat = cat.title;

      const header = document.createElement('div');
      header.className = 'cs-cat-header';
      header.textContent = cat.title;
      catEl.appendChild(header);

      const note = document.createElement('div');
      note.className = 'cs-cat-note';
      note.textContent = cat.note;
      catEl.appendChild(note);

      const grid = document.createElement('div');
      grid.className = 'cs-grid';

      cat.ops.forEach(op => {
        const card = document.createElement('div');
        card.className = 'lop-card';
        card.dataset.searchText = [op.name, op.desc, op.syntax, op.example, op.tip].join(' ').toLowerCase();

        // Head: name + engine badges
        const head = document.createElement('div');
        head.className = 'lop-card-head';

        const nameEl = document.createElement('div');
        nameEl.className = 'lop-name';
        nameEl.textContent = op.name;
        head.appendChild(nameEl);

        const badges = document.createElement('div');
        badges.className = 'lop-badges';
        ALL_ENGINES.forEach(e => {
          const b = document.createElement('span');
          b.className = 'lop-badge ' + (op.engines.includes(e) ? 'lop-badge-on' : 'lop-badge-off');
          b.textContent = ENGINE_LABELS[e];
          badges.appendChild(b);
        });
        head.appendChild(badges);
        card.appendChild(head);

        // Fields
        const fields = [
          { label: 'DESC',    val: op.desc,    cls: '' },
          { label: 'SYNTAX',  val: op.syntax,  cls: '' },
          { label: 'EXAMPLE', val: op.example, cls: 'lop-example' },
          { label: 'TIP',     val: op.tip,     cls: 'lop-tip' },
        ];
        fields.forEach(f => {
          const row = document.createElement('div');
          row.className = 'lop-field';
          const lbl = document.createElement('span');
          lbl.className = 'lop-label';
          lbl.textContent = f.label;
          const val = document.createElement('span');
          val.className = 'lop-val ' + f.cls;
          val.textContent = f.val;
          row.appendChild(lbl);
          row.appendChild(val);
          card.appendChild(row);
        });

        // Load into builder button (only if op has a key)
        if (op.key) {
          const loadBtn = document.createElement('button');
          loadBtn.className = 'lop-load';
          loadBtn.textContent = '+ LOAD INTO BUILDER';
          loadBtn.addEventListener('click', () => _loadOpIntoBuilder(op.key));
          card.appendChild(loadBtn);
        }

        grid.appendChild(card);
      });

      catEl.appendChild(grid);
      container.appendChild(catEl);
    });

    // ── Search filtering ─────────────────────────────────────
    searchInput.addEventListener('input', () => {
      const q = searchInput.value.trim().toLowerCase();
      let totalVisible = 0;

      container.querySelectorAll('.cs-category').forEach(catEl => {
        const cards = catEl.querySelectorAll('.lop-card');
        let catVisible = 0;

        cards.forEach(card => {
          const text = card.dataset.searchText || '';
          const match = !q || text.includes(q);
          card.style.display = match ? '' : 'none';
          if (match) {
            catVisible++;
            _applyHighlight(card, q);
          } else {
            _clearHighlight(card);
          }
        });

        catEl.style.display = catVisible > 0 ? '' : 'none';
        totalVisible += catVisible;
      });

      noResults.classList.toggle('cs-visible', totalVisible === 0 && q.length > 0);
    });
  }

  function _applyHighlight(card, q) {
    if (!q) { _clearHighlight(card); return; }
    card.querySelectorAll('.lop-val, .lop-name').forEach(el => {
      const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
      const nodes = [];
      let node;
      while ((node = walker.nextNode())) nodes.push(node);
      nodes.forEach(tn => {
        const parent = tn.parentNode;
        if (parent.tagName === 'MARK') return;
        const idx = tn.textContent.toLowerCase().indexOf(q);
        if (idx === -1) return;
        const before = document.createTextNode(tn.textContent.slice(0, idx));
        const mark = document.createElement('mark');
        mark.className = 'cs-highlight';
        mark.textContent = tn.textContent.slice(idx, idx + q.length);
        const after = document.createTextNode(tn.textContent.slice(idx + q.length));
        parent.insertBefore(before, tn);
        parent.insertBefore(mark, tn);
        parent.insertBefore(after, tn);
        parent.removeChild(tn);
      });
    });
  }

  function _clearHighlight(card) {
    card.querySelectorAll('mark.cs-highlight').forEach(mark => {
      const parent = mark.parentNode;
      parent.replaceChild(document.createTextNode(mark.textContent), mark);
      parent.normalize();
    });
  }

  function _renderMethodology() {
    const container = document.getElementById('learn-methodology');
    if (!container) return;

    // Layout wrapper
    const layout = document.createElement('div');
    layout.className = 'meth-layout';

    // Sidebar
    const sidebar = document.createElement('nav');
    sidebar.className = 'meth-sidebar';
    sidebar.setAttribute('aria-label', 'Methodology chapters');

    METH_CHAPTERS.forEach(ch => {
      const item = document.createElement('div');
      item.className = 'meth-ch-item';
      item.dataset.chId = ch.id;
      item.innerHTML = '<span class="meth-ch-num">' + ch.num + '</span><span class="meth-ch-title-sidebar">' + ch.title + '</span>';
      sidebar.appendChild(item);
    });

    // Content wrap (progress bar + scroll area)
    const contentWrap = document.createElement('div');
    contentWrap.className = 'meth-content-wrap';

    // Mobile select
    const selectWrap = document.createElement('div');
    selectWrap.className = 'meth-select-wrap';
    const sel = document.createElement('select');
    sel.className = 'meth-select';
    METH_CHAPTERS.forEach(ch => {
      const opt = document.createElement('option');
      opt.value = ch.id;
      opt.textContent = ch.num + ' — ' + ch.title;
      sel.appendChild(opt);
    });
    selectWrap.appendChild(sel);
    contentWrap.appendChild(selectWrap);

    // Progress bar
    const progressBar = document.createElement('div');
    progressBar.className = 'meth-progress-bar';
    const progressFill = document.createElement('div');
    progressFill.className = 'meth-progress-fill';
    progressFill.id = 'meth-progress-fill';
    progressBar.appendChild(progressFill);
    contentWrap.appendChild(progressBar);

    // Scroll content area
    const content = document.createElement('div');
    content.className = 'meth-content';
    content.id = 'meth-content';

    METH_CHAPTERS.forEach(ch => {
      const section = document.createElement('section');
      section.className = 'meth-chapter';
      section.id = ch.id;
      section.innerHTML = ch.content;
      content.appendChild(section);
    });

    contentWrap.appendChild(content);

    layout.appendChild(sidebar);
    layout.appendChild(contentWrap);
    container.appendChild(layout);

    // ── Wire up template chips ───────────────────────────────
    container.querySelectorAll('.meth-chip[data-template]').forEach(chip => {
      chip.addEventListener('click', () => {
        _openTemplateSearch(chip.dataset.template);
      });
    });

    // ── Sidebar navigation ───────────────────────────────────
    sidebar.querySelectorAll('.meth-ch-item').forEach(item => {
      item.addEventListener('click', () => {
        const target = content.querySelector('#' + item.dataset.chId);
        if (target) {
          content.scrollTo({ top: target.offsetTop - 24, behavior: 'smooth' });
        }
        _setActiveChapter(item.dataset.chId);
      });
    });

    // ── Mobile select navigation ─────────────────────────────
    sel.addEventListener('change', () => {
      const target = content.querySelector('#' + sel.value);
      if (target) {
        content.scrollTo({ top: target.offsetTop - 24, behavior: 'smooth' });
      }
      _setActiveChapter(sel.value);
    });

    // ── IntersectionObserver for active chapter ──────────────
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          _setActiveChapter(entry.target.id);
        }
      });
    }, { root: content, threshold: 0.3 });

    content.querySelectorAll('.meth-chapter').forEach(ch => observer.observe(ch));

    // ── Scroll progress bar ──────────────────────────────────
    content.addEventListener('scroll', () => {
      const fill = document.getElementById('meth-progress-fill');
      if (!fill) return;
      const scrolled = content.scrollTop;
      const total = content.scrollHeight - content.clientHeight;
      const pct = total > 0 ? Math.min(100, (scrolled / total) * 100) : 0;
      fill.style.width = pct + '%';
    });

    function _setActiveChapter(id) {
      sidebar.querySelectorAll('.meth-ch-item').forEach(item => {
        item.classList.toggle('meth-ch-active', item.dataset.chId === id);
      });
      if (sel) sel.value = id;
    }

    // Set first chapter active by default
    if (METH_CHAPTERS.length) _setActiveChapter(METH_CHAPTERS[0].id);
  }

  function _initMethodologyScroll() {
    const content = document.getElementById('meth-content');
    const fill = document.getElementById('meth-progress-fill');
    if (!content || !fill) return;
    const scrolled = content.scrollTop;
    const total = content.scrollHeight - content.clientHeight;
    const pct = total > 0 ? Math.min(100, (scrolled / total) * 100) : 0;
    fill.style.width = pct + '%';
  }

  function _loadOpIntoBuilder(opKey) {
    if (!opKey || !window.builder) return;
    try {
      window.builder.addOperator(opKey, '');
      switchTab('builder');
      const preview = document.getElementById('query-preview');
      if (preview) {
        const orig = preview.style.outline;
        preview.style.outline = '1px solid var(--color-primary)';
        setTimeout(() => { preview.style.outline = orig || ''; }, 600);
      }
    } catch (e) {
      switchTab('builder');
    }
  }

  function _openTemplateSearch(term) {
    switchTab('templates');
    const el = document.getElementById('template-search') || document.querySelector('#panel-templates input[type="text"]');
    if (el) {
      el.value = term;
      el.dispatchEvent(new Event('input'));
    }
  }
}

function _clipboardWrite(text, btnId, flashMsg) {
  const btn  = document.getElementById(btnId);
  const done = () => {
    if (!btn) return;
    const orig = btn.textContent;
    btn.textContent = flashMsg;
    setTimeout(() => { btn.textContent = orig; }, 1500);
  };
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(done).catch(done);
  } else {
    const ta = Object.assign(document.createElement('textarea'), {
      value: text, style: 'position:fixed;opacity:0',
    });
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch {}
    ta.remove();
    done();
  }
}

// ══════════════════════════════════════════════════════════════
// SHARED HELPERS
// ══════════════════════════════════════════════════════════════
function _esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ══════════════════════════════════════════════════════════════
// CATEGORIES CONFIG
// ══════════════════════════════════════════════════════════════
const CATEGORIES = [
  { id: 'auth',       icon: '🔐', label: 'Auth & Login' },
  { id: 'documents',  icon: '📄', label: 'Exposed Documents' },
  { id: 'directories',icon: '🗄️', label: 'Open Directories' },
  { id: 'cameras',    icon: '📷', label: 'Cameras & IoT' },
  { id: 'credentials',icon: '⚙️', label: 'Config & Credentials' },
  { id: 'person',     icon: '🧑', label: 'Person OSINT' },
  { id: 'company',    icon: '🏢', label: 'Company / Org Recon' },
  { id: 'code',       icon: '💻', label: 'Code & Dev Secrets' },
  { id: 'email',      icon: '📧', label: 'Email & Comms' },
  { id: 'database',   icon: '🗃️', label: 'Database & Logs' },
  { id: 'paste',      icon: '📰', label: 'Paste & Leak Sites' },
  { id: 'infra',      icon: '🌐', label: 'Subdomain & Infra' },
  { id: 'social',     icon: '📱', label: 'Social Media OSINT' },
  { id: 'government', icon: '🏛️', label: 'Gov & Public Records' },
  { id: 'people',     icon: '👤', label: 'People Search' },
];

// ══════════════════════════════════════════════════════════════
// TEMPLATES DATA  (96 templates across 15 categories)
// operators[] uses the same {type, value} format as Builder
// ══════════════════════════════════════════════════════════════
const TEMPLATES = [

  // ── AUTH & LOGIN ─────────────────────────────────────────────
  { id: 'auth-login-panels', name: 'Login Panels', category: 'auth',
    engines: ['google','bing'],
    description: 'Exposed login portals indexed by search engines.',
    operators: [
      {type:'intitle',value:'"Login"'}, {type:'inurl',value:'login'},
    ]},
  { id: 'auth-admin-portals', name: 'Admin Portals', category: 'auth',
    engines: ['google','bing'],
    description: 'Admin control panels exposed without authentication.',
    operators: [
      {type:'inurl',value:'admin'}, {type:'intitle',value:'"admin"'},
    ]},
  { id: 'auth-default-creds', name: 'Default Credentials Pages', category: 'auth',
    engines: ['google','bing'],
    description: 'Pages referencing default or factory login credentials.',
    operators: [
      {type:'intitle',value:'"default password"'},{type:'OR',value:''},
      {type:'intitle',value:'"default credentials"'},{type:'OR',value:''},
      {type:'intitle',value:'"factory default"'},
    ]},
  { id: 'auth-password-reset', name: 'Password Reset Pages', category: 'auth',
    engines: ['google','duckduckgo','bing'],
    description: 'Exposed password reset and account recovery flows.',
    operators: [
      {type:'inurl',value:'"forgot-password"'},{type:'OR',value:''},
      {type:'inurl',value:'"reset-password"'},{type:'OR',value:''},
      {type:'inurl',value:'"account-recovery"'},
    ]},
  { id: 'auth-cpanel', name: 'cPanel / Plesk / WHM', category: 'auth',
    engines: ['google','bing'],
    description: 'Web hosting control panels (cPanel, Plesk, WHM) accessible online.',
    operators: [
      {type:'intitle',value:'"cPanel"'},{type:'OR',value:''},
      {type:'intitle',value:'"Plesk"'},{type:'OR',value:''},
      {type:'intitle',value:'"WHM"'},
    ]},
  { id: 'auth-owa', name: 'Outlook Web Access (OWA)', category: 'auth',
    engines: ['google','bing'],
    description: 'Outlook Web App login portals exposed on the public web.',
    operators: [
      {type:'intitle',value:'"Outlook Web App"'},
    ]},
  { id: 'auth-vpn', name: 'VPN Login Pages', category: 'auth',
    engines: ['google','bing'],
    description: 'SSL and Cisco VPN login pages reachable without a corporate tunnel.',
    operators: [
      {type:'intitle',value:'"SSL VPN"'},{type:'OR',value:''},
      {type:'intitle',value:'"Cisco VPN"'},{type:'OR',value:''},
      {type:'intitle',value:'"GlobalProtect"'},
    ]},
  { id: 'auth-phpmyadmin', name: 'phpMyAdmin Panels', category: 'auth',
    engines: ['google','duckduckgo','bing'],
    description: 'Publicly accessible phpMyAdmin database administration panels.',
    operators: [
      {type:'intitle',value:'"phpMyAdmin"'},{type:'inurl',value:'phpmyadmin'},
    ]},

  // ── EXPOSED DOCUMENTS ────────────────────────────────────────
  { id: 'docs-confidential', name: 'Confidential PDFs', category: 'documents',
    engines: ['google','bing'],
    description: 'Indexed PDFs marked confidential or for internal use only.',
    operators: [
      {type:'filetype',value:'pdf'},{type:'exact',value:'confidential'},
      {type:'OR',value:''},{type:'exact',value:'internal use only'},
    ]},
  { id: 'docs-excel-passwords', name: 'Excel Files with Passwords', category: 'documents',
    engines: ['google','bing'],
    description: 'Spreadsheets with password or credential column data.',
    operators: [
      {type:'filetype',value:'xlsx'},{type:'exact',value:'password'},
      {type:'OR',value:''},{type:'exact',value:'credentials'},
    ]},
  { id: 'docs-memos', name: 'Internal Memos', category: 'documents',
    engines: ['google','bing'],
    description: 'Word documents marked as internal memos or restricted distribution.',
    operators: [
      {type:'filetype',value:'doc'},{type:'exact',value:'internal memo'},
      {type:'OR',value:''},{type:'exact',value:'not for distribution'},
    ]},
  { id: 'docs-resumes', name: 'Resumes / CVs', category: 'documents',
    engines: ['google','bing'],
    description: 'Publicly indexed PDF resumes and CVs containing personal data.',
    operators: [
      {type:'filetype',value:'pdf'},{type:'intitle',value:'resume'},
      {type:'OR',value:''},{type:'intitle',value:'CV'},
    ]},
  { id: 'docs-invoices', name: 'Invoice Documents', category: 'documents',
    engines: ['google','bing'],
    description: 'Exposed invoice PDFs that may contain financial or client data.',
    operators: [
      {type:'filetype',value:'pdf'},{type:'intitle',value:'invoice'},
    ]},
  { id: 'docs-network-diagrams', name: 'Network Diagrams', category: 'documents',
    engines: ['google','bing'],
    description: 'PDF network topology and infrastructure diagrams exposed publicly.',
    operators: [
      {type:'filetype',value:'pdf'},{type:'exact',value:'network diagram'},
      {type:'OR',value:''},{type:'exact',value:'topology'},
    ]},
  { id: 'docs-hr', name: 'HR & Salary Documents', category: 'documents',
    engines: ['google','bing'],
    description: 'HR documents containing employee salary or compensation data.',
    operators: [
      {type:'filetype',value:'pdf'},{type:'exact',value:'employee'},
      {type:'exact',value:'salary'},{type:'OR',value:''},
      {type:'exact',value:'compensation'},
    ]},
  { id: 'docs-legal', name: 'Confidential Legal Docs', category: 'documents',
    engines: ['google','bing'],
    description: 'Legal agreements and settlements marked confidential.',
    operators: [
      {type:'filetype',value:'pdf'},{type:'exact',value:'settlement'},
      {type:'OR',value:''},{type:'exact',value:'agreement'},
      {type:'exact',value:'confidential'},
    ]},

  // ── OPEN DIRECTORIES ─────────────────────────────────────────
  { id: 'dir-generic', name: 'Generic Open Directory', category: 'directories',
    engines: ['google','duckduckgo','bing'],
    description: 'Apache/Nginx directory listing pages with no access controls.',
    operators: [
      {type:'intitle',value:'"index of /"'},
    ]},
  { id: 'dir-backups', name: 'Backup Files in Directories', category: 'directories',
    engines: ['google','bing'],
    description: 'Open directories containing backup archives or .bak files.',
    operators: [
      {type:'intitle',value:'"index of"'},{type:'exact',value:'backup'},
      {type:'OR',value:''},{type:'exact',value:'.bak'},
    ]},
  { id: 'dir-passwords', name: 'Password Files in Directories', category: 'directories',
    engines: ['google','bing'],
    description: 'Open directories exposing password or passwd files.',
    operators: [
      {type:'intitle',value:'"index of"'},{type:'exact',value:'password'},
      {type:'OR',value:''},{type:'exact',value:'passwd'},
    ]},
  { id: 'dir-logs', name: 'Log Files in Directories', category: 'directories',
    engines: ['google','bing'],
    description: 'Exposed application and server log files in open directory listings.',
    operators: [
      {type:'intitle',value:'"index of"'},{type:'exact',value:'.log'},
    ]},
  { id: 'dir-configs', name: 'Config Files in Directories', category: 'directories',
    engines: ['google','bing'],
    description: 'Directories exposing .conf, .config, or .cfg configuration files.',
    operators: [
      {type:'intitle',value:'"index of"'},{type:'exact',value:'.conf'},
      {type:'OR',value:''},{type:'exact',value:'.config'},
      {type:'OR',value:''},{type:'exact',value:'.cfg'},
    ]},
  { id: 'dir-databases', name: 'Database Files in Directories', category: 'directories',
    engines: ['google','bing'],
    description: 'Open directories containing .sql or .db database files.',
    operators: [
      {type:'intitle',value:'"index of"'},{type:'exact',value:'.sql'},
      {type:'OR',value:''},{type:'exact',value:'.db'},
    ]},

  // ── CAMERAS & IOT ────────────────────────────────────────────
  { id: 'cam-webcams', name: 'Generic Webcams', category: 'cameras',
    engines: ['google','bing'],
    description: 'Axis and generic network camera live view pages.',
    operators: [
      {type:'inurl',value:'"/view/index.shtml"'},
    ]},
  { id: 'cam-ip-cameras', name: 'IP / Network Cameras', category: 'cameras',
    engines: ['google','bing'],
    description: 'Publicly accessible IP and network camera interfaces.',
    operators: [
      {type:'intitle',value:'"IP Camera"'},{type:'OR',value:''},
      {type:'intitle',value:'"Network Camera"'},
    ]},
  { id: 'cam-hikvision', name: 'Hikvision Cameras', category: 'cameras',
    engines: ['google','bing'],
    description: 'Hikvision DVR/NVR and IP camera web interfaces exposed online.',
    operators: [
      {type:'intitle',value:'"Hikvision"'},
    ]},
  { id: 'cam-routers', name: 'Router Admin Pages', category: 'cameras',
    engines: ['google','bing'],
    description: 'Router management pages accessible from the internet.',
    operators: [
      {type:'intitle',value:'"Router"'},{type:'inurl',value:'admin'},
      {type:'OR',value:''},{type:'inurl',value:'setup'},
    ]},
  { id: 'cam-printers', name: 'Network Printer Admin', category: 'cameras',
    engines: ['google','bing'],
    description: 'Network printer admin pages with no authentication.',
    operators: [
      {type:'intitle',value:'"Printer"'},{type:'inurl',value:'admin'},
    ]},
  { id: 'cam-scada', name: 'SCADA / ICS Interfaces', category: 'cameras',
    engines: ['google','shodan'],
    description: 'Industrial control system and SCADA HMI interfaces exposed online.',
    operators: [
      {type:'intitle',value:'"SCADA"'},{type:'OR',value:''},
      {type:'intitle',value:'"HMI"'},
    ]},

  // ── CONFIG & CREDENTIALS ─────────────────────────────────────
  { id: 'cred-env', name: 'Exposed .env Files', category: 'credentials',
    engines: ['google','bing'],
    description: '.env files containing DB passwords or secret keys indexed publicly.',
    operators: [
      {type:'filetype',value:'env'},{type:'exact',value:'DB_PASSWORD'},
      {type:'OR',value:''},{type:'exact',value:'SECRET_KEY'},
    ]},
  { id: 'cred-wp-config', name: 'wp-config Exposed', category: 'credentials',
    engines: ['google','bing'],
    description: 'WordPress configuration files with database credentials exposed.',
    operators: [
      {type:'inurl',value:'wp-config'},{type:'filetype',value:'php'},
      {type:'OR',value:''},{type:'filetype',value:'txt'},
    ]},
  { id: 'cred-aws-keys', name: 'AWS Access Keys', category: 'credentials',
    engines: ['google','bing'],
    description: 'Exposed files containing AWS access key IDs (AKIA prefix).',
    operators: [
      {type:'filetype',value:'txt'},{type:'exact',value:'AKIA'},
      {type:'OR',value:''},{type:'filetype',value:'env'},
      {type:'exact',value:'AWS_ACCESS'},
    ]},
  { id: 'cred-db-dumps', name: 'Database Dumps', category: 'credentials',
    engines: ['google','bing'],
    description: 'SQL dump files containing INSERT statements with user tables.',
    operators: [
      {type:'filetype',value:'sql'},{type:'exact',value:'INSERT INTO'},
      {type:'exact',value:'users'},
    ]},
  { id: 'cred-ssh-keys', name: 'SSH Private Keys', category: 'credentials',
    engines: ['google','bing'],
    description: 'Exposed PEM or key files containing RSA private keys.',
    operators: [
      {type:'filetype',value:'pem'},{type:'OR',value:''},
      {type:'filetype',value:'key'},{type:'exact',value:'BEGIN RSA PRIVATE KEY'},
    ]},
  { id: 'cred-api-keys-js', name: 'API Keys in JavaScript', category: 'credentials',
    engines: ['google','bing'],
    description: 'JavaScript files with hardcoded API key variables.',
    operators: [
      {type:'filetype',value:'js'},{type:'exact',value:'api_key'},
      {type:'OR',value:''},{type:'exact',value:'apiKey'},
      {type:'OR',value:''},{type:'exact',value:'API_KEY'},
    ]},
  { id: 'cred-docker', name: 'Docker Compose Secrets', category: 'credentials',
    engines: ['google','bing'],
    description: 'Docker Compose files containing hardcoded passwords.',
    operators: [
      {type:'filetype',value:'yml'},{type:'exact',value:'docker-compose'},
      {type:'exact',value:'password'},
    ]},
  { id: 'cred-git-config', name: 'Exposed .git Config', category: 'credentials',
    engines: ['google','duckduckgo','bing'],
    description: 'Publicly accessible .git/config files revealing repository details.',
    operators: [
      {type:'inurl',value:'"/.git/config"'},
    ]},

  // ── PERSON OSINT ─────────────────────────────────────────────
  { id: 'person-name-social', name: 'Name + Social Profiles', category: 'person',
    engines: ['google','duckduckgo'],
    description: 'Find LinkedIn and Facebook profiles for a target name.',
    operators: [
      {type:'site',value:'linkedin.com'},{type:'OR',value:''},
      {type:'site',value:'facebook.com'},
    ]},
  { id: 'person-email-pattern', name: 'Email Pattern Finder', category: 'person',
    engines: ['google','duckduckgo'],
    description: 'Find pages referencing a target name alongside email addresses.',
    operators: [
      {type:'exact',value:'@gmail.com'},{type:'OR',value:''},
      {type:'exact',value:'@yahoo.com'},
    ]},
  { id: 'person-phone', name: 'Phone Lookup', category: 'person',
    engines: ['truepeoplesearch'],
    description: 'Reverse phone number lookup on TruePeopleSearch.',
    operators: [{type:'site',value:'truepeoplesearch.com'}]},
  { id: 'person-address', name: 'Address History', category: 'person',
    engines: ['whitepages'],
    description: 'Search WhitePages for address history tied to a name.',
    operators: [{type:'site',value:'whitepages.com'}]},
  { id: 'person-social-sweep', name: 'Social Profile Sweep', category: 'person',
    engines: ['duckduckgo'],
    description: 'Search for a username across Twitter, Instagram, and Reddit.',
    operators: [
      {type:'site',value:'twitter.com'},{type:'OR',value:''},
      {type:'site',value:'instagram.com'},{type:'OR',value:''},
      {type:'site',value:'reddit.com'},
    ]},
  { id: 'person-voter', name: 'Voter Records', category: 'person',
    engines: ['google','bing'],
    description: 'Publicly accessible voter registration records on .gov domains.',
    operators: [
      {type:'site',value:'.gov'},{type:'exact',value:'voter'},
      {type:'filetype',value:'pdf'},{type:'OR',value:''},
      {type:'filetype',value:'csv'},
    ]},
  { id: 'person-court', name: 'Court Records', category: 'person',
    engines: ['google','duckduckgo'],
    description: 'Search court records on CourtListener and PACER.',
    operators: [
      {type:'site',value:'courtlistener.com'},{type:'OR',value:''},
      {type:'site',value:'pacer.gov'},
    ]},
  { id: 'person-property', name: 'Property Records', category: 'person',
    engines: ['google','duckduckgo'],
    description: 'Search property ownership records via Zillow and county assessors.',
    operators: [
      {type:'site',value:'zillow.com'},{type:'OR',value:''},
      {type:'exact',value:'property records'},{type:'exact',value:'assessor'},
    ]},

  // ── PERSON OSINT — Name + Location ──────────────────────────
  { id: 'pn-name-basic', name: 'Basic Name Search', category: 'person', subcategory: 'name-location',
    engines: ['google','duckduckgo','bing'],
    description: 'Generic search — finds any indexed page mentioning the person in that location.',
    operators: [
      {type:'exact',value:'[FIRSTNAME] [LASTNAME]'},
      {type:'exact',value:'[CITY]'},
      {type:'exact',value:'[STATE]'},
    ]},
  { id: 'pn-name-no-social', name: 'Name + Location (Exclude Social)', category: 'person', subcategory: 'name-location',
    engines: ['google','duckduckgo','bing'],
    description: 'Surfaces non-social results — news, forums, and local directories.',
    operators: [
      {type:'exact',value:'[FIRSTNAME] [LASTNAME]'},
      {type:'exact',value:'[CITY]'},
      {type:'exact',value:'[STATE]'},
      {type:'site_exclude',value:'facebook.com'},
      {type:'site_exclude',value:'linkedin.com'},
      {type:'site_exclude',value:'twitter.com'},
    ]},
  { id: 'pn-name-pdf', name: 'Name in PDF Documents', category: 'person', subcategory: 'name-location',
    engines: ['google','bing'],
    description: 'Court filings, public records, and org docs mentioning the person.',
    operators: [
      {type:'exact',value:'[FIRSTNAME] [LASTNAME]'},
      {type:'exact',value:'[CITY]'},
      {type:'filetype',value:'pdf'},
    ]},
  { id: 'pn-name-spreadsheet', name: 'Name in Spreadsheets / CSVs', category: 'person', subcategory: 'name-location',
    engines: ['google','bing'],
    description: 'Employee lists, donor records, and public salary databases.',
    operators: [
      {type:'exact',value:'[FIRSTNAME] [LASTNAME]'},
      {type:'filetype',value:'xlsx'},
      {type:'OR',value:''},
      {type:'filetype',value:'csv'},
      {type:'OR',value:''},
      {type:'filetype',value:'xls'},
    ]},
  { id: 'pn-name-employer', name: 'Name + Employer', category: 'person', subcategory: 'name-location',
    engines: ['google','duckduckgo','bing'],
    description: 'Finds directory pages, bios, and press mentions tied to employer.',
    operators: [
      {type:'exact',value:'[FIRSTNAME] [LASTNAME]'},
      {type:'exact',value:'[EMPLOYER]'},
      {type:'exact',value:'[CITY]'},
    ]},
  { id: 'pn-name-age', name: 'Name + Age Confirmation', category: 'person', subcategory: 'name-location',
    engines: ['google','duckduckgo','bing'],
    description: 'Narrows results to likely matches by including age.',
    operators: [
      {type:'exact',value:'[FIRSTNAME] [LASTNAME]'},
      {type:'exact',value:'[AGE]'},
      {type:'exact',value:'[CITY]'},
      {type:'exact',value:'[STATE]'},
    ]},

  // ── PERSON OSINT — Phone Numbers ──────────────────────────────
  { id: 'pn-phone-generic', name: 'Phone Number — Generic', category: 'person', subcategory: 'phone',
    engines: ['google','duckduckgo','bing'],
    description: 'Raw phone search — finds any indexed page containing the number.',
    operators: [
      {type:'exact',value:'[PHONE]'},
    ]},
  { id: 'pn-phone-variants', name: 'Phone in Formatted Variants', category: 'person', subcategory: 'phone',
    engines: ['google','duckduckgo','bing'],
    description: 'Searches all three common US phone formats simultaneously. Replace example digits in all three rows.',
    operators: [
      {type:'intext',value:'(555) 123-4567'},
      {type:'OR',value:''},
      {type:'intext',value:'555-123-4567'},
      {type:'OR',value:''},
      {type:'intext',value:'5551234567'},
    ]},
  { id: 'pn-phone-name', name: 'Phone + Name Confirmation', category: 'person', subcategory: 'phone',
    engines: ['google','duckduckgo','bing'],
    description: 'Confirms a phone number belongs to the target person.',
    operators: [
      {type:'exact',value:'[PHONE]'},
      {type:'exact',value:'[FIRSTNAME] [LASTNAME]'},
    ]},
  { id: 'pn-phone-docs', name: 'Phone in Documents', category: 'person', subcategory: 'phone',
    engines: ['google','bing'],
    description: 'Finds phone number in public records, org docs, and exported databases.',
    operators: [
      {type:'exact',value:'[PHONE]'},
      {type:'filetype',value:'pdf'},
      {type:'OR',value:''},
      {type:'filetype',value:'xlsx'},
    ]},
  { id: 'pn-phone-paste', name: 'Phone on Paste / Forum Sites', category: 'person', subcategory: 'phone',
    engines: ['google'],
    description: 'Checks if the number appears in pastes or public forum posts.',
    operators: [
      {type:'exact',value:'[PHONE]'},
      {type:'site',value:'pastebin.com'},
      {type:'OR',value:''},
      {type:'site',value:'reddit.com'},
      {type:'OR',value:''},
      {type:'site',value:'quora.com'},
    ]},

  // ── PERSON OSINT — Email Addresses ────────────────────────────
  { id: 'pn-email-raw', name: 'Email — Raw Search', category: 'person', subcategory: 'email',
    engines: ['google','duckduckgo','bing'],
    description: 'Any indexed page containing the email address.',
    operators: [
      {type:'exact',value:'[EMAIL]'},
    ]},
  { id: 'pn-email-name', name: 'Email + Name Verification', category: 'person', subcategory: 'email',
    engines: ['google','duckduckgo','bing'],
    description: 'Confirms an email address belongs to the target person.',
    operators: [
      {type:'exact',value:'[EMAIL]'},
      {type:'exact',value:'[FIRSTNAME] [LASTNAME]'},
    ]},
  { id: 'pn-email-domain', name: 'Email Domain Pattern', category: 'person', subcategory: 'email',
    engines: ['google','duckduckgo','bing'],
    description: 'Finds work email on employer domain even if exact address is unknown.',
    operators: [
      {type:'exact',value:'@[DOMAIN]'},
      {type:'exact',value:'[FIRSTNAME] [LASTNAME]'},
    ]},
  { id: 'pn-email-paste', name: 'Email in Leaked Data (Paste Sites)', category: 'person', subcategory: 'email',
    engines: ['google'],
    description: 'Checks public paste sites for leaked credential dumps containing the email.',
    operators: [
      {type:'exact',value:'[EMAIL]'},
      {type:'site',value:'pastebin.com'},
      {type:'OR',value:''},
      {type:'site',value:'ghostbin.com'},
    ]},
  { id: 'pn-email-docs', name: 'Email in Documents', category: 'person', subcategory: 'email',
    engines: ['google','bing'],
    description: 'Finds address in exported org lists and public records.',
    operators: [
      {type:'exact',value:'[EMAIL]'},
      {type:'filetype',value:'pdf'},
      {type:'OR',value:''},
      {type:'filetype',value:'xlsx'},
      {type:'OR',value:''},
      {type:'filetype',value:'csv'},
    ]},
  { id: 'pn-username-dev', name: 'Email Username Across Dev Platforms', category: 'person', subcategory: 'email',
    engines: ['google'],
    description: 'Uses email prefix as username — finds dev profiles and forum accounts.',
    operators: [
      {type:'exact',value:'[USERNAME]'},
      {type:'site',value:'github.com'},
      {type:'OR',value:''},
      {type:'site',value:'gitlab.com'},
      {type:'OR',value:''},
      {type:'site',value:'stackoverflow.com'},
    ]},

  // ── PERSON OSINT — Home / Work Addresses ──────────────────────
  { id: 'pn-address-generic', name: 'Address — Generic', category: 'person', subcategory: 'address',
    engines: ['google','duckduckgo','bing'],
    description: 'Finds any indexed page mentioning the full address.',
    operators: [
      {type:'exact',value:'[ADDRESS]'},
      {type:'exact',value:'[CITY]'},
      {type:'exact',value:'[STATE]'},
    ]},
  { id: 'pn-address-records', name: 'Address in Public Records', category: 'person', subcategory: 'address',
    engines: ['google','bing'],
    description: 'Property records, court docs, and permit filings by address.',
    operators: [
      {type:'exact',value:'[ADDRESS]'},
      {type:'exact',value:'[CITY]'},
      {type:'filetype',value:'pdf'},
    ]},
  { id: 'pn-address-name', name: 'Address + Name Confirmation', category: 'person', subcategory: 'address',
    engines: ['google','duckduckgo','bing'],
    description: 'Confirms a person lives or works at the given address.',
    operators: [
      {type:'exact',value:'[FIRSTNAME] [LASTNAME]'},
      {type:'exact',value:'[ADDRESS]'},
      {type:'exact',value:'[CITY]'},
    ]},
  { id: 'pn-address-business', name: 'Business Address Lookup', category: 'person', subcategory: 'address',
    engines: ['google','duckduckgo','bing'],
    description: 'Finds employer address via their own contact or about pages.',
    operators: [
      {type:'exact',value:'[EMPLOYER]'},
      {type:'exact',value:'[CITY]'},
      {type:'exact',value:'[STATE]'},
      {type:'inurl',value:'contact'},
      {type:'OR',value:''},
      {type:'inurl',value:'about'},
      {type:'OR',value:''},
      {type:'inurl',value:'location'},
    ]},
  { id: 'pn-address-neighbors', name: 'Neighbor / Address Range', category: 'person', subcategory: 'address',
    engines: ['google','duckduckgo','bing'],
    description: 'Finds nearby addresses on the same street — useful for mapping associates.',
    operators: [
      {type:'exact',value:'[STREET NAME]'},
      {type:'exact',value:'[CITY]'},
      {type:'exact',value:'[STATE]'},
      {type:'intext_exclude',value:'[ADDRESS]'},
    ]},

  // ── PERSON OSINT — Social Media Profiles ──────────────────────
  { id: 'pn-social-username-major', name: 'Username Sweep — Major Platforms', category: 'person', subcategory: 'social',
    engines: ['google'],
    description: 'Finds username across Twitter, Instagram, TikTok, Reddit, and Facebook.',
    operators: [
      {type:'exact',value:'[USERNAME]'},
      {type:'site',value:'twitter.com'},
      {type:'OR',value:''},
      {type:'site',value:'instagram.com'},
      {type:'OR',value:''},
      {type:'site',value:'tiktok.com'},
      {type:'OR',value:''},
      {type:'site',value:'reddit.com'},
      {type:'OR',value:''},
      {type:'site',value:'facebook.com'},
    ]},
  { id: 'pn-social-username-dev', name: 'Username Sweep — Dev & Professional', category: 'person', subcategory: 'social',
    engines: ['google'],
    description: 'Finds username on GitHub, GitLab, LinkedIn, StackOverflow, and Medium.',
    operators: [
      {type:'exact',value:'[USERNAME]'},
      {type:'site',value:'github.com'},
      {type:'OR',value:''},
      {type:'site',value:'gitlab.com'},
      {type:'OR',value:''},
      {type:'site',value:'linkedin.com'},
      {type:'OR',value:''},
      {type:'site',value:'stackoverflow.com'},
      {type:'OR',value:''},
      {type:'site',value:'medium.com'},
    ]},
  { id: 'pn-social-username-forums', name: 'Username Sweep — Forums & Misc', category: 'person', subcategory: 'social',
    engines: ['google'],
    description: 'Finds username on Reddit, Quora, Disqus, and WordPress.',
    operators: [
      {type:'exact',value:'[USERNAME]'},
      {type:'site',value:'reddit.com'},
      {type:'OR',value:''},
      {type:'site',value:'quora.com'},
      {type:'OR',value:''},
      {type:'site',value:'disqus.com'},
      {type:'OR',value:''},
      {type:'site',value:'wordpress.com'},
    ]},
  { id: 'pn-social-linkedin', name: 'Full Name on LinkedIn', category: 'person', subcategory: 'social',
    engines: ['google','bing'],
    description: 'Finds LinkedIn profile pages for the target name.',
    operators: [
      {type:'intitle',value:'[FIRSTNAME] [LASTNAME]'},
      {type:'site',value:'linkedin.com/in'},
    ]},
  { id: 'pn-social-facebook', name: 'Full Name on Facebook', category: 'person', subcategory: 'social',
    engines: ['google','bing'],
    description: 'Finds Facebook profile and group pages by full name.',
    operators: [
      {type:'intitle',value:'[FIRSTNAME] [LASTNAME]'},
      {type:'site',value:'facebook.com'},
    ]},
  { id: 'pn-social-twitter', name: 'Full Name on Twitter / X', category: 'person', subcategory: 'social',
    engines: ['google','bing'],
    description: 'Finds Twitter and X profile pages for the target name.',
    operators: [
      {type:'exact',value:'[FIRSTNAME] [LASTNAME]'},
      {type:'site',value:'twitter.com'},
      {type:'OR',value:''},
      {type:'site',value:'x.com'},
    ]},
  { id: 'pn-social-cached', name: 'Cached / Deleted Social Profiles', category: 'person', subcategory: 'social',
    engines: ['google'],
    description: "Fetches Google's cached copy of social profiles — useful for deleted accounts.",
    operators: [
      {type:'cache',value:'twitter.com/[USERNAME]'},
      {type:'OR',value:''},
      {type:'cache',value:'instagram.com/[USERNAME]'},
    ]},
  { id: 'pn-social-niche', name: 'Name on Niche Community Platforms', category: 'person', subcategory: 'social',
    engines: ['google'],
    description: 'Finds name on Meetup, Nextdoor, and Alignable community platforms.',
    operators: [
      {type:'exact',value:'[FIRSTNAME] [LASTNAME]'},
      {type:'exact',value:'[CITY]'},
      {type:'site',value:'meetup.com'},
      {type:'OR',value:''},
      {type:'site',value:'nextdoor.com'},
      {type:'OR',value:''},
      {type:'site',value:'alignable.com'},
    ]},

  // ── PERSON OSINT — Family Members & Associates ────────────────
  { id: 'pn-assoc-family', name: 'Family Name Cluster', category: 'person', subcategory: 'associates',
    engines: ['google','duckduckgo','bing'],
    description: 'Finds pages listing multiple people with the same last name and location.',
    operators: [
      {type:'exact',value:'[LASTNAME]'},
      {type:'exact',value:'[CITY]'},
      {type:'exact',value:'[STATE]'},
      {type:'exact',value:'[FIRSTNAME]'},
    ]},
  { id: 'pn-assoc-obituary', name: 'Obituary / Family Mention', category: 'person', subcategory: 'associates',
    engines: ['google','duckduckgo','bing'],
    description: 'Obituaries often list surviving family members — surfaces spouse and children.',
    operators: [
      {type:'exact',value:'[FIRSTNAME] [LASTNAME]'},
      {type:'exact',value:'[CITY]'},
      {type:'intitle',value:'obituary'},
      {type:'OR',value:''},
      {type:'intext',value:'obituary'},
    ]},
  { id: 'pn-assoc-wedding', name: 'Wedding / Engagement Announcements', category: 'person', subcategory: 'associates',
    engines: ['google','duckduckgo','bing'],
    description: 'Surfaces spouse names and family details from wedding and engagement notices.',
    operators: [
      {type:'exact',value:'[FIRSTNAME] [LASTNAME]'},
      {type:'exact',value:'[CITY]'},
      {type:'intitle',value:'wedding'},
      {type:'OR',value:''},
      {type:'intitle',value:'engagement'},
      {type:'OR',value:''},
      {type:'intext',value:'married'},
    ]},
  { id: 'pn-assoc-forum', name: 'Forum Mentions of Associates', category: 'person', subcategory: 'associates',
    engines: ['google','duckduckgo','bing'],
    description: 'Finds forum posts mentioning the target alongside relationship keywords.',
    operators: [
      {type:'exact',value:'[FIRSTNAME] [LASTNAME]'},
      {type:'exact',value:'[CITY]'},
      {type:'intext',value:'friend'},
      {type:'OR',value:''},
      {type:'intext',value:'brother'},
      {type:'OR',value:''},
      {type:'intext',value:'sister'},
      {type:'OR',value:''},
      {type:'intext',value:'partner'},
    ]},

  // ── PERSON OSINT — Employment History ─────────────────────────
  { id: 'pn-employ-current', name: 'Current Employer Confirmation', category: 'person', subcategory: 'employment',
    engines: ['google','duckduckgo','bing'],
    description: 'Finds bio and team pages listing the person at their employer.',
    operators: [
      {type:'exact',value:'[FIRSTNAME] [LASTNAME]'},
      {type:'exact',value:'[EMPLOYER]'},
      {type:'inurl',value:'about'},
      {type:'OR',value:''},
      {type:'inurl',value:'team'},
      {type:'OR',value:''},
      {type:'inurl',value:'staff'},
      {type:'OR',value:''},
      {type:'inurl',value:'bio'},
    ]},
  { id: 'pn-employ-linkedin', name: 'Past Employers via LinkedIn Cache', category: 'person', subcategory: 'employment',
    engines: ['google','bing'],
    description: 'LinkedIn profiles list full work history — indexed in page titles and meta.',
    operators: [
      {type:'intitle',value:'[FIRSTNAME] [LASTNAME]'},
      {type:'site',value:'linkedin.com'},
    ]},
  { id: 'pn-employ-press', name: 'Name in Press Releases', category: 'person', subcategory: 'employment',
    engines: ['google'],
    description: 'Finds professional mentions on PR Newswire, BusinessWire, and GlobeNewswire.',
    operators: [
      {type:'exact',value:'[FIRSTNAME] [LASTNAME]'},
      {type:'exact',value:'[EMPLOYER]'},
      {type:'site',value:'prnewswire.com'},
      {type:'OR',value:''},
      {type:'site',value:'businesswire.com'},
      {type:'OR',value:''},
      {type:'site',value:'globenewswire.com'},
    ]},
  { id: 'pn-employ-filings', name: 'Name in Company Filings', category: 'person', subcategory: 'employment',
    engines: ['google'],
    description: 'Finds the person in public government, SEC, and IRS filings.',
    operators: [
      {type:'exact',value:'[FIRSTNAME] [LASTNAME]'},
      {type:'filetype',value:'pdf'},
      {type:'site',value:'.gov'},
      {type:'OR',value:''},
      {type:'inurl',value:'sec.gov'},
      {type:'OR',value:''},
      {type:'inurl',value:'irs.gov'},
    ]},
  { id: 'pn-employ-license', name: 'Professional License / Certification Records', category: 'person', subcategory: 'employment',
    engines: ['google'],
    description: 'Finds professional licenses and certifications on state and federal registries.',
    operators: [
      {type:'exact',value:'[FIRSTNAME] [LASTNAME]'},
      {type:'exact',value:'[STATE]'},
      {type:'inurl',value:'license'},
      {type:'OR',value:''},
      {type:'inurl',value:'registry'},
      {type:'OR',value:''},
      {type:'inurl',value:'lookup'},
      {type:'site',value:'.gov'},
    ]},

  // ── PERSON OSINT — Criminal & Court Records ───────────────────
  { id: 'pn-criminal-court', name: 'Court Records — Generic', category: 'person', subcategory: 'criminal',
    engines: ['google','duckduckgo','bing'],
    description: 'Finds court case pages mentioning the target name and state.',
    operators: [
      {type:'exact',value:'[FIRSTNAME] [LASTNAME]'},
      {type:'exact',value:'[STATE]'},
      {type:'inurl',value:'court'},
      {type:'OR',value:''},
      {type:'inurl',value:'case'},
      {type:'OR',value:''},
      {type:'inurl',value:'docket'},
    ]},
  { id: 'pn-criminal-pacer', name: 'PACER / Federal Court', category: 'person', subcategory: 'criminal',
    engines: ['google'],
    description: 'Searches CourtListener and PACER Monitor for federal court filings.',
    operators: [
      {type:'exact',value:'[FIRSTNAME] [LASTNAME]'},
      {type:'site',value:'courtlistener.com'},
      {type:'OR',value:''},
      {type:'site',value:'pacermonitor.com'},
    ]},
  { id: 'pn-criminal-offender', name: 'Sex Offender Registry', category: 'person', subcategory: 'criminal',
    engines: ['google'],
    description: 'Searches state sex offender registries on .gov domains.',
    operators: [
      {type:'exact',value:'[FIRSTNAME] [LASTNAME]'},
      {type:'exact',value:'[STATE]'},
      {type:'inurl',value:'offender'},
      {type:'OR',value:''},
      {type:'inurl',value:'registry'},
      {type:'site',value:'.gov'},
    ]},
  { id: 'pn-criminal-arrest', name: 'Arrest Records & Mugshots', category: 'person', subcategory: 'criminal',
    engines: ['google','bing'],
    description: 'Finds arrest records and mugshot sites for the target name and location.',
    operators: [
      {type:'exact',value:'[FIRSTNAME] [LASTNAME]'},
      {type:'exact',value:'[CITY]'},
      {type:'exact',value:'[STATE]'},
      {type:'inurl',value:'arrest'},
      {type:'OR',value:''},
      {type:'inurl',value:'mugshot'},
      {type:'OR',value:''},
      {type:'intitle',value:'mugshot'},
    ]},
  { id: 'pn-criminal-bankruptcy', name: 'Bankruptcy Filings', category: 'person', subcategory: 'criminal',
    engines: ['google'],
    description: 'Finds bankruptcy filings on CourtListener and government sites.',
    operators: [
      {type:'exact',value:'[FIRSTNAME] [LASTNAME]'},
      {type:'exact',value:'[STATE]'},
      {type:'inurl',value:'bankruptcy'},
      {type:'site',value:'courtlistener.com'},
      {type:'OR',value:''},
      {type:'site',value:'.gov'},
    ]},

  // ── COMPANY / ORG RECON ──────────────────────────────────────
  { id: 'company-employees', name: 'LinkedIn Employee Directory', category: 'company',
    engines: ['google','duckduckgo'],
    description: 'Find LinkedIn profiles of employees at a target company.',
    operators: [
      {type:'site',value:'linkedin.com/in'},{type:'intitle',value:'"at"'},
    ]},
  { id: 'company-jobs', name: 'Job Postings for Stack', category: 'company',
    engines: ['google','duckduckgo'],
    description: 'Find job postings to infer technology stack and team structure.',
    operators: [
      {type:'site',value:'indeed.com'},{type:'OR',value:''},
      {type:'site',value:'lever.co'},{type:'exact',value:'engineer'},
    ]},
  { id: 'company-subdomains', name: 'Subdomain Sweep', category: 'company',
    engines: ['google','bing'],
    description: 'Enumerate indexed subdomains of a target domain, excluding www.',
    operators: [
      {type:'site',value:'company.com'},{type:'inurl_exclude',value:'www'},
    ]},
  { id: 'company-vpn', name: 'VPN / Remote Portals', category: 'company',
    engines: ['google','bing'],
    description: 'Find VPN and remote access portals on a target domain.',
    operators: [
      {type:'site',value:'company.com'},{type:'inurl',value:'vpn'},
      {type:'OR',value:''},{type:'inurl',value:'remote'},
    ]},
  { id: 'company-ma-docs', name: 'M&A / Acquisition Docs', category: 'company',
    engines: ['google','bing'],
    description: 'PDF documents related to acquisitions or mergers.',
    operators: [
      {type:'filetype',value:'pdf'},{type:'exact',value:'acquisition'},
      {type:'OR',value:''},{type:'exact',value:'merger'},
    ]},
  { id: 'company-org-chart', name: 'Org Chart PDFs', category: 'company',
    engines: ['google','bing'],
    description: 'Indexed organizational chart PDFs for a target company.',
    operators: [
      {type:'filetype',value:'pdf'},{type:'exact',value:'org chart'},
      {type:'OR',value:''},{type:'exact',value:'organization chart'},
    ]},
  { id: 'company-tech-stack', name: 'Tech Stack from Job Sites', category: 'company',
    engines: ['google','duckduckgo'],
    description: "Infer a company's tech stack from Greenhouse or Workday job listings.",
    operators: [
      {type:'site',value:'greenhouse.io'},{type:'OR',value:''},
      {type:'site',value:'workday.com'},
    ]},

  // ── CODE & DEV SECRETS ───────────────────────────────────────
  { id: 'code-env-passwords', name: 'GitHub .env Passwords', category: 'code',
    engines: ['github'],
    description: 'Search GitHub for .env files containing password fields.',
    operators: [
      {type:'filename',value:'.env'},{type:'exact',value:'password'},
    ]},
  { id: 'code-api-keys', name: 'API Keys in JavaScript', category: 'code',
    engines: ['github'],
    description: 'JavaScript files in public repos with hardcoded API keys.',
    operators: [
      {type:'exact',value:'api_key'},{type:'OR',value:''},
      {type:'exact',value:'apikey'},{type:'language_gh',value:'javascript'},
    ]},
  { id: 'code-aws-keys', name: 'AWS Keys in Code', category: 'code',
    engines: ['github'],
    description: 'Source files containing the AKIA AWS access key prefix.',
    operators: [
      {type:'exact',value:'AKIA'},{type:'extension',value:'py'},
      {type:'OR',value:''},{type:'extension',value:'js'},
      {type:'OR',value:''},{type:'extension',value:'txt'},
    ]},
  { id: 'code-ssh-keys', name: 'Private SSH Keys in Repos', category: 'code',
    engines: ['github'],
    description: 'Private key files accidentally committed to public repositories.',
    operators: [
      {type:'filename',value:'id_rsa'},{type:'OR',value:''},
      {type:'filename',value:'id_dsa'},
    ]},
  { id: 'code-hardcoded-pw', name: 'Hardcoded Passwords', category: 'code',
    engines: ['github'],
    description: 'Python and PHP files with hardcoded password assignments.',
    operators: [
      {type:'exact',value:'password='},{type:'OR',value:''},
      {type:'exact',value:'passwd='},{type:'language_gh',value:'python'},
      {type:'OR',value:''},{type:'language_gh',value:'php'},
    ]},
  { id: 'code-db-strings', name: 'DB Connection Strings', category: 'code',
    engines: ['github'],
    description: 'JavaScript files with exposed MongoDB or MySQL connection strings.',
    operators: [
      {type:'exact',value:'mongodb://'},{type:'OR',value:''},
      {type:'exact',value:'mysql://'},{type:'language_gh',value:'javascript'},
    ]},
  { id: 'code-jwt-secrets', name: 'JWT Secrets', category: 'code',
    engines: ['github'],
    description: 'Environment files containing JWT signing secrets.',
    operators: [
      {type:'exact',value:'JWT_SECRET'},{type:'OR',value:''},
      {type:'exact',value:'jwt_secret'},{type:'filename',value:'.env'},
    ]},

  // ── EMAIL & COMMUNICATION ────────────────────────────────────
  { id: 'email-lists', name: 'Exposed Email Lists', category: 'email',
    engines: ['google','bing'],
    description: 'Text files containing collections of email addresses.',
    operators: [
      {type:'filetype',value:'txt'},{type:'exact',value:'email'},
      {type:'exact',value:'@'},
    ]},
  { id: 'email-owa', name: 'OWA Portals', category: 'email',
    engines: ['google','bing'],
    description: 'Outlook Web App portals accessible without VPN.',
    operators: [
      {type:'intitle',value:'"Outlook Web App"'},{type:'inurl',value:'owa'},
    ]},
  { id: 'email-mailman', name: 'Mailman Archives', category: 'email',
    engines: ['google','duckduckgo'],
    description: 'Public mailing list archives with subscriber data.',
    operators: [
      {type:'inurl',value:'pipermail'},{type:'OR',value:''},
      {type:'inurl',value:'mailman/listinfo'},
    ]},
  { id: 'email-exchange', name: 'Exchange Servers', category: 'email',
    engines: ['google','bing'],
    description: 'Microsoft Exchange webmail portals exposed to the internet.',
    operators: [
      {type:'intitle',value:'"Microsoft Exchange"'},{type:'inurl',value:'/owa'},
    ]},
  { id: 'email-harvest', name: 'Email Harvesting Spreadsheets', category: 'email',
    engines: ['google','bing'],
    description: 'Spreadsheets with corporate email address lists.',
    operators: [
      {type:'filetype',value:'xlsx'},{type:'OR',value:''},
      {type:'filetype',value:'csv'},{type:'exact',value:'@'},
    ]},

  // ── DATABASE & LOGS ──────────────────────────────────────────
  { id: 'db-phpmyadmin', name: 'phpMyAdmin Open Access', category: 'database',
    engines: ['google','duckduckgo','bing'],
    description: 'phpMyAdmin panels with no authentication protecting the database.',
    operators: [
      {type:'inurl',value:'phpmyadmin'},{type:'intitle',value:'phpmyadmin'},
    ]},
  { id: 'db-mongodb', name: 'Exposed MongoDB', category: 'database',
    engines: ['google','shodan'],
    description: 'MongoDB interfaces accessible without authentication.',
    operators: [
      {type:'intitle',value:'"Set-Cookie: mongo"'},
    ]},
  { id: 'db-sql-dumps', name: 'Public SQL Dumps', category: 'database',
    engines: ['google','bing'],
    description: 'SQL dump files with CREATE TABLE and INSERT statements.',
    operators: [
      {type:'filetype',value:'sql'},{type:'exact',value:'create table'},
      {type:'exact',value:'insert into'},
    ]},
  { id: 'db-apache-errors', name: 'Apache Error Logs', category: 'database',
    engines: ['google','bing'],
    description: 'Exposed Apache log files containing PHP errors and stack traces.',
    operators: [
      {type:'filetype',value:'log'},{type:'exact',value:'PHP Fatal error'},
      {type:'OR',value:''},{type:'exact',value:'PHP Warning'},
    ]},
  { id: 'db-access-logs', name: 'Web Access Logs', category: 'database',
    engines: ['google','bing'],
    description: 'Web server access logs revealing URL paths and client IPs.',
    operators: [
      {type:'filetype',value:'log'},{type:'inurl',value:'access.log'},
    ]},
  { id: 'db-elasticsearch', name: 'Elasticsearch Exposed', category: 'database',
    engines: ['google','shodan'],
    description: 'Elasticsearch instances on port 9200 without authentication.',
    operators: [
      {type:'inurl',value:'9200'},{type:'intitle',value:'"200 OK"'},
    ]},

  // ── PASTE & LEAK SITES ───────────────────────────────────────
  { id: 'paste-creds', name: 'Credential Dumps', category: 'paste',
    engines: ['google','duckduckgo'],
    description: 'Pastebin posts containing username/password credential pairs.',
    operators: [
      {type:'site',value:'pastebin.com'},{type:'exact',value:'password'},
      {type:'exact',value:'username'},{type:'OR',value:''},
      {type:'exact',value:'email'},
    ]},
  { id: 'paste-api-keys', name: 'API Key Leaks', category: 'paste',
    engines: ['google','duckduckgo'],
    description: 'Pastes containing leaked API keys or secret tokens.',
    operators: [
      {type:'site',value:'pastebin.com'},{type:'exact',value:'api_key'},
      {type:'OR',value:''},{type:'exact',value:'secret'},
    ]},
  { id: 'paste-emails', name: 'Email List Leaks', category: 'paste',
    engines: ['google','duckduckgo'],
    description: 'Pastebin dumps containing leaked email address lists.',
    operators: [
      {type:'site',value:'pastebin.com'},{type:'exact',value:'@gmail.com'},
      {type:'exact',value:'@yahoo.com'},
    ]},
  { id: 'paste-source', name: 'Source Code Leaks', category: 'paste',
    engines: ['google','duckduckgo'],
    description: 'Pastes containing leaked PHP or Python source code.',
    operators: [
      {type:'site',value:'pastebin.com'},{type:'exact',value:'<?php'},
      {type:'OR',value:''},{type:'exact',value:'import os'},
    ]},
  { id: 'paste-db-dumps', name: 'Database Dump Pastes', category: 'paste',
    engines: ['google','duckduckgo'],
    description: 'Pastebin posts containing SQL database dumps.',
    operators: [
      {type:'site',value:'pastebin.com'},{type:'exact',value:'INSERT INTO'},
      {type:'OR',value:''},{type:'exact',value:'CREATE TABLE'},
    ]},

  // ── SUBDOMAIN & INFRASTRUCTURE ───────────────────────────────
  { id: 'infra-shodan-org', name: 'Shodan Org Query', category: 'infra',
    engines: ['shodan'],
    description: 'Find all assets registered to a target organization on Shodan.',
    operators: [{type:'org',value:'"Company Name"'}]},
  { id: 'infra-shodan-ports', name: 'Shodan Port Scan', category: 'infra',
    engines: ['shodan'],
    description: 'Find SSH and RDP services exposed by an organization on Shodan.',
    operators: [
      {type:'port',value:'22'},{type:'OR',value:''},
      {type:'port',value:'3389'},{type:'org',value:'"Company"'},
    ]},
  { id: 'infra-censys-org', name: 'Censys Org Search', category: 'infra',
    engines: ['censys'],
    description: 'Search Censys for all certificates and hosts matching a domain.',
    operators: [{type:'exact',value:'parsed.names: company.com'}]},
  { id: 'infra-urlscan', name: 'URLScan Domain Sweep', category: 'infra',
    engines: ['urlscan'],
    description: 'Search URLScan.io for all scanned pages on a target domain.',
    operators: [{type:'site',value:'company.com'}]},
  { id: 'infra-archive-sub', name: 'Archive.org Subdomain Sweep', category: 'infra',
    engines: ['archive'],
    description: 'Find all Wayback Machine captures for any subdomain of a target.',
    operators: [{type:'site',value:'*.company.com'}]},
  { id: 'infra-cert-transparency', name: 'Certificate Transparency', category: 'infra',
    engines: ['google'],
    description: 'Search crt.sh for SSL certificates issued to a target domain.',
    operators: [{type:'site',value:'crt.sh'}]},

  // ── SOCIAL MEDIA OSINT ───────────────────────────────────────
  { id: 'social-username-sweep', name: 'Username Google Sweep', category: 'social',
    engines: ['google','duckduckgo'],
    description: 'Find a username across Twitter, Instagram, and Reddit simultaneously.',
    operators: [
      {type:'site',value:'twitter.com'},{type:'OR',value:''},
      {type:'site',value:'instagram.com'},{type:'OR',value:''},
      {type:'site',value:'reddit.com'},
    ]},
  { id: 'social-cached-profiles', name: 'Cached Deleted Profiles', category: 'social',
    engines: ['google'],
    description: "Find Google's cached copy of a deleted or suspended social profile.",
    operators: [{type:'cache',value:'twitter.com/username'}]},
  { id: 'social-linkedin-employees', name: 'LinkedIn Company Employees', category: 'social',
    engines: ['google','duckduckgo'],
    description: 'Enumerate LinkedIn profiles of employees at a target organization.',
    operators: [
      {type:'site',value:'linkedin.com/in'},{type:'exact',value:'at company name'},
    ]},
  { id: 'social-reddit-user', name: 'Reddit User History', category: 'social',
    engines: ['google','duckduckgo'],
    description: "Search a Reddit user's post and comment history.",
    operators: [{type:'site',value:'reddit.com/user'}]},
  { id: 'social-wayback', name: 'Archive Social Profile', category: 'social',
    engines: ['archive'],
    description: 'Look up Wayback Machine captures of a social media profile URL.',
    operators: [{type:'site',value:'twitter.com/username'}]},

  // ── GOVERNMENT & PUBLIC RECORDS ──────────────────────────────
  { id: 'gov-foia', name: 'FOIA Documents', category: 'government',
    engines: ['google','bing'],
    description: 'Freedom of Information Act documents hosted on .gov domains.',
    operators: [
      {type:'site',value:'.gov'},{type:'filetype',value:'pdf'},
      {type:'exact',value:'FOIA'},{type:'OR',value:''},
      {type:'exact',value:'freedom of information'},
    ]},
  { id: 'gov-court-records', name: 'Court Records', category: 'government',
    engines: ['google','duckduckgo'],
    description: 'Search federal court records via CourtListener and PACER.',
    operators: [
      {type:'site',value:'courtlistener.com'},{type:'OR',value:''},
      {type:'site',value:'pacer.gov'},
    ]},
  { id: 'gov-salary', name: 'Public Salary Database', category: 'government',
    engines: ['google','bing'],
    description: 'Government salary data in CSV or spreadsheet format.',
    operators: [
      {type:'site',value:'.gov'},{type:'exact',value:'salary'},
      {type:'filetype',value:'csv'},{type:'OR',value:''},
      {type:'filetype',value:'xlsx'},
    ]},
  { id: 'gov-property', name: 'Property Records', category: 'government',
    engines: ['google','duckduckgo'],
    description: 'County assessor property records for ownership lookups.',
    operators: [
      {type:'exact',value:'property records'},{type:'exact',value:'assessor'},
    ]},
  { id: 'gov-campaign-finance', name: 'Campaign Finance', category: 'government',
    engines: ['google','duckduckgo'],
    description: 'FEC and OpenSecrets campaign finance contribution records.',
    operators: [
      {type:'site',value:'fec.gov'},{type:'OR',value:''},
      {type:'site',value:'opensecrets.org'},
    ]},

  // ── PEOPLE SEARCH ENGINES ────────────────────────────────────
  { id: 'people-tps-name', name: 'TruePeopleSearch — Name', category: 'people',
    engines: ['truepeoplesearch'],
    description: 'Search TruePeopleSearch by first name, last name, city, and state.',
    operators: []},
  { id: 'people-tps-phone', name: 'TruePeopleSearch — Phone', category: 'people',
    engines: ['truepeoplesearch'],
    description: 'Reverse phone number lookup on TruePeopleSearch.',
    operators: []},
  { id: 'people-tps-address', name: 'TruePeopleSearch — Address', category: 'people',
    engines: ['truepeoplesearch'],
    description: 'Search TruePeopleSearch by street address and city/state.',
    operators: []},
  { id: 'people-whitepages', name: 'WhitePages Name Search', category: 'people',
    engines: ['whitepages'],
    description: 'Search WhitePages for contact and address data by name.',
    operators: []},
  { id: 'people-fastpeoplesearch', name: 'FastPeopleSearch — Name', category: 'people',
    engines: ['fastpeoplesearch'],
    description: 'Look up a person by name on FastPeopleSearch.',
    operators: []},
  { id: 'people-multi', name: 'Multi-Engine Person Sweep', category: 'people',
    engines: ['truepeoplesearch','whitepages','fastpeoplesearch'],
    description: 'Launch a name search simultaneously on all three people-search engines.',
    operators: []},
];

// ══════════════════════════════════════════════════════════════
// TEMPLATE MANAGER
// ══════════════════════════════════════════════════════════════
const PERSON_SUBCATEGORIES = [
  { id: 'name-location', label: 'Name + Location' },
  { id: 'phone',         label: 'Phone'           },
  { id: 'email',         label: 'Email'           },
  { id: 'address',       label: 'Address'         },
  { id: 'social',        label: 'Social'          },
  { id: 'associates',    label: 'Associates'      },
  { id: 'employment',    label: 'Employment'      },
  { id: 'criminal',      label: 'Criminal'        },
];

const TemplateManager = {
  activeCategory: 'all',
  activeSubcategory: 'all',
  searchTerm: '',

  init() {
    this._injectSearch();
    this._buildSidebar();
    this._renderGrid();
    this._updateTabCount();
  },

  // ── Inject search box above the category list ─────────────────
  _injectSearch() {
    const wrap = document.createElement('div');
    wrap.className = 'template-search-wrap';
    wrap.innerHTML = `<input type="text" id="template-search" class="template-search"
      placeholder="Search templates…" autocomplete="off" spellcheck="false" />`;
    document.getElementById('category-list').insertAdjacentElement('beforebegin', wrap);

    document.getElementById('template-search').addEventListener('input', e => {
      this.searchTerm = e.target.value.trim().toLowerCase();
      // Reset to "all" when typing so results aren't hidden by category filter
      if (this.searchTerm) this.activeCategory = 'all';
      this._buildSidebar();
      this._renderGrid();
    });
  },

  // ── Rebuild category sidebar with counts ──────────────────────
  _buildSidebar() {
    const list = document.getElementById('category-list');
    const visible = this._getFilteredBySearch();

    // Count per category among search-filtered set
    const counts = {};
    for (const t of visible) counts[t.category] = (counts[t.category] || 0) + 1;

    const all = this.activeCategory === 'all';
    let html = `<li><button class="category-btn ${all ? 'category-btn-active' : ''}" data-category="all">
      <span class="cat-icon">📋</span><span class="cat-name">All Templates</span>
      <span class="cat-count">${visible.length}</span></button></li>`;

    for (const cat of CATEGORIES) {
      const n = counts[cat.id] || 0;
      if (!n && this.searchTerm) continue;
      const active = this.activeCategory === cat.id;
      html += `<li><button class="category-btn ${active ? 'category-btn-active' : ''}" data-category="${_esc(cat.id)}">
        <span class="cat-icon">${cat.icon}</span><span class="cat-name">${_esc(cat.label)}</span>
        <span class="cat-count">${n}</span></button></li>`;
    }

    list.innerHTML = html;
    list.querySelectorAll('.category-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.activeCategory = btn.dataset.category;
        this.activeSubcategory = 'all';
        this._buildSidebar();
        this._renderGrid();
      });
    });
  },

  // ── Render subcategory pill bar (person category only) ───────
  _renderSubcatBar() {
    const existing = document.getElementById('person-subcat-bar');
    if (existing) existing.remove();
    if (this.activeCategory !== 'person' || this.searchTerm) return;

    const bar = document.createElement('div');
    bar.id = 'person-subcat-bar';
    bar.className = 'person-subcat-bar';

    const allActive = this.activeSubcategory === 'all';
    bar.innerHTML = `<button class="subcat-btn ${allActive ? 'subcat-btn-active' : ''}" data-subcat="all">All</button>` +
      PERSON_SUBCATEGORIES.map(s => {
        const active = this.activeSubcategory === s.id;
        return `<button class="subcat-btn ${active ? 'subcat-btn-active' : ''}" data-subcat="${_esc(s.id)}">${_esc(s.label)}</button>`;
      }).join('');

    bar.querySelectorAll('.subcat-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.activeSubcategory = btn.dataset.subcat;
        this._renderSubcatBar();
        const grid = document.getElementById('template-grid');
        this._renderCards(grid);
      });
    });

    document.getElementById('template-grid').insertAdjacentElement('beforebegin', bar);
  },

  // ── Render template card grid ─────────────────────────────────
  _renderGrid() {
    const grid = document.getElementById('template-grid');
    this._renderSubcatBar();
    this._renderCards(grid);
  },

  _renderCards(grid) {
    const templates = this._filteredTemplates();

    if (!templates.length) {
      grid.innerHTML = `<div class="template-empty-state">
        <span class="empty-icon">//</span>
        No templates match your search.</div>`;
      return;
    }

    grid.innerHTML = templates.map(t => this._cardHTML(t)).join('');

    grid.querySelectorAll('.btn-load-template').forEach(btn => {
      btn.addEventListener('click', () => {
        const tmpl = TEMPLATES.find(t => t.id === btn.dataset.tid);
        if (tmpl) this._loadTemplate(tmpl);
      });
    });

    grid.querySelectorAll('.card-explain-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const panel = btn.closest('.template-card').querySelector('.card-explain');
        if (!panel) return;
        panel.hidden = !panel.hidden;
        btn.textContent = panel.hidden ? '?' : '×';
      });
    });
  },

  // ── Build HTML for a single template card ─────────────────────
  _cardHTML(t) {
    const cat   = CATEGORIES.find(c => c.id === t.category);
    const icon  = cat ? cat.icon : '🔍';

    const preview = t.operators.length
      ? t.operators.map(op => {
          const def = OPERATORS[op.type];
          return def ? def.syntax.replace('{value}', op.value) : op.value;
        }).join(' ').trim()
      : '(people search mode)';

    const badges = t.engines
      .map(id => ENGINES[id] ? `<span class="engine-badge">${_esc(ENGINES[id].label)}</span>` : '')
      .join('');

    const hasSite  = t.operators.some(op => op.type === 'site');
    const badgeCls = hasSite ? 'card-badge-site' : 'card-badge-generic';
    const badgeTxt = hasSite ? 'SITE-SPECIFIC'   : 'GENERIC';

    const DUMMY = { '[FIRSTNAME]':'John','[LASTNAME]':'Doe','[DOMAIN]':'example.com','[CITY]':'Chicago','[STATE]':'Illinois','[EMAIL]':'john@example.com','[PHONE]':'5551234567','[USERNAME]':'jdoe','[EMPLOYER]':'Acme Corp','[AGE]':'34','[ADDRESS]':'123 Main St' };
    const exampleParts = t.operators.slice(0, 4).map(op => {
      const def = OPERATORS[op.type];
      if (!def) return '';
      let v = op.value;
      for (const [k, r] of Object.entries(DUMMY)) v = v.split(k).join(r);
      return def.syntax.replace('{value}', v);
    }).filter(Boolean);
    const exampleStr = exampleParts.join(' ').trim() || preview;

    const sensitiveCategories = ['person', 'devices', 'code'];
    const sensitiveSubcats    = ['criminal', 'associates'];
    const isSensitive = sensitiveCategories.includes(t.category) ||
      sensitiveSubcats.includes(t.subcategory) ||
      t.engines.some(e => PEOPLE_ENGINES.has(e));

    const cautionHtml = isSensitive
      ? `<div class="card-caution"><span class="card-caution-icon">⚠</span> USE WITH CAUTION</div>`
      : '';

    return `<article class="template-card" data-category="${_esc(t.category)}">
      <div class="card-header">
        <span class="card-cat-icon">${icon}</span>${_esc(t.name)}
        <span class="card-badge ${badgeCls}">${badgeTxt}</span>
        <button class="card-explain-btn" data-tid="${_esc(t.id)}" aria-label="Explain this template" title="What does this find?">?</button>
      </div>
      <div class="card-body">
        <code class="card-query">${_esc(preview)}</code>
        <p class="card-desc">${_esc(t.description)}</p>
      </div>
      <div class="card-explain" hidden>
        ${cautionHtml}
        <p class="card-explain-text">${_esc(t.description)}</p>
        <div class="card-explain-example">
          <span class="card-explain-label">EXAMPLE QUERY:</span>
          <code class="card-explain-code">${_esc(exampleStr)}</code>
        </div>
      </div>
      <div class="card-footer">
        <div class="engine-badges">${badges}</div>
        <button class="btn card-btn btn-load-template" data-tid="${_esc(t.id)}">LOAD</button>
      </div>
    </article>`;
  },

  // ── Load a template into the Builder and switch tabs ──────────
  _loadTemplate(t) {
    window.builder.reset();
    t.operators.forEach(op => window.builder.addOperator(op.type, op.value));

    // Apply engine selection from template
    document.querySelectorAll('.engine-checkbox').forEach(cb => {
      cb.checked = t.engines.includes(cb.dataset.engine);
    });
    const shodanCb = document.querySelector('.engine-checkbox[data-engine="shodan"]');
    const shodanNote = document.getElementById('shodan-disclaimer');
    if (shodanCb && shodanNote) shodanNote.hidden = !shodanCb.checked;

    window.builder._checkTpsMode();
    window.builder._updatePreview();
    switchTab('builder');
    window.builder._showLaunchLog('ok', `Template loaded: ${t.name}`);
  },

  // ── Filtering helpers ─────────────────────────────────────────
  _filteredTemplates() {
    let list = this._getFilteredBySearch();
    if (this.activeCategory !== 'all') {
      list = list.filter(t => t.category === this.activeCategory);
    }
    if (this.activeCategory === 'person' && this.activeSubcategory !== 'all' && !this.searchTerm) {
      list = list.filter(t => t.subcategory === this.activeSubcategory);
    }
    return list;
  },

  _getFilteredBySearch() {
    if (!this.searchTerm) return TEMPLATES;
    const q = this.searchTerm;
    return TEMPLATES.filter(t =>
      t.name.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q) ||
      t.category.toLowerCase().includes(q)
    );
  },

  // ── Update the tab button label with total count ──────────────
  _updateTabCount() {
    const item = document.querySelector('.nav-item[data-tab="templates"] .nav-item-label');
    if (item) item.textContent = `TEMPLATES (${TEMPLATES.length})`;
  },
};

// ══════════════════════════════════════════════════════════════
// MOBILE CONFIRM — bottom sheet on touch, native confirm on desktop
// ══════════════════════════════════════════════════════════════
function _mobileConfirm(msg, onConfirm) {
  if (!window.matchMedia('(pointer: coarse)').matches) {
    if (window.confirm(msg)) onConfirm();
    return;
  }
  const overlay = document.createElement('div');
  overlay.className = 'bottom-sheet-overlay';
  overlay.innerHTML = `
    <div class="bottom-sheet" role="dialog" aria-modal="true">
      <p class="bottom-sheet-msg">${_esc(msg)}</p>
      <button class="btn bottom-sheet-confirm">CONFIRM</button>
      <button class="btn bottom-sheet-cancel">CANCEL</button>
    </div>`;
  document.body.appendChild(overlay);
  const close = () => overlay.remove();
  overlay.querySelector('.bottom-sheet-confirm').addEventListener('click', () => { close(); onConfirm(); });
  overlay.querySelector('.bottom-sheet-cancel').addEventListener('click', close);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
}

// ══════════════════════════════════════════════════════════════
// MOBILE INIT — runs only on touch/small-screen sessions
// ══════════════════════════════════════════════════════════════
const ENGINE_ABBREVS = {
  google: 'GGL', duckduckgo: 'DDG', bing: 'BING', shodan: 'SHDN',
  github: 'GH', urlscan: 'URL', archive: 'ARC', censys: 'CENS',
  pastebin: 'PB', truepeoplesearch: 'TPS', whitepages: 'WP', fastpeoplesearch: 'FPS',
};

function initMobile() {
  // ── Engine pill abbreviations ───────────────────────────────
  document.querySelectorAll('.engine-checkbox').forEach(cb => {
    const span = cb.closest('.engine-toggle')?.querySelector('.engine-name');
    if (span) {
      const abbr = ENGINE_ABBREVS[cb.dataset.engine] || cb.dataset.engine.slice(0, 4).toUpperCase();
      span.dataset.abbr = abbr;
      span.title = span.textContent.trim(); // full name as tooltip on long-press
    }
  });

  // ── Collapsible LIVE PREVIEW on mobile ──────────────────────
  // Only applies when viewport is narrow; skips if already set up
  if (!window.matchMedia('(max-width: 767px)').matches) return;

  const previewTitleEl = [...document.querySelectorAll('.builder-right .section-title')]
    .find(el => el.textContent.trim() === 'LIVE PREVIEW');
  if (previewTitleEl) {
    const header  = previewTitleEl.closest('.section-header');
    const preview = document.getElementById('query-preview');
    const copyBtn = document.getElementById('btn-copy-query');

    // Wrap preview + copy button in an animated container
    const wrap = document.createElement('div');
    wrap.className = 'preview-collapsible';
    wrap.style.maxHeight = '9999px'; // start expanded — preview always visible
    preview.insertAdjacentElement('beforebegin', wrap);
    wrap.appendChild(preview);
    wrap.appendChild(copyBtn);

    header.classList.add('preview-collapse-header'); // NOT collapsed by default
    header.setAttribute('role', 'button');
    header.setAttribute('tabindex', '0');

    const toggle = () => {
      const collapsed = header.classList.contains('collapsed');
      if (collapsed) {
        wrap.style.maxHeight = wrap.scrollHeight + 48 + 'px'; // +48 for copy btn
        header.classList.remove('collapsed');
      } else {
        wrap.style.maxHeight = '0px';
        header.classList.add('collapsed');
      }
    };
    header.addEventListener('click', toggle);
    header.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') toggle(); });
  }

  // ── Preview box failsafe: force visibility if DOM somehow hides it ──
  setTimeout(() => {
    const box = document.getElementById('query-preview');
    if (box) {
      box.style.cssText += 'display:block!important;visibility:visible!important;min-height:100px!important;';
    }
  }, 500);

  // ── Sticky LAUNCH: track virtual keyboard height via visualViewport ──
  const launchBtn = document.getElementById('btn-launch');
  const launchLog = document.getElementById('launch-log');
  if (window.visualViewport && launchBtn) {
    const reposition = () => {
      if (!window.matchMedia('(max-width: 767px)').matches) return;
      // Distance from visualViewport bottom to window bottom = keyboard height
      const kbH = Math.max(0,
        window.innerHeight - (window.visualViewport.height + window.visualViewport.offsetTop)
      );
      launchBtn.style.bottom = `${kbH}px`;
      if (launchLog) launchLog.style.bottom = `${kbH + 56}px`;
    };
    window.visualViewport.addEventListener('resize', reposition);
    window.visualViewport.addEventListener('scroll', reposition);
  }
}

// ══════════════════════════════════════════════════════════════
// DORK WIZARD
// ══════════════════════════════════════════════════════════════
const DorkWizard = {
  step: 1,
  answers: { intent: null, chips: new Set(), fields: {} },

  INTENTS: [
    { id: 'person',    icon: '👤', label: 'A Person',                   desc: 'Find someone by name, phone, email or address' },
    { id: 'company',   icon: '🏢', label: 'A Company or Organization',  desc: 'Research a business, find employees, or map infrastructure' },
    { id: 'documents', icon: '📄', label: 'Documents & Files',          desc: 'Find PDFs, spreadsheets, or other files left exposed online' },
    { id: 'login',     icon: '🔐', label: 'Login Pages & Admin Panels', desc: 'Find login portals, admin pages, or authentication systems' },
    { id: 'devices',   icon: '📷', label: 'Cameras & Devices',          desc: 'Find exposed webcams, routers, or IoT devices' },
    { id: 'code',      icon: '💻', label: 'Code & Credentials',         desc: 'Find API keys, passwords, or config files in public code' },
    { id: 'recon',     icon: '🌐', label: 'General Website Recon',      desc: 'Explore a specific website or domain' },
  ],

  CHIPS: {
    person:    [{id:'name',label:'Their name'},{id:'phone',label:'Phone number'},{id:'email',label:'Email address'},{id:'location',label:'Home city/state'},{id:'employer',label:'Where they work'},{id:'username',label:'Their username'},{id:'age',label:'Their age'}],
    company:   [{id:'employees',label:'Employee names'},{id:'login',label:'Login portals'},{id:'documents',label:'Exposed documents'},{id:'subdomains',label:'Subdomains'},{id:'techstack',label:'Tech stack'},{id:'press',label:'Press mentions'}],
    documents: [{id:'pdf',label:'PDFs'},{id:'spreadsheet',label:'Spreadsheets'},{id:'word',label:'Word docs'},{id:'config',label:'Config files'},{id:'database',label:'Database dumps'},{id:'any',label:'Any file type'}],
    login:     [{id:'generic',label:'Generic login page'},{id:'admin',label:'Admin panel'},{id:'phpmyadmin',label:'phpMyAdmin'},{id:'vpn',label:'VPN portal'},{id:'camera',label:'Camera/router'},{id:'owa',label:'Email (OWA)'}],
    devices:   [{id:'webcam',label:'Webcams'},{id:'ipcam',label:'IP cameras'},{id:'router',label:'Router admin'},{id:'printer',label:'Printers'},{id:'scada',label:'SCADA/ICS'}],
    code:      [{id:'github',label:'GitHub'},{id:'websites',label:'Public websites'},{id:'paste',label:'Paste sites'},{id:'all',label:'All of the above'}],
    recon:     [{id:'login',label:'Login pages'},{id:'files',label:'Exposed files'},{id:'subdomains',label:'Subdomains'},{id:'cache',label:'Cached pages'},{id:'admin',label:'Admin panels'},{id:'everything',label:'Everything'}],
  },

  // ── Setup ──────────────────────────────────────────────────────
  init() {
    this._createDOM();
    document.getElementById('btn-wizard')?.addEventListener('click', () => this.open());
  },

  _createDOM() {
    const overlay = document.createElement('div');
    overlay.id = 'wizard-overlay';
    overlay.innerHTML = `
      <div id="wizard-panel">
        <div class="wz-header-bar">
          <div>
            <div class="wz-title">DORK WIZARD</div>
            <div class="wz-subtitle">Answer a few questions and we'll build your search for you.</div>
          </div>
          <button class="wz-close" id="wz-close" aria-label="Close wizard">&times;</button>
        </div>
        <div class="wz-progress" id="wz-progress"></div>
        <div class="wz-body" id="wz-body"></div>
        <div class="wz-footer" id="wz-footer"></div>
      </div>`;
    document.body.appendChild(overlay);
    document.getElementById('wz-close').addEventListener('click', () => this.close());
    overlay.addEventListener('click', e => { if (e.target === overlay) this.close(); });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && overlay.classList.contains('wizard-open')) this.close();
    });
  },

  // ── Open / close ───────────────────────────────────────────────
  open() {
    this.step = 1;
    this.answers = { intent: null, chips: new Set(), fields: {} };
    const overlay = document.getElementById('wizard-overlay');
    overlay.style.display = 'flex';
    requestAnimationFrame(() => requestAnimationFrame(() => {
      overlay.classList.add('wizard-open');
      this._render();
    }));
  },

  close() {
    const overlay = document.getElementById('wizard-overlay');
    overlay.classList.remove('wizard-open');
    setTimeout(() => { overlay.style.display = 'none'; }, 260);
  },

  // ── Render dispatcher ──────────────────────────────────────────
  _render() {
    this._renderProgress();
    const body   = document.getElementById('wz-body');
    const footer = document.getElementById('wz-footer');
    body.innerHTML   = '';
    footer.innerHTML = '';
    if (this.step === 1) this._renderStep1(body, footer);
    else if (this.step === 2) this._renderStep2(body, footer);
    else if (this.step === 3) this._renderStep3(body, footer);
    else if (this.step === 4) this._renderStep4(body, footer);
  },

  _renderProgress() {
    const el   = document.getElementById('wz-progress');
    const dots = [1, 2, 3, 4].map(n => {
      if (n < this.step)  return `<span class="wz-dot wz-dot-done">●</span>`;
      if (n === this.step) return `<span class="wz-dot wz-dot-active">●</span>`;
      return `<span class="wz-dot wz-dot-empty">○</span>`;
    }).join('');
    el.innerHTML = `${dots}<span class="wz-step-label">Step ${this.step} of 4</span>`;
  },

  // ── Step 1: intent selection ───────────────────────────────────
  _renderStep1(body) {
    body.innerHTML = `
      <div class="wz-question">What are you trying to find?</div>
      <div class="wz-option-list">
        ${this.INTENTS.map(i => `
          <button class="wz-option-card${this.answers.intent === i.id ? ' wz-selected' : ''}" data-intent="${_esc(i.id)}">
            <span class="wz-option-icon">${i.icon}</span>
            <span class="wz-option-text">
              <span class="wz-option-label">${_esc(i.label)}</span>
              <span class="wz-option-desc">${_esc(i.desc)}</span>
            </span>
          </button>`).join('')}
      </div>`;
    body.querySelectorAll('.wz-option-card').forEach(btn => {
      btn.addEventListener('click', () => {
        this.answers.intent = btn.dataset.intent;
        this.answers.chips  = new Set();
        this.answers.fields = {};
        this.step = 2;
        this._render();
      });
    });
  },

  // ── Step 2: chip multi-select ──────────────────────────────────
  _renderStep2(body, footer) {
    const chips = this.CHIPS[this.answers.intent] || [];
    const q = {
      person:    'What do you know about them?',
      company:   'What do you want to find?',
      documents: 'What kind of files?',
      login:     'What type of system?',
      devices:   'What are you looking for?',
      code:      'Where should we look?',
      recon:     'What do you want to find on the site?',
    }[this.answers.intent] || 'Select what applies:';

    body.innerHTML = `
      <div class="wz-back-row"><button class="wz-btn-back-sm" id="wz-back-2">← Back</button></div>
      <div class="wz-question">${_esc(q)}</div>
      <div class="wz-chips">
        ${chips.map(c => `<button class="wz-chip${this.answers.chips.has(c.id) ? ' wz-chip-on' : ''}" data-chip="${_esc(c.id)}">${_esc(c.label)}</button>`).join('')}
      </div>`;

    body.querySelector('#wz-back-2').addEventListener('click', () => { this.step = 1; this._render(); });

    let nextBtn;
    body.querySelectorAll('.wz-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.chip;
        if (this.answers.chips.has(id)) {
          this.answers.chips.delete(id);
          btn.classList.remove('wz-chip-on');
        } else {
          this.answers.chips.add(id);
          btn.classList.add('wz-chip-on');
        }
        if (nextBtn) nextBtn.disabled = this.answers.chips.size === 0;
      });
    });

    nextBtn = document.createElement('button');
    nextBtn.className  = 'wz-btn-next';
    nextBtn.textContent = 'Next →';
    nextBtn.disabled   = this.answers.chips.size === 0;
    nextBtn.addEventListener('click', () => {
      if (this.answers.chips.size === 0) return;
      this.step = 3;
      this._render();
    });
    footer.appendChild(nextBtn);
  },

  // ── Step 3: detail fields ──────────────────────────────────────
  _renderStep3(body, footer) {
    const defs = this._fieldDefs();

    body.innerHTML = `
      <div class="wz-back-row"><button class="wz-btn-back-sm" id="wz-back-3">← Back</button></div>
      <div class="wz-question">Fill in the details:</div>
      <div class="wz-fields">
        ${defs.map(f => `
          <div class="wz-field-group">
            <label class="wz-label" for="wzf-${_esc(f.id)}">${_esc(f.label)}${f.required ? ' <span class="wz-required">*</span>' : ''}</label>
            <input class="wz-input" id="wzf-${_esc(f.id)}" data-field="${_esc(f.id)}"
              type="text" placeholder="${_esc(f.placeholder)}"
              autocomplete="off" spellcheck="false"
              value="${_esc(this.answers.fields[f.id] || '')}" />
          </div>`).join('')}
      </div>`;

    body.querySelector('#wz-back-3').addEventListener('click', () => { this.step = 2; this._render(); });

    let nextBtn;
    body.querySelectorAll('.wz-input').forEach(inp => {
      inp.addEventListener('input', () => {
        this.answers.fields[inp.dataset.field] = inp.value.trim();
        if (nextBtn) nextBtn.disabled = !this._requiredFilled(defs);
      });
    });

    nextBtn = document.createElement('button');
    nextBtn.className   = 'wz-btn-next';
    nextBtn.textContent = 'Next →';
    nextBtn.disabled    = !this._requiredFilled(defs);
    nextBtn.addEventListener('click', () => {
      if (!this._requiredFilled(defs)) return;
      this.step = 4;
      this._render();
    });
    footer.appendChild(nextBtn);
  },

  // ── Step 4: review + build ─────────────────────────────────────
  _renderStep4(body, footer) {
    const result = this.generateFromWizard();
    const previewStr = result.operators.map(op => {
      const def = OPERATORS[op.type];
      return def ? def.syntax.replace('{value}', op.value) : op.value;
    }).join(' ').trim();

    body.innerHTML = `
      <div class="wz-back-row"><button class="wz-btn-back-sm" id="wz-back-4">← Back</button></div>
      <div class="wz-question">Review &amp; Build</div>
      <p class="wz-summary">${_esc(result.summary)}</p>
      <div class="wz-preview-box">${_esc(previewStr) || '<em>(no query generated)</em>'}</div>`;

    body.querySelector('#wz-back-4').addEventListener('click', () => { this.step = 3; this._render(); });

    const buildBtn = document.createElement('button');
    buildBtn.className   = 'wz-btn-build';
    buildBtn.textContent = 'BUILD & LOAD →';
    buildBtn.addEventListener('click', () => {
      this._applyToBuilder(result);
      this.close();
      setTimeout(() => this._showBanner('✓ WIZARD COMPLETE — Review your query and launch'), 310);
    });
    footer.appendChild(buildBtn);
  },

  // ── Field definitions by intent + chips ───────────────────────
  _fieldDefs() {
    const { intent, chips } = this.answers;
    const f = [];
    if (intent === 'person') {
      if (chips.has('name')) {
        f.push({id:'firstName', label:'First Name',   placeholder:'John',          required:true});
        f.push({id:'lastName',  label:'Last Name',    placeholder:'Doe',           required:true});
      }
      if (chips.has('phone'))    f.push({id:'phone',    label:'Phone Number',          placeholder:'5551234567',       required:true});
      if (chips.has('email'))    f.push({id:'email',    label:'Email Address',         placeholder:'john@gmail.com',   required:true});
      if (chips.has('location')) {
        f.push({id:'city',  label:'City',  placeholder:'Chicago',  required:true});
        f.push({id:'state', label:'State', placeholder:'Illinois', required:true});
      }
      if (chips.has('employer')) f.push({id:'employer', label:'Employer / Company',   placeholder:'Acme Corp', required:true});
      if (chips.has('username')) f.push({id:'username', label:'Username',              placeholder:'jdoe92',    required:true});
      if (chips.has('age'))      f.push({id:'age',      label:'Age (optional)',        placeholder:'34',        required:false});
    } else if (intent === 'company') {
      f.push({id:'company', label:'Company / Organization Name', placeholder:'Acme Corp',    required:true});
      f.push({id:'domain',  label:'Domain (optional)',           placeholder:'acmecorp.com', required:false});
    } else if (intent === 'documents') {
      f.push({id:'site', label:'Limit to a specific site (optional)', placeholder:'acmecorp.com', required:false});
    } else if (intent === 'login') {
      f.push({id:'domain', label:'Target domain (optional)', placeholder:'acmecorp.com', required:false});
    } else if (intent === 'devices') {
      f.push({id:'region', label:'Region / Country (optional)', placeholder:'US', required:false});
    } else if (intent === 'code') {
      f.push({id:'keyword', label:'What are you looking for? *', placeholder:'API key, password, secret…', required:true});
      f.push({id:'org',     label:'GitHub user or org (optional)', placeholder:'acmecorp', required:false});
    } else if (intent === 'recon') {
      f.push({id:'domain', label:'Target Domain *', placeholder:'acmecorp.com', required:true});
    }
    return f;
  },

  _requiredFilled(defs) {
    return defs.filter(d => d.required).every(d => (this.answers.fields[d.id] || '').trim().length > 0);
  },

  // ── Dork generation ────────────────────────────────────────────
  generateFromWizard() {
    const { intent, chips, fields } = this.answers;
    const ops    = [];
    const engSet = new Set(['google', 'duckduckgo', 'bing']);
    const parts  = [];

    if (intent === 'person') {
      const name = (fields.firstName && fields.lastName) ? `${fields.firstName} ${fields.lastName}` : null;
      if (name) { ops.push({type:'exact', value:name}); parts.push(`named ${name}`); }
      if (chips.has('location') && fields.city) {
        ops.push({type:'exact', value:fields.city});
        if (fields.state) { ops.push({type:'exact', value:fields.state}); parts.push(`in ${fields.city}, ${fields.state}`); }
        else parts.push(`in ${fields.city}`);
      }
      if (chips.has('employer') && fields.employer) {
        ops.push({type:'exact', value:fields.employer}); parts.push(`at ${fields.employer}`);
      }
      if (chips.has('age') && fields.age) ops.push({type:'exact', value:fields.age});
      if (chips.has('phone') && fields.phone) {
        const raw = fields.phone.replace(/\D/g, '');
        const f1  = raw.length === 10 ? `(${raw.slice(0,3)}) ${raw.slice(3,6)}-${raw.slice(6)}` : fields.phone;
        const f2  = raw.length === 10 ? `${raw.slice(0,3)}-${raw.slice(3,6)}-${raw.slice(6)}` : fields.phone;
        ops.push({type:'intext',value:f1}, {type:'OR',value:''}, {type:'intext',value:f2}, {type:'OR',value:''}, {type:'intext',value:raw||fields.phone});
        parts.push(`phone ${fields.phone}`);
      }
      if (chips.has('email') && fields.email) {
        ops.push({type:'exact', value:fields.email}); parts.push(`email ${fields.email}`);
      }
      if (chips.has('username') && fields.username) {
        ops.push({type:'exact',value:fields.username}, {type:'site',value:'twitter.com'}, {type:'OR',value:''}, {type:'site',value:'instagram.com'}, {type:'OR',value:''}, {type:'site',value:'reddit.com'});
        engSet.clear(); engSet.add('google'); parts.push(`username "${fields.username}"`);
      }
    }

    if (intent === 'company') {
      const co  = fields.company || '';
      const dom = fields.domain  || '';
      if (co) parts.push(co);
      if (chips.has('employees')) {
        ops.push({type:'site',value:'linkedin.com/in'});
        if (co) ops.push({type:'intitle', value:co});
        engSet.clear(); engSet.add('google'); engSet.add('bing');
      }
      if (chips.has('login')) {
        if (dom) ops.push({type:'site',value:dom});
        ops.push({type:'inurl',value:'login'}, {type:'OR',value:''}, {type:'inurl',value:'admin'}, {type:'OR',value:''}, {type:'inurl',value:'portal'});
      }
      if (chips.has('documents')) {
        if (dom) ops.push({type:'site',value:dom});
        ops.push({type:'filetype',value:'pdf'}, {type:'OR',value:''}, {type:'filetype',value:'xlsx'});
        engSet.clear(); engSet.add('google'); engSet.add('bing');
      }
      if (chips.has('subdomains') && dom) {
        ops.push({type:'site',value:dom}, {type:'site_exclude',value:`www.${dom}`});
      }
      if (chips.has('techstack') && dom) {
        ops.push({type:'site',value:dom}, {type:'inurl',value:'jobs'}, {type:'OR',value:''}, {type:'inurl',value:'careers'});
      }
      if (chips.has('press')) {
        ops.push({type:'site',value:'prnewswire.com'}, {type:'OR',value:''}, {type:'site',value:'businesswire.com'});
        if (co) ops.push({type:'exact',value:co});
        engSet.clear(); engSet.add('google');
      }
    }

    if (intent === 'documents') {
      const site = fields.site || '';
      if (site) ops.push({type:'site', value:site});
      const ftypes = [];
      if (chips.has('pdf')        || chips.has('any')) ftypes.push('pdf');
      if (chips.has('spreadsheet')|| chips.has('any')) ftypes.push('xlsx', 'csv');
      if (chips.has('word')       || chips.has('any')) ftypes.push('doc', 'docx');
      if (chips.has('config')     || chips.has('any')) ftypes.push('env', 'conf', 'yml');
      if (chips.has('database')   || chips.has('any')) ftypes.push('sql');
      ftypes.forEach((ft, i) => {
        if (i > 0) ops.push({type:'OR', value:''});
        ops.push({type:'filetype', value:ft});
      });
      if (chips.has('any') && !ftypes.length) ops.push({type:'intitle', value:'index of /'});
      engSet.clear(); engSet.add('google'); engSet.add('bing');
      parts.push(ftypes.length ? `${ftypes.join('/')} files` : 'open directories');
    }

    if (intent === 'login') {
      const dom = fields.domain || '';
      if (dom) ops.push({type:'site', value:dom});
      if (chips.has('generic') || chips.has('admin')) {
        ops.push({type:'intitle',value:'login'}, {type:'OR',value:''}, {type:'inurl',value:'login'});
        if (chips.has('admin')) ops.push({type:'OR',value:''}, {type:'intitle',value:'admin'}, {type:'OR',value:''}, {type:'inurl',value:'admin'});
      }
      if (chips.has('phpmyadmin')) ops.push({type:'intitle',value:'phpMyAdmin'}, {type:'OR',value:''}, {type:'inurl',value:'phpmyadmin'});
      if (chips.has('vpn'))     ops.push({type:'inurl',value:'vpn'}, {type:'OR',value:''}, {type:'inurl',value:'remote'});
      if (chips.has('camera'))  ops.push({type:'intitle',value:'Network Camera'}, {type:'OR',value:''}, {type:'inurl',value:'viewer/live.shtml'});
      if (chips.has('owa'))     ops.push({type:'inurl',value:'owa'}, {type:'OR',value:''}, {type:'intitle',value:'Outlook Web Access'});
      engSet.clear(); engSet.add('google'); engSet.add('bing');
      if (dom) parts.push(`on ${dom}`);
    }

    if (intent === 'devices') {
      if (chips.has('webcam') || chips.has('ipcam')) ops.push({type:'intitle',value:'Network Camera'}, {type:'OR',value:''}, {type:'intitle',value:'Live NetSnap Cam-Server'}, {type:'OR',value:''}, {type:'inurl',value:'viewer/live.shtml'});
      if (chips.has('router'))  ops.push({type:'intitle',value:'Router Configuration'}, {type:'OR',value:''}, {type:'inurl',value:'setup.cgi'});
      if (chips.has('printer')) ops.push({type:'inurl',value:'hp/device/this.LCDispatcher'}, {type:'OR',value:''}, {type:'intitle',value:'Printer Status'});
      if (chips.has('scada'))   ops.push({type:'intitle',value:'SCADA'}, {type:'OR',value:''}, {type:'intext',value:'SCADA system'});
      engSet.clear(); engSet.add('google'); engSet.add('bing');
    }

    if (intent === 'code') {
      const kw  = fields.keyword || '';
      const org = fields.org     || '';
      if (chips.has('github') || chips.has('all')) {
        ops.push({type:'site', value:'github.com'});
        if (org) ops.push({type:'inurl', value:org});
        if (kw)  ops.push({type:'exact', value:kw});
        engSet.clear(); engSet.add('google');
      }
      if (chips.has('paste') || chips.has('all')) {
        if (ops.length) ops.push({type:'OR', value:''});
        ops.push({type:'site', value:'pastebin.com'});
        if (kw) ops.push({type:'exact', value:kw});
        engSet.clear(); engSet.add('google');
      }
      if (chips.has('websites')) {
        if (ops.length) ops.push({type:'OR', value:''});
        ops.push({type:'filetype',value:'env'}, {type:'OR',value:''}, {type:'filetype',value:'conf'});
        if (kw) ops.push({type:'exact', value:kw});
      }
      if (kw) parts.push(`"${kw}"`);
    }

    if (intent === 'recon') {
      const dom = fields.domain || '';
      if (dom) { ops.push({type:'site', value:dom}); parts.push(`on ${dom}`); }
      if (chips.has('login') || chips.has('admin') || chips.has('everything')) {
        ops.push({type:'inurl',value:'login'}, {type:'OR',value:''}, {type:'inurl',value:'admin'});
      }
      if (chips.has('files') || chips.has('everything')) {
        ops.push({type:'filetype',value:'pdf'}, {type:'OR',value:''}, {type:'filetype',value:'xlsx'});
        engSet.clear(); engSet.add('google'); engSet.add('bing');
      }
      if (chips.has('subdomains') && dom) ops.push({type:'site_exclude', value:`www.${dom}`});
      if (chips.has('cache') && dom) ops.push({type:'cache', value:dom});
    }

    const intentLbl = {
      person:'a person', company:'a company or organization',
      documents:'documents and files', login:'login pages and admin panels',
      devices:'cameras and devices', code:'code and credentials', recon:'a website',
    };
    const engNames = [...engSet].map(e => ENGINES[e]?.label || e).join(', ');
    const summary  = `We'll search ${engNames} for ${intentLbl[intent] || intent}${parts.length ? ' — ' + parts.join(', ') : ''}.`;
    return { operators: ops, engines: [...engSet], summary };
  },

  // ── Apply result to Builder ────────────────────────────────────
  _applyToBuilder(result) {
    window.builder.reset();
    result.operators.forEach(op => window.builder.addOperator(op.type, op.value));
    document.querySelectorAll('.engine-checkbox').forEach(cb => {
      cb.checked = result.engines.includes(cb.dataset.engine);
    });
    const shodanCb   = document.querySelector('.engine-checkbox[data-engine="shodan"]');
    const shodanNote = document.getElementById('shodan-disclaimer');
    if (shodanCb && shodanNote) shodanNote.hidden = !shodanCb.checked;
    window.builder._checkTpsMode();
    window.builder._updatePreview();
    switchTab('builder');
  },

  // ── Flash success banner ───────────────────────────────────────
  _showBanner(msg) {
    const banner = document.getElementById('wizard-banner');
    const text   = document.getElementById('wizard-banner-text');
    if (!banner || !text) return;
    text.textContent = msg;
    banner.hidden = false;
    setTimeout(() => { banner.hidden = true; }, 3000);
  },
};

// ══════════════════════════════════════════════════════════════
// OPERATOR TOOLTIP
// ══════════════════════════════════════════════════════════════
function initOperatorTooltip() {
  const helpBtn = document.getElementById('op-help-btn');
  const panel   = document.getElementById('op-tooltip-panel');
  const elName  = document.getElementById('op-tip-name');
  const elDesc  = document.getElementById('op-tip-desc');
  const elEx    = document.getElementById('op-tip-example');
  const sel     = document.getElementById('op-select');
  if (!helpBtn || !panel || !sel) return;

  function updatePanel() {
    const key = sel.value;
    const def = OPERATORS[key];
    if (!def) {
      elName.textContent = key;
      elDesc.textContent = '';
      elEx.textContent   = '';
      return;
    }
    elName.textContent = def.label || key;
    elDesc.textContent = def.description || '';
    const eg = def.placeholder ? def.syntax.replace('{value}', def.placeholder) : def.syntax;
    elEx.textContent   = eg ? `Example: ${eg}` : '';
  }

  helpBtn.addEventListener('click', () => {
    const open = !panel.hidden;
    panel.hidden = open;
    helpBtn.classList.toggle('op-help-active', !open);
    if (!open) updatePanel();
  });

  sel.addEventListener('change', () => {
    if (!panel.hidden) updatePanel();
  });
}

// ══════════════════════════════════════════════════════════════
// BUILDER EMPTY STATE — quick-start chip wiring
// ══════════════════════════════════════════════════════════════
function initBuilderEmptyState() {
  document.querySelectorAll('.beu-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      DorkWizard.answers.intent = btn.dataset.intent;
      DorkWizard.answers.chips  = new Set();
      DorkWizard.answers.fields = {};
      DorkWizard.step = 2;
      DorkWizard.open();
      // Override _render to start at step 2 without animation delay
      requestAnimationFrame(() => requestAnimationFrame(() => DorkWizard._render()));
    });
  });
}

// ══════════════════════════════════════════════════════════════
// ONBOARDING — Welcome modal + Mini tour
// ══════════════════════════════════════════════════════════════
const Onboarding = {
  _tourStep: 0,
  _highlighted: null,

  TOUR_STEPS: [
    { selector: '#nav-hamburger',  title: 'Navigation', text: 'Navigation lives here — switch between Builder, Templates, History, and more.' },
    { selector: '#btn-wizard',     title: 'Wizard Mode', text: 'New to dorking? The Wizard builds your search automatically — just answer a few questions.' },
    { selector: '#operator-list',  title: 'Operators', text: 'Add search operators here to construct your query. Each operator narrows or focuses your search.' },
    { selector: '#query-preview',  title: 'Live Preview', text: 'Your finished dork appears here in real time. Copy it or launch it directly to any search engine.' },
    { selector: '#engine-grid',    title: 'Search Engines', text: 'Choose which search engines to target. Launch all at once with one click.' },
  ],

  init(deferWelcome = false) {
    this._createDOM();
    if (!deferWelcome && !localStorage.getItem('dorkforge_visited')) {
      this._showWelcome();
    }
  },

  _createDOM() {
    // Welcome modal
    const wel = document.createElement('div');
    wel.id = 'onboard-overlay';
    wel.innerHTML = `
      <div id="onboard-modal">
        <div class="onb-logo">WELCOME TO DORKFORGE</div>
        <div class="onb-version">v1.0 — Open Source OSINT Dork Builder</div>
        <div class="onb-body">
          <p>DorkForge helps you build powerful Google search queries called "dorks" — special phrases that uncover information Google's normal search hides from view.</p>
          <p>Use it to research people, companies, exposed files, and much more. Everything runs in your browser — no accounts, no tracking, no data sent anywhere.</p>
        </div>
        <div class="onb-features">
          <div class="onb-feat"><span class="onb-feat-icon">⚡</span><span class="onb-feat-label">Wizard Mode</span><span class="onb-feat-desc">New? Start here</span></div>
          <div class="onb-feat"><span class="onb-feat-icon">📁</span><span class="onb-feat-label">Templates</span><span class="onb-feat-desc">90+ ready searches</span></div>
          <div class="onb-feat"><span class="onb-feat-icon">🔍</span><span class="onb-feat-label">Builder</span><span class="onb-feat-desc">Custom queries</span></div>
        </div>
        <div class="onb-actions">
          <button id="onb-tour" class="onb-btn-tour">SHOW ME AROUND</button>
          <button id="onb-skip" class="onb-btn-skip">SKIP — TAKE ME TO THE APP</button>
        </div>
      </div>`;
    document.body.appendChild(wel);

    document.getElementById('onb-tour').addEventListener('click', () => {
      localStorage.setItem('dorkforge_visited', 'true');
      this._hideWelcome();
      this._startTour();
    });
    document.getElementById('onb-skip').addEventListener('click', () => {
      localStorage.setItem('dorkforge_visited', 'true');
      this._hideWelcome();
    });

    // Tour overlay
    const tour = document.createElement('div');
    tour.id = 'tour-overlay';
    tour.hidden = true;
    tour.innerHTML = `
      <div id="tour-tooltip" class="tour-tooltip">
        <div class="tour-tip-title" id="tour-tip-title"></div>
        <div class="tour-tip-text" id="tour-tip-text"></div>
        <div class="tour-controls">
          <div class="tour-dots" id="tour-dots"></div>
          <div class="tour-btns">
            <button class="tour-btn" id="tour-prev">← PREV</button>
            <button class="tour-btn tour-btn-next" id="tour-next">NEXT →</button>
          </div>
        </div>
      </div>`;
    document.body.appendChild(tour);

    document.getElementById('tour-prev').addEventListener('click', () => this._goTourStep(this._tourStep - 1));
    document.getElementById('tour-next').addEventListener('click', () => {
      if (this._tourStep >= this.TOUR_STEPS.length - 1) this._endTour();
      else this._goTourStep(this._tourStep + 1);
    });
    tour.addEventListener('click', e => { if (e.target === tour) this._endTour(); });
  },

  _showWelcome() {
    document.getElementById('onboard-overlay').style.display = 'flex';
  },

  _hideWelcome() {
    document.getElementById('onboard-overlay').style.display = 'none';
  },

  _startTour() {
    this._tourStep = 0;
    document.getElementById('tour-overlay').hidden = false;
    this._renderTourStep();
  },

  _goTourStep(n) {
    this._clearHighlight();
    this._tourStep = Math.max(0, Math.min(n, this.TOUR_STEPS.length - 1));
    this._renderTourStep();
  },

  _renderTourStep() {
    const step = this.TOUR_STEPS[this._tourStep];
    const el   = document.querySelector(step.selector);

    this._clearHighlight();
    if (el) {
      el.classList.add('tour-highlight');
      this._highlighted = el;
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    document.getElementById('tour-tip-title').textContent = step.title;
    document.getElementById('tour-tip-text').textContent  = step.text;

    const dots = this.TOUR_STEPS.map((_, i) =>
      `<span class="tour-dot ${i === this._tourStep ? 'tour-dot-active' : ''}">●</span>`
    ).join('');
    document.getElementById('tour-dots').innerHTML = dots;

    const prevBtn = document.getElementById('tour-prev');
    const nextBtn = document.getElementById('tour-next');
    prevBtn.disabled = this._tourStep === 0;
    nextBtn.textContent = this._tourStep >= this.TOUR_STEPS.length - 1 ? 'FINISH' : 'NEXT →';

    if (el) {
      this._positionTooltip(el);
    }
  },

  _positionTooltip(el) {
    const tooltip = document.getElementById('tour-tooltip');
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight;
    const vw = window.innerWidth;

    tooltip.style.position = 'fixed';
    tooltip.style.maxWidth = '320px';

    const below = rect.bottom + 16 + 160 < vh;
    if (below) {
      tooltip.style.top  = `${rect.bottom + 12}px`;
      tooltip.style.left = `${Math.min(Math.max(rect.left, 12), vw - 340)}px`;
    } else {
      tooltip.style.top  = `${Math.max(rect.top - 170, 60)}px`;
      tooltip.style.left = `${Math.min(Math.max(rect.left, 12), vw - 340)}px`;
    }
  },

  _clearHighlight() {
    if (this._highlighted) {
      this._highlighted.classList.remove('tour-highlight');
      this._highlighted = null;
    }
  },

  _endTour() {
    this._clearHighlight();
    document.getElementById('tour-overlay').hidden = true;
  },
};

// ══════════════════════════════════════════════════════════════
// HOTKEY OVERLAY
// ══════════════════════════════════════════════════════════════
const HotkeyOverlay = {
  _open: false,

  init() {
    this._createDOM();
  },

  _createDOM() {
    const el = document.createElement('div');
    el.id = 'hotkey-overlay';
    el.hidden = true;
    el.innerHTML = `
      <div id="hotkey-modal">
        <div class="hk-header">
          <span class="hk-title">KEYBOARD SHORTCUTS</span>
          <button class="hk-close" id="hk-close">×</button>
        </div>
        <table class="hk-table">
          <tbody>
            <tr><td class="hk-key">Ctrl + Enter</td><td class="hk-desc">Launch current query</td></tr>
            <tr><td class="hk-key">Ctrl + K</td><td class="hk-desc">Focus operator selector</td></tr>
            <tr><td class="hk-key">Ctrl + Z</td><td class="hk-desc">Remove last operator</td></tr>
            <tr><td class="hk-key">W</td><td class="hk-desc">Open Wizard (when not typing)</td></tr>
            <tr><td class="hk-key">T</td><td class="hk-desc">Go to Templates tab</td></tr>
            <tr><td class="hk-key">H</td><td class="hk-desc">Go to History tab</td></tr>
            <tr><td class="hk-key">Escape</td><td class="hk-desc">Close any open panel/modal</td></tr>
            <tr><td class="hk-key">?</td><td class="hk-desc">Open/close this overlay</td></tr>
          </tbody>
        </table>
        <div class="hk-footer">Press Escape or ? to close</div>
      </div>`;
    document.body.appendChild(el);
    document.getElementById('hk-close').addEventListener('click', () => this.close());
    el.addEventListener('click', e => { if (e.target === el) this.close(); });
  },

  open() {
    document.getElementById('hotkey-overlay').hidden = false;
    this._open = true;
  },

  close() {
    document.getElementById('hotkey-overlay').hidden = true;
    this._open = false;
  },

  toggle() {
    this._open ? this.close() : this.open();
  },
};

// ── Global keyboard handler ────────────────────────────────────
function initGlobalHotkeys() {
  document.addEventListener('keydown', e => {
    const inInput = ['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName);

    // Escape — close topmost open panel
    if (e.key === 'Escape') {
      if (HotkeyOverlay._open)          { HotkeyOverlay.close(); return; }
      if (!document.getElementById('tour-overlay')?.hidden) { Onboarding._endTour(); return; }
      if (!document.getElementById('onboard-overlay')?.hidden) { return; }
      // wizard + nav handled by their own listeners
      return;
    }

    // ? — hotkey overlay (when not in input)
    if (e.key === '?' && !inInput) {
      e.preventDefault();
      HotkeyOverlay.toggle();
      return;
    }

    // Ctrl shortcuts
    if (e.ctrlKey || e.metaKey) {
      if (e.key === 'Enter') {
        e.preventDefault();
        window.builder?.launch?.();
        return;
      }
      if (e.key === 'k' || e.key === 'K') {
        e.preventDefault();
        document.getElementById('op-select')?.focus();
        return;
      }
      if (e.key === 'z' || e.key === 'Z') {
        if (!inInput) {
          e.preventDefault();
          const ops = window.builder?.operators;
          if (ops && ops.length > 0) window.builder.removeOperator(ops.length - 1);
        }
        return;
      }
      return;
    }

    // Single-key shortcuts — only when not typing
    if (inInput) return;

    if (e.key === 'w' || e.key === 'W') { DorkWizard.open(); return; }
    if (e.key === 't' || e.key === 'T') { switchTab('templates'); return; }
    if (e.key === 'h' || e.key === 'H') { switchTab('history'); return; }
  });
}

// ══════════════════════════════════════════════════════════════
// DORK STRENGTH METER
// ══════════════════════════════════════════════════════════════

function scoreQuery(operators) {
  if (!operators || operators.length === 0) return 0.0;

  let score = 0;
  const types = operators.map(o => o.type);
  const count = operators.length;

  // Operator count
  if (count >= 4) score += 2.5;
  else if (count === 3) score += 2.0;
  else if (count === 2) score += 1.5;
  else score += 1.0;

  // Diversity
  const uniqueTypes = new Set(types).size;
  if (uniqueTypes >= 4) score += 1.5;
  else if (uniqueTypes === 3) score += 1.0;
  else if (uniqueTypes === 2) score += 0.5;

  // Specificity bonuses
  if (types.includes('site'))                                        score += 1.5;
  if (types.includes('filetype') || types.includes('ext'))          score += 1.0;
  if (types.includes('intitle'))                                     score += 0.8;
  if (types.includes('inurl'))                                       score += 0.8;
  if (types.includes('intext'))                                      score += 0.5;
  if (types.includes('before') || types.includes('after'))          score += 0.7;
  if (types.includes('exact'))                                       score += 0.6;
  if (types.some(t => t.includes('_exclude') || t === 'exclude'))   score += 0.5;
  if (types.includes('OR'))                                          score += 0.3;

  // Penalties
  if (count === 1) score -= 0.5;
  if (uniqueTypes === 1 && count > 1) score -= 0.5;
  if (!types.includes('exact')) score -= 0.2;

  // site: with broad value (*.com / .net / .org etc.)
  const siteOps = operators.filter(o => o.type === 'site');
  if (siteOps.some(o => /^\*?\.(com|net|org|io|co)$/.test((o.value || '').trim()))) score -= 0.5;

  // intext: with single common word
  const commonWords = new Set(['password','login','admin','user','the','and','or','of','a']);
  const intextOps = operators.filter(o => o.type === 'intext');
  if (intextOps.some(o => {
    const words = (o.value || '').trim().split(/\s+/);
    return words.length === 1 && commonWords.has(words[0].toLowerCase());
  })) score -= 0.3;

  return Math.round(Math.min(10, Math.max(0, score)) * 10) / 10;
}

const StrengthMeter = {
  _current: 0,

  _tier(score) {
    if (score < 2.0) return { label: 'NO QUERY', color: '#6b7280', verdict: 'Add operators to begin building your search.' };
    if (score < 4.0) return { label: 'TOO BROAD', color: '#ef4444', verdict: 'This will return millions of unrelated results.' };
    if (score < 6.0) return { label: 'WEAK', color: '#f97316', verdict: 'Getting there — add more context to narrow results.' };
    if (score < 7.5) return { label: 'MODERATE', color: '#eab308', verdict: 'Decent query — a few more operators could sharpen this.' };
    if (score < 9.0) return { label: 'STRONG', color: '#84cc16', verdict: 'Good specificity — results should be fairly targeted.' };
    return { label: 'SURGICAL', color: '#00f0ff', verdict: 'Highly targeted query. Expect precise results.' };
  },

  _tips(operators) {
    const types = operators.map(o => o.type);
    const tips = [];
    const has = t => types.includes(t);

    if (!has('site'))
      tips.push('💡 Add site: to limit results to one domain');
    if (!has('filetype') && !has('ext') && (has('intext') || has('intitle')))
      tips.push('💡 Add filetype:pdf or filetype:xlsx to find specific files');
    if (!has('exact'))
      tips.push('💡 Wrap key phrases in quotes for exact matches: "phrase here"');
    if (operators.length === 1)
      tips.push('💡 Add more operators — each one narrows your results further');
    if (!has('before') && !has('after'))
      tips.push('💡 Add after:2023-01-01 to find only recent results');
    if (new Set(types).size === 1 && operators.length > 1)
      tips.push('💡 Mix operator types — combine site: with intitle: for better targeting');
    if (has('OR') && !has('site') && !has('filetype'))
      tips.push('💡 OR broadens results — pair it with site: to keep results focused');

    return tips.slice(0, 3);
  },

  update(operators) {
    const target = scoreQuery(operators);
    const tier = this._tier(target);

    const elScore   = document.getElementById('sm-score');
    const elLabel   = document.getElementById('sm-label');
    const elFill    = document.getElementById('sm-fill');
    const elVerdict = document.getElementById('sm-verdict');
    const elTips    = document.getElementById('sm-tips');
    if (!elScore) return;

    // Animate score number
    const from = this._current;
    this._current = target;
    const start = performance.now();
    const dur = 300;
    const step = now => {
      const t = Math.min(1, (now - start) / dur);
      const ease = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      elScore.textContent = (from + (target - from) * ease).toFixed(1);
      if (t < 1) requestAnimationFrame(step);
      else elScore.textContent = target.toFixed(1);
    };
    requestAnimationFrame(step);

    elScore.style.color   = tier.color;
    elLabel.textContent   = tier.label;
    elLabel.style.color   = tier.color;
    elFill.style.width    = `${(target / 10) * 100}%`;
    elFill.style.background = tier.color;
    elVerdict.textContent = tier.verdict;

    if (target < 8.0 && operators.length > 0) {
      const tips = this._tips(operators);
      elTips.innerHTML = tips.map(t => `<div class="sm-tip">${t}</div>`).join('');
    } else {
      elTips.innerHTML = '';
    }
  },
};

// ══════════════════════════════════════════════════════════════
// HUMAN VERIFICATION & ETHICS GATE
// ══════════════════════════════════════════════════════════════

const VerificationGate = {
  _challengeDone: false,
  _agreeDone: false,
  _WEEK_MS: 7 * 24 * 60 * 60 * 1000,

  // Returns true if gate was shown (caller should defer onboarding)
  init() {
    const stored = localStorage.getItem('dorkforge_verified');
    const ts = stored ? parseInt(stored, 10) : 0;
    const needsGate = !ts || (Date.now() - ts) >= this._WEEK_MS;

    this._renderFooter(stored ? new Date(ts) : null);

    if (!needsGate) {
      document.getElementById('verify-overlay').classList.add('verify-hidden');
      return false;
    }

    this._show();
    return true;
  },

  _show() {
    document.body.style.overflow = 'hidden';

    const type = Math.floor(Math.random() * 3);
    const container = document.getElementById('verify-challenge');
    if (type === 0) this._initChallengeA(container);
    else if (type === 1) this._initChallengeB(container);
    else this._initChallengeC(container);

    document.getElementById('verify-agree-check').addEventListener('change', e => {
      this._agreeDone = e.target.checked;
      this._checkReady();
    });

    document.getElementById('verify-enter-btn').addEventListener('click', () => {
      if (!this._challengeDone || !this._agreeDone) return;
      this._dismiss();
    });
  },

  _challengeComplete() {
    this._challengeDone = true;
    const ok = document.getElementById('verify-human-ok');
    if (ok) ok.hidden = false;
    this._checkReady();
  },

  _checkReady() {
    const btn = document.getElementById('verify-enter-btn');
    if (btn) btn.disabled = !(this._challengeDone && this._agreeDone);
  },

  _dismiss() {
    localStorage.setItem('dorkforge_verified', String(Date.now()));
    const overlay = document.getElementById('verify-overlay');
    overlay.classList.add('verify-fade-out');
    document.body.style.overflow = '';
    setTimeout(() => {
      overlay.classList.add('verify-hidden');
      overlay.classList.remove('verify-fade-out');
      // Show welcome modal if first visit
      if (!localStorage.getItem('dorkforge_visited')) {
        Onboarding._showWelcome();
      }
    }, 420);
  },

  _renderFooter(lastDate) {
    const el = document.getElementById('verify-footer-note');
    if (!el) return;
    el.textContent = lastDate
      ? `This verification resets weekly. Last verified: ${lastDate.toLocaleDateString()}`
      : 'This verification resets weekly. Last verified: Never';
  },

  // ── Challenge A: click amber squares ──────────────────────────
  _initChallengeA(container) {
    const TOTAL = 16;
    const amberCount = 4 + Math.floor(Math.random() * 3); // 4–6
    const amberSet = new Set();
    while (amberSet.size < amberCount) amberSet.add(Math.floor(Math.random() * TOTAL));

    const clicked = new Set();

    container.innerHTML = `
      <p class="vc-label">Click all amber squares to continue</p>
      <div class="vc-grid" id="vc-grid-a"></div>`;

    const grid = container.querySelector('#vc-grid-a');

    for (let i = 0; i < TOTAL; i++) {
      const sq = document.createElement('button');
      sq.type = 'button';
      sq.className = 'vc-square' + (amberSet.has(i) ? ' vc-square-amber' : '');
      sq.dataset.isAmber = amberSet.has(i) ? '1' : '0';
      sq.dataset.idx = i;

      sq.addEventListener('click', () => {
        if (this._challengeDone) return;
        if (sq.dataset.isAmber === '1') {
          clicked.add(i);
          sq.classList.add('vc-square-done');
          sq.textContent = '✓';
          if (clicked.size === amberCount) this._challengeComplete();
        } else {
          sq.classList.add('vc-square-error');
          setTimeout(() => {
            clicked.clear();
            grid.querySelectorAll('.vc-square-done').forEach(s => {
              s.classList.remove('vc-square-done');
              s.textContent = '';
            });
            sq.classList.remove('vc-square-error');
          }, 650);
        }
      });
      grid.appendChild(sq);
    }
  },

  // ── Challenge B: type the code ────────────────────────────────
  _initChallengeB(container) {
    const CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    const makeCode = () => Array.from({ length: 6 }, () => CHARS[Math.floor(Math.random() * CHARS.length)]).join('');
    const renderCode = code => code.split('').map(ch => {
      const color = Math.random() > 0.5 ? '#f59e0b' : '#84cc16';
      const ls = (Math.random() * 0.18 - 0.04).toFixed(3);
      return `<span style="color:${color};letter-spacing:${ls}em">${ch}</span>`;
    }).join('');

    let code = makeCode();

    container.innerHTML = `
      <p class="vc-label">Type the code shown below to continue</p>
      <div class="vc-code-display" id="vc-code-disp">${renderCode(code)}</div>
      <input type="text" id="vc-code-input" class="vc-code-input"
             placeholder="Enter code…" maxlength="6"
             autocomplete="off" spellcheck="false" />`;

    const input = container.querySelector('#vc-code-input');
    const disp  = container.querySelector('#vc-code-disp');

    input.addEventListener('input', () => {
      if (this._challengeDone) return;
      if (input.value.toUpperCase() === code) {
        this._challengeComplete();
        input.disabled = true;
      } else if (input.value.length >= 6) {
        input.classList.add('vc-shake');
        setTimeout(() => {
          input.classList.remove('vc-shake');
          input.value = '';
          code = makeCode();
          disp.innerHTML = renderCode(code);
        }, 600);
      }
    });
  },

  // ── Challenge C: drag to confirm ──────────────────────────────
  _initChallengeC(container) {
    container.innerHTML = `
      <div class="vc-drag-track" id="vc-drag-track">
        <div class="vc-drag-fill" id="vc-drag-fill"></div>
        <div class="vc-drag-thumb" id="vc-drag-thumb" tabindex="0"></div>
        <span class="vc-drag-label" id="vc-drag-label">DRAG TO CONFIRM YOU ARE HUMAN →</span>
      </div>`;

    const track = container.querySelector('#vc-drag-track');
    const fill  = container.querySelector('#vc-drag-fill');
    const thumb = container.querySelector('#vc-drag-thumb');
    const label = container.querySelector('#vc-drag-label');

    const THUMB_W = 44;
    const getMax = () => track.getBoundingClientRect().width - THUMB_W;

    const setPos = clientX => {
      if (this._challengeDone) return;
      const rect = track.getBoundingClientRect();
      const max = getMax();
      const pos = Math.max(0, Math.min(max, clientX - rect.left - THUMB_W / 2));
      thumb.style.left = pos + 'px';
      fill.style.width = (pos / max * 100) + '%';
      if (pos / max >= 0.9) {
        thumb.style.left = max + 'px';
        fill.style.width = '100%';
        fill.style.background = 'var(--amber)';
        label.textContent = '✓ CONFIRMED';
        this._challengeComplete();
      }
    };

    thumb.addEventListener('pointerdown', e => {
      e.preventDefault();
      thumb.setPointerCapture(e.pointerId);
      thumb.addEventListener('pointermove', onMove);
      thumb.addEventListener('pointerup', onUp, { once: true });
      thumb.addEventListener('pointercancel', onUp, { once: true });
    });

    const onMove = e => setPos(e.clientX);
    const onUp = () => thumb.removeEventListener('pointermove', onMove);
  },
};

// ══════════════════════════════════════════════════════════════
// BOOT
// ══════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  // Verification gate must run first — hides itself or blocks app access
  const gateShown = VerificationGate.init();

  initTabs();
  initSettings();
  initExport();
  themeEngine.init();

  window.builder = new Builder();
  console.log('[DorkForge] preview element:', document.getElementById('query-preview'));
  TemplateManager.init();
  renderHistory();
  initLearn();
  initMobile();
  DorkWizard.init();
  initOperatorTooltip();
  initBuilderEmptyState();
  Onboarding.init(gateShown); // defer welcome modal if gate is active
  HotkeyOverlay.init();
  initGlobalHotkeys();

  // Restore query from share URL hash  (#q=site:example.com+...)
  if (location.hash.startsWith('#q=')) {
    const raw = decodeURIComponent(location.hash.slice(3));
    if (raw.trim()) _loadQueryString(raw);
  }

  console.log('DorkForge v1.0 loaded');
});
