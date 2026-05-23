# Date and Time Synchronization

The MNemo v2 stores the date and time of each survey. It is important to ensure the device's clock is correctly set before going on a dive, as an incorrect date/time will affect the timestamps recorded in your survey files.

## How to Synchronize the Date and Time

### From the web interface (recommended)

The easiest way to set the clock is from the device's built-in web page over WiFi — no extra software beyond a browser once WiFi is available.

1. Turn WiFi on (see [Wireless Data Transfer](WIFI-Data-transfer.md)) and open the Mnemo's page in your browser. *(v3.1.0+: scan the QR code shown on the OLED.)*
2. Open the **Settings** page from the top menu.
3. Under **Time & Format → Date & time**, tap **Synchronize date & time**.

The device clock is set to the **current date and time of the browser** (i.e. your phone or computer). Two taps and you're done.

> **Tip:** Make it a habit to open the Mnemo page and tap the sync button at the start of every dive trip.

### Over the USB serial console (advanced)

Power users can also sync the clock over USB by sending the `syncdatetime` command on the device's serial port (57600 baud) followed by 5 bytes (year minus 2000, month, day, hour, minute). This is the protocol that desktop helper tools use under the hood.

## Checking the Current Date and Time

You can verify the current date and time directly on the device from the **Main Menu**. The bottom status line shows:

| Display | Description |
| ----------- | ----------- |
| 26/03 11:26 27.6ºC | _Day/Month  Hour:Minute  Water Temperature_ |

The Day/Month order can be swapped to Month/Day on the web Settings page (**Time & Format → Date format**).

If the date and time look incorrect, follow the steps above to resynchronize.

## Potential Issues When the Date Has Not Been Synchronized

If the device's clock has not been synchronized, the following issues can arise:

- **Incorrect survey timestamps**: each survey is recorded with a date and time. If the clock is wrong, it will be difficult to match a survey to the date of the actual dive.
- **Default date fallback**: if the internal clock has lost its settings (for example after a fully depleted battery), the device falls back to a default date. A **DATE RESET** warning is shown for a few seconds when the Mnemo is turned on to alert you.
- **Data-management confusion**: when reviewing surveys in your cave-survey software, incorrect dates make it harder to organise and identify dives, especially when multiple surveys are stored on the device.

> **Important:** if you see the **DATE RESET** warning when turning on your MNemo, resynchronize the clock from the web interface before your next dive.
