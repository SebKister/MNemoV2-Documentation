# Battery

- The Mnemo contains a 2S - 450 mAh sealed lipo battery.
- The Mnemo can be recharged using either the USB port of your computer or a dedicated charger. It requires no more than 150mA charging current.
- The red LED indicates that the charge is in progress. It will turn off when the charge is complete.

![ledindicator.jpg](/img/ledindicator_1.jpg)

It is recommended to have the Mnemo turned OFF before connecting for a charge.

> Note that if the device is ON and connected to a charger, it will not turn off when you select EXIT in the main menu but simply go into Energy Saver mode ( Blinking Battery on the screen )



---

## Making the charge last *(v3.4.0+)*

Three changes in v3.4.0 stretch a single charge, two of them without you doing
anything:

- **The processor rests between jobs.** The MNemo used to run at full clock for an
  entire dive even when there was nothing to do. It now halts between scheduled
  jobs and wakes on the next one — or immediately on a wheel tick or a button
  press. Nothing looks different; the battery simply lasts longer.
- **WIFI OFF really turns the radio off.** Switching WiFi off used to leave the
  radio powered and still associated, holding the device at roughly **80 mA
  instead of its 28 mA idle**. The radio is now genuinely powered down.
- **[ECO survey mode](ECO-Mode.md)** more than halves the current drawn while you
  survey — about **27 mA against BASIC's 55–57 mA** — by replacing the full-screen
  colour with a single small coloured dot on a black screen.

## Low battery

When the pack runs low, a **low-battery icon** appears on the screen and the
display is dimmed.

- In **BASIC** and **Verbose** the MNemo then shuts itself down cleanly at the
  cutoff, ending the current section first.
- In **[ECO](ECO-Mode.md)** it does **not** — the icon is a warning, and the survey
  deliberately continues until the pack is empty. If the device dies mid-section,
  the next power-on reports **Survey recovered** and your shots are kept. See
  [ECO Mode](ECO-Mode.md).
