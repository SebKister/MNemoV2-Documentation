# Survey History and Direct View

You can access the history of your surveys on the device in the Menu at:

**OPTIONS > HISTORY**

It will display a list of all the surveys on your device.
By selecting one of those surveys you'll get access to a map of that survey as well as some basic statistics.

> **Survey names.** Surveys shot in BASIC mode are named `B01`, `B02`… and, *since
> v3.4.0*, surveys shot in [ECO mode](ECO-Mode.md) are named `E01`, `E02`… so you
> can tell afterwards which ones were shot in ECO — and therefore which ones may
> have ended on a flat battery. Both modes share a single counter, so the numbers
> never repeat. A survey named by hand in Verbose mode keeps the name you gave it.

![screencap1702463019.png](/img/screencap1702463019.png)

In BASIC and ECO mode, you can also bring up the latest survey — or the survey currently being done — at any time with the **LEFT-RIGHT-LEFT-RIGHT** click command (details [here](BASIC-Mode-Clicks.md)).
It displays a map that turns with the device.

![screencap1702463128.png](/img/screencap1702463128.png)

Give an impulse left to the slider button (SELECT) to go on to the 3D view, then to a screen with the survey's statistics, and once more to leave (see **2D / 3D Map View** below).

![screencap1702463138.png](/img/screencap1702463138.png)

> The double tap on the back of the Mnemo that used to open this view has been removed; see the [firmware changelog](ChangelogFirmware.md). In Verbose mode, you can see a section's map in the history once you have ended it.

---

## 2D / 3D Map View

When a map is displayed — whether from History or from the BASIC mode shortcut — pressing the **select button** cycles through three views:

```
2D Map  →  3D Map  →  Statistics  →  exit
         [select]    [select]       [select]
```

### 3D Map

The 3D view renders the survey in perspective with depth-based colour: **blue = deepest, red = highest** (since v3.1.0; the on-device gradient now matches the web view's). Three reference axes are shown at the origin:
- **Yellow** arrow — vertical (UP)
- **Red** arrow — North
- **Blue** arrow — East

The camera angle is controlled by the **IMU** — simply tilt and rotate the device to change the viewing direction. The camera framing adjusts automatically to fit the entire survey in view.

---

## Web Interface

When connected over WiFi (see [Wireless Data Transfer](WIFI-Data-transfer.md)), every recorded survey can be viewed in your browser as well as on the OLED.

### 2D survey map

From the device's main web page, clicking a survey opens the `/View` page: a top-down SVG map of the survey path. *(v3.1.0+)* The path is drawn as per-segment lines coloured by depth — **blue = deepest, red = highest** — so it stands out clearly against the dark background. Stations are marked with circles (yellow at the start, red elsewhere).

### Interactive 3D viewer *(v3.1.0+)*

On the 2D map page a **▶ View in 3D** button opens `/View3D`, a full-screen interactive 3D viewer of the same survey. Controls:

| Action | Mouse | Touch |
| --- | --- | --- |
| Orbit | Left-drag | One-finger drag |
| Dolly (camera distance) | Right-drag up/down | — |
| Zoom | Scroll wheel | Pinch |
| Re-centre on a station | Click the station | Tap the station |

A base-plane grid is drawn at the deepest survey point, and a small compass-rose axes widget (East / North / Up) sits in the lower-left corner. Use the **← 2D** link at the top-left to return to the 2D map.

---

## Recovered surveys *(v3.4.0+)*

If the device lost power in the middle of a section, the section is closed at the
next power-on — the device shows **Survey recovered** — and it then appears in this
list like any other finished survey, with the shots that were already recorded.
See [Memory management](memory.md).
