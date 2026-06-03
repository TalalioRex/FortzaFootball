'use strict';
const PptxGenJS = require('pptxgenjs');
const pptx = new PptxGenJS();

// ── Theme ──
const C = {
  bg:      '0C0818',
  purple:  '4B1797',
  accent:  '7C3AED',
  light:   'A78BFA',
  white:   'F1F5F9',
  muted:   '9488BE',
  green:   '10B981',
  gold:    'F59E0B',
  red:     'EF4444',
  card:    '1A1030',
  border:  '2D1F55',
};

pptx.layout = 'LAYOUT_WIDE'; // 13.33 x 7.5 inches
pptx.author  = 'Game Lounge';
pptx.company = 'Game Lounge';
pptx.subject = 'Football Skin Generator';
pptx.title   = 'Football Skin Generator';

// ── Helpers ──
function bg(slide) {
  slide.background = { color: C.bg };
}

function heading(slide, text, y, size = 36, color = C.white) {
  slide.addText(text, {
    x: 0.5, y, w: 12.33, h: 0.7,
    fontSize: size, bold: true, color,
    fontFace: 'Segoe UI', align: 'left',
  });
}

function subheading(slide, text, y, size = 18, color = C.muted) {
  slide.addText(text, {
    x: 0.5, y, w: 12.33, h: 0.4,
    fontSize: size, color,
    fontFace: 'Segoe UI', align: 'left',
  });
}

function label(slide, text, y) {
  slide.addText(text.toUpperCase(), {
    x: 0.5, y, w: 12, h: 0.25,
    fontSize: 9, bold: true, color: C.light,
    fontFace: 'Segoe UI', charSpacing: 3,
  });
}

function divider(slide, y) {
  slide.addShape(pptx.ShapeType.rect, {
    x: 0.5, y, w: 1.2, h: 0.04,
    fill: { type: 'gradient', stops: [{ color: C.purple, pos: 0 }, { color: C.accent, pos: 100 }] },
    line: { color: C.purple, width: 0 },
  });
}

function card(slide, x, y, w, h, title, body, icon = '', accentColor = C.border) {
  // Card bg
  slide.addShape(pptx.ShapeType.roundRect, {
    x, y, w, h, rectRadius: 0.12,
    fill: { color: C.card },
    line: { color: accentColor, width: 1 },
  });
  // Icon
  if (icon) {
    slide.addText(icon, {
      x: x + 0.18, y: y + 0.14, w: 0.45, h: 0.4,
      fontSize: 20, align: 'left', color: C.white,
    });
  }
  // Title
  slide.addText(title, {
    x: x + (icon ? 0.6 : 0.18), y: y + 0.14, w: w - (icon ? 0.7 : 0.3), h: 0.3,
    fontSize: 12, bold: true, color: C.white, fontFace: 'Segoe UI',
  });
  // Body
  slide.addText(body, {
    x: x + 0.18, y: y + 0.5, w: w - 0.36, h: h - 0.65,
    fontSize: 10, color: C.muted, fontFace: 'Segoe UI', wrap: true,
  });
}

function pill(slide, x, y, text, color = C.accent) {
  slide.addShape(pptx.ShapeType.roundRect, {
    x, y, w: text.length * 0.085 + 0.3, h: 0.28, rectRadius: 0.14,
    fill: { color: '1A0A35' },
    line: { color: color, width: 1 },
  });
  slide.addText(text, {
    x, y, w: text.length * 0.085 + 0.3, h: 0.28,
    fontSize: 9, bold: true, color: color, fontFace: 'Segoe UI', align: 'center',
  });
}

