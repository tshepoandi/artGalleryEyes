let pupilsHTMLCollection = document.getElementsByClassName('pupil')
let pupilsArray = Array.from(pupilsHTMLCollection)



let input = {
    mouseX:{
        start:0,
        end: window.innerWidth,
        current:0,
    },
    mouseY: {
        start: 0,
        end: window.innerHeight,
        current: 0,
    }
 } 
input.mouseX.range = input.mouseX.end - input.mouseX.start;
input.mouseY.range = input.mouseY.end - input.mouseX.start;


 let output = {
    x:{ 
        start: -100,
        end: 100,
        current: 0,
    },
    y:{
        start: -100,
        end: 100,
        current:0,    
    }
 }
output.x.range = output.x.end - output.x.start 
output.y.range = output.y.end - output.y.start


let handleMouseMovement = (event) => {
    input.mouseX.current = event.clientX;
    input.mouseX.fraction = (input.mouseX.current - input.mouseX.start) / input.mouseX.range
  
    input.mouseY.current = event.clientY
    input.mouseY.fraction = (input.mouseY.current - input.mouseY.start) / input.mouseY.range 

    output.x.current = output.x.start + (input.mouseX.fraction * output.x.range)
    output.y.current = output.y.start + (input.mouseY.fraction * output.y.range)
    // console.log('output.x.current',output.x.current)
    
    pupilsArray.forEach((pupil,i)=>{
        pupil.style.transform = `translate(${output.x.current}px, ${output.y.current}px)`
    })
}



let handleResize = () => {
    input.mouseX.end = window.innerWidth - 200;
    input.mouseX.range = input.mouseX.end - input.mouseX.start;
    input.mouseY.end = window.innerWidth;
    input.mouseY.range = input.mouseY.end - input.mouseY.start; 
}
window.addEventListener('mousemove', handleMouseMovement)
window.addEventListener('resize', handleResize)