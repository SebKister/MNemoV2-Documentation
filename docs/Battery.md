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

From **v3.4.3**, ECO also stops lighting the wheel through every shot: it flashes the
wheel's sensors instead, so they draw about 2 mA rather than about 15 mA
while you measure. See [The wheel is flashed, not lit](ECO-Mode.md#the-wheel-is-flashed-not-lit).

## Low battery

When the pack runs low, a **low-battery icon** appears on the screen and the
display is dimmed.

- In **BASIC** and **Verbose** the MNemo then shuts itself down cleanly at the
  cutoff, ending the current section first.
- The warning comes at **7.235 V** and the cutoff at **7.0 V**, or, on a MNemo that
  has recorded its own battery *(v3.5.0+)*, at its **10%** and **5%**: see
  [A battery gauge that knows your MNemo](#a-battery-gauge-that-knows-your-mnemo).
- In **[ECO](ECO-Mode.md)** it does **not** — the icon is a warning, and the survey
  deliberately continues until the pack is empty. If the device dies mid-section,
  the next power-on reports **Survey recovered** and your shots are kept. See
  [ECO Mode](ECO-Mode.md).

## A battery gauge that knows your MNemo *(v3.5.0+)* {#a-battery-gauge-that-knows-your-mnemo}

Every MNemo uses the same voltages for its battery: 7.235 V for the low-battery
warning and 7.0 V to switch itself off safely. Batteries differ, though, and on some
MNemos 7.0 V still leaves a fifth of the battery unused: one we measured switched itself
off with about **80 minutes** of battery left.

Each MNemo can learn its own battery, with two [serial commands](Serial-CLI.md#battery)
over the USB connection. Both are optional: if you never use them, nothing changes.

### Correcting the battery reading

Small differences between MNemos put the battery reading off by a percent or two, about
0.08 V a percent. To correct it, measure the battery with a multimeter and send what it
reads, for example:

```
calibratebattery 8.23
```

The MNemo answers with what it now reads, which should match your meter. The
correction is kept through updates and a reset to defaults. `calibratebattery reset`
removes it, and `calibratebattery` alone shows the reading, the percentage and the
thresholds in use.

### Recording the battery

1. Charge the MNemo fully, switch WiFi off and go back to the main menu.
2. Send `batterylog start`.
3. When the screen says **Unplug the USB cable now**, unplug it: you have 20 seconds.
   The screen turns white with **BATTERY TEST**, and the buttons do nothing.
4. Leave it until the battery is empty and the MNemo switches off by itself: a few
   hours (about six and a half on the MNemo we measured). Do not plug it back in
   before that.
5. Charge it and switch it on. From then on its battery percentage comes from this
   recording, the low-battery warning shows at **10%**, and the MNemo switches itself
   off at **5%**, wherever its battery runs out.

`batterylog` alone shows the recording in use and the voltages its 10% and 5% come to.
`batterylog dump` prints it as a table.

While a recording runs, the MNemo keeps the one it already has. If you stop it
(`batterylog stop`), leave the cable in (it stops by itself after about ten minutes, the
battery not running down), or the MNemo restarts, nothing is lost: only a battery that
runs empty makes a new recording. `batterylog reset` goes back to the standard values.