function stepBox(slide, x, y, w, h, num, icon, title, sub) {
  slide.addShape(pptx.ShapeType.roundRect, {
    x, y, w, h, rectRadius: 0.12,
    fill: { color: C.card }, line: { color: C.border, width: 1 },
  });
  // Number circle
  slide.addShape(pptx.ShapeType.ellipse, {
    x: x + w/2 - 0.22, y: y + 0.18, w: 0.44, h: 0.44,
    fill: { type: 'gradient', stops: [{ color: C.purple, pos: 0 }, { color: C.accent, pos: 100 }] },
    line: { color: C.accent, width: 0 },
  });
  slide.addText(num, {
    x: x + w/2 - 0.22, y: y + 0.18, w: 0.44, h: 0.44,
    fontSize: 14, bold: true, color: C.white, fontFace: 'Segoe UI', align: 'center', valign: 'middle',
  });
  slide.addText(icon, {
    x: x + 0.1, y: y + 0.72, w: w - 0.2, h: 0.4,
    fontSize: 24, align: 'center',
  });
  slide.addText(title, {
    x: x + 0.1, y: y + 1.15, w: w - 0.2, h: 0.28,
    fontSize: 13, bold: true, color: C.white, fontFace: 'Segoe UI', align: 'center',
  });
  slide.addText(sub, {
    x: x + 0.1, y: y + 1.46, w: w - 0.2, h: 0.45,
    fontSize: 9, color: C.muted, fontFace: 'Segoe UI', align: 'center', wrap: true,
  });
}

function arrow(slide, x, y) {
  slide.addText('→', {
    x, y, w: 0.4, h: 0.35,
    fontSize: 20, color: C.accent, align: 'center', bold: true,
  });
}

function statBox(slide, x, y, w, h, num, lbl) {
  slide.addShape(pptx.ShapeType.roundRect, {
    x, y, w, h, rectRadius: 0.12,
    fill: { color: C.card }, line: { color: C.border, width: 1 },
  });
  slide.addText(num, {
    x, y: y + 0.18, w, h: 0.55,
    fontSize: 40, bold: true, color: C.light, fontFace: 'Segoe UI', align: 'center',
  });
  slide.addText(lbl, {
    x: x + 0.1, y: y + 0.75, w: w - 0.2, h: 0.3,
    fontSize: 10, color: C.muted, fontFace: 'Segoe UI', align: 'center', wrap: true,
  });
}

function bulletList(slide, items, x, y, w) {
  items.forEach((item, i) => {
    // Dot
    slide.addShape(pptx.ShapeType.ellipse, {
      x: x, y: y + i * 0.52 + 0.08, w: 0.1, h: 0.1,
      fill: { color: item.dot || C.accent }, line: { color: item.dot || C.accent, width: 0 },
    });
    slide.addText(item.bold + '  ', {
      x: x + 0.2, y: y + i * 0.52, w: w - 0.2, h: 0.26,
      fontSize: 12, bold: true, color: C.white, fontFace: 'Segoe UI',
    });
    slide.addText(item.text, {
      x: x + 0.2, y: y + i * 0.52 + 0.22, w: w - 0.2, h: 0.22,
      fontSize: 10, color: C.muted, fontFace: 'Segoe UI',
    });
  });
}

function phaseRow(slide, x, y, num, title, desc, time) {
  // Circle
  slide.addShape(pptx.ShapeType.ellipse, {
    x, y, w: 0.44, h: 0.44,
    fill: { type: 'gradient', stops: [{ color: C.purple, pos: 0 }, { color: C.accent, pos: 100 }] },
    line: { color: C.accent, width: 0 },
  });
  slide.addText(num, {
    x, y, w: 0.44, h: 0.44,
    fontSize: 14, bold: true, color: C.white, fontFace: 'Segoe UI', align: 'center', valign: 'middle',
  });
  slide.addText(title, {
    x: x + 0.6, y: y, w: 5, h: 0.28,
    fontSize: 13, bold: true, color: C.white, fontFace: 'Segoe UI',
  });
  slide.addText(desc, {
    x: x + 0.6, y: y + 0.27, w: 5, h: 0.22,
    fontSize: 10, color: C.muted, fontFace: 'Segoe UI',
  });
  // Time badge
  slide.addShape(pptx.ShapeType.roundRect, {
    x: x + 0.6, y: y + 0.53, w: time.length * 0.078 + 0.3, h: 0.22, rectRadius: 0.11,
    fill: { color: '1A0A35' }, line: { color: C.accent, width: 1 },
  });
  slide.addText(time, {
    x: x + 0.6, y: y + 0.53, w: time.length * 0.078 + 0.3, h: 0.22,
    fontSize: 8, bold: true, color: C.light, fontFace: 'Segoe UI', align: 'center',
  });
}

