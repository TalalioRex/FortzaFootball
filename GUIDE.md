# Football Skin Generator — User Guide

**Tool:** Football Skin Generator (Game Lounge)
**Access:** https://talaliorex.github.io/FortzaFootball/ (Chrome or Edge required)
**Local run:** `npm start` in the project folder (Windows only)

---

## What This Tool Does

The Football Skin Generator lets you rebrand the *Football Shootout* game for any casino brand in minutes. You:

1. **Paint masks** on the player, goalkeeper, and ball sprites to tell the tool which pixels belong to which part of the kit (shirt, shorts, socks, skin, number).
2. **Create presets** — one per casino — defining the brand's colours, pattern, and stripe style.
3. **Export** a ready-to-deploy ZIP per casino (or one master ZIP for all), with every animated WebP recoloured and all casino-specific PNGs included.

---

## Layout Overview

```
┌──────────────────────────────────────────────────────────────────┐
│  Nav Rail │  Left Panel           │  Main Work Area              │
│  (72px)   │  (230px)              │  (fills rest)                │
│           │                       │                              │
│  ⬡ Masks  │  Asset list / Casino  │  Canvas / Form / Generator   │
│  ◈ Presets│  list                 │                              │
│  ⚡ Export │                       │                              │
│           │  ─────────────────    │                              │
│  [Status  │  Save / Load buttons  │                              │
│   chips]  │                       │                              │
│  Load     │                       │                              │
│  Assets   │                       │                              │
└──────────────────────────────────────────────────────────────────┘
```

> **Screenshot placeholder:** Full app screenshot showing the three-panel layout with Masks tab active.

---

## Step 1 — Load the Game Assets

Before anything else, you need to load the original game asset folder.

1. Click **Load Assets** at the bottom of the left nav rail.
2. Select the entire `Football_Shootout_assets` folder (the one that contains `player.webp`, `goalkeeper_idle.webp`, etc.).
3. The tool loads 9 animated WebP files plus all static files (fonts, sounds, JSON, PNGs).

**Status chips** at the bottom of the nav rail update automatically:

| Chip | Meaning |
|---|---|
| `Assets N/9` | How many of the 9 required WebP files are loaded |
| `Masks N/9` | How many assets have at least one mask painted |
| `Presets N` | Number of casino presets saved |

> **Screenshot placeholder:** Nav rail with all chips showing green (9/9 assets loaded).

Once all 9 assets are loaded the chip turns **green**. If fewer than 9 are found, it turns **amber** — check that you selected the correct root folder.

---

## Step 2 — Paint Masks (Masks Tab ⬡)

The Masks tab is where you define *which pixels* belong to each part of the kit. This is a one-time setup that you save to a JSON file and reuse across all casino exports.

### Left Panel — Asset List

The left panel lists all 9 assets:

- **player.webp** (17 frames)
- **goalkeeper_idle.webp** (5 frames)
- **goalkeeper_left.webp** (10 frames)
- **goalkeeper_right.webp** (10 frames)
- **goalkeeper_center.webp** (4 frames)
- **goalkeeper_left_high.webp** (11 frames)
- **goalkeeper_right_high.webp** (11 frames)
- **goalkeeper_center_high.webp** (10 frames)
- **ball.webp** (6 frames)

Each asset shows:
- A small **thumbnail** of the first frame
- **Coverage dots** (one per region) — grey = empty, amber = partial, green = fully painted

Click any asset to open it in the editor.

> **Screenshot placeholder:** Left panel showing asset list with green/amber coverage dots.

---

### Right Panel — Tool Panel

When an asset is open, a **Photoshop-style tool panel** appears on the right side.

#### Regions

Select which part of the kit you are painting:

| Region | Colour overlay | Notes |
|---|---|---|
| **Shirt** | Green | Main shirt body |
| **Socks** | Blue | Sock area |
| **Shorts** | Purple | Shorts area |
| **Skin** | Orange | Face, hands, legs |
| **Number** | Amber | Shirt number (player only — hidden for GK/ball) |

Click a region tab to switch. Each region has a **🔒 lock icon** — click it to lock that region so accidental clicks/brush strokes cannot change it. A locked region still shows its overlay.

> **Screenshot placeholder:** Tool panel with regions, showing Shirt region active (highlighted purple).

---

#### Masking Tools

