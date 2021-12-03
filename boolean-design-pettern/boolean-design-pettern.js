


let switchMode = true;
let getValue = 0;
const onTimer = setInterval(() => {

  if (switchMode === true) {
    if (getValue <= 1) {
      getValue += 0.1;
      console.log(getValue.toFixed(1));
    } else {
      // clearInterval(onTimer);
      switchMode = false;
      return getvalue = 1;
    }
  }
  if (switchMode === false) {
    if (getValue >= 0) {
      getValue -= 0.1;
      console.log(getValue.toFixed(1));
    } else {
      switchMode = true;
      return getValue = 0;
    }
  }

}, 1000);