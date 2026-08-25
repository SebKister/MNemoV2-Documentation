# DMP File Format

**Format version 5 — specification for third-party software**

This page describes the content of `.dmp` files produced by the MNemo cave
surveying instrument, so that survey applications can import them. It is
self-contained: no access to the device or its firmware is required.

A DMP file is the MNemo's lossless export format. It contains every survey
*section* recorded since the device memory was last erased, each section holding a
sequence of fixed-size *shot* records. Files are obtained from the device's
[WiFi download page](WIFI-Data-transfer.md) or through
[MNemoLink](MNEMOLINK.md), and are named
`MNEMOYYMMDDHHMMSS.dmp` (two digits per date/time component, date of the
download).

---

## 1. File encoding

A DMP file is plain ASCII text: a single line of decimal integers separated by
semicolons `;`, with a trailing `;` after the last value and no line breaks.

Each value represents **one byte** of an underlying binary stream, rendered as a
**signed** 8-bit integer (−128…127). To recover the unsigned byte:

```
byte = value < 0 ? value + 256 : value        // i.e. value & 0xFF
```

Multi-byte fields are 16-bit **big-endian** integers spanning two consecutive
byte values:

```
u16 = (byte[0] << 8) | byte[1]
s16 = u16 reinterpreted as two's-complement signed
```

Example: `4;-46;` → bytes `4, 210` → `(4 << 8) | 210` = **1234**.
`-1;-42;` → bytes `255, 214` → 65494 → **−42** as a signed 16-bit value.

Parsers should tolerate surrounding whitespace and a missing trailing semicolon.
All structure descriptions below refer to the decoded byte stream; offsets are in
bytes.

## 2. Overall structure

```
DMP     := Section*
Section := SectionHeader ShotRecord* EOCRecord
```

There is no file-level header or trailer. Sections appear in recording order. A
section is normally closed by an end-of-cave (EOC) record; a section interrupted
by power loss may lack it (see §7).

## 3. Section header (13 bytes)

| Offset | Size | Field | Value / meaning |
|--------|------|-------|-----------------|
| 0 | 1 | Format version | `5` |
| 1 | 3 | Signature | `68, 89, 101` |
| 4 | 1 | Year | Two-digit year; add 2000 (e.g. `26` = 2026) |
| 5 | 1 | Month | 1–12 |
| 6 | 1 | Day | 1–31 |
| 7 | 1 | Hour | 0–23 (time the section was started) |
| 8 | 1 | Minute | 0–59 |
| 9 | 3 | Section name | 3 ASCII characters from `A`–`Z`, `0`–`9` |
| 12 | 1 | Direction | `0` = IN survey, `1` = OUT survey |

The 4-byte sequence `5, 68, 89, 101` is the **section signature** — the only
synchronization point in the stream. Parsers locate sections by scanning for it
(see §7).

Direction records which way the surveyor was traveling: IN = entering the cave,
OUT = exiting. It also determines which station the LRUD values describe (§5).

## 4. Shot record (35 bytes)

One record per survey shot (one leg between two stations). All 16-bit fields are
big-endian; signedness as listed.

| Offset | Size | Field | Type | Unit / meaning |
|--------|------|-------|------|----------------|
| 0 | 3 | Start code | — | `57, 67, 77` |
| 3 | 1 | Shot type | u8 | `0` = CSA, `1` = CSB, `2` = STD, `3` = EOC (see §6) |
| 4 | 2 | headingIn | u16 | Compass heading at the start of the shot, 1/10 degree (0–3599) |
| 6 | 2 | headingOut | u16 | Compass heading at the end of the shot, 1/10 degree (0–3599) |
| 8 | 2 | length | u16 | Distance traveled along the line, cm |
| 10 | 2 | depthIn | s16 | Depth at the start of the shot, cm |
| 12 | 2 | depthOut | s16 | Depth at the end of the shot, cm |
| 14 | 2 | pitchIn | s16 | Vertical angle at the start of the shot, 1/10 degree (−1799…+1799) |
| 16 | 2 | pitchOut | s16 | Vertical angle at the end of the shot, 1/10 degree |
| 18 | 2 | left | u16 | Passage dimension to the left, cm (see §5) |
| 20 | 2 | right | u16 | Passage dimension to the right, cm |
| 22 | 2 | up | u16 | Passage dimension upward, cm |
| 24 | 2 | down | u16 | Passage dimension downward, cm |
| 26 | 2 | temperature | s16 | Water temperature, 1/10 °C |
| 28 | 1 | hour | u8 | Time of day the shot was completed |
| 29 | 1 | minute | u8 | |
| 30 | 1 | second | u8 | |
| 31 | 1 | marker | u8 | `0` = no marker; `N` = user-set station marker number (see §5) |
| 32 | 3 | End code | — | `95, 25, 35` |

Angles are stored in tenths of a degree (`1234` = 123.4°), distances and depths in
centimeters, temperature in tenths of a degree Celsius.

## 5. LRUD and marker semantics

**LRUD** (left/right/up/down) values, when present, describe the passage
cross-section at the station where the surveyor entered them:

