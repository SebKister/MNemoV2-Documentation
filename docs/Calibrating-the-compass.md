# Calibrating the compass

**_This is by far the most important calibration of the MNemo._**

- To have a precise and correct calibration it is CRUCIAL to be far away from any magnetic or electromagnetic disturbance, in particular :
	Scooters, steel tanks, compasses, dive computers, dive light canisters.
- Avoid also:
	Electric line, cars, any electric motor, metallic structure, reinforced concrete walls etc …


From the main menu select

**OPTIONS > SETTINGS > SENSORS > COMPASS**

This opens the compass calibration menu with two calibration methods: **CALIBRATE** and **3-PLANE**, as well as the stabilization factor setting.

## Fast Calibration

Select **CALIBRATE** from the compass menu.

You must rotate slowly (as in one full rotation per 4s) randomly the Mnemo on all of its 3 axis in order to perform the calibration.

![screencap1702386279.png](/img/screencap1702386279.png)

The display will show a red progress bar indicating the advance or the calibration process.

![screencap1702386404.png](/img/screencap1702386404.png)

Once the calibration gets close to completion it will turn green and you’ll have more information displayed on the screen.


## 3-Plane Calibration

The 3-Plane calibration is an **optional** advanced method that collects measurements on three specific tilt planes: **horizontal (0°)**, **30° nose-up**, and **30° nose-down**. It is **not required** — the standard calibration described above is sufficient for most users and conditions.

The 3-Plane calibration can be beneficial when:
- You are surveying passages with consistent upward or downward slopes (around 30°) and want the best possible accuracy at those tilt angles.
- You want to ensure that the calibration is specifically optimized for the range of orientations typically encountered during cave surveying.

Because it concentrates measurements on the tilt angles you actually use in the field, the 3-Plane calibration minimizes heading inaccuracy in those orientations. However, if your standard calibration already shows a low ERR% and you are satisfied with the survey accuracy, there is no need to perform a 3-Plane calibration.

> **Prerequisite:** A valid Fast Calibration must have been performed and saved before using the 3-Plane method. If no prior calibration exists, the screen will display "CALIBRATE FIRST" and return to the menu.

Select **3-PLANE** from the compass menu.

### How it works

The calibration proceeds through 3 planes in sequence. For each plane:

1. An instruction screen appears showing the current plane number (1/3, 2/3, 3/3) and the required tilt angle.
2. The live calibration screen displays:
   - **Tilt indicator**: Your current tilt angle and the target. The text turns **green** when you are within ±5° of the target, **yellow** within ±20°, and **red** otherwise. A horizontal bar also shows your tilt position relative to the target.
   - **Azimuth coverage**: A row of 12 blocks representing 30° sectors of a full 360° rotation. Each block turns **green** when that compass direction has been covered. A white marker shows your current heading.
   - **Calibration data**: Magnetometer readings, hard-iron offset (HI-OFF), geomagnetic field strength (GEOF), and fit error percentage (ERR%) appear as enough data is collected.
   - **Progress bar**: At the bottom, three segments show the overall progress across all three planes.

3. **Data is only recorded when your tilt is within ±5° of the target angle.** If you are outside this tolerance, measurements are paused and the azimuth sectors will not fill.

4. Once all 12 azimuth sectors are filled (a full 360° rotation at the correct tilt), the device **automatically advances** to the next plane.

### Plane sequence

| Plane | Target tilt | Instruction |
|-------|------------|-------------|
| 1/3   | 0° (horizontal) | HOLD HORIZONTAL |
| 2/3   | +30° (nose up) | TILT 30 UP |
| 3/3   | -30° (nose down) | TILT 30 DOWN |

### Completion

After the third plane is complete, the calibration is **automatically saved** and a summary screen is displayed for 5 seconds showing:
- HI-OFF (hard-iron offset vector)
- GEOF (geomagnetic field strength)
- ERR% (fit error percentage)
- Total number of measurements collected

The device then returns to the main menu.

## Understanding the calibration results

The relevant information is the amount after ERR% which indicates how close the calibration brought the compass to the theoretical model (uniform magnetic field in any orientation). This value should be smaller than 1%.

GEOF is the approximation of the magnetic field at that location. The compass of the Mnemo is not calibrated to give precise absolute magnetic measurements, nevertheless that gives you an indication of the strength of the magnetic field at your location and should be close to the theorical value ([NCEI Geomagnetic Calculators](https://www.ngdc.noaa.gov/geomag/calculators/magcalc.shtml?useFullSite=true))

> After a firmware update is generally recommended do redo a calibration of the compass but it is important to turn the device completely off before doing the calibration or you’ll get incoherent measurements


> **Important:** A precise and correct compass calibration is essential for obtaining accurate survey data.
> The average calibration time is around 1 minute for the Fast Calibration. The 3-Plane calibration typically takes 2-3 minutes. If the calibration is not finished after 10min, turn MNemo off and on again and restart the calibration.



