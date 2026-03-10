# Survey Flow

## BASIC Mode

```mermaid
graph TD
    Start(Start Survey) --> Standby["🟢 STANDBY<br/>(Blinking Green)"]

    Standby -->|"Hold LEFT"| Ready["⬜ READY<br/>(White)"]
    Ready -->|"Hold LEFT"| Stabilize1["🔴 STABILIZE<br/>(Red) — Measuring Azimuth"]
    Stabilize1 -->|Auto| Reading["🔵 READING<br/>(Blue/Violet) — Measuring Distance"]
    Reading -->|"Hold LEFT at next station"| Stabilize2["🔴 STABILIZE<br/>(Red) — Measuring Azimuth"]
    Stabilize2 -->|Auto| Ready2["⬜ READY<br/>(White) — Next Shot"]

    Ready2 -->|"Hold LEFT"| Stabilize1
    Ready2 -->|"Hold RIGHT"| Save["💾 SAVE<br/>Section saved"]
    Save --> Standby

    Standby -->|"Hold RIGHT 3s"| Exit(Exit Survey)
```

## Verbose Mode

```mermaid
graph TD
    Start(Start Survey) --> Name["Enter Section Name<br/>(e.g. AA1)"]
    Name -->|OK| Direction[Select Direction]

    subgraph DirectionMenu [Direction]
        direction TB
        DirIn(IN)
        DirOut(OUT)
    end

    Direction --> DirIn
    Direction --> DirOut
    DirIn --> ReadyV["⬜ READY<br/>(White)"]
    DirOut --> ReadyV

    ReadyV -->|START| StabilizeV1["🔴 STABILIZE<br/>(Red) — Measuring Azimuth"]
    StabilizeV1 -->|Auto| ReadingV["🔵 READING<br/>(Blue/Violet) — Measuring Distance"]
    ReadingV -->|STOP| StabilizeV2["🔴 STABILIZE<br/>(Red) — Measuring Azimuth"]
    StabilizeV2 -->|Auto| ReadyV2["⬜ READY<br/>(White) — Next Shot"]

    ReadyV2 -->|START| StabilizeV1
    ReadyV2 -->|UNDO| ReadyV2
    ReadyV2 -->|END| Save["💾 SAVE<br/>Section saved"]
    ReadingV -->|BACK| ReadyV["⬜ READY"]
    Save --> Exit(Main Menu)
```

## Color Reference

| Color | Phase | Description |
|-------|-------|-------------|
| 🟢 Green (blinking) | Standby | Waiting to start a section |
| ⬜ White | Ready | Ready to begin a shot |
| 🔴 Red | Stabilize | Compass is measuring the azimuth — keep the device still |
| 🔵 Blue / Violet | Reading | Wheel is measuring the distance — move along the line |
