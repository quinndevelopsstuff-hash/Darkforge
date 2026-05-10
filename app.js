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
// SMART FORM FIELDS CONFIG
// All possible input fields across people & company templates
// ══════════════════════════════════════════════════════════════
const FORM_FIELDS = {
  // Person fields
  firstname:   { label: 'First Name',     placeholder: 'John',           type: 'text',   required: false },
  lastname:    { label: 'Last Name',      placeholder: 'Doe',            type: 'text',   required: false },
  fullname:    { label: 'Full Name',      placeholder: 'John Doe',       type: 'text',   required: false },
  city:        { label: 'City',           placeholder: 'Chicago',        type: 'text',   required: false },
  state:       { label: 'State',          placeholder: 'Illinois',       type: 'text',   required: false },
  zip:         { label: 'ZIP Code',       placeholder: '60601',          type: 'text',   required: false },
  phone:       { label: 'Phone Number',   placeholder: '5551234567',     type: 'tel',    required: false },
  email:       { label: 'Email Address',  placeholder: 'john@email.com', type: 'email',  required: false },
  username:    { label: 'Username',       placeholder: 'jdoe92',         type: 'text',   required: false },
  age:         { label: 'Age',            placeholder: '34',             type: 'number', required: false },
  employer:    { label: 'Employer',       placeholder: 'Acme Corp',      type: 'text',   required: false },
  address:     { label: 'Street Address', placeholder: '123 Main St',    type: 'text',   required: false },
  // Company fields
  companyname: { label: 'Company Name',   placeholder: 'Acme Corp',      type: 'text',   required: false },
  domain:      { label: 'Domain',         placeholder: 'acmecorp.com',   type: 'text',   required: false },
  industry:    { label: 'Industry',       placeholder: 'Technology',     type: 'text',   required: false },
  location:    { label: 'City / Region',  placeholder: 'San Francisco',  type: 'text',   required: false },
  employee:    { label: 'Employee Name',  placeholder: 'Jane Smith',     type: 'text',   required: false },
  jobtitle:    { label: 'Job Title',      placeholder: 'Engineer',       type: 'text',   required: false },
};

// Categories that get smart expandable forms instead of direct Builder load
const SMART_FORM_CATEGORIES = new Set(['person', 'company', 'people']);

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

  addTool(toolType, input, resources) {
    const labels = { image: 'IMAGE RECON', email: 'EMAIL RECON', username: 'USERNAME RECON', ip: 'IP RECON', scrubber: 'METADATA SCAN', hash: 'HASH TOOL' };
    const entries = this.load();
    entries.unshift({
      id: Date.now(),
      date: new Date().toISOString(),
      toolType,
      query: `${labels[toolType] || 'TOOL'}: ${input}`,
      input,
      resources,   // [{label, url}]
      engines: [],
    });
    if (entries.length > 200) entries.length = 200;
    this.save(entries);
  },
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
    this._conflictRafId = null;
    this._baseBuilderTitle = 'QUERY BUILDER';

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
    const _baseTitle = count
      ? `QUERY BUILDER (${count} operator${count !== 1 ? 's' : ''})`
      : 'QUERY BUILDER';
    this._baseBuilderTitle = _baseTitle;
    this.elBuilderTitle.textContent = _baseTitle;

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

    // Conflict detection — schedule DOM updates via rAF to avoid layout thrash
    const _selectedEngines = this._getSelectedEngines();
    const _detectedConflicts = conflictDetector.analyze(this.operators, _selectedEngines);
    if (this._conflictRafId) cancelAnimationFrame(this._conflictRafId);
    this._conflictRafId = requestAnimationFrame(() => {
      renderConflicts(_detectedConflicts);
      this._conflictRafId = null;
    });
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

    // Tool entries render differently
    if (e.toolType) {
      const resCount = Array.isArray(e.resources) ? e.resources.length : 0;
      return `<tr class="history-tool-row">
        <td class="history-date">${_esc(date)}</td>
        <td class="history-query"><code>${_esc(e.query || '')}</code></td>
        <td class="history-engines">${resCount ? `${resCount} resources` : '—'}</td>
        <td class="history-actions">
          <button class="btn btn-sm" data-action="rerun-tool" data-id="${e.id}">Re-run</button>
          <button class="btn btn-sm btn-danger-outline" data-action="delete" data-id="${e.id}">Delete</button>
        </td>
      </tr>`;
    }

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

      // Re-run tool entries: reopen all resource tabs
      if (action === 'rerun-tool') {
        const target = document.getElementById('setting-link-target')?.value || '_blank';
        (entry.resources || []).forEach(r => window.open(r.url, target));
        return;
      }

      // Edit or Re-run: restore query to builder
      switchTab('builder');
      window.builder.reset();
      _loadQueryString(entry.query || '');

      if (action === 'rerun') {
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
  tools:     'TOOLS_',
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
  { id: 'auth',       icon: '', label: 'Auth & Login' },
  { id: 'documents',  icon: '', label: 'Exposed Documents' },
  { id: 'directories',icon: '', label: 'Open Directories' },
  { id: 'cameras',    icon: '', label: 'Cameras & IoT' },
  { id: 'credentials',icon: '', label: 'Config & Credentials' },
  { id: 'person',     icon: '', label: 'Person OSINT' },
  { id: 'company',    icon: '', label: 'Company / Org Recon' },
  { id: 'code',       icon: '', label: 'Code & Dev Secrets' },
  { id: 'email',      icon: '', label: 'Email & Comms' },
  { id: 'database',   icon: '', label: 'Database & Logs' },
  { id: 'paste',      icon: '', label: 'Paste & Leak Sites' },
  { id: 'infra',      icon: '', label: 'Subdomain & Infra' },
  { id: 'social',     icon: '', label: 'Social Media OSINT' },
  { id: 'government', icon: '', label: 'Gov & Public Records' },
  { id: 'darkweb',    icon: '', label: 'Dark Web Adjacent' },
  { id: 'people',     icon: '', label: 'People Search' },
];