- On **IN** sections, they belong to the station the shot *arrives* at (the
  shot's "out" end).
- On **OUT** sections, they belong to the station the shot *departs* from (the
  shot's "in" end).

Zero in all four fields means no LRUD was entered for that shot.

**Marker** numbers are assigned from a device-wide counter when the user tags a
station during the survey. They generally increase in recording order, but the
counter can be reset by the user, so numbers may repeat across sections. `0`
means the shot carries no marker.

## 6. Shot types and the EOC record

| Value | Name | Meaning |
|-------|------|---------|
| 0 | `CSA` | Legacy type from older devices; not produced by current devices |
| 1 | `CSB` | Legacy type from older devices; not produced by current devices |
| 2 | `STD` | Standard measured shot — the only data-carrying type in current files |
| 3 | `EOC` | End-of-cave: terminates the section |

Importers must accept all four values, and should treat any type byte greater
than 3 as `EOC`.

A section is closed by a full 35-byte record of type `EOC` whose data fields are
**all zero**:

```
57;67;77;3;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;95;25;35;
```

The EOC record carries no measurement data and should not be imported as a shot.

## 7. Parsing rules

1. **Locate a section**: scan the byte stream for the signature `5, 68, 89, 101`.
   Bytes before a signature are garbage (e.g. remnants of an interrupted
   recording) and must be skipped.
2. **Read the header**: consume the 9 remaining header bytes (date, name,
   direction) immediately after the signature.
3. **Read records**: each must begin with `57, 67, 77` and end with `95, 25, 35`.
   On any mismatch, abandon the current section and resume signature scanning at
   the byte after the last valid position.
4. **End of section**: a record of type `3` (EOC) closes the section. A section
   may also end implicitly at end-of-file (unclosed section) or at a validation
   failure; shots already read remain valid.
5. **Empty sections** (a header followed immediately by an EOC record) may occur
   and can be ignored.
6. The start/end codes make accidental matches unlikely, but the format has no
   escaping: parse structurally (fixed 35-byte records) once inside a section,
   and only fall back to signature scanning after a validation failure.

## 8. Worked example

Two sections recorded the same day: an IN section `AB1` with two shots, then an
OUT section `AB2` with one shot. A machine-readable copy of this example is
available for download —
[dmp_file_format_sample.dmp](pathname:///dmp/dmp_file_format_sample.dmp) — a
useful first test case for an importer. Annotated (line breaks and comments
added for readability — a real file is a single unbroken line):

```
5;68;89;101;          section 1 signature (version 5)
26;8;25;14;30;        2026-08-25 14:30
65;66;49;             name "AB1" (ASCII)
0;                    direction IN

57;67;77;             shot 1 start code
2;                    type STD
4;-46;                headingIn  = 1234 → 123.4°
4;-30;                headingOut = 1250 → 125.0°
2;20;                 length     =  532 → 5.32 m
4;-35;                depthIn    = 1245 → 12.45 m
5;30;                 depthOut   = 1310 → 13.10 m
-1;-42;               pitchIn    =  -42 → -4.2°
-1;-39;               pitchOut   =  -39 → -3.9°
0;120;                left  = 120 → 1.20 m
0;-6;                 right = 250 → 2.50 m
0;80;                 up    =  80 → 0.80 m
0;-106;               down  = 150 → 1.50 m
0;-111;               temperature = 145 → 14.5 °C
14;32;5;              shot time 14:32:05
0;                    no marker
95;25;35;             shot end code

57;67;77;             shot 2 start code
2;                    type STD
8;52;                 headingIn  = 2100 → 210.0°
8;37;                 headingOut = 2085 → 208.5°
2;-58;                length     =  710 → 7.10 m
5;30;                 depthIn    = 1310 → 13.10 m (continues shot 1)
5;-76;                depthOut   = 1460 → 14.60 m
-1;-60;               pitchIn    =  -60 → -6.0°
-1;-55;               pitchOut   =  -55 → -5.5°
0;90;                 left  =  90 → 0.90 m
0;-116;               right = 140 → 1.40 m
0;60;                 up    =  60 → 0.60 m
0;-36;                down  = 220 → 2.20 m
0;-112;               temperature = 144 → 14.4 °C
14;35;41;             shot time 14:35:41
1;                    marker #1 set at this station
95;25;35;             shot end code

57;67;77;             shot start code
3;                    type EOC (closes section 1)
0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;
95;25;35;             shot end code

5;68;89;101;          section 2 signature (version 5)
26;8;25;15;10;        2026-08-25 15:10
65;66;50;             name "AB2" (ASCII)
1;                    direction OUT

57;67;77;             shot 1 start code
2;                    type STD
1;44;                 headingIn  =  300 → 30.0°
1;24;                 headingOut =  280 → 28.0°
2;-128;               length     =  640 → 6.40 m
5;-76;                depthIn    = 1460 → 14.60 m
5;45;                 depthOut   = 1325 → 13.25 m
0;48;                 pitchIn    =   48 → +4.8°
0;52;                 pitchOut   =   52 → +5.2°
0;0;                  left  = 0 ┐
0;0;                  right = 0 │ no LRUD entered
0;0;                  up    = 0 │
0;0;                  down  = 0 ┘
0;-110;               temperature = 146 → 14.6 °C
15;12;33;             shot time 15:12:33
0;                    no marker
95;25;35;             shot end code

57;67;77;             shot start code
3;                    type EOC (closes section 2)
0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;
95;25;35;             shot end code
```

## 9. Older format versions

This specification covers format version 5, the version produced by current
MNemo devices. Files from older firmware used lower version numbers with
different, smaller record layouts and are not covered here. A version-5 parser
identifies its sections by the exact signature `5, 68, 89, 101` and should
report — not misparse — files whose sections carry a different version byte.
