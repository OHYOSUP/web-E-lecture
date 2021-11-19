document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  const slider = document.querySelector('#five');

  container.style.height = container.offsetHeight - slider.offsetHeight + slider.offsetWidth + 'px';    
  const containerHTMLCollection = container.children;
  const containerArray = [...containerHTMLCollection];

  let compiledHeight = 0;
  const childStyle = containerArray.map(child => {
      const childOffsetTop = child.offsetTop;

      const childOffsetHeight = child.offsetHeight;
      
      compiledHeight += childOffsetTop;
      child.style.position = 'fixed'
      child.style.top = compiledHeight + 'px';
      compiledHeight += childOffsetHeight;
      return {
          top: parseInt(child.style.top),
          left: parseInt(child.style.left)
      } 
  })
  

  let customScroll = {fixed: '', prevScroll: ''};
  
  let sliderSwitchedOn;
  let secondCondition;
  let thirdCondition;
  document.addEventListener('scroll', (event) => {
      const target = event.target;
      const scroll = window.scrollY;

      const topPadding = slider.offsetHeight/2;
      
      const scrollCondition = screen.width + slider.offsetLeft > 0
      const topCondition = slider.offsetTop - 15 <= topPadding;        
      
      if (!topCondition && !thirdCondition) {
          console.log('1');
          containerArray.forEach((child, index) => {      

              child.style.position = 'fixed'
              child.style.top = childStyle[index]['top'] - scroll + 'px';
              child.style.left = childStyle[index]['left'] + 'px';
          })
          sliderSwitchedOn = false;
  
      } else if ( topCondition && ( scrollCondition  || thirdCondition ) ) { 
          console.log('2');
          
          if(thirdCondition) {
              
              containerArray[4].style.left = customScroll.fixed - scroll >= 0
                  ? 0
                  : customScroll.fixed - scroll + 'px';

              thirdCondition = false;
              
          } else {

              if(!customScroll.fixed) customScroll.fixed = scroll;
              containerArray[4].style.left = customScroll.fixed - scroll >= 0
                  ? 0
                  : customScroll.fixed - scroll + 'px';
  
              if (containerArray[4].offsetLeft + screen.width <= 0) {
                  secondCondition = true;

              } else if(parseInt(containerArray[4].style.left) === 0 && sliderSwitchedOn) {
                  containerArray.forEach((child, index) => {      

                      child.style.position = 'fixed'
                      child.style.top = childStyle[index]['top'] - scroll + 'px';
                      child.style.left = childStyle[index]['left'] + 'px';
                  })
                  console.log('Hello');
                  secondCondition = false;
                  
              } else {
                  secondCondition = false;
              }
              sliderSwitchedOn = true;

          }
          
          
      } else if ( topCondition && !scrollCondition ) {
          console.log('3');
          if(!thirdCondition && secondCondition ) thirdCondition = true;
          if(!customScroll.prevScroll) customScroll.prevScroll = scroll;
          
          const checkTopValue = parseInt(containerArray[4].style.top) + customScroll.prevScroll - scroll <= topPadding 
              ? true
              : false;

          if(checkTopValue ) {
              containerArray.forEach((child, index) => {      
                  child.style.position = 'fixed'
                  child.style.top = parseInt(child.style.top) + customScroll.prevScroll - scroll  + 'px';
                  
              })
          }

          customScroll.prevScroll = scroll;
          
      } else {

      }
  })
})