| Tool | Shortcut | How it works |
|---|---|---|
| **Wand** | `W` | Click a pixel → flood-fills all connected pixels of similar colour. Best for solid areas. |
| **Range** | `R` | Click a pixel → selects ALL pixels in the whole frame that match that colour (not just connected). Best for scattered patterns. |
| **Brush** | `B` | Paint mask pixels by dragging. Use `[` / `]` to decrease/increase brush size. |
| **Lasso** | `L` | Draw a freehand shape by dragging — everything inside becomes masked. |

**Modifier keys:**

| Modifier | Wand / Range | Lasso / Brush |
|---|---|---|
| Normal click/drag | **Replace** current mask | **Add** to mask |
| `Shift` + click/drag | **Add** to existing mask | — |
| `Alt` + click/drag | **Remove** from existing mask | **Erase** from mask |

---

#### Tool Settings

**Tolerance** (slider, 0–100)
Controls how similar a pixel's colour needs to be to be included by the Wand and Range tools. Higher = more lenient. Default: 40.

**Brush size** (slider, 1–20 px)
Sets the radius of the Brush tool. Also controlled by `[` (smaller) and `]` (larger).

---

#### Modify Buttons

| Button | Shortcut | What it does |
|---|---|---|
| **Smooth edges** | `S` | Runs a morphological smooth pass — removes jagged edges and stray pixels |
| **Invert** | — | Flips the mask (masked ↔ unmasked) for the current region and frame |
| **Fill holes** | — | Flood-fills from all 4 corners; any interior empty island gets added to the mask |

**Grow / Shrink**
Enter a pixel amount (default 2 px) and click ▲ Grow or ▼ Shrink to expand or contract the mask boundary by that many pixels. Useful for fine-tuning edges.

---

#### → All GK (Goalkeeper Propagation)

When you have a goalkeeper asset open:

1. Finish painting all regions for that asset.
2. Click **→ All GK** in the tool panel.
3. A confirmation dialog appears: "Copy [region] mask from [current GK] to all 7 goalkeeper assets? This will overwrite existing masks."
4. Confirm → the current frame's mask is copied across all 7 goalkeeper WebPs.

This is the fastest way to mask all goalkeeper poses — paint one, propagate to all.

> **Screenshot placeholder:** → All GK button highlighted, with confirmation dialog visible.

---

#### Overlay & Contrast

**Overlay** (slider, 10–100%, default 45%)
Changes the transparency of the coloured region overlay on the canvas. Useful when the mask colour blends with the sprite colour and you can't see what you're doing.

**Contrast boost** (toggle button)
Adds `filter: contrast(2) brightness(1.1)` to the canvas display — purely visual, does not affect the actual pixel data. Helps see kit edges against complex backgrounds.

---

#### Undo / Redo

| Action | Shortcut |
|---|---|
| Undo | `Ctrl+Z` or click ↩ Undo |
| Redo | `Ctrl+Y` or click ↪ Redo |

Up to **40 steps** of undo history are kept. The buttons are greyed out when there is nothing to undo/redo.

**Clear frame** — removes the current region's mask for the current frame only.
**Clear all** — removes the current region's mask for all frames of the current asset.

---

### Canvas Area

The main canvas shows the current frame of the selected asset with region overlays drawn on top.

**Zoom controls** (bottom-right of canvas):
- Click **−** / **+** to zoom out/in
- Click **⊡** to fit the image to the canvas
- Right-click and drag anywhere on the canvas to **pan**

---

### Frame Strip (bottom)

The frame strip shows thumbnail previews of all frames in the current animated WebP.

| Control | Action |
|---|---|
| Click a thumbnail | Jump to that frame |
| `←` arrow key | Previous frame |
| `→` arrow key | Next frame |
| **← Prev** button | Copy current region mask to the previous frame |
| **Next →** button | Copy current region mask to the next frame |
| **Region → All** button | Copy the current region mask to ALL frames of this asset |

> **Screenshot placeholder:** Frame strip showing player.webp with frame 3 selected (purple border).

---

### Saving and Loading Masks

Masks are stored in your browser session. To persist them across sessions, **save to JSON**:

**Save:**
- **💾 Player** — saves `mask_player.json` (contains masks for `player.webp` and `ball.webp`)
- **💾 GK** — saves `mask_goalkeeper.json` (contains masks for all 7 goalkeeper assets)

**Load:**
- **📂 Player** — loads a previously saved `mask_player.json`
- **📂 GK** — loads a previously saved `mask_goalkeeper.json`

Loading one set does NOT overwrite the other. Keep both JSON files somewhere safe — they represent hours of masking work.

> **Screenshot placeholder:** Bottom of left panel showing the 4 save/load buttons.

