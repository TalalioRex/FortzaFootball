# Football Skin Generator — Video Script & Storyboard

**Target length:** ~5–6 minutes  
**Format:** Screen recording with voiceover  
**Tone:** Clear, professional, confident — like demoing to a new team member  
**Software to record:** OBS Studio, Loom, or Windows Game Bar (Win + G)

---

## BEFORE YOU RECORD

- Open the app: `football-skin-generator.html` in Chrome or Edge
- Have a test asset folder ready (loaded assets preferred)
- Have a saved `mask_player.json` and `mask_goalkeeper.json` ready to load
- Have 2–3 casino presets already created (e.g. Betway, LeoVegas, 888)
- Have 10 PNG UI files ready for the export demo
- Set screen resolution to 1920×1080, zoom browser to 100%
- Use a clean desktop background

---

## SCENE-BY-SCENE BREAKDOWN

---

### SCENE 1 — INTRO (0:00 – 0:20)

**Screen:** App closed / desktop or title slide  
**Action:** Open the app in the browser

**Voiceover:**
> "This is the Football Skin Generator — a tool we built internally at Game Lounge to rebrand the Football Shootout game for any casino client, in minutes. Let me walk you through how it works."

**Notes:**  
- Keep it short, confident. No filler.  
- The app opening gives a first impression — make sure it looks clean.

---

### SCENE 2 — OVERVIEW (0:20 – 0:40)

**Screen:** App home screen showing the 3 tabs: Masks ⬡, Presets ◈, Export ⚡

**Action:** Hover over each tab briefly, then narrate the 3 steps

**Voiceover:**
> "The whole workflow is three steps. Tab one is the Mask Editor — where you paint the sprite regions once. Tab two is Presets — where you configure each casino's colours. Tab three is Export — where you generate and download the ZIP files. Let's go through each one."

**Notes:**
- Don't click anything yet — just gesture/hover so the viewer sees the nav

---

### SCENE 3 — TAB 1: MASK EDITOR (0:40 – 2:00)

**Screen:** Masks tab, player asset selected, coloured overlay visible

**Step 3a — Load Assets (0:40 – 0:55)**  
**Action:** If assets not loaded, click "Load Assets" and select the folder. Watch the asset list populate.

**Voiceover:**
> "First, you load your assets. This is the standard Football Shootout asset folder. The tool loads all 9 sprites — player, ball, and the 7 goalkeeper poses."

---

**Step 3b — Show the Regions (0:55 – 1:15)**  
**Action:** Click `player.webp` in the asset list. Show the coloured overlay on the canvas. Point to the region tabs: Shirt (green), Socks (blue), Shorts (purple), Skin (orange), Number (amber).

**Voiceover:**
> "Each sprite has up to 5 paintable regions. You can see them here as colour overlays — green for the shirt, blue for socks, purple for shorts, orange for skin, amber for the number. These regions tell the tool exactly which pixels to recolour for each casino."

---

**Step 3c — Demonstrate Painting (1:15 – 1:35)**  
**Action:** Select the Shirt region → select Wand tool → click the shirt area. Watch it fill. Try Shift+click to add a missed area. Then click Smooth Edges.

**Voiceover:**
> "Painting is simple. You pick a region, pick a tool — I'm using the Magic Wand here — click on the area, and it flood-fills. Shift-click to add more, Alt-click to remove. Once you're happy with the outline, hit Smooth Edges to clean up any jagged borders."

---

**Step 3d — Copy to All Frames & GK (1:35 – 1:55)**  
**Action:** Click "Region → All" in the bottom frame strip. Then click "→ All GK" in the right panel.

**Voiceover:**
> "Here's the real timesaver: once you've painted a region on one frame, you hit 'Region to All' and it copies to every animation frame. And this button — 'All GK' — broadcasts the mask to all seven goalkeeper poses at once. You only ever paint it once."

---

**Step 3e — Save Masks (1:55 – 2:00)**  
**Action:** Click "💾 Player" → file saves. Click "💾 GK" → file saves.

**Voiceover:**
> "Save the masks as JSON files. These are reusable — you never have to repaint from scratch."

---

### SCENE 4 — TAB 2: PRESETS (2:00 – 3:20)

**Screen:** Click Presets tab ◈. Show the casino list on the left with a few presets already in.

**Step 4a — Overview (2:00 – 2:15)**  
**Action:** Scroll through the casino list. Click one preset to open it.

**Voiceover:**
> "Tab two is Presets. Each entry here is one casino. You can see the colour dots on the left giving a preview of each brand's kit. Let me open one."

---

**Step 4b — Walk Through the Form (2:15 – 2:45)**  
**Action:** Show the Casino Name, Casino ID fields. Then walk through the colour pickers — click a Shirt swatch and change it. Show the Pattern dropdown, select Diagonal Stripe, show the angle slider move.

