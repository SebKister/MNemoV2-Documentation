# ECO Mode ( Long Dives )

_Introduced in v3.4.0._

**ECO** is a third survey mode, alongside [BASIC](BASIC-Mode.md) and
[Verbose](Verbose-Mode.md). Select it in:

**OPTIONS > SETTINGS > SURVEY ( BASIC _or_ Verbose _or_ ECO )**

Each time you select that menu row the mode cycles **BASIC → Verbose → ECO →
BASIC**. The row always shows the mode currently selected, and the choice is saved
immediately.

It is built for one thing: **getting the longest possible survey out of one
battery charge**. Everything you do is identical to BASIC — the same slider
holds, the same [click commands](BASIC-Mode-Clicks.md), the same wheel, the same
readings. Only the screen changes, and the screen is where most of the power was
going.

## What it looks like

Instead of filling the whole display with the phase colour, ECO leaves the screen
black and shows the survey phase as **one small coloured disc near the top of the
screen**. The colours are exactly the ones you already know from BASIC:

| Disc colour | Phase |
| --- | --- |
| Blinking **green** | STANDBY |
| **White** | READY |
| **Red** | STABILIZE |
| Flickering **blue / violet** | READING (the wheel is measuring) |

(These are the default colours. If you changed them in MnemoLink, ECO uses your
colours too.)

The panel is also dimmed and refreshed **twice a second instead of five times a
second**. Together these bring the device down to **about 26 mA while surveying,
against 55–57 mA in BASIC** — roughly half the power for the same survey.

> The click-code reminder is still shown in ECO. Dropping it would have saved
> about 1.5 mA, which is not worth losing the reference underwater.

## ECO sections are named E##

A survey shot in BASIC is stored as `B01`, `B02`… A survey shot in ECO is stored
as **`E01`, `E02`…**, so you can always tell afterwards — in the
[history list](Survey-History.md), in the web page and in the exported file —
which surveys were shot in ECO, and therefore which ones may have ended in a flat
battery. The two modes share one counter, so the numbers never collide.

## ECO runs the battery all the way down

This is the part to understand before you use it.

In BASIC and Verbose the MNemo shuts itself down cleanly when the pack reaches the
low-battery cutoff (7.0 V). That cutoff leaves a real amount of usable capacity
unspent — sensible on a normal dive, wasteful on a long one.

**In ECO the MNemo does not stop.** The low-battery icon appears in the **top-right
corner** of the screen — clear of the state disc and of the readings — as a
*warning*, and the survey carries on until the pack is genuinely empty and the
device dies.

That is the intended behaviour, not a fault. It is also why the next section
matters.

## If the power dies mid-survey, your shots survive

Because ECO is designed to end in a power loss, the firmware now expects it.

If the MNemo loses power in the middle of a section — flat battery, flooded
compartment, anything — the section is left without its end marker. On the **next
power-on** the device closes that section for you, before it scans the memory, and
displays:

> **Survey recovered**

The shots you had already taken are all there: in the history, on the map, and in
your download, as an ordinary finished section.

> **This used to lose data.** Before v3.4.0 a section cut short like that survived
> only as long as it was the last thing in memory. As soon as you started your next
> survey on top of it, **the whole dangling section was discarded**. That is fixed.

## When to use which mode

| | Use |
| --- | --- |
| **BASIC** | Normal dives. The recommended everyday mode — full-screen colour, easiest to read at a glance. |
| **ECO** | Long dives, or any dive where running out of battery is a real possibility. |
| **Verbose** | When you need the options only Verbose offers, and you can read the screen. _(legacy)_ |

You can switch modes at any time from the menu between surveys.
