# Firmware Update
The MNemo can update its firmware **over WiFi (over-the-air)** or **over USB**. Over-the-air is the easiest once a device has been set up for it; the USB methods below always work and are needed for the one-time switch-over.

## Update over WiFi (over-the-air) ##

From **v3.2.0**, the MNemo can download and install new firmware by itself, over WiFi — no cable. It updates both the **main firmware** and the **WiFi radio**, and it works **on battery**.

- Turn WiFi on. If a newer version is available, an **update available** prompt appears — accept it. You can also start an update at any time from **OPTIONS > SETTINGS > SYSTEM > OTA UPDATE**.
- The MNemo connects to a saved WiFi network, downloads the update, and asks you to **confirm**.
- When prompted, **hold SELECT** to restart and apply. On battery, keeping SELECT held keeps the device powered across the restart.
- After it restarts, the **What's New** screen shows what changed.

> **One-time USB setup.** A device that has never used over-the-air updates (anything before **v3.2.0**), or one still on the older 1 MB update area, must first be flashed **once over USB** with a current version (see *Manual update* below). That installs the updated bootloader. After that single USB update, every future update — including the larger builds with Chinese fonts — arrives over WiFi.

## What's New screen ##

After every update — over WiFi or over USB — the MNemo shows a short **What's New** page on the first boot, listing the release's headline features. Press **SELECT** to page through it. You only see it **once per update**, and you can read it again any time from **OPTIONS > SETTINGS > SYSTEM > WHAT'S NEW**.

## Automatic update ##

With the introduction of [MNemoLink v1.4.0](https://github.com/SebKister/MNemoLink/releases/latest), the firmware process has been simplified.
When you connect the device to the computer and open MNemoLink, the application will look if a new version of the firmware is available.

![Screenshot 2024-01-01 142739.png](/img/Screenshot_2024-01-01_142739.png)


If so, it will allow you to update the firmware automatically to the latest version by pressing the yellow update button. 

## Manual update ##

- Download the [latest firmware](https://github.com/Ariane-s-Line/Mnemo-V2-Releases/releases/latest) on Github ( It’s a file with a .UF2 extension)
- Connect the device to your computer and go to:

**OPTIONS > SETTINGS > SYSTEM > UPDATE**


> The device should appear in your file explorer as a USB Memory stick would.

- Simply copy the firmware file you downloaded there. That should trigger a reboot of the Mnemo and install the new firmware.
- After updating the firmware, disconnect from the computer and turn off the MNemo. 
> The next time you turn the Mnemo on the new firmware will be fully functional.