// ══════════════════════════════════════════
//  SLIDE 1 — TITLE
// ══════════════════════════════════════════
{
  const s = pptx.addSlide();
  bg(s);

  // Background glow
  s.addShape(pptx.ShapeType.ellipse, {
    x: -1, y: 1, w: 7, h: 5,
    fill: { color: '1E0A3C', transparency: 40 },
    line: { color: '1E0A3C', width: 0 },
  });

  // Football emoji (text)
  s.addText('⚽', { x: 0.5, y: 0.8, w: 1, h: 0.8, fontSize: 48 });

  label(s, 'Game Lounge — Internal Tool', 0.82);

  s.addText('Football', {
    x: 0.5, y: 1.4, w: 12, h: 1.2,
    fontSize: 64, bold: true, color: C.white, fontFace: 'Segoe UI',
  });
  s.addText('Skin Generator', {
    x: 0.5, y: 2.5, w: 12, h: 1.2,
    fontSize: 64, bold: true, color: C.light, fontFace: 'Segoe UI',
  });

  divider(s, 3.8);

  s.addText('Rebrand the Football Shootout game for any casino brand — in minutes, not days.', {
    x: 0.5, y: 4.0, w: 9, h: 0.5,
    fontSize: 16, color: C.muted, fontFace: 'Segoe UI',
  });

  // Tag row
  const tags = ['⚡ Fully browser-based', '🔌 No server', '📴 Offline capable'];
  tags.forEach((t, i) => pill(s, 0.5 + i * 2.6, 4.75, t, C.accent));
}

// ══════════════════════════════════════════
//  SLIDE 2 — THE CHALLENGE
// ══════════════════════════════════════════
{
  const s = pptx.addSlide();
  bg(s);
  label(s, 'The Challenge', 0.4);
  heading(s, '50+ casino brands. One football game.', 0.72, 34);
  heading(s, 'Hundreds of assets.', 1.28, 34, C.light);
  divider(s, 1.94);

  statBox(s, 0.5,  2.3, 3.7, 1.3, '50+', 'Casino brands to skin');
  statBox(s, 4.7,  2.3, 3.7, 1.3,   '9', 'Animated WebP assets per skin');
  statBox(s, 8.9,  2.3, 3.7, 1.3,  '17+', 'Frames per asset');

  s.addText('Manually recolouring each frame for every brand would take weeks.', {
    x: 0.5, y: 3.85, w: 12.3, h: 0.4,
    fontSize: 14, color: C.muted, fontFace: 'Segoe UI', align: 'center',
  });
  s.addText('There had to be a better way.', {
    x: 0.5, y: 4.22, w: 12.3, h: 0.4,
    fontSize: 14, bold: true, color: C.light, fontFace: 'Segoe UI', align: 'center',
  });
}

// ══════════════════════════════════════════
//  SLIDE 3 — THE SOLUTION
// ══════════════════════════════════════════
{
  const s = pptx.addSlide();
  bg(s);
  label(s, 'The Solution', 0.4);
  heading(s, 'A 3-step workflow that separates', 0.72, 32);
  heading(s, 'work from scale', 1.22, 32, C.light);
  divider(s, 1.8);

  stepBox(s, 0.5,  2.2, 3.4, 2.2, '1', '⬡', 'Masks', 'Paint sprite regions once.\nReuse forever.');
  arrow(s, 4.05, 3.1);
  stepBox(s, 4.6,  2.2, 3.4, 2.2, '2', '◈', 'Presets', 'Define colours & patterns\nper casino.');
  arrow(s, 8.15, 3.1);
  stepBox(s, 8.7,  2.2, 3.4, 2.2, '3', '⚡', 'Export', 'Generate & download\nready-to-ship ZIPs.');

  s.addText('The mask work happens once. After that, every new casino is just colours + click Export.', {
    x: 0.5, y: 4.62, w: 12.3, h: 0.4,
    fontSize: 13, color: C.muted, fontFace: 'Segoe UI', align: 'center',
  });
}

