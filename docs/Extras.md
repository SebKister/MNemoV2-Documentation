# Tools

Navigate to:
**OPTIONS > TOOLS**

You'll find a list of diagnostic and analysis tools:

- **Depth Gauge**: A depth gauge indicating depth and absolute pressure
- **Test Mode**: A mode to test the reading of all sensors — pressure, magnetometer, inclinometer, etc.
- **ONE-GO(OFF)**: _NOT DOCUMENTED, leave on OFF_
- **MAGNETO**: Magnetic analysis tool
- **HOBO** *(v3.5.0+, option)*: downloads a HOBO temperature logger over Bluetooth

> WiFi Access Point mode has moved to **OPTIONS > WIFI > WIFI AP**. See [Wireless Data Transfer](WIFI-Data-transfer.md) for details.

## Magneto

You can use the Magneto feature to analyse how strongly your dive equipment affects magnetic readings.

> The earth magnetic field ranges from 25 µT to 65 µT depending on your location.

By moving the Mnemo closer to or further from your equipment you'll get a reading of the strength of the magnetic field created by that equipment.

- Here you can see that the magnetic field is between 32.92 and 33.44 when the device is left without any outside disturbance

![20221008_162530.jpg](/img/20221008_162530.jpg)

- When we move a dive light around the Mnemo the magnetic field is this time fluctuating between 30.55 and 37.49 — a huge difference!

![20221008_162632.jpg](/img/20221008_162632.jpg)

## HOBO temperature loggers *(v3.5.0+, option)* {#hobo-temperature-loggers}

A Mnemo with the **HOBO option** downloads an Onset **HOBO MX2201** (Pendant MX) or
**MX2203** (TidbiT MX Temp 400) temperature logger over Bluetooth, under water or on the
surface.

- **OPTIONS > TOOLS > HOBO**: hold the Mnemo against the logger. It finds the closest
  one, downloads it, saves it and shows how many readings it saved. Press **SELECT** to
  see a graph of the temperatures.
- **On the web page**: each saved download is listed under your surveys, and downloads
  as a CSV file.
- **Over USB**: the `hoboscan`, `hobodl` and `hoboread` [serial commands](Serial-CLI.md).

Each download is kept on the Mnemo, one per deployment of the logger; downloading the
same deployment again replaces it once the new download is complete. Connecting adds a
*Host Connected* event to the logger's own log, as HOBOconnect does.

### Getting the option

The option is unlocked with a key made for your Mnemo. Without it, nothing of it shows:
no HOBO in Tools, no downloads on the web page.

1. On the Mnemo's [web page](WIFI-Data-transfer.md), open **Settings** and find the
   **Extra features** card. It shows your Mnemo's serial: a `#` and 16 characters.
2. Send us that serial. You receive a key made for it.
3. Paste the key into the card and press **Activate**. **TOOLS > HOBO** appears at once,
   and stays through restarts and updates.

A key works on one Mnemo only.
