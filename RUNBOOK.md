# Football Skin Generator — Runbook
**Tool:** Extremepush Football Skin Generator  
**File:** `football-skin-generator.html`  
**Browser required:** Chrome or Edge (uses ImageDecoder API for animated WebP)

---

## What it does

Batch-recolors animated WebP football game assets (player + goalkeeper sprites) for 50+ casino brands. One tool replaces hours of manual frame-by-frame editing in Photoshop.

- Input: 9 animated WebP files (player + 8 goalkeeper animations = 78 frames total)
- Output: One ZIP per casino with all 9 recolored WebP files + all original static files (sounds, JSON, etc.) passed through unchanged
- Masks are drawn once, saved as `mask_library.json`, and reused forever

---

## Quick start

1. Open `football-skin-generator.html` in **Chrome** (not Firefox — needs Chrome's ImageDecoder API)
2. Click **Load Assets** (bottom of left rail) → select the football assets folder (the one containing `player.webp`, `goalkeeper_idle.webp`, etc.)
3. You'll see "Assets 9/9" chip go green if all 9 WebPs loaded
4. Go to **Masks tab** → draw shirt + socks masks for each asset (one-time setup, ~2–4 hrs)
5. Save `mask_library.json` — reload this at the start of future sessions instead of redrawing
6. Go to **Presets tab** → add casino color configs (or import from CSV)
7. Go to **Export tab** → select casinos → Export

---

## Tab 1: Mask Editor

**Purpose:** Draw which pixels are "shirt" and which are "socks" for each animation frame. Done once, saved forever.

### Workflow per asset
1. Click an asset in the left panel (e.g. `player`)
2. Select region: **Shirt** or **Socks** tab
3. Draw mask using tools (see below)
4. Use **Copy to all frames** if the shirt area doesn't move much between frames, then fix any frames that need it
5. Repeat for Socks
6. Move to next asset
7. When all done: **Save mask_library.json** — keep this file safe

### Masking tools

| Tool | How to use | Best for |
|------|-----------|---------|
| **Lasso** | Drag to draw freehand shape. Alt+drag to exclude. | Fine detail, cleanup |
| **Wand** | Click on a pixel — selects all connected similar-colored pixels (flood fill). Alt+click to subtract. | Main shirt body |
| **Range** | Click on a pixel — selects ALL similar-colored pixels in the whole frame (not just connected). Alt+click to subtract. | Scattered same-color areas |
| **▲ Grow** | Expands current selection outward by N pixels | Catching missed edges |
| **▼ Shrink** | Contracts selection inward by N pixels | Removing edge bleed |
| **Smooth** | Cleans up jagged edges and isolated speckle pixels | After wand/range |
| **Place #** | Click to set number anchor position (player only) | Number placement |

### Tolerance slider (Wand + Range only)
- 0 = exact color match only
- 40 = default, good for solid-colored shirts
- 60–80 = looser, picks up more shade variation (useful for textured shirts)

### Keyboard shortcuts
- `Ctrl+Z` — Undo
- `Ctrl+Y` / `Ctrl+Shift+Z` — Redo
- Right-click drag or middle-click drag — Pan the canvas
- Scroll wheel — Zoom in/out

### Recommended masking workflow
1. Click on main shirt area with **Wand** (tol ~40)
2. Ctrl+Z if it bleeds into background → raise or lower tolerance → try again
3. **Grow 2px** to catch anti-aliased edges
4. **Smooth** to clean up
5. Switch to **Lasso** to add any missed patches (drag to include)
6. Alt+Lasso to subtract any background that got included
7. When happy: **Copy to all frames** → check each frame and fix edge cases

### mask_library.json
- Format: `{ version: 2, player: { shirt: [base64...], socks: [...], anchors: [...] }, gk_idle: {...}, ... }`
- One entry per asset key
- Load it at session start: **Load mask_library.json** button in left panel
- Always keep a backup of this file — it represents all mask work

---

## Tab 2: Casino Presets

**Purpose:** Store color configs per casino brand.

### Fields
| Field | Description |
|-------|-------------|
| Casino Name | Display name |
| Casino ID | Used as folder/ZIP name (no spaces recommended) |
| Shirt Color | Player shirt base color (hex) |
| Sock Color | Player socks color |
| Pattern | solid / vertical_stripes / diagonal_stripe / half_half |
| Pattern Color | Second color for striped patterns |
| Pattern Width | Stripe width in pixels |
| Number | Jersey number to render (e.g. "7") |
| Number Color | Color of jersey number |
| GK Shirt / Socks / Pattern | Same fields for goalkeeper |

### CSV import format
```
casino_id,casino_name,player_shirt,player_socks,player_pattern,pattern_color,player_number,goalkeeper_shirt,goalkeeper_socks
betway,Betway,#00A651,#FFFFFF,solid,#FFFFFF,7,#000000,#FFFFFF
```

Supported columns: `casino_id`, `casino_name`, `player_shirt`, `player_socks`, `player_pattern`, `pattern_color`, `player_number`, `goalkeeper_shirt`, `goalkeeper_socks`, `goalkeeper_pattern`

Also accepts `primary` / `secondary` as fallbacks for shirt/sock if the specific columns aren't present.

### Patterns
- `solid` — single color
- `vertical_stripes` — alternating color stripes (width = Pattern Width px)
- `diagonal_stripe` — diagonal stripes at 45°
- `half_half` — top half one color, bottom half second color

---

## Tab 3: Generator (Export)

### Status cards
All three must be green before export works well:
- **Assets** — all 9 WebPs loaded
- **Masks** — shirt masks drawn for at least some assets
- **Presets** — at least one casino preset exists

### Export options
| Option | Description |
|--------|-------------|
| Selected | Only export checked casinos from the left list |
| All casinos | Export every preset |
| One ZIP/casino | Each casino gets its own ZIP named `{casino_id}_football_shootout.zip` |
| Master ZIP | One ZIP with all casinos in subfolders |
| Both | Download individual ZIPs + master ZIP |

### Preview
- Select a casino → **Generate preview** → plays animated preview of recolored player
- **Show: Before/After** toggle to compare

### Export output structure (per casino ZIP)
```
{casino_id}_football_shootout.zip
├── player.webp                   ← recolored
├── goalkeeper_idle.webp          ← recolored
├── goalkeeper_left.webp          ← recolored
├── goalkeeper_right.webp         ← recolored
├── goalkeeper_center.webp        ← recolored
├── goalkeeper_left_high.webp     ← recolored
├── goalkeeper_right_high.webp    ← recolored
├── goalkeeper_center_high.webp   ← recolored
├── ball.webp                     ← recolored (if mask exists, else passthrough)
└── [all other files from assets folder — sounds, JSON, etc. — unchanged]
```

---

## Asset registry

| Key | File | Size | Frames | Type |
|-----|------|------|--------|------|
| player | player.webp | 590×590 | 17 | player |
| gk_idle | goalkeeper_idle.webp | 918×360 | 5 | goalkeeper |
| gk_left | goalkeeper_left.webp | 918×360 | 10 | goalkeeper |
| gk_right | goalkeeper_right.webp | 918×360 | 10 | goalkeeper |
| gk_center | goalkeeper_center.webp | 918×360 | 4 | goalkeeper |
| gk_left_h | goalkeeper_left_high.webp | 918×360 | 11 | goalkeeper |
| gk_right_h | goalkeeper_right_high.webp | 918×360 | 11 | goalkeeper |
| gk_center_h | goalkeeper_center_high.webp | 918×360 | 10 | goalkeeper |
| ball | ball.webp | 61×69 | 6 | ball |

Total: 78 frames

---

## Recolor engine — how it works

1. For each frame, the mask (a per-pixel Uint8Array) marks which pixels are shirt/socks
2. The base luminance of the original masked region is measured
3. Each masked pixel is replaced with the target color, scaled by `origLum / baseLum` to preserve shading/shadows/highlights
4. Pattern pixels alternate between shirt color and pattern color according to the selected pattern type
5. The number is composited on top of the player using the anchor position with luminance blending

This means the output looks like the shirt fabric genuinely changed color — highlights and shadows are preserved. It does NOT work by color-picking (no green screen).

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| "ImageDecoder API not available" banner | Switch to Chrome or Edge |
| Assets not loading | Make sure you select the folder containing the `.webp` files directly, not a parent folder |
| Wand selects background | Lower tolerance; try 20–30 for shirts with sharp edges |
| Wand misses shadow areas | Raise tolerance to 50–60, or use Range tool instead |
| Color looks wrong on export | Check the mask — open the asset in Mask Editor and verify the overlay covers the full shirt |
| Export produces no ZIP | Check browser download permissions; some browsers block multiple simultaneous downloads |
| Number not rendering | Make sure "Place #" anchor is set for each player frame (or copy from frame 1 to all) |

---

## Files

| File | Description |
|------|-------------|
| `football-skin-generator.html` | The entire tool — open this in Chrome |
| `mask_library.json` | Your saved mask work — generated by the tool, reload each session |
| `casino_presets.json` | Exported casino presets — optional backup |

---

*Built with vanilla JS + JSZip. No install, no server, works offline.*  
*Requires Chrome or Edge for animated WebP decode/encode (ImageDecoder API).*