// ══════════════════════════════════════════════════════════════
// TEMPLATES DATA  (166 templates across 16 categories)
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
  { id: 'cam-axis', name: 'Axis Network Cameras', category: 'cameras',
    engines: ['google','shodan'],
    description: 'Exposed Axis brand IP camera admin and live-view panels.',
    operators: [
      {type:'intitle',value:'"Axis"'},{type:'inurl',value:'axis-cgi'},
      {type:'OR',value:''},{type:'inurl',value:'view/index.shtml'},
    ]},
  { id: 'cam-hikvision', name: 'Hikvision DVR / NVR', category: 'cameras',
    engines: ['google','shodan'],
    description: 'Hikvision DVR and NVR web interfaces exposed online.',
    operators: [
      {type:'intitle',value:'"Hikvision"'},{type:'OR',value:''},
      {type:'inurl',value:'doc/page/login.asp'},
    ]},
  { id: 'cam-dahua', name: 'Dahua Camera Systems', category: 'cameras',
    engines: ['google','shodan'],
    description: 'Dahua IP camera and NVR login pages accessible online.',
    operators: [
      {type:'intitle',value:'"Dahua"'},{type:'OR',value:''},
      {type:'inurl',value:'RPC2_Login'},
    ]},
  { id: 'cam-foscam', name: 'Foscam IP Cameras', category: 'cameras',
    engines: ['google','bing'],
    description: 'Foscam wireless IP camera admin and live-view pages.',
    operators: [
      {type:'intitle',value:'"Foscam"'},{type:'OR',value:''},
      {type:'inurl',value:'index.htm'},
    ]},
  { id: 'cam-vivotek', name: 'Vivotek Camera Panels', category: 'cameras',
    engines: ['google','shodan'],
    description: 'Vivotek network camera admin interfaces exposed online.',
    operators: [
      {type:'intitle',value:'"VIVOTEK"'},{type:'OR',value:''},
      {type:'inurl',value:'live.html'},
    ]},
  { id: 'cam-amcrest', name: 'Amcrest Camera Interfaces', category: 'cameras',
    engines: ['google','shodan'],
    description: 'Amcrest IP camera login and live-view pages.',
    operators: [
      {type:'intitle',value:'"Amcrest"'},{type:'OR',value:''},
      {type:'inurl',value:'login.asp'},
    ]},
  { id: 'cam-ubiquiti', name: 'Ubiquiti UniFi Controllers', category: 'cameras',
    engines: ['google','shodan'],
    description: 'Ubiquiti UniFi network and camera controller admin pages.',
    operators: [
      {type:'intitle',value:'"UniFi"'},{type:'OR',value:''},
      {type:'inurl',value:'manage/account/login'},
    ]},
  { id: 'cam-mikrotik', name: 'MikroTik Router Admin', category: 'cameras',
    engines: ['google','shodan'],
    description: 'MikroTik router and wireless admin interfaces.',
    operators: [
      {type:'intitle',value:'"MikroTik"'},{type:'OR',value:''},
      {type:'inurl',value:'winbox'},
    ]},
  { id: 'cam-tp-link', name: 'TP-Link Device Admin', category: 'cameras',
    engines: ['google','bing'],
    description: 'TP-Link router, camera, and switch admin login pages.',
    operators: [
      {type:'intitle',value:'"TP-LINK"'},{type:'OR',value:''},
      {type:'intitle',value:'"TL-"'},
    ]},
  { id: 'cam-dvr-login', name: 'Generic DVR Login Pages', category: 'cameras',
    engines: ['google','shodan'],
    description: 'Generic digital video recorder login pages exposed online.',
    operators: [
      {type:'intitle',value:'"DVR"'},{type:'inurl',value:'login'},
      {type:'OR',value:''},{type:'intitle',value:'"Digital Video Recorder"'},
    ]},
  { id: 'cam-nvr-interface', name: 'NVR Web Interfaces', category: 'cameras',
    engines: ['google','shodan'],
    description: 'Network video recorder web management interfaces.',
    operators: [
      {type:'intitle',value:'"NVR"'},{type:'inurl',value:'admin'},
      {type:'OR',value:''},{type:'intitle',value:'"Network Video Recorder"'},
    ]},
  { id: 'cam-baby-monitors', name: 'Baby Monitor Interfaces', category: 'cameras',
    engines: ['google','bing'],
    description: 'Unsecured baby monitor and nursery camera web interfaces.',
    operators: [
      {type:'intitle',value:'"baby monitor"'},{type:'OR',value:''},
      {type:'inurl',value:'liveview'},
    ]},
  { id: 'cam-traffic', name: 'Traffic Camera Systems', category: 'cameras',
    engines: ['google','bing'],
    description: 'Public and private traffic monitoring camera interfaces.',
    operators: [
      {type:'intitle',value:'"Traffic Camera"'},{type:'OR',value:''},
      {type:'inurl',value:'trafficcam'},
    ]},
  { id: 'cam-parking', name: 'Parking Surveillance Systems', category: 'cameras',
    engines: ['google','bing'],
    description: 'Parking lot and garage surveillance camera dashboards.',
    operators: [
      {type:'intitle',value:'"parking"'},{type:'inurl',value:'cam'},
      {type:'exact',value:'surveillance'},
    ]},
  { id: 'cam-smart-home', name: 'Smart Home Hub Interfaces', category: 'cameras',
    engines: ['google','bing'],
    description: 'Home Assistant and other smart home hub dashboards exposed online.',
    operators: [
      {type:'intitle',value:'"Home Assistant"'},{type:'OR',value:''},
      {type:'intitle',value:'"OpenHAB"'},
    ]},
  { id: 'cam-ptz-controls', name: 'PTZ Camera Controls', category: 'cameras',
    engines: ['google','shodan'],
    description: 'Pan-tilt-zoom camera control panels with live access.',
    operators: [
      {type:'intitle',value:'"PTZ"'},{type:'OR',value:''},
      {type:'inurl',value:'ptz'},{type:'inurl',value:'control'},
    ]},
  { id: 'cam-motion-detect', name: 'Motion Detection Systems', category: 'cameras',
    engines: ['google','shodan'],
    description: 'Motion detection camera system admin interfaces.',
    operators: [
      {type:'intitle',value:'"motion detection"'},{type:'inurl',value:'admin'},
      {type:'OR',value:''},{type:'inurl',value:'settings'},
    ]},
  { id: 'cam-iot-mqtt', name: 'MQTT Broker Admin Interfaces', category: 'cameras',
    engines: ['google','shodan'],
    description: 'MQTT broker and IoT message queue admin dashboards.',
    operators: [
      {type:'intitle',value:'"MQTT"'},{type:'OR',value:''},
      {type:'inurl',value:'mqtt'},{type:'inurl',value:'admin'},
    ]},
  { id: 'cam-iot-dashboard', name: 'IoT Device Dashboards', category: 'cameras',
    engines: ['google','shodan'],
    description: 'Grafana and Node-RED IoT dashboards with sensor data exposed online.',
    operators: [
      {type:'intitle',value:'"Grafana"'},{type:'OR',value:''},
      {type:'intitle',value:'"Node-RED"'},{type:'inurl',value:'dashboard'},
    ]},
  { id: 'cam-security-consoles', name: 'Multi-Camera Security Consoles', category: 'cameras',
    engines: ['google','shodan'],
    description: 'Multi-channel security console and NVR dashboards.',
    operators: [
      {type:'intitle',value:'"Security Console"'},{type:'OR',value:''},
      {type:'intitle',value:'"Video Management"'},
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
  { id: 'company-linkedin-employees', name: 'LinkedIn Employee Directory', category: 'company',
    engines: ['google','bing'],
    description: 'Find LinkedIn profiles of employees at a target company.',
    fields: ['companyname'],
    operators: [
      {type:'site',value:'linkedin.com/in'},{type:'exact',value:'[COMPANYNAME]'},
    ]},
  { id: 'company-executive-list', name: 'Executive & Leadership Team', category: 'company',
    engines: ['google','bing'],
    description: 'Identify C-suite executives and leadership at a target company.',
    fields: ['companyname'],
    operators: [
      {type:'exact',value:'[COMPANYNAME]'},{type:'exact',value:'CEO'},
      {type:'OR',value:''},{type:'exact',value:'CTO'},
      {type:'OR',value:''},{type:'exact',value:'CFO'},
    ]},
  { id: 'company-breach-history', name: 'Data Breach History', category: 'company',
    engines: ['google','bing'],
    description: 'Public news and reports of data breaches involving a company.',
    fields: ['companyname'],
    operators: [
      {type:'exact',value:'[COMPANYNAME]'},{type:'exact',value:'data breach'},
      {type:'OR',value:''},{type:'exact',value:'security incident'},
    ]},
  { id: 'company-financial-reports', name: 'SEC Financial Filings', category: 'company',
    engines: ['google','bing'],
    description: 'SEC 10-K and 10-Q annual and quarterly filings for a company.',
    fields: ['companyname','domain'],
    operators: [
      {type:'site',value:'sec.gov'},{type:'exact',value:'[COMPANYNAME]'},
    ]},
  { id: 'company-press-releases', name: 'Press Release Archive', category: 'company',
    engines: ['google','bing'],
    description: 'Indexed press releases and official announcements from a company.',
    fields: ['companyname','domain'],
    operators: [
      {type:'exact',value:'[COMPANYNAME]'},{type:'exact',value:'press release'},
      {type:'OR',value:''},{type:'inurl',value:'press-release'},
    ]},
  { id: 'company-patent-filings', name: 'Patent & IP Filings', category: 'company',
    engines: ['google','bing'],
    description: 'Patent applications and IP filings attributed to a company.',
    fields: ['companyname'],
    operators: [
      {type:'site',value:'patents.google.com'},{type:'exact',value:'[COMPANYNAME]'},
      {type:'OR',value:''},{type:'site',value:'uspto.gov'},
    ]},
  { id: 'company-vendor-contracts', name: 'Government Vendor Contracts', category: 'company',
    engines: ['google','bing'],
    description: 'US government contracts awarded to a company via USASpending.gov.',
    fields: ['companyname'],
    operators: [
      {type:'site',value:'usaspending.gov'},{type:'exact',value:'[COMPANYNAME]'},
      {type:'OR',value:''},{type:'site',value:'sam.gov'},
    ]},
  { id: 'company-board-members', name: 'Board Members & Advisors', category: 'company',
    engines: ['google','bing'],
    description: 'Identify board of directors and advisory board members.',
    fields: ['companyname'],
    operators: [
      {type:'exact',value:'[COMPANYNAME]'},{type:'exact',value:'board of directors'},
      {type:'OR',value:''},{type:'exact',value:'advisory board'},
    ]},
  { id: 'company-glassdoor', name: 'Glassdoor Employee Reviews', category: 'company',
    engines: ['google','bing'],
    description: 'Glassdoor employee reviews and ratings for a company.',
    fields: ['companyname'],
    operators: [
      {type:'site',value:'glassdoor.com'},{type:'exact',value:'[COMPANYNAME]'},
    ]},
  { id: 'company-lawsuit-records', name: 'Lawsuit & Litigation Records', category: 'company',
    engines: ['google','bing'],
    description: 'Publicly accessible lawsuit and legal action records naming a company.',
    fields: ['companyname'],
    operators: [
      {type:'exact',value:'[COMPANYNAME]'},{type:'exact',value:'lawsuit'},
      {type:'OR',value:''},{type:'exact',value:'litigation'},
    ]},
  { id: 'company-regulatory-filings', name: 'Regulatory & EDGAR Filings', category: 'company',
    engines: ['google','bing'],
    description: 'SEC EDGAR filings including S-1, DEF 14A, and 8-K forms.',
    fields: ['companyname'],
    operators: [
      {type:'site',value:'sec.gov'},{type:'exact',value:'[COMPANYNAME]'},
      {type:'exact',value:'10-K'},{type:'OR',value:''},
      {type:'exact',value:'8-K'},
    ]},
  { id: 'company-crunchbase', name: 'Crunchbase Funding Profile', category: 'company',
    engines: ['google','bing'],
    description: 'Crunchbase startup profile with funding rounds and investors.',
    fields: ['companyname'],
    operators: [
      {type:'site',value:'crunchbase.com'},{type:'exact',value:'[COMPANYNAME]'},
    ]},
  { id: 'company-social-profiles', name: 'Official Social Media Profiles', category: 'company',
    engines: ['google','bing'],
    description: 'Official social media accounts for a company across major platforms.',
    fields: ['companyname'],
    operators: [
      {type:'exact',value:'[COMPANYNAME]'},
      {type:'site',value:'twitter.com'},{type:'OR',value:''},
      {type:'site',value:'linkedin.com'},{type:'OR',value:''},
      {type:'site',value:'facebook.com'},
    ]},
  { id: 'company-github-org', name: 'GitHub Organization Repos', category: 'company',
    engines: ['github','google'],
    description: 'GitHub organization repositories and public code for a company.',
    fields: ['companyname','domain'],
    operators: [
      {type:'exact',value:'[COMPANYNAME]'},{type:'exact',value:'org'},
    ]},
  { id: 'company-news-coverage', name: 'News & Media Coverage', category: 'company',
    engines: ['google','bing'],
    description: 'Aggregate news coverage and media mentions for a company.',
    fields: ['companyname'],
    operators: [
      {type:'exact',value:'[COMPANYNAME]'},
      {type:'site',value:'reuters.com'},{type:'OR',value:''},
      {type:'site',value:'bloomberg.com'},{type:'OR',value:''},
      {type:'site',value:'wsj.com'},
    ]},
  { id: 'company-job-postings', name: 'Current Job Postings', category: 'company',
    engines: ['google','duckduckgo'],
    description: 'Current job listings revealing tech stack, team structure, and hiring needs.',
    fields: ['companyname','jobtitle'],
    operators: [
      {type:'exact',value:'[COMPANYNAME]'},{type:'exact',value:'[JOBTITLE]'},
      {type:'site',value:'linkedin.com/jobs'},{type:'OR',value:''},
      {type:'site',value:'indeed.com'},
    ]},
  { id: 'company-acquisitions', name: 'Acquisition History', category: 'company',
    engines: ['google','bing'],
    description: 'Companies acquired by or merged with a target organization.',
    fields: ['companyname'],
    operators: [
      {type:'exact',value:'[COMPANYNAME]'},{type:'exact',value:'acquired'},
      {type:'OR',value:''},{type:'exact',value:'acquires'},
    ]},
  { id: 'company-employee-docs', name: 'Exposed Employee Documents', category: 'company',
    engines: ['google','bing'],
    description: 'PDFs and spreadsheets from a company containing employee or org data.',
    fields: ['companyname'],
    operators: [
      {type:'exact',value:'[COMPANYNAME]'},{type:'exact',value:'employee'},
      {type:'filetype',value:'pdf'},{type:'OR',value:''},
      {type:'filetype',value:'xlsx'},
    ]},
  { id: 'company-revenue-data', name: 'Revenue & Earnings Data', category: 'company',
    engines: ['google','bing'],
    description: 'Annual revenue, earnings reports, and financial performance data.',
    fields: ['companyname'],
    operators: [
      {type:'exact',value:'[COMPANYNAME]'},{type:'exact',value:'annual revenue'},
      {type:'OR',value:''},{type:'exact',value:'earnings report'},
    ]},
  { id: 'company-investor-relations', name: 'Investor Relations Pages', category: 'company',
    engines: ['google','bing'],
    description: 'Official investor relations pages and shareholder information.',
    fields: ['companyname','domain'],
    operators: [
      {type:'site',value:'[DOMAIN]'},{type:'inurl',value:'investor'},
      {type:'OR',value:''},{type:'inurl',value:'ir'},
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
  { id: 'gov-foia-requests', name: 'FOIA Request Databases', category: 'government',
    tags: ['us-focused'],
    engines: ['google','bing'],
    description: 'Freedom of Information Act request portals and released document archives.',
    operators: [
      {type:'site',value:'.gov'},{type:'exact',value:'FOIA'},
      {type:'OR',value:''},{type:'site',value:'muckrock.com'},
    ]},
  { id: 'gov-federal-contracts', name: 'Federal Contract Awards', category: 'government',
    tags: ['us-focused'],
    engines: ['google','bing'],
    description: 'Federal contract awards and spending data on USASpending.gov.',
    operators: [
      {type:'site',value:'usaspending.gov'},{type:'exact',value:'contract award'},
    ]},
  { id: 'gov-lobbying-data', name: 'Lobbying Disclosure Records', category: 'government',
    tags: ['us-focused'],
    engines: ['google','bing'],
    description: 'Lobbying firm disclosures and client registrations from the Senate LDA.',
    operators: [
      {type:'site',value:'lda.senate.gov'},{type:'OR',value:''},
      {type:'site',value:'opensecrets.org'},{type:'exact',value:'lobbying'},
    ]},
  { id: 'gov-pacer-records', name: 'Federal Court Records (PACER)', category: 'government',
    tags: ['us-focused'],
    engines: ['google','bing'],
    description: 'Federal court filings and dockets from PACER and CourtListener.',
    operators: [
      {type:'site',value:'courtlistener.com'},{type:'OR',value:''},
      {type:'site',value:'pacer.gov'},
    ]},
  { id: 'gov-business-registry', name: 'State Business Registrations', category: 'government',
    tags: ['us-focused'],
    engines: ['google','bing'],
    description: 'Secretary of State business entity registration and filing databases.',
    operators: [
      {type:'site',value:'.gov'},{type:'exact',value:'business entity'},
      {type:'exact',value:'registered agent'},
    ]},
  { id: 'gov-nonprofit-990', name: 'IRS 990 Nonprofit Filings', category: 'government',
    tags: ['us-focused'],
    engines: ['google','bing'],
    description: 'IRS Form 990 nonprofit financial disclosures on ProPublica and NCCS.',
    operators: [
      {type:'site',value:'projects.propublica.org/nonprofits'},{type:'OR',value:''},
      {type:'site',value:'990finder.foundationcenter.org'},
    ]},
  { id: 'gov-osha-violations', name: 'OSHA Violation Records', category: 'government',
    tags: ['us-focused'],
    engines: ['google','bing'],
    description: 'OSHA workplace safety citations and enforcement actions.',
    operators: [
      {type:'site',value:'osha.gov'},{type:'exact',value:'citation'},
      {type:'OR',value:''},{type:'exact',value:'violation'},
    ]},
  { id: 'gov-epa-violations', name: 'EPA Enforcement Actions', category: 'government',
    tags: ['us-focused'],
    engines: ['google','bing'],
    description: 'EPA compliance and enforcement actions in the ECHO database.',
    operators: [
      {type:'site',value:'echo.epa.gov'},{type:'OR',value:''},
      {type:'site',value:'epa.gov'},{type:'exact',value:'enforcement'},
    ]},
  { id: 'gov-sex-offender', name: 'Sex Offender Registries', category: 'government',
    tags: ['us-focused'],
    engines: ['google','bing'],
    description: 'State sex offender registry lookups and the national NSOPW database.',
    operators: [
      {type:'site',value:'nsopw.gov'},{type:'OR',value:''},
      {type:'site',value:'.gov'},{type:'exact',value:'sex offender registry'},
    ]},
  { id: 'gov-medical-license', name: 'Medical Board License Lookup', category: 'government',
    tags: ['us-focused'],
    engines: ['google','bing'],
    description: 'State medical board physician license verification databases.',
    operators: [
      {type:'site',value:'.gov'},{type:'exact',value:'license verification'},
      {type:'exact',value:'physician'},{type:'OR',value:''},
      {type:'exact',value:'medical board'},
    ]},
  { id: 'gov-contractor-exclusions', name: 'SAM.gov Debarment & Exclusions', category: 'government',
    tags: ['us-focused'],
    engines: ['google','bing'],
    description: 'SAM.gov debarment and exclusion records for federal contractors.',
    operators: [
      {type:'site',value:'sam.gov'},{type:'exact',value:'exclusion'},
      {type:'OR',value:''},{type:'exact',value:'debarment'},
    ]},
  { id: 'gov-gsa-schedules', name: 'GSA Schedule Contracts', category: 'government',
    tags: ['us-focused'],
    engines: ['google','bing'],
    description: 'GSA Federal Supply Schedule contract vehicle holders.',
    operators: [
      {type:'site',value:'gsa.gov'},{type:'exact',value:'schedule contract'},
      {type:'OR',value:''},{type:'site',value:'gsaelibrary.gsa.gov'},
    ]},
  { id: 'gov-election-results', name: 'Official Election Results', category: 'government',
    tags: ['us-focused'],
    engines: ['google','bing'],
    description: 'Official state and county election result databases and vote tallies.',
    operators: [
      {type:'site',value:'.gov'},{type:'exact',value:'election results'},
      {type:'filetype',value:'csv'},{type:'OR',value:''},
      {type:'filetype',value:'xlsx'},
    ]},
  { id: 'gov-court-dockets', name: 'State Court Dockets', category: 'government',
    tags: ['us-focused'],
    engines: ['google','bing'],
    description: 'State-level court docket systems and case filing searches.',
    operators: [
      {type:'exact',value:'court docket'},{type:'site',value:'.gov'},
      {type:'OR',value:''},{type:'inurl',value:'docketview'},
    ]},
  { id: 'gov-voter-rolls', name: 'Voter Registration Records', category: 'government',
    tags: ['us-focused'],
    engines: ['google','bing'],
    description: 'State voter registration roll data and lookup portals.',
    operators: [
      {type:'site',value:'.gov'},{type:'exact',value:'voter registration'},
      {type:'filetype',value:'csv'},{type:'OR',value:''},
      {type:'filetype',value:'xlsx'},
    ]},

  // ── DARK WEB ADJACENT ────────────────────────────────────────
  { id: 'dw-paste-leaks', name: 'Paste Site Credential Leaks', category: 'darkweb',
    tags: ['surface-web-only'],
    engines: ['google','bing'],
    description: 'Pastes on public paste sites containing credential or data leaks.',
    operators: [
      {type:'site',value:'pastebin.com'},{type:'OR',value:''},
      {type:'site',value:'paste.ee'},{type:'OR',value:''},
      {type:'site',value:'ghostbin.com'},{type:'exact',value:'password'},
    ]},
  { id: 'dw-forum-credentials', name: 'Hacker Forum Credential Posts', category: 'darkweb',
    tags: ['surface-web-only'],
    engines: ['google','bing'],
    description: 'Credential dump threads indexed from clearnet hacker forums.',
    operators: [
      {type:'exact',value:'combo list'},{type:'OR',value:''},
      {type:'exact',value:'credential dump'},{type:'OR',value:''},
      {type:'exact',value:'database leak'},
    ]},
  { id: 'dw-telegram-leaks', name: 'Telegram Leak Channel Archives', category: 'darkweb',
    tags: ['surface-web-only'],
    engines: ['google','bing'],
    description: 'Archived or indexed Telegram leak channels on the public web.',
    operators: [
      {type:'site',value:'t.me'},{type:'exact',value:'leak'},
      {type:'OR',value:''},{type:'exact',value:'dump'},
    ]},
  { id: 'dw-breach-reports', name: 'Public Breach Notifications', category: 'darkweb',
    tags: ['surface-web-only'],
    engines: ['google','bing'],
    description: 'Official and third-party breach notification disclosures.',
    operators: [
      {type:'site',value:'haveibeenpwned.com'},{type:'OR',value:''},
      {type:'exact',value:'data breach notification'},
    ]},
  { id: 'dw-data-dumps', name: 'Clearnet Data Dump Repos', category: 'darkweb',
    tags: ['surface-web-only'],
    engines: ['google','github'],
    description: 'Data dump repositories and leak mirrors on clearnet sites.',
    operators: [
      {type:'exact',value:'database dump'},{type:'filetype',value:'sql'},
      {type:'OR',value:''},{type:'filetype',value:'csv'},{type:'exact',value:'leaked'},
    ]},
  { id: 'dw-onion-indexes', name: 'Onion Site Indexes on Clearnet', category: 'darkweb',
    tags: ['surface-web-only'],
    engines: ['google','bing'],
    description: 'Clearnet indexes and directories of .onion dark web sites.',
    operators: [
      {type:'exact',value:'onion site list'},{type:'OR',value:''},
      {type:'exact',value:'dark web directory'},
    ]},
  { id: 'dw-ransomware-victims', name: 'Ransomware Victim Blogs', category: 'darkweb',
    tags: ['surface-web-only'],
    engines: ['google','bing'],
    description: 'Ransomware group victim disclosure blogs mirrored on the clearnet.',
    operators: [
      {type:'exact',value:'ransomware victim'},{type:'OR',value:''},
      {type:'exact',value:'data stolen'},{type:'exact',value:'deadline'},
    ]},
  { id: 'dw-leaked-docs', name: 'Leaked Document Repositories', category: 'darkweb',
    tags: ['surface-web-only'],
    engines: ['google','bing'],
    description: 'Leaked internal documents hosted on clearnet leak sites.',
    operators: [
      {type:'site',value:'wikileaks.org'},{type:'OR',value:''},
      {type:'site',value:'ddosecrets.com'},
    ]},
  { id: 'dw-tor2web', name: 'Tor2Web Gateway Pages', category: 'darkweb',
    tags: ['surface-web-only'],
    engines: ['google','bing'],
    description: 'Tor2web gateways bridging onion sites to the clearnet.',
    operators: [
      {type:'inurl',value:'.onion.to'},{type:'OR',value:''},
      {type:'inurl',value:'.onion.sh'},
    ]},
  { id: 'dw-carding-refs', name: 'Carding Forum Clearnet References', category: 'darkweb',
    tags: ['surface-web-only'],
    engines: ['google','bing'],
    description: 'References to carding forums and stolen card discussions on clearnet.',
    operators: [
      {type:'exact',value:'carding forum'},{type:'OR',value:''},
      {type:'exact',value:'CC dump'},{type:'OR',value:''},
      {type:'exact',value:'fullz'},
    ]},
  { id: 'dw-darkweb-intel-reports', name: 'Dark Web Intelligence Reports', category: 'darkweb',
    tags: ['surface-web-only'],
    engines: ['google','bing'],
    description: 'Security vendor dark web monitoring and threat intelligence reports.',
    operators: [
      {type:'exact',value:'dark web monitoring'},{type:'filetype',value:'pdf'},
      {type:'OR',value:''},{type:'exact',value:'threat intelligence report'},
    ]},
  { id: 'dw-hacker-forum-indexed', name: 'Indexed Hacker Forum Content', category: 'darkweb',
    tags: ['surface-web-only'],
    engines: ['google','bing'],
    description: 'Hacker forum threads and posts indexed by public search engines.',
    operators: [
      {type:'site',value:'hackforums.net'},{type:'OR',value:''},
      {type:'site',value:'exploit.in'},
    ]},
  { id: 'dw-crypto-wallets', name: 'Exposed Crypto Wallet Addresses', category: 'darkweb',
    tags: ['surface-web-only'],
    engines: ['google','github'],
    description: 'Bitcoin and Ethereum wallet addresses exposed in public documents or code.',
    operators: [
      {type:'exact',value:'bitcoin wallet'},{type:'filetype',value:'txt'},
      {type:'OR',value:''},{type:'exact',value:'ethereum address'},
    ]},
  { id: 'dw-infostealer-logs', name: 'Infostealer Log References', category: 'darkweb',
    tags: ['surface-web-only'],
    engines: ['google','bing'],
    description: 'References to infostealer malware logs and stealer data on clearnet.',
    operators: [
      {type:'exact',value:'stealer log'},{type:'OR',value:''},
      {type:'exact',value:'redline stealer'},{type:'OR',value:''},
      {type:'exact',value:'raccoon stealer'},
    ]},
  { id: 'dw-breach-marketplaces', name: 'Breach Marketplace Mentions', category: 'darkweb',
    tags: ['surface-web-only'],
    engines: ['google','bing'],
    description: 'News and research coverage of dark web breach sale marketplaces.',
    operators: [
      {type:'exact',value:'breach marketplace'},{type:'OR',value:''},
      {type:'exact',value:'stolen data for sale'},{type:'OR',value:''},
      {type:'exact',value:'cybercriminal marketplace'},
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
// TEMPLATE FIELDS MAP
// Maps template id → fields[] for the smart expandable form.
// Only templates listed here get the FILL & LOAD ▼ button.
// ══════════════════════════════════════════════════════════════
const TEMPLATE_FIELDS_MAP = {
  // ── Person OSINT — basic ─────────────────────────────────────
  'person-name-social':    ['firstname','lastname'],
  'person-email-pattern':  ['firstname','lastname','email'],
  'person-phone':          ['phone'],
  'person-address':        ['firstname','lastname','city','state'],
  'person-social-sweep':   ['username'],
  'person-voter':          ['firstname','lastname','state'],
  'person-court':          ['firstname','lastname','state'],
  'person-property':       ['firstname','lastname','city','state'],
  // ── Name + Location ──────────────────────────────────────────
  'pn-name-basic':         ['firstname','lastname','city','state'],
  'pn-name-no-social':     ['firstname','lastname','city','state'],
  'pn-name-pdf':           ['firstname','lastname','city'],
  'pn-name-spreadsheet':   ['firstname','lastname'],
  'pn-name-employer':      ['firstname','lastname','employer','city'],
  'pn-name-age':           ['firstname','lastname','age','city','state'],
  // ── Phone ────────────────────────────────────────────────────
  'pn-phone-generic':      ['phone'],
  'pn-phone-variants':     ['phone'],
  'pn-phone-name':         ['phone','firstname','lastname'],
  'pn-phone-docs':         ['phone'],
  'pn-phone-paste':        ['phone'],
  // ── Email ────────────────────────────────────────────────────
  'pn-email-raw':          ['email'],
  'pn-email-name':         ['email','firstname','lastname'],
  'pn-email-domain':       ['domain','firstname','lastname'],
  'pn-email-paste':        ['email'],
  'pn-email-docs':         ['email'],
  'pn-username-dev':       ['username'],
  // ── Address ──────────────────────────────────────────────────
  'pn-address-generic':    ['address','city','state'],
  'pn-address-records':    ['address','city'],
  'pn-address-name':       ['firstname','lastname','address','city'],
  'pn-address-business':   ['employer','city','state'],
  'pn-address-neighbors':  ['address','city','state'],
  // ── Social ───────────────────────────────────────────────────
  'pn-social-username-major':  ['username'],
  'pn-social-username-dev':    ['username'],
  'pn-social-username-forums': ['username'],
  'pn-social-linkedin':        ['firstname','lastname'],
  'pn-social-facebook':        ['firstname','lastname'],
  'pn-social-twitter':         ['firstname','lastname'],
  'pn-social-cached':          ['username'],
  'pn-social-niche':           ['firstname','lastname','city'],
  // ── Associates ───────────────────────────────────────────────
  'pn-assoc-family':       ['firstname','lastname','city','state'],
  'pn-assoc-obituary':     ['firstname','lastname','city'],
  'pn-assoc-wedding':      ['firstname','lastname','city'],
  'pn-assoc-forum':        ['firstname','lastname','city'],
  // ── Employment ───────────────────────────────────────────────
  'pn-employ-current':     ['firstname','lastname','employer'],
  'pn-employ-linkedin':    ['firstname','lastname'],
  'pn-employ-press':       ['firstname','lastname','employer'],
  'pn-employ-filings':     ['firstname','lastname'],
  'pn-employ-license':     ['firstname','lastname','state'],
  // ── Criminal ─────────────────────────────────────────────────
  'pn-criminal-court':     ['firstname','lastname','state'],
  'pn-criminal-pacer':     ['firstname','lastname'],
  'pn-criminal-offender':  ['firstname','lastname','state'],
  'pn-criminal-arrest':    ['firstname','lastname','city','state'],
  'pn-criminal-bankruptcy':['firstname','lastname','state'],
  // ── Company ──────────────────────────────────────────────────
  'company-employees':     ['companyname'],
  'company-jobs':          ['companyname','jobtitle'],
  'company-subdomains':    ['domain'],
  'company-vpn':           ['domain'],
  'company-ma-docs':       ['companyname'],
  'company-org-chart':     ['companyname'],
  'company-tech-stack':    ['companyname','jobtitle'],
  // ── People Search Engines ────────────────────────────────────
  'people-tps-name':           ['firstname','lastname','city','state'],
  'people-tps-phone':          ['phone'],
  'people-tps-address':        ['address','city','state'],
  'people-whitepages':         ['firstname','lastname','city','state'],
  'people-fastpeoplesearch':   ['firstname','lastname','city','state'],
  'people-multi':              ['firstname','lastname','city','state'],
};

// ══════════════════════════════════════════════════════════════
// TEMPLATE OPERATOR OVERRIDES
// Replaces static placeholder values with [TOKENS] in company
// templates and person templates missing token-based operators.
// ══════════════════════════════════════════════════════════════
const TEMPLATE_OP_UPDATES = {
  // Person basic — add name tokens where operators were generic
  'person-name-social': [
    {type:'exact',value:'[FIRSTNAME] [LASTNAME]'},
    {type:'site',value:'linkedin.com'},{type:'OR',value:''},
    {type:'site',value:'facebook.com'},
  ],
  'person-email-pattern': [
    {type:'exact',value:'[FIRSTNAME] [LASTNAME]'},
    {type:'exact',value:'[EMAIL]'},
  ],
  'person-voter': [
    {type:'exact',value:'[FIRSTNAME] [LASTNAME]'},
    {type:'exact',value:'[STATE]'},
    {type:'filetype',value:'pdf'},{type:'OR',value:''},
    {type:'filetype',value:'csv'},
  ],
  'person-court': [
    {type:'exact',value:'[FIRSTNAME] [LASTNAME]'},
    {type:'exact',value:'[STATE]'},
    {type:'site',value:'courtlistener.com'},{type:'OR',value:''},
    {type:'site',value:'pacer.gov'},
  ],
  'person-property': [
    {type:'exact',value:'[FIRSTNAME] [LASTNAME]'},
    {type:'site',value:'zillow.com'},{type:'OR',value:''},
    {type:'exact',value:'property records'},{type:'exact',value:'assessor'},
  ],
  'person-social-sweep': [
    {type:'exact',value:'[USERNAME]'},
    {type:'site',value:'twitter.com'},{type:'OR',value:''},
    {type:'site',value:'instagram.com'},{type:'OR',value:''},
    {type:'site',value:'reddit.com'},
  ],
  // pn-phone-variants: replace hardcoded numbers with [PHONE]
  'pn-phone-variants': [
    {type:'intext',value:'[PHONE]'},
  ],
  // pn-social-cached: use [USERNAME] token
  'pn-social-cached': [
    {type:'cache',value:'twitter.com/[USERNAME]'},
    {type:'OR',value:''},
    {type:'cache',value:'instagram.com/[USERNAME]'},
  ],
  // pn-address-neighbors: use [ADDRESS] for street exclusion
  'pn-address-neighbors': [
    {type:'exact',value:'[ADDRESS]'},
    {type:'exact',value:'[CITY]'},
    {type:'exact',value:'[STATE]'},
  ],
  // Company templates — replace static values with tokens
  'company-employees': [
    {type:'exact',value:'[COMPANYNAME]'},
    {type:'site',value:'linkedin.com/in'},
  ],
  'company-jobs': [
    {type:'exact',value:'[COMPANYNAME]'},
    {type:'exact',value:'[JOBTITLE]'},
    {type:'site',value:'indeed.com'},{type:'OR',value:''},
    {type:'site',value:'lever.co'},
  ],
  'company-subdomains': [
    {type:'site',value:'[DOMAIN]'},
    {type:'inurl_exclude',value:'www'},
  ],
  'company-vpn': [
    {type:'site',value:'[DOMAIN]'},
    {type:'inurl',value:'vpn'},{type:'OR',value:''},
    {type:'inurl',value:'remote'},
  ],
  'company-ma-docs': [
    {type:'exact',value:'[COMPANYNAME]'},
    {type:'filetype',value:'pdf'},
    {type:'exact',value:'acquisition'},{type:'OR',value:''},
    {type:'exact',value:'merger'},
  ],
  'company-org-chart': [
    {type:'exact',value:'[COMPANYNAME]'},
    {type:'filetype',value:'pdf'},
    {type:'exact',value:'org chart'},{type:'OR',value:''},
    {type:'exact',value:'organization chart'},
  ],
  'company-tech-stack': [
    {type:'exact',value:'[COMPANYNAME]'},
    {type:'exact',value:'[JOBTITLE]'},
    {type:'site',value:'greenhouse.io'},{type:'OR',value:''},
    {type:'site',value:'workday.com'},
  ],
};

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
  _openFormCard: null,

  init() {
    // Apply field maps and operator overrides to template objects once
    for (const [id, fields] of Object.entries(TEMPLATE_FIELDS_MAP)) {
      const t = TEMPLATES.find(t => t.id === id);
      if (t) t.fields = fields;
    }
    for (const [id, ops] of Object.entries(TEMPLATE_OP_UPDATES)) {
      const t = TEMPLATES.find(t => t.id === id);
      if (t) t.operators = ops;
    }
    this._injectSearch();
    this._buildSidebar();
    this._renderGrid();
    this._updateTabCount();
  },

  // Returns true if this template gets the smart expandable form
  _isSmartTemplate(t) {
    return Array.isArray(t.fields) && t.fields.length > 0;
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
      <span class="cat-name">All Templates</span>
      <span class="cat-count">${visible.length}</span></button></li>`;

    for (const cat of CATEGORIES) {
      const n = counts[cat.id] || 0;
      if (!n && this.searchTerm) continue;
      const active = this.activeCategory === cat.id;
      html += `<li><button class="category-btn ${active ? 'category-btn-active' : ''}" data-category="${_esc(cat.id)}">
        <span class="cat-name">${_esc(cat.label)}</span>
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

    // Smart form: FILL & LOAD ▼ button
    grid.querySelectorAll('.btn-fill-load').forEach(btn => {
      btn.addEventListener('click', () => {
        const tmpl = TEMPLATES.find(t => t.id === btn.dataset.tid);
        if (!tmpl) return;
        const cardEl = btn.closest('.template-card');
        // If this card's form is already open, collapse it
        if (cardEl === this._openFormCard) {
          this._closeForm();
        } else {
          this._openForm(tmpl, cardEl);
        }
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

  // ── Open the inline smart form on a template card ─────────────
  _openForm(t, cardEl) {
    this._closeForm();

    const grid = document.getElementById('template-grid');
    cardEl.classList.add('form-card-open');
    if (grid) grid.classList.add('has-open-form');

    // Build fields HTML
    const fieldsHtml = (t.fields || []).map(fieldKey => {
      const def = FORM_FIELDS[fieldKey];
      if (!def) return '';
      const star = def.required ? '<span class="form-req-star">*</span>' : '';
      const phoneNote = fieldKey === 'phone'
        ? `<div class="form-phone-note">We'll search all common number formats automatically</div>`
        : '';
      return `<div class="form-field" data-field="${fieldKey}">
        <label class="form-field-label">${_esc(def.label.toUpperCase())}${star}</label>
        <input class="form-field-input"
          data-field="${fieldKey}"
          type="${def.type}"
          placeholder="${_esc(def.placeholder)}"
          autocomplete="off" spellcheck="false"
          ${def.required ? 'data-required="true"' : ''}
        />
        ${phoneNote}
        <div class="form-field-error" hidden>This field is required</div>
      </div>`;
    }).join('');

    const wrap = document.createElement('div');
    wrap.className = 'template-form-wrap';
    wrap.dataset.tid = t.id;
    wrap.innerHTML = `
      <div class="template-form">
        <div class="form-header-row">
          <div class="form-header-info">
            <div class="form-title">${_esc(t.name)}</div>
            <div class="form-hint">Fill in what you know — empty fields are skipped</div>
          </div>
          <button class="form-close-btn" aria-label="Close form">×</button>
        </div>
        <div class="form-fields-grid">${fieldsHtml}</div>
        <div class="form-at-least-one">Fill in at least one field</div>
        <div class="form-validation-msg" hidden>✗ PLEASE FILL IN REQUIRED FIELDS</div>
        <div class="form-actions">
          <button class="btn form-cancel-btn">× CANCEL</button>
          <button class="btn btn-build-query" disabled data-tid="${_esc(t.id)}">BUILD QUERY →</button>
        </div>
      </div>`;

    cardEl.appendChild(wrap);

    // Update load button label
    const fillBtn = cardEl.querySelector('.btn-fill-load');
    if (fillBtn) { fillBtn.textContent = '▲ COLLAPSE'; fillBtn.classList.add('btn-fill-load-open'); }

    // Animate open (next frame so transition fires)
    requestAnimationFrame(() => {
      wrap.style.maxHeight = (wrap.scrollHeight + 8) + 'px';
      wrap.classList.add('form-wrap-open');
    });

    // Wire inputs + build button
    const inputs      = wrap.querySelectorAll('.form-field-input');
    const buildBtn    = wrap.querySelector('.btn-build-query');
    const atLeastOne  = wrap.querySelector('.form-at-least-one');
    const validMsg    = wrap.querySelector('.form-validation-msg');

    const syncBuildEnabled = () => {
      const any = [...inputs].some(inp => inp.value.trim());
      buildBtn.disabled = !any;
      if (atLeastOne) atLeastOne.style.display = any ? 'none' : '';
    };

    inputs.forEach(inp => {
      inp.addEventListener('input', () => {
        inp.classList.remove('form-input-error');
        inp.closest('.form-field')?.querySelector('.form-field-error')?.setAttribute('hidden', '');
        if (validMsg) validMsg.hidden = true;
        syncBuildEnabled();
        // Re-measure height as errors appear/disappear
        wrap.style.maxHeight = (wrap.scrollHeight + 8) + 'px';
      });
    });

    syncBuildEnabled();

    wrap.querySelector('.form-close-btn').addEventListener('click', () => this._closeForm());
    wrap.querySelector('.form-cancel-btn').addEventListener('click', () => this._closeForm());

    buildBtn.addEventListener('click', () => {
      const tmpl = TEMPLATES.find(t2 => t2.id === buildBtn.dataset.tid);
      if (!tmpl) return;

      // Validate required fields
      let hasError = false;
      inputs.forEach(inp => {
        if (inp.dataset.required && !inp.value.trim()) {
          inp.classList.add('form-input-error');
          inp.closest('.form-field')?.querySelector('.form-field-error')?.removeAttribute('hidden');
          hasError = true;
        }
      });
      if (hasError) {
        if (validMsg) validMsg.hidden = false;
        wrap.style.maxHeight = (wrap.scrollHeight + 8) + 'px';
        wrap.querySelectorAll('.form-input-error')[0]?.focus();
        return;
      }

      // Collect values
      const formValues = {};
      inputs.forEach(inp => { formValues[inp.dataset.field] = inp.value.trim(); });

      this._closeForm();
      this._loadTemplate(tmpl, formValues);
      _showQueryBuiltBanner();
    });

    // Focus first input
    inputs[0]?.focus();
    this._openFormCard = cardEl;
  },

  // ── Collapse any open smart form ──────────────────────────────
  _closeForm() {
    if (!this._openFormCard) return;
    const cardEl = this._openFormCard;
    const wrap   = cardEl.querySelector('.template-form-wrap');
    const fillBtn = cardEl.querySelector('.btn-fill-load');

    if (wrap) {
      wrap.style.maxHeight = '0px';
      wrap.classList.remove('form-wrap-open');
      setTimeout(() => { if (wrap.parentNode) wrap.remove(); }, 280);
    }
    if (fillBtn) {
      fillBtn.textContent = 'FILL & LOAD ▼';
      fillBtn.classList.remove('btn-fill-load-open');
    }
    cardEl.classList.remove('form-card-open');
    const grid = document.getElementById('template-grid');
    if (grid) grid.classList.remove('has-open-form');
    this._openFormCard = null;
  },

  // ── Build HTML for a single template card ─────────────────────
  _cardHTML(t) {
    const cat   = CATEGORIES.find(c => c.id === t.category);

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
      ? `<div class="card-caution"><span class="card-caution-icon">[!]</span> USE WITH CAUTION</div>`
      : '';

    const tagBadges = Array.isArray(t.tags) ? t.tags.map(tag => {
      if (tag === 'surface-web-only') return `<span class="card-tag card-tag-surface">[!] SURFACE WEB ONLY</span>`;
      if (tag === 'us-focused')       return `<span class="card-tag card-tag-us">US-FOCUSED</span>`;
      return '';
    }).join('') : '';

    return `<article class="template-card" data-category="${_esc(t.category)}">
      <div class="card-header">
        ${_esc(t.name)}
        <span class="card-badge ${badgeCls}">${badgeTxt}</span>
        <button class="card-explain-btn" data-tid="${_esc(t.id)}" aria-label="Explain this template" title="What does this find?">?</button>
      </div>
      <div class="card-body">
        ${tagBadges}
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
        ${this._isSmartTemplate(t)
          ? `<button class="btn card-btn btn-fill-load" data-tid="${_esc(t.id)}">FILL &amp; LOAD &#9660;</button>`
          : `<button class="btn card-btn btn-load-template" data-tid="${_esc(t.id)}">LOAD</button>`
        }
      </div>
    </article>`;
  },

  // ── Load a template into the Builder and switch tabs ──────────
  // formValues: optional object from smart form; if omitted, loads operators as-is
  _loadTemplate(t, formValues) {
    window.builder.reset();

    const allPeopleEng = t.engines.length > 0 && t.engines.every(e => PEOPLE_ENGINES.has(e));

    if (formValues && allPeopleEng) {
      // TPS / people-search mode: set engines then populate TPS fields
      document.querySelectorAll('.engine-checkbox').forEach(cb => {
        cb.checked = t.engines.includes(cb.dataset.engine);
      });
      window.builder._checkTpsMode();

      const f = window.builder.tpsFields;
      f.first   = formValues.firstname || '';
      f.last    = formValues.lastname  || '';
      f.city    = formValues.city      || '';
      f.state   = formValues.state     || '';
      f.zip     = formValues.zip       || '';
      f.phone   = formValues.phone     || '';
      f.address = formValues.address   || '';

      // Sync DOM TPS inputs
      window.builder.elTpsForm.querySelectorAll('.tps-input').forEach(inp => {
        inp.value = f[inp.dataset.tps] || '';
      });

    } else if (formValues) {
      // Standard form mode: build operators from form values
      const ops = buildFromForm(t, formValues);
      ops.forEach(op => window.builder.addOperator(op.type, op.value));

      document.querySelectorAll('.engine-checkbox').forEach(cb => {
        cb.checked = t.engines.includes(cb.dataset.engine);
      });
      window.builder._checkTpsMode();

    } else {
      // Legacy/direct LOAD (non-smart templates)
      t.operators.forEach(op => window.builder.addOperator(op.type, op.value));

      document.querySelectorAll('.engine-checkbox').forEach(cb => {
        cb.checked = t.engines.includes(cb.dataset.engine);
      });
      window.builder._checkTpsMode();
    }

    const shodanCb   = document.querySelector('.engine-checkbox[data-engine="shodan"]');
    const shodanNote = document.getElementById('shodan-disclaimer');
    if (shodanCb && shodanNote) shodanNote.hidden = !shodanCb.checked;

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
// BUILD FROM FORM — substitutes form values into template operators
// ══════════════════════════════════════════════════════════════
function buildFromForm(template, formValues) {
  const fn  = formValues.firstname   || '';
  const ln  = formValues.lastname    || '';
  const city    = formValues.city      || '';
  const state   = formValues.state     || '';
  const zip     = formValues.zip       || '';
  const phone   = formValues.phone     || '';
  const email   = formValues.email     || '';
  const username = formValues.username || '';
  const age     = formValues.age       || '';
  const employer = formValues.employer || '';
  const address = formValues.address   || '';
  const companyname = formValues.companyname || '';
  const domain  = formValues.domain    || '';
  const industry = formValues.industry || '';
  const location = formValues.location || city;
  const employee = formValues.employee || '';
  const jobtitle = formValues.jobtitle || '';

  // Phone: expand to 3 common US formats
  let phoneExpanded = phone;
  const digits = phone.replace(/\D/g, '');
  if (digits.length >= 10) {
    const d  = digits.slice(-10);
    const p1 = d.slice(0, 3), p2 = d.slice(3, 6), p3 = d.slice(6);
    phoneExpanded = `"${d}" OR "(${p1}) ${p2}-${p3}" OR "${p1}-${p2}-${p3}"`;
  }

  const operators = [];

  for (const op of template.operators) {
    let value = op.value;

    // Skip OR/AND — keep as structural connectors
    if (op.type === 'OR' || op.type === 'AND') {
      operators.push(op);
      continue;
    }

    // Phone: expand to 3 formats when filled, skip when empty
    if (value.includes('[PHONE]')) {
      if (!phone) continue;
      value = value.replace(/\[PHONE\]/g, phoneExpanded);
    }

    // Combined first+last name pattern
    if (value.includes('[FIRSTNAME]') && value.includes('[LASTNAME]')) {
      const combined = [fn, ln].filter(Boolean).join(' ');
      if (!combined) continue;
      value = value.replace('[FIRSTNAME] [LASTNAME]', combined);
    }

    // Individual tokens
    value = value.replace(/\[FIRSTNAME\]/g,   fn);
    value = value.replace(/\[LASTNAME\]/g,    ln);
    value = value.replace(/\[FULLNAME\]/g,    formValues.fullname || [fn, ln].filter(Boolean).join(' '));
    value = value.replace(/\[EMAIL\]/g,       email);
    value = value.replace(/\[USERNAME\]/g,    username);
    value = value.replace(/\[AGE\]/g,         age);
    value = value.replace(/\[EMPLOYER\]/g,    employer);
    value = value.replace(/\[ADDRESS\]/g,     address);
    value = value.replace(/\[CITY\]/g,        city);
    value = value.replace(/\[STATE\]/g,       state);
    value = value.replace(/\[ZIP\]/g,         zip);
    value = value.replace(/\[DOMAIN\]/g,      domain);
    value = value.replace(/\[COMPANYNAME\]/g, companyname);
    value = value.replace(/\[COMPANY\]/g,     companyname);
    value = value.replace(/\[INDUSTRY\]/g,    industry);
    value = value.replace(/\[LOCATION\]/g,    location);
    value = value.replace(/\[EMPLOYEE\]/g,    employee);
    value = value.replace(/\[JOBTITLE\]/g,    jobtitle);

    // Skip operator if any [TOKEN] is still unfilled
    if (/\[[A-Z][A-Z\s]*\]/.test(value)) continue;
    // Skip if value is blank after substitution
    if (!value.trim()) continue;

    operators.push({ type: op.type, value });
  }

  // Prune dangling OR/AND connectors at start/end or adjacent pairs
  const clean = [];
  for (const op of operators) {
    const isConn = op.type === 'OR' || op.type === 'AND';
    if (isConn && (!clean.length || clean[clean.length - 1].type === 'OR' || clean[clean.length - 1].type === 'AND')) continue;
    clean.push(op);
  }
  while (clean.length && (clean[clean.length - 1].type === 'OR' || clean[clean.length - 1].type === 'AND')) {
    clean.pop();
  }

  return clean;
}

// ══════════════════════════════════════════════════════════════
// QUERY BUILT FLASH BANNER
// ══════════════════════════════════════════════════════════════
function _showQueryBuiltBanner() {
  let banner = document.getElementById('query-built-banner');
  if (!banner) {
    banner = document.createElement('div');
    banner.id = 'query-built-banner';
    banner.className = 'query-built-banner';
    document.body.appendChild(banner);
  }
  banner.textContent = '✓ QUERY BUILT — Review and launch';
  banner.classList.add('banner-visible');
  clearTimeout(banner._dismissTimer);
  banner._dismissTimer = setTimeout(() => banner.classList.remove('banner-visible'), 3000);
}

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
    { id: 'person',    icon: '', label: 'A Person',                   desc: 'Find someone by name, phone, email or address' },
    { id: 'company',   icon: '', label: 'A Company or Organization',  desc: 'Research a business, find employees, or map infrastructure' },
    { id: 'documents', icon: '', label: 'Documents & Files',          desc: 'Find PDFs, spreadsheets, or other files left exposed online' },
    { id: 'login',     icon: '', label: 'Login Pages & Admin Panels', desc: 'Find login portals, admin pages, or authentication systems' },
    { id: 'devices',   icon: '', label: 'Cameras & Devices',          desc: 'Find exposed webcams, routers, or IoT devices' },
    { id: 'code',      icon: '', label: 'Code & Credentials',         desc: 'Find API keys, passwords, or config files in public code' },
    { id: 'recon',     icon: '', label: 'General Website Recon',      desc: 'Explore a specific website or domain' },
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
          <div class="onb-feat"><span class="onb-feat-label">Wizard Mode</span><span class="onb-feat-desc">New? Start here</span></div>
          <div class="onb-feat"><span class="onb-feat-label">Templates</span><span class="onb-feat-desc">90+ ready searches</span></div>
          <div class="onb-feat"><span class="onb-feat-label">Builder</span><span class="onb-feat-desc">Custom queries</span></div>
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
      tips.push('TIP: Add site: to limit results to one domain');
    if (!has('filetype') && !has('ext') && (has('intext') || has('intitle')))
      tips.push('TIP: Add filetype:pdf or filetype:xlsx to find specific files');
    if (!has('exact'))
      tips.push('TIP: Wrap key phrases in quotes for exact matches: "phrase here"');
    if (operators.length === 1)
      tips.push('TIP: Add more operators — each one narrows your results further');
    if (!has('before') && !has('after'))
      tips.push('TIP: Add after:2023-01-01 to find only recent results');
    if (new Set(types).size === 1 && operators.length > 1)
      tips.push('TIP: Mix operator types — combine site: with intitle: for better targeting');
    if (has('OR') && !has('site') && !has('filetype'))
      tips.push('TIP: OR broadens results — pair it with site: to keep results focused');

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
// CONFLICT DETECTOR
// Runs synchronously (pure logic, no DOM) on every operator
// change. renderConflicts() handles all DOM work via rAF.
// ══════════════════════════════════════════════════════════════
class ConflictDetector {
  constructor() {
    this._COMMON_WORDS = new Set([
      'login','admin','pass','user','file','data','info','page',
      'site','home','web','mail','test','dev','api','app','log',
      'db','sql','php','html','index','access','error','debug',
      'config','backup',
    ]);
    this._SITE_FT_INCOMPAT = {
      'twitter.com':   ['pdf','xlsx','docx','csv'],
      'x.com':         ['pdf','xlsx','docx','csv'],
      'instagram.com': ['pdf','xlsx','docx','csv','sql'],
      'youtube.com':   ['pdf','xlsx','docx','sql','env'],
      'facebook.com':  ['pdf','xlsx','docx','csv','sql'],
      'tiktok.com':    ['pdf','xlsx','docx','csv','sql'],
      'reddit.com':    ['xlsx','docx','sql','env','cfg'],
      'linkedin.com':  ['sql','env','cfg','log'],
    };
    this._SHODAN_OPS = new Set(['hostname','port','os','product']);
  }

  analyze(operators, checkedEngines) {
    if (!operators.length) return [];
    const conflicts = [];
    const engines   = checkedEngines || [];

    const idxByType = type =>
      operators.reduce((acc, op, i) => { if (op.type === type) acc.push(i); return acc; }, []);
    const pushToAll = (idxs, sev, msg, fix) =>
      idxs.forEach(i => conflicts.push({ operatorIndex: i, type: sev, message: msg, affectedIndexes: idxs.slice(), fix }));

    // ── Checks that fire at any operator count ────────────────

    // ENGINE_OPERATOR_MISMATCH
    operators.forEach((op, i) => {
      const def = OPERATORS[op.type];
      if (!def?.engines?.length) return;
      if (!def.engines.some(e => engines.includes(e))) {
        const names = def.engines.map(id => ENGINES[id]?.label ?? id).join(', ');
        conflicts.push({ operatorIndex: i, type: 'warning',
          message: `${def.label} is only supported by ${names}, which isn't currently selected. Either add ${names} to your target engines or replace this operator.`,
          affectedIndexes: [i] });
      }
    });

    // SHODAN_NOT_SELECTED
    operators.forEach((op, i) => {
      if (this._SHODAN_OPS.has(op.type) && !engines.includes('shodan')) {
        conflicts.push({ operatorIndex: i, type: 'info',
          message: 'This operator only works in Shodan — enable Shodan in your target engines to use it.',
          affectedIndexes: [i] });
      }
    });

    // BROAD_SINGLE_INTEXT (requires exactly 1 operator)
    if (operators.length === 1 && operators[0].type === 'intext') {
      const val = (operators[0].value || '').toLowerCase().trim();
      if (val.length < 6 || this._COMMON_WORDS.has(val)) {
        conflicts.push({ operatorIndex: 0, type: 'warning',
          message: 'This single short term will return millions of unrelated results. Add more operators or use a more specific phrase in quotes.',
          affectedIndexes: [0] });
      }
    }

    if (operators.length < 2) return conflicts;

    // ── Checks that require 2+ operators ─────────────────────

    const siteIdxs = idxByType('site');
    const ftIdxs   = [...idxByType('filetype'), ...idxByType('ext')];
    const afterIdxs  = idxByType('after');
    const beforeIdxs = idxByType('before');

    // DUPLICATE_SITE
    if (siteIdxs.length >= 2) {
      pushToAll(siteIdxs, 'error',
        "Multiple site: operators don't stack — Google only uses the last one. Remove all but one, or use OR inside a single site: value.",
        'site:example.com OR site:other.com');
    }

    // DUPLICATE_FILETYPE
    if (ftIdxs.length >= 2) {
      pushToAll(ftIdxs, 'error',
        'Multiple filetype: operators conflict — only one file type can be targeted at a time. Combine them: filetype:pdf OR filetype:docx',
        'filetype:pdf OR filetype:docx');
    }

    // CONFLICTING_SITE_FILETYPE
    for (const si of siteIdxs) {
      const domain  = (operators[si].value || '').toLowerCase().replace(/^www\./, '');
      const blocked = this._SITE_FT_INCOMPAT[domain];
      if (!blocked) continue;
      for (const fi of ftIdxs) {
        const ft = (operators[fi].value || '').toLowerCase();
        if (blocked.includes(ft)) {
          const msg = `${domain} doesn't typically host .${ft} files — this search will likely return no results. Try removing the filetype: operator for this domain.`;
          [si, fi].forEach(idx => conflicts.push({ operatorIndex: idx, type: 'error', message: msg, affectedIndexes: [si, fi] }));
        }
      }
    }

    // SELF_EXCLUDING
    const inclOps = operators.map((op, i) => ({ op, i })).filter(
      ({op}) => !op.type.includes('_exclude') && op.type !== 'NOT' && op.type !== 'OR' && op.type !== 'AND');
    const exclOps = operators.map((op, i) => ({ op, i })).filter(
      ({op}) => op.type.includes('_exclude') || op.type === 'NOT');

    for (const { op: a, i: ai } of inclOps) {
      if (!a.value) continue;
      const aVal  = a.value.toLowerCase().replace(/['"]/g, '');
      const aBase = a.type;
      for (const { op: b, i: bi } of exclOps) {
        if (!b.value) continue;
        const bVal  = b.value.toLowerCase().replace(/['"]/g, '');
        const bBase = b.type.replace('_exclude', '');
        if (aBase === bBase && aVal === bVal && aVal.length > 0) {
          const msg = "These operators cancel each other out — you're searching for and excluding the same term. One of these should be removed.";
          [ai, bi].forEach(idx => conflicts.push({ operatorIndex: idx, type: 'error', message: msg, affectedIndexes: [ai, bi] }));
        }
      }
    }

    // EMPTY_OR
    operators.forEach((op, i) => {
      if (op.type !== 'OR') return;
      const prev = operators[i - 1];
      const next = operators[i + 1];
      if (!prev || !next || prev.type === 'OR' || prev.type === 'AND' || next.type === 'OR' || next.type === 'AND') {
        conflicts.push({ operatorIndex: i, type: 'error',
          message: "OR requires terms on both sides — a dangling OR produces no valid results. Add a term on both sides or remove this OR.",
          affectedIndexes: [i] });
      }
    });

    // Value-level OR at start/end
    operators.forEach((op, i) => {
      if (!op.value) return;
      if (/^\s*OR\b|\bOR\s*$/.test(op.value)) {
        conflicts.push({ operatorIndex: i, type: 'error',
          message: "OR requires terms on both sides — 'OR admin' is invalid. Add a term before OR: 'login OR admin'",
          affectedIndexes: [i] });
      }
    });

    // REDUNDANT_WILDCARD
    operators.forEach((op, i) => {
      if (!op.value) return;
      const withoutQuoted = op.value.replace(/"[^"]*"/g, '');
      if (withoutQuoted.includes('*')) {
        conflicts.push({ operatorIndex: i, type: 'warning',
          message: 'Wildcards only work inside quoted phrases in Google. Outside quotes, * is ignored entirely.',
          affectedIndexes: [i] });
      }
    });

    // STACKED_EXCLUSIONS_ONLY
    const positiveOps = operators.filter(op =>
      !op.type.includes('_exclude') && op.type !== 'NOT' && op.type !== 'OR' && op.type !== 'AND');
    if (positiveOps.length === 0) {
      const allIdxs = operators.map((_, i) => i);
      operators.forEach((_, i) => conflicts.push({ operatorIndex: i, type: 'warning',
        message: "All your operators are exclusions — there's nothing to search FOR. Add at least one positive operator like site:, intitle:, or intext:.",
        affectedIndexes: allIdxs }));
    }

    // DOUBLE_QUOTED_SITE
    siteIdxs.forEach(i => {
      const v = operators[i].value || '';
      if (v.includes('"') || v.includes("'")) {
        conflicts.push({ operatorIndex: i, type: 'warning',
          message: "site: doesn't use quotes — remove them. Correct format: site:example.com",
          affectedIndexes: [i] });
      }
    });

    // BEFORE_AFTER_CONFLICT
    for (const bi of beforeIdxs) {
      for (const ai of afterIdxs) {
        const bDate = new Date(operators[bi].value || '');
        const aDate = new Date(operators[ai].value || '');
        if (!isNaN(bDate) && !isNaN(aDate) && bDate <= aDate) {
          const msg = 'Your date range is impossible — before: date is earlier than after: date. Flip them: after:2020-01-01 before:2023-01-01';
          [bi, ai].forEach(idx => conflicts.push({ operatorIndex: idx, type: 'warning', message: msg, affectedIndexes: [bi, ai] }));
        }
      }
    }

    // BEFORE_AFTER_FUTURE
    const today = new Date();
    afterIdxs.forEach(i => {
      const d = new Date(operators[i].value || '');
      if (!isNaN(d) && d > today) {
        conflicts.push({ operatorIndex: i, type: 'warning',
          message: "This date is in the future — no results can exist after today's date.",
          affectedIndexes: [i] });
      }
    });

    // SITE_WITH_OR (info)
    siteIdxs.forEach(i => {
      if (/\bOR\b/.test(operators[i].value || '')) {
        conflicts.push({ operatorIndex: i, type: 'info',
          message: 'Tip: site:A OR site:B works in Google but may not work in all engines. Check your selected engines support this syntax.',
          affectedIndexes: [i] });
      }
    });

    // MANY_OPERATORS (info, operatorIndex: -1)
    if (operators.length >= 8) {
      conflicts.push({ operatorIndex: -1, type: 'info',
        message: 'Long queries can sometimes confuse search engines. If results are empty, try removing the least important operators.',
        affectedIndexes: [] });
    }

    return conflicts;
  }
}

const conflictDetector = new ConflictDetector();

// ── Severity rank helper ──────────────────────────────────────
function _conflictRank(type) {
  return type === 'error' ? 2 : type === 'warning' ? 1 : 0;
}

// ── Shared tooltip ────────────────────────────────────────────
const _TYPE_LABEL = { error: 'CONFLICT', warning: 'WARNING', info: 'INFO' };
const _TYPE_COLOR = { error: 'var(--color-danger)', warning: 'var(--color-primary)', info: '#60a5fa' };

let _tooltipEl      = null;
let _tooltipTimer   = null;
let _tooltipHide    = null;
let _tooltipAnchor  = null;

function _getTooltipEl() {
  if (!_tooltipEl) {
    _tooltipEl = document.createElement('div');
    _tooltipEl.className = 'conflict-tooltip';
    _tooltipEl.hidden = true;
    document.body.appendChild(_tooltipEl);
    _tooltipEl.addEventListener('mouseenter', () => clearTimeout(_tooltipHide));
    _tooltipEl.addEventListener('mouseleave', () => {
      _tooltipHide = setTimeout(_hideTooltip, 100);
    });
  }
  return _tooltipEl;
}

function _showTooltip(anchorEl, conflict) {
  clearTimeout(_tooltipTimer);
  clearTimeout(_tooltipHide);
  _tooltipAnchor = anchorEl;
  const el = _getTooltipEl();
  const color = _TYPE_COLOR[conflict.type];
  el.style.borderColor = color;
  el.innerHTML =
    `<span class="conflict-tip-label" style="color:${color}">${_TYPE_LABEL[conflict.type]}</span>` +
    `<span class="conflict-tip-msg">${_esc(conflict.message)}</span>` +
    (conflict.fix ? `<code class="conflict-tip-fix">${_esc(conflict.fix)}</code>` : '');
  el.hidden = false;
  _positionTooltip(anchorEl);
}

function _positionTooltip(anchorEl) {
  const el  = _getTooltipEl();
  const isMobile = window.matchMedia('(pointer: coarse)').matches;
  if (isMobile) {
    const row = anchorEl.closest('.operator-row');
    if (!row) return;
    const rr = row.getBoundingClientRect();
    el.style.width  = rr.width + 'px';
    el.style.left   = rr.left  + 'px';
    el.style.right  = 'auto';
    el.style.top    = (rr.top + window.scrollY - el.offsetHeight - 8) + 'px';
  } else {
    const ir = anchorEl.getBoundingClientRect();
    el.style.width = '260px';
    const left = Math.max(4, ir.right - 260);
    el.style.left  = left + 'px';
    el.style.right = 'auto';
    el.style.top   = (ir.top + window.scrollY - el.offsetHeight - 8) + 'px';
  }
}

function _hideTooltip() {
  if (_tooltipEl) _tooltipEl.hidden = true;
  _tooltipAnchor = null;
}

document.addEventListener('click', e => {
  if (_tooltipEl && !_tooltipEl.hidden && !_tooltipEl.contains(e.target)) {
    _hideTooltip();
  }
});

function _attachConflictTooltip(iconEl, conflict) {
  const isMobile = window.matchMedia('(pointer: coarse)').matches;
  if (isMobile) {
    iconEl.addEventListener('click', e => {
      e.stopPropagation();
      const el = _getTooltipEl();
      if (_tooltipAnchor === iconEl && !el.hidden) { _hideTooltip(); return; }
      _showTooltip(iconEl, conflict);
    });
  } else {
    iconEl.addEventListener('mouseenter', () => {
      clearTimeout(_tooltipHide);
      _tooltipTimer = setTimeout(() => _showTooltip(iconEl, conflict), 150);
    });
    iconEl.addEventListener('mouseleave', () => {
      clearTimeout(_tooltipTimer);
      _tooltipHide = setTimeout(_hideTooltip, 100);
    });
  }
}

// ── Render conflict decorations onto operator rows ────────────
function renderConflicts(conflicts) {
  // Clear previous state
  document.querySelectorAll('.operator-row').forEach(row => {
    row.classList.remove('conflict-error', 'conflict-warning', 'conflict-info');
    row.querySelector('.conflict-icon-wrap')?.remove();
  });
  document.getElementById('conflict-general-note')?.remove();
  _hideTooltip();

  if (!conflicts.length) {
    _updateStrengthConflicts([]);
    _updateConflictBadge(0);
    return;
  }

  // Build index → worst-severity conflict map (one icon per row)
  const conflictMap = new Map();
  for (const c of conflicts) {
    if (c.operatorIndex < 0) continue;
    const prev = conflictMap.get(c.operatorIndex);
    if (!prev || _conflictRank(c.type) > _conflictRank(prev.type)) {
      conflictMap.set(c.operatorIndex, c);
    }
  }

  // Decorate rows
  const rows = document.querySelectorAll('.operator-row');
  conflictMap.forEach((conflict, idx) => {
    const row = rows[idx];
    if (!row) return;
    row.classList.add(`conflict-${conflict.type}`);

    const icon = document.createElement('span');
    icon.className = `conflict-icon-wrap conflict-icon-${conflict.type}`;
    icon.textContent = conflict.type === 'info' ? '[i]' : '[!]';
    icon.setAttribute('role', 'img');
    icon.setAttribute('aria-label', _TYPE_LABEL[conflict.type]);

    const actions = row.querySelector('.operator-row-actions');
    if (actions) row.insertBefore(icon, actions);

    _attachConflictTooltip(icon, conflict);
  });

  // General info note (operatorIndex: -1)
  const _GENERAL_KEY = 'df-conflict-note-dismissed';
  const generalConflicts = conflicts.filter(c => c.operatorIndex < 0);
  if (generalConflicts.length && !sessionStorage.getItem(_GENERAL_KEY)) {
    const note = document.createElement('div');
    note.id = 'conflict-general-note';
    note.className = 'conflict-general-note';
    note.innerHTML =
      `<span class="conflict-note-icon">ℹ</span>` +
      `<span>${_esc(generalConflicts[0].message)}</span>` +
      `<button class="conflict-note-dismiss" aria-label="Dismiss">×</button>`;
    note.querySelector('.conflict-note-dismiss').addEventListener('click', () => {
      sessionStorage.setItem(_GENERAL_KEY, '1');
      note.remove();
    });
    const opList = document.getElementById('operator-list');
    opList?.parentNode?.insertBefore(note, opList);
  }

  _updateStrengthConflicts(conflicts);
  _updateConflictBadge(conflictMap.size);
}

// ── Strength meter conflict summary ──────────────────────────
function _updateStrengthConflicts(conflicts) {
  let el = document.getElementById('sm-conflicts');
  if (!el) {
    el = document.createElement('div');
    el.id = 'sm-conflicts';
    el.className = 'sm-conflicts';
    el.style.transition = 'opacity 0.2s';
    document.getElementById('sm-tips')?.after(el);
  }

  // Deduplicate by message
  const seen = new Set();
  const unique = conflicts.filter(c => {
    if (seen.has(c.message)) return false;
    seen.add(c.message);
    return true;
  });

  if (!unique.length) {
    el.innerHTML = '';
    el.style.opacity = '0';
    return;
  }

  const MAX = 3;
  const shown = unique.slice(0, MAX);
  const extra = unique.length - MAX;

  el.innerHTML =
    `<div class="sm-conflicts-header">CONFLICTS DETECTED</div>` +
    shown.map(c => {
      const brief = c.message.split(/[.—]/)[0].trim();
      return `<div class="sm-conflict-item"><span>[!]</span><span>${_esc(brief)}</span></div>`;
    }).join('') +
    (extra > 0 ? `<div class="sm-conflicts-more">+${extra} more</div>` : '');
  el.style.opacity = '1';
}

// ── Builder title conflict badge ──────────────────────────────
function _updateConflictBadge(count) {
  const el = window.builder?.elBuilderTitle;
  if (!el) return;
  el.textContent = window.builder._baseBuilderTitle;
  if (count > 0) {
    const badge = document.createElement('span');
    badge.className = 'conflict-title-badge';
    badge.textContent = ` [!] ${count}`;
    badge.addEventListener('click', () => {
      document.querySelector(
        '.operator-row.conflict-error, .operator-row.conflict-warning, .operator-row.conflict-info'
      )?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
    el.appendChild(badge);
  }
}

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
// TOOLS TAB
// Three investigation tool panels — Image, Email/Username, Network
// ══════════════════════════════════════════════════════════════

// ── Username platform definitions ────────────────────────────
const USERNAME_PLATFORMS = {
  'Social Media':          [
    { name: 'Twitter / X',   url: 'https://twitter.com/[U]' },
    { name: 'Instagram',     url: 'https://www.instagram.com/[U]/' },
    { name: 'TikTok',        url: 'https://www.tiktok.com/@[U]' },
    { name: 'Facebook',      url: 'https://www.facebook.com/[U]' },
  ],
  'Professional':          [
    { name: 'LinkedIn',      url: 'https://www.linkedin.com/in/[U]' },
    { name: 'GitHub',        url: 'https://github.com/[U]' },
    { name: 'GitLab',        url: 'https://gitlab.com/[U]' },
    { name: 'Stack Overflow',url: 'https://stackoverflow.com/users?tab=Reputation&filter=all&search=[U]' },
  ],
  'Gaming':                [
    { name: 'Steam',         url: 'https://steamcommunity.com/id/[U]' },
    { name: 'Twitch',        url: 'https://www.twitch.tv/[U]' },
    { name: 'Xbox Gamertag', url: 'https://xboxgamertag.com/search/[U]' },
    { name: 'Roblox',        url: 'https://www.roblox.com/user.aspx?username=[U]' },
  ],
  'Forums & Communities':  [
    { name: 'Reddit',        url: 'https://www.reddit.com/user/[U]' },
    { name: 'Quora',         url: 'https://www.quora.com/profile/[U]' },
    { name: 'Medium',        url: 'https://medium.com/@[U]' },
    { name: 'Tumblr',        url: 'https://[U].tumblr.com' },
  ],
  'Photo & Identity':      [
    { name: 'Gravatar',      url: 'https://en.gravatar.com/[U]' },
    { name: 'Flickr',        url: 'https://www.flickr.com/people/[U]' },
  ],
  'Other':                 [
    { name: 'Pastebin',      url: 'https://pastebin.com/u/[U]' },
    { name: 'About.me',      url: 'https://about.me/[U]' },
    { name: 'Keybase',       url: 'https://keybase.io/[U]' },
    { name: 'Linktree',      url: 'https://linktr.ee/[U]' },
    { name: 'Hacker News',   url: 'https://news.ycombinator.com/user?id=[U]' },
    { name: 'Product Hunt',  url: 'https://www.producthunt.com/@[U]' },
    { name: 'Dev.to',        url: 'https://dev.to/[U]' },
    { name: 'Mastodon',      url: 'https://mastodon.social/@[U]' },
  ],
};

// ── Port reference database (100 common ports) ───────────────
const PORT_DB = {
  20:    { name:'FTP Data',             proto:'TCP',     risk:'Common',   desc:'FTP data transfer channel' },
  21:    { name:'FTP',                  proto:'TCP',     risk:'Elevated', desc:'File Transfer Protocol — anonymous access risk' },
  22:    { name:'SSH',                  proto:'TCP',     risk:'Common',   desc:'Secure Shell — encrypted remote access' },
  23:    { name:'Telnet',               proto:'TCP',     risk:'High',     desc:'Unencrypted remote terminal — should never be exposed' },
  25:    { name:'SMTP',                 proto:'TCP',     risk:'Common',   desc:'Email sending — open relay is a major misconfiguration' },
  53:    { name:'DNS',                  proto:'TCP/UDP', risk:'Common',   desc:'Domain Name System — zone transfer risk if misconfigured' },
  67:    { name:'DHCP Server',          proto:'UDP',     risk:'Common',   desc:'Dynamic Host Configuration Protocol' },
  69:    { name:'TFTP',                 proto:'UDP',     risk:'Elevated', desc:'Trivial FTP — no authentication, firmware boot protocol' },
  80:    { name:'HTTP',                 proto:'TCP',     risk:'Common',   desc:'Unencrypted web traffic' },
  110:   { name:'POP3',                 proto:'TCP',     risk:'Common',   desc:'Email retrieval — cleartext without TLS' },
  111:   { name:'RPCbind',              proto:'TCP/UDP', risk:'Elevated', desc:'Remote Procedure Call portmapper' },
  123:   { name:'NTP',                  proto:'UDP',     risk:'Common',   desc:'Network Time Protocol — UDP amplification risk' },
  135:   { name:'MS-RPC',               proto:'TCP',     risk:'High',     desc:'Windows RPC endpoint mapper — common attack target' },
  137:   { name:'NetBIOS-NS',           proto:'TCP/UDP', risk:'High',     desc:'NetBIOS Name Service — Windows network enumeration' },
  139:   { name:'NetBIOS-SSN',          proto:'TCP',     risk:'High',     desc:'NetBIOS Session — SMB over NetBIOS' },
  143:   { name:'IMAP',                 proto:'TCP',     risk:'Common',   desc:'Email access protocol — cleartext without TLS' },
  161:   { name:'SNMP',                 proto:'UDP',     risk:'High',     desc:'Network monitoring — default community strings are a major risk' },
  179:   { name:'BGP',                  proto:'TCP',     risk:'Elevated', desc:'Border Gateway Protocol — core internet routing' },
  389:   { name:'LDAP',                 proto:'TCP/UDP', risk:'Elevated', desc:'Directory service — may expose org structure' },
  443:   { name:'HTTPS',                proto:'TCP',     risk:'Common',   desc:'Encrypted web traffic (TLS/SSL)' },
  445:   { name:'SMB',                  proto:'TCP',     risk:'High',     desc:'Windows file sharing — EternalBlue/WannaCry attack vector' },
  465:   { name:'SMTPS',                proto:'TCP',     risk:'Common',   desc:'SMTP over TLS (legacy)' },
  500:   { name:'IKE/IPSec',            proto:'UDP',     risk:'Common',   desc:'VPN key exchange' },
  514:   { name:'Syslog',               proto:'UDP',     risk:'Elevated', desc:'System logging — may leak sensitive log data' },
  587:   { name:'SMTP Submission',      proto:'TCP',     risk:'Common',   desc:'Authenticated email submission — preferred SMTP port' },
  631:   { name:'IPP',                  proto:'TCP',     risk:'Elevated', desc:'Internet Printing Protocol — printer exposure' },
  636:   { name:'LDAPS',                proto:'TCP',     risk:'Common',   desc:'LDAP over SSL' },
  993:   { name:'IMAPS',                proto:'TCP',     risk:'Common',   desc:'IMAP over TLS' },
  995:   { name:'POP3S',                proto:'TCP',     risk:'Common',   desc:'POP3 over TLS' },
  1080:  { name:'SOCKS Proxy',          proto:'TCP',     risk:'High',     desc:'SOCKS proxy — common in anonymizer/botnet networks' },
  1194:  { name:'OpenVPN',              proto:'TCP/UDP', risk:'Common',   desc:'OpenVPN server' },
  1433:  { name:'MSSQL',                proto:'TCP',     risk:'High',     desc:'Microsoft SQL Server — commonly targeted database' },
  1434:  { name:'MSSQL Browser',        proto:'UDP',     risk:'High',     desc:'MSSQL Browser service — enables SQL Server discovery' },
  1521:  { name:'Oracle DB',            proto:'TCP',     risk:'High',     desc:'Oracle database listener' },
  1723:  { name:'PPTP VPN',             proto:'TCP',     risk:'Elevated', desc:'Point-to-Point Tunneling VPN — weak crypto, deprecated' },
  1883:  { name:'MQTT',                 proto:'TCP',     risk:'High',     desc:'IoT messaging — often exposed without authentication' },
  2049:  { name:'NFS',                  proto:'TCP/UDP', risk:'High',     desc:'Network File System — may expose file shares' },
  2082:  { name:'cPanel HTTP',          proto:'TCP',     risk:'Common',   desc:'cPanel web hosting control panel (unencrypted)' },
  2083:  { name:'cPanel HTTPS',         proto:'TCP',     risk:'Common',   desc:'cPanel over TLS' },
  2181:  { name:'ZooKeeper',            proto:'TCP',     risk:'High',     desc:'Apache ZooKeeper — often no auth in default config' },
  2375:  { name:'Docker API',           proto:'TCP',     risk:'High',     desc:'Docker daemon API (unencrypted) — full host takeover if exposed' },
  2376:  { name:'Docker TLS',           proto:'TCP',     risk:'Elevated', desc:'Docker daemon API over TLS' },
  2379:  { name:'etcd',                 proto:'TCP',     risk:'High',     desc:'Kubernetes etcd — cluster state database' },
  3000:  { name:'HTTP Alt (Grafana…)',  proto:'TCP',     risk:'Common',   desc:'Common dev/app server port — Grafana, Node.js, etc' },
  3306:  { name:'MySQL',                proto:'TCP',     risk:'High',     desc:'MySQL database — should never be publicly exposed' },
  3389:  { name:'RDP',                  proto:'TCP',     risk:'High',     desc:'Windows Remote Desktop — extremely high-value attack target' },
  3690:  { name:'SVN',                  proto:'TCP',     risk:'Elevated', desc:'Subversion version control server' },
  4369:  { name:'Erlang/RabbitMQ',      proto:'TCP',     risk:'Elevated', desc:'Erlang port mapper / RabbitMQ discovery' },
  4444:  { name:'Metasploit Default',   proto:'TCP',     risk:'High',     desc:'Common Metasploit listener — malware indicator if found open' },
  4848:  { name:'GlassFish Admin',      proto:'TCP',     risk:'Elevated', desc:'GlassFish/Payara Java EE admin console' },
  5000:  { name:'HTTP Alt / Flask',     proto:'TCP',     risk:'Common',   desc:'Common app server port — Flask, Docker Registry' },
  5432:  { name:'PostgreSQL',           proto:'TCP',     risk:'High',     desc:'PostgreSQL database server' },
  5601:  { name:'Kibana',               proto:'TCP',     risk:'High',     desc:'Elasticsearch Kibana dashboard — often no authentication' },
  5672:  { name:'RabbitMQ AMQP',        proto:'TCP',     risk:'Elevated', desc:'RabbitMQ AMQP message broker' },
  5900:  { name:'VNC',                  proto:'TCP',     risk:'High',     desc:'Virtual Network Computing — screen share, often no auth' },
  5984:  { name:'CouchDB',              proto:'TCP',     risk:'High',     desc:'CouchDB REST API — /_all_dbs dumps all databases' },
  6379:  { name:'Redis',                proto:'TCP',     risk:'High',     desc:'Redis cache — no auth by default, potential RCE vector' },
  6443:  { name:'Kubernetes API',       proto:'TCP',     risk:'High',     desc:'Kubernetes API server — cluster control plane' },
  7001:  { name:'WebLogic',             proto:'TCP',     risk:'High',     desc:'Oracle WebLogic — frequent remote code execution CVEs' },
  8000:  { name:'HTTP Alt',             proto:'TCP',     risk:'Common',   desc:'Common development HTTP server port' },
  8008:  { name:'HTTP Alt',             proto:'TCP',     risk:'Common',   desc:'Alternative HTTP port' },
  8080:  { name:'HTTP Proxy/Alt',       proto:'TCP',     risk:'Common',   desc:'HTTP proxy or alternative web server port' },
  8081:  { name:'HTTP Alt',             proto:'TCP',     risk:'Common',   desc:'Alternative HTTP port — common in dev environments' },
  8443:  { name:'HTTPS Alt',            proto:'TCP',     risk:'Common',   desc:'Alternative HTTPS port — cPanel, Tomcat, Jenkins' },
  8888:  { name:'Jupyter Notebook',     proto:'TCP',     risk:'High',     desc:'Jupyter Notebook — code execution, often no authentication' },
  9000:  { name:'PHP-FPM / SonarQube',  proto:'TCP',     risk:'Elevated', desc:'PHP FastCGI or SonarQube code analysis server' },
  9090:  { name:'Prometheus',           proto:'TCP',     risk:'Elevated', desc:'Prometheus metrics — may expose sensitive infra data' },
  9092:  { name:'Apache Kafka',         proto:'TCP',     risk:'High',     desc:'Kafka message broker — often no auth by default' },
  9200:  { name:'Elasticsearch',        proto:'TCP',     risk:'High',     desc:'Elasticsearch REST API — famously misconfigured, no auth' },
  9300:  { name:'Elasticsearch Cluster',proto:'TCP',     risk:'High',     desc:'Elasticsearch internal cluster communication' },
  10000: { name:'Webmin',               proto:'TCP',     risk:'High',     desc:'Webmin server admin — web-based Linux management panel' },
  11211: { name:'Memcached',            proto:'TCP/UDP', risk:'High',     desc:'Memcached — UDP amplification DDoS, no auth by default' },
  15672: { name:'RabbitMQ Management',  proto:'TCP',     risk:'Elevated', desc:'RabbitMQ Management plugin web UI' },
  22222: { name:'SSH Alt',              proto:'TCP',     risk:'Elevated', desc:'SSH on alternate port — security-by-obscurity' },
  25565: { name:'Minecraft',            proto:'TCP',     risk:'Common',   desc:'Minecraft Java Edition server' },
  27017: { name:'MongoDB',              proto:'TCP',     risk:'High',     desc:'MongoDB — infamous for exposed databases with zero auth' },
  27018: { name:'MongoDB Shard',        proto:'TCP',     risk:'High',     desc:'MongoDB shard server' },
  28017: { name:'MongoDB HTTP',         proto:'TCP',     risk:'High',     desc:'MongoDB HTTP admin interface (deprecated in v3.6)' },
  50000: { name:'SAP',                  proto:'TCP',     risk:'Elevated', desc:'SAP application server' },
  50070: { name:'Hadoop HDFS NameNode', proto:'TCP',     risk:'High',     desc:'Hadoop HDFS NameNode web UI — may expose cluster data' },
  50075: { name:'Hadoop DataNode',      proto:'TCP',     risk:'High',     desc:'Hadoop DataNode web UI' },
  55000: { name:'Wazuh API',            proto:'TCP',     risk:'Elevated', desc:'Wazuh SIEM REST API' },
};

// ── Shared tool helpers ───────────────────────────────────────
function _toolOpen(urls, target) {
  target = target || document.getElementById('setting-link-target')?.value || '_blank';
  urls.forEach(u => window.open(u.url, target));
}

function _toolSave(key, val) {
  try { sessionStorage.setItem('df_tool_' + key, val); } catch {}
}
function _toolRestore(key) {
  try { return sessionStorage.getItem('df_tool_' + key) || ''; } catch { return ''; }
}

function _toolChecklist(items, ts) {
  return `<div class="tool-checklist">${items.map((r, i) => `
    <div class="tool-cl-row" data-idx="${i}">
      <span class="tool-cl-status">OK</span>
      <span class="tool-cl-label">${_esc(r.label)}</span>
      <span class="tool-cl-desc">${_esc(r.desc)}</span>
      <button class="tool-cl-reopen btn btn-sm" data-url="${_esc(r.url)}">OPEN</button>
    </div>`).join('')}
  <div class="tool-cl-time">Launched at ${ts}</div>
  </div>`;
}

function _toolTable(headers, rows) {
  return `<table class="tool-data-table"><thead><tr>${
    headers.map(h => `<th>${_esc(h)}</th>`).join('')
  }</tr></thead><tbody>${
    rows.map((row, ri) => `<tr class="${ri % 2 ? 'tool-tr-alt' : ''}">${
      row.map(c => `<td>${c}</td>`).join('')
    }</tr>`).join('')
  }</tbody></table>`;
}

function _toolShowOutput(elOut, html) {
  elOut.innerHTML = html;
  elOut.hidden = false;
  elOut.style.display = 'block';
  elOut.style.opacity = '0';
  requestAnimationFrame(() => { elOut.style.transition = 'opacity 0.3s'; elOut.style.opacity = '1'; });
}

// ── Image URL validator ───────────────────────────────────────
function _isImageUrl(v) {
  v = v.trim();
  if (!/^https?:\/\//i.test(v)) return false;
  return /\.(jpe?g|png|gif|webp|bmp|tiff?)(\?.*)?$/i.test(v) || /^https?:\/\/.+\.(com|net|org|io|co)/i.test(v);
}

// ── Load exif-js from CDN ─────────────────────────────────────
let _exifJsReady = null;
function _loadExifJs() {
  if (!_exifJsReady) {
    _exifJsReady = new Promise((res, rej) => {
      if (window.EXIF) { res(); return; }
      const s = document.createElement('script');
      s.src = 'https://cdnjs.cloudflare.com/ajax/libs/exif-js/2.3.0/exif.js';
      s.onload = res; s.onerror = rej;
      document.head.appendChild(s);
    });
  }
  return _exifJsReady;
}

// ── EXIF GPS → decimal ────────────────────────────────────────
function _gpsDecimal(vals, ref) {
  if (!vals || vals.length < 3) return null;
  const d = vals[0] + vals[1] / 60 + vals[2] / 3600;
  return (ref === 'S' || ref === 'W') ? -d : d;
}

function _renderExifTags(tags, sourceLabel) {
  const FIELDS = [
    ['Make','Camera Make'], ['Model','Camera Model'],
    ['DateTimeOriginal','Date / Time Taken'], ['DateTime','Date Modified'],
    ['GPSLatitude','GPS Latitude'], ['GPSLongitude','GPS Longitude'], ['GPSAltitude','GPS Altitude'],
    ['Software','Software Used'], ['ImageWidth','Image Width'], ['ImageLength','Image Height'],
    ['Orientation','Orientation'], ['ExposureTime','Exposure Time'],
    ['FNumber','F-Number / Aperture'], ['ISOSpeedRatings','ISO Speed'],
    ['Flash','Flash'], ['FocalLength','Focal Length'], ['ColorSpace','Color Space'],
    ['Artist','Artist / Author'], ['Copyright','Copyright'], ['ImageDescription','Description'],
  ];

  const lat  = _gpsDecimal(tags.GPSLatitude,  tags.GPSLatitudeRef);
  const lng  = _gpsDecimal(tags.GPSLongitude, tags.GPSLongitudeRef);
  const rows = [];

  for (const [key, label] of FIELDS) {
    let val = tags[key];
    if (val === undefined || val === null || val === '') continue;
    if (key === 'GPSLatitude' && lat !== null) val = lat.toFixed(6) + '°';
    else if (key === 'GPSLongitude' && lng !== null) val = lng.toFixed(6) + '°';
    else if (key === 'ExposureTime' && typeof val === 'number') val = `1/${Math.round(1/val)}s`;
    else if (key === 'FNumber' && typeof val === 'number') val = `f/${val}`;
    else if (key === 'FocalLength' && typeof val === 'number') val = `${val}mm`;
    else val = String(val);

    const isGPS = key === 'GPSLatitude' || key === 'GPSLongitude';
    rows.push([`<span class="${isGPS ? 'tool-gps-field' : ''}">${_esc(label)}</span>`, _esc(val)]);
  }

  if (!rows.length) {
    return `<div class="tool-no-data">No EXIF metadata found — image may have been stripped. Try the forensics tool above.</div>`;
  }

  let gpsHtml = '';
  if (lat !== null && lng !== null) {
    const mapUrl = `https://maps.google.com/maps?q=${lat.toFixed(6)},${lng.toFixed(6)}`;
    gpsHtml = `<div class="tool-gps-link"><a href="${_esc(mapUrl)}" target="_blank" rel="noopener">VIEW ON MAP (${lat.toFixed(4)}, ${lng.toFixed(4)})</a></div>`;
  }

  return `<div class="tool-exif-source">${_esc(sourceLabel)}</div>` +
    gpsHtml +
    _toolTable(['FIELD', 'VALUE'], rows);
}

// ── UA parser ────────────────────────────────────────────────
function _parseUA(ua) {
  if (!ua.trim()) return null;
  const BOTS = [
    [/Googlebot/i,'Googlebot'],[/bingbot/i,'Bingbot'],[/Slurp/i,'Yahoo Slurp'],
    [/DuckDuckBot/i,'DuckDuckBot'],[/Baiduspider/i,'Baiduspider'],[/YandexBot/i,'YandexBot'],
    [/facebookexternalhit/i,'Facebook Crawler'],[/Twitterbot/i,'Twitterbot'],
    [/LinkedInBot/i,'LinkedInBot'],[/AhrefsBot/i,'AhrefsBot'],[/SemrushBot/i,'SemrushBot'],
    [/python-requests/i,'Python Requests'],[/curl\//i,'curl'],[/wget/i,'wget'],
    [/Go-http-client/i,'Go HTTP Client'],[/Java\//i,'Java HTTP'],
  ];
  for (const [re,name] of BOTS) {
    if (re.test(ua)) return { browser:name, engine:'N/A', os:'N/A', device:'Bot/Crawler', isBot:true };
  }
  let os = 'Unknown';
  if (/Windows NT 10\.0/i.test(ua))          os = 'Windows 10 / 11';
  else if (/Windows NT 6\.3/i.test(ua))      os = 'Windows 8.1';
  else if (/Windows NT 6\.1/i.test(ua))      os = 'Windows 7';
  else if (/Windows NT/i.test(ua))           os = 'Windows';
  else if (/CrOS/i.test(ua))                 os = 'ChromeOS';
  else if (/iPhone OS ([\d_]+)/i.test(ua))   os = 'iOS ' + ua.match(/iPhone OS ([\d_]+)/i)[1].replace(/_/g,'.');
  else if (/Android ([\d.]+)/i.test(ua))     os = 'Android ' + ua.match(/Android ([\d.]+)/i)[1];
  else if (/Mac OS X ([\d_.]+)/i.test(ua))   os = 'macOS ' + ua.match(/Mac OS X ([\d_.]+)/i)[1].replace(/_/g,'.');
  else if (/Linux/i.test(ua))                os = 'Linux';

  let device = 'Desktop';
  if (/iPhone/i.test(ua))                    device = 'Mobile (iPhone)';
  else if (/Android.*Mobile/i.test(ua))      device = 'Mobile (Android)';
  else if (/iPad/i.test(ua))                 device = 'Tablet (iPad)';
  else if (/Android/i.test(ua))              device = 'Tablet (Android)';

  let browser = 'Unknown', engine = 'Unknown';
  if (/Edg\/([\d]+)/i.test(ua))              { browser='Edge '      + ua.match(/Edg\/([\d]+)/i)[1];        engine='Blink'; }
  else if (/OPR\/([\d]+)/i.test(ua))         { browser='Opera '     + ua.match(/OPR\/([\d]+)/i)[1];        engine='Blink'; }
  else if (/Chrome\/([\d]+)/i.test(ua))      { browser='Chrome '    + ua.match(/Chrome\/([\d]+)/i)[1];     engine='Blink'; }
  else if (/Firefox\/([\d]+)/i.test(ua))     { browser='Firefox '   + ua.match(/Firefox\/([\d]+)/i)[1];    engine='Gecko'; }
  else if (/Version\/([\d]+).*Safari/i.test(ua)){ browser='Safari ' + ua.match(/Version\/([\d]+)/i)[1];   engine='WebKit'; }
  else if (/Trident|MSIE/i.test(ua))         { browser='Internet Explorer'; engine='Trident'; }

  return { browser, engine, os, device, isBot:false };
}

// ── CIDR calculator ───────────────────────────────────────────
function _calcCIDR(input) {
  const parts = input.trim().split('/');
  if (parts.length !== 2) return null;
  const prefix = parseInt(parts[1]);
  if (isNaN(prefix) || prefix < 0 || prefix > 32) return null;
  const oct = parts[0].split('.').map(Number);
  if (oct.length !== 4 || oct.some(o => isNaN(o) || o < 0 || o > 255)) return null;
  const toInt = o => ((o[0]<<24)|(o[1]<<16)|(o[2]<<8)|o[3]) >>> 0;
  const toIP  = n => [(n>>>24)&255,(n>>>16)&255,(n>>>8)&255,n&255].join('.');
  const ip   = toInt(oct);
  const mask = prefix === 0 ? 0 : (0xFFFFFFFF << (32-prefix)) >>> 0;
  const wild = (~mask) >>> 0;
  const net  = (ip & mask) >>> 0;
  const bc   = (net | wild) >>> 0;
  const hosts = prefix >= 31 ? Math.pow(2, 32-prefix) : Math.pow(2, 32-prefix) - 2;
  return {
    network: toIP(net), broadcast: toIP(bc),
    first: prefix >= 31 ? toIP(net) : toIP(net+1),
    last:  prefix >= 31 ? toIP(bc)  : toIP(bc-1),
    hosts: Math.max(0, hosts), mask: toIP(mask), wildcard: toIP(wild),
  };
}

// ── IPv4 converter ────────────────────────────────────────────
function _convertIP(input) {
  const oct = input.trim().split('.').map(Number);
  if (oct.length !== 4 || oct.some(o => isNaN(o) || o < 0 || o > 255)) return null;
  const n = ((oct[0]<<24)|(oct[1]<<16)|(oct[2]<<8)|oct[3]) >>> 0;
  return {
    decimal: input.trim(),
    hex: '0x' + n.toString(16).padStart(8,'0').toUpperCase(),
    binary: oct.map(o => o.toString(2).padStart(8,'0')).join('.'),
    integer: n,
    rdns: oct.slice().reverse().join('.') + '.in-addr.arpa',
  };
}

// ── IP validation ─────────────────────────────────────────────
function _isValidIP(v) {
  v = v.trim();
  const v4 = /^(\d{1,3}\.){3}\d{1,3}$/;
  if (v4.test(v)) return v.split('.').every(o => +o >= 0 && +o <= 255);
  return /^[0-9a-fA-F:]+$/.test(v) && v.includes(':'); // basic IPv6
}

// ── Main initTools entry point ────────────────────────────────
function initTools() {
  _buildImageSection();
  _buildEmailSection();
  _buildNetworkSection();
  _buildScrubberSection();
  _buildHashSection();

  // True tab switching — one section visible at a time
  const TOOL_TAB_KEY = 'df_tool_tab';
  const btns = document.querySelectorAll('[data-tsec]');
  const secMap = {};
  document.querySelectorAll('.tool-section').forEach(s => {
    secMap[s.id.replace('tool-section-', '')] = s;
  });

  function _switchToolTab(id) {
    btns.forEach(b => b.classList.toggle('lsnav-active', b.dataset.tsec === id));
    Object.keys(secMap).forEach(k => { secMap[k].hidden = (k !== id); });
    try { sessionStorage.setItem(TOOL_TAB_KEY, id); } catch {}
  }

  btns.forEach(btn => {
    btn.addEventListener('click', () => _switchToolTab(btn.dataset.tsec));
  });

  // Restore saved tab or default to image
  const savedTab = (() => { try { return sessionStorage.getItem(TOOL_TAB_KEY); } catch { return null; } })();
  const startTab = (savedTab && secMap[savedTab]) ? savedTab : 'image';
  _switchToolTab(startTab);

  // Restore session input state
  [['t-imgurl','img'],['t-exifurl','exif'],['t-email','email'],
   ['t-username','username'],['t-ip','ip']].forEach(([id, key]) => {
    const el  = document.getElementById(id);
    const val = _toolRestore(key);
    if (el && val) { el.value = val; el.dispatchEvent(new Event('input')); }
  });
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// TOOL 1 — IMAGE & METADATA
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function _buildImageSection() {
  const sec = document.getElementById('tool-section-image');
  if (!sec) return;

  sec.innerHTML = `
    <div class="tool-panel-hdr">
      <span class="tool-panel-title">IMAGE &amp; METADATA</span>
      <span class="tool-panel-desc">Reverse search an image and extract publicly available metadata clues from any image URL</span>
    </div>
    <div class="tool-pair">
      <!-- Sub-tool A: Reverse Search -->
      <div class="tool-sub">
        <div class="tool-sub-name">REVERSE IMAGE SEARCH</div>
        <div class="tool-sub-desc">Open 6 reverse image search engines simultaneously</div>
        <input type="url" class="tool-input" id="t-imgurl" placeholder="https://example.com/photo.jpg" autocomplete="off" spellcheck="false">
        <div class="tool-err" id="t-imgurl-err" hidden><p class="tool-err-msg"></p></div>
        <button class="tool-btn" id="t-btn-reverse" disabled>REVERSE SEARCH — 6 ENGINES</button>
        <div class="tool-out" id="t-reverse-out" hidden></div>
      </div>
      <!-- Sub-tool B: EXIF Extractor -->
      <div class="tool-sub">
        <div class="tool-sub-name">EXIF METADATA EXTRACTOR</div>
        <div class="tool-sub-desc">Extract EXIF metadata from any publicly accessible image URL</div>
        <input type="url" class="tool-input" id="t-exifurl" placeholder="https://example.com/photo.jpg" autocomplete="off" spellcheck="false">
        <button class="tool-btn" id="t-btn-exif" disabled>EXTRACT METADATA</button>
        <div class="tool-file-sep">OR UPLOAD AN IMAGE FILE DIRECTLY</div>
        <div class="tool-drop" id="t-exif-drop" tabindex="0" style="cursor:pointer;position:relative">
          DROP IMAGE HERE OR CLICK TO BROWSE
          <input type="file" id="t-exif-file" accept=".jpg,.jpeg,.png,.gif,.webp,.tiff,.bmp" style="display:none;pointer-events:none;">
        </div>
        <div class="tool-local-badge" id="t-local-badge" hidden>LOCAL FILE — not uploaded anywhere</div>
        <div class="tool-out" id="t-exif-out" hidden></div>
      </div>
    </div>
  `;

  // ── Reverse image search logic ────────────────────────────
  const imgInput = document.getElementById('t-imgurl');
  const btnReverse = document.getElementById('t-btn-reverse');
  const errEl    = document.getElementById('t-imgurl-err');
  const reverseOut = document.getElementById('t-reverse-out');

  const REVERSE_ENGINES = [
    { label:'Google Lens',      desc:'Google Lens reverse image search',          url: u => `https://lens.google.com/uploadbyurl?url=${encodeURIComponent(u)}` },
    { label:'TinEye',           desc:'Oldest reverse image search engine',        url: u => `https://tineye.com/search?url=${encodeURIComponent(u)}` },
    { label:'Bing Visual',      desc:'Microsoft Bing visual search',              url: u => `https://www.bing.com/images/search?view=detailv2&iss=sbi&q=imgurl:${encodeURIComponent(u)}` },
    { label:'Yandex Images',    desc:'Often finds results Google misses',         url: u => `https://yandex.com/images/search?url=${encodeURIComponent(u)}&rpt=imageview` },
    { label:'EXIF.tools',       desc:'Online EXIF metadata reader for the URL',   url: u => `https://exif.tools/image.php?url=${encodeURIComponent(u)}` },
    { label:'Photo Forensics',  desc:'Detect image manipulation and editing',     url: u => `https://29a.ch/photo-forensics/#forensic-magnifier|url=${encodeURIComponent(u)}` },
  ];

  imgInput.addEventListener('input', () => {
    _toolSave('img', imgInput.value);
    const ok = _isImageUrl(imgInput.value);
    btnReverse.disabled = !ok;
    errEl.hidden = ok || !imgInput.value.trim();
    if (!ok && imgInput.value.trim()) { errEl.hidden = false; errEl.querySelector('.tool-err-msg').textContent = 'Enter a valid image URL starting with https://'; }
  });

  btnReverse.addEventListener('click', () => {
    const u   = imgInput.value.trim();
    const tgt = document.getElementById('setting-link-target')?.value || '_blank';
    const resources = REVERSE_ENGINES.map(e => ({ label: e.label, desc: e.desc, url: e.url(u) }));
    resources.forEach(r => window.open(r.url, tgt));
    const ts = new Date().toLocaleTimeString();
    _toolShowOutput(reverseOut,
      `<div class="tool-launch-hdr">6 tabs opened at ${ts}</div>` +
      `<div class="tool-checklist">${resources.map(r =>
        `<div class="tool-cl-row"><span class="tool-cl-ck">OK</span><span class="tool-cl-label">${_esc(r.label)}</span><span class="tool-cl-desc">${_esc(r.desc)}</span><button class="btn btn-sm tool-cl-open" data-url="${_esc(r.url)}">OPEN</button></div>`
      ).join('')}</div>`
    );
    reverseOut.querySelectorAll('.tool-cl-open').forEach(btn => {
      btn.addEventListener('click', () => window.open(btn.dataset.url, tgt));
    });
    HistoryStore.addTool('image', u, resources);
    renderHistory();
  });

  // ── EXIF extractor logic ─────────────────────────────────
  const exifInput  = document.getElementById('t-exifurl');
  const btnExif    = document.getElementById('t-btn-exif');
  const exifOut    = document.getElementById('t-exif-out');
  const fileInput  = document.getElementById('t-exif-file');
  const localBadge = document.getElementById('t-local-badge');
  const dropZone   = document.getElementById('t-exif-drop');

  exifInput.addEventListener('input', () => {
    _toolSave('exif', exifInput.value);
    btnExif.disabled = !_isImageUrl(exifInput.value);
    localBadge.hidden = true;
  });

  btnExif.addEventListener('click', () => _doExifUrl(exifInput.value.trim()));

  fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (!file) return;
    localBadge.hidden = false;
    exifInput.value = '';
    btnExif.disabled = true;
    _doExifFile(file);
  });

  dropZone.addEventListener('click', e => {
    e.stopPropagation();
    fileInput.click();
  });
  fileInput.addEventListener('click', e => e.stopPropagation());

  ['dragover','dragenter'].forEach(ev => {
    dropZone.addEventListener(ev, e => { e.preventDefault(); dropZone.classList.add('tool-drop-hover'); });
  });
  dropZone.addEventListener('dragleave', () => dropZone.classList.remove('tool-drop-hover'));
  dropZone.addEventListener('drop', e => {
    e.preventDefault(); dropZone.classList.remove('tool-drop-hover');
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) { localBadge.hidden = false; _doExifFile(file); }
  });

  function _doExifUrl(url) {
    _toolShowOutput(exifOut, '<div class="tool-loading">LOADING EXIF DATA<span class="tool-dots"><span>.</span><span>.</span><span>.</span></span></div>');
    _loadExifJs().then(() => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = function() {
        window.EXIF.getData(this, function() {
          const tags = window.EXIF.getAllTags(this);
          _toolShowOutput(exifOut, _renderExifTags(tags, 'Source: ' + url));
        });
      };
      img.onerror = () => {
        _toolShowOutput(exifOut,
          `<div class="tool-no-data">Direct fetch blocked by CORS policy. Opening EXIF.tools for this image instead…</div>`);
        window.open(`https://exif.tools/image.php?url=${encodeURIComponent(url)}`, '_blank');
      };
      img.src = url;
    }).catch(() => {
      _toolShowOutput(exifOut, '<div class="tool-err-msg">Could not load EXIF library. Check your connection.</div>');
    });
  }

  function _doExifFile(file) {
    _toolShowOutput(exifOut, '<div class="tool-loading">READING FILE<span class="tool-dots"><span>.</span><span>.</span><span>.</span></span></div>');
    _loadExifJs().then(() => {
      const objUrl = URL.createObjectURL(file);
      const img = new Image();
      img.onload = function() {
        window.EXIF.getData(this, function() {
          const tags = window.EXIF.getAllTags(this);
          URL.revokeObjectURL(objUrl);
          _toolShowOutput(exifOut, _renderExifTags(tags, 'Source: ' + file.name + ' (local)'));
        });
      };
      img.onerror = () => { URL.revokeObjectURL(objUrl); _toolShowOutput(exifOut, '<div class="tool-err-msg">Could not read image file.</div>'); };
      img.src = objUrl;
    }).catch(() => {
      _toolShowOutput(exifOut, '<div class="tool-err-msg">Could not load EXIF library. Check your connection.</div>');
    });
  }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// TOOL 2 — EMAIL & USERNAME
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function _buildEmailSection() {
  const sec = document.getElementById('tool-section-email');
  if (!sec) return;

  const allPlatformCount = Object.values(USERNAME_PLATFORMS).reduce((s,a) => s + a.length, 0);

  sec.innerHTML = `
    <div class="tool-panel-hdr">
      <span class="tool-panel-title">EMAIL &amp; USERNAME</span>
      <span class="tool-panel-desc">Investigate an email address or username across breach databases, social platforms, and OSINT resources — all free, no API keys required</span>
    </div>
    <div class="tool-pair">
      <!-- Sub-tool A: Email Investigator -->
      <div class="tool-sub">
        <div class="tool-sub-name">EMAIL INVESTIGATOR</div>
        <div class="tool-sub-desc">Launch 10 OSINT resources for any email address</div>
        <input type="email" class="tool-input" id="t-email" placeholder="target@example.com" autocomplete="off" spellcheck="false">
        <div class="tool-email-hint" id="t-email-hint"></div>
        <button class="tool-btn" id="t-btn-email" disabled>INVESTIGATE EMAIL — 10 RESOURCES</button>
        <div class="tool-out" id="t-email-out" hidden></div>
      </div>
      <!-- Sub-tool B: Username Investigator -->
      <div class="tool-sub">
        <div class="tool-sub-name">USERNAME INVESTIGATOR</div>
        <div class="tool-sub-desc">Search a username across social, professional, gaming, and more</div>
        <input type="text" class="tool-input" id="t-username" placeholder="username or handle" autocomplete="off" spellcheck="false" maxlength="50">
        <div class="tool-platform-toggles" id="t-platform-toggles"></div>
        <button class="tool-btn" id="t-btn-username" disabled>SEARCH USERNAME — ${allPlatformCount} PLATFORMS</button>
        <div class="tool-out" id="t-username-out" hidden></div>
      </div>
    </div>
  `;

  // ── Email investigator ────────────────────────────────────
  const emailIn  = document.getElementById('t-email');
  const emailHint = document.getElementById('t-email-hint');
  const btnEmail = document.getElementById('t-btn-email');
  const emailOut = document.getElementById('t-email-out');

  const _emailValid = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

  emailIn.addEventListener('input', () => {
    const v = emailIn.value.trim();
    _toolSave('email', v);
    btnEmail.disabled = !_emailValid(v);
    if (_emailValid(v)) {
      const [user, domain] = v.split('@');
      emailHint.textContent = `Username: ${user}  |  Domain: ${domain}`;
    } else {
      emailHint.textContent = '';
    }
  });

  btnEmail.addEventListener('click', () => {
    const email = emailIn.value.trim();
    const [user, domain] = email.split('@');
    const enc  = encodeURIComponent;
    const tgt  = document.getElementById('setting-link-target')?.value || '_blank';

    const resources = [
      { label:'HaveIBeenPwned',    desc:'Check if email appears in known data breaches',      url:`https://haveibeenpwned.com/account/${enc(email)}` },
      { label:'DeHashed',          desc:'Breach database search (free preview)',               url:`https://dehashed.com/search?query=${enc(email)}` },
      { label:'Pastebin Dork',     desc:'Google dork for email on Pastebin',                  url:`https://www.google.com/search?q=site%3Apastebin.com+%22${enc(email)}%22` },
      { label:'Hunter.io Domain',  desc:'Find other emails at the same domain',               url:`https://hunter.io/domain-search/${enc(domain)}` },
      { label:'Email Format',      desc:'Discover company email naming patterns',             url:`https://www.email-format.com/d/${enc(domain)}/` },
      { label:'MXToolbox Headers', desc:'Analyze email headers (manual paste)',               url:`https://mxtoolbox.com/EmailHeaders.aspx` },
      { label:'Google Exact',      desc:'Google search for exact email address',              url:`https://www.google.com/search?q=%22${enc(email)}%22` },
      { label:'Bing Exact',        desc:'Bing search for exact email address',                url:`https://www.bing.com/search?q=%22${enc(email)}%22` },
      { label:'Username Sweep',    desc:'Search email username across major platforms',       url:`https://www.google.com/search?q=%22${enc(user)}%22+site%3Agithub.com+OR+site%3Alinkedin.com+OR+site%3Areddit.com` },
      { label:'GitHub Commits',    desc:'Find commits associated with this email',            url:`https://github.com/search?q=${enc(email)}&type=commits` },
    ];

    resources.forEach(r => window.open(r.url, tgt));
    const ts = new Date().toLocaleTimeString();

    const checkItems = [
      { text:'HaveIBeenPwned — note which breaches found', id:'hcp0' },
      { text:'Check breach dates — older = more likely stale password', id:'hcp1' },
      { text:"Hunter.io — confirms email is real if domain match found", id:'hcp2' },
      { text:'GitHub commits — reveals real name if commit found', id:'hcp3' },
      { text:'Pastebin — look for credential combos containing email', id:'hcp4' },
      { text:'Note the email domain — research it as a company', id:'hcp5' },
    ];

    const clKey = 'df_ecl_' + encodeURIComponent(email);
    const savedCL = (() => { try { return JSON.parse(sessionStorage.getItem(clKey) || '{}'); } catch { return {}; } })();

    _toolShowOutput(emailOut,
      `<div class="tool-launch-hdr">10 tabs opened at ${ts}</div>` +
      `<div class="tool-checklist">${resources.map(r =>
        `<div class="tool-cl-row"><span class="tool-cl-ck">OK</span><span class="tool-cl-label">${_esc(r.label)}</span><span class="tool-cl-desc">${_esc(r.desc)}</span><button class="btn btn-sm tool-cl-open" data-url="${_esc(r.url)}">OPEN</button></div>`
      ).join('')}</div>` +
      `<div class="tool-invest-card">
        <div class="tool-invest-hdr">INVESTIGATION CHECKLIST</div>
        ${checkItems.map(c => `<label class="tool-invest-row"><input type="checkbox" class="tool-invest-cb" data-cid="${c.id}" ${savedCL[c.id]?'checked':''}> <span>${_esc(c.text)}</span></label>`).join('')}
        <button class="tool-invest-reset btn btn-sm" style="margin-top:8px">RESET CHECKLIST</button>
      </div>`
    );

    emailOut.querySelectorAll('.tool-cl-open').forEach(btn => btn.addEventListener('click', () => window.open(btn.dataset.url, tgt)));
    emailOut.querySelectorAll('.tool-invest-cb').forEach(cb => {
      cb.addEventListener('change', () => {
        const state = {};
        emailOut.querySelectorAll('.tool-invest-cb').forEach(c => { state[c.dataset.cid] = c.checked; });
        try { sessionStorage.setItem(clKey, JSON.stringify(state)); } catch {}
      });
    });
    emailOut.querySelector('.tool-invest-reset')?.addEventListener('click', () => {
      emailOut.querySelectorAll('.tool-invest-cb').forEach(c => { c.checked = false; });
      try { sessionStorage.removeItem(clKey); } catch {}
    });

    HistoryStore.addTool('email', email, resources);
    renderHistory();
  });

  // ── Username investigator ─────────────────────────────────
  const unameIn  = document.getElementById('t-username');
  const btnUname = document.getElementById('t-btn-username');
  const unameOut = document.getElementById('t-username-out');
  const togglesEl = document.getElementById('t-platform-toggles');

  const catChecked = {};
  Object.keys(USERNAME_PLATFORMS).forEach(cat => { catChecked[cat] = true; });

  function _updateUnameBtn() {
    const uname = unameIn.value.trim().replace(/^@/, '');
    const count = Object.keys(USERNAME_PLATFORMS)
      .filter(cat => catChecked[cat])
      .reduce((s, cat) => s + USERNAME_PLATFORMS[cat].length, 0);
    const ok = uname.length >= 1 && uname.length <= 50 && !/\s/.test(uname);
    btnUname.disabled = !ok;
    btnUname.textContent = `SEARCH USERNAME — ${count} PLATFORMS`;
  }

  // Build platform toggles
  togglesEl.innerHTML = Object.keys(USERNAME_PLATFORMS).map(cat => `
    <label class="tool-toggle-row">
      <input type="checkbox" class="tool-cat-cb" data-cat="${_esc(cat)}" checked>
      <span class="tool-cat-label">${_esc(cat)}</span>
      <span class="tool-cat-count">(${USERNAME_PLATFORMS[cat].length})</span>
    </label>`).join('');

  togglesEl.querySelectorAll('.tool-cat-cb').forEach(cb => {
    cb.addEventListener('change', () => { catChecked[cb.dataset.cat] = cb.checked; _updateUnameBtn(); });
  });

  unameIn.addEventListener('input', () => {
    const v = unameIn.value.trim().replace(/^@/, '');
    _toolSave('username', unameIn.value);
    _updateUnameBtn();
  });

  btnUname.addEventListener('click', () => {
    const uname = unameIn.value.trim().replace(/^@/, '');
    const enc   = encodeURIComponent(uname);
    const tgt   = document.getElementById('setting-link-target')?.value || '_blank';

    const resources = [];
    Object.keys(USERNAME_PLATFORMS).filter(cat => catChecked[cat]).forEach(cat => {
      USERNAME_PLATFORMS[cat].forEach(p => {
        resources.push({
          label: p.name,
          cat,
          url: p.url.replace('[U]', enc),
          state: 'unchecked',
        });
      });
    });

    resources.forEach(r => window.open(r.url, tgt));
    const ts = new Date().toLocaleTimeString();

    // Build result tracker grouped by category
    const grouped = {};
    resources.forEach(r => { (grouped[r.cat] = grouped[r.cat] || []).push(r); });

    const trackerHtml = Object.entries(grouped).map(([cat, items]) => `
      <div class="tool-rt-group">
        <div class="tool-rt-cat">${_esc(cat)}</div>
        ${items.map((r, i) => `
          <div class="tool-rt-row" data-ri="${resources.indexOf(r)}">
            <span class="tool-rt-name">${_esc(r.label)}</span>
            <div class="tool-rt-btns">
              <button class="btn btn-sm tool-rt-btn" data-st="found">FOUND</button>
              <button class="btn btn-sm tool-rt-btn" data-st="notfound">NOT FOUND</button>
              <button class="btn btn-sm tool-rt-btn" data-st="unsure">UNSURE</button>
            </div>
            <button class="btn btn-sm tool-cl-open" data-url="${_esc(r.url)}">OPEN</button>
          </div>`).join('')}
      </div>`).join('');

    _toolShowOutput(unameOut,
      `<div class="tool-launch-hdr">${resources.length} tabs opened at ${ts}</div>` +
      `<div class="tool-rt-summary" id="t-rt-summary">FOUND ON <span id="t-rt-found">0</span> / <span id="t-rt-checked">0</span> PLATFORMS CHECKED</div>` +
      trackerHtml +
      `<button class="tool-btn tool-save-results-btn" id="t-save-results" style="margin-top:12px">SAVE RESULTS TO HISTORY</button>`
    );

    const states = new Array(resources.length).fill('unchecked');

    function _updateSummary() {
      const checked = states.filter(s => s !== 'unchecked').length;
      const found   = states.filter(s => s === 'found').length;
      document.getElementById('t-rt-found').textContent   = found;
      document.getElementById('t-rt-checked').textContent = checked;
    }

    unameOut.querySelectorAll('.tool-rt-row').forEach(row => {
      const ri = +row.dataset.ri;
      row.querySelectorAll('.tool-rt-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          states[ri] = btn.dataset.st;
          row.querySelectorAll('.tool-rt-btn').forEach(b => b.classList.remove('tool-rt-active'));
          btn.classList.add('tool-rt-active');
          row.classList.remove('tool-rt-found','tool-rt-notfound','tool-rt-unsure');
          row.classList.add('tool-rt-' + btn.dataset.st);
          _updateSummary();
        });
      });
    });

    unameOut.querySelectorAll('.tool-cl-open').forEach(btn => btn.addEventListener('click', () => window.open(btn.dataset.url, tgt)));

    document.getElementById('t-save-results')?.addEventListener('click', () => {
      const annotated = resources.map((r,i) => ({ ...r, state: states[i] }));
      HistoryStore.addTool('username', uname, annotated);
      renderHistory();
      document.getElementById('t-save-results').textContent = 'SAVED';
    });

    HistoryStore.addTool('username', uname, resources);
    renderHistory();
  });
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// TOOL 3 — NETWORK & IP
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function _buildNetworkSection() {
  const sec = document.getElementById('tool-section-network');
  if (!sec) return;

  sec.innerHTML = `
    <div class="tool-panel-hdr">
      <span class="tool-panel-title">NETWORK &amp; IP</span>
      <span class="tool-panel-desc">Investigate an IP address or domain's network footprint using free public intelligence sources</span>
    </div>
    <div class="tool-pair">
      <!-- Sub-tool A: IP Investigator -->
      <div class="tool-sub">
        <div class="tool-sub-name">IP INVESTIGATOR</div>
        <div class="tool-sub-desc">Launch 10 intelligence sources and fetch live geolocation data</div>
        <input type="text" class="tool-input" id="t-ip" placeholder="8.8.8.8" autocomplete="off" spellcheck="false">
        <div class="tool-err" id="t-ip-err" hidden></div>
        <button class="tool-btn" id="t-btn-ip" disabled>INVESTIGATE IP — 10 RESOURCES</button>
        <div class="tool-out" id="t-ip-out" hidden></div>
      </div>
      <!-- Sub-tool B: Network Helpers -->
      <div class="tool-sub">
        <div class="tool-sub-name">NETWORK HELPER TOOLS</div>
        <div class="tool-sub-desc">Client-side utilities: CIDR calculator, IP converter, port lookup, User-Agent parser</div>
        <div id="t-helpers"></div>
      </div>
    </div>
  `;

  // ── IP Investigator ───────────────────────────────────────
  const ipIn   = document.getElementById('t-ip');
  const btnIP  = document.getElementById('t-btn-ip');
  const ipErr  = document.getElementById('t-ip-err');
  const ipOut  = document.getElementById('t-ip-out');

  ipIn.addEventListener('input', () => {
    const v = ipIn.value.trim();
    _toolSave('ip', v);
    const ok = _isValidIP(v);
    btnIP.disabled = !ok;
    ipErr.hidden = ok || !v;
    if (!ok && v) ipErr.textContent = /[a-zA-Z]/.test(v) && v.includes('.') ? 'Enter an IP address — use Domain tools for domain investigation' : 'Enter a valid IPv4 or IPv6 address';
  });

  btnIP.addEventListener('click', () => {
    const ip  = ipIn.value.trim();
    const enc = encodeURIComponent;
    const tgt = document.getElementById('setting-link-target')?.value || '_blank';

    const resources = [
      { label:'IPInfo.io',            desc:'Location, ISP, ASN, hostname info',                      url:`https://ipinfo.io/${enc(ip)}` },
      { label:'IP-API',               desc:'Geolocation and network details',                        url:`https://ip-api.com/${enc(ip)}` },
      { label:'WhatIsMyIPAddress',     desc:'Location and ISP lookup',                               url:`https://whatismyipaddress.com/ip/${enc(ip)}` },
      { label:'AbuseIPDB',            desc:'Check IP for abuse and malicious reports',               url:`https://www.abuseipdb.com/check/${enc(ip)}` },
      { label:'VirusTotal',           desc:'Security vendor reputation scan',                        url:`https://www.virustotal.com/gui/ip-address/${enc(ip)}` },
      { label:'Shodan Host Lookup',   desc:'Open ports and services (account needed for full results)', url:`https://www.shodan.io/host/${enc(ip)}` },
      { label:'BGP.he.net',           desc:'BGP routing, ASN, and network ownership',               url:`https://bgp.he.net/ip/${enc(ip)}` },
      { label:'MXToolbox Blacklist',  desc:'Check if IP is on email blacklists',                    url:`https://mxtoolbox.com/blacklists.aspx?q=${enc(ip)}` },
      { label:'ViewDNS Reverse IP',   desc:'Find other domains hosted on this IP',                  url:`https://viewdns.info/reverseip/?host=${enc(ip)}&t=1` },
      { label:'IPVoid',               desc:'IP reputation across multiple databases',                url:`https://www.ipvoid.com/ip-reputation/` },
    ];

    resources.forEach(r => window.open(r.url, tgt));
    const ts = new Date().toLocaleTimeString();

    _toolShowOutput(ipOut,
      `<div class="tool-launch-hdr">10 tabs opened at ${ts}</div>` +
      `<div class="tool-checklist">${resources.map(r =>
        `<div class="tool-cl-row"><span class="tool-cl-ck">OK</span><span class="tool-cl-label">${_esc(r.label)}</span><span class="tool-cl-desc">${_esc(r.desc)}</span><button class="btn btn-sm tool-cl-open" data-url="${_esc(r.url)}">OPEN</button></div>`
      ).join('')}</div>` +
      `<div class="tool-ip-live" id="t-ip-live"><div class="tool-loading">QUERYING IP DATA<span class="tool-dots">...</span></div></div>` +
      `<div class="tool-rate-note">Data from ip-api.com — free tier: 45 requests/min</div>`
    );

    ipOut.querySelectorAll('.tool-cl-open').forEach(btn => btn.addEventListener('click', () => window.open(btn.dataset.url, tgt)));

    // Fetch live data from ip-api.com
    const liveEl = document.getElementById('t-ip-live');
    fetch(`https://ip-api.com/json/${encodeURIComponent(ip)}?fields=status,message,country,countryCode,regionName,city,zip,lat,lon,isp,org,as,timezone,proxy,mobile`)
      .then(r => r.json())
      .then(data => {
        if (data.status !== 'success') { liveEl.innerHTML = `<div class="tool-err-msg">Could not fetch IP data — check the resources above for manual lookup</div>`; return; }
        const flag = data.countryCode ? String.fromCodePoint(...[...data.countryCode.toUpperCase()].map(c => 0x1F1E6 - 65 + c.charCodeAt(0))) : '';
        const mapUrl = `https://maps.google.com/maps?q=${data.lat},${data.lon}`;
        const rows = [
          ['Country',    `${flag} ${_esc(data.country)} (${_esc(data.countryCode)})`],
          ['Region',     _esc(data.regionName)],
          ['City',       _esc(data.city)],
          ['ZIP Code',   _esc(data.zip)],
          ['Coordinates',`${data.lat}, ${data.lon} — <a href="${_esc(mapUrl)}" target="_blank" rel="noopener">VIEW ON MAP</a>`],
          ['ISP',        _esc(data.isp)],
          ['Organization',_esc(data.org)],
          ['ASN',        _esc(data.as)],
          ['Timezone',   _esc(data.timezone)],
          ['Proxy/VPN',  data.proxy ? '<span style="color:var(--color-danger)">Yes — likely proxy/VPN/Tor</span>' : 'No'],
          ['Mobile Network', data.mobile ? 'Yes' : 'No'],
        ];
        liveEl.innerHTML = `<div class="tool-live-hdr">LIVE IP DATA</div>` +
          `<table class="tool-data-table"><tbody>${rows.map((r,i) =>
            `<tr class="${i%2?'tool-tr-alt':''}"><td class="tool-td-key">${r[0]}</td><td>${r[1]}</td></tr>`
          ).join('')}</tbody></table>`;
      })
      .catch(() => {
        if (liveEl) liveEl.innerHTML = `<div class="tool-err-msg">Could not fetch IP data — check the resources above for manual lookup</div>`;
      });

    HistoryStore.addTool('ip', ip, resources);
    renderHistory();
  });

  // ── Network helper tools ─────────────────────────────────
  const helpersEl = document.getElementById('t-helpers');

  const HELPERS = [
    {
      id: 'cidr', name: 'IP RANGE / CIDR CALCULATOR',
      inputPlaceholder: '192.168.1.0/24',
      btnLabel: 'CALCULATE',
      run(v) {
        const r = _calcCIDR(v);
        if (!r) return '<div class="tool-err-msg">Enter valid CIDR notation, e.g. 192.168.1.0/24</div>';
        return _toolTable(['FIELD','VALUE'], [
          ['Network Address', r.network], ['Broadcast Address', r.broadcast],
          ['First Usable IP', r.first],   ['Last Usable IP', r.last],
          ['Total Hosts', r.hosts.toLocaleString()], ['Subnet Mask', r.mask], ['Wildcard Mask', r.wildcard],
        ]);
      },
    },
    {
      id: 'ipconv', name: 'IP TO HEX / BINARY CONVERTER',
      inputPlaceholder: '8.8.8.8',
      btnLabel: 'CONVERT',
      run(v) {
        const r = _convertIP(v);
        if (!r) return '<div class="tool-err-msg">Enter a valid IPv4 address</div>';
        return _toolTable(['FORMAT','VALUE'], [
          ['Decimal',      r.decimal], ['Hexadecimal', r.hex],
          ['Binary',       r.binary],  ['Integer',     r.integer],
          ['Reverse DNS',  r.rdns],
        ]);
      },
    },
    {
      id: 'port', name: 'PORT REFERENCE',
      inputPlaceholder: '443',
      btnLabel: 'LOOKUP',
      run(v) {
        const p = parseInt(v);
        if (isNaN(p) || p < 1 || p > 65535) return '<div class="tool-err-msg">Enter a port number between 1 and 65535</div>';
        const rec = PORT_DB[p];
        if (!rec) return `<div class="tool-no-data">No common service found for port ${p} — may be custom or ephemeral.<br><br>` +
          `<a href="https://www.shodan.io/search?query=port%3A${p}" target="_blank" rel="noopener">Search on Shodan</a> · ` +
          `<a href="https://search.censys.io/search?resource=hosts&q=services.port%3A${p}" target="_blank" rel="noopener">Search on Censys</a></div>`;
        const riskColor = rec.risk === 'High' ? 'var(--color-danger)' : rec.risk === 'Elevated' ? 'var(--color-primary)' : 'var(--color-secondary)';
        return _toolTable(['FIELD','VALUE'], [
          ['Service',  rec.name], ['Protocol', rec.proto],
          ['Risk',     `<span style="color:${riskColor};font-weight:700">${rec.risk}</span>`],
          ['Description', rec.desc],
          ['Search',   `<a href="https://www.shodan.io/search?query=port%3A${p}" target="_blank" rel="noopener">Shodan</a> · <a href="https://search.censys.io/search?resource=hosts&q=services.port%3A${p}" target="_blank" rel="noopener">Censys</a>`],
        ]);
      },
    },
    {
      id: 'ua', name: 'USER AGENT PARSER',
      inputPlaceholder: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)...',
      btnLabel: 'PARSE',
      isTextarea: true,
      run(v) {
        const r = _parseUA(v);
        if (!r) return '<div class="tool-err-msg">Paste a User-Agent string to parse</div>';
        return _toolTable(['FIELD','VALUE'], [
          ['Browser',       r.browser], ['Browser Engine', r.engine],
          ['Operating System', r.os],  ['Device Type',    r.device],
          ['Bot / Crawler', r.isBot ? '<span style="color:var(--color-danger)">Yes</span>' : 'No'],
          ['Raw String',    `<code style="word-break:break-all;font-size:10px">${_esc(v)}</code>`],
        ]);
      },
    },
  ];

  helpersEl.innerHTML = HELPERS.map(h => `
    <div class="tool-helper" id="th-${h.id}">
      <div class="tool-helper-name">${h.name}</div>
      <div class="tool-helper-row">
        ${h.isTextarea
          ? `<textarea class="tool-input tool-input-ta" id="th-in-${h.id}" placeholder="${_esc(h.inputPlaceholder)}" rows="2"></textarea>`
          : `<input type="text" class="tool-input" id="th-in-${h.id}" placeholder="${_esc(h.inputPlaceholder)}" autocomplete="off" spellcheck="false">`
        }
        <button class="tool-btn tool-helper-btn" id="th-btn-${h.id}">${h.btnLabel}</button>
      </div>
      <div class="tool-out" id="th-out-${h.id}" hidden></div>
    </div>
  `).join('');

  HELPERS.forEach(h => {
    const inp = document.getElementById(`th-in-${h.id}`);
    const btn = document.getElementById(`th-btn-${h.id}`);
    const out = document.getElementById(`th-out-${h.id}`);
    btn.addEventListener('click', () => {
      const val = inp.value.trim();
      if (!val) return;
      _toolShowOutput(out, h.run(val));
    });
    inp.addEventListener('keydown', e => { if (e.key === 'Enter' && !h.isTextarea) btn.click(); });
  });
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// TOOL 4 — METADATA SCRUBBER
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const SCRUB_EXIF_RISK = {
  GPSLatitude:     { level:'HIGH',   note:'Reveals precise location' },
  GPSLongitude:    { level:'HIGH',   note:'Reveals precise location' },
  GPSAltitude:     { level:'MEDIUM', note:'Reveals elevation' },
  GPSImgDirection: { level:'MEDIUM', note:'Reveals camera direction' },
  Artist:          { level:'HIGH',   note:'Reveals real name' },
  Copyright:       { level:'HIGH',   note:'May reveal real name' },
  ImageDescription:{ level:'MEDIUM', note:'May contain personal info' },
  Make:            { level:'MEDIUM', note:'Identifies device brand' },
  Model:           { level:'MEDIUM', note:'Identifies specific device' },
  DateTimeOriginal:{ level:'MEDIUM', note:'Reveals when taken' },
  DateTime:        { level:'MEDIUM', note:'Reveals modification date' },
  DateTimeDigitized:{ level:'MEDIUM',note:'Reveals digitizing date' },
  Software:        { level:'LOW',    note:'Reveals editing software' },
  ImageWidth:      { level:'LOW',    note:'Technical dimension' },
  ImageLength:     { level:'LOW',    note:'Technical dimension' },
  Orientation:     { level:'LOW',    note:'Camera orientation' },
  ExposureTime:    { level:'LOW',    note:'Camera settings' },
  FNumber:         { level:'LOW',    note:'Camera settings' },
  ISOSpeedRatings: { level:'LOW',    note:'Camera settings' },
  Flash:           { level:'LOW',    note:'Camera settings' },
  FocalLength:     { level:'LOW',    note:'Camera settings' },
  ColorSpace:      { level:'LOW',    note:'Color profile' },
};

const SCRUB_PDF_FIELDS = [
  ['/Title',        'Title',         'LOW'],
  ['/Author',       'Author',        'HIGH'],
  ['/Subject',      'Subject',       'LOW'],
  ['/Keywords',     'Keywords',      'LOW'],
  ['/Creator',      'Creator',       'MEDIUM'],
  ['/Producer',     'Producer',      'MEDIUM'],
  ['/CreationDate', 'Creation Date', 'MEDIUM'],
  ['/ModDate',      'Modified Date', 'MEDIUM'],
];

const SCRUB_CORE_FIELDS = [
  ['dc:creator',       'Creator / Author',   'HIGH'],
  ['cp:lastModifiedBy','Last Modified By',   'HIGH'],
  ['cp:revision',      'Revision Number',    'LOW'],
  ['dcterms:created',  'Created Date',       'MEDIUM'],
  ['dcterms:modified', 'Modified Date',      'MEDIUM'],
  ['dc:description',   'Description',        'LOW'],
  ['dc:subject',       'Subject',            'LOW'],
  ['dc:title',         'Title',              'LOW'],
];

const SCRUB_APP_FIELDS = [
  ['Application', 'Application', 'LOW'],
  ['Company',     'Company',     'HIGH'],
  ['Template',    'Template',    'MEDIUM'],
  ['Manager',     'Manager',     'HIGH'],
];

function _scrubRiskBadge(level) {
  const map = { HIGH:'scrub-risk-high', MEDIUM:'scrub-risk-med', LOW:'scrub-risk-low' };
  return `<span class="scrub-risk ${map[level] || 'scrub-risk-low'}">${level}</span>`;
}

function _scrubSummary(fields) {
  const h = fields.filter(f => f.risk === 'HIGH').length;
  const m = fields.filter(f => f.risk === 'MEDIUM').length;
  const l = fields.filter(f => f.risk === 'LOW').length;
  return `<div class="scrub-summary">
    <span>${fields.length} FIELDS FOUND</span> —
    <span class="scrub-risk-high">${h} HIGH RISK</span> /
    <span class="scrub-risk-med">${m} MEDIUM</span> /
    <span class="scrub-risk-low">${l} LOW</span>
  </div>`;
}

function _scrubTable(fields, outEl, filename) {
  if (!fields.length) {
    outEl.innerHTML = '<div class="tool-no-data">THIS FILE APPEARS CLEAN — no readable metadata found.<br><small style="opacity:.6">Some metadata may be embedded in ways this tool cannot detect.</small></div>';
    return;
  }
  const h = fields.filter(f => f.risk === 'HIGH').length;
  const m = fields.filter(f => f.risk === 'MEDIUM').length;
  const l = fields.filter(f => f.risk === 'LOW').length;
  let html = _scrubSummary(fields);
  html += '<table class="tool-data-table scrub-table"><thead><tr><th>FIELD</th><th>VALUE</th><th>RISK</th><th>NOTE</th></tr></thead><tbody>';
  fields.forEach((f, i) => {
    html += `<tr class="${i%2?'tool-tr-alt':''}">
      <td class="tool-td-key">${_esc(f.label)}</td>
      <td>${_esc(String(f.value))}</td>
      <td>${_scrubRiskBadge(f.risk)}</td>
      <td class="scrub-note">${_esc(f.note||'')}</td>
    </tr>`;
  });
  html += '</tbody></table>';
  if (filename) {
    const riskLabel = h > 0 ? 'METADATA SCAN — HIGH RISK' : m > 0 ? 'METADATA SCAN — MEDIUM RISK' : 'METADATA SCAN — CLEAN';
    HistoryStore.addTool('scrubber', filename, [{ label: riskLabel, url: '#', desc: `${fields.length} fields: ${h} HIGH / ${m} MEDIUM / ${l} LOW` }]);
    renderHistory();
  }
  outEl.innerHTML = html;
}

function _parsePDFMeta(buffer) {
  const text = new TextDecoder('latin1').decode(new Uint8Array(buffer.slice(0, 16384)));
  const fields = [];
  for (const [key, label, risk] of SCRUB_PDF_FIELDS) {
    const re = new RegExp(key.replace('/', '\\/') + '\\s*\\(([^)\\r\\n]{0,200})\\)');
    const m = text.match(re);
    if (m && m[1].trim()) fields.push({ label, value: m[1].replace(/\\r|\\n/g,'').trim(), risk, note: risk === 'HIGH' ? 'Reveals identity' : risk === 'MEDIUM' ? 'Reveals history' : 'Informational' });
  }
  return fields;
}

function _parseID3(buffer) {
  const bytes = new Uint8Array(buffer);
  const fields = [];
  if (!(bytes[0]===0x49 && bytes[1]===0x44 && bytes[2]===0x33)) return fields;
  const FRAMES = { TIT2:['Title','LOW'], TPE1:['Artist','HIGH'], TALB:['Album','LOW'], TDRC:['Year','MEDIUM'], TCOM:['Composer','HIGH'], TENC:['Encoder','LOW'], COMM:['Comment','MEDIUM'] };
  let pos = 10;
  const size = ((bytes[6]&0x7f)<<21)|((bytes[7]&0x7f)<<14)|((bytes[8]&0x7f)<<7)|(bytes[9]&0x7f);
  const end = Math.min(10 + size, bytes.length);
  while (pos + 10 < end) {
    const frameId = String.fromCharCode(bytes[pos],bytes[pos+1],bytes[pos+2],bytes[pos+3]);
    const frameSize = (bytes[pos+4]<<24)|(bytes[pos+5]<<16)|(bytes[pos+6]<<8)|bytes[pos+7];
    if (!frameSize || frameSize > 4096) break;
    if (FRAMES[frameId]) {
      try {
        const enc = bytes[pos+10];
        const raw = buffer.slice(pos+11, pos+10+frameSize);
        const val = (enc===1||enc===2) ? new TextDecoder('utf-16').decode(raw) : new TextDecoder('latin1').decode(raw);
        const clean = val.replace(/\x00/g,'').trim();
        if (clean) fields.push({ label:FRAMES[frameId][0], value:clean, risk:FRAMES[frameId][1], note: FRAMES[frameId][1]==='HIGH'?'Reveals identity':'Informational' });
      } catch {}
    }
    pos += 10 + frameSize;
  }
  return fields;
}

async function _parseOfficeMeta(file) {
  if (!window.JSZip) throw new Error('JSZip not available');
  const zip = await window.JSZip.loadAsync(file);
  const fields = [];
  const xmlParse = (xml, tagDefs) => {
    for (const [tag, label, risk] of tagDefs) {
      const re = new RegExp('<' + tag + '[^>]*>([^<]{0,300})</' + tag + '>');
      const m = xml.match(re);
      if (m && m[1].trim()) fields.push({ label, value: m[1].trim(), risk, note: risk==='HIGH'?'Reveals identity':risk==='MEDIUM'?'Reveals history':'Informational' });
    }
  };
  const coreFile = zip.file('docProps/core.xml');
  if (coreFile) { const xml = await coreFile.async('text'); xmlParse(xml, SCRUB_CORE_FIELDS); }
  const appFile = zip.file('docProps/app.xml');
  if (appFile) { const xml = await appFile.async('text'); xmlParse(xml, SCRUB_APP_FIELDS); }
  return fields;
}

const SCRUB_GUIDE = [
  {
    type: 'IMAGES (.jpg .png .gif .webp)',
    steps: [
      'Windows: Right-click > Properties > Details > Remove Properties and Personal Information',
      'Mac: ImageOptim (free app at imageoptim.com) — drag and drop to strip all metadata',
      'Linux: <code>exiftool -all= filename.jpg</code>',
      'Online: exifpurge.com or exif.regex.info/del.pl',
      'Quick fix: Take a screenshot of the image — screenshots contain no EXIF data',
    ],
    note: 'Re-saving in Paint (Windows) strips most EXIF. Photos taken as screenshots contain no location data.',
  },
  {
    type: 'PDF FILES',
    steps: [
      'Adobe Acrobat: File > Properties — clear all fields, then File > Save As',
      'Free method: Print to PDF via system print dialog — strips most metadata',
      'Online: ilovepdf.com > PDF Metadata Remover',
      'LibreOffice: open PDF, File > Export as PDF — metadata fields will be empty by default',
    ],
    note: 'Printing to PDF is the most reliable free method for removing PDF metadata.',
  },
  {
    type: 'OFFICE DOCUMENTS (.docx .xlsx .pptx)',
    steps: [
      'Word/Excel/PowerPoint: File > Info > Check for Issues > Inspect Document > Remove All',
      'Then: File > Save As to create a clean copy',
      'Alternative: copy all content into a brand new blank document',
      'Note: Accept or reject all tracked changes before sharing — they contain edit history',
    ],
    note: 'Track changes, comments, and revision history also contain metadata — inspect before sharing.',
  },
  {
    type: 'AUDIO FILES (.mp3)',
    steps: [
      'Windows: Right-click > Properties > Details > Remove Properties',
      'Mp3tag (free): select all tags, delete — mp3tag.de',
      'Online: id3editor.com',
      'Linux: <code>eyeD3 --remove-all filename.mp3</code>',
    ],
    note: 'ID3 tags in MP3 files can contain artist name, album, year, and comments.',
  },
  {
    type: 'VIDEO FILES (.mp4 .mov)',
    steps: [
      'Handbrake (free): re-encode the file — strips most metadata — handbrake.fr',
      'FFmpeg: <code>ffmpeg -i input.mp4 -map_metadata -1 output.mp4</code>',
      'Note: re-encoding slightly changes quality — use lossless settings if quality matters',
    ],
    note: 'Video files can embed GPS coordinates, device info, and creation timestamps.',
  },
];

function _buildScrubberSection() {
  const sec = document.getElementById('tool-section-scrubber');
  if (!sec) return;

  sec.innerHTML = `
    <div class="tool-panel-hdr">
      <span class="tool-panel-title">METADATA SCRUBBER</span>
      <span class="tool-panel-desc">Analyze metadata in your own files locally. Nothing leaves your browser.</span>
    </div>
    <div class="tool-pair">
      <!-- Sub-section A: File Analyzer -->
      <div class="tool-sub">
        <div class="tool-sub-name">FILE METADATA ANALYZER</div>
        <div class="tool-sub-desc">Drag a file or click to analyze. Supports images, PDFs, Office docs, audio, and video.</div>
        <div class="scrub-local-notice">YOUR FILE IS NEVER UPLOADED — ALL ANALYSIS HAPPENS IN YOUR BROWSER</div>
        <div class="tool-drop scrub-drop" id="scrub-drop" tabindex="0" style="cursor:pointer;position:relative">
          <span id="scrub-drop-label">DROP ANY FILE HERE OR CLICK TO BROWSE</span>
          <div style="font-size:10px;opacity:.5;margin-top:4px">.jpg .png .gif .webp .pdf .docx .xlsx .pptx .mp3 .mp4 .mov</div>
          <input type="file" id="scrub-file-input"
            accept=".jpg,.jpeg,.png,.gif,.webp,.tiff,.bmp,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.mp3,.mp4,.mov"
            style="display:none;pointer-events:none;">
        </div>
        <div class="tool-out" id="scrub-out"></div>
      </div>
      <!-- Sub-section B: Removal Guide -->
      <div class="tool-sub">
        <div class="tool-sub-name">REMOVAL GUIDE</div>
        <div class="tool-sub-desc">How to remove metadata from each file type — free tools only.</div>
        <div id="scrub-guide" class="scrub-guide"></div>
      </div>
    </div>
  `;

  // Build removal guide
  const guideEl = document.getElementById('scrub-guide');
  guideEl.innerHTML = SCRUB_GUIDE.map((g, i) => `
    <div class="scrub-guide-section">
      <button class="scrub-guide-hdr" data-gi="${i}" aria-expanded="${i===0}">
        <span>${_esc(g.type)}</span><span class="scrub-guide-arrow">${i===0?'▲':'▼'}</span>
      </button>
      <div class="scrub-guide-body" id="scrub-guide-body-${i}" ${i===0?'':'hidden'}>
        <ol class="scrub-guide-steps">
          ${g.steps.map(s => `<li>${s}</li>`).join('')}
        </ol>
        <div class="scrub-guide-note">${_esc(g.note)}</div>
      </div>
    </div>`).join('');

  guideEl.querySelectorAll('.scrub-guide-hdr').forEach(btn => {
    btn.addEventListener('click', () => {
      const gi = btn.dataset.gi;
      const body = document.getElementById('scrub-guide-body-' + gi);
      const open = !body.hidden;
      body.hidden = open;
      btn.setAttribute('aria-expanded', String(!open));
      btn.querySelector('.scrub-guide-arrow').textContent = open ? '▼' : '▲';
    });
  });

  // File drop/click logic
  const dropZone   = document.getElementById('scrub-drop');
  const fileInput  = document.getElementById('scrub-file-input');
  const outEl      = document.getElementById('scrub-out');

  dropZone.addEventListener('click', e => { e.stopPropagation(); fileInput.click(); });
  fileInput.addEventListener('click', e => e.stopPropagation());

  ['dragover','dragenter'].forEach(ev => {
    dropZone.addEventListener(ev, e => { e.preventDefault(); dropZone.classList.add('tool-drop-hover'); });
  });
  dropZone.addEventListener('dragleave', () => dropZone.classList.remove('tool-drop-hover'));
  dropZone.addEventListener('drop', e => {
    e.preventDefault(); dropZone.classList.remove('tool-drop-hover');
    const file = e.dataTransfer.files[0];
    if (file) _analyzeScrubFile(file, outEl);
  });
  fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (file) _analyzeScrubFile(file, outEl);
  });
}

function _analyzeScrubFile(file, outEl) {
  outEl.style.display = 'block';
  outEl.style.opacity = '1';
  outEl.innerHTML = `<div class="tool-loading">ANALYZING ${_esc(file.name)}<span class="tool-dots"><span>.</span><span>.</span><span>.</span></span></div>`;

  const ext = (file.name.split('.').pop() || '').toLowerCase();
  const isImage = /^(jpe?g|png|gif|webp|bmp|tiff?)$/.test(ext);
  const isPDF   = ext === 'pdf';
  const isOffice= /^(docx|xlsx|pptx)$/.test(ext);
  const isAudio = ext === 'mp3';
  const isVideo = /^(mp4|mov)$/.test(ext);

  if (isImage) {
    _loadExifJs().then(() => {
      const objUrl = URL.createObjectURL(file);
      const img = new Image();
      img.onload = function() {
        window.EXIF.getData(this, function() {
          URL.revokeObjectURL(objUrl);
          const tags = window.EXIF.getAllTags(this);
          const FIELDS = Object.keys(SCRUB_EXIF_RISK);
          const found = [];
          for (const key of FIELDS) {
            const val = tags[key];
            if (val === undefined || val === null || val === '') continue;
            let display = String(val);
            if (key === 'GPSLatitude' && tags.GPSLatitudeRef) {
              const dec = _gpsDecimal(val, tags.GPSLatitudeRef);
              if (dec !== null) display = dec.toFixed(6) + '°';
            } else if (key === 'GPSLongitude' && tags.GPSLongitudeRef) {
              const dec = _gpsDecimal(val, tags.GPSLongitudeRef);
              if (dec !== null) display = dec.toFixed(6) + '°';
            } else if (key === 'ExposureTime' && typeof val === 'number') {
              display = '1/' + Math.round(1/val) + 's';
            } else if (key === 'FNumber' && typeof val === 'number') {
              display = 'f/' + val;
            } else if (key === 'FocalLength' && typeof val === 'number') {
              display = val + 'mm';
            }
            found.push({ label: key, value: display, risk: SCRUB_EXIF_RISK[key].level, note: SCRUB_EXIF_RISK[key].note });
          }
          _scrubTable(found, outEl, file.name);
        });
      };
      img.onerror = () => { URL.revokeObjectURL(objUrl); outEl.innerHTML = '<div class="tool-err-msg">Could not read image file.</div>'; };
      img.src = objUrl;
    }).catch(() => { outEl.innerHTML = '<div class="tool-err-msg">Could not load EXIF library.</div>'; });

  } else if (isPDF) {
    const reader = new FileReader();
    reader.onload = e => {
      const fields = _parsePDFMeta(e.target.result);
      _scrubTable(fields, outEl, file.name);
    };
    reader.onerror = () => { outEl.innerHTML = '<div class="tool-err-msg">Could not read PDF.</div>'; };
    reader.readAsArrayBuffer(file);

  } else if (isOffice) {
    if (!window.JSZip) {
      outEl.innerHTML = '<div class="tool-err-msg">JSZip library not loaded — check network connection.</div>';
      return;
    }
    _parseOfficeMeta(file).then(fields => {
      _scrubTable(fields, outEl, file.name);
    }).catch(() => { outEl.innerHTML = '<div class="tool-err-msg">Could not parse Office file — ensure it is a valid .docx/.xlsx/.pptx.</div>'; });

  } else if (isAudio) {
    const reader = new FileReader();
    reader.onload = e => {
      const fields = _parseID3(e.target.result);
      _scrubTable(fields, outEl, file.name);
    };
    reader.onerror = () => { outEl.innerHTML = '<div class="tool-err-msg">Could not read audio file.</div>'; };
    reader.readAsArrayBuffer(file);

  } else if (isVideo) {
    outEl.innerHTML = '<div class="tool-no-data">Video metadata parsing is limited in-browser.<br>Use FFmpeg to inspect: <code>ffmpeg -i input.mp4</code><br>See the Removal Guide for stripping methods.</div>';
  } else {
    outEl.innerHTML = '<div class="tool-no-data">Unsupported file type. Try an image, PDF, or Office document.</div>';
  }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// TOOL 5 — HASH TOOLS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const HASH_SIGS = [
  { re: /^[0-9a-f]{32}$/i,    names:['MD5','NTLM'],          conf:'LIKELY',    crack:'YES',       desc:'MD5: widely used, easily crackable. NTLM: Windows password hash.' },
  { re: /^[0-9a-f]{40}$/i,    names:['SHA1'],                conf:'CONFIDENT', crack:'YES',       desc:'SHA1: deprecated for security use, common in file integrity checks.' },
  { re: /^[0-9a-f]{56}$/i,    names:['SHA224'],              conf:'CONFIDENT', crack:'DIFFICULT', desc:'SHA224: truncated SHA256 variant, rarely used for passwords.' },
  { re: /^[0-9a-f]{64}$/i,    names:['SHA256'],              conf:'CONFIDENT', crack:'DIFFICULT', desc:'SHA256: standard secure hash, used in certificates and file integrity.' },
  { re: /^[0-9a-f]{96}$/i,    names:['SHA384'],              conf:'CONFIDENT', crack:'DIFFICULT', desc:'SHA384: extended SHA2 family, used in TLS and digital signatures.' },
  { re: /^[0-9a-f]{128}$/i,   names:['SHA512'],              conf:'CONFIDENT', crack:'DIFFICULT', desc:'SHA512: strongest SHA2 variant, used for high-security applications.' },
  { re: /^\$2[aby]\$\d{2}\$.{53}$/, names:['bcrypt'],        conf:'CONFIDENT', crack:'VERY HARD', desc:'bcrypt: adaptive hashing algorithm, widely used for passwords.' },
  { re: /^\$1\$/,             names:['MD5 Crypt'],           conf:'CONFIDENT', crack:'YES',       desc:'MD5 Crypt: Unix password hash, common in older Linux systems.' },
  { re: /^\$5\$/,             names:['SHA256 Crypt'],        conf:'CONFIDENT', crack:'DIFFICULT', desc:'SHA256 Crypt: Unix shadow password format.' },
  { re: /^\$6\$/,             names:['SHA512 Crypt'],        conf:'CONFIDENT', crack:'DIFFICULT', desc:'SHA512 Crypt: strong Unix password format, used in modern Linux.' },
  { re: /^\$apr1\$/,          names:['Apache MD5'],          conf:'CONFIDENT', crack:'YES',       desc:'Apache-specific MD5 variant used in .htpasswd files.' },
  { re: /^\$P\$|^\$H\$/,      names:['phpass (WordPress)'], conf:'CONFIDENT', crack:'DIFFICULT', desc:'Portable PHP password hash, used by WordPress and phpBB.' },
  { re: /^\$S\$/,             names:['Drupal SHA512'],       conf:'CONFIDENT', crack:'DIFFICULT', desc:'Drupal password hash, SHA512 based.' },
  { re: /^sha1\$/,            names:['Django SHA1'],         conf:'CONFIDENT', crack:'YES',       desc:'Django legacy SHA1 password hash.' },
  { re: /^pbkdf2/i,           names:['PBKDF2'],              conf:'CONFIDENT', crack:'VERY HARD', desc:'Key derivation function, used by Django, iOS, WPA2.' },
  { re: /^\*[0-9a-f]{40}$/i,  names:['MySQL 4.1+'],          conf:'CONFIDENT', crack:'YES',       desc:'MySQL password hash format used since version 4.1.' },
  { re: /^[0-9a-f]{16}$/i,    names:['MySQL 3.x','Half-MD5'],conf:'POSSIBLE',  crack:'YES',       desc:'Short hex hash — could be old MySQL or truncated MD5.' },
  { re: /^[0-9]{10}$/,        names:['CRC32'],               conf:'POSSIBLE',  crack:'N/A',       desc:'10-digit number may be a CRC32 checksum used for file integrity.' },
  { re: /^[0-9a-f]{13}$/i,    names:['DES Crypt'],           conf:'LIKELY',    crack:'YES',       desc:'Legacy Unix DES password hash, 13 character format.' },
];

function _identifyHash(h) {
  h = h.trim();
  const matches = [];
  for (const sig of HASH_SIGS) {
    if (sig.re.test(h)) matches.push(sig);
  }
  return matches;
}

async function _sha(algo, data) {
  const buf = typeof data === 'string' ? new TextEncoder().encode(data) : data;
  const hashBuf = await crypto.subtle.digest(algo, buf);
  return Array.from(new Uint8Array(hashBuf)).map(b => b.toString(16).padStart(2,'0')).join('');
}

function _md5(str) {
  if (window.SparkMD5) return window.SparkMD5.hash(str);
  return '[MD5 library not loaded]';
}

function _hexDiff(a, b) {
  let ha = '', hb = '';
  const len = Math.max(a.length, b.length);
  for (let i = 0; i < len; i++) {
    const ca = a[i] || '';
    const cb = b[i] || '';
    if (ca === cb) {
      ha += `<span class="hdiff-same">${_esc(ca)}</span>`;
      hb += `<span class="hdiff-same">${_esc(cb)}</span>`;
    } else {
      ha += `<span class="hdiff-diff">${_esc(ca||'_')}</span>`;
      hb += `<span class="hdiff-diff">${_esc(cb||'_')}</span>`;
    }
  }
  return [ha, hb];
}

function _buildHashSection() {
  const sec = document.getElementById('tool-section-hash');
  if (!sec) return;

  sec.innerHTML = `
    <div class="tool-panel-hdr">
      <span class="tool-panel-title">HASH TOOLS</span>
      <span class="tool-panel-desc">Identify, generate, and look up hash strings for OSINT and security research.</span>
    </div>
    <nav class="tool-hash-tabs" id="hash-tabs" aria-label="Hash tool sections">
      <button class="tool-hash-tab hash-tab-active" data-htab="identify">IDENTIFY</button>
      <button class="tool-hash-tab" data-htab="generate">GENERATE</button>
      <button class="tool-hash-tab" data-htab="lookup">LOOKUP</button>
      <button class="tool-hash-tab" data-htab="compare">COMPARE</button>
    </nav>
    <div id="hash-panel-identify" class="hash-panel"></div>
    <div id="hash-panel-generate" class="hash-panel" hidden></div>
    <div id="hash-panel-lookup"   class="hash-panel" hidden></div>
    <div id="hash-panel-compare"  class="hash-panel" hidden></div>
  `;

  const hashTabBtns = sec.querySelectorAll('[data-htab]');
  const hashPanels = {};
  sec.querySelectorAll('.hash-panel').forEach(p => { hashPanels[p.id.replace('hash-panel-','')] = p; });

  function _switchHashTab(id) {
    hashTabBtns.forEach(t => t.classList.toggle('hash-tab-active', t.dataset.htab === id));
    Object.keys(hashPanels).forEach(k => { hashPanels[k].hidden = k !== id; });
  }
  hashTabBtns.forEach(t => t.addEventListener('click', () => _switchHashTab(t.dataset.htab)));

  _buildHashIdentify(hashPanels.identify);
  _buildHashGenerate(hashPanels.generate);
  _buildHashLookup(hashPanels.lookup);
  _buildHashCompare(hashPanels.compare);
}

function _buildHashIdentify(panel) {
  panel.innerHTML = `
    <div class="hash-sub">
      <div class="tool-sub-name">HASH IDENTIFIER</div>
      <div class="tool-sub-desc">Paste any hash string to identify its algorithm</div>
      <div class="tool-helper-row">
        <input type="text" class="tool-input" id="hi-input" placeholder="Paste hash string here…" autocomplete="off" spellcheck="false">
        <button class="tool-btn tool-helper-btn" id="hi-btn">IDENTIFY</button>
      </div>
      <div class="tool-out" id="hi-out"></div>
    </div>
  `;
  const inp = document.getElementById('hi-input');
  const btn = document.getElementById('hi-btn');
  const out = document.getElementById('hi-out');

  const run = () => {
    const h = inp.value.trim();
    if (!h) return;
    const matches = _identifyHash(h);
    out.style.display = 'block'; out.style.opacity = '1';
    if (!matches.length) {
      out.innerHTML = `<div class="hash-result-unknown">
        <div class="hash-result-label">UNKNOWN HASH FORMAT</div>
        <div class="hash-result-meta">Length: ${h.length} characters — Character set: ${/^[0-9a-f]+$/i.test(h)?'hexadecimal':/^[A-Za-z0-9+/=]+$/.test(h)?'base64':'mixed/alphanumeric'}</div>
        <div class="hash-result-hint">Check if the string is truncated, encoded, or has extra whitespace.</div>
      </div>`;
    } else {
      out.innerHTML = matches.map(m => `
        <div class="hash-result-card hash-result-${m.conf.toLowerCase()}">
          <div class="hash-result-hdr">
            <span class="hash-result-name">${m.names.join(' / ')}</span>
            <span class="hash-result-conf hash-conf-${m.conf.toLowerCase()}">${m.conf} MATCH</span>
          </div>
          <div class="hash-result-desc">${_esc(m.desc)}</div>
          <div class="hash-result-meta">
            Crackable: <strong>${m.crack}</strong>
          </div>
        </div>`).join('');
    }
    HistoryStore.addTool('hash', h.slice(0,20) + (h.length>20?'…':''), [{ label:'HASH IDENTIFIED: ' + (matches[0]?.names[0]||'UNKNOWN'), url:'#', desc:'' }]);
    renderHistory();
  };
  btn.addEventListener('click', run);
  inp.addEventListener('keydown', e => { if (e.key==='Enter') run(); });
}

function _buildHashGenerate(panel) {
  panel.innerHTML = `
    <div class="tool-pair">
      <div class="hash-sub">
        <div class="tool-sub-name">TEXT HASHING</div>
        <div class="tool-sub-desc">Generate a hash of any text string</div>
        <textarea class="tool-input tool-input-ta" id="hg-input" placeholder="Enter text to hash…" rows="3"></textarea>
        <div class="tool-helper-row" style="gap:8px">
          <select class="op-select" id="hg-algo" style="flex:1;height:44px">
            <option value="MD5">MD5</option>
            <option value="SHA-1">SHA1</option>
            <option value="SHA-256" selected>SHA256</option>
            <option value="SHA-384">SHA384</option>
            <option value="SHA-512">SHA512</option>
            <option value="SHA-224">SHA224</option>
          </select>
          <button class="tool-btn tool-helper-btn" id="hg-btn">GENERATE</button>
        </div>
        <div class="tool-out" id="hg-out"></div>
      </div>
      <div class="hash-sub">
        <div class="tool-sub-name">FILE HASHING</div>
        <div class="tool-sub-desc">Generate a hash of any file to verify integrity</div>
        <div class="tool-drop" id="hg-file-drop" tabindex="0" style="cursor:pointer;position:relative">
          DROP FILE HERE OR CLICK TO BROWSE
          <input type="file" id="hg-file-input" style="display:none;pointer-events:none;">
        </div>
        <div class="tool-helper-row" style="gap:8px;margin-top:8px">
          <select class="op-select" id="hg-file-algo" style="flex:1;height:44px">
            <option value="SHA-256" selected>SHA256</option>
            <option value="SHA-1">SHA1</option>
            <option value="SHA-512">SHA512</option>
            <option value="SHA-384">SHA384</option>
          </select>
        </div>
        <div class="tool-out" id="hg-file-out"></div>
      </div>
    </div>
  `;

  // Text hashing
  const inp = document.getElementById('hg-input');
  const algoSel = document.getElementById('hg-algo');
  const btn = document.getElementById('hg-btn');
  const out = document.getElementById('hg-out');

  btn.addEventListener('click', async () => {
    const text = inp.value;
    const algo = algoSel.value;
    if (!text) return;
    out.style.display = 'block'; out.style.opacity = '1';
    out.innerHTML = '<div class="tool-loading">COMPUTING<span class="tool-dots"><span>.</span><span>.</span><span>.</span></span></div>';
    try {
      const hash = algo === 'MD5' ? _md5(text) : await _sha(algo, text);
      out.innerHTML = `
        <div class="hash-output">
          <div class="hash-output-label">${algo} — ${hash.length} characters</div>
          <div class="hash-output-val" id="hg-result">${_esc(hash)}</div>
          <button class="tool-btn tool-btn-sm" id="hg-copy">COPY HASH</button>
        </div>`;
      document.getElementById('hg-copy')?.addEventListener('click', () => {
        navigator.clipboard.writeText(hash).then(() => {
          document.getElementById('hg-copy').textContent = 'COPIED';
          setTimeout(() => { const el = document.getElementById('hg-copy'); if (el) el.textContent = 'COPY HASH'; }, 1500);
        });
      });
      HistoryStore.addTool('hash', text.slice(0,20)+(text.length>20?'…':''), [{ label:'HASH GENERATED: '+algo, url:'#', desc:'' }]);
      renderHistory();
    } catch(e) { out.innerHTML = '<div class="tool-err-msg">Hash generation failed: ' + _esc(e.message) + '</div>'; }
  });

  // File hashing
  const fileDrop = document.getElementById('hg-file-drop');
  const fileInput = document.getElementById('hg-file-input');
  const fileAlgo = document.getElementById('hg-file-algo');
  const fileOut = document.getElementById('hg-file-out');

  fileDrop.addEventListener('click', e => { e.stopPropagation(); fileInput.click(); });
  fileInput.addEventListener('click', e => e.stopPropagation());
  ['dragover','dragenter'].forEach(ev => fileDrop.addEventListener(ev, e => { e.preventDefault(); fileDrop.classList.add('tool-drop-hover'); }));
  fileDrop.addEventListener('dragleave', () => fileDrop.classList.remove('tool-drop-hover'));
  fileDrop.addEventListener('drop', e => { e.preventDefault(); fileDrop.classList.remove('tool-drop-hover'); const f = e.dataTransfer.files[0]; if (f) _hashFile(f, fileAlgo.value, fileOut); });
  fileInput.addEventListener('change', () => { const f = fileInput.files[0]; if (f) _hashFile(f, fileAlgo.value, fileOut); });

  async function _hashFile(file, algo, out) {
    out.style.display = 'block'; out.style.opacity = '1';
    out.innerHTML = '<div class="tool-loading">HASHING FILE<span class="tool-dots"><span>.</span><span>.</span><span>.</span></span></div>';
    try {
      const buf = await file.arrayBuffer();
      const hash = await _sha(algo, buf);
      const sizeStr = file.size > 1048576 ? (file.size/1048576).toFixed(2)+' MB' : (file.size/1024).toFixed(1)+' KB';
      out.innerHTML = `
        <div class="hash-output">
          <div class="hash-output-label">${_esc(file.name)} — ${sizeStr} — ${algo}</div>
          <div class="hash-output-val" id="hg-file-result">${_esc(hash)}</div>
          <button class="tool-btn tool-btn-sm" id="hg-file-copy">COPY HASH</button>
          <div style="font-size:10px;opacity:.5;margin-top:6px">Compare this hash to the one provided by the file source to verify integrity.</div>
        </div>`;
      document.getElementById('hg-file-copy')?.addEventListener('click', () => {
        navigator.clipboard.writeText(hash).then(() => {
          document.getElementById('hg-file-copy').textContent = 'COPIED';
          setTimeout(() => { const el = document.getElementById('hg-file-copy'); if (el) el.textContent = 'COPY HASH'; }, 1500);
        });
      });
    } catch(e) { out.innerHTML = '<div class="tool-err-msg">Could not hash file: ' + _esc(e.message) + '</div>'; }
  }
}

function _buildHashLookup(panel) {
  panel.innerHTML = `
    <div class="hash-sub">
      <div class="tool-sub-name">HASH LOOKUP</div>
      <div class="tool-sub-desc">Search known hash databases for plaintext matches</div>
      <div class="hash-warn-box">THESE TOOLS ONLY WORK ON WEAK OR PREVIOUSLY CRACKED HASHES. Strong bcrypt or PBKDF2 hashes will not be found. For legitimate security research only.</div>
      <div class="tool-helper-row">
        <input type="text" class="tool-input" id="hl-input" placeholder="Paste hash to look up…" autocomplete="off" spellcheck="false">
        <button class="tool-btn tool-helper-btn" id="hl-btn" disabled>LOOKUP — 5 RESOURCES</button>
      </div>
      <div class="tool-out" id="hl-out"></div>
    </div>
  `;

  const inp = document.getElementById('hl-input');
  const btn = document.getElementById('hl-btn');
  const out = document.getElementById('hl-out');

  inp.addEventListener('input', () => { btn.disabled = inp.value.trim().length < 8; });

  btn.addEventListener('click', () => {
    const h = inp.value.trim();
    const enc = encodeURIComponent;
    const tgt = document.getElementById('setting-link-target')?.value || '_blank';
    const resources = [
      { label:'CrackStation',  desc:'Free rainbow table lookup — paste hash manually', url:'https://crackstation.net/' },
      { label:'Hashes.com',    desc:'Free online hash cracker',                        url:`https://hashes.com/en/decrypt/hash` },
      { label:'HashKiller',    desc:'Community hash database',                          url:'https://hashkiller.io/listmanager' },
      { label:'MD5Decrypt',    desc:'MD5 and SHA1 lookup',                             url:`https://md5decrypt.net/en/#answer` },
      { label:'Google Search', desc:'Search for exact hash in paste sites and leaks',   url:`https://www.google.com/search?q=%22${enc(h)}%22` },
    ];
    resources.forEach(r => window.open(r.url, tgt));
    const ts = new Date().toLocaleTimeString();
    out.style.display = 'block'; out.style.opacity = '1';
    out.innerHTML = `<div class="tool-launch-hdr">5 tabs opened at ${ts}</div>` +
      `<div class="tool-checklist">${resources.map(r =>
        `<div class="tool-cl-row"><span class="tool-cl-label">${_esc(r.label)}</span><span class="tool-cl-desc">${_esc(r.desc)}</span><button class="btn btn-sm tool-cl-open" data-url="${_esc(r.url)}">OPEN</button></div>`
      ).join('')}</div>`;
    out.querySelectorAll('.tool-cl-open').forEach(b => b.addEventListener('click', () => window.open(b.dataset.url, tgt)));
    HistoryStore.addTool('hash', h.slice(0,20)+(h.length>20?'…':''), resources);
    renderHistory();
  });
}

function _buildHashCompare(panel) {
  panel.innerHTML = `
    <div class="hash-sub">
      <div class="tool-sub-name">HASH COMPARE</div>
      <div class="tool-sub-desc">Compare two hashes to verify they match — for file integrity checks</div>
      <div class="hash-compare-grid">
        <div>
          <div class="tool-sub-name" style="margin-bottom:6px">HASH A</div>
          <input type="text" class="tool-input" id="hc-a" placeholder="First hash…" autocomplete="off" spellcheck="false">
        </div>
        <div>
          <div class="tool-sub-name" style="margin-bottom:6px">HASH B</div>
          <input type="text" class="tool-input" id="hc-b" placeholder="Second hash…" autocomplete="off" spellcheck="false">
        </div>
      </div>
      <button class="tool-btn" id="hc-btn" style="margin-top:8px">COMPARE</button>
      <div class="tool-out" id="hc-out"></div>
      <div style="font-size:10px;opacity:.5;margin-top:12px">Compare a downloaded file hash against the official hash to verify integrity. Both must match exactly.</div>
    </div>
  `;

  const aInp = document.getElementById('hc-a');
  const bInp = document.getElementById('hc-b');
  const btn  = document.getElementById('hc-btn');
  const out  = document.getElementById('hc-out');

  btn.addEventListener('click', () => {
    const a = aInp.value.trim().toLowerCase();
    const b = bInp.value.trim().toLowerCase();
    if (!a || !b) return;
    out.style.display = 'block'; out.style.opacity = '1';
    const match = a === b;
    const algoA = _identifyHash(a)[0]?.names[0] || 'Unknown';
    const algoB = _identifyHash(b)[0]?.names[0] || 'Unknown';
    aInp.style.borderColor = match ? 'var(--color-secondary)' : 'var(--color-danger)';
    bInp.style.borderColor = match ? 'var(--color-secondary)' : 'var(--color-danger)';
    if (match) {
      out.innerHTML = `
        <div class="hc-result hc-match">MATCH</div>
        <div class="hc-result-text">HASHES ARE IDENTICAL</div>
        <div class="hash-result-meta">Length: ${a.length} — Algorithm: ${algoA}</div>`;
    } else {
      const [diffA, diffB] = _hexDiff(a, b);
      out.innerHTML = `
        <div class="hc-result hc-nomatch">NO MATCH</div>
        <div class="hc-result-text">HASHES DO NOT MATCH</div>
        <div class="hash-result-meta">Length A: ${a.length} — Length B: ${b.length}${a.length!==b.length?' <span style="color:var(--color-danger)">[DIFFERENT LENGTHS]</span>':''}</div>
        <div class="hash-result-meta">Algorithm A: ${algoA} — Algorithm B: ${algoB}${algoA!==algoB&&algoA!=='Unknown'&&algoB!=='Unknown'?' <span style="color:var(--color-danger)">[ALGORITHM MISMATCH]</span>':''}</div>
        <div class="hc-diff">
          <div class="hc-diff-label">A:</div><div class="hc-diff-val hc-diff-mono">${diffA}</div>
          <div class="hc-diff-label">B:</div><div class="hc-diff-val hc-diff-mono">${diffB}</div>
        </div>`;
    }
    HistoryStore.addTool('hash', match?'MATCH':'NO MATCH', [{ label:'HASH COMPARE: '+(match?'MATCH':'NO MATCH'), url:'#', desc:'' }]);
    renderHistory();
  });
}

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
  initTools();
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
