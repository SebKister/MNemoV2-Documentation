# Firmware Update
The MNemo can update its firmware **over WiFi (over-the-air)** or **over USB**. Over-the-air is the easiest once a device has been set up for it; the USB method below always works and is needed for the one-time switch-over.

## Update over WiFi (over-the-air) ##

From **v3.2.0**, the MNemo can download and install new firmware by itself, over WiFi — no cable. It updates both the **main firmware** and the **WiFi radio**, and it works **on battery**.

- Turn WiFi on. If a newer version is available, an **update available** prompt appears — accept it. You can also start an update at any time from **OPTIONS > SETTINGS > SYSTEM > OTA UPDATE**.
  > *(v3.4.0+)* The check runs on the **first WiFi connection after each power-on**, so switching WiFi off and on again in the same session does not re-check. If you dismissed the prompt and want it back, either power-cycle the device or use **OTA UPDATE** from the menu.
- The MNemo connects to a saved WiFi network, downloads the update, and asks you to **confirm**.
- When prompted, **hold SELECT** to restart and apply. On battery, keeping SELECT held keeps the device powered across the restart.
- After it restarts, the **What's New** screen shows what changed.

> **One-time USB setup.** A device that has never used over-the-air updates (anything before **v3.2.0**), or one still on the older 1 MB update area, must first be flashed **once over USB** with a current version (see *Manual update* below). That installs the updated bootloader. After that single USB update, every future update — including the larger builds with Chinese fonts — arrives over WiFi.

## What's New screen ##

After every update — over WiFi or over USB — the MNemo shows a short **What's New** page on the first boot, listing the release's headline features. Press **SELECT** to page through it. You only see it **once per update**, and you can read it again any time from **OPTIONS > SETTINGS > SYSTEM > WHAT'S NEW**.

## Manual update ##

- Download the [latest firmware](https://github.com/Ariane-s-Line/Mnemo-V2-Releases/releases/latest) on Github ( It’s a file with a .UF2 extension)
- Connect the device to your computer (see [USB Connection](USB-Connection.md)) and go to:

**OPTIONS > SETTINGS > SYSTEM > UPDATE**


> The device should appear in your file explorer as a USB Memory stick would.

- Simply copy the firmware file you downloaded there. That should trigger a reboot of the Mnemo and install the new firmware.
- After updating the firmware, disconnect from the computer and turn off the MNemo. 
> The next time you turn the Mnemo on the new firmware will be fully functional.
