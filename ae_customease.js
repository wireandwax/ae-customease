/**
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
 */


function customEase(t,tMin,tMax,value1,value2,bezierPoints)
{
	if(arguments.length!==6)return value;var a=value2-value1;var b=tMax-tMin;var c=clamp((t-tMin)/b,0,1);
	if(!(bezierPoints instanceof Array)||bezierPoints.length!==4)bezierPoints=[0,0,1,1];return a*h(c,bezierPoints)+value1;
	function h(f,g)
	{
	var x=3*g[0];var j=3*(g[2]-g[0])-x;
	var k=1-x-j;var l=3*g[1];var m=3*(g[3]-g[1])-l;var n=1-l-m;var d=f;
	for(var i=0;i<5;i++)
	{var z=d*(x+d*(j+d*k))-f;
	if(Math.abs(z)<1e-3)break;d-=z/(x+d*(2*j+3*k*d));}
	return d*(l+d*(m+d*n));
	}
}

// Use case

if (numKeys > 1){

var animationStartTime = key(1).time;
var animationEndTime = key(2).time;
var startValue = 0;
var endValue = 5;

customEase(time, animationStartTime, animationEndTime, startValue, endValue, [0.17, 0.17, 0.15, 1]);

}else value