// ══════════════════════════════════════════
//  SLIDE 4 — MASK EDITOR
// ══════════════════════════════════════════
{
  const s = pptx.addSlide();
  bg(s);
  label(s, 'Step 1', 0.4);
  heading(s, '⬡ Mask Editor', 0.72, 36);
  divider(s, 1.46);

  s.addText('Paint colour regions directly onto the animated sprites. Every pixel you paint tells the tool which part of the kit it belongs to.', {
    x: 0.5, y: 1.62, w: 6.2, h: 0.65,
    fontSize: 12, color: C.muted, fontFace: 'Segoe UI', wrap: true,
  });

  // Region dots
  const regions = [
    { name: 'Shirt',  color: '22C55E' },
    { name: 'Socks',  color: '3B82F6' },
    { name: 'Shorts', color: 'A855F7' },
    { name: 'Skin',   color: 'F97316' },
    { name: 'Number', color: 'F59E0B' },
  ];
  regions.forEach((r, i) => {
    slide_addRegionDot(s, 0.5 + i * 1.22, 2.46, r.color, r.name);
  });

  // Tool cards on right
  const tools = [
    { icon: '🪄', name: 'Wand',  desc: 'Flood fill from click point' },
    { icon: '🎯', name: 'Range', desc: 'Match colour globally across canvas' },
    { icon: '🖌️', name: 'Brush', desc: 'Freehand paint any area' },
    { icon: '🔷', name: 'Lasso', desc: 'Draw a shape to fill' },
  ];
  tools.forEach((t, i) => {
    card(s, 6.8 + (i % 2) * 3.1, 1.4 + Math.floor(i / 2) * 1.35, 2.9, 1.2, t.icon + ' ' + t.name, t.desc);
  });

  s.addText('4 Masking Tools', {
    x: 6.8, y: 1.08, w: 6, h: 0.28,
    fontSize: 9, bold: true, color: C.light, fontFace: 'Segoe UI', charSpacing: 2,
  });

  // Undo badge
  slide_addBadge(s, 6.8, 3.9, '↩ 40-level undo / redo', C.green);
}

function slide_addRegionDot(s, x, y, color, name) {
  s.addShape(pptx.ShapeType.ellipse, {
    x: x + 0.05, y: y + 0.08, w: 0.18, h: 0.18,
    fill: { color }, line: { color, width: 0 },
  });
  s.addText(name, {
    x: x + 0.28, y: y, w: 0.9, h: 0.36,
    fontSize: 11, color: C.white, fontFace: 'Segoe UI',
  });
}

function slide_addBadge(s, x, y, text, color) {
  s.addShape(pptx.ShapeType.roundRect, {
    x, y, w: text.length * 0.076 + 0.3, h: 0.26, rectRadius: 0.13,
    fill: { color: '0A0616' }, line: { color, width: 1 },
  });
  s.addText(text, {
    x, y, w: text.length * 0.076 + 0.3, h: 0.26,
    fontSize: 9, bold: true, color, fontFace: 'Segoe UI', align: 'center',
  });
}

// ══════════════════════════════════════════
//  SLIDE 5 — MASK SUPERPOWERS
// ══════════════════════════════════════════
{
  const s = pptx.addSlide();
  bg(s);
  label(s, 'Mask Editor — Advanced Features', 0.4);
  heading(s, 'Paint smarter, not harder', 0.72, 34, C.white);
  divider(s, 1.46);

  const features = [
    { icon: '🔁', title: '→ All GK',         body: 'One click copies goalkeeper masks to all 7 poses — no need to repaint each one.' },
    { icon: '🧹', title: 'Morph Operations',  body: 'Smooth edges, fill holes, grow or shrink masks for pixel-perfect results.' },
    { icon: '🔒', title: 'Region Lock',       body: 'Lock any region to prevent accidental overwrites while working on adjacent areas.' },
    { icon: '💾', title: 'Save & Reload',     body: 'Export masks as JSON files. Reload them next session — never repaint from scratch.' },
    { icon: '🎞️', title: 'Frame Strip',       body: 'Navigate all animation frames. Copy a region to all frames with one click.' },
    { icon: '🔍', title: 'Zoom & Pan',        body: 'Zoom in for precision painting, pan with right-click drag. Contrast boost for visibility.' },
  ];

  features.forEach((f, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    card(s, 0.5 + col * 4.25, 1.72 + row * 1.6, 3.9, 1.45, f.title, f.body, f.icon);
  });
}