---

## Step 3 — Create Casino Presets (Presets Tab ◈)

Each casino gets its own preset that defines how the kit should be recoloured.

### Creating a Preset

1. Click **+ New** in the left panel.
2. A new preset appears in the list with a placeholder name.
3. Fill in the form on the right.
4. Click **Save preset**.

### Preset Form Fields

**Kit Info**

| Field | Description |
|---|---|
| Casino name | Display name — used in export filenames |
| Casino ID | Short ID used as folder name in ZIP (e.g. `betway`) |

**Player Kit**

| Field | Description |
|---|---|
| Shirt colour | Main shirt colour (hex) |
| Socks colour | Sock colour |
| Shorts colour | Shorts colour |
| Skin tone | Skin/face colour — use Opacity to keep it subtle |
| Number colour | Jersey number colour |
| Pattern | `Solid`, `Vertical stripes`, `Diagonal stripe`, or `Half & half` |
| Stripe angle | −45° to +45° in 5° steps (applies to Diagonal stripe pattern) |

**GK Kit**
Same fields as Player Kit (no number field).

**Per-region Blend Opacity (0–100%)**
Controls how strongly the colour is applied to each region. 100% = full colour replacement. Lower values preserve more of the original luminance — recommended for Skin to avoid a painted look.

> **Screenshot placeholder:** Preset form for a sample casino showing all colour swatches filled in.

---

### Importing from CSV

If you have a spreadsheet of casino colours, export it as CSV and click **Import CSV** in the left panel footer. The CSV should have columns matching the preset field names.

### Exporting Presets

Click **Export JSON** to download all presets as a single JSON file — useful for backup or sharing with another team member.

### Managing Presets

- **Duplicate** — creates a copy of the current preset
- **Delete** — permanently removes the current preset

---

## Step 4 — Export (Export Tab ⚡)

The Export tab is where you generate the final deliverable ZIPs.

### Status Bar

At the top of the export view, status cards show the current readiness:

| Card | Green when… |
|---|---|
| Assets | All 9 WebP files are loaded |
| Masks | All 9 assets have masks |
| Presets | At least 1 preset exists |
| PNGs | All 10 PNG asset slots are filled |

All four cards must be **green** before a successful export.

> **Screenshot placeholder:** Status bar with all 4 cards green.

---

### PNG Asset Slots (ALL REQUIRED)

Before exporting, you must upload 10 casino-specific PNG files. These replace the default game UI images in the output:

| Slot | Filename in ZIP |
|---|---|
| loader_bar_bg | `loader_bar_bg.png` |
| loader_glow | `loader_glow.png` |
| loader_particle | `loader_particle.png` |
| popup_body | `popup_body.png` |
| loader_logo_bg | `loader_logo_bg.png` |
| popup_particle | `popup_particle.png` |
| loader_background | `loader_background.png` |
| banner_content | `banner_content.png` |
| loader_logo | `loader_logo.png` |
| background | `background.png` |

