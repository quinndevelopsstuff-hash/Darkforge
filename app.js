'use strict';

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
    if (!query.trim()) {
      this.elPreview.innerHTML = '<span class="preview-placeholder">site:example.com filetype:pdf</span>';
    } else {
      this.elPreview.textContent = query;
    }
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
  document.getElementById('btn-export-txt')?.addEventListener('click', () => {
    const current = window.builder?.buildQuery().trim() || '';
    const lines   = [current, ...HistoryStore.load().map(e => e.query)].filter(Boolean);
    _clipboardWrite(lines.join('\n'), 'btn-export-txt', 'COPIED!');
  });

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
  });

  document.getElementById('btn-export-url')?.addEventListener('click', () => {
    const q   = window.builder?.buildQuery().trim() || '';
    const url = `${location.origin}${location.pathname}#q=${encodeURIComponent(q)}`;
    // On mobile use native share sheet if available; fall back to clipboard
    if (navigator.share && window.matchMedia('(pointer: coarse)').matches) {
      navigator.share({ title: 'DorkForge Query', text: q, url }).catch(() => {
        _clipboardWrite(url, 'btn-export-url', 'COPIED!');
      });
    } else {
      _clipboardWrite(url, 'btn-export-url', 'COPIED!');
    }
  });
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
  },

  // ── Build HTML for a single template card ─────────────────────
  _cardHTML(t) {
    const cat   = CATEGORIES.find(c => c.id === t.category);
    const icon  = cat ? cat.icon : '🔍';

    // Inline query preview — same logic as Builder.buildQuery()
    const preview = t.operators.length
      ? t.operators.map(op => {
          const def = OPERATORS[op.type];
          return def ? def.syntax.replace('{value}', op.value) : op.value;
        }).join(' ').trim()
      : '(people search mode)';

    const badges = t.engines
      .map(id => ENGINES[id] ? `<span class="engine-badge">${_esc(ENGINES[id].label)}</span>` : '')
      .join('');

    const hasSite   = t.operators.some(op => op.type === 'site');
    const badgeCls  = hasSite ? 'card-badge-site' : 'card-badge-generic';
    const badgeTxt  = hasSite ? 'SITE-SPECIFIC'   : 'GENERIC';

    return `<article class="template-card" data-category="${_esc(t.category)}">
      <div class="card-header">
        <span class="card-cat-icon">${icon}</span>${_esc(t.name)}
        <span class="card-badge ${badgeCls}">${badgeTxt}</span>
      </div>
      <div class="card-body">
        <code class="card-query">${_esc(preview)}</code>
        <p class="card-desc">${_esc(t.description)}</p>
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
    wrap.style.maxHeight = '0px'; // start collapsed
    preview.insertAdjacentElement('beforebegin', wrap);
    wrap.appendChild(preview);
    wrap.appendChild(copyBtn);

    header.classList.add('preview-collapse-header', 'collapsed');
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
// BOOT
// ══════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initSettings();
  initExport();

  window.builder = new Builder();
  TemplateManager.init();
  renderHistory();
  initMobile();

  // Restore query from share URL hash  (#q=site:example.com+...)
  if (location.hash.startsWith('#q=')) {
    const raw = decodeURIComponent(location.hash.slice(3));
    if (raw.trim()) _loadQueryString(raw);
  }

  console.log('DorkForge v1.0 loaded');
});
