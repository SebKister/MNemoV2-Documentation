# Memory management

Mnemo can save around 5000 measures.
You can see the amount of memory used on the bottom bar in the main menu.

You can erase the memory by going to:
**OPTIONS > SETTINGS > SYSTEM > RESET MEMORY**

> We recommend downloading the data from the MNemo after each survey session, backing up the data as DMP and erasing the data from the device in order to start next session with an empty memory.
> 

A DMP you have backed up can be turned into a spreadsheet at any time — drop it on
[converter.arianesline.com](https://converter.arianesline.com). See [MnemoLink - Data Transfer](./MNEMOLINK.md).




---

## Erasing from the web interface *(v3.4.0+)*

The memory can also be erased from the device's built-in web page, without going
through the device menu. On the main page, the **Erase memory** button opens a
confirmation page which first shows you what you are about to lose:

- the number of **surveys** and **shots** currently stored, and the **percentage of
  memory in use**;
- a **Download DMP** and a **Full CSV** link, so you can save the data before
  erasing it.

The erase only happens once you type **`ERASE`** in the confirmation box and submit
the form. Reloading or bookmarking the page cannot wipe your data.

> The page refuses the erase while the device is busy — mid-survey, calibrating, or
> in depth-gauge, test or Mr Magneto mode. Finish or leave what the device is doing
> and try again.

Device settings and stored WiFi networks are not affected; only survey data, the
marker counter and the section counters are cleared.

---

## If the device loses power mid-survey *(v3.4.0+)*

A section interrupted by a power loss — a flat battery in
[ECO mode](ECO-Mode.md), a flood, anything — is closed automatically at the next
power-on. The device shows **Survey recovered** and the shots already recorded
appear in the history, on the map and in your download as an ordinary finished
section.

> Before v3.4.0 such a section survived only while it was the last thing in memory;
> starting a new survey on top of it discarded it entirely.