**How to upload:** Click any slot label to open a file picker. Only PNG files are accepted (the tool validates the file's magic bytes). A filled slot turns **green** with a green dot.

> **Screenshot placeholder:** PNG asset grid with 8 slots green and 2 slots unfilled (grey dots).

#### T-Rex Error

If you click Export before all 10 slots are filled, a T-Rex error modal blocks the export and lists the missing files by name.

```
    _____
   /      \
  | o    o |   RAWR! 🦖
   \  __  /
    \/  \/
```

Upload the missing PNGs and try again.

---

### Preview

Before exporting, you can preview the recoloured output for any casino:

1. Select a casino in the left panel.
2. Choose which asset to preview from the **Preview** dropdown (player, any GK pose, or ball).
3. Click **Generate preview** — the recoloured animation plays in the preview area.
4. Toggle **Show: Before / Show: After** to compare the original and recoloured versions side by side.

> **Screenshot placeholder:** Preview area showing a recoloured player sprite for a sample casino.

---

### Export Options

**Export scope:**
- **Selected** — export only the casinos checked in the left panel list
- **All casinos** — export every preset regardless of selection

**Package format:**
- **One ZIP/casino** — creates a separate `{casino_id}.zip` for each casino
- **Master ZIP** — bundles all casinos into one `all_casinos.zip` with sub-folders
- **Both** — downloads individual ZIPs AND the master ZIP

---

### Running the Export

1. Confirm all 4 status cards are green.
2. Set your Export scope and Package format.
3. Click **Export**.
4. A progress bar fills as each casino is processed.
5. The progress log shows per-casino status (green = success, red = error).
6. Download(s) start automatically when complete.
7. A randomised success message confirms completion.

> **Screenshot placeholder:** Export in progress — progress bar at 60%, log showing 3 casinos complete.

---

## What Goes Into Each ZIP

| File | Source |
|---|---|
| `player.webp` | Original, recoloured with casino kit |
| `goalkeeper_idle.webp` | Original, recoloured |
| `goalkeeper_left.webp` | Original, recoloured |
| `goalkeeper_right.webp` | Original, recoloured |
| `goalkeeper_center.webp` | Original, recoloured |
| `goalkeeper_left_high.webp` | Original, recoloured |
| `goalkeeper_right_high.webp` | Original, recoloured |
| `goalkeeper_center_high.webp` | Original, recoloured |
| `ball.webp` | Original, recoloured |
| `loader_bar_bg.png` | Uploaded PNG slot |
| `loader_glow.png` | Uploaded PNG slot |
| `loader_particle.png` | Uploaded PNG slot |
| `popup_body.png` | Uploaded PNG slot |
| `loader_logo_bg.png` | Uploaded PNG slot |
| `popup_particle.png` | Uploaded PNG slot |
| `loader_background.png` | Uploaded PNG slot |
| `banner_content.png` | Uploaded PNG slot |
| `loader_logo.png` | Uploaded PNG slot |
| `background.png` | Uploaded PNG slot |
| `background.jpg` | Pass-through from source folder |
| `font_1.woff` | Pass-through |
| `layout.json` | Pass-through |
| `sound_*.mp3` | Pass-through |
| All other files | Pass-through unchanged |

---

## Keyboard Shortcuts Reference

| Key | Action |
|---|---|
| `W` | Switch to Wand tool |
| `R` | Switch to Range tool |
| `B` | Switch to Brush tool |
| `L` | Switch to Lasso tool |
| `S` | Run Smooth edges |
| `[` | Decrease brush size by 2 |
| `]` | Increase brush size by 2 |
| `←` / `→` | Previous / next animation frame |
| `Ctrl+Z` | Undo |
| `Ctrl+Y` | Redo |
| Right-click drag | Pan the canvas |

---

## Recommended Workflow

### First-time setup (masks)

```
1. Load Assets → select Football_Shootout_assets folder
2. Click player.webp in the left panel
3. Paint Shirt → Socks → Shorts → Skin → Number regions
   - Use Wand for solid areas, Range for scattered patterns
   - Use Shift+click to add, Alt+click to remove
   - Smooth edges when a region looks clean
   - Use Region → All to copy to all 17 frames
4. Click ball.webp → paint regions
5. Click goalkeeper_idle.webp → paint regions
6. Click → All GK to copy to all 7 goalkeeper poses
7. Adjust any GK-specific frames manually if needed
8. Click 💾 Player to save mask_player.json
9. Click 💾 GK to save mask_goalkeeper.json
```

### Per-casino production

```
1. Load previously saved mask JSON files (📂 Player, 📂 GK)
2. Go to Presets tab → create or verify casino presets
3. Go to Export tab
4. Upload all 10 PNG assets (or confirm they are already uploaded)
5. Select casinos to export
6. Click Generate preview to sanity-check the colours
7. Set package format → click Export
```

---

## Browser Requirements

| Browser | Status |
|---|---|
| **Chrome** | ✅ Fully supported |
| **Edge** | ✅ Fully supported |
| Firefox | ❌ Not supported (ImageDecoder API missing) |
| Safari | ❌ Not supported |

The tool uses the **ImageDecoder API** to decode animated WebP files frame-by-frame. This API is only available in Chromium-based browsers.

---

## Troubleshooting

| Problem | Solution |
|---|---|
| Assets chip stays at 0/9 after loading | Make sure you selected the folder that contains the .webp files directly, not a parent folder |
| Export blocked by T-Rex error | Upload all 10 PNG slots in the Export tab |
| Wand selects too much / too little | Adjust the Tolerance slider — lower for precise selection, higher for lenient |
| Mask colour covers the sprite and I can't see | Lower the Overlay slider (default 45%) |
| Goalkeeper frames look different after → All GK | → All GK copies frame-by-frame up to the minimum frame count. Manually adjust frames that differ between poses |
| Export generates 0 KB ZIP | Check that the source asset folder is still loaded; reload assets if needed |
| App doesn't open at `npm start` | Make sure you ran `npm install` first in the project folder |
