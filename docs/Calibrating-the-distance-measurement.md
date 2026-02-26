# Calibrating the distance measurement

## Manual Calibration
In the menu navigate to : 

**OPTIONS > SETTINGS > SENSORS > DISTANCE**

and adjust the factor by small changes using the + and - menu entries.
After each change take a length measurement of a line with a known length and compare the result. If the measurement is too short increase the factor otherwise decrease it.

> This is not the recommended way to calibrate the length. The Auto mode described below is recommended.

## Automatic Calibration

- Put in place a line with markers separated by 5m precisely if the unit is set to METER, or 15 ft if set to IMPERIAL.
- Select **OPTIONS > SETTINGS > SENSORS > DISTANCE > AUTO**
- Take a measure between those two markers as if they were two stations(tie-offs) in a cave. 
    >The Standard survey process is explained [here](Verbose-Mode.md)
- Once done you’ll get a message Adjustment : X , X being the adjustment factor _( How much the factor needs to be changed to have a good measure)_.
- Repeat that operation until you get an adjustment factor of **0** or **1**.

>Tip: If at any point during a survey dive you realize that the line measurement is not working anymore, change the parameter WM to the value 1 or 2 instead of 0. Try both setting to find the one that is still working.

