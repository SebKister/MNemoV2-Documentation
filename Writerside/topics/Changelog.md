# Change Log

## MNemoLink v1.4.5 ##
- Network scan for MNemo
- Support for Android platform

## MNemoLink v1.4.0 ##
- Automated firmware update process

## Firmware v2.6.1 ##
- Support for MNemoLink network scan

## Firmware v2.6.0 ##

- Added 2 new [click sequences](BASIC-Mode-Clicks.md), active during "Stand By", to set survey direction in BASIC mode. LEFT-LEFT-LEFT-LEFT for IN survey and RIGHT-RIGHT-RIGHT-RIGHT for OUT survey.
- During the _**Stand By**_ screen a index of the click combination is displayed.
- In basic mode Naming of section is now incremental ( B01,B02 etc ), counter gets reset when memory is.
- The name of the section as well as the direction get displayed beneath the shot counter

## v2.5.4 ##

- Add a marker with a unique ID to a station in basic mode by using a combination of clicks: LEFT-LEFT-LEFT-RIGHT
- Marker number gets displayed on live and history map
- Live survey map can be displayed in BASIC mode using a combination of clicks: LEFT-RIGHT-LEFT-RIGHT
- You can access the LRUD entry mode in BASIC mode using a combination of clicks: RIGHT-RIGHT-RIGHT-LEFT
- Added statistics page in history section after displaying the map
- In settings there's a new option to use Icons instead of text for BASIC survey indications
- In settings there's a new option to adjust the contrast of the display.
- Menu simplified for water type, unit and survey mode settings. All testing and debugging mode are now regrouped in Test Mode.
- Bold font used in BASIC mode to increase readability.
- BASIC mode input progress bar optimized to show smoother progress.
- Bug Fix: the device would enter sleep mode in Verbose survey, this could lead to DMP corruption ( _no data loss_ )
- Bug Fix: Update was missing from Menu


## v2.4.12  ##

- Battery voltage display has been replaced by a percentage of charge available.
- On the main menu voltage gets displayed in red when <20% ( +/- 40 min of survey left)
- During survey an icon is displayed in BASIC and VERBOSE survey mode indicating low battery ( <20%)
- When battery reaches 0% the device is safely shutdown avoiding memory corruption that could occur if this happened during the survey phase.
- Improvement in the Extra>Test mode, more data displayed and possibility to adjust parameter live with CLI in this mode.


## v2.4.9 ##

Feature update:
- Changed doze and sleep time to 5 min and 20 min
- Double Tap sensitivity can now be adjusted
- Support for HW variant with RV-3028-C7 RTC
- Improved accuracy of slider button
- Randomize position of screen saver image

Bug Fixes:

- Fix issue where double tap light threshold was reset
- Pressure sensor change gets now saved after change
- Fixed display pixelization on startup
- When last shot is erased in Verbose mode it gets now also erased from current map
- Allow lower values of click threshold than 20
- Progress bar no longer erases shot number in verbose mode

## v2.4.0 ##

- Added interface to save values for LRUD (Left-Right-Up-Down) profile measured or estimated values. This feature is available in Verbose survey mode only for the moment.
- Fixed issue in Double Tap activated map display.
- When in and out azimuth difference is bigger than 5deg an icon will indicate it.
- Added display of Wi-Fi connection quality on main screen. Wi-Fi auto turn off after 5 min of inactivity.
- Added Setting page to webserver allowing to adjust most MNemo settings through the Wi-Fi interface.
- Text display uses now anti antialiased fonts.

## v2.3.0 ##

- Added Warning icon on display when magnetic interference detected
- Record temperature and time at each station.
- Increased size of font in the menu of the Verbose survey mode
- Added CSV file download to the webserver
- Added individual Section CSV download link on the main webpage
- Check for valid date at start
- When wheel mode (WM) is different than 0, reverse direction functionality is disabled
- Fixed bug in display when depth >100

## v2.2.18 ##

- Added MN logo to flash screen instead of white background
- Added reset default settings to menu.
- When compass calibration is finished progress bar turns from red to yellow
- Added command to adjust pic switch on threshold. New firmware for PIC

## v2.2.16 ##

- Replaced blinking led in Doze mode by blinking screen
- Changed OLED refresh rate

## v2.2.14 ##

- Added white blinking led in Doze Mode
- Fixed bug with surface pressure setting getting corrupted

## v2.2.13 ##

- Added CLI command to activate/deactivate the requirement to move the cursor right to turn on the MNemo: activatesafeon / deactivatesafeon
- Added message indicating that parameters have been updated with the firmware

## v2.2.12 ##

- Changed BASIC mode display, added display of station number and color change on whole screen.
- Added setting to deactivate double tap map display. Accessible through CLI: activatedoubletap/deactivatedoubletap
- Added setting to control length of click in BASIC mode. Accessible through CLI: setBMclickfactor factor (factor between 20% and 150%).
- Support for BNO085 as secondary compass.
- Fixed bug when SSID or wifi password contain whitespace character.
- Fixed bug in month settings