// ══════════════════════════════════════════
//  SLIDE 6 — PRESETS
// ══════════════════════════════════════════
{
  const s = pptx.addSlide();
  bg(s);
  label(s, 'Step 2', 0.4);
  heading(s, '◈ Preset Manager', 0.72, 36);
  divider(s, 1.46);

  s.addText('Configure each casino\'s kit: colours, patterns, and blend intensity for both player and goalkeeper independently.', {
    x: 0.5, y: 1.62, w: 6.0, h: 0.6,
    fontSize: 12, color: C.muted, fontFace: 'Segoe UI', wrap: true,
  });

  // Colour pills
  const colours = ['Shirt colour', 'Socks colour', 'Shorts colour', 'Skin tone', 'Number colour'];
  colours.forEach((c, i) => pill(s, 0.5 + (i % 3) * 2.05, 2.46 + Math.floor(i / 3) * 0.38, c, C.accent));

  // Pattern pills
  const patterns = ['Solid', 'Vertical stripes', 'Diagonal stripes', 'Half & half'];
  patterns.forEach((p, i) => pill(s, 0.5 + (i % 2) * 3.1, 3.38 + Math.floor(i / 2) * 0.38, p, C.gold));

  // Right cards
  card(s, 7.0, 1.4, 5.8, 1.3, 'Bulk CSV Import', 'Load 100+ casino presets from a spreadsheet in seconds. No manual entry.', '📊', C.accent);
  card(s, 7.0, 2.85, 5.8, 1.3, 'Blend Opacity', 'Control how strongly each colour applies per region. Subtle skin tones, vivid shirts.', '🎚');
  card(s, 7.0, 4.3,  5.8, 1.3, 'Stripe Angle Control', 'Set diagonal stripe angle from −45° to +45° in 5° steps.', '📐');
}

// ══════════════════════════════════════════
//  SLIDE 7 — EXPORT
// ══════════════════════════════════════════
{
  const s = pptx.addSlide();
  bg(s);
  label(s, 'Step 3', 0.4);
  heading(s, '⚡ Export & Package', 0.72, 36);
  divider(s, 1.46);

  // Status cards
  const statuses = ['✓ Assets 9/9', '✓ Masks 9/9', '✓ Presets 12', '✓ PNGs 10/10'];
  statuses.forEach((st, i) => {
    s.addShape(pptx.ShapeType.roundRect, {
      x: 0.5 + i * 3.1, y: 1.72, w: 2.9, h: 0.5, rectRadius: 0.1,
      fill: { color: '0A1F15' }, line: { color: C.green, width: 1 },
    });
    s.addText(st, {
      x: 0.5 + i * 3.1, y: 1.72, w: 2.9, h: 0.5,
      fontSize: 11, bold: true, color: C.green, fontFace: 'Segoe UI', align: 'center', valign: 'middle',
    });
  });

  const features = [
    { icon: '👁️', title: 'Before / After Preview', body: 'Generate a live preview of any casino\'s kit before committing to export.' },
    { icon: '📦', title: 'Flexible Packaging',      body: 'Individual ZIPs per casino, one master ZIP, or both — your choice per export.' },
    { icon: '🦖', title: 'T-Rex Guard',             body: 'Missing PNG slots? A friendly T-Rex blocks export and lists exactly what\'s missing.' },
  ];
  features.forEach((f, i) => {
    card(s, 0.5 + i * 4.25, 2.44, 3.9, 1.4, f.title, f.body, f.icon);
  });

  s.addText('Each ZIP contains 9 recoloured WebP files + 10 PNG UI assets + all original game files — ready to deploy.', {
    x: 0.5, y: 4.05, w: 12.3, h: 0.4,
    fontSize: 12, color: C.muted, fontFace: 'Segoe UI', align: 'center',
  });
}

