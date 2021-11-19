// Sets up values to control overshoot.  
// Link these to Slider expression controls to quickly preview different settings. 
var amp = 40; 
var freq = 30; 
var decay = 50; 
  
// Finds the most recent keyframe 
var nK = nearestKey(time); 
var n = (nK.time <= time) ? nK.index : --nK.index; 
var t = (n === 0) ? 0 : time - key(n).time; 
  
// If the current time is later than a keyframe, calculate overshoot. 
// If not, use original value. 
if ( n > 0 && t < 1 ) { 
    var v = velocityAtTime( key( n ).time - thisComp.frameDuration /10 );  
    value + v * amp * .001 * Math.sin(freq * .1 * t * 2 * Math.PI) / Math.exp(decay * .1 * t); 
} else { 
      value; 
}