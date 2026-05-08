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

      this.elList.appendChild(row);
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
function switchTab(name) {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    const active = btn.dataset.tab === name;
    btn.classList.toggle('tab-active', active);
    btn.setAttribute('aria-selected', String(active));
  });
  document.querySelectorAll('.tab-panel').forEach(panel => {
    panel.classList.toggle('panel-active', panel.id === `panel-${name}`);
  });
  if (name === 'history') renderHistory();
}

function initTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
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

  // Clear history
  document.getElementById('btn-clear-history')?.addEventListener('click', () => {
    if (confirm('Permanently clear all search history?')) {
      HistoryStore.clear();
      renderHistory();
    }
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
    _clipboardWrite(url, 'btn-export-url', 'COPIED!');
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
// BOOT
// ══════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initSettings();
  initExport();

  window.builder = new Builder();
  renderHistory();

  // Restore query from share URL hash  (#q=site:example.com+...)
  if (location.hash.startsWith('#q=')) {
    const raw = decodeURIComponent(location.hash.slice(3));
    if (raw.trim()) _loadQueryString(raw);
  }

  console.log('DorkForge v1.0 loaded');
});
