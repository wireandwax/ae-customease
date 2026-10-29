# Custom Ease & Bezier Curve Control

A custom After Effects expression for controlling animation easing between two values using cubic Bézier curves.

The expression provides precise control over the timing and feel of motion, allowing you to create smooth, natural transitions beyond standard easing functions. Custom Bézier control points define the acceleration and deceleration of an animation, making it useful for motion graphics, procedural animation and reusable animation workflows.

## Features

- **Custom easing** — Control transitions between start and end values.
- **Cubic Bézier curves** — Shape acceleration and deceleration using four control parameters.
- **Time-based animation** — Define animation start and end times independently of the values.
- **Fallback behaviour** — Defaults to linear easing if the supplied Bézier points are invalid.

## Usage

Add the expression to a supported After Effects property:

```javascript
customEase(time, startTime, endTime, startValue, endValue, [x1, y1, x2, y2]);
```

### Parameters

- `time` — Current composition time.
- `startTime` — Animation start time.
- `endTime` — Animation end time.
- `startValue` — Initial property value.
- `endValue` — Target property value.
- `bezierPoints` — Array of control points `[x1, y1, x2, y2]` defining the easing curve.

If the Bézier points are invalid, the expression falls back to linear easing.

## Built With

- Adobe After Effects
- ExtendScript / JavaScript expressions
