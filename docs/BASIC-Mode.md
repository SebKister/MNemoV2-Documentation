# BASIC Mode ( Recommended )

From the main menu select **SURVEY**
>NOTE: The KNOT mode of Mnemo v1 has been removed

You’ll notice a flashing _**green**_ screen displaying STANDBY or an icon as well as the direction selected for the survey ( IN is default but it can be changed using a [click command](BASIC-Mode-Clicks.md))

![screencap1702908880.png](/img/screencap1702908880.png)

>You can select in **OPTIONS > SETTINGS > UI(ICON or TEXT)** if you wish to have the text or the icon displayed in each phase of the survey

**From now on you don´t need to be able  to read what’s displayed on the screen. The color alone will give you information on which phase of the survey you are in.**

> In BASIC mode the slider button doesn’t work by impulses, you’ll have to hold the slider during a certain amount of time ( more or less 2s) to give and validate a SELECT or NEXT command.
> A red progress bar on the top screen will show the progress, the command only gets validated once the  progress bar is complete.
> 
> ![screencap1702387287.png](/img/screencap1702387287.png)

- From STANDBY mode, to start a section hold the slider left the screen turns WHITE, this indicates READY mode.

![screencap1702908903.png](/img/screencap1702908903.png)
> By default, in any BASIC survey mode all surveys are recorded IN and are named “BAS”. You can then later sort out the data on your favorite survey software.
- Clip the device on the line at the beginning of the first shot.
- Slide it a little along the line: if the screen blinks, the wheel is on the line *(v3.4.2+)*. See [Is the wheel on the line?](#is-the-wheel-on-the-line)
- Hold the slider left the background turns RED, you are in STABILIZE mode ( same as in Verbose survey mode).

![screencap1702387334.png](/img/screencap1702387334.png)
- Once stabilized, the device goes in READING mode, you can now move along the line, you’ll recognize the flickering BLUE/VIOLET square you already had in Verbose survey mode indicating the wheel is measuring the line

![screencap1702909323.png](/img/screencap1702909323.png)
- Once you reach the end of the shot hold the slider left again, the background turns RED, you are in STABILIZE mode.

![screencap1702387334.png](/img/screencap1702387334_1.png)
- Once stabilized the background becomes white again, you are back in READY mode.

![screencap1730996323.png](/img/screencap1730996323.png)
- You can repeat the operation for the following shots.
> ![INOUT](/img/curve32.png)
> 
> The curve icon you can see in the last picture indicates that the measurement of the azimuth at the start and the end of the shot has a difference of more than 5 degrees.  The exact difference is displayed over the curve ( In the example we have 7deg of difference)
> 
> ![](/img/depthissue.png)
> 
> You might also find this icon which signals the change in depth is bigger than the length of the line. This usually happens on very steep shots.  
> 
Once you have finished the section, when you are in READY mode, to save the section move the cursor to the right.
This will save the data and put the device back in STANDBY mode ( Blinking GREEN).


To exit BASIC survey mode, from the STANDBY mode, hold the cursor to the right during 3s.

> **On a long dive, see [ECO Mode](ECO-Mode.md)** _(v3.4.0+)_ — the same survey,
> the same clicks, drawn as a single small coloured dot on a black screen for about
> half the battery draw.

## Is the wheel on the line? *(v3.4.2+)* {#is-the-wheel-on-the-line}

You can check that the line runs through the wheel before you start a shot. In READY,
slide the MNemo a few centimetres along the line, slowly or briskly:

- **The screen blinks** between white and a dimmer, half-strength white: the wheel is
  turning, so the line is in it.
- **The screen stays plain white**: the wheel is not turning. Check that the line sits
  in the wheel and is tight enough (see [Tips and Tricks](tipsandtricks.md)).

About a second after you stop, the screen is plain white again.

Nothing is measured while you check: the screen keeps showing your last shot, and the
next shot is measured only once you start it. Nor does the check cost much
battery: in READY the wheel's sensors are never left on; they are only flashed for
an instant, 100 times a second, about 0.4 mA in all.

In [ECO](ECO-Mode.md) the small disc blinks the same way. If you changed READY's
colour with the `setcolor` [serial command](Serial-CLI.md), it is your colour that
blinks, between full and half strength. In BASIC, a colour so dark that READY's
black icon would vanish at half strength, such as a deep red or blue, blinks to a
lighter shade instead, and on a colour too dark for black writing, BASIC writes in
white.

## BASIC Mode Overview ##

![image_4.png](/img/image_4.png)