// ══════════════════════════════════════════
//  SLIDE 8 — TIME SAVINGS
// ══════════════════════════════════════════
{
  const s = pptx.addSlide();
  bg(s);
  label(s, 'The Workflow', 0.4);
  heading(s, 'How long does it actually take?', 0.72, 34);
  divider(s, 1.46);

  phaseRow(s, 0.5, 1.82, '1', 'Paint Masks', 'Paint the 5 regions on the player, ball, and goalkeeper sprites. Propagate to all frames and GK poses.', '⏱ 1–2 hours — done once, forever');
  // Connector
  s.addShape(pptx.ShapeType.rect, { x: 0.7, y: 2.64, w: 0.04, h: 0.5, fill: { color: C.accent, transparency: 60 }, line: { color: C.accent, width: 0 } });

  phaseRow(s, 0.5, 3.14, '2', 'Create Casino Presets', 'Define colours, patterns and opacities for each casino. Or bulk-import via CSV.', '⏱ ~10 min per casino (or seconds via CSV)');
  s.addShape(pptx.ShapeType.rect, { x: 0.7, y: 3.96, w: 0.04, h: 0.5, fill: { color: C.accent, transparency: 60 }, line: { color: C.accent, width: 0 } });

  phaseRow(s, 0.5, 4.46, '3', 'Export Packages', 'Select casinos, upload 10 PNGs, click Export. Files download automatically.', '⏱ ~5 min for any size batch');

  // Summary card right
  s.addShape(pptx.ShapeType.roundRect, {
    x: 7.0, y: 1.72, w: 5.8, h: 3.5, rectRadius: 0.15,
    fill: { color: C.card }, line: { color: C.border, width: 1 },
  });
  s.addText('Time to add a new casino after masks are painted', {
    x: 7.2, y: 1.9, w: 5.4, h: 0.4,
    fontSize: 11, color: C.muted, fontFace: 'Segoe UI', align: 'center', wrap: true,
  });
  s.addText('~15 min', {
    x: 7.0, y: 2.5, w: 5.8, h: 0.9,
    fontSize: 52, bold: true, color: C.light, fontFace: 'Segoe UI', align: 'center',
  });
  s.addText('per casino', {
    x: 7.0, y: 3.38, w: 5.8, h: 0.3,
    fontSize: 14, color: C.muted, fontFace: 'Segoe UI', align: 'center',
  });
  s.addShape(pptx.ShapeType.rect, { x: 7.5, y: 3.78, w: 4.8, h: 0.015, fill: { color: C.border }, line: { color: C.border, width: 0 } });
  s.addText('vs. hours of manual Photoshop work', {
    x: 7.0, y: 3.9, w: 5.8, h: 0.28,
    fontSize: 10, color: C.muted, fontFace: 'Segoe UI', align: 'center',
  });
}

// ══════════════════════════════════════════
//  SLIDE 9 — TECHNICAL
// ══════════════════════════════════════════
{
  const s = pptx.addSlide();
  bg(s);
  label(s, 'Under the Hood', 0.4);
  heading(s, 'Technical Highlights', 0.72, 36);
  divider(s, 1.46);

  const techs = [
    { badge: 'Browser-based',      title: 'No installation needed',       body: 'Runs entirely in Chrome or Edge. No server, no uploads, no dependencies to install.', color: C.accent },
    { badge: 'WebP Encode/Decode', title: 'Frame-by-frame processing',    body: 'Decodes animated WebP frame by frame, recolours each independently, re-encodes with original timing.', color: C.green },
    { badge: 'Pixel-perfect masks',title: 'Binary mask arrays',           body: 'Each frame stores a Uint8Array mask per region — precise, fast, and losslessly serialised to JSON.', color: C.light },
    { badge: 'Electron app',       title: 'Runs locally too',             body: 'Can be launched as a desktop app via npm start on Windows for an offline-first experience.', color: C.gold },
  ];
  techs.forEach((t, i) => {
    const col = i % 2, row = Math.floor(i / 2);
    const x = 0.5 + col * 6.45, y = 1.72 + row * 1.85;
    s.addShape(pptx.ShapeType.roundRect, {
      x, y, w: 6.0, h: 1.65, rectRadius: 0.12,
      fill: { color: C.card }, line: { color: C.border, width: 1 },
    });
    slide_addBadge(s, x + 0.18, y + 0.14, t.badge, t.color);
    s.addText(t.title, {
      x: x + 0.18, y: y + 0.5, w: 5.6, h: 0.28,
      fontSize: 13, bold: true, color: C.white, fontFace: 'Segoe UI',
    });
    s.addText(t.body, {
      x: x + 0.18, y: y + 0.82, w: 5.6, h: 0.65,
      fontSize: 10, color: C.muted, fontFace: 'Segoe UI', wrap: true,
    });
  });
}

