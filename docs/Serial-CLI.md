# Serial Command Line Interface

The Mnemo exposes a **serial command-line interface (CLI)** over its USB connection.
It lets you read data, change settings, and run diagnostics from a computer — including
several settings that are not available from the on-device menu.

Most users will never need this: the [MNemoLink](MNEMOLINK.md) desktop software drives
these same commands behind a friendly interface. The CLI is documented here for advanced
users and troubleshooting.

## Connecting

1. Connect the Mnemo to your computer with the USB cable (see [MnemoLink – Data Transfer](MNEMOLINK.md) for cabling).
2. Open any serial terminal program and connect to the Mnemo's serial port at **57600 baud**.
3. Type a command name, optionally followed by arguments, and press **Enter**.

Commands that produce a serial response finish it with an end-of-transmission marker,
so host software knows when the response is complete. A few commands that only change a
setting or update the display return without emitting a marker.

:::tip
Not sure what's available? Type `help` to list every command with its description, or
`help <command>` for a single one. `listcommands` prints just the command names.
:::

:::danger
Commands marked **[DO NOT USE]** are low-level factory, hardware, and debug operations.
They can corrupt device settings, survey data, or the hardware itself. Leave them alone
during normal use.
:::

## Data transfer

| Command | Arguments | Description |
|---------|-----------|-------------|
| `getdata` | `[address(>800)]` | Reads all survey data from the device, or reads until the optional memory address is reached. |
| `syncdatetime` | — | Synchronizes the device date/time with the computer's. |

## Help & discovery

| Command | Arguments | Description |
|---------|-----------|-------------|
| `help` | `[command]` | Shows help for all commands, or for a single named command. |
| `listcommands` | — | Lists the names of all available commands. |

## Device identity & firmware

| Command | Arguments | Description |
|---------|-----------|-------------|
| `setname` | `name` | Sets the custom (friendly) name of the device: 1 to 19 letters (A–Z, a–z), digits, spaces, hyphens or underscores. Spaces at either end are dropped. Any other name is refused with an error line, and the current name is kept. |
| `getname` | — | Gets the custom name of the device. |
| `getfirmwareversion` | — | Gets the firmware version installed on the Mnemo. |
| `getwififirmwareversion` | — | Gets the firmware version installed on the WiFi (NINA) module. |

## WiFi network management

| Command | Arguments | Description |
|---------|-----------|-------------|
| `addwifinet` | `NetworkName Password` | Adds a WiFi network to the device, or replaces the password of one already saved under that name: a name of 1 to 32 bytes, and a password of 8 to 63 characters (an accented letter counts as 2), or none for an open network. Up to 20 networks are kept. A network that does not fit is refused with an error line saying why, and nothing is saved. An error line also reports a network the WiFi module's storage did not keep. |
| `removewifinet` | `NetworkName Password` | Removes a WiFi network from the device. |
| `clearwifinet` | — | Clears the entire list of saved networks. |
| `listwifinet` | — | Reads the list of saved networks. |
| `checkwifistorage` | — | *(firmware after v3.4.0)* Checks that the device can still save networks. Prints `OK` or `FAILING`. |
| `repairwifistorage` | `[force]` | *(firmware after v3.4.0)* Runs the same check and, only if it fails, clears the WiFi radio's storage area so that networks can be saved again. **Deletes the saved networks.** `force` clears it even when the check passes. See [Saved networks are not kept](WIFI-Data-transfer.md#saved-networks-are-not-kept). |

## Click / button tuning

| Command | Arguments | Description |
|---------|-----------|-------------|
| `getclickthreshold` | — | Gets the click threshold percentage. |
| `setclickthreshold` | `level` | Sets the click threshold percentage, 10–90; any other value is ignored. |
| `getunclickdelta` | — | Gets the unclick threshold percentage. |
| `setunclickdelta` | `level` | Sets the unclick threshold percentage, 2–40; any other value is ignored. |
| `getBMclickfactor` | — | Gets the Basic Mode click time factor (in %). |
| `setBMclickfactor` | `factor` | Sets the Basic Mode click time factor (in %). |
| `activatesafeon` | — | Activates the safety-to-turn-on feature. |
| `deactivatesafeon` | — | Deactivates the safety-to-turn-on feature. |

## Compass & stabilization

| Command | Arguments | Description |
|---------|-----------|-------------|
| `getstabilizationfactor` | — | Gets the stabilization factor. |
| `setstabilizationfactor` | `factor` | Sets the stabilization factor. |
| `getmagneticinterferencethreshold` | — | Gets the tolerated magnetic-interference threshold (in %). |
| `setmagneticinterferencethreshold` | `value` | Sets the tolerated magnetic-interference threshold (in %). |

## Display colors

| Command | Arguments | Description |
|---------|-----------|-------------|
| `getcolor` | `state` | Gets the color of a state (`standby`, `readinga`, `readingb`, `stabilize`, `ready`). |
| `setcolor` | `state color24b` | Sets the color of a state to a 24-bit hex color (e.g. `setcolor ready 354250`). |
| `defaultcolorscheme` | — | Restores the default color scheme. |

## Settings & reset

| Command | Arguments | Description |
|---------|-----------|-------------|
| `defaultsettings` | — | Restores all default settings **and erases the memory**. |
| `testmode` | — | Puts the device into Test mode. |

## Runtime statistics

| Command | Arguments | Description |
|---------|-----------|-------------|
| `gettimeon` | — | Gets the time (in minutes) the device has been switched ON. |
| `gettimesurvey` | — | Gets the time (in minutes) the device has been surveying. |

## Over-the-air update

Available on firmware built with OTA support.

| Command | Arguments | Description |
|---------|-----------|-------------|
| `otaupdate` | `url` | Downloads an application `.bin` from an `http://`/`https://` URL and self-applies it (reboots; WiFi must be connected). |
| `otaupdatenina` | `url` | Flashes the NINA radio firmware from a `nina.bin` URL (releases WiFi, then flashes — takes several minutes). |

See [Firmware Upgrade](Firmware-Upgrade.md) for the recommended update procedure.

## Low-level / factory — [DO NOT USE]

| Command | Arguments | Description |
|---------|-----------|-------------|
| `picbootmode` | — | Prepares the device for PIC reprogramming. |
| `getpicinfo` | — | Gets PIC hardware/firmware information. |
| `picprog` | `[INIT]` | Uploads the in-memory firmware onto the PIC. Pass `INIT` for the initialization variant. |
| `getpicswitchonthreshold` | — | Gets the PIC switch-on threshold. |
| `setpicswitchonthreshold` | `value` | Sets the PIC switch-on threshold to the given numeric value. |
| `eepromwrite` | `address byte` | Writes a byte to a specific EEPROM address. |
| `eepromread` | `address` | Reads a byte from a specific EEPROM address. |
| `readfile` | `filename` | Reads a file stored on Flash memory. |
| `erasefile` | `filename` | Erases a file stored on Flash memory. |

_UI-test builds add extra commands (`screencap`, `inject`, `gotomain`) used only for
automated interface testing; they are not present in production firmware._
