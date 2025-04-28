
 * Custom Ease & Bezier Curve Control
 * -----------------------------------
 * Description:
 * A lightweight After Effects expression for custom easing between two values
 * over time using cubic Bezier curve control. Provides smoother and more natural 
 * motion compared to linear interpolation.
 *
 * Usage:
 * customEase(time, startTime, endTime, startValue, endValue, [x1, y1, x2, y2]);
 * 
 * Parameters:
 * - t        : Current time
 * - tMin     : Animation start time
 * - tMax     : Animation end time
 * - value1   : Start value
 * - value2   : End value
 * - bezierPoints : Array of Bezier control points [x1, y1, x2, y2]
 *
 * Notes:
 * - Defaults to linear easing [0, 0, 1, 1] if Bezier points are invalid.
 * - Designed for use in property expressions with keyframes.
 *
