# ARNIS Pocket Edition (ARNIS PE) 🗺️⛏️

A faithful, clean, and retro-focused real-world map generator designed specifically for legacy and classic versions of Minecraft. ARNIS PE bridges the gap for mobile and old-school builders, allowing users to select portions of Google Maps and convert them directly into historically accurate block layouts without system-crashing file sizes.

---

## ⚡ Core Features

*   **Google Maps Time Machine**: Slide your timeline back to 2007 (Blurry Nostalgia Mode) to capture retro neighborhood data.
*   **Minecraft Version Selector**: Structural protection that adapts palettes and world limits from Minecraft Classic up to modern configurations.
*   **Strict Size Boundaries**: Hard-capped generating limits to ensure maximum system stability on older devices.
*   **Faithful Cleanliness**: Automated generation rules that ban messy vines and organic clutter to keep infrastructure crisp and readable.

---

## 📐 Historical Limits & Palette Rules

### 🔹 Classic Era Mode (0.28 - 0.30)
*   **Strict Limit**: Fixed 128x128 grid size.
*   **Asphalt**: Gray Cloth/Wool.
*   **Curb Appeal**: Double Slabs used as a seamless "Smooth Stone" texture simulation.
*   **Traffic Signals**: Solid stack of Obsidian or Coal Ore topped with a single primary color wool block (Red/Yellow/Green).

### 🔹 Golden Age PE Mode (0.14.0 - 1.0)
*   **Maximum Limit**: Enormous 1,099 x 3,097 block grid (Capable of holding the Downtown Orlando interchange or a full section of Manhattan).
*   **Asphalt**: Cyan Clay and Gray Wool.
*   **Traffic Signals**: Black Wool infrastructure housing. Uses the 0.14.0 Redstone Update item frames left empty on inactive bulbs to realistically focus on a single color filament.

---

## 📁 File Structure

```text
arnis-pe/
├── index.html                  # Main homepage interface
├── README.md                   # Project blueprint and documentation
├── assets/                     
│   ├── css/style.css           # Dark-mode styles and retro fonts
│   └── js/
│       ├── app.js              # UI controller and input checking
│       ├── maps-api.js         # Google Maps data parser
│       └── block-converter.js  # Core block translation engine
├── palettes/                   
│   ├── classic_030.json        # 32-block Classic data limits
│   └── pe_014.json             # 0.14.0 block tracking configurations
└── downloads/                  
    ├── nmi_0.14.0.mcworld      # Northern Mariana Islands map release
    └── guam_attempt3.mcworld   # Upcoming Guam project map file
```

---

## 🚀 How to Run the Project Locally

1. Clone or download this repository folder to your computer or mobile development setup.
2. Open `index.html` directly in any web browser.
3. Input your target coordinates or Google Maps location string.
4. Pick your target legacy engine and hit **Export World File**.

---

## 👤 Developer & Credits

*   **Lead Architect & Creator**: Bryan (b r y a n)
*   **Inspiration**: Designed out of absolute resilience to surprise players and push structural block layouts to their creative maximum across independent maps.