// ══════════════════════════════════════════
//  SLIDE 10 — KEY WINS
// ══════════════════════════════════════════
{
  const s = pptx.addSlide();
  bg(s);
  label(s, 'Summary', 0.4);
  heading(s, 'Why this tool is a game changer', 0.72, 34);
  divider(s, 1.46);

  bulletList(s, [
    { bold: 'Masks are a one-time investment.',  text: 'Paint once, power every future casino from the same file.', dot: C.green },
    { bold: 'Scale without extra effort.',        text: 'Adding 50 more casinos takes the same 5 minutes as adding 1.', dot: C.green },
    { bold: 'Zero design tool required.',         text: 'No Photoshop, no After Effects. Everything runs in the browser.', dot: C.green },
    { bold: 'Animation preserved.',              text: 'Every frame recoloured while keeping original timing and motion.', dot: C.green },
    { bold: 'Bulk CSV import.',                  text: 'Drop in a spreadsheet of 100 casinos, export them all at once.', dot: C.gold },
    { bold: 'Validation before delivery.',       text: 'T-Rex guard and status cards catch issues before bad ZIPs get shipped.', dot: C.gold },
  ], 0.5, 1.78, 12.3);
}

// ══════════════════════════════════════════
//  SLIDE 11 — CLOSING
// ══════════════════════════════════════════
{
  const s = pptx.addSlide();
  bg(s);

  s.addShape(pptx.ShapeType.ellipse, {
    x: -1, y: 1, w: 7, h: 5,
    fill: { color: '1E0A3C', transparency: 40 },
    line: { color: '1E0A3C', width: 0 },
  });

  s.addText('🏆', { x: 0.5, y: 0.6, w: 1, h: 0.8, fontSize: 44 });
  label(s, 'Football Skin Generator', 0.68);

  s.addText('Built for speed.', {
    x: 0.5, y: 1.1, w: 12.3, h: 1,
    fontSize: 56, bold: true, color: C.white, fontFace: 'Segoe UI', align: 'center',
  });
  s.addText('Built for scale.', {
    x: 0.5, y: 1.95, w: 12.3, h: 1,
    fontSize: 56, bold: true, color: C.light, fontFace: 'Segoe UI', align: 'center',
  });

  divider(s, 3.1);
  s.addShape(pptx.ShapeType.rect, { x: 5.9, y: 3.1, w: 1.2, h: 0.04, fill: { type: 'gradient', stops: [{ color: C.purple, pos: 0 }, { color: C.accent, pos: 100 }] }, line: { color: C.purple, width: 0 } });

  stepBox(s, 1.3,  3.5, 3.0, 2.0, '1', '⬡', 'Masks', 'Once');
  arrow(s, 4.45, 4.3);
  stepBox(s, 5.0,  3.5, 3.0, 2.0, '2', '◈', 'Presets', 'Per casino');
  arrow(s, 8.15, 4.3);
  stepBox(s, 8.7,  3.5, 3.0, 2.0, '3', '⚡', 'Export', 'Any scale');

  s.addText('Questions? Live demo follows.', {
    x: 0.5, y: 5.75, w: 12.3, h: 0.3,
    fontSize: 12, color: C.muted, fontFace: 'Segoe UI', align: 'center',
  });
}

// ── Save ──
const OUT = 'presentation/Football-Skin-Generator.pptx';
pptx.writeFile({ fileName: OUT }).then(() => {
  console.log('✅  Saved: ' + OUT);
}).catch(err => {
  console.error('❌  Error:', err);
});
