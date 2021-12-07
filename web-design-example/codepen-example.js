var hits = 0;
var hitElement = document.querySelector( '.hits' );

// **************************************
document.body.onkeyup = function(e) {
  if( e.keyCode == 32 ) {
    addHit();
  }
}



var addHit = function() {
  hits++;
  renderHits();
}

var renderHits = function() {
  hitElement.innerHTML = hits;
}

var resetHits = function() {
  hits = 0;
  renderHits();
}





// 이런방식은 구현 만시켜놓은 것 -> 범용적이진 않다.

const a = 1;
const b = 2;
const c = document;
// ****************************************************
function sum(selector, targetA, targetB) {
  selector.addEventListener('click', function() {
    return targetA + targetB;
  });
}
sum(d, a, 4);
// *****************************************************
c.addEventListener('click', function() {
  a + b;
})















Element.addEventListener()