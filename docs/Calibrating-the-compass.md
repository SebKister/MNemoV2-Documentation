# Calibrating the compass

**_This is by far the most important calibration of the MNemo._**

- To have a precise and correct calibration it is CRUCIAL to be far away from any magnetic or electromagnetic disturbance, in particular :
	Scooters, steel tanks, compasses, dive computers, dive light canisters.
- Avoid also:
	Electric line, cars, any electric motor, metallic structure, reinforced concrete walls etc …


From the main menu select

**OPTIONS > SETTINGS > SENSORS > COMPASS**

This opens the compass menu with **CALIBRATE** and the stabilization factor setting.

## How the calibration works

The compass measures the Earth's magnetic field, but it also sees the small permanent magnetism of the MNemo itself and the way its metal parts bend the field. The calibration measures both so they can be subtracted from every reading you take afterwards.

To do that the device needs to see the Earth's field **from all around**: it collects readings while you move it, and fits them to a model of what a fixed field looks like when the device turns through every orientation. The MNemo checks that the readings it collected really do pin that model down, and shows the result as a **COVERAGE** figure. This check is what makes the difference between a calibration you can trust and one that only looks good:

> Turning the MNemo flat on the spot, without tilting it, draws a single circle of readings. That circle fits many different models equally well, so the device would pick one at random. Such a calibration can be wrong by tens of degrees while still reporting an excellent fit error, which is why the MNemo refuses to save it: its coverage stays near 0%.

## Running the calibration

Select **CALIBRATE** from the compass menu. An instruction screen is shown for a few seconds:

**TURN AROUND / WHILE NODDING / AND ROLLING / ABOUT 45 DEG**

Then the calibration screen appears, with **SAVE CAL.** and **CANCEL** on the menu line.

Hold the MNemo in front of you and turn slowly on the spot, a full turn in about five to ten seconds. **While turning, keep nodding the device**, nose up and nose down by about 45°, **and rolling it** from side to side by about 45°, as if the nose of the device were drawing loops. Turning it upside down is not necessary. Keep going until the bar at the bottom of the screen turns **green**, which typically takes 20 to 40 seconds.

The screen shows, from top to bottom:

- The raw magnetometer readings.
- Once enough readings are stored, the hard-iron offset (**HI-OFF**), the geomagnetic field strength (**GEOF**) and the fit error (**ERR%**), recomputed twice a second as you move.
- A count such as **120/192** while the device is still collecting the readings it needs for its first computation, then the **COVERAGE** figure.
- The bar at the bottom. Its colour, and that of the coverage figure, tells you where you stand: **red** while the calibration cannot be saved yet, **yellow** from 50% on, when a save is possible but the calibration is only fair, and **green from 90%**, which is the target.

<!-- TODO: screenshots of the coverage screen (red / yellow / green bar) and of the result screen, captured with tools/screencap.py on a device running this firmware -->

Aim for **90% or more**: that is what a proper nod-and-roll tumble reaches, usually within a minute, and the figure will not climb much beyond it, so there is no need to chase 100%. The higher the coverage, the less the calibration depends on the quality of the individual readings.

## Saving or cancelling

- Select **SAVE CAL.** once the bar is green, or yellow if you are pressed for time. The calibration is stored and kept across power cycles.
- If you select **SAVE CAL.** too early, **LOW COVERAGE** is displayed in red for a few seconds and the calibration carries on: keep moving the device and try again when the bar has changed colour.
- **CANCEL** leaves the calibration screen and keeps the calibration the device had before.

After a save the result stays on screen until you press **SELECT**:

- A grade: **EXCELLENT** (coverage 90% or more), **GOOD** (70% or more) or **FAIR** (below that, or a fit error above 2%). A FAIR calibration works, but it is worth redoing when you can, with more tilt or away from whatever disturbed the field.
- The coverage, the fit error (**ERR%**), the field strength (**GEOF**) and the hard-iron offset (**HI-OFF**) of the calibration that was stored, in case you want to note them down.

## Understanding the calibration results

The relevant information is the amount after ERR% which indicates how close the calibration brought the compass to the theoretical model (uniform magnetic field in any orientation). This value should be smaller than 1%.

GEOF is the approximation of the magnetic field at that location. The compass of the Mnemo is not calibrated to give precise absolute magnetic measurements, nevertheless that gives you an indication of the strength of the magnetic field at your location and should be close to the theorical value ([NCEI Geomagnetic Calculators](https://www.ngdc.noaa.gov/geomag/calculators/magcalc.shtml?useFullSite=true))

COVERAGE tells you how well the readings you collected pin the model down. 50% is the minimum the device accepts; 90% or more is what a proper tumble reaches and what the grade calls EXCELLENT. Note that a low ERR% on its own is not a sign of a good calibration: it is the coverage that guarantees the readings could not have fitted a wrong model just as well.

> After a firmware update is generally recommended do redo a calibration of the compass but it is important to turn the device completely off before doing the calibration or you’ll get incoherent measurements


> **Important:** A precise and correct compass calibration is essential for obtaining accurate survey data.
> The calibration normally takes well under a minute. If the bar does not turn green after a couple of minutes, you are most likely turning the device without tilting it enough, or standing close to a magnetic disturbance: vary the tilt more, or move away and start again.