**Voiceover:**
> "For each casino you set the name and ID — the ID becomes the folder name inside the ZIP. Then you pick colours for each kit part — shirt, socks, shorts, skin tone, number. You can also choose a pattern: solid, vertical stripes, diagonal, or half-and-half. For diagonal, you control the angle."

---

**Step 4c — Blend Opacity (2:45 – 3:00)**  
**Action:** Scroll to the Blend Opacity sliders. Adjust the Skin slider down to show the difference.

**Voiceover:**
> "The Blend Opacity controls how strongly a colour applies to each region. For skin tones especially, you usually want this lower — say 40% — so it looks natural rather than painted."

---

**Step 4d — CSV Import (3:00 – 3:15)**  
**Action:** Click "Import CSV" button (don't have to actually import — just show the button and a sample CSV structure if possible).

**Voiceover:**
> "And if you have a spreadsheet of 100 casino brands, you can bulk-import them all at once via CSV. The whole list populates in seconds."

---

**Step 4e — Save Preset (3:15 – 3:20)**  
**Action:** Click "Save preset."

**Voiceover:**
> "Hit Save and it's in the list. Now let's export."

---

### SCENE 5 — TAB 3: EXPORT (3:20 – 4:50)

**Screen:** Click Export tab ⚡. Show the status bar at the top.

**Step 5a — Status Bar (3:20 – 3:35)**  
**Action:** Point to the 4 status cards: Assets, Masks, Presets, PNGs.

**Voiceover:**
> "Before you can export, the status bar needs to go fully green. Assets loaded — check. Masks complete — check. Presets created — check. The last one is the PNG UI assets — these are the 10 interface files that go into every ZIP."

---

**Step 5b — Upload PNGs (3:35 – 3:55)**  
**Action:** Click a PNG slot label (e.g. "loader_logo") → select the file → watch the dot turn green. Do 2–3 of them.

**Voiceover:**
> "Click any slot, pick the matching PNG file, and it validates automatically. Once all 10 are uploaded the card goes green and you're clear to export."

---

**Step 5c — Preview (3:55 – 4:10)**  
**Action:** Select a casino from the list, choose "player" from the asset dropdown, click "Generate Preview." Toggle Before / After.

**Voiceover:**
> "Before committing, you can preview any casino's kit. Click 'Generate Preview' and you get a before-and-after comparison — original on the left, recoloured on the right. This is the actual output, not a mock-up."

---

**Step 5d — Export (4:10 – 4:40)**  
**Action:** Select a few casinos with checkboxes. Set format to "Both". Click Export. Watch the progress bar and log fill in.

**Voiceover:**
> "Select your casinos — or hit All — choose your package format, and click Export. The tool processes every casino one by one. You can watch the log here. When it's done, the files download automatically."

---

**Step 5e — ZIP Contents (4:40 – 4:50)**  
**Action:** Open a downloaded ZIP briefly to show the folder structure.

**Voiceover:**
> "Each ZIP has the casino ID as the folder name, contains the 9 recoloured WebP files, the 10 PNG UI assets, and all the original game files. Ready to drop straight into the delivery folder."

---

### SCENE 6 — CLOSING (4:50 – 5:20)

**Screen:** Return to app, maybe show overview of all 3 tabs one more time

**Voiceover:**
> "That's the full workflow. Mask your sprites once, build your casino presets — manually or via CSV — and export any combination of brands in minutes. The masks are saved files you'll never have to redo. Every new casino is literally just colours and a click.  
>  
> Any questions — the full guide is in GUIDE.md in the project folder."

---

## RECORDING TIPS

| Tip | Detail |
|-----|--------|
| **Cursor visibility** | Use a cursor highlighter (e.g. PowerToys Mouse Highlighter) so viewers can follow where you click |
| **Zoom** | Zoom into the canvas when demonstrating mask painting — viewers need to see the pixel detail |
| **Pause before transitions** | Pause 1–2 seconds before switching tabs so editors can add a cut or transition |
| **Mistakes are fine** | If you mis-click, just pause and redo. Edit the raw recording in Clipchamp or DaVinci Resolve |
| **Record audio separately** | If voiceover quality matters, record it separately and sync in post |
| **Frame rate** | 30fps is fine. 60fps if the animations look choppy at 30 |

---

## CHAPTER MARKERS (for YouTube / Confluence embed)

```
0:00  Intro
0:20  App overview — 3 tabs
0:40  Tab 1: Mask Editor
1:35  Copying masks to all frames & goalkeepers
2:00  Tab 2: Presets
3:00  Bulk CSV import
3:20  Tab 3: Export
3:55  Before / After preview
4:10  Running the export
4:50  ZIP output walkthrough
4:50  Closing
```